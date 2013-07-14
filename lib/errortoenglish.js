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
			var matchDynamic = [];
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
					matchDynamic.push(error);
				}

			});
			return callback(null, {
				matchExact: matchExact,
				matchFromLeft: getMatchObject(matchDynamic, "leftMatchString"),
				matchFromRight: getMatchObject(matchDynamic, "rightMatchString")
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
						var message = code2.length > code1.length ? line.substr(line.indexOf(",") + 1) : line.substr(0, line.lastIndexOf(","));
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

function getMatchObject(errors, property, depth) {
	depth = depth || 0;
	var hash = {};
	errors.forEach(function (error) {
		var char = error[property].substr(depth, 1);
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
			hash[prop] = getMatchObject(hash[prop], property, depth + 1);
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
		var matchesRightCompletely;
		for (var i = 0; i < message.length; i++) {
			var char = message.substr(i, 1);
			match = match[char];
			if (!match) {
				break;
			}
			if (match.id) {
				matchesLeft[match.id] = match;
			}
			if (match.errors) {
				match.errors.forEach(errorMatchesLeft);
			}
		}
		match = allErrors.matchFromRight;
		var noNeedToMatchLeft;
		for (var j = message.length - 1; j >= 0; j--) {
			var charRight = message.substr(j, 1);
			match = match[charRight];
			if (!match) {
				break;
			}
			if (match.id) {
				if (matchesLeft[match.id]) {
					return callback(null, match.translation);
				} else {
					noNeedToMatchLeft = match.message.indexOf("%s") === 0 ||
						match.message.indexOf("%s") === 1;
					if (noNeedToMatchLeft) {
						matchesRightCompletely = match;
					}
				}
			}
			if (match.errors) {
				for (var k = 0; k < match.errors.length; k++) {
					var error = match.errors[k];
					if (matchesLeft[error.id]) {
						return callback(null, error.translation);
					}
					noNeedToMatchLeft = error.message.indexOf("%s") === 0 ||
						error.message.indexOf("%s") === 1;
					if (noNeedToMatchLeft) {
						matchesRightCompletely = error;
					}
				}
			}
		}
		for (var potentialMatch in  matchesLeft) {
			var potentialMessage = matchesLeft[potentialMatch].message;
			var dynamicStringPosition = potentialMessage.indexOf("%s");
			var noNeedToMatchRight = dynamicStringPosition === potentialMessage.length - 2 ||
				dynamicStringPosition === potentialMessage.length - 3;
			if (noNeedToMatchRight) {
				return callback(null, matchesLeft[potentialMatch].translation);
			}
		}
		return callback(null, matchesRightCompletely && matchesRightCompletely.translation);

		function errorMatchesLeft(error) {
			matchesLeft[error.id] = error;
		}
	}
}
translate.getAllErrors = getAllErrors;
module.exports = translate;