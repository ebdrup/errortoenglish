var fs = require("fs");
var path = require("path");
var format = require("util").format;
var quotemeta = require ("quotemeta");

var targetLanguageFilename = "en-US.txt";
var testDynamicString = "MyDynamicTestString";
var testTemplate = fs.readFileSync(
	path.join(__dirname, "templates/test-template.js"),
	{encoding: "utf-8"}
);

var targetLines = mapFileContentToStrings({
	content: fs.readFileSync(
		path.join(__dirname, "../lib/jserrors", targetLanguageFilename),
		{encoding: "utf-8"}
	)
}).lines;

var files = fs.readdirSync(path.join(__dirname, "../lib/jserrors"));
var fileLines = files
	.filter(function (file) {
		return file !== targetLanguageFilename;
	})
	.map(function (filename) {
		return {
			languageCode: filename.split(".")[0],
			content: fs.readFileSync(path.join(__dirname, "../lib/jserrors", filename), {encoding: "utf-8"})
		};
	})
	.map(mapFileContentToStrings);

fileLines.forEach(function(file){
	var hash = {};
	file.lines = file.lines.map(function(line, index){
		var targets;
		if(hash[line]){
			//same error massage present twice, same target by ref
			targets = hash[line];
		} else{
			targets =[];
			hash[line] = targets;
		}
		targets.push(targetLines[index].replace("%s", testDynamicString));
		return {
			original: line.replace("%s", testDynamicString),
			targets:targets
		};

	});
});

fileLines
	.map(function (file) {
		var tests = [];
		for (var i = 0; i < file.lines.length; i++) {
			tests.push(testTemplate.replace(/\{\{languangeCode\}\}/g, file.languageCode)
				.replace(/\{\{englishTexts\}\}/g, file.lines[i].targets.join(" or "))
				.replace(/\{\{englishRegExp\}\}/g, file.lines[i].targets.map(quotemeta).join("|"))
				.replace(/\{\{originalString\}\}/g, JSON.stringify(file.lines[i].original).replace(/^"/, "").replace(/"$/, ""))
			);
		}
		return { tests: "var errorToEnglish = require(\"../../lib/errortoenglish\");\n" + tests.join(""), languageCode: file.languageCode};
	}).forEach(function (testFile) {
		fs.writeFileSync(path.join(__dirname, format("../test/generatedTests/%s.spec.js", testFile.languageCode)), testFile.tests);
	});


function mapFileContentToStrings(file) {
	return {
		languageCode: file.languageCode,
		lines: file.content.toString().split("\r\n")
			.filter(function (line) {
				return !/^\s*$/.test(line);
			})
			.map(function (line) {
				var message = line.substr(line.indexOf(",") + 1);
				return message.trim();
			})
	};
}

