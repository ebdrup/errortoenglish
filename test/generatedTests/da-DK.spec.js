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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
