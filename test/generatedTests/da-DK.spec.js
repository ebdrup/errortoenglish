var errorToEnglish = require("../../lib/errortoenglish");
describe("translating da-DK string: Procedurekaldet eller argumentet er ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Procedurekaldet eller argumentet er ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid procedure call or argument", function () {
		expect(translation, translation).to.equal("Invalid procedure call or argument");
	});
});
describe("translating da-DK string: Overløb", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Overløb", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Overflow", function () {
		expect(translation, translation).to.equal("Overflow");
	});
});
describe("translating da-DK string: Der er ikke mere hukommelse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er ikke mere hukommelse", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
	});
});
describe("translating da-DK string: Indekset er uden for området", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Indekset er uden for området", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Subscript out of range", function () {
		expect(translation, translation).to.equal("Subscript out of range");
	});
});
describe("translating da-DK string: Denne matrix er fast eller midlertidigt låst", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Denne matrix er fast eller midlertidigt låst", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.equal("This array is fixed or temporarily locked");
	});
});
describe("translating da-DK string: Division med nul", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Division med nul", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Division by zero", function () {
		expect(translation, translation).to.equal("Division by zero");
	});
});
describe("translating da-DK string: Typer stemmer ikke overens", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typer stemmer ikke overens", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Type mismatch", function () {
		expect(translation, translation).to.equal("Type mismatch");
	});
});
describe("translating da-DK string: Der er ikke mere strengplads", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er ikke mere strengplads", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Out of string space", function () {
		expect(translation, translation).to.equal("Out of string space");
	});
});
describe("translating da-DK string: Den ønskede handling kan ikke udføres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den ønskede handling kan ikke udføres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Can't perform requested operation", function () {
		expect(translation, translation).to.equal("Can't perform requested operation");
	});
});
describe("translating da-DK string: Der er ikke mere stakplads", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er ikke mere stakplads", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Out of stack space", function () {
		expect(translation, translation).to.equal("Out of stack space");
	});
});
describe("translating da-DK string: Sub- eller Function-procedure er ikke defineret", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub- eller Function-procedure er ikke defineret", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Sub or Function not defined", function () {
		expect(translation, translation).to.equal("Sub or Function not defined");
	});
});
describe("translating da-DK string: Der opstod en fejl under indlæsning af DLL-filen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en fejl under indlæsning af DLL-filen", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Error in loading DLL", function () {
		expect(translation, translation).to.equal("Error in loading DLL");
	});
});
describe("translating da-DK string: Der opstod en intern fejl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en intern fejl", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Internal error", function () {
		expect(translation, translation).to.equal("Internal error");
	});
});
describe("translating da-DK string: Forkert filnavn eller -nummer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forkert filnavn eller -nummer", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Bad file name or number", function () {
		expect(translation, translation).to.equal("Bad file name or number");
	});
});
describe("translating da-DK string: Filen blev ikke fundet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Filen blev ikke fundet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: File not found", function () {
		expect(translation, translation).to.equal("File not found");
	});
});
describe("translating da-DK string: Forkert filtilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forkert filtilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Bad file mode", function () {
		expect(translation, translation).to.equal("Bad file mode");
	});
});
describe("translating da-DK string: Filen er allerede åben", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Filen er allerede åben", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: File already open", function () {
		expect(translation, translation).to.equal("File already open");
	});
});
describe("translating da-DK string: I/O-fejl i forbindelse med enhed", function () {
	var translation;
	before(function (done) {
		errorToEnglish("I/O-fejl i forbindelse med enhed", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Device I/O error", function () {
		expect(translation, translation).to.equal("Device I/O error");
	});
});
describe("translating da-DK string: Filen findes allerede", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Filen findes allerede", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: File already exists", function () {
		expect(translation, translation).to.equal("File already exists");
	});
});
describe("translating da-DK string: Disken er fuld", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disken er fuld", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Disk full", function () {
		expect(translation, translation).to.equal("Disk full");
	});
});
describe("translating da-DK string: Input efter filens slutning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Input efter filens slutning", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Input past end of file", function () {
		expect(translation, translation).to.equal("Input past end of file");
	});
});
describe("translating da-DK string: Der er for mange filer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er for mange filer", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Too many files", function () {
		expect(translation, translation).to.equal("Too many files");
	});
});
describe("translating da-DK string: Enheden er ikke tilgængelig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enheden er ikke tilgængelig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Device unavailable", function () {
		expect(translation, translation).to.equal("Device unavailable");
	});
});
describe("translating da-DK string: Tilladelse nægtet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tilladelse nægtet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Permission denied", function () {
		expect(translation, translation).to.equal("Permission denied");
	});
});
describe("translating da-DK string: Disken er ikke klar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disken er ikke klar", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Disk not ready", function () {
		expect(translation, translation).to.equal("Disk not ready");
	});
});
describe("translating da-DK string: Der kan ikke omdøbes til et navn på et andet drev", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der kan ikke omdøbes til et navn på et andet drev", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Can't rename with different drive", function () {
		expect(translation, translation).to.equal("Can't rename with different drive");
	});
});
describe("translating da-DK string: Der opstod en fejl ved adgang til sti eller fil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en fejl ved adgang til sti eller fil", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Path/File access error", function () {
		expect(translation, translation).to.equal("Path/File access error");
	});
});
describe("translating da-DK string: Stien blev ikke fundet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Stien blev ikke fundet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Path not found", function () {
		expect(translation, translation).to.equal("Path not found");
	});
});
describe("translating da-DK string: Objektvariablen eller With-blokken er ikke angivet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektvariablen eller With-blokken er ikke angivet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object variable or With block variable not set", function () {
		expect(translation, translation).to.equal("Object variable or With block variable not set");
	});
});
describe("translating da-DK string: For-løkken er ikke initialiseret", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For-løkken er ikke initialiseret", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: For loop not initialized", function () {
		expect(translation, translation).to.equal("For loop not initialized");
	});
});
describe("translating da-DK string: Null er brugt ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Null er brugt ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid use of Null", function () {
		expect(translation, translation).to.equal("Invalid use of Null");
	});
});
describe("translating da-DK string: Den nødvendige midlertidige fil kan ikke oprettes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den nødvendige midlertidige fil kan ikke oprettes", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Can't create necessary temporary file", function () {
		expect(translation, translation).to.equal("Can't create necessary temporary file");
	});
});
describe("translating da-DK string: Et objekt er obligatorisk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt er obligatorisk", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object required", function () {
		expect(translation, translation).to.equal("Object required");
	});
});
describe("translating da-DK string: Automation-serveren kan ikke oprette objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automation-serveren kan ikke oprette objektet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Automation server can't create object", function () {
		expect(translation, translation).to.equal("Automation server can't create object");
	});
});
describe("translating da-DK string: Klassen understøtter ikke Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Klassen understøtter ikke Automation", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Class doesn't support Automation", function () {
		expect(translation, translation).to.equal("Class doesn't support Automation");
	});
});
describe("translating da-DK string: Fil- eller klassenavnet blev ikke fundet under Automation-handlingen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fil- eller klassenavnet blev ikke fundet under Automation-handlingen", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.equal("File name or class name not found during Automation operation");
	});
});
describe("translating da-DK string: Objektet understøtter ikke denne egenskab eller metode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet understøtter ikke denne egenskab eller metode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object doesn't support this property or method", function () {
		expect(translation, translation).to.equal("Object doesn't support this property or method");
	});
});
describe("translating da-DK string: Der opstod en Automation-fejl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en Automation-fejl", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Automation error", function () {
		expect(translation, translation).to.equal("Automation error");
	});
});
describe("translating da-DK string: Objektet understøtter ikke denne handling", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet understøtter ikke denne handling", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object doesn't support this action", function () {
		expect(translation, translation).to.equal("Object doesn't support this action");
	});
});
describe("translating da-DK string: Objektet understøtter ikke navngivne argumenter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet understøtter ikke navngivne argumenter", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object doesn't support named arguments", function () {
		expect(translation, translation).to.equal("Object doesn't support named arguments");
	});
});
describe("translating da-DK string: Objektet understøtter ikke den nuværende indstilling for landekode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet understøtter ikke den nuværende indstilling for landekode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.equal("Object doesn't support current locale setting");
	});
});
describe("translating da-DK string: Det navngivne argument blev ikke fundet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det navngivne argument blev ikke fundet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Named argument not found", function () {
		expect(translation, translation).to.equal("Named argument not found");
	});
});
describe("translating da-DK string: Argumentet er ikke valgfrit", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentet er ikke valgfrit", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Argument not optional", function () {
		expect(translation, translation).to.equal("Argument not optional");
	});
});
describe("translating da-DK string: Antallet af argumenter er forkert, eller egenskabstildelingen er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Antallet af argumenter er forkert, eller egenskabstildelingen er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.equal("Wrong number of arguments or invalid property assignment");
	});
});
describe("translating da-DK string: Objektet er ikke en samling", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet er ikke en samling", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object not a collection", function () {
		expect(translation, translation).to.equal("Object not a collection");
	});
});
describe("translating da-DK string: Den angivne DLL-funktion blev ikke fundet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den angivne DLL-funktion blev ikke fundet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Specified DLL function not found", function () {
		expect(translation, translation).to.equal("Specified DLL function not found");
	});
});
describe("translating da-DK string: Variablen bruger en Automation-type, der ikke understøttes i JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variablen bruger en Automation-type, der ikke understøttes i JavaScript", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.equal("Variable uses an Automation type not supported in JavaScript");
	});
});
describe("translating da-DK string: Fjernserveren eksisterer ikke eller er ikke tilgængelig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fjernserveren eksisterer ikke eller er ikke tilgængelig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.equal("The remote server machine does not exist or is unavailable");
	});
});
describe("translating da-DK string: Der kan ikke tildeles til variabel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der kan ikke tildeles til variabel", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot assign to variable", function () {
		expect(translation, translation).to.equal("Cannot assign to variable");
	});
});
describe("translating da-DK string: Objektet er ikke klar til scripting", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet er ikke klar til scripting", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object not safe for scripting", function () {
		expect(translation, translation).to.equal("Object not safe for scripting");
	});
});
describe("translating da-DK string: Objektet er ikke klar til initialisering", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet er ikke klar til initialisering", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object not safe for initializing", function () {
		expect(translation, translation).to.equal("Object not safe for initializing");
	});
});
describe("translating da-DK string: Objektet er ikke klar til oprettelse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet er ikke klar til oprettelse", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object not safe for creating", function () {
		expect(translation, translation).to.equal("Object not safe for creating");
	});
});
describe("translating da-DK string: Der er opstået en undtagelse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er opstået en undtagelse", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: An exception occurred", function () {
		expect(translation, translation).to.equal("An exception occurred");
	});
});
describe("translating da-DK string: Der er ikke mere hukommelse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er ikke mere hukommelse", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
	});
});
describe("translating da-DK string: Der er en syntaksfejl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er en syntaksfejl", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Syntax error", function () {
		expect(translation, translation).to.equal("Syntax error");
	});
});
describe("translating da-DK string: Tegnet ':' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet ':' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected ':'", function () {
		expect(translation, translation).to.equal("Expected ':'");
	});
});
describe("translating da-DK string: Tegnet ';' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet ';' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected ';'", function () {
		expect(translation, translation).to.equal("Expected ';'");
	});
});
describe("translating da-DK string: Tegnet '(' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet '(' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected '('", function () {
		expect(translation, translation).to.equal("Expected '('");
	});
});
describe("translating da-DK string: Tegnet ')' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet ')' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected ')'", function () {
		expect(translation, translation).to.equal("Expected ')'");
	});
});
describe("translating da-DK string: Tegnet ']' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet ']' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected ']'", function () {
		expect(translation, translation).to.equal("Expected ']'");
	});
});
describe("translating da-DK string: Tegnet '{' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet '{' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected '{'", function () {
		expect(translation, translation).to.equal("Expected '{'");
	});
});
describe("translating da-DK string: Tegnet '}' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet '}' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected '}'", function () {
		expect(translation, translation).to.equal("Expected '}'");
	});
});
describe("translating da-DK string: Id var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Id var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected identifier", function () {
		expect(translation, translation).to.equal("Expected identifier");
	});
});
describe("translating da-DK string: Tegnet '=' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet '=' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected '='", function () {
		expect(translation, translation).to.equal("Expected '='");
	});
});
describe("translating da-DK string: Tegnet '/' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet '/' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected '/'", function () {
		expect(translation, translation).to.equal("Expected '/'");
	});
});
describe("translating da-DK string: Tallet er ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tallet er ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid number", function () {
		expect(translation, translation).to.equal("Invalid number");
	});
});
describe("translating da-DK string: Tegnet er ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet er ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid character", function () {
		expect(translation, translation).to.equal("Invalid character");
	});
});
describe("translating da-DK string: Strengkonstanten er uafsluttet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Strengkonstanten er uafsluttet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unterminated string constant", function () {
		expect(translation, translation).to.equal("Unterminated string constant");
	});
});
describe("translating da-DK string: Bemærkningen er uafsluttet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bemærkningen er uafsluttet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unterminated comment", function () {
		expect(translation, translation).to.equal("Unterminated comment");
	});
});
describe("translating da-DK string: 'return'-sætningen uden for funktionen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'return'-sætningen uden for funktionen", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'return' statement outside of function", function () {
		expect(translation, translation).to.equal("'return' statement outside of function");
	});
});
describe("translating da-DK string: 'break' kan ikke optræde uden for løkken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'break' kan ikke optræde uden for løkken", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'break' outside of loop");
	});
});
describe("translating da-DK string: 'continue' kan ikke optræde uden for løkken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'continue' kan ikke optræde uden for løkken", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'continue' outside of loop");
	});
});
describe("translating da-DK string: Et hexadecimalt ciffer var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et hexadecimalt ciffer var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected hexadecimal digit", function () {
		expect(translation, translation).to.equal("Expected hexadecimal digit");
	});
});
describe("translating da-DK string: 'while' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected 'while'", function () {
		expect(translation, translation).to.equal("Expected 'while'");
	});
});
describe("translating da-DK string: Linjemærket blev defineret igen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Linjemærket blev defineret igen", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Label redefined", function () {
		expect(translation, translation).to.equal("Label redefined");
	});
});
describe("translating da-DK string: Linjemærket blev ikke fundet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Linjemærket blev ikke fundet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Label not found", function () {
		expect(translation, translation).to.equal("Label not found");
	});
});
describe("translating da-DK string: 'default' kan kun optræde én gang i en 'switch'-sætning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' kan kun optræde én gang i en 'switch'-sætning", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.equal("'default' can only appear once in a 'switch' statement");
	});
});
describe("translating da-DK string: Et id, en streng eller et tal var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et id, en streng eller et tal var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected identifier, string or number", function () {
		expect(translation, translation).to.equal("Expected identifier, string or number");
	});
});
describe("translating da-DK string: '@end' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected '@end'", function () {
		expect(translation, translation).to.equal("Expected '@end'");
	});
});
describe("translating da-DK string: Betinget kompilering er slået fra", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Betinget kompilering er slået fra", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Conditional compilation is turned off", function () {
		expect(translation, translation).to.equal("Conditional compilation is turned off");
	});
});
describe("translating da-DK string: En konstant var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En konstant var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected constant", function () {
		expect(translation, translation).to.equal("Expected constant");
	});
});
describe("translating da-DK string: '@' var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected '@'", function () {
		expect(translation, translation).to.equal("Expected '@'");
	});
});
describe("translating da-DK string: Forventede 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventede 'catch'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected 'catch'", function () {
		expect(translation, translation).to.equal("Expected 'catch'");
	});
});
describe("translating da-DK string: Forventede 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventede 'var'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected 'var'", function () {
		expect(translation, translation).to.equal("Expected 'var'");
	});
});
describe("translating da-DK string: 'throw' skal følges af et udtryk i samme kildelinje", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'throw' skal følges af et udtryk i samme kildelinje", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.equal("'throw' must be followed by an expression on the same source line");
	});
});
describe("translating da-DK string: 'with'-sætninger er ikke tilladt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'with'-sætninger er ikke tilladt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.equal("'with' statements are not allowed in strict mode");
	});
});
describe("translating da-DK string: Identiske formelle parameternavne er ikke tilladt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identiske formelle parameternavne er ikke tilladt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
	});
});
describe("translating da-DK string: Oktale numeriske konstanter og escape-tegn er ikke tilladt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oktale numeriske konstanter og escape-tegn er ikke tilladt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
	});
});
describe("translating da-DK string: 'eval' bruges ugyldigt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'eval' bruges ugyldigt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'eval' in strict mode");
	});
});
describe("translating da-DK string: 'arguments' bruges ugyldigt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'arguments' bruges ugyldigt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'arguments' in strict mode");
	});
});
describe("translating da-DK string: Kald af delete på udtryk er ikke tilladt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kald af delete på udtryk er ikke tilladt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on expression not allowed in strict mode");
	});
});
describe("translating da-DK string: Flere definitioner af en egenskab er ikke tilladt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Flere definitioner af en egenskab er ikke tilladt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Multiple definitions of a property not allowed in strict mode");
	});
});
describe("translating da-DK string: I bundet tilstand kan funktionserklæringer ikke være indlejret i en sætning eller en blok. De kan kun forekomme på øverste niveau eller direkte i funktionsteksten.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("I bundet tilstand kan funktionserklæringer ikke være indlejret i en sætning eller en blok. De kan kun forekomme på øverste niveau eller direkte i funktionsteksten.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
	});
});
describe("translating da-DK string: Brugen af et nøgleord som identifikator er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Brugen af et nøgleord som identifikator er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a keyword for an identifier is invalid");
	});
});
describe("translating da-DK string: Brugen af et fremtidigt reserveret ord for en identifikator er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Brugen af et fremtidigt reserveret ord for en identifikator er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid");
	});
});
describe("translating da-DK string: Brugen af et fremtidigt reserveret ord for en identifikator er ugyldig. Identifikatornavnet reserveres i bundet tilstand.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Brugen af et fremtidigt reserveret ord for en identifikator er ugyldig. Identifikatornavnet reserveres i bundet tilstand.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
	});
});
describe("translating da-DK string: Setter-funktioner skal have et argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Setter-funktioner skal have et argument", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Setter functions must have one argument", function () {
		expect(translation, translation).to.equal("Setter functions must have one argument");
	});
});
describe("translating da-DK string: Der opstod en JavaScript-kompileringsfejl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en JavaScript-kompileringsfejl", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: JavaScript compilation error", function () {
		expect(translation, translation).to.equal("JavaScript compilation error");
	});
});
describe("translating da-DK string: Der opstod en JavaScript-kørselsfejl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en JavaScript-kørselsfejl", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: JavaScript runtime error", function () {
		expect(translation, translation).to.equal("JavaScript runtime error");
	});
});
describe("translating da-DK string: Der opstod en ukendt kørselsfejl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en ukendt kørselsfejl", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unknown runtime error", function () {
		expect(translation, translation).to.equal("Unknown runtime error");
	});
});
describe("translating da-DK string: Der kan ikke tildeles til 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der kan ikke tildeles til 'this'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot assign to 'this'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'this'");
	});
});
describe("translating da-DK string: Et tal var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et tal var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
	});
});
describe("translating da-DK string: En funktion var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
	});
});
describe("translating da-DK string: Der kan ikke tildeles til resultatet af en funktion", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der kan ikke tildeles til resultatet af en funktion", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot assign to a function result", function () {
		expect(translation, translation).to.equal("Cannot assign to a function result");
	});
});
describe("translating da-DK string: Objektet kan ikke indekseres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet kan ikke indekseres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot index object", function () {
		expect(translation, translation).to.equal("Cannot index object");
	});
});
describe("translating da-DK string: En streng var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En streng var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
	});
});
describe("translating da-DK string: Et datoobjekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et datoobjekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Date object expected", function () {
		expect(translation, translation).to.equal("Date object expected");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: Venstresiden er ugyldig i tildelingen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Venstresiden er ugyldig i tildelingen", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.equal("Invalid left-hand side in assignment");
	});
});
describe("translating da-DK string: Id er ikke defineret", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Id er ikke defineret", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Undefined identifier", function () {
		expect(translation, translation).to.equal("Undefined identifier");
	});
});
describe("translating da-DK string: En boolesk værdi var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En boolesk værdi var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
	});
});
describe("translating da-DK string: Programkoden kan ikke køres fra et frigjort script", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Programkoden kan ikke køres fra et frigjort script", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Can't execute code from a freed script", function () {
		expect(translation, translation).to.equal("Can't execute code from a freed script");
	});
});
describe("translating da-DK string: Et objektmedlem var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objektmedlem var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object member expected", function () {
		expect(translation, translation).to.equal("Object member expected");
	});
});
describe("translating da-DK string: VBArray var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
	});
});
describe("translating da-DK string: Et JavaScript-objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et JavaScript-objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
	});
});
describe("translating da-DK string: Et enumeratorobjekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et enumeratorobjekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
	});
});
describe("translating da-DK string: Et regulært udtryksobjekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et regulært udtryksobjekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Regular Expression object expected", function () {
		expect(translation, translation).to.equal("Regular Expression object expected");
	});
});
describe("translating da-DK string: Der er en syntaksfejl i det regulære udtryk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er en syntaksfejl i det regulære udtryk", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Syntax error in regular expression", function () {
		expect(translation, translation).to.equal("Syntax error in regular expression");
	});
});
describe("translating da-DK string: Uventet kvantor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uventet kvantor", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unexpected quantifier", function () {
		expect(translation, translation).to.equal("Unexpected quantifier");
	});
});
describe("translating da-DK string: Tegnet ']' var ventet i det regulære udtryk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet ']' var ventet i det regulære udtryk", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected ']' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ']' in regular expression");
	});
});
describe("translating da-DK string: Tegnet ')' var ventet i det regulære udtryk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tegnet ')' var ventet i det regulære udtryk", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Expected ')' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ')' in regular expression");
	});
});
describe("translating da-DK string: Ugyldigt område i tegnsættet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldigt område i tegnsættet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid range in character set", function () {
		expect(translation, translation).to.equal("Invalid range in character set");
	});
});
describe("translating da-DK string: Undtagelse opstået og ikke fanget", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Undtagelse opstået og ikke fanget", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Exception thrown and not caught", function () {
		expect(translation, translation).to.equal("Exception thrown and not caught");
	});
});
describe("translating da-DK string: Funktionen har ikke et gyldigt prototypeobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktionen har ikke et gyldigt prototypeobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.equal("Function does not have a valid prototype object");
	});
});
describe("translating da-DK string: Den URI, der skal kodes, indeholder et ugyldigt tegn", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den URI, der skal kodes, indeholder et ugyldigt tegn", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.equal("The URI to be encoded contains an invalid character");
	});
});
describe("translating da-DK string: Den URI, der skal dekodes, er ikke kodet korrekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den URI, der skal dekodes, er ikke kodet korrekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.equal("The URI to be decoded is not a valid encoding");
	});
});
describe("translating da-DK string: Antallet af brøkdele er uden for området", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Antallet af brøkdele er uden for området", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.equal("The number of fractional digits is out of range");
	});
});
describe("translating da-DK string: Nøjagtigheden er uden for området", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nøjagtigheden er uden for området", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The precision is out of range", function () {
		expect(translation, translation).to.equal("The precision is out of range");
	});
});
describe("translating da-DK string: Der blev forventet et objekt af typen Array eller Arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der blev forventet et objekt af typen Array eller Arguments", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
	});
});
describe("translating da-DK string: Matrixlængden skal være en endelig positiv værdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Matrixlængden skal være en endelig positiv værdi", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.equal("Array length must be a finite positive integer");
	});
});
describe("translating da-DK string: Matrixlængden skal tildeles en endelig positiv værdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Matrixlængden skal tildeles en endelig positiv værdi", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.equal("Array length must be assigned a finite positive number");
	});
});
describe("translating da-DK string: Der blev forventet et objekt af typen Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der blev forventet et objekt af typen Array", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Array object expected", function () {
		expect(translation, translation).to.equal("Array object expected");
	});
});
describe("translating da-DK string: Den cirkulære reference i værdiargumentet understøttes ikke", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den cirkulære reference i værdiargumentet understøttes ikke", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.equal("Circular reference in value argument not supported");
	});
});
describe("translating da-DK string: Erstatningsargumentet er ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erstatningsargumentet er ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid replacer argument", function () {
		expect(translation, translation).to.equal("Invalid replacer argument");
	});
});
describe("translating da-DK string: Argumentlisten er for stor til at blive anvendt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentlisten er for stor til at blive anvendt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Argument list too large to apply", function () {
		expect(translation, translation).to.equal("Argument list too large to apply");
	});
});
describe("translating da-DK string: Generklæring af egenskaben const", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Generklæring af egenskaben const", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Redeclaration of const property", function () {
		expect(translation, translation).to.equal("Redeclaration of const property");
	});
});
describe("translating da-DK string: Objektmedlemmet kan ikke konfigureres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektmedlemmet kan ikke konfigureres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object member not configurable", function () {
		expect(translation, translation).to.equal("Object member not configurable");
	});
});
describe("translating da-DK string: Variablen er ikke defineret i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variablen er ikke defineret i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Variable undefined in strict mode", function () {
		expect(translation, translation).to.equal("Variable undefined in strict mode");
	});
});
describe("translating da-DK string: Der er ikke adgang til 'caller'-egenskaben for et funktions- eller argumentobjekt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er ikke adgang til 'caller'-egenskaben for et funktions- eller argumentobjekt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
	});
});
describe("translating da-DK string: Der er ikke adgang til 'callee'-egenskaben for et argumentobjekt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er ikke adgang til 'callee'-egenskaben for et argumentobjekt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
	});
});
describe("translating da-DK string: Det er ikke tilladt at tildele til skrivebeskyttede egenskaber i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det er ikke tilladt at tildele til skrivebeskyttede egenskaber i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
	});
});
describe("translating da-DK string: Der kan ikke oprettes en egenskab for et objekt, der ikke kan udvides", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der kan ikke oprettes en egenskab for et objekt, der ikke kan udvides", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.equal("Cannot create property for a non-extensible object");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: En funktion var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
	});
});
describe("translating da-DK string: En funktion var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
	});
});
describe("translating da-DK string: Egenskaben kan ikke have både accessorer og en værdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben kan ikke have både accessorer og en værdi", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.equal("Property cannot have both accessors and a value");
	});
});
describe("translating da-DK string: 'this' er null eller er ikke defineret", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' er null eller er ikke defineret", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("'this' is null or undefined");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: En funktion var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
	});
});
describe("translating da-DK string: En streng var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En streng var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
	});
});
describe("translating da-DK string: En boolesk værdi var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En boolesk værdi var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
	});
});
describe("translating da-DK string: En dato var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En dato var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Date expected", function () {
		expect(translation, translation).to.equal("Date expected");
	});
});
describe("translating da-DK string: Et tal var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et tal var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
	});
});
describe("translating da-DK string: VBArray var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
	});
});
describe("translating da-DK string: Et JavaScript-objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et JavaScript-objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
	});
});
describe("translating da-DK string: Et enumeratorobjekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et enumeratorobjekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
	});
});
describe("translating da-DK string: Et RegExp-objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et RegExp-objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: RegExp object expected", function () {
		expect(translation, translation).to.equal("RegExp object expected");
	});
});
describe("translating da-DK string: Funktionsargumentet var ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktionsargumentet var ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid function argument", function () {
		expect(translation, translation).to.equal("Invalid function argument");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: Et JavaScript-objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et JavaScript-objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
	});
});
describe("translating da-DK string: En funktion var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
	});
});
describe("translating da-DK string: VBArray var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
	});
});
describe("translating da-DK string: Egenskaben 'length' er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'length' er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid 'length' property", function () {
		expect(translation, translation).to.equal("Invalid 'length' property");
	});
});
describe("translating da-DK string: Der blev forventet et objekt af typen Array eller Arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der blev forventet et objekt af typen Array eller Arguments", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
	});
});
describe("translating da-DK string: Operanden er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operanden er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
	});
});
describe("translating da-DK string: Operanden er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operanden er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
	});
});
describe("translating da-DK string: Egenskabsbeskrivelsen er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskabsbeskrivelsen er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid property descriptor", function () {
		expect(translation, translation).to.equal("Invalid property descriptor");
	});
});
describe("translating da-DK string: Egenskaben kan ikke defineres: objektet kan ikke udvides", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben kan ikke defineres: objektet kan ikke udvides", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property: object is not extensible");
	});
});
describe("translating da-DK string: En egenskab, der ikke kan konfigureres, kan ikke omdefineres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En egenskab, der ikke kan konfigureres, kan ikke omdefineres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property");
	});
});
describe("translating da-DK string: En egenskab, der er skrivebeskyttet, kan ikke ændres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En egenskab, der er skrivebeskyttet, kan ikke ændres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot modify non-writable property", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property");
	});
});
describe("translating da-DK string: Egenskaben kan ikke ændres: 'length' kan ikke ændres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben kan ikke ændres: 'length' kan ikke ændres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property: 'length' is not writable");
	});
});
describe("translating da-DK string: Egenskaben kan ikke defineres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben kan ikke defineres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot define property", function () {
		expect(translation, translation).to.equal("Cannot define property");
	});
});
describe("translating da-DK string: Konstruktørargument for typebestem array er ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Konstruktørargument for typebestem array er ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.equal("Typed array constructor argument is invalid");
	});
});
describe("translating da-DK string: 'this' er ikke et typebestemt arrayobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' er ikke et typebestemt arrayobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'this' is not a typed array object", function () {
		expect(translation, translation).to.equal("'this' is not a typed array object");
	});
});
describe("translating da-DK string: Ugyldig forskydning/længde ved oprettelse af typebestemt array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig forskydning/længde ved oprettelse af typebestemt array", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.equal("Invalid offset/length when creating typed array");
	});
});
describe("translating da-DK string: Ugyldig værdi begin/end i under-arraymetode  for typebestemt array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig værdi begin/end i under-arraymetode  for typebestemt array", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.equal("Invalid begin/end value in typed array subarray method");
	});
});
describe("translating da-DK string: Ugyldig kilde i typebestemt array-sæt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig kilde i typebestemt array-sæt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid source in typed array set", function () {
		expect(translation, translation).to.equal("Invalid source in typed array set");
	});
});
describe("translating da-DK string: 'this' er ikke et DataView-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' er ikke et DataView-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'this' is not a DataView object", function () {
		expect(translation, translation).to.equal("'this' is not a DataView object");
	});
});
describe("translating da-DK string: Ugyldige argumenter i DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldige argumenter i DataView", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
	});
});
describe("translating da-DK string: Adgang til DataView-handling over angivet bufferlængde", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Adgang til DataView-handling over angivet bufferlængde", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.equal("DataView operation access beyond specified buffer length");
	});
});
describe("translating da-DK string: Ugyldige argumenter i DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldige argumenter i DataView", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
	});
});
describe("translating da-DK string: ugyldig funktion signatur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldig funktion signatur", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: invalid function signature", function () {
		expect(translation, translation).to.equal("invalid function signature");
	});
});
describe("translating da-DK string: ugyldige egenskab signatur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldige egenskab signatur", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: invalid property signature", function () {
		expect(translation, translation).to.equal("invalid property signature");
	});
});
describe("translating da-DK string: ugyldig inputparametertype", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldig inputparametertype", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: invalid input parameter type", function () {
		expect(translation, translation).to.equal("invalid input parameter type");
	});
});
describe("translating da-DK string: ugyldig outputparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldig outputparameter", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: invalid ouput parameter", function () {
		expect(translation, translation).to.equal("invalid ouput parameter");
	});
});
describe("translating da-DK string: Adgang til egenskaben 'arguments' for en funktion er ikke tilladt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Adgang til egenskaben 'arguments' for en funktion er ikke tilladt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
	});
});
describe("translating da-DK string: Et kontrollérbart objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Et kontrollérbart objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Inspectable Object expected", function () {
		expect(translation, translation).to.equal("Inspectable Object expected");
	});
});
describe("translating da-DK string: Argumentet kunne ikke konverteres til typen 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentet kunne ikke konverteres til typen 'char'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'char'");
	});
});
describe("translating da-DK string: Argumentet kunne ikke konverteres til typen 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentet kunne ikke konverteres til typen 'GUID'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'GUID'");
	});
});
describe("translating da-DK string: IInspectable var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: IInspectable expected", function () {
		expect(translation, translation).to.equal("IInspectable expected");
	});
});
describe("translating da-DK string: Objektet kunne ikke konverteres til struktur: Objektet mangler forventet egenskab", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet kunne ikke konverteres til struktur: Objektet mangler forventet egenskab", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property");
	});
});
describe("translating da-DK string: Ukendt type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ukendt type", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unknown type", function () {
		expect(translation, translation).to.equal("Unknown type");
	});
});
describe("translating da-DK string: Funktionen blev kaldt med for få argumenter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktionen blev kaldt med for få argumenter", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Function called with too few arguments", function () {
		expect(translation, translation).to.equal("Function called with too few arguments");
	});
});
describe("translating da-DK string: Typen kan ikke konstrueres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typen kan ikke konstrueres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Type is not constructible", function () {
		expect(translation, translation).to.equal("Type is not constructible");
	});
});
describe("translating da-DK string: Værdien kunne ikke konverteres til PropertyValue: Typen understøttes ikke af PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Værdien kunne ikke konverteres til PropertyValue: Typen understøttes ikke af PropertyValue", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
	});
});
describe("translating da-DK string: Værdien kunne ikke konverteres til IInspectable: Typen understøttes ikke af IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Værdien kunne ikke konverteres til IInspectable: Typen understøttes ikke af IInspectable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
	});
});
describe("translating da-DK string: Datoen kunne ikke konverteres til Windows.Foundation.DateTime: Værdien er uden for det gyldige interval", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Datoen kunne ikke konverteres til Windows.Foundation.DateTime: Værdien er uden for det gyldige interval", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
	});
});
describe("translating da-DK string: Værdien kunne ikke konverteres til Windows.Foundation.TimeSpan: Værdien er uden for det gyldige interval", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Værdien kunne ikke konverteres til Windows.Foundation.TimeSpan: Værdien er uden for det gyldige interval", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
	});
});
describe("translating da-DK string: Adgang til allerede frigivet kontrollérbart objekt er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Adgang til allerede frigivet kontrollérbart objekt er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Invalid access to already released Inspectable Object");
	});
});
describe("translating da-DK string: Allerede frigivet kontrollérbart objekt kan ikke frigives", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Allerede frigivet kontrollérbart objekt kan ikke frigives", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Cannot release already released Inspectable Object");
	});
});
describe("translating da-DK string: 'dette' er ikke af den forventede type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'dette' er ikke af den forventede type", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'this' is not of the expected type", function () {
		expect(translation, translation).to.equal("'this' is not of the expected type");
	});
});
describe("translating da-DK string: Der er angivet ugyldig længde og størrelse for matrixen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der er angivet ugyldig længde og størrelse for matrixen", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.equal("Illegal length and size specified for the array");
	});
});
describe("translating da-DK string: Der opstod en uventet fejl under forsøg på at hente metadataoplysninger", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der opstod en uventet fejl under forsøg på at hente metadataoplysninger", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
	});
});
describe("translating da-DK string: Status er 'fejl', men getResults returnerede ingen fejl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Status er 'fejl', men getResults returnerede ingen fejl", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.equal("Status is 'error', but getResults did not return an error");
	});
});
describe("translating da-DK string: Manglende eller ugyldig statusparameter overført til afsluttet handler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Manglende eller ugyldig statusparameter overført til afsluttet handler", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid status parameter passed to completed handler");
	});
});
describe("translating da-DK string: Manglende eller ugyldig afsenderparameter overført til afsluttet handler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Manglende eller ugyldig afsenderparameter overført til afsluttet handler", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid sender parameter passed to completed handler");
	});
});
describe("translating da-DK string: Uendeligt tal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uendeligt tal", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Infinity", function () {
		expect(translation, translation).to.equal("Infinity");
	});
});
describe("translating da-DK string: Negativt uendeligt tal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Negativt uendeligt tal", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: -Infinity", function () {
		expect(translation, translation).to.equal("-Infinity");
	});
});
describe("translating da-DK string: Objektet understøtter ikke egenskaben eller metoden 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet understøtter ikke egenskaben eller metoden 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: Argumentet til funktionen 'MyDynamicTestString' skal angives", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentet til funktionen 'MyDynamicTestString' skal angives", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke et tal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke et tal", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a number");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke en funktion", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke en funktion", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a function");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er et objekt, der ikke kan indekseres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er et objekt, der ikke kan indekseres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an indexable object");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke en streng", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke en streng", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a string");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke et datoobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke et datoobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a date object");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er null eller ikke et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er null eller ikke et objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is null or not an object");
	});
});
describe("translating da-DK string: Der kan ikke tildeles til 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der kan ikke tildeles til 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke defineret", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke defineret", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is undefined");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke en boolesk værdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke en boolesk værdi", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a boolean");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' kan ikke slettes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' kan ikke slettes", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot delete 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke et VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke et VBArray", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a VBArray");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke et JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke et JavaScript-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke et optællerobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke et optællerobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an enumerator object");
	});
});
describe("translating da-DK string: 'MyDynamicTestString' er ikke et regulært udtryksobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' er ikke et regulært udtryksobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a regular expression object");
	});
});
describe("translating da-DK string: MyDynamicTestString er ikke et objekt af typen Array eller Arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et objekt af typen Array eller Arguments", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array or arguments object");
	});
});
describe("translating da-DK string: MyDynamicTestString er ikke et objekt af typen Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et objekt af typen Array", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array object");
	});
});
describe("translating da-DK string: 'MyDynamicTestString'-attributten på egenskabsbeskrivelsen kan ikke sættes til 'true' på dette objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'-attributten på egenskabsbeskrivelsen kan ikke sættes til 'true' på dette objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
	});
});
describe("translating da-DK string: 'MyDynamicTestString'-attributten på egenskabsbeskrivelsen kan ikke sættes til 'false' på dette objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'-attributten på egenskabsbeskrivelsen kan ikke sættes til 'false' på dette objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
	});
});
describe("translating da-DK string: Generklæring af const 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Generklæring af const 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: Kald af delete på 'MyDynamicTestString' er ikke tilladt i bundet tilstand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kald af delete på 'MyDynamicTestString' er ikke tilladt i bundet tilstand", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke angives for reference, der er udefineret eller null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke angives for reference, der er udefineret eller null", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke hentes for reference, der er udefineret eller null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke hentes for reference, der er udefineret eller null", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke slettes reference, der er udefineret eller null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke slettes reference, der er udefineret eller null", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
	});
});
describe("translating da-DK string: Der kan ikke opnås adgang til egenskaben 'MyDynamicTestString': Typen 'VarDate' understøtter ikke brugerdefinerede egenskaber", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der kan ikke opnås adgang til egenskaben 'MyDynamicTestString': Typen 'VarDate' understøtter ikke brugerdefinerede egenskaber", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
	});
});
describe("translating da-DK string: Værdien af egenskaben 'MyDynamicTestString' er ikke et Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Værdien af egenskaben 'MyDynamicTestString' er ikke et Function-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
	});
});
describe("translating da-DK string: Værdien af egenskaben 'MyDynamicTestString' er null eller er ikke defineret. Det er ikke et Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Værdien af egenskaben 'MyDynamicTestString' er null eller er ikke defineret. Det er ikke et Function-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er null eller er ikke defineret", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er null eller er ikke defineret", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et Function-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et String-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et String-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a String object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et Boolean-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et Boolean-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et Date-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et Date-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et Number-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et Number-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et VBArray-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et VBArray-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et JavaScript-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et Enumerator-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et Enumerator-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et RegExp-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et RegExp-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet er ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet er ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: invalid argument");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet er ikke et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet er ikke et objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet er ikke et JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet er ikke et JavaScript-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet er ikke et Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet er ikke et Function-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a Function object");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet er ikke et VBArray-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet er ikke et VBArray-objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet er null eller er ikke defineret", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet er null eller er ikke defineret", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is null or undefined");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet er ikke et objekt og er ikke null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet er ikke et objekt og er ikke null", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet har ikke en gyldig 'length'-egenskab", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet har ikke en gyldig 'length'-egenskab", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
	});
});
describe("translating da-DK string: MyDynamicTestString: Matrix eller argumentobjekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Matrix eller argumentobjekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: Array or arguments object expected");
	});
});
describe("translating da-DK string: Operanden til 'MyDynamicTestString' er ugyldig: Et objekt var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operanden til 'MyDynamicTestString' er ugyldig: Et objekt var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
	});
});
describe("translating da-DK string: Operanden til 'MyDynamicTestString' er ugyldig: En funktion var ventet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operanden til 'MyDynamicTestString' er ugyldig: En funktion var ventet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
	});
});
describe("translating da-DK string: Beskrivelsen for egenskaben 'MyDynamicTestString' er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Beskrivelsen for egenskaben 'MyDynamicTestString' er ugyldig", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke defineres: objektet kan ikke udvides", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke defineres: objektet kan ikke udvides", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke omdefineres, da den ikke kan konfigureres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke omdefineres, da den ikke kan konfigureres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke ændres, da den er skrivebeskyttet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke ændres, da den er skrivebeskyttet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke ændres: 'length' kan ikke ændres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke ændres: 'length' kan ikke ændres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' kan ikke defineres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' kan ikke defineres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: Påkrævet argument i MyDynamicTestString i DataView-metode er ikke angivet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Påkrævet argument i MyDynamicTestString i DataView-metode er ikke angivet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
	});
});
describe("translating da-DK string: DataView-konstruktørargumentet MyDynamicTestString er ugyldigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView-konstruktørargumentet MyDynamicTestString er ugyldigt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
	});
});
describe("translating da-DK string: Funktionen 'MyDynamicTestString' har en ugyldig signatur og kan ikke kaldes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktionen 'MyDynamicTestString' har en ugyldig signatur og kan ikke kaldes", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
	});
});
describe("translating da-DK string: Egenskaben 'MyDynamicTestString' har en ugyldig signatur og kan ikke åbnes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskaben 'MyDynamicTestString' har en ugyldig signatur og kan ikke åbnes", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
	});
});
describe("translating da-DK string: Kørselsklassen MyDynamicTestString, der har Windows.Foundation.IPropertyValue, som standardgrænseflade, understøttes ikke som inputparametertype", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kørselsklassen MyDynamicTestString, der har Windows.Foundation.IPropertyValue, som standardgrænseflade, understøttes ikke som inputparametertype", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
	});
});
describe("translating da-DK string: Objektet med grænsefladen Windows.Foundation.IPropertyValue, der har navnet for kørselsklasse MyDynamicTestString, understøttes ikke som out-parameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet med grænsefladen Windows.Foundation.IPropertyValue, der har navnet for kørselsklasse MyDynamicTestString, understøttes ikke som out-parameter", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
	});
});
describe("translating da-DK string: MyDynamicTestString: 'this' er ikke et kontrollérbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' er ikke et kontrollérbart objekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet kunne ikke konverteres til typen 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet kunne ikke konverteres til typen 'char'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
	});
});
describe("translating da-DK string: MyDynamicTestString: Argumentet kunne ikke konverteres til typen 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Argumentet kunne ikke konverteres til typen 'GUID'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
	});
});
describe("translating da-DK string: MyDynamicTestString: Returværdien kunne ikke konverteres til IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Returværdien kunne ikke konverteres til IInspectable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
	});
});
describe("translating da-DK string: Objektet kunne ikke konverteres til struktur: Objektet mangler forventet egenskab 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet kunne ikke konverteres til struktur: Objektet mangler forventet egenskab 'MyDynamicTestString'", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
	});
});
describe("translating da-DK string: Typen 'MyDynamicTestString' blev ikke fundet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typen 'MyDynamicTestString' blev ikke fundet", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.equal("Type 'MyDynamicTestString' not found");
	});
});
describe("translating da-DK string: MyDynamicTestString: Funktionen blev kaldt med for få argumenter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Funktionen blev kaldt med for få argumenter", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: function called with too few arguments");
	});
});
describe("translating da-DK string: MyDynamicTestString: Typen kan ikke konstrueres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Typen kan ikke konstrueres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: type is not constructible");
	});
});
describe("translating da-DK string: Værdien kunne ikke konverteres til PropertyValue: MyDynamicTestString understøttes ikke af PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Værdien kunne ikke konverteres til PropertyValue: MyDynamicTestString understøttes ikke af PropertyValue", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
	});
});
describe("translating da-DK string: Værdien kunne ikke konverteres til IInspectable: MyDynamicTestString understøttes ikke af IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Værdien kunne ikke konverteres til IInspectable: MyDynamicTestString understøttes ikke af IInspectable", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
	});
});
describe("translating da-DK string: MyDynamicTestString: Det kontrollérbare objekt 'this' er frigivet, og der er ingen adgang til det", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Det kontrollérbare objekt 'this' er frigivet, og der er ingen adgang til det", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
	});
});
describe("translating da-DK string: 'dette' er ikke af den forventede type: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'dette' er ikke af den forventede type: MyDynamicTestString", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.equal("'this' is not of expected type: MyDynamicTestString");
	});
});
describe("translating da-DK string: MyDynamicTestString: Der opstod en uventet fejl under forsøg på at hente metadataoplysninger", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Der opstod en uventet fejl under forsøg på at hente metadataoplysninger", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
	});
});
describe("translating da-DK string: Den angivne dato findes ikke i kalenderen for den nuværende landekode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den angivne dato findes ikke i kalenderen for den nuværende landekode", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.equal("The specified date is not available in the current locale's calendar");
	});
});
