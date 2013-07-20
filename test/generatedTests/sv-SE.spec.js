var errorToEnglish = require("../../lib/errortoenglish");
describe("translating sv-SE string: Ogiltigt proceduranrop eller argument.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltigt proceduranrop eller argument.", function (err, _translation) {
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
describe("translating sv-SE string: Spill", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Spill", function (err, _translation) {
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
describe("translating sv-SE string: Slut på minne.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Slut på minne.", function (err, _translation) {
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
describe("translating sv-SE string: Felaktigt matrisindex", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Felaktigt matrisindex", function (err, _translation) {
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
describe("translating sv-SE string: Matrisen är fast eller tillfälligt låst.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Matrisen är fast eller tillfälligt låst.", function (err, _translation) {
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
describe("translating sv-SE string: Division med noll", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Division med noll", function (err, _translation) {
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
describe("translating sv-SE string: Inkompatibla typer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inkompatibla typer", function (err, _translation) {
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
describe("translating sv-SE string: Slut på strängutrymme.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Slut på strängutrymme.", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att utföra begärd åtgärd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att utföra begärd åtgärd", function (err, _translation) {
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
describe("translating sv-SE string: Slut på stackutrymme.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Slut på stackutrymme.", function (err, _translation) {
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
describe("translating sv-SE string: Sub eller Function har inte definierats", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub eller Function har inte definierats", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ladda DLL-filen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ladda DLL-filen", function (err, _translation) {
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
describe("translating sv-SE string: Internt fel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Internt fel", function (err, _translation) {
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
describe("translating sv-SE string: Felaktigt filnamn eller filnummer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Felaktigt filnamn eller filnummer", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att hitta filen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att hitta filen.", function (err, _translation) {
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
describe("translating sv-SE string: Felaktigt filåtkomstläge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Felaktigt filåtkomstläge", function (err, _translation) {
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
describe("translating sv-SE string: Filen är redan öppen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Filen är redan öppen", function (err, _translation) {
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
describe("translating sv-SE string: Läs/skrivfel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Läs/skrivfel", function (err, _translation) {
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
describe("translating sv-SE string: Filen finns redan.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Filen finns redan.", function (err, _translation) {
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
describe("translating sv-SE string: Slut på diskutrymme.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Slut på diskutrymme.", function (err, _translation) {
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
describe("translating sv-SE string: Indata överskrider filslut", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Indata överskrider filslut", function (err, _translation) {
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
describe("translating sv-SE string: För många öppna filer.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("För många öppna filer.", function (err, _translation) {
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
describe("translating sv-SE string: Enheten är inte tillgänglig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enheten är inte tillgänglig", function (err, _translation) {
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
describe("translating sv-SE string: Åtkomst nekad.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Åtkomst nekad.", function (err, _translation) {
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
describe("translating sv-SE string: Disken är inte klar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disken är inte klar", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att döpa om filen på en annan enhet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att döpa om filen på en annan enhet", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att hitta angiven fil eller sökväg.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att hitta angiven fil eller sökväg.", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att hitta angiven sökväg.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att hitta angiven sökväg.", function (err, _translation) {
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
describe("translating sv-SE string: Objektvariabel eller With-blockvariabel har inte angetts", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektvariabel eller With-blockvariabel har inte angetts", function (err, _translation) {
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
describe("translating sv-SE string: For-loop har inte initierats", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For-loop har inte initierats", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig användning av Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig användning av Null", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att skapa nödvändig temporär fil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att skapa nödvändig temporär fil", function (err, _translation) {
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
describe("translating sv-SE string: Objekt krävs.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt krävs.", function (err, _translation) {
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
describe("translating sv-SE string: Automation-server kan inte skapa objekt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automation-server kan inte skapa objekt.", function (err, _translation) {
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
describe("translating sv-SE string: Klassen stöder inte Automation.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Klassen stöder inte Automation.", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att hitta fil- eller klassnamn under Automation-åtgärden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att hitta fil- eller klassnamn under Automation-åtgärden.", function (err, _translation) {
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
describe("translating sv-SE string: Objektet stöder inte egenskapen eller metoden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet stöder inte egenskapen eller metoden.", function (err, _translation) {
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
describe("translating sv-SE string: Automation-fel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automation-fel", function (err, _translation) {
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
describe("translating sv-SE string: Objektet kan inte hantera denna åtgärd.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet kan inte hantera denna åtgärd.", function (err, _translation) {
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
describe("translating sv-SE string: Namngivna argument stöds inte av objektet.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Namngivna argument stöds inte av objektet.", function (err, _translation) {
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
describe("translating sv-SE string: Objektet stöder inte de aktuella landsinställningarna.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet stöder inte de aktuella landsinställningarna.", function (err, _translation) {
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
describe("translating sv-SE string: Det namngivna argumentet finns inte.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det namngivna argumentet finns inte.", function (err, _translation) {
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
describe("translating sv-SE string: Argumentet är inte valfritt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentet är inte valfritt.", function (err, _translation) {
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
describe("translating sv-SE string: Fel antal argument eller felaktig egenskapstilldelning.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fel antal argument eller felaktig egenskapstilldelning.", function (err, _translation) {
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
describe("translating sv-SE string: Objektet måste vara en mängd.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet måste vara en mängd.", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att hitta angiven DLL-funktion.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att hitta angiven DLL-funktion.", function (err, _translation) {
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
describe("translating sv-SE string: Variabeln använder en Automation-typ som inte kan användas i JavaScript.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variabeln använder en Automation-typ som inte kan användas i JavaScript.", function (err, _translation) {
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
describe("translating sv-SE string: Fjärrservern finns inte eller också är den otillgänglig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fjärrservern finns inte eller också är den otillgänglig", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att tilldela en variabel.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att tilldela en variabel.", function (err, _translation) {
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
describe("translating sv-SE string: Objektet är inte säkert nog att använda i skript.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet är inte säkert nog att använda i skript.", function (err, _translation) {
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
describe("translating sv-SE string: Objektet är inte säkert nog att initiera.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet är inte säkert nog att initiera.", function (err, _translation) {
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
describe("translating sv-SE string: Objektet är inte säkert och kan inte skapas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet är inte säkert och kan inte skapas", function (err, _translation) {
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
describe("translating sv-SE string: Ett undantag uppstod", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett undantag uppstod", function (err, _translation) {
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
describe("translating sv-SE string: Slut på minne.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Slut på minne.", function (err, _translation) {
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
describe("translating sv-SE string: Syntaxfel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaxfel", function (err, _translation) {
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
describe("translating sv-SE string: ':' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: ';' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: '(' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'(' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: ')' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: ']' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: '{' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: '}' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Identifierare förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identifierare förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: '=' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'=' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: '/' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltigt tal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltigt tal", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltigt tecken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltigt tecken", function (err, _translation) {
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
describe("translating sv-SE string: Oavslutad strängkonstant", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oavslutad strängkonstant", function (err, _translation) {
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
describe("translating sv-SE string: Oavslutad kommentar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oavslutad kommentar", function (err, _translation) {
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
describe("translating sv-SE string: 'return'-instruktion får inte förekomma utanför funktion.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'return'-instruktion får inte förekomma utanför funktion.", function (err, _translation) {
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
describe("translating sv-SE string: 'break' får inte förekomma utanför loop.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'break' får inte förekomma utanför loop.", function (err, _translation) {
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
describe("translating sv-SE string: 'continue' får inte förekomma utanför loop.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'continue' får inte förekomma utanför loop.", function (err, _translation) {
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
describe("translating sv-SE string: Ett hexadecimalt tal förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett hexadecimalt tal förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Förväntade 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Förväntade 'while'", function (err, _translation) {
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
describe("translating sv-SE string: Definiera om etikett.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Definiera om etikett.", function (err, _translation) {
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
describe("translating sv-SE string: Etiketten kunde inte hittas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Etiketten kunde inte hittas.", function (err, _translation) {
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
describe("translating sv-SE string: 'default' kan bara förekomma en gång i en 'switch' -instruktion.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' kan bara förekomma en gång i en 'switch' -instruktion.", function (err, _translation) {
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
describe("translating sv-SE string: Identifierare, sträng eller tal förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identifierare, sträng eller tal förväntas", function (err, _translation) {
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
describe("translating sv-SE string: '@end' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Villkorlig kompilering har stängts av", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Villkorlig kompilering har stängts av", function (err, _translation) {
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
describe("translating sv-SE string: Konstant förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Konstant förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: '@' förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: 'catch' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: 'var' förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var' förväntas", function (err, _translation) {
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
describe("translating sv-SE string: throw måste följas av ett uttryck på samma källrad", function () {
	var translation;
	before(function (done) {
		errorToEnglish("throw måste följas av ett uttryck på samma källrad", function (err, _translation) {
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
describe("translating sv-SE string: with-instruktioner tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("with-instruktioner tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Dubblettnamn på formella parametrar tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dubblettnamn på formella parametrar tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Oktala numeriska litteraler och escape-tecken tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oktala numeriska litteraler och escape-tecken tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig användning av eval i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig användning av eval i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig användning av arguments i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig användning av arguments i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Anrop av delete i uttryck tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Anrop av delete i uttryck tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Flera definitioner för en egenskap tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Flera definitioner för en egenskap tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: I strikt läge kan inte function-deklarationer kapslas i ett villkor eller ett block. De kan endast visas vid toppnivån eller direkt i brödtext för function.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("I strikt läge kan inte function-deklarationer kapslas i ett villkor eller ett block. De kan endast visas vid toppnivån eller direkt i brödtext för function.", function (err, _translation) {
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
describe("translating sv-SE string: Användandet av ett nyckelord för en identifierare är ogiltigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Användandet av ett nyckelord för en identifierare är ogiltigt", function (err, _translation) {
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
describe("translating sv-SE string: Användandet av ett reserverat ord för en identifierare är ogiltigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Användandet av ett reserverat ord för en identifierare är ogiltigt", function (err, _translation) {
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
describe("translating sv-SE string: Användandet av ett reserverat ord för en identifierare är ogiltigt. Namnet på identifieraren är reserverat i strikt läge.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Användandet av ett reserverat ord för en identifierare är ogiltigt. Namnet på identifieraren är reserverat i strikt läge.", function (err, _translation) {
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
describe("translating sv-SE string: Setter-funktioner måste ha ett argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Setter-funktioner måste ha ett argument", function (err, _translation) {
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
describe("translating sv-SE string: Kompileringsfel i JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kompileringsfel i JavaScript", function (err, _translation) {
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
describe("translating sv-SE string: Körningsfel i JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Körningsfel i JavaScript", function (err, _translation) {
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
describe("translating sv-SE string: Okänt körningsfel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Okänt körningsfel", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att tilldela 'this'.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att tilldela 'this'.", function (err, _translation) {
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
describe("translating sv-SE string: Ett tal förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett tal förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: En funktion förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att tilldela ett funktionsresultat.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att tilldela ett funktionsresultat.", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att indexera objekt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att indexera objekt.", function (err, _translation) {
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
describe("translating sv-SE string: En sträng förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En sträng förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Ett datumobjekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett datumobjekt förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: Vänster sida i tilldelningen är ogiltig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vänster sida i tilldelningen är ogiltig", function (err, _translation) {
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
describe("translating sv-SE string: Odefinierad identifierare.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Odefinierad identifierare.", function (err, _translation) {
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
describe("translating sv-SE string: Ett boolskt värde förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett boolskt värde förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att köra kod från detta skript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att köra kod från detta skript", function (err, _translation) {
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
describe("translating sv-SE string: Objektmedlem förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektmedlem förväntas", function (err, _translation) {
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
describe("translating sv-SE string: VBArray förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ett JavaScript-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett JavaScript-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Uppräkningsobjekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uppräkningsobjekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ett reguljärt uttryck förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett reguljärt uttryck förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Syntaxfel i reguljärt uttryck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaxfel i reguljärt uttryck", function (err, _translation) {
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
describe("translating sv-SE string: Oväntad kvantifierare", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oväntad kvantifierare", function (err, _translation) {
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
describe("translating sv-SE string: Förväntade ']' i reguljärt uttryck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Förväntade ']' i reguljärt uttryck", function (err, _translation) {
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
describe("translating sv-SE string: Förväntade ')' i reguljärt uttryck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Förväntade ')' i reguljärt uttryck", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltigt intervall i teckenuppsättning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltigt intervall i teckenuppsättning", function (err, _translation) {
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
describe("translating sv-SE string: Undantag thrown och inte caught", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Undantag thrown och inte caught", function (err, _translation) {
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
describe("translating sv-SE string: Funktionen saknar ett giltigt prototypobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktionen saknar ett giltigt prototypobjekt", function (err, _translation) {
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
describe("translating sv-SE string: Den URI som ska kodas innehåller ett ogiltigt tecken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den URI som ska kodas innehåller ett ogiltigt tecken", function (err, _translation) {
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
describe("translating sv-SE string: Den URI som ska avkodas är inte en giltig kodning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Den URI som ska avkodas är inte en giltig kodning", function (err, _translation) {
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
describe("translating sv-SE string: Antalet bråktal är utanför intervallet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Antalet bråktal är utanför intervallet", function (err, _translation) {
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
describe("translating sv-SE string: Precisionen är utanför intervallet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Precisionen är utanför intervallet", function (err, _translation) {
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
describe("translating sv-SE string: Ett Array- eller arguments-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett Array- eller arguments-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Matrislängden måste vara ett ändligt positivt heltal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Matrislängden måste vara ett ändligt positivt heltal", function (err, _translation) {
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
describe("translating sv-SE string: Ett ändligt positivt heltal måste anges för matrislängden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett ändligt positivt heltal måste anges för matrislängden", function (err, _translation) {
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
describe("translating sv-SE string: Array-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Cirkelreferens i värdeargument stöds inte", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cirkelreferens i värdeargument stöds inte", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltigt ersättningsargument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltigt ersättningsargument", function (err, _translation) {
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
describe("translating sv-SE string: Argumentlistan är för stor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentlistan är för stor", function (err, _translation) {
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
describe("translating sv-SE string: Omdeklaration av const-egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Omdeklaration av const-egenskap", function (err, _translation) {
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
describe("translating sv-SE string: Objektmedlem kan inte konfigureras", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektmedlem kan inte konfigureras", function (err, _translation) {
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
describe("translating sv-SE string: Odefinierad variabel i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Odefinierad variabel i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Åtkomst av caller-egenskapen för en funktion eller ett arguments-objekt tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Åtkomst av caller-egenskapen för en funktion eller ett arguments-objekt tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Åtkomst av callee-egenskapen för ett arguments-objekt tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Åtkomst av callee-egenskapen för ett arguments-objekt tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Tilldelning av skrivskyddade egenskaper tillåts inte i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tilldelning av skrivskyddade egenskaper tillåts inte i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att skapa en egenskap för ett objekt som inte är extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att skapa en egenskap för ett objekt som inte är extensible", function (err, _translation) {
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
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: En funktion förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: En funktion förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Egenskapen kan inte ha både accessorer och ett värde", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskapen kan inte ha både accessorer och ett värde", function (err, _translation) {
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
describe("translating sv-SE string: 'this' är null eller odefinierat", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' är null eller odefinierat", function (err, _translation) {
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
describe("translating sv-SE string: Ett objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected/g);
	});
});
describe("translating sv-SE string: En funktion förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: En sträng förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En sträng förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Ett boolskt värde förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett boolskt värde förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: Ett datum förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett datum förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ett tal förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett tal förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: VBArray förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ett JavaScript-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett JavaScript-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Uppräkningsobjekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uppräkningsobjekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: RegExp-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("RegExp-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltigt funktionsargument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltigt funktionsargument", function (err, _translation) {
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
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: Ett JavaScript-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett JavaScript-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: En funktion förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En funktion förväntas.", function (err, _translation) {
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
describe("translating sv-SE string: VBArray förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: Ett objekt förväntas.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett objekt förväntas.", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating sv-SE string: Ogiltig length-egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig length-egenskap", function (err, _translation) {
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
describe("translating sv-SE string: Ett Array- eller arguments-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett Array- eller arguments-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig operand", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig operand", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig egenskapsbeskrivning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig egenskapsbeskrivning", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att definiera egenskapen: objektet är inte utökningsbart", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att definiera egenskapen: objektet är inte utökningsbart", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att definiera om den icke-konfigurerbara egenskapen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att definiera om den icke-konfigurerbara egenskapen", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ändra den icke-skrivbara egenskapen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ändra den icke-skrivbara egenskapen", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ändra egenskapen: length är inte skrivbart", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ändra egenskapen: length är inte skrivbart", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att definiera egenskapen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att definiera egenskapen", function (err, _translation) {
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
describe("translating sv-SE string: Det angivna matriskonstruktorargumentet är ogiltigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det angivna matriskonstruktorargumentet är ogiltigt", function (err, _translation) {
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
describe("translating sv-SE string: this är inte ett angivet matrisobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this är inte ett angivet matrisobjekt", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig förskjutning/längd när angiven matris skapades", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig förskjutning/längd när angiven matris skapades", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltigt början/slut i angiven matris/undermatris-metod", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltigt början/slut i angiven matris/undermatris-metod", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig källa i angiven matrisuppsättning", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig källa i angiven matrisuppsättning", function (err, _translation) {
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
describe("translating sv-SE string: this är inte ett DataView-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this är inte ett DataView-objekt", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltiga argument i DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltiga argument i DataView", function (err, _translation) {
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
describe("translating sv-SE string: DataView-operationen överstiger den angivna buffertlängden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView-operationen överstiger den angivna buffertlängden", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltiga argument i DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltiga argument i DataView", function (err, _translation) {
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
describe("translating sv-SE string: ogiltig funktionssignatur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ogiltig funktionssignatur", function (err, _translation) {
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
describe("translating sv-SE string: ogiltig egenskapssignatur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ogiltig egenskapssignatur", function (err, _translation) {
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
describe("translating sv-SE string: ogiltig inmatningsparametertyp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ogiltig inmatningsparametertyp", function (err, _translation) {
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
describe("translating sv-SE string: ogiltig utdataparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ogiltig utdataparameter", function (err, _translation) {
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
describe("translating sv-SE string: Åtkomst till egenskapen argument för en funktion är inte tillåten i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Åtkomst till egenskapen argument för en funktion är inte tillåten i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Inspectable-objekt förväntades", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inspectable-objekt förväntades", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera argumentet till typen char", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera argumentet till typen char", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera argumentet till typen GUID", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera argumentet till typen GUID", function (err, _translation) {
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
describe("translating sv-SE string: IInspectable förväntades", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable förväntades", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera objektet till en struktur: objektet saknar en förväntad egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera objektet till en struktur: objektet saknar en förväntad egenskap", function (err, _translation) {
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
describe("translating sv-SE string: Okänd typ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Okänd typ", function (err, _translation) {
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
describe("translating sv-SE string: Funktionen anropades med för få argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktionen anropades med för få argument", function (err, _translation) {
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
describe("translating sv-SE string: Typen är inte konstruerbar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typen är inte konstruerbar", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera värdet till PropertyValue: typen stöds inte av PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera värdet till PropertyValue: typen stöds inte av PropertyValue", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera värdet till IInspectable: typen stöds inte av IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera värdet till IInspectable: typen stöds inte av IInspectable", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera datumet till Windows.Foundation.DateTime: värdet ligger utanför det tillåtna intervallet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera datumet till Windows.Foundation.DateTime: värdet ligger utanför det tillåtna intervallet", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera värdet till Windows.Foundation.TimeSpan: värdet ligger utanför det tillåtna intervallet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera värdet till Windows.Foundation.TimeSpan: värdet ligger utanför det tillåtna intervallet", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig åtkomst till redan frisläppt Inspectable-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig åtkomst till redan frisläppt Inspectable-objekt", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att frisläppa ett redan frisläppt Inspectable-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att frisläppa ett redan frisläppt Inspectable-objekt", function (err, _translation) {
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
describe("translating sv-SE string: this är inte av den förväntade typen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this är inte av den förväntade typen", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig längd och storlek har angetts för matrisen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig längd och storlek har angetts för matrisen", function (err, _translation) {
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
describe("translating sv-SE string: Ett oväntat fel uppstod under ett försök att erhålla metadatainformation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ett oväntat fel uppstod under ett försök att erhålla metadatainformation", function (err, _translation) {
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
describe("translating sv-SE string: Status är error, men inget fel returnerades av getResults", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Status är error, men inget fel returnerades av getResults", function (err, _translation) {
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
describe("translating sv-SE string: En status-parameter som saknas eller är ogiltig har skickats till den slutförda hanteraren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En status-parameter som saknas eller är ogiltig har skickats till den slutförda hanteraren", function (err, _translation) {
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
describe("translating sv-SE string: En sender-parameter som saknas eller är ogiltig har skickats till den slutförda hanteraren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En sender-parameter som saknas eller är ogiltig har skickats till den slutförda hanteraren", function (err, _translation) {
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
describe("translating sv-SE string: Oändligt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oändligt", function (err, _translation) {
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
describe("translating sv-SE string: -Oändligt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Oändligt", function (err, _translation) {
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
describe("translating sv-SE string: Egenskapen eller metoden MyDynamicTestString stöds inte av objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskapen eller metoden MyDynamicTestString stöds inte av objektet", function (err, _translation) {
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
describe("translating sv-SE string: Argumentet för funktionen MyDynamicTestString är inte valfritt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentet för funktionen MyDynamicTestString är inte valfritt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett tal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett tal", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte en funktion", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte en funktion", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett indexerbart objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett indexerbart objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte en sträng", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte en sträng", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett datumobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett datumobjekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString har värdet null eller är inte ett objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString har värdet null eller är inte ett objekt", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att tilldela till MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att tilldela till MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString har inte definierats", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString har inte definierats", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett booleskt värde", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett booleskt värde", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ta bort MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ta bort MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte en VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte en VBArray", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett JavaScript-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett uppräkningsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett uppräkningsobjekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett reguljärt uttryck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett reguljärt uttryck", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett Array- eller arguments-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett Array- eller arguments-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString är inte ett Array-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString är inte ett Array-objekt", function (err, _translation) {
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
describe("translating sv-SE string: Attributet MyDynamicTestString för egenskapsbeskrivningen får inte ha värdet true för det här objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Attributet MyDynamicTestString för egenskapsbeskrivningen får inte ha värdet true för det här objektet", function (err, _translation) {
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
describe("translating sv-SE string: Attributet MyDynamicTestString för egenskapsbeskrivningen får inte ha värdet false för det här objektet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Attributet MyDynamicTestString för egenskapsbeskrivningen får inte ha värdet false för det här objektet", function (err, _translation) {
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
describe("translating sv-SE string: Omdeklaration av const MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Omdeklaration av const MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: Det är inte tillåtet att anropa delete för MyDynamicTestString i strikt läge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det är inte tillåtet att anropa delete för MyDynamicTestString i strikt läge", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ange egenskapen MyDynamicTestString för en referens som är odefinierad eller null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ange egenskapen MyDynamicTestString för en referens som är odefinierad eller null", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att hämta egenskapen MyDynamicTestString för en referens som är odefinierad eller null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att hämta egenskapen MyDynamicTestString för en referens som är odefinierad eller null", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ta bort egenskapen MyDynamicTestString för en referens som är odefinierad eller null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ta bort egenskapen MyDynamicTestString för en referens som är odefinierad eller null", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att komma åt egenskapen MyDynamicTestString: typen VarDate stöder inte användardefinierade egenskaper", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att komma åt egenskapen MyDynamicTestString: typen VarDate stöder inte användardefinierade egenskaper", function (err, _translation) {
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
describe("translating sv-SE string: Värdet för egenskapen MyDynamicTestString är inte ett Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Värdet för egenskapen MyDynamicTestString är inte ett Function-objekt", function (err, _translation) {
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
describe("translating sv-SE string: Värdet för egenskapen MyDynamicTestString är null eller odefinierat, inte ett Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Värdet för egenskapen MyDynamicTestString är null eller odefinierat, inte ett Function-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är null eller odefinierat", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är null eller odefinierat", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett Function-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett String-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett String-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett Boolean-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett Boolean-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett Date-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett Date-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett Number-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett Number-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett VBArray-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett VBArray-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett JavaScript-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett Enumerator-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett Enumerator-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: 'this' är inte ett RegExp-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' är inte ett RegExp-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: ogiltigt argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: ogiltigt argument", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: argumentet är inte ett objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet är inte ett objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: argumentet är inte ett JavaScript-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet är inte ett JavaScript-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: argumentet är inte ett Function-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet är inte ett Function-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: argumentet är inte ett VBArray-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet är inte ett VBArray-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: argumentet är null eller odefinierat", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet är null eller odefinierat", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: argumentet är inte ett objekt och är inte null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet är inte ett objekt och är inte null", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: argumentet har inte en giltig length-egenskap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumentet har inte en giltig length-egenskap", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: Array- eller arguments-objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Array- eller arguments-objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig operand för MyDynamicTestString: Objekt förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig operand för MyDynamicTestString: Objekt förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig operand för MyDynamicTestString: Funktion förväntas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig operand för MyDynamicTestString: Funktion förväntas", function (err, _translation) {
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
describe("translating sv-SE string: Ogiltig beskrivning för egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ogiltig beskrivning för egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att definiera egenskapen MyDynamicTestString: objektet är inte utökningsbart", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att definiera egenskapen MyDynamicTestString: objektet är inte utökningsbart", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att definiera om den icke-konfigurerbara egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att definiera om den icke-konfigurerbara egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ändra den icke-skrivbara egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ändra den icke-skrivbara egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att ändra egenskapen MyDynamicTestString: length är inte skrivbart", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att ändra egenskapen MyDynamicTestString: length är inte skrivbart", function (err, _translation) {
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
describe("translating sv-SE string: Det går inte att definiera egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det går inte att definiera egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: Det nödvändiga argumentet MyDynamicTestString i DataView-metod har inte angetts", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det nödvändiga argumentet MyDynamicTestString i DataView-metod har inte angetts", function (err, _translation) {
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
describe("translating sv-SE string: DataView-konstruktorargumentet MyDynamicTestString är ogiltigt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView-konstruktorargumentet MyDynamicTestString är ogiltigt", function (err, _translation) {
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
describe("translating sv-SE string: Funktionen MyDynamicTestString har en ogiltig signatur och kan inte anropas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktionen MyDynamicTestString har en ogiltig signatur och kan inte anropas", function (err, _translation) {
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
describe("translating sv-SE string: Egenskapen MyDynamicTestString har en ogiltig signatur och går inte att komma åt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Egenskapen MyDynamicTestString har en ogiltig signatur och går inte att komma åt", function (err, _translation) {
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
describe("translating sv-SE string: Runtime-klass MyDynamicTestString med Windows.Foundation.IPropertyValue som standardgränssnitt stöds inte som inmatningsparametertyp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Runtime-klass MyDynamicTestString med Windows.Foundation.IPropertyValue som standardgränssnitt stöds inte som inmatningsparametertyp", function (err, _translation) {
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
describe("translating sv-SE string: Objektet med gränssnitt Windows.Foundation.IPropertyValue som har runtime-klassnamn MyDynamicTestString stöds inte som utdataparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektet med gränssnitt Windows.Foundation.IPropertyValue som har runtime-klassnamn MyDynamicTestString stöds inte som utdataparameter", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: this är inget Inspectable-objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: this är inget Inspectable-objekt", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: det gick inte att konvertera argumentet till typen char", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: det gick inte att konvertera argumentet till typen char", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: det gick inte att konvertera argumentet till typen GUID", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: det gick inte att konvertera argumentet till typen GUID", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: det gick inte att konvertera returvärdet till IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: det gick inte att konvertera returvärdet till IInspectable", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera objektet till en struktur: objektet saknar den förväntade egenskapen MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera objektet till en struktur: objektet saknar den förväntade egenskapen MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: Typen MyDynamicTestString hittades inte", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typen MyDynamicTestString hittades inte", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: funktionen anropades med för få argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: funktionen anropades med för få argument", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: typen är inte konstruerbar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: typen är inte konstruerbar", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera värdet till PropertyValue: MyDynamicTestString stöds inte av PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera värdet till PropertyValue: MyDynamicTestString stöds inte av PropertyValue", function (err, _translation) {
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
describe("translating sv-SE string: Det gick inte att konvertera värdet till IInspectable: MyDynamicTestString stöds inte av IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det gick inte att konvertera värdet till IInspectable: MyDynamicTestString stöds inte av IInspectable", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: Inspectable-objektet this har frisläppts och går inte att komma åt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Inspectable-objektet this har frisläppts och går inte att komma åt", function (err, _translation) {
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
describe("translating sv-SE string: this är inte av den förväntade typen: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("this är inte av den förväntade typen: MyDynamicTestString", function (err, _translation) {
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
describe("translating sv-SE string: MyDynamicTestString: Ett oväntat fel uppstod under ett försök att erhålla metadatainformation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Ett oväntat fel uppstod under ett försök att erhålla metadatainformation", function (err, _translation) {
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
describe("translating sv-SE string: Det angivna datumet är inte tillgängligt i kalendern för den aktuella platsen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Det angivna datumet är inte tillgängligt i kalendern för den aktuella platsen", function (err, _translation) {
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
