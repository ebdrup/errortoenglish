var errorToEnglish = require("../../lib/errortoenglish");
describe("translating nb-NO string: Ugyldig prosedyrekall eller argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig prosedyrekall eller argument", function (err, _translation) {
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
describe("translating nb-NO string: Overflyt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Overflyt", function (err, _translation) {
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
describe("translating nb-NO string: Ikke nok minne", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ikke nok minne", function (err, _translation) {
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
describe("translating nb-NO string: Indeks utenfor gyldig område", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Indeks utenfor gyldig område", function (err, _translation) {
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
describe("translating nb-NO string: Denne matrisen er fast eller midlertidig låst", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Denne matrisen er fast eller midlertidig låst", function (err, _translation) {
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
describe("translating nb-NO string: Divisjon med null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Divisjon med null", function (err, _translation) {
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
describe("translating nb-NO string: Ikke samsvar mellom typer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ikke samsvar mellom typer", function (err, _translation) {
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
describe("translating nb-NO string: Ikke nok minne for strenger", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ikke nok minne for strenger", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke utføre den forespurte operasjonen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke utføre den forespurte operasjonen", function (err, _translation) {
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
describe("translating nb-NO string: Ikke nok stakkplass", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ikke nok stakkplass", function (err, _translation) {
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
describe("translating nb-NO string: Sub eller Function er ikke definert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub eller Function er ikke definert", function (err, _translation) {
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
describe("translating nb-NO string: Feil ved lasting av DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Feil ved lasting av DLL", function (err, _translation) {
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
describe("translating nb-NO string: Intern feil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Intern feil", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig filnavn eller filnummer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig filnavn eller filnummer", function (err, _translation) {
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
describe("translating nb-NO string: Finner ikke filen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Finner ikke filen", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig filmodus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig filmodus", function (err, _translation) {
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
describe("translating nb-NO string: Filen er allerede åpen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Filen er allerede åpen", function (err, _translation) {
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
describe("translating nb-NO string: I/U-feil på enhet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("I/U-feil på enhet", function (err, _translation) {
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
describe("translating nb-NO string: Filen finnes allerede", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Filen finnes allerede", function (err, _translation) {
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
describe("translating nb-NO string: Disken er full", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disken er full", function (err, _translation) {
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
describe("translating nb-NO string: Inndata etter slutten på filen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inndata etter slutten på filen", function (err, _translation) {
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
describe("translating nb-NO string: For mange filer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For mange filer", function (err, _translation) {
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
describe("translating nb-NO string: Enheten er utilgjengelig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enheten er utilgjengelig", function (err, _translation) {
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
describe("translating nb-NO string: Ingen tilgang", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ingen tilgang", function (err, _translation) {
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
describe("translating nb-NO string: Disken er ikke klar", function () {
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
describe("translating nb-NO string: Kan ikke gi nytt navn på tvers av stasjoner", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke gi nytt navn på tvers av stasjoner", function (err, _translation) {
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
describe("translating nb-NO string: Feil ved tilgang til bane/fil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Feil ved tilgang til bane/fil", function (err, _translation) {
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
describe("translating nb-NO string: Finner ikke banen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Finner ikke banen", function (err, _translation) {
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
describe("translating nb-NO string: Objektvariabel eller With-blokkvariabel er ikke angitt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektvariabel eller With-blokkvariabel er ikke angitt", function (err, _translation) {
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
describe("translating nb-NO string: For-løkken er ikke initialisert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For-løkken er ikke initialisert", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig bruk av Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig bruk av Null", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke opprette nødvendig midlertidig fil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke opprette nødvendig midlertidig fil", function (err, _translation) {
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
describe("translating nb-NO string: Krever objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Krever objekt", function (err, _translation) {
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
describe("translating nb-NO string: Automatiseringsserveren kan ikke opprette objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automatiseringsserveren kan ikke opprette objektet", function (err, _translation) {
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
describe("translating nb-NO string: Klassen støtter ikke automatisering", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Klassen støtter ikke automatisering", function (err, _translation) {
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
describe("translating nb-NO string: Fant ikke filnavn eller klassenavn under automatiseringsoperasjonen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fant ikke filnavn eller klassenavn under automatiseringsoperasjonen", function (err, _translation) {
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
describe("translating nb-NO string: Objektet støtter ikke angitt egenskap eller metode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet støtter ikke angitt egenskap eller metode", function (err, _translation) {
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
describe("translating nb-NO string: Automatiseringsfeil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automatiseringsfeil", function (err, _translation) {
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
describe("translating nb-NO string: Objektet støtter ikke denne handlingen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet støtter ikke denne handlingen", function (err, _translation) {
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
describe("translating nb-NO string: Objektet støtter ikke navngitte argumenter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet støtter ikke navngitte argumenter", function (err, _translation) {
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
describe("translating nb-NO string: Objektet støtter ikke gjeldende nasjonale innstilling", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet støtter ikke gjeldende nasjonale innstilling", function (err, _translation) {
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
describe("translating nb-NO string: Finner ikke navngitt argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Finner ikke navngitt argument", function (err, _translation) {
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
describe("translating nb-NO string: Argumentet er ikke valgfritt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentet er ikke valgfritt", function (err, _translation) {
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
describe("translating nb-NO string: Feil antall argumenter eller ugyldig tilordning av egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Feil antall argumenter eller ugyldig tilordning av egenskap", function (err, _translation) {
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
describe("translating nb-NO string: Objektet er ikke en samling", function () {
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
describe("translating nb-NO string: Funksjonen er ikke definert i angitt DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funksjonen er ikke definert i angitt DLL", function (err, _translation) {
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
describe("translating nb-NO string: Variabelen bruker en type automatisering som ikke støttes i JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variabelen bruker en type automatisering som ikke støttes i JavaScript", function (err, _translation) {
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
describe("translating nb-NO string: Den eksterne serveren finnes ikke eller er ikke tilgjengelig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den eksterne serveren finnes ikke eller er ikke tilgjengelig", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke tilordne til variabel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke tilordne til variabel", function (err, _translation) {
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
describe("translating nb-NO string: Objektet kan ikke skriptes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet kan ikke skriptes", function (err, _translation) {
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
describe("translating nb-NO string: Objektet kan ikke initialiseres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet kan ikke initialiseres", function (err, _translation) {
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
describe("translating nb-NO string: Objektet kan ikke opprettes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet kan ikke opprettes", function (err, _translation) {
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
describe("translating nb-NO string: Det oppstod et unntak", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det oppstod et unntak", function (err, _translation) {
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
describe("translating nb-NO string: Ikke nok minne", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ikke nok minne", function (err, _translation) {
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
describe("translating nb-NO string: Syntaksfeil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaksfeil", function (err, _translation) {
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
describe("translating nb-NO string: Forventet ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet ':'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet ';'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet '('", function (err, _translation) {
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
describe("translating nb-NO string: Forventet ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet ')'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet ']'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet ']'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet '{'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet '}'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet identifikator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet identifikator", function (err, _translation) {
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
describe("translating nb-NO string: Forventet '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet '='", function (err, _translation) {
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
describe("translating nb-NO string: Forventet '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet '/'", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig tall", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig tall", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig tegn", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig tegn", function (err, _translation) {
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
describe("translating nb-NO string: Uavsluttet strengkonstant", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uavsluttet strengkonstant", function (err, _translation) {
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
describe("translating nb-NO string: Uavsluttet kommentar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uavsluttet kommentar", function (err, _translation) {
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
describe("translating nb-NO string: 'return'-setning utenfor funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'return'-setning utenfor funksjon", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke ha 'break' utenfor løkke", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke ha 'break' utenfor løkke", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke ha 'continue' utenfor løkke", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke ha 'continue' utenfor løkke", function (err, _translation) {
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
describe("translating nb-NO string: Forventet heksadesimalt siffer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet heksadesimalt siffer", function (err, _translation) {
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
describe("translating nb-NO string: Forventet 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet 'while'", function (err, _translation) {
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
describe("translating nb-NO string: Etiketten er definert på nytt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Etiketten er definert på nytt", function (err, _translation) {
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
describe("translating nb-NO string: Finner ikke etiketten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Finner ikke etiketten", function (err, _translation) {
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
describe("translating nb-NO string: 'default' kan bare brukes én gang i en 'switch'-setning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' kan bare brukes én gang i en 'switch'-setning", function (err, _translation) {
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
describe("translating nb-NO string: Forventet identifikator, streng eller tall", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet identifikator, streng eller tall", function (err, _translation) {
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
describe("translating nb-NO string: Forventet '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet '@end'", function (err, _translation) {
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
describe("translating nb-NO string: Betinget kompilering er deaktivert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Betinget kompilering er deaktivert", function (err, _translation) {
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
describe("translating nb-NO string: Forventet konstant", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet konstant", function (err, _translation) {
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
describe("translating nb-NO string: Forventet '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet '@'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet 'catch'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet 'var'", function (err, _translation) {
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
describe("translating nb-NO string: throw må etterfølges av et uttrykk på samme kildelinje", function () {
	var translation;
	before(function (done) {
		errorToEnglish("throw må etterfølges av et uttrykk på samme kildelinje", function (err, _translation) {
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
describe("translating nb-NO string: with-setninger er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("with-setninger er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Dupliserte navn på formelle parametere er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dupliserte navn på formelle parametere er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Oktale numeriske litteraler og Escape-tegn er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oktale numeriske litteraler og Escape-tegn er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig bruk av eval i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig bruk av eval i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig bruk av arguments i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig bruk av arguments i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Kall av sletting i uttrykk er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kall av sletting i uttrykk er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Flere definisjoner av en egenskap er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Flere definisjoner av en egenskap er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: I streng modus kan ikke funksjonsdeklarasjoner være nestet inni en setning eller blokk. De kan bare forekomme på øverste nivå eller direkte inni en funksjonstekst.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("I streng modus kan ikke funksjonsdeklarasjoner være nestet inni en setning eller blokk. De kan bare forekomme på øverste nivå eller direkte inni en funksjonstekst.", function (err, _translation) {
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
describe("translating nb-NO string: Bruken av et nøkkelord for en identifikator er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bruken av et nøkkelord for en identifikator er ugyldig", function (err, _translation) {
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
describe("translating nb-NO string: Bruken av et fremtidig reservert ord for en identifikator er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bruken av et fremtidig reservert ord for en identifikator er ugyldig", function (err, _translation) {
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
describe("translating nb-NO string: Bruken av et fremtidig reservert ord for en identifikator er ugyldig. Identifikatornavnet er reservert i streng modus.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bruken av et fremtidig reservert ord for en identifikator er ugyldig. Identifikatornavnet er reservert i streng modus.", function (err, _translation) {
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
describe("translating nb-NO string: Setter-funksjoner må ha ett argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Setter-funksjoner må ha ett argument", function (err, _translation) {
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
describe("translating nb-NO string: JavaScript-kompileringsfeil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-kompileringsfeil", function (err, _translation) {
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
describe("translating nb-NO string: JavaScript-kjøretidsfeil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-kjøretidsfeil", function (err, _translation) {
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
describe("translating nb-NO string: Ukjent kjøretidsfeil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ukjent kjøretidsfeil", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke tilordne til 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke tilordne til 'this'", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et tall", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et tall", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en funksjon", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke tilordne til et funksjonsresultat", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke tilordne til et funksjonsresultat", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke indeksere objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke indeksere objektet", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en streng", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en streng", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et datoobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et datoobjekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig venstre side i tilordning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig venstre side i tilordning", function (err, _translation) {
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
describe("translating nb-NO string: Udefinert identifikator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Udefinert identifikator", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en boolsk verdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en boolsk verdi", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke utføre kode fra et frigitt skript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke utføre kode fra et frigitt skript", function (err, _translation) {
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
describe("translating nb-NO string: Forventet medlem i et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet medlem i et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet VBArray", function (err, _translation) {
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
describe("translating nb-NO string: Forventet JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet JavaScript-objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet oppregningsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet oppregningsobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected/g);
	});
});
describe("translating nb-NO string: Forventet et vanlig uttrykk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et vanlig uttrykk", function (err, _translation) {
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
describe("translating nb-NO string: Syntaksfeil i vanlig uttrykk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaksfeil i vanlig uttrykk", function (err, _translation) {
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
describe("translating nb-NO string: Uventet mengdeoperator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uventet mengdeoperator", function (err, _translation) {
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
describe("translating nb-NO string: Forventet ']' i vanlig uttrykk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet ']' i vanlig uttrykk", function (err, _translation) {
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
describe("translating nb-NO string: Forventet ')' i vanlig uttrykk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet ')' i vanlig uttrykk", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig område i tegnsett", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig område i tegnsett", function (err, _translation) {
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
describe("translating nb-NO string: Unntak forkastet og ikke behandlet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unntak forkastet og ikke behandlet", function (err, _translation) {
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
describe("translating nb-NO string: Funksjonen mangler gyldig prototypeobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funksjonen mangler gyldig prototypeobjekt", function (err, _translation) {
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
describe("translating nb-NO string: URIen som skal krypteres, inneholder et ugyldig tegn", function () {
	var translation;
	before(function (done) {
		errorToEnglish("URIen som skal krypteres, inneholder et ugyldig tegn", function (err, _translation) {
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
describe("translating nb-NO string: URIen som skal dekodes, har ikke gyldig kryptering", function () {
	var translation;
	before(function (done) {
		errorToEnglish("URIen som skal dekodes, har ikke gyldig kryptering", function (err, _translation) {
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
describe("translating nb-NO string: Antall desimaler er utenfor tillatt område", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Antall desimaler er utenfor tillatt område", function (err, _translation) {
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
describe("translating nb-NO string: Presisjonen er utenfor tillatt område", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Presisjonen er utenfor tillatt område", function (err, _translation) {
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
describe("translating nb-NO string: Forventet objekt av typen \"Array\" eller \"arguments\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet objekt av typen \"Array\" eller \"arguments\"", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
	});
});
describe("translating nb-NO string: Matriselengden skal være en endelig, positiv størrelse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Matriselengden skal være en endelig, positiv størrelse", function (err, _translation) {
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
describe("translating nb-NO string: Matriselengden må ha en tilordnet endelig, positiv størrelse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Matriselengden må ha en tilordnet endelig, positiv størrelse", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et matriseobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et matriseobjekt", function (err, _translation) {
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
describe("translating nb-NO string: Sirkelreferanse i verdiargument støttes ikke", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sirkelreferanse i verdiargument støttes ikke", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig erstatterargument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig erstatterargument", function (err, _translation) {
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
describe("translating nb-NO string: Argumentlisten er for stor til å brukes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentlisten er for stor til å brukes", function (err, _translation) {
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
describe("translating nb-NO string: Ny deklarering av konstant egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ny deklarering av konstant egenskap", function (err, _translation) {
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
describe("translating nb-NO string: Objektmedlem kan ikke konfigureres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektmedlem kan ikke konfigureres", function (err, _translation) {
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
describe("translating nb-NO string: Variabel ikke definert i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variabel ikke definert i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Tilgang til egenskapen caller for en funksjon eller et argumentobjekt er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tilgang til egenskapen caller for en funksjon eller et argumentobjekt er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Tilgang til egenskapen callee for et argumentobjekt er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tilgang til egenskapen callee for et argumentobjekt er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Tilordning til skrivebeskyttede egenskaper er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tilordning til skrivebeskyttede egenskaper er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke opprette egenskap for et ikke-utvidbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke opprette egenskap for et ikke-utvidbart objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en funksjon", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en funksjon", function (err, _translation) {
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
describe("translating nb-NO string: Egenskapen kan ikke ha både aksessorer og en verdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskapen kan ikke ha både aksessorer og en verdi", function (err, _translation) {
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
describe("translating nb-NO string: \"this\" er null eller udefinert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"this\" er null eller udefinert", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en funksjon", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en streng", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en streng", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en boolsk verdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en boolsk verdi", function (err, _translation) {
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
describe("translating nb-NO string: Forventet dato", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet dato", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et tall", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et tall", function (err, _translation) {
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
describe("translating nb-NO string: Forventet VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet VBArray", function (err, _translation) {
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
describe("translating nb-NO string: Forventet JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet JavaScript-objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et oppregningsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et oppregningsobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected/g);
	});
});
describe("translating nb-NO string: Forventet RegExp-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet RegExp-objekt", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig funksjonsargument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig funksjonsargument", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet JavaScript-objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet en funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet en funksjon", function (err, _translation) {
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
describe("translating nb-NO string: Forventet VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet VBArray", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig length-egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig length-egenskap", function (err, _translation) {
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
describe("translating nb-NO string: Forventet et matrise- eller argumentobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet et matrise- eller argumentobjekt", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
	});
});
describe("translating nb-NO string: Ugyldig operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig operand", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig operand", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig egenskapsbeskrivelse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig egenskapsbeskrivelse", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke definere egenskapen fordi objektet ikke kan utvides", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke definere egenskapen fordi objektet ikke kan utvides", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke omdefinere egenskapen som ikke kan konfigureres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke omdefinere egenskapen som ikke kan konfigureres", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke endre egenskapen som ikke kan skrives", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke endre egenskapen som ikke kan skrives", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke endre egenskapen fordi lengden ikke kan skrives", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke endre egenskapen fordi lengden ikke kan skrives", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke definere egenskapen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke definere egenskapen", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig konstruktørargument for typet matrise", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig konstruktørargument for typet matrise", function (err, _translation) {
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
describe("translating nb-NO string: this er ikke et objekt for typet matrise", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this er ikke et objekt for typet matrise", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig forskyvning/lengde ved oppretting av typet matrise", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig forskyvning/lengde ved oppretting av typet matrise", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig start-/sluttverdi i undermatrisemetode for typet matrise", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig start-/sluttverdi i undermatrisemetode for typet matrise", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig kilde i typet matrisesett", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig kilde i typet matrisesett", function (err, _translation) {
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
describe("translating nb-NO string: this er ikke et DataView-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this er ikke et DataView-objekt", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldige argumenter i DataView", function () {
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
describe("translating nb-NO string: Tilgang til DataView-operasjon utenfor angitt bufferlengde", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tilgang til DataView-operasjon utenfor angitt bufferlengde", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldige argumenter i DataView", function () {
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
describe("translating nb-NO string: ugyldig funksjonssignatur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldig funksjonssignatur", function (err, _translation) {
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
describe("translating nb-NO string: ugyldig egenskapssignatur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldig egenskapssignatur", function (err, _translation) {
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
describe("translating nb-NO string: ugyldig inndataparametertype", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldig inndataparametertype", function (err, _translation) {
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
describe("translating nb-NO string: ugyldig utdataparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ugyldig utdataparameter", function (err, _translation) {
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
describe("translating nb-NO string: Tilgang til egenskapen arguments for en funksjon er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tilgang til egenskapen arguments for en funksjon er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Forventet inspiserbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet inspiserbart objekt", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere argumentet til typen char", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere argumentet til typen char", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere argumentet til typen GUID", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere argumentet til typen GUID", function (err, _translation) {
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
describe("translating nb-NO string: Forventet IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Forventet IInspectable", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere objektet til struktur: Objekt mangler forventet egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere objektet til struktur: Objekt mangler forventet egenskap", function (err, _translation) {
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
describe("translating nb-NO string: Ukjent type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ukjent type", function (err, _translation) {
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
describe("translating nb-NO string: Funksjonen ble kalt med for få argumenter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funksjonen ble kalt med for få argumenter", function (err, _translation) {
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
describe("translating nb-NO string: Typen er ikke konstruerbar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typen er ikke konstruerbar", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere verdien til PropertyValue: Typen støttes ikke av PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere verdien til PropertyValue: Typen støttes ikke av PropertyValue", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere verdien til IInspectable: Typen støttes ikke av IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere verdien til IInspectable: Typen støttes ikke av IInspectable", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere dato til Windows.Foundation.DateTime: Verdien er utenfor gyldig område", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere dato til Windows.Foundation.DateTime: Verdien er utenfor gyldig område", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere verdi til Windows.Foundation.TimeSpan: Verdien er utenfor gyldig område", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere verdi til Windows.Foundation.TimeSpan: Verdien er utenfor gyldig område", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig tilgang til et allerede frigitt inspiserbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig tilgang til et allerede frigitt inspiserbart objekt", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke frigi et allerede frigitt inspiserbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke frigi et allerede frigitt inspiserbart objekt", function (err, _translation) {
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
describe("translating nb-NO string: this er ikke av den forventede typen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this er ikke av den forventede typen", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig lengde og størrelse angitt for matrisen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig lengde og størrelse angitt for matrisen", function (err, _translation) {
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
describe("translating nb-NO string: Det oppstod en utventet feil under forsøk på å hente metadatainformasjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det oppstod en utventet feil under forsøk på å hente metadatainformasjon", function (err, _translation) {
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
describe("translating nb-NO string: Statusen er \"feil\", men getResults returnerte ingen feil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Statusen er \"feil\", men getResults returnerte ingen feil", function (err, _translation) {
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
describe("translating nb-NO string: Manglende eller ugyldig statusparameter sendt til fullført behandlingsprogram", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Manglende eller ugyldig statusparameter sendt til fullført behandlingsprogram", function (err, _translation) {
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
describe("translating nb-NO string: Manglende eller ugyldig avsenderparameter sendt til fullført behandlingsprogram", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Manglende eller ugyldig avsenderparameter sendt til fullført behandlingsprogram", function (err, _translation) {
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
describe("translating nb-NO string: Uendelighet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uendelighet", function (err, _translation) {
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
describe("translating nb-NO string: -Uendelighet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Uendelighet", function (err, _translation) {
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
describe("translating nb-NO string: Objektet støtter ikke egenskapen eller metoden MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet støtter ikke egenskapen eller metoden MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: Argument for funksjonen MyDynamicTestString er ikke valgfritt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument for funksjonen MyDynamicTestString er ikke valgfritt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et tall", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et tall", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke en funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke en funksjon", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et indekserbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et indekserbart objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke en streng", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke en streng", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et datoobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et datoobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er null eller ikke et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er null eller ikke et objekt", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke tilordne til MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke tilordne til MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er udefinert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er udefinert", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke en boolsk verdi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke en boolsk verdi", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke slette MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke slette MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke VBArray", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et JavaScript-objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et oppregningsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et oppregningsobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et vanlig uttrykk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et vanlig uttrykk", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et objekt av typen Array eller arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et objekt av typen Array eller arguments", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString er ikke et Array-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString er ikke et Array-objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString-attributtet i egenskapsbeskrivelsen kan ikke settes til true for dette objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString-attributtet i egenskapsbeskrivelsen kan ikke settes til true for dette objektet", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString-attributtet i egenskapsbeskrivelsen kan ikke settes til false for dette objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString-attributtet i egenskapsbeskrivelsen kan ikke settes til false for dette objektet", function (err, _translation) {
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
describe("translating nb-NO string: Ny deklarering av konstanten MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ny deklarering av konstanten MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: Kall av sletting i MyDynamicTestString er ikke tillatt i streng modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kall av sletting i MyDynamicTestString er ikke tillatt i streng modus", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke angi egenskapen MyDynamicTestString når den er udefinert eller har nullreferanse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke angi egenskapen MyDynamicTestString når den er udefinert eller har nullreferanse", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke hente egenskapen MyDynamicTestString når den er udefinert eller har nullreferanse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke hente egenskapen MyDynamicTestString når den er udefinert eller har nullreferanse", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke slette egenskapen MyDynamicTestString når den er udefinert eller har nullreferanse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke slette egenskapen MyDynamicTestString når den er udefinert eller har nullreferanse", function (err, _translation) {
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
describe("translating nb-NO string: Ingen tilgang til egenskapen MyDynamicTestString: VarDate-typen støtter ikke brukerdefinerte egenskaper", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ingen tilgang til egenskapen MyDynamicTestString: VarDate-typen støtter ikke brukerdefinerte egenskaper", function (err, _translation) {
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
describe("translating nb-NO string: Verdien for egenskapen MyDynamicTestString er ikke et funksjonsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Verdien for egenskapen MyDynamicTestString er ikke et funksjonsobjekt", function (err, _translation) {
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
describe("translating nb-NO string: Verdien for egenskapen MyDynamicTestString er null eller udefinert, ikke et funksjonsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Verdien for egenskapen MyDynamicTestString er null eller udefinert, ikke et funksjonsobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er null eller udefinert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er null eller udefinert", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et funksjonsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et funksjonsobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et strengeobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et strengeobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et boolsk objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et boolsk objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et datoobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et datoobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et nummerobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et nummerobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et VBArray-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et VBArray-objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et JavaScript-objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et oppregningsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et oppregningsobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et RegExp-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et RegExp-objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: ugyldig argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: ugyldig argument", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: argumentet er ikke et objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet er ikke et objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: argumentet er ikke et JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet er ikke et JavaScript-objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: argumentet er ikke et funksjonsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet er ikke et funksjonsobjekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: argumentet er ikke et VBArray-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet er ikke et VBArray-objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: argumentet er null eller udefinert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet er null eller udefinert", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: argumentet er ikke et objekt og er ikke null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet er ikke et objekt og er ikke null", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: argumentet har ingen gyldig length-egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet har ingen gyldig length-egenskap", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: Forventet et matrise- eller argumentobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Forventet et matrise- eller argumentobjekt", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig operand for MyDynamicTestString: forventet objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig operand for MyDynamicTestString: forventet objekt", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig operand for MyDynamicTestString: forventet funksjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig operand for MyDynamicTestString: forventet funksjon", function (err, _translation) {
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
describe("translating nb-NO string: Ugyldig beskrivelse for egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ugyldig beskrivelse for egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke definere egenskapen MyDynamicTestString fordi objektet ikke kan utvides", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke definere egenskapen MyDynamicTestString fordi objektet ikke kan utvides", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke omdefinere egenskapen MyDynamicTestString som ikke kan konfigureres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke omdefinere egenskapen MyDynamicTestString som ikke kan konfigureres", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke endre egenskapen MyDynamicTestString som ikke kan skrives", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke endre egenskapen MyDynamicTestString som ikke kan skrives", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke endre egenskapen MyDynamicTestString fordi lengden ikke kan skrives", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke endre egenskapen MyDynamicTestString fordi lengden ikke kan skrives", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke definere egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke definere egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: Nødvendig argument MyDynamicTestString i DataView-metode er ikke angitt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nødvendig argument MyDynamicTestString i DataView-metode er ikke angitt", function (err, _translation) {
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
describe("translating nb-NO string: DataView-konstruktørargumentet MyDynamicTestString er ugyldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView-konstruktørargumentet MyDynamicTestString er ugyldig", function (err, _translation) {
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
describe("translating nb-NO string: Funksjonen MyDynamicTestString har en ugyldig signatur, og kan ikke kalles", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funksjonen MyDynamicTestString har en ugyldig signatur, og kan ikke kalles", function (err, _translation) {
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
describe("translating nb-NO string: Egenskapen MyDynamicTestString har en ugyldig signatur, og er ikke tilgjengelig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskapen MyDynamicTestString har en ugyldig signatur, og er ikke tilgjengelig", function (err, _translation) {
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
describe("translating nb-NO string: Kjøretidsklassen MyDynamicTestString, som har Windows.Foundation.IPropertyValue som standardgrensesnitt, støttes ikke som inndataparametertype", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kjøretidsklassen MyDynamicTestString, som har Windows.Foundation.IPropertyValue som standardgrensesnitt, støttes ikke som inndataparametertype", function (err, _translation) {
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
describe("translating nb-NO string: Objektet med grensesnittet Windows.Foundation.IPropertyValue som har kjøretidsklassenavnet MyDynamicTestString, støttes ikke som utdataparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet med grensesnittet Windows.Foundation.IPropertyValue som har kjøretidsklassenavnet MyDynamicTestString, støttes ikke som utdataparameter", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: \"this\" er ikke et inspiserbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" er ikke et inspiserbart objekt", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: Kan ikke konvertere argumentet til typen char", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Kan ikke konvertere argumentet til typen char", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: Kan ikke konvertere argumentet til typen GUID", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Kan ikke konvertere argumentet til typen GUID", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: Kan ikke konvertere returverdi til IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Kan ikke konvertere returverdi til IInspectable", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere objekt til struktur: Objektet mangler den forventede egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere objekt til struktur: Objektet mangler den forventede egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: Finner ikke typen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Finner ikke typen MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: Funksjonen ble kalt med for få argumenter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Funksjonen ble kalt med for få argumenter", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: Typen er ikke konstruerbar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Typen er ikke konstruerbar", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere verdien til PropertyValue: MyDynamicTestString støttes ikke av PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere verdien til PropertyValue: MyDynamicTestString støttes ikke av PropertyValue", function (err, _translation) {
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
describe("translating nb-NO string: Kan ikke konvertere verdien til IInspectable: MyDynamicTestString støttes ikke av IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan ikke konvertere verdien til IInspectable: MyDynamicTestString støttes ikke av IInspectable", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: Det inspiserbare objektet \"this\" er frigitt og kan ikke brukes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Det inspiserbare objektet \"this\" er frigitt og kan ikke brukes", function (err, _translation) {
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
describe("translating nb-NO string: this er ikke av den forventede typen: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this er ikke av den forventede typen: MyDynamicTestString", function (err, _translation) {
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
describe("translating nb-NO string: MyDynamicTestString: det oppstod en uventet feil under forsøk på å hente metadatainformasjon", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: det oppstod en uventet feil under forsøk på å hente metadatainformasjon", function (err, _translation) {
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
describe("translating nb-NO string: Den angitte datoen er ikke tilgjengelig i kalenderen under de gjeldende nasjonale innstillingene", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den angitte datoen er ikke tilgjengelig i kalenderen under de gjeldende nasjonale innstillingene", function (err, _translation) {
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
