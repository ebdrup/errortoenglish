var fs = require("fs");
var path = require("path");
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
var tests = files.filter(function (file) {
    return file !== targetLanguageFilename;
})
    .map(function (filename) {
        return {
            languageCode: filename.split(".")[0],
            content: fs.readFileSync(path.join(__dirname, "../lib/jserrors", filename), {encoding: "utf-8"})
        };
    })
    .map(mapFileContentToStrings)
    .map(function (file) {
        var tests = [];
        for (var i = 0; i < file.lines.length; i++) {
            if(targetLines[i]===file.lines[i]){
                continue; //no translation needed
            }
            tests.push(testTemplate.replace(/\{\{languangeCode\}\}/g, file.languageCode)
                .replace(/\{\{englishString\}\}/g, targetLines[i])
                .replace(/\{\{originalString\}\}/g, JSON.stringify(file.lines[i].replace("%s", testDynamicString)).replace(/^"/, "").replace(/"$/, ""))
            );
        }
        return tests.join("");
    }).join("");


function mapFileContentToStrings(file) {
    return {
        languageCode: file.languageCode,
        lines: file.content.toString().split("\r\n").filter(function(line){
                return !/^\s*$/.test(line);
            })
            .map(function (line) {
                var code1 = line.substr(0, line.indexOf(","));
                var code2 = line.substr(line.lastIndexOf(","));
                var message = code2.length > code1.length ? line.substr(line.indexOf(",") + 1) : line.substr(0, line.lastIndexOf(","));
                return message.trim();
            })
    };
}

tests = "var errorToEnglish = require(\"../lib/errortoenglish\");\n" + tests;

fs.writeFileSync(path.join(__dirname, "../test/generatedTests.spec.js"), tests);
