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


function translate(message, callback) {
	return getTranslationNoDynamicContent(message, insertDynamicString);

	function insertDynamicString(err, result) {
		if (err || !result || result.message.indexOf("%s") === -1) {
			return callback(err, result && result.translation.message);
		}
		var errorMessageNoDynamicContent = result.message;
		var leftRight = errorMessageNoDynamicContent.split("%s");
		var leftStart = leftRight[0].length;
		var dynamicContentLength = message.length - errorMessageNoDynamicContent.length + 2;
		var dynamicContent = message.substr(leftStart, dynamicContentLength);
		return callback(null, result.translation.message.replace("%s", dynamicContent));
	}
}

var allErrors;
function getTranslationNoDynamicContent(message, callback) {
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
			return callback(null, allErrors.matchExact[message]);
		}
		var match = allErrors.matchFromLeft;
		var matchesLeft = {};
		var checkMatch = [];
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
					checkMatch.push(match);
				} else {
					noNeedToMatchLeft = match.message.indexOf("%s") === 0 ||
						match.message.indexOf("%s") === 1;
					if (noNeedToMatchLeft) {
						checkMatch.push(match);
					}
				}
			}
			if (match.errors) {
				for (var k = 0; k < match.errors.length; k++) {
					var error = match.errors[k];
					if (matchesLeft[error.id]) {
						checkMatch.push(error);
					}
					noNeedToMatchLeft = error.message.indexOf("%s") === 0 ||
						error.message.indexOf("%s") === 1;
					if (noNeedToMatchLeft) {
						checkMatch.push(error);
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
				checkMatch.push(matchesLeft[potentialMatch]);
			}
		}
		var m = checkMatch
			.map(function (match) {
				return {
					match: match,
					value: getMatchValue(message, match.message)
				};
			})
			.filter(function (m) {
				return m.value > 0;
			})
			.sort(function (a, b) {
				if (a.value > b.value) {
					return -1;
				}
				if (a.value < b.value) {
					return 1;
				}
				return 0;
			})[0];
		return callback(null, m && m.match);

		function errorMatchesLeft(error) {
			matchesLeft[error.id] = error;
		}
	}

	function getMatchValue(originalMessage, potentialTranslationMatch) {
		var potentialTranslationMatchChars = potentialTranslationMatch.replace("%s", "").split("");
		var originalMessageChars = originalMessage.split("");
		var lengthDiff = originalMessageChars.length - potentialTranslationMatchChars.length;
		if (lengthDiff < 0) {
			return false;
		}
		var charMatchesCount = 0;
		var minLength = Math.min(potentialTranslationMatchChars.length, originalMessageChars.length);
		var i;
		for (i = 0; i < minLength; i++) {
			if (originalMessageChars[i] === potentialTranslationMatchChars[i]) {
				charMatchesCount++;
			} else {
				break;
			}
		}
		for (i = potentialTranslationMatchChars.length - 1; i > 0; i--) {
			if (originalMessageChars[i + lengthDiff] === potentialTranslationMatchChars[i]) {
				charMatchesCount++;
			} else {
				break;
			}
		}
		return charMatchesCount >= potentialTranslationMatchChars.length - 1 ? charMatchesCount : 0;
	}
}
translate.getAllErrors = getAllErrors;
module.exports = translate;