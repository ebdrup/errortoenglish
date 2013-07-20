var errorToEnglish = require("../../lib/errortoenglish");
describe("translating hr-HR string: Invalid procedure call or argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid procedure call or argument", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
	});
});
describe("translating hr-HR string: Overflow", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Overflow", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
	});
});
describe("translating hr-HR string: Out of memory", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Out of memory", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
	});
});
describe("translating hr-HR string: Subscript out of range", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Subscript out of range", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
	});
});
describe("translating hr-HR string: This array is fixed or temporarily locked", function () {
	var translation;
	before(function (done) {
		errorToEnglish("This array is fixed or temporarily locked", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
	});
});
describe("translating hr-HR string: Division by zero", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Division by zero", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
	});
});
describe("translating hr-HR string: Type mismatch", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type mismatch", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
	});
});
describe("translating hr-HR string: Out of string space", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Out of string space", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
	});
});
describe("translating hr-HR string: Can't perform requested operation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Can't perform requested operation", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
	});
});
describe("translating hr-HR string: Out of stack space", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Out of stack space", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
	});
});
describe("translating hr-HR string: Sub or Function not defined", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub or Function not defined", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
	});
});
describe("translating hr-HR string: Error in loading DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error in loading DLL", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
	});
});
describe("translating hr-HR string: Internal error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Internal error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
	});
});
describe("translating hr-HR string: Bad file name or number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bad file name or number", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
	});
});
describe("translating hr-HR string: File not found", function () {
	var translation;
	before(function (done) {
		errorToEnglish("File not found", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
	});
});
describe("translating hr-HR string: Bad file mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bad file mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
	});
});
describe("translating hr-HR string: File already open", function () {
	var translation;
	before(function (done) {
		errorToEnglish("File already open", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
	});
});
describe("translating hr-HR string: Device I/O error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Device I/O error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
	});
});
describe("translating hr-HR string: File already exists", function () {
	var translation;
	before(function (done) {
		errorToEnglish("File already exists", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
	});
});
describe("translating hr-HR string: Disk full", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disk full", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
	});
});
describe("translating hr-HR string: Input past end of file", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Input past end of file", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
	});
});
describe("translating hr-HR string: Too many files", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Too many files", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
	});
});
describe("translating hr-HR string: Device unavailable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Device unavailable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
	});
});
describe("translating hr-HR string: Permission denied", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Permission denied", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
	});
});
describe("translating hr-HR string: Disk not ready", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disk not ready", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
	});
});
describe("translating hr-HR string: Can't rename with different drive", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Can't rename with different drive", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
	});
});
describe("translating hr-HR string: Path/File access error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Path/File access error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
	});
});
describe("translating hr-HR string: Path not found", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Path not found", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
	});
});
describe("translating hr-HR string: Object variable or With block variable not set", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object variable or With block variable not set", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
	});
});
describe("translating hr-HR string: For loop not initialized", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For loop not initialized", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
	});
});
describe("translating hr-HR string: Invalid use of Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid use of Null", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
	});
});
describe("translating hr-HR string: Can't create necessary temporary file", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Can't create necessary temporary file", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
	});
});
describe("translating hr-HR string: Object required", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object required", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
	});
});
describe("translating hr-HR string: Automation server can't create object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automation server can't create object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
	});
});
describe("translating hr-HR string: Class doesn't support Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Class doesn't support Automation", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
	});
});
describe("translating hr-HR string: File name or class name not found during Automation operation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("File name or class name not found during Automation operation", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
	});
});
describe("translating hr-HR string: Object doesn't support this property or method", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object doesn't support this property or method", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
	});
});
describe("translating hr-HR string: Automation error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automation error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
	});
});
describe("translating hr-HR string: Object doesn't support this action", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object doesn't support this action", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
	});
});
describe("translating hr-HR string: Object doesn't support named arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object doesn't support named arguments", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
	});
});
describe("translating hr-HR string: Object doesn't support current locale setting", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object doesn't support current locale setting", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
	});
});
describe("translating hr-HR string: Named argument not found", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Named argument not found", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
	});
});
describe("translating hr-HR string: Argument not optional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument not optional", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
	});
});
describe("translating hr-HR string: Wrong number of arguments or invalid property assignment", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wrong number of arguments or invalid property assignment", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
	});
});
describe("translating hr-HR string: Object not a collection", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object not a collection", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
	});
});
describe("translating hr-HR string: Specified DLL function not found", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Specified DLL function not found", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
	});
});
describe("translating hr-HR string: Variable uses an Automation type not supported in JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variable uses an Automation type not supported in JavaScript", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
	});
});
describe("translating hr-HR string: The remote server machine does not exist or is unavailable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The remote server machine does not exist or is unavailable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
	});
});
describe("translating hr-HR string: Cannot assign to variable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot assign to variable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
	});
});
describe("translating hr-HR string: Object not safe for scripting", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object not safe for scripting", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
	});
});
describe("translating hr-HR string: Object not safe for initializing", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object not safe for initializing", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
	});
});
describe("translating hr-HR string: Object not safe for creating", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object not safe for creating", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
	});
});
describe("translating hr-HR string: An exception occurred", function () {
	var translation;
	before(function (done) {
		errorToEnglish("An exception occurred", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
	});
});
describe("translating hr-HR string: Out of memory", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Out of memory", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
	});
});
describe("translating hr-HR string: Syntax error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntax error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
	});
});
describe("translating hr-HR string: Expected ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected ':'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
	});
});
describe("translating hr-HR string: Expected ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected ';'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
	});
});
describe("translating hr-HR string: Expected '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected '('", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
	});
});
describe("translating hr-HR string: Expected ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected ')'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
	});
});
describe("translating hr-HR string: Expected ']'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected ']'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
	});
});
describe("translating hr-HR string: Expected '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected '{'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
	});
});
describe("translating hr-HR string: Expected '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected '}'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
	});
});
describe("translating hr-HR string: Expected identifier", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected identifier", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
	});
});
describe("translating hr-HR string: Expected '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected '='", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
	});
});
describe("translating hr-HR string: Expected '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected '/'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
	});
});
describe("translating hr-HR string: Invalid number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid number", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
	});
});
describe("translating hr-HR string: Invalid character", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid character", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
	});
});
describe("translating hr-HR string: Unterminated string constant", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unterminated string constant", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
	});
});
describe("translating hr-HR string: Unterminated comment", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unterminated comment", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
	});
});
describe("translating hr-HR string: 'return' statement outside of function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'return' statement outside of function", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
	});
});
describe("translating hr-HR string: Can't have 'break' outside of loop", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Can't have 'break' outside of loop", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
	});
});
describe("translating hr-HR string: Can't have 'continue' outside of loop", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Can't have 'continue' outside of loop", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
	});
});
describe("translating hr-HR string: Expected hexadecimal digit", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected hexadecimal digit", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
	});
});
describe("translating hr-HR string: Expected 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected 'while'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
	});
});
describe("translating hr-HR string: Label redefined", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Label redefined", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
	});
});
describe("translating hr-HR string: Label not found", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Label not found", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
	});
});
describe("translating hr-HR string: 'default' can only appear once in a 'switch' statement", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' can only appear once in a 'switch' statement", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
	});
});
describe("translating hr-HR string: Expected identifier, string or number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected identifier, string or number", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
	});
});
describe("translating hr-HR string: Expected '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected '@end'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
	});
});
describe("translating hr-HR string: Conditional compilation is turned off", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Conditional compilation is turned off", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
	});
});
describe("translating hr-HR string: Expected constant", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected constant", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
	});
});
describe("translating hr-HR string: Expected '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected '@'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
	});
});
describe("translating hr-HR string: Expected 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected 'catch'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
	});
});
describe("translating hr-HR string: Expected 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected 'var'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
	});
});
describe("translating hr-HR string: 'throw' must be followed by an expression on the same source line", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'throw' must be followed by an expression on the same source line", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
	});
});
describe("translating hr-HR string: 'with' statements are not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'with' statements are not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Duplicate formal parameter names not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Duplicate formal parameter names not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Octal numeric literals and escape characters not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Octal numeric literals and escape characters not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Invalid usage of 'eval' in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid usage of 'eval' in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Invalid usage of 'arguments' in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid usage of 'arguments' in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Calling delete on expression not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Calling delete on expression not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Multiple definitions of a property not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Multiple definitions of a property not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
	});
});
describe("translating hr-HR string: The use of a keyword for an identifier is invalid", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The use of a keyword for an identifier is invalid", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
	});
});
describe("translating hr-HR string: The use of a future reserved word for an identifier is invalid", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The use of a future reserved word for an identifier is invalid", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
	});
});
describe("translating hr-HR string: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
	});
});
describe("translating hr-HR string: Setter functions must have one argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Setter functions must have one argument", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
	});
});
describe("translating hr-HR string: JavaScript compilation error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript compilation error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
	});
});
describe("translating hr-HR string: JavaScript runtime error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript runtime error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
	});
});
describe("translating hr-HR string: Unknown runtime error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unknown runtime error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
	});
});
describe("translating hr-HR string: Cannot assign to 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot assign to 'this'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
	});
});
describe("translating hr-HR string: Number expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Number expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
	});
});
describe("translating hr-HR string: Function expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Function expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating hr-HR string: Cannot assign to a function result", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot assign to a function result", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
	});
});
describe("translating hr-HR string: Cannot index object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot index object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
	});
});
describe("translating hr-HR string: String expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("String expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
	});
});
describe("translating hr-HR string: Date object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Date object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Invalid left-hand side in assignment", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid left-hand side in assignment", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
	});
});
describe("translating hr-HR string: Undefined identifier", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Undefined identifier", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
	});
});
describe("translating hr-HR string: Boolean expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boolean expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
	});
});
describe("translating hr-HR string: Can't execute code from a freed script", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Can't execute code from a freed script", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
	});
});
describe("translating hr-HR string: Object member expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object member expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
	});
});
describe("translating hr-HR string: VBArray expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
	});
});
describe("translating hr-HR string: JavaScript object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
	});
});
describe("translating hr-HR string: Enumerator object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enumerator object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
	});
});
describe("translating hr-HR string: Regular Expression object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Regular Expression object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
	});
});
describe("translating hr-HR string: Syntax error in regular expression", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntax error in regular expression", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
	});
});
describe("translating hr-HR string: Unexpected quantifier", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unexpected quantifier", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
	});
});
describe("translating hr-HR string: Expected ']' in regular expression", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected ']' in regular expression", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
	});
});
describe("translating hr-HR string: Expected ')' in regular expression", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Expected ')' in regular expression", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
	});
});
describe("translating hr-HR string: Invalid range in character set", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid range in character set", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
	});
});
describe("translating hr-HR string: Exception thrown and not caught", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Exception thrown and not caught", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
	});
});
describe("translating hr-HR string: Function does not have a valid prototype object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Function does not have a valid prototype object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
	});
});
describe("translating hr-HR string: The URI to be encoded contains an invalid character", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The URI to be encoded contains an invalid character", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
	});
});
describe("translating hr-HR string: The URI to be decoded is not a valid encoding", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The URI to be decoded is not a valid encoding", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
	});
});
describe("translating hr-HR string: The number of fractional digits is out of range", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The number of fractional digits is out of range", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
	});
});
describe("translating hr-HR string: The precision is out of range", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The precision is out of range", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
	});
});
describe("translating hr-HR string: Array or arguments object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array or arguments object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
	});
});
describe("translating hr-HR string: Array length must be a finite positive integer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array length must be a finite positive integer", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
	});
});
describe("translating hr-HR string: Array length must be assigned a finite positive number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array length must be assigned a finite positive number", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
	});
});
describe("translating hr-HR string: Array object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
	});
});
describe("translating hr-HR string: Circular reference in value argument not supported", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Circular reference in value argument not supported", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
	});
});
describe("translating hr-HR string: Invalid replacer argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid replacer argument", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
	});
});
describe("translating hr-HR string: Argument list too large to apply", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument list too large to apply", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
	});
});
describe("translating hr-HR string: Redeclaration of const property", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Redeclaration of const property", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
	});
});
describe("translating hr-HR string: Object member not configurable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object member not configurable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
	});
});
describe("translating hr-HR string: Variable undefined in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variable undefined in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accessing the 'callee' property of an arguments object is not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Assignment to read-only properties is not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Assignment to read-only properties is not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Cannot create property for a non-extensible object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot create property for a non-extensible object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Function expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Function expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating hr-HR string: Function expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Function expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating hr-HR string: Property cannot have both accessors and a value", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Property cannot have both accessors and a value", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
	});
});
describe("translating hr-HR string: 'this' is null or undefined", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is null or undefined", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Function expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Function expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating hr-HR string: String expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("String expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
	});
});
describe("translating hr-HR string: Boolean expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boolean expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
	});
});
describe("translating hr-HR string: Date expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Date expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
	});
});
describe("translating hr-HR string: Number expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Number expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
	});
});
describe("translating hr-HR string: VBArray expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
	});
});
describe("translating hr-HR string: JavaScript object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
	});
});
describe("translating hr-HR string: Enumerator object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enumerator object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
	});
});
describe("translating hr-HR string: RegExp object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("RegExp object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
	});
});
describe("translating hr-HR string: Invalid function argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid function argument", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: JavaScript object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
	});
});
describe("translating hr-HR string: Function expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Function expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating hr-HR string: VBArray expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating hr-HR string: Invalid 'length' property", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid 'length' property", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
	});
});
describe("translating hr-HR string: Array or arguments object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array or arguments object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
	});
});
describe("translating hr-HR string: Invalid Operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid Operand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
	});
});
describe("translating hr-HR string: Invalid Operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid Operand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
	});
});
describe("translating hr-HR string: Invalid property descriptor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid property descriptor", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
	});
});
describe("translating hr-HR string: Cannot define property: object is not extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot define property: object is not extensible", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
	});
});
describe("translating hr-HR string: Cannot redefine non-configurable property", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot redefine non-configurable property", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
	});
});
describe("translating hr-HR string: Cannot modify non-writable property", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot modify non-writable property", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
	});
});
describe("translating hr-HR string: Cannot modify property: 'length' is not writable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot modify property: 'length' is not writable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
	});
});
describe("translating hr-HR string: Cannot define property", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot define property", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
	});
});
describe("translating hr-HR string: Typed array constructor argument is invalid", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typed array constructor argument is invalid", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
	});
});
describe("translating hr-HR string: 'this' is not a typed array object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is not a typed array object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
	});
});
describe("translating hr-HR string: Invalid offset/length when creating typed array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid offset/length when creating typed array", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
	});
});
describe("translating hr-HR string: Invalid begin/end value in typed array subarray method", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid begin/end value in typed array subarray method", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
	});
});
describe("translating hr-HR string: Invalid source in typed array set", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid source in typed array set", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
	});
});
describe("translating hr-HR string: 'this' is not a DataView object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is not a DataView object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
	});
});
describe("translating hr-HR string: Invalid arguments in DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid arguments in DataView", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
	});
});
describe("translating hr-HR string: DataView operation access beyond specified buffer length", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView operation access beyond specified buffer length", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
	});
});
describe("translating hr-HR string: Invalid arguments in DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid arguments in DataView", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
	});
});
describe("translating hr-HR string: invalid function signature", function () {
	var translation;
	before(function (done) {
		errorToEnglish("invalid function signature", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
	});
});
describe("translating hr-HR string: invalid property signature", function () {
	var translation;
	before(function (done) {
		errorToEnglish("invalid property signature", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
	});
});
describe("translating hr-HR string: invalid input parameter type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("invalid input parameter type", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
	});
});
describe("translating hr-HR string: invalid ouput parameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("invalid ouput parameter", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
	});
});
describe("translating hr-HR string: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accessing the 'arguments' property of a function is not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Inspectable Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inspectable Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
	});
});
describe("translating hr-HR string: Could not convert argument to type 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert argument to type 'char'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
	});
});
describe("translating hr-HR string: Could not convert argument to type 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert argument to type 'GUID'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
	});
});
describe("translating hr-HR string: IInspectable expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
	});
});
describe("translating hr-HR string: Could not convert object to struct: object missing expected property", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert object to struct: object missing expected property", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
	});
});
describe("translating hr-HR string: Unknown type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unknown type", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
	});
});
describe("translating hr-HR string: Function called with too few arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Function called with too few arguments", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
	});
});
describe("translating hr-HR string: Type is not constructible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type is not constructible", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
	});
});
describe("translating hr-HR string: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert value to PropertyValue: Type not supported by PropertyValue", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
	});
});
describe("translating hr-HR string: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert value to IInspectable: Type not supported by IInspectable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
	});
});
describe("translating hr-HR string: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
	});
});
describe("translating hr-HR string: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
	});
});
describe("translating hr-HR string: Invalid access to already released Inspectable Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid access to already released Inspectable Object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
	});
});
describe("translating hr-HR string: Cannot release already released Inspectable Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot release already released Inspectable Object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
	});
});
describe("translating hr-HR string: 'this' is not of the expected type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is not of the expected type", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
	});
});
describe("translating hr-HR string: Illegal length and size specified for the array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Illegal length and size specified for the array", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
	});
});
describe("translating hr-HR string: An unexpected failure occurred while trying to obtain metadata information", function () {
	var translation;
	before(function (done) {
		errorToEnglish("An unexpected failure occurred while trying to obtain metadata information", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
	});
});
describe("translating hr-HR string: Status is 'error', but getResults did not return an error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Status is 'error', but getResults did not return an error", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
	});
});
describe("translating hr-HR string: Missing or invalid status parameter passed to completed handler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Missing or invalid status parameter passed to completed handler", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
	});
});
describe("translating hr-HR string: Missing or invalid sender parameter passed to completed handler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Missing or invalid sender parameter passed to completed handler", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
	});
});
describe("translating hr-HR string: Infinity", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Infinity", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
	});
});
describe("translating hr-HR string: -Infinity", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Infinity", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
	});
});
describe("translating hr-HR string: Object doesn't support property or method 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object doesn't support property or method 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: Argument to the function 'MyDynamicTestString' is not optional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument to the function 'MyDynamicTestString' is not optional", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a number", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a function", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not an indexable object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not an indexable object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a string", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a string", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a date object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a date object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is null or not an object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is null or not an object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
	});
});
describe("translating hr-HR string: Cannot assign to 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot assign to 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is undefined", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is undefined", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a boolean", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
	});
});
describe("translating hr-HR string: Cannot delete 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot delete 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a VBArray", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a JavaScript object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a JavaScript object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not an enumerator object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not an enumerator object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' is not a regular expression object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' is not a regular expression object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString is not an Array or arguments object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is not an Array or arguments object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString is not an Array object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is not an Array object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
	});
});
describe("translating hr-HR string: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
	});
});
describe("translating hr-HR string: Redeclaration of const 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Redeclaration of const 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
	});
});
describe("translating hr-HR string: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unable to set property 'MyDynamicTestString' of undefined or null reference", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
	});
});
describe("translating hr-HR string: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unable to get property 'MyDynamicTestString' of undefined or null reference", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
	});
});
describe("translating hr-HR string: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unable to delete property 'MyDynamicTestString' of undefined or null reference", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
	});
});
describe("translating hr-HR string: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
	});
});
describe("translating hr-HR string: The value of the property 'MyDynamicTestString' is not a Function object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The value of the property 'MyDynamicTestString' is not a Function object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
	});
});
describe("translating hr-HR string: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is null or undefined", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is null or undefined", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not an Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not an Object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a Function object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a Function object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a String object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a String object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a Boolean object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a Boolean object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a Date object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a Date object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a Number object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a Number object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a VBArray object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a VBArray object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a JavaScript object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a JavaScript object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not an Enumerator object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not an Enumerator object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not a RegExp object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not a RegExp object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: invalid argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: invalid argument", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: argument is not an Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is not an Object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: argument is not a JavaScript object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is not a JavaScript object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: argument is not a Function object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is not a Function object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: argument is not a VBArray object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is not a VBArray object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: argument is null or undefined", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is null or undefined", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: argument is not an Object and is not null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is not an Object and is not null", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: argument does not have a valid 'length' property", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument does not have a valid 'length' property", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: Array or arguments object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Array or arguments object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
	});
});
describe("translating hr-HR string: Invalid operand to 'MyDynamicTestString': Object expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid operand to 'MyDynamicTestString': Object expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
	});
});
describe("translating hr-HR string: Invalid operand to 'MyDynamicTestString': Function expected", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid operand to 'MyDynamicTestString': Function expected", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
	});
});
describe("translating hr-HR string: Invalid descriptor for property 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invalid descriptor for property 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot define property 'MyDynamicTestString': object is not extensible", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
	});
});
describe("translating hr-HR string: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot redefine non-configurable property 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: Cannot modify non-writable property 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot modify non-writable property 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot modify property 'MyDynamicTestString': 'length' is not writable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
	});
});
describe("translating hr-HR string: Cannot define property 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cannot define property 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: Required argument MyDynamicTestString in DataView method is not specified", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Required argument MyDynamicTestString in DataView method is not specified", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
	});
});
describe("translating hr-HR string: DataView constructor argument MyDynamicTestString is invalid", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView constructor argument MyDynamicTestString is invalid", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
	});
});
describe("translating hr-HR string: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The function 'MyDynamicTestString' has an invalid signature and cannot be called", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
	});
});
describe("translating hr-HR string: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
	});
});
describe("translating hr-HR string: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
	});
});
describe("translating hr-HR string: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is not an Inspectable Object", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: could not convert argument to type 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: could not convert argument to type 'char'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: could not convert argument to type 'GUID'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: could not convert return value to IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: could not convert return value to IInspectable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
	});
});
describe("translating hr-HR string: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
	});
});
describe("translating hr-HR string: Type 'MyDynamicTestString' not found", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type 'MyDynamicTestString' not found", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: function called with too few arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: function called with too few arguments", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: type is not constructible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: type is not constructible", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
	});
});
describe("translating hr-HR string: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
	});
});
describe("translating hr-HR string: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
	});
});
describe("translating hr-HR string: 'this' is not of expected type: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is not of expected type: MyDynamicTestString", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
	});
});
describe("translating hr-HR string: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
	});
});
describe("translating hr-HR string: The specified date is not available in the current locale's calendar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("The specified date is not available in the current locale's calendar", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
