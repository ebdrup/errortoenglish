var errorToEnglish = require("../../lib/errortoenglish");
describe("translating nl-NL string: Ongeldige procedureaanroep of ongeldig argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige procedureaanroep of ongeldig argument", function (err, _translation) {
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
describe("translating nl-NL string: Overloop", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Overloop", function (err, _translation) {
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
describe("translating nl-NL string: Onvoldoende geheugen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onvoldoende geheugen", function (err, _translation) {
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
describe("translating nl-NL string: Het subscript valt buiten het bereik", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het subscript valt buiten het bereik", function (err, _translation) {
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
describe("translating nl-NL string: Deze matrix ligt vast of is tijdelijk vergrendeld.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Deze matrix ligt vast of is tijdelijk vergrendeld.", function (err, _translation) {
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
describe("translating nl-NL string: Deling door nul", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Deling door nul", function (err, _translation) {
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
describe("translating nl-NL string: Typen komen niet met elkaar overeen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typen komen niet met elkaar overeen", function (err, _translation) {
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
describe("translating nl-NL string: Onvoldoende tekenreeksruimte", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onvoldoende tekenreeksruimte", function (err, _translation) {
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
describe("translating nl-NL string: Kan de opgegeven bewerking niet uitvoeren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de opgegeven bewerking niet uitvoeren", function (err, _translation) {
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
describe("translating nl-NL string: Onvoldoende stackruimte", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onvoldoende stackruimte", function (err, _translation) {
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
describe("translating nl-NL string: Sub of Function is niet gedefinieerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub of Function is niet gedefinieerd", function (err, _translation) {
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
describe("translating nl-NL string: Fout bij laden van DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fout bij laden van DLL", function (err, _translation) {
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
describe("translating nl-NL string: Interne fout", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Interne fout", function (err, _translation) {
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
describe("translating nl-NL string: Bestandsnaam of -nummer onjuist", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bestandsnaam of -nummer onjuist", function (err, _translation) {
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
describe("translating nl-NL string: Bestand is niet gevonden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bestand is niet gevonden", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige bestandsmodus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige bestandsmodus", function (err, _translation) {
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
describe("translating nl-NL string: Het bestand is al geopend", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het bestand is al geopend", function (err, _translation) {
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
describe("translating nl-NL string: I/O-fout in apparaat", function () {
	var translation;
	before(function (done) {
		errorToEnglish("I/O-fout in apparaat", function (err, _translation) {
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
describe("translating nl-NL string: Het bestand bestaat al", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het bestand bestaat al", function (err, _translation) {
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
describe("translating nl-NL string: De schijf is vol", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De schijf is vol", function (err, _translation) {
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
describe("translating nl-NL string: Invoer voorbij bestandseinde", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Invoer voorbij bestandseinde", function (err, _translation) {
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
describe("translating nl-NL string: Er zijn te veel bestanden geopend", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Er zijn te veel bestanden geopend", function (err, _translation) {
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
describe("translating nl-NL string: Apparaat niet beschikbaar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Apparaat niet beschikbaar", function (err, _translation) {
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
describe("translating nl-NL string: Toegang geweigerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Toegang geweigerd", function (err, _translation) {
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
describe("translating nl-NL string: De schijf is niet gereed", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De schijf is niet gereed", function (err, _translation) {
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
describe("translating nl-NL string: Naam wijzigen met ander station niet toegestaan", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Naam wijzigen met ander station niet toegestaan", function (err, _translation) {
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
describe("translating nl-NL string: Toegangsfout bij pad of bestand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Toegangsfout bij pad of bestand", function (err, _translation) {
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
describe("translating nl-NL string: Kan het pad niet vinden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan het pad niet vinden", function (err, _translation) {
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
describe("translating nl-NL string: Objectvariabele of blokvariabele With is niet ingesteld", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objectvariabele of blokvariabele With is niet ingesteld", function (err, _translation) {
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
describe("translating nl-NL string: De For-lus is niet geïnitialiseerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De For-lus is niet geïnitialiseerd", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig gebruik van Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig gebruik van Null", function (err, _translation) {
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
describe("translating nl-NL string: Kan het benodigde tijdelijke bestand niet maken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan het benodigde tijdelijke bestand niet maken", function (err, _translation) {
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
describe("translating nl-NL string: Object vereist", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object vereist", function (err, _translation) {
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
describe("translating nl-NL string: Automatiseringsonderdeel kan object niet maken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automatiseringsonderdeel kan object niet maken", function (err, _translation) {
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
describe("translating nl-NL string: Automatisering wordt niet ondersteund door deze klasse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automatisering wordt niet ondersteund door deze klasse", function (err, _translation) {
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
describe("translating nl-NL string: De bestandsnaam of klassennaam is niet gevonden tijdens de Automation-bewerking", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De bestandsnaam of klassennaam is niet gevonden tijdens de Automation-bewerking", function (err, _translation) {
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
describe("translating nl-NL string: Deze eigenschap of methode wordt niet ondersteund door dit object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Deze eigenschap of methode wordt niet ondersteund door dit object", function (err, _translation) {
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
describe("translating nl-NL string: Automatiseringsfout", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automatiseringsfout", function (err, _translation) {
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
describe("translating nl-NL string: Deze actie wordt niet ondersteund door dit object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Deze actie wordt niet ondersteund door dit object", function (err, _translation) {
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
describe("translating nl-NL string: Benoemde argumenten worden niet ondersteund door het object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Benoemde argumenten worden niet ondersteund door het object", function (err, _translation) {
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
describe("translating nl-NL string: De huidige landinstellingen worden niet ondersteund door het object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De huidige landinstellingen worden niet ondersteund door het object", function (err, _translation) {
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
describe("translating nl-NL string: Kan benoemd argument niet vinden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan benoemd argument niet vinden", function (err, _translation) {
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
describe("translating nl-NL string: Het argument is niet optioneel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het argument is niet optioneel", function (err, _translation) {
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
describe("translating nl-NL string: Onjuist aantal argumenten of ongeldige eigenschaptoewijzingen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onjuist aantal argumenten of ongeldige eigenschaptoewijzingen", function (err, _translation) {
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
describe("translating nl-NL string: Dit object is geen collectie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dit object is geen collectie", function (err, _translation) {
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
describe("translating nl-NL string: Kan opgegeven DLL-functie niet vinden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan opgegeven DLL-functie niet vinden", function (err, _translation) {
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
describe("translating nl-NL string: Variabele maakt gebruik van een automatiseringstype dat niet door JavaScript wordt ondersteund", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variabele maakt gebruik van een automatiseringstype dat niet door JavaScript wordt ondersteund", function (err, _translation) {
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
describe("translating nl-NL string: De externe servercomputer bestaat niet of is niet beschikbaar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De externe servercomputer bestaat niet of is niet beschikbaar", function (err, _translation) {
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
describe("translating nl-NL string: Kan niets toewijzen aan een variabele", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan niets toewijzen aan een variabele", function (err, _translation) {
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
describe("translating nl-NL string: Object kan niet veilig in script worden gebruikt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object kan niet veilig in script worden gebruikt", function (err, _translation) {
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
describe("translating nl-NL string: Object kan niet op een veilige manier worden geïnitialiseerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object kan niet op een veilige manier worden geïnitialiseerd", function (err, _translation) {
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
describe("translating nl-NL string: Object kan niet op een veilige manier worden gemaakt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object kan niet op een veilige manier worden gemaakt", function (err, _translation) {
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
describe("translating nl-NL string: Er is een uitzondering opgetreden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Er is een uitzondering opgetreden", function (err, _translation) {
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
describe("translating nl-NL string: Onvoldoende geheugen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onvoldoende geheugen", function (err, _translation) {
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
describe("translating nl-NL string: Syntaxisfout", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaxisfout", function (err, _translation) {
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
describe("translating nl-NL string: ':' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: ';' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: '(' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'(' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: ')' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: ']' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: '{' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: '}' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Id wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Id wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: '=' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'=' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: '/' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig getal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig getal", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig teken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig teken", function (err, _translation) {
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
describe("translating nl-NL string: Tekenreeksconstante is niet afgesloten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tekenreeksconstante is niet afgesloten", function (err, _translation) {
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
describe("translating nl-NL string: Opmerking is niet afgesloten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Opmerking is niet afgesloten", function (err, _translation) {
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
describe("translating nl-NL string: 'return' instructie bevindt zich buiten de functie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'return' instructie bevindt zich buiten de functie", function (err, _translation) {
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
describe("translating nl-NL string: 'break' buiten de lus is niet mogelijk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'break' buiten de lus is niet mogelijk", function (err, _translation) {
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
describe("translating nl-NL string: 'continue' buiten de lus is niet mogelijk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'continue' buiten de lus is niet mogelijk", function (err, _translation) {
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
describe("translating nl-NL string: Hexadecimaal teken wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hexadecimaal teken wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: 'while' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Naam is opnieuw gedefinieerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Naam is opnieuw gedefinieerd", function (err, _translation) {
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
describe("translating nl-NL string: Kan naam niet vinden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan naam niet vinden", function (err, _translation) {
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
describe("translating nl-NL string: 'default' mag niet meer dan een keer voorkomen in een 'switch' instructie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' mag niet meer dan een keer voorkomen in een 'switch' instructie", function (err, _translation) {
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
describe("translating nl-NL string: Id, tekenreeks of getal wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Id, tekenreeks of getal wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: '@end' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Voorwaardelijke compilatie is uitgeschakeld", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Voorwaardelijke compilatie is uitgeschakeld", function (err, _translation) {
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
describe("translating nl-NL string: Constante wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constante wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: '@' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: 'catch' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: 'var' wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var' wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: 'throw' moet worden gevolgd door een expressie op dezelfde bronregel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'throw' moet worden gevolgd door een expressie op dezelfde bronregel", function (err, _translation) {
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
describe("translating nl-NL string: 'with'-instructies zijn niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'with'-instructies zijn niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Dubbele formele parameternamen zijn niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dubbele formele parameternamen zijn niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Octale numerieke waardes en escapetekens zijn niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Octale numerieke waardes en escapetekens zijn niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig gebruik van 'eval' in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig gebruik van 'eval' in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig gebruik van 'arguments' in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig gebruik van 'arguments' in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Het verwijderen van een expressie is niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het verwijderen van een expressie is niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Meerdere definities van een eigenschap zijn niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Meerdere definities van een eigenschap zijn niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: In de strikte modus kunnen functiedeclaraties niet worden genest in een instructie of blok. Ze kunnen alleen op het hoogste niveau of rechtstreeks in de hoofdtekst van een functie voorkomen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("In de strikte modus kunnen functiedeclaraties niet worden genest in een instructie of blok. Ze kunnen alleen op het hoogste niveau of rechtstreeks in de hoofdtekst van een functie voorkomen.", function (err, _translation) {
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
describe("translating nl-NL string: Het gebruik van een trefwoord voor een id is ongeldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het gebruik van een trefwoord voor een id is ongeldig", function (err, _translation) {
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
describe("translating nl-NL string: Het gebruik van een toekomstig gereserveerd woord voor een id is ongeldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het gebruik van een toekomstig gereserveerd woord voor een id is ongeldig", function (err, _translation) {
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
describe("translating nl-NL string: Het gebruik van een toekomstig gereserveerd woord voor een id is ongeldig. De id-naam is gereserveerd in de strikte modus.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het gebruik van een toekomstig gereserveerd woord voor een id is ongeldig. De id-naam is gereserveerd in de strikte modus.", function (err, _translation) {
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
describe("translating nl-NL string: Functies voor insteller moeten één argument hebben", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functies voor insteller moeten één argument hebben", function (err, _translation) {
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
describe("translating nl-NL string: Compilatiefout JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Compilatiefout JavaScript", function (err, _translation) {
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
describe("translating nl-NL string: Runtime-fout JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Runtime-fout JavaScript", function (err, _translation) {
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
describe("translating nl-NL string: Onbekende runtime-fout", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onbekende runtime-fout", function (err, _translation) {
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
describe("translating nl-NL string: Kan niet worden toegewezen aan 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan niet worden toegewezen aan 'this'", function (err, _translation) {
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
describe("translating nl-NL string: Getal wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Getal wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Functie wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functie wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Kan niet worden toegewezen aan het resultaat van een functie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan niet worden toegewezen aan het resultaat van een functie", function (err, _translation) {
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
describe("translating nl-NL string: Kan object niet indexeren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan object niet indexeren", function (err, _translation) {
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
describe("translating nl-NL string: Tekenreeks wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tekenreeks wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Datumobject wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Datumobject wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige linkerkant van toewijzing", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige linkerkant van toewijzing", function (err, _translation) {
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
describe("translating nl-NL string: Niet-gedefinieerde aanduiding", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Niet-gedefinieerde aanduiding", function (err, _translation) {
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
describe("translating nl-NL string: Boole-waarde wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boole-waarde wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Kan programmacode niet uitvoeren vanuit een vrijgegeven script", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan programmacode niet uitvoeren vanuit een vrijgegeven script", function (err, _translation) {
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
describe("translating nl-NL string: Objectlid wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objectlid wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: VBArray wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: JavaScript-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Enumeratorobject wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enumeratorobject wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Regulier expressieobject wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Regulier expressieobject wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Syntaxisfout in reguliere expressie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaxisfout in reguliere expressie", function (err, _translation) {
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
describe("translating nl-NL string: Onverwachte bepaler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onverwachte bepaler", function (err, _translation) {
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
describe("translating nl-NL string: ']' wordt verwacht in reguliere expressie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' wordt verwacht in reguliere expressie", function (err, _translation) {
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
describe("translating nl-NL string: ')' wordt verwacht in reguliere expressie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' wordt verwacht in reguliere expressie", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig bereik in tekenset", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig bereik in tekenset", function (err, _translation) {
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
describe("translating nl-NL string: Uitzondering geactiveerd maar niet afgehandeld", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uitzondering geactiveerd maar niet afgehandeld", function (err, _translation) {
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
describe("translating nl-NL string: Functie heeft geen geldig prototype-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functie heeft geen geldig prototype-object", function (err, _translation) {
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
describe("translating nl-NL string: De te coderen URI bevat een ongeldig teken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De te coderen URI bevat een ongeldig teken", function (err, _translation) {
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
describe("translating nl-NL string: De te decoderen URI is geen geldige codering", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De te decoderen URI is geen geldige codering", function (err, _translation) {
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
describe("translating nl-NL string: Het aantal cijfers in de breuk valt buiten het bereik", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het aantal cijfers in de breuk valt buiten het bereik", function (err, _translation) {
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
describe("translating nl-NL string: De precisie valt buiten het bereik", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De precisie valt buiten het bereik", function (err, _translation) {
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
describe("translating nl-NL string: Array- of Arguments-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array- of Arguments-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Lengte van Array-object moet een positieve integer zijn", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Lengte van Array-object moet een positieve integer zijn", function (err, _translation) {
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
describe("translating nl-NL string: Lengte van Array-object moet een eindig positief getal zijn", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Lengte van Array-object moet een eindig positief getal zijn", function (err, _translation) {
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
describe("translating nl-NL string: Array-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Kringverwijzing in waardeargument wordt niet ondersteund", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kringverwijzing in waardeargument wordt niet ondersteund", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig vervangingsargument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig vervangingsargument", function (err, _translation) {
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
describe("translating nl-NL string: De argumentenlijst is te groot om te worden toegepast", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De argumentenlijst is te groot om te worden toegepast", function (err, _translation) {
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
describe("translating nl-NL string: Herdeclaratie van constante eigenschap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Herdeclaratie van constante eigenschap", function (err, _translation) {
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
describe("translating nl-NL string: Objectlid kan niet worden geconfigureerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objectlid kan niet worden geconfigureerd", function (err, _translation) {
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
describe("translating nl-NL string: Variabele is niet gedefinieerd in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variabele is niet gedefinieerd in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Het openen van de eigenschap 'caller' van een functie- of Arguments-object is niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het openen van de eigenschap 'caller' van een functie- of Arguments-object is niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Het openen van de eigenschap 'callee' van een Arguments-object is niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het openen van de eigenschap 'callee' van een Arguments-object is niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Toewijzing aan alleen-lezen eigenschappen is niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Toewijzing aan alleen-lezen eigenschappen is niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Kan geen eigenschap maken voor een niet-uitbreidbaar object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan geen eigenschap maken voor een niet-uitbreidbaar object", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Functie wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functie wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Functie wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functie wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: De eigenschap kan niet zowel accessors als een waarde hebben", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De eigenschap kan niet zowel accessors als een waarde hebben", function (err, _translation) {
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
describe("translating nl-NL string: 'this' is null of niet gedefinieerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is null of niet gedefinieerd", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Functie wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functie wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Tekenreeks wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tekenreeks wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Boole-waarde wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boole-waarde wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Datum wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Datum wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Getal wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Getal wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: VBArray wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: JavaScript-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Enumeratorobject wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enumeratorobject wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: RegExp-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("RegExp-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldig functieargument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldig functieargument", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: JavaScript-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Functie wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functie wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: VBArray wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige lengte-eigenschap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige lengte-eigenschap", function (err, _translation) {
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
describe("translating nl-NL string: Array- of Arguments-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array- of Arguments-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige operand", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige operand", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige eigenschapsdescriptor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige eigenschapsdescriptor", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap niet definiëren: object is niet uitbreidbaar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap niet definiëren: object is niet uitbreidbaar", function (err, _translation) {
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
describe("translating nl-NL string: Kan de niet-configureerbare eigenschap niet opnieuw definiëren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de niet-configureerbare eigenschap niet opnieuw definiëren", function (err, _translation) {
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
describe("translating nl-NL string: Kan de niet-schrijfbare eigenschap niet wijzigen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de niet-schrijfbare eigenschap niet wijzigen", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap niet wijzigen: 'length' is niet schrijfbaar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap niet wijzigen: 'length' is niet schrijfbaar", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap niet definiëren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap niet definiëren", function (err, _translation) {
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
describe("translating nl-NL string: Constructorargument van getypeerde matrix is ongeldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constructorargument van getypeerde matrix is ongeldig", function (err, _translation) {
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
describe("translating nl-NL string: 'this' is geen getypeerd matrixobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is geen getypeerd matrixobject", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige offset/lengte bij het maken van een getypeerde matrix", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige offset/lengte bij het maken van een getypeerde matrix", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige begin-/eindwaarde in submatrix-methode van getypeerde matrix", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige begin-/eindwaarde in submatrix-methode van getypeerde matrix", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige bron in getypeerde matrixset", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige bron in getypeerde matrixset", function (err, _translation) {
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
describe("translating nl-NL string: 'this' is geen DataView-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' is geen DataView-object", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige argumenten in DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige argumenten in DataView", function (err, _translation) {
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
describe("translating nl-NL string: Toegang tot DataView-bewerking buiten opgegeven bufferlengte", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Toegang tot DataView-bewerking buiten opgegeven bufferlengte", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige argumenten in DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige argumenten in DataView", function (err, _translation) {
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
describe("translating nl-NL string: ongeldige functiehandtekening", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ongeldige functiehandtekening", function (err, _translation) {
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
describe("translating nl-NL string: ongeldige eigenschapshandtekening", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ongeldige eigenschapshandtekening", function (err, _translation) {
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
describe("translating nl-NL string: ongeldig type invoerparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ongeldig type invoerparameter", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige invoerparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige invoerparameter", function (err, _translation) {
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
describe("translating nl-NL string: Toegang tot de eigenschap 'arguments' van een functie is niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Toegang tot de eigenschap 'arguments' van een functie is niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Inspecteerbaar object verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inspecteerbaar object verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Kan argument niet converteren naar type 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan argument niet converteren naar type 'char'", function (err, _translation) {
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
describe("translating nl-NL string: Kan argument niet converteren naar type 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan argument niet converteren naar type 'GUID'", function (err, _translation) {
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
describe("translating nl-NL string: IInspectable verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Kan object niet converteren naar structuur: verwachte eigenschap ontbreekt in object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan object niet converteren naar structuur: verwachte eigenschap ontbreekt in object", function (err, _translation) {
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
describe("translating nl-NL string: Onbekend type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onbekend type", function (err, _translation) {
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
describe("translating nl-NL string: Functie is aangeroepen met te weinig argumenten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Functie is aangeroepen met te weinig argumenten", function (err, _translation) {
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
describe("translating nl-NL string: Kan type niet maken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan type niet maken", function (err, _translation) {
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
describe("translating nl-NL string: Kan waarde niet converteren naar PropertyValue: type wordt niet ondersteund door PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan waarde niet converteren naar PropertyValue: type wordt niet ondersteund door PropertyValue", function (err, _translation) {
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
describe("translating nl-NL string: Kan waarde niet converteren naar IInspectable: type wordt niet ondersteund door IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan waarde niet converteren naar IInspectable: type wordt niet ondersteund door IInspectable", function (err, _translation) {
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
describe("translating nl-NL string: Kan datum niet converteren naar Windows.Foundation.DateTime: waarde ligt buiten het geldige bereik", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan datum niet converteren naar Windows.Foundation.DateTime: waarde ligt buiten het geldige bereik", function (err, _translation) {
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
describe("translating nl-NL string: Kan waarde niet converteren naar Windows.Foundation.TimeSpan: waarde ligt buiten het geldige bereik", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan waarde niet converteren naar Windows.Foundation.TimeSpan: waarde ligt buiten het geldige bereik", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige toegang tot reeds vrijgegeven inspecteerbaar object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige toegang tot reeds vrijgegeven inspecteerbaar object", function (err, _translation) {
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
describe("translating nl-NL string: Kan reeds vrijgegeven inspecteerbaar object niet vrijgeven", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan reeds vrijgegeven inspecteerbaar object niet vrijgeven", function (err, _translation) {
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
describe("translating nl-NL string: 'dit' is niet van het verwachte type", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'dit' is niet van het verwachte type", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige lengte en grootte opgegeven voor de matrix", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige lengte en grootte opgegeven voor de matrix", function (err, _translation) {
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
describe("translating nl-NL string: Er is een onverwachte fout opgetreden bij het opvragen van metagegevens", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Er is een onverwachte fout opgetreden bij het opvragen van metagegevens", function (err, _translation) {
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
describe("translating nl-NL string: Status is 'fout', maar getResults heeft geen fout geretourneerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Status is 'fout', maar getResults heeft geen fout geretourneerd", function (err, _translation) {
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
describe("translating nl-NL string: Ontbrekende of ongeldige statusparameter doorgegeven aan voltooide handler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ontbrekende of ongeldige statusparameter doorgegeven aan voltooide handler", function (err, _translation) {
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
describe("translating nl-NL string: Ontbrekende of ongeldige afzenderparameter doorgegeven aan voltooide handler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ontbrekende of ongeldige afzenderparameter doorgegeven aan voltooide handler", function (err, _translation) {
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
describe("translating nl-NL string: Oneindig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oneindig", function (err, _translation) {
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
describe("translating nl-NL string: -Oneindig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Oneindig", function (err, _translation) {
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
describe("translating nl-NL string: De eigenschap of methode MyDynamicTestString wordt niet ondersteund door dit object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De eigenschap of methode MyDynamicTestString wordt niet ondersteund door dit object", function (err, _translation) {
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
describe("translating nl-NL string: Het argument voor de functie MyDynamicTestString is niet optioneel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het argument voor de functie MyDynamicTestString is niet optioneel", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen getal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen getal", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen functie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen functie", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString kan als object niet worden geïndexeerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString kan als object niet worden geïndexeerd", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen tekenreeks", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen tekenreeks", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen datumobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen datumobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is leeg of geen object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is leeg of geen object", function (err, _translation) {
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
describe("translating nl-NL string: Kan niets toewijzen aan MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan niets toewijzen aan MyDynamicTestString", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is niet gedefinieerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is niet gedefinieerd", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen boole-waarde", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen boole-waarde", function (err, _translation) {
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
describe("translating nl-NL string: Kan MyDynamicTestString niet verwijderen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan MyDynamicTestString niet verwijderen", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen VBArray", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen JavaScript-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen JavaScript-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen enumeratorobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen enumeratorobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen regulier expressieobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen regulier expressieobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen Array- of Arguments-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen Array- of Arguments-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString is geen Array-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString is geen Array-object", function (err, _translation) {
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
describe("translating nl-NL string: Het kenmerk MyDynamicTestString in de eigenschapsdescriptor kan voor dit object niet worden ingesteld op true.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het kenmerk MyDynamicTestString in de eigenschapsdescriptor kan voor dit object niet worden ingesteld op true.", function (err, _translation) {
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
describe("translating nl-NL string: Het kenmerk MyDynamicTestString in de eigenschapsdescriptor kan voor dit object niet worden ingesteld op false.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het kenmerk MyDynamicTestString in de eigenschapsdescriptor kan voor dit object niet worden ingesteld op false.", function (err, _translation) {
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
describe("translating nl-NL string: Herdeclaratie van de constante MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Herdeclaratie van de constante MyDynamicTestString", function (err, _translation) {
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
describe("translating nl-NL string: Het verwijderen van MyDynamicTestString is niet toegestaan in de strikte modus", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het verwijderen van MyDynamicTestString is niet toegestaan in de strikte modus", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap MyDynamicTestString van een niet-gedefinieerde verwijzing of een verwijzing naar een lege waarde niet instellen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap MyDynamicTestString van een niet-gedefinieerde verwijzing of een verwijzing naar een lege waarde niet instellen", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap MyDynamicTestString van een niet-gedefinieerde verwijzing of een verwijzing naar een lege waarde niet ophalen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap MyDynamicTestString van een niet-gedefinieerde verwijzing of een verwijzing naar een lege waarde niet ophalen", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap MyDynamicTestString van een niet-gedefinieerde verwijzing of een verwijzing naar een lege waarde niet verwijderen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap MyDynamicTestString van een niet-gedefinieerde verwijzing of een verwijzing naar een lege waarde niet verwijderen", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap MyDynamicTestString niet openen: het type VarDate biedt geen ondersteuning voor door gebruikers gedefinieerde eigenschappen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap MyDynamicTestString niet openen: het type VarDate biedt geen ondersteuning voor door gebruikers gedefinieerde eigenschappen", function (err, _translation) {
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
describe("translating nl-NL string: De waarde van de eigenschap MyDynamicTestString is geen functieobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De waarde van de eigenschap MyDynamicTestString is geen functieobject", function (err, _translation) {
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
describe("translating nl-NL string: De waarde van de eigenschap MyDynamicTestString null of niet gedefinieerd en geen functieobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De waarde van de eigenschap MyDynamicTestString null of niet gedefinieerd en geen functieobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is null of niet gedefinieerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is null of niet gedefinieerd", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen functieobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen functieobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen tekenreeksobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen tekenreeksobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen boole-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen boole-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen datumobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen datumobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen getalobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen getalobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen VBArray-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen VBArray-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen JavaScript-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen JavaScript-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen enumeratorobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen enumeratorobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen RegExp-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen RegExp-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: ongeldig argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: ongeldig argument", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: argument is geen object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is geen object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: argument is geen JavaScript-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is geen JavaScript-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: argument is geen functieobject", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is geen functieobject", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: argument is geen VBArray-object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is geen VBArray-object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: argument is null of niet gedefinieerd", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is null of niet gedefinieerd", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: argument is geen object en is niet null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument is geen object en is niet null", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: argument heeft geen geldige lengte-eigenschap", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument heeft geen geldige lengte-eigenschap", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: Array- of Arguments-object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Array- of Arguments-object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige operand naar MyDynamicTestString: object wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige operand naar MyDynamicTestString: object wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige operand naar MyDynamicTestString: functie wordt verwacht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige operand naar MyDynamicTestString: functie wordt verwacht", function (err, _translation) {
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
describe("translating nl-NL string: Ongeldige descriptor voor eigenschap MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ongeldige descriptor voor eigenschap MyDynamicTestString", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap MyDynamicTestString niet definiëren: object is niet uitbreidbaar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap MyDynamicTestString niet definiëren: object is niet uitbreidbaar", function (err, _translation) {
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
describe("translating nl-NL string: Kan de niet-configureerbare eigenschap MyDynamicTestString niet opnieuw definiëren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de niet-configureerbare eigenschap MyDynamicTestString niet opnieuw definiëren", function (err, _translation) {
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
describe("translating nl-NL string: Kan de niet-schrijfbare eigenschap MyDynamicTestString niet wijzigen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de niet-schrijfbare eigenschap MyDynamicTestString niet wijzigen", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap MyDynamicTestString niet wijzigen: 'length' is niet schrijfbaar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap MyDynamicTestString niet wijzigen: 'length' is niet schrijfbaar", function (err, _translation) {
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
describe("translating nl-NL string: Kan de eigenschap MyDynamicTestString niet definiëren", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan de eigenschap MyDynamicTestString niet definiëren", function (err, _translation) {
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
describe("translating nl-NL string: Vereist argument MyDynamicTestString in de DataView-methode is niet opgegeven", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vereist argument MyDynamicTestString in de DataView-methode is niet opgegeven", function (err, _translation) {
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
describe("translating nl-NL string: DataView-constructorargument MyDynamicTestString is ongeldig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView-constructorargument MyDynamicTestString is ongeldig", function (err, _translation) {
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
describe("translating nl-NL string: De functie 'MyDynamicTestString' heeft een ongeldige handtekening en kan niet worden aangeroepen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De functie 'MyDynamicTestString' heeft een ongeldige handtekening en kan niet worden aangeroepen", function (err, _translation) {
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
describe("translating nl-NL string: De eigenschap 'MyDynamicTestString' heeft een ongeldige handtekening en kan niet worden geopend", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De eigenschap 'MyDynamicTestString' heeft een ongeldige handtekening en kan niet worden geopend", function (err, _translation) {
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
describe("translating nl-NL string: De runtime-klasse MyDynamicTestString met Windows.Foundation.IPropertyValue als standaardinterface wordt niet ondersteund als type invoerparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De runtime-klasse MyDynamicTestString met Windows.Foundation.IPropertyValue als standaardinterface wordt niet ondersteund als type invoerparameter", function (err, _translation) {
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
describe("translating nl-NL string: Het object met interface Windows.Foundation.IPropertyValue die de runtime-klassenaam MyDynamicTestString heeft, wordt niet ondersteund als uitvoerparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Het object met interface Windows.Foundation.IPropertyValue die de runtime-klassenaam MyDynamicTestString heeft, wordt niet ondersteund als uitvoerparameter", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: 'this' is geen inspecteerbaar object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' is geen inspecteerbaar object", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: kan argument niet converteren naar type 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: kan argument niet converteren naar type 'char'", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: kan argument niet converteren naar type 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: kan argument niet converteren naar type 'GUID'", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: kan retourwaarde niet converteren naar IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: kan retourwaarde niet converteren naar IInspectable", function (err, _translation) {
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
describe("translating nl-NL string: Kan object niet converteren naar structuur: verwachte eigenschap 'MyDynamicTestString' ontbreekt in object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan object niet converteren naar structuur: verwachte eigenschap 'MyDynamicTestString' ontbreekt in object", function (err, _translation) {
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
describe("translating nl-NL string: Type 'MyDynamicTestString' niet gevonden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type 'MyDynamicTestString' niet gevonden", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: functie is aangeroepen met te weinig argumenten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: functie is aangeroepen met te weinig argumenten", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: kan type niet maken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: kan type niet maken", function (err, _translation) {
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
describe("translating nl-NL string: Kan waarde niet converteren naar PropertyValue: MyDynamicTestString wordt niet ondersteund door PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan waarde niet converteren naar PropertyValue: MyDynamicTestString wordt niet ondersteund door PropertyValue", function (err, _translation) {
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
describe("translating nl-NL string: Kan waarde niet converteren naar IInspectable: MyDynamicTestString wordt niet ondersteund door IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kan waarde niet converteren naar IInspectable: MyDynamicTestString wordt niet ondersteund door IInspectable", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: het inspecteerbare object 'this' is vrijgegeven en kan niet worden geopend", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: het inspecteerbare object 'this' is vrijgegeven en kan niet worden geopend", function (err, _translation) {
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
describe("translating nl-NL string: 'dit' is niet van het verwachte type: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'dit' is niet van het verwachte type: MyDynamicTestString", function (err, _translation) {
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
describe("translating nl-NL string: MyDynamicTestString: er is een onverwachte fout opgetreden bij het opvragen van metagegevens", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: er is een onverwachte fout opgetreden bij het opvragen van metagegevens", function (err, _translation) {
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
describe("translating nl-NL string: De opgegeven datum is niet beschikbaar in de agenda van de huidige landinstellingen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("De opgegeven datum is niet beschikbaar in de agenda van de huidige landinstellingen", function (err, _translation) {
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
