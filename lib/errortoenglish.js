var fs = require("fs");
var path = require("path");
var async = require("async");
var targetLanguageFilename = "en-US.txt";

function getAllErrors(callback) {
    return getParseSingleErrorFileTask(targetLanguageFilename)(readDirectory);

    function readDirectory(err, targetLanguageErrors) {
        if (err) {
            return callback(err);
        }
        fs.readdir(path.join(__dirname, "jserrors"), parseErrorFiles);

        function parseErrorFiles(err, files) {
            if (err) {
                return callback(err);
            }
            var tasks = files
                .filter(function (filename) {
                    return filename.indexOf(targetLanguageFilename) === -1;
                })
                .map(getParseSingleErrorFileTask);
            return async.parallel(tasks, prepareAllLinesForLookup);
        }

        function prepareAllLinesForLookup(err, results) {
            if (err) {
                return callback(err);
            }
            var matchExact = {};
            var matchFromLeft = [];
            var matchFromRight = [];
            var matchLeftHash = {};
            var matchRightHash = {};
            results.forEach(function (errors) {
                //detect errors that must match from left or right due to duplicates when matching from specific direction
                for (var i = 0; i < errors.length; i++) {
                    var error = errors[i];
                    error.translation = targetLanguageErrors[i];
                    error.id = error.languageCode + "_" + i;
                    var message = error.message;
                    if (message.indexOf("%s") === -1) {
                        matchExact[message] = error;
                        continue;
                    }
                    error.leftMatchString = message.substr(0, message.indexOf("%s"));
                    error.rightMatchString = message.substr(message.lastIndexOf("%s") + 2).split("").reverse().join("");
                    if (error.leftMatchString.length > error.rightMatchString.length) {
                        if (matchLeftHash[error.leftMatchString]) {
                            //somebody already matching on this
                            var dupError = matchLeftHash[error.leftMatchString];
                            dupError.matchRight = true;
                            matchRightHash[dupError.rightMatchString] = dupError;
                            matchRightHash[error.rightMatchString] = error;
                            error.matchRight = true;
                            continue;
                        }
                        matchLeftHash[error.leftMatchString] = error;
                        error.matchLeft = true;
                        continue;
                    }
                    if (matchRightHash[error.rightMatchString]) {
                        //somebody already matching on this
                        var dupRightError = matchRightHash[error.rightMatchString];
                        dupRightError.matchLeft = true;
                        matchLeftHash[dupRightError.leftMatchString] = dupRightError;
                        matchLeftHash[error.leftMatchString] = error;
                        error.matchLeft = true;
                        continue;
                    }
                    matchRightHash[error.leftMatchString] = error;
                    error.matchRight = true;
                }
                errors.forEach(function (error) {
                    if (error.matchLeft) {
                        error.matchString = error.leftMatchString;
                        matchFromLeft.push(error);
                    }
                    if (error.matchRight) {
                        error.matchString = error.rightMatchString;
                        matchFromRight.push(error);
                    }
                });

            });
            return callback(null, {
                matchExact: matchExact,
                matchFromLeft: getMatchObject(matchFromLeft),
                matchFromRight: getMatchObject(matchFromRight)
            });
        }
    }

    function getParseSingleErrorFileTask(filename) {
        var languageCode = filename.split(".")[0];
        return function (callback) {
            return fs.readFile(path.join(__dirname, "jserrors", filename), parseSingleErrorFile);

            function parseSingleErrorFile(err, content) {
                if (err) {
                    return callback(err);
                }
                var lines = content.toString().split("\r\n")
                    .filter(function (line) {
                        return !/^\s*$/.test(line);
                    })
                    .map(function (line) {
                        var code1 = line.substr(0, line.indexOf(","));
                        var code2 = line.substr(line.lastIndexOf(","));
                        var code = code2.length < code1.length ? code2 : code1;
                        var message = line.substr(line.indexOf(",") + 1);
                        //console.log("code", code, "message", message, filename);
                        return {
                            code: code,
                            message: message.trim(),
                            languageCode: languageCode
                        };
                    });
                return callback(null, lines);
            }
        };
    }
}

function getMatchObject(errors, depth) {
    depth = depth || 0;
    var hash = {};
    errors.forEach(function (error) {
        var char = error.matchString.substr(depth, 1);
        if (!char) {
            hash.errors = hash.errors || [];
            hash.errors.push(error);
            return;
        }
        if (!hash[char]) {
            hash[char] = error;
            return;
        }
        if (!Array.isArray(hash[char])) {
            hash[char] = [hash[char], error];
            return;
        }
        hash[char].push(error);
    });
    for (var prop in hash) {
        if (prop !== "errors" && Array.isArray(hash[prop])) {
            hash[prop] = getMatchObject(hash[prop], depth + 1);
        }
    }
    return hash;
}


var allErrors;
function translate(message, callback) {
    if (!allErrors) {
        return getAllErrors(function (err, _allErrors) {
            if (err) {
                return callback(err);
            }
            allErrors = _allErrors;
            return getTranslation();
        });
    }
    return getTranslation();

    function getTranslation() {
        if (allErrors.matchExact[message]) {
            return callback(null, allErrors.matchExact[message].translation);
        }
        var match = allErrors.matchFromLeft;
        var matchesLeft = {};
        for (var i = 0; i < message.length; i++) {
            var char = message.substr(i, 1);
            match = match[char];
            if(!match){
                break;
            }
            if (match.id) {
                if (match.matchRight) {
                    matchesLeft[match.id] = true;
                    break;
                }
                return callback(null, match.translation);
            }
            if (match.errors) {
                match.errors.forEach(errorMatchesLeft);
            }
        }
        match = allErrors.matchFromRight;
        for (var j = message.length - 1; j >= 0; j--) {
            var charRight = message.substr(j, 1);
            match = match[charRight];
            if(!match){
                return callback();
            }
            if (match.id) {
                if (!match.matchLeft) {
                    return callback(null, match.translation);
                } else {
                    if (matchesLeft[match.id]) {
                        return callback(null, match.translation);
                    }
                    break;
                }

            }
            if (match.errors) {
                for(var k=0; k<match.errors.length; k++){
                    var error = match.errors[k];
                    if (matchesLeft[error.id]) {
                        return callback(null, error.translation);
                    }
                }
            }
        }
        return callback();

        function errorMatchesLeft(error) {
            matchesLeft[error.id] = true;
        }
    }
}
translate.getAllErrors = getAllErrors;
module.exports = translate;