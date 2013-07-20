var errorToEnglish = require("../../lib/errortoenglish");
describe("translating de-DE string: Ungültiger Prozeduraufruf oder ungültiges Argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Prozeduraufruf oder ungültiges Argument", function (err, _translation) {
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
describe("translating de-DE string: Überlauf", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Überlauf", function (err, _translation) {
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
describe("translating de-DE string: Nicht genügend Arbeitsspeicher.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht genügend Arbeitsspeicher.", function (err, _translation) {
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
describe("translating de-DE string: Index außerhalb des gültigen Bereichs", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Index außerhalb des gültigen Bereichs", function (err, _translation) {
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
describe("translating de-DE string: Array ist unveränderlich oder momentan gesperrt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array ist unveränderlich oder momentan gesperrt.", function (err, _translation) {
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
describe("translating de-DE string: Division durch Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Division durch Null", function (err, _translation) {
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
describe("translating de-DE string: Typenkonflikt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typenkonflikt", function (err, _translation) {
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
describe("translating de-DE string: Nicht genügend Zeichenfolgenspeicher", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht genügend Zeichenfolgenspeicher", function (err, _translation) {
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
describe("translating de-DE string: Angeforderte Operation kann nicht durchgeführt werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Angeforderte Operation kann nicht durchgeführt werden.", function (err, _translation) {
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
describe("translating de-DE string: Nicht genügend Stackspeicher.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht genügend Stackspeicher.", function (err, _translation) {
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
describe("translating de-DE string: Sub- oder Function-Prozedur nicht definiert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub- oder Function-Prozedur nicht definiert", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Laden einer DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Laden einer DLL", function (err, _translation) {
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
describe("translating de-DE string: Interner Fehler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Interner Fehler", function (err, _translation) {
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
describe("translating de-DE string: Ungültige(r) Dateiname oder -nummer.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige(r) Dateiname oder -nummer.", function (err, _translation) {
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
describe("translating de-DE string: Die Datei wurde nicht gefunden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Datei wurde nicht gefunden.", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Dateimodus.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Dateimodus.", function (err, _translation) {
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
describe("translating de-DE string: Die Datei ist bereits geöffnet.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Datei ist bereits geöffnet.", function (err, _translation) {
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
describe("translating de-DE string: Geräte-E/A-Fehler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geräte-E/A-Fehler", function (err, _translation) {
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
describe("translating de-DE string: Die Datei ist bereits vorhanden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Datei ist bereits vorhanden.", function (err, _translation) {
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
describe("translating de-DE string: Der Datenträger ist voll.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Datenträger ist voll.", function (err, _translation) {
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
describe("translating de-DE string: Eingabe hinter Dateiende.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Eingabe hinter Dateiende.", function (err, _translation) {
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
describe("translating de-DE string: Zu viele Dateien.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zu viele Dateien.", function (err, _translation) {
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
describe("translating de-DE string: Das Gerät ist nicht verfügbar.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Gerät ist nicht verfügbar.", function (err, _translation) {
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
describe("translating de-DE string: Erlaubnis verweigert.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erlaubnis verweigert.", function (err, _translation) {
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
describe("translating de-DE string: Der Datenträger ist nicht bereit.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Datenträger ist nicht bereit.", function (err, _translation) {
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
describe("translating de-DE string: Umbenennen bei Angabe unterschiedlicher Laufwerke nicht möglich.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Umbenennen bei Angabe unterschiedlicher Laufwerke nicht möglich.", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Zugriff auf Pfad/Datei.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Zugriff auf Pfad/Datei.", function (err, _translation) {
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
describe("translating de-DE string: Der Pfad wurde nicht gefunden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Pfad wurde nicht gefunden.", function (err, _translation) {
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
describe("translating de-DE string: Objektvariable oder Variable für With-Block nicht gesetzt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektvariable oder Variable für With-Block nicht gesetzt", function (err, _translation) {
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
describe("translating de-DE string: For-Schleife nicht initialisiert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For-Schleife nicht initialisiert", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Verwendung von Null.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Verwendung von Null.", function (err, _translation) {
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
describe("translating de-DE string: Die erforderliche temporäre Datei kann nicht erstellt werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die erforderliche temporäre Datei kann nicht erstellt werden.", function (err, _translation) {
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
describe("translating de-DE string: Objekt erforderlich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erforderlich", function (err, _translation) {
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
describe("translating de-DE string: Automatisierungsserver kann Objekt nicht erstellen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automatisierungsserver kann Objekt nicht erstellen.", function (err, _translation) {
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
describe("translating de-DE string: Klasse unterstützt keine Automatisierung.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Klasse unterstützt keine Automatisierung.", function (err, _translation) {
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
describe("translating de-DE string: Datei- oder Klassenname während der Automatisierungsoperation nicht gefunden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Datei- oder Klassenname während der Automatisierungsoperation nicht gefunden.", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt unterstützt diese Eigenschaft oder Methode nicht.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt unterstützt diese Eigenschaft oder Methode nicht.", function (err, _translation) {
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
describe("translating de-DE string: Automatisierungsfehler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automatisierungsfehler", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt unterstützt diese Aktion nicht.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt unterstützt diese Aktion nicht.", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt unterstützt benannte Argumente nicht.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt unterstützt benannte Argumente nicht.", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt unterstützt die aktuelle Ländereinstellung nicht.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt unterstützt die aktuelle Ländereinstellung nicht.", function (err, _translation) {
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
describe("translating de-DE string: Benanntes Argument nicht gefunden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Benanntes Argument nicht gefunden", function (err, _translation) {
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
describe("translating de-DE string: Das Argument ist nicht optional.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Argument ist nicht optional.", function (err, _translation) {
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
describe("translating de-DE string: Falsche Anzahl an Argumenten oder ungültige Eigenschaftszuweisung", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Falsche Anzahl an Argumenten oder ungültige Eigenschaftszuweisung", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt ist keine Auflistung.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt ist keine Auflistung.", function (err, _translation) {
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
describe("translating de-DE string: Angegebene DLL-Funktion nicht gefunden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Angegebene DLL-Funktion nicht gefunden", function (err, _translation) {
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
describe("translating de-DE string: Variable verwendet einen Automatisierungstyp, der in JavaScript nicht unterstützt wird.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variable verwendet einen Automatisierungstyp, der in JavaScript nicht unterstützt wird.", function (err, _translation) {
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
describe("translating de-DE string: Der Remoteservercomputer ist existiert nicht oder ist nicht verfügbar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Remoteservercomputer ist existiert nicht oder ist nicht verfügbar", function (err, _translation) {
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
describe("translating de-DE string: Zuweisung an Variable nicht möglich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zuweisung an Variable nicht möglich", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt ist nicht sicher für Skriptingverarbeitung.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt ist nicht sicher für Skriptingverarbeitung.", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt ist nicht sicher für Initialisierung.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt ist nicht sicher für Initialisierung.", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt ist nicht sicher für Erstellung.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt ist nicht sicher für Erstellung.", function (err, _translation) {
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
describe("translating de-DE string: Eine Ausnahmebedingung ist aufgetreten.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Eine Ausnahmebedingung ist aufgetreten.", function (err, _translation) {
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
describe("translating de-DE string: Nicht genügend Arbeitsspeicher.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht genügend Arbeitsspeicher.", function (err, _translation) {
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
describe("translating de-DE string: Syntaxfehler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaxfehler", function (err, _translation) {
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
describe("translating de-DE string: ':' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':' erwartet", function (err, _translation) {
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
describe("translating de-DE string: ';' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';' erwartet", function (err, _translation) {
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
describe("translating de-DE string: '(' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'(' erwartet", function (err, _translation) {
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
describe("translating de-DE string: ')' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' erwartet", function (err, _translation) {
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
describe("translating de-DE string: ']' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' erwartet", function (err, _translation) {
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
describe("translating de-DE string: '{' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{' erwartet", function (err, _translation) {
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
describe("translating de-DE string: '}' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}' erwartet", function (err, _translation) {
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
describe("translating de-DE string: Bezeichner erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bezeichner erwartet", function (err, _translation) {
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
describe("translating de-DE string: '=' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'=' erwartet", function (err, _translation) {
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
describe("translating de-DE string: '/' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/' erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Zahl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Zahl", function (err, _translation) {
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
describe("translating de-DE string: Ungültiges Zeichen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiges Zeichen", function (err, _translation) {
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
describe("translating de-DE string: Nicht abgeschlossene Zeichenfolgenkonstante", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht abgeschlossene Zeichenfolgenkonstante", function (err, _translation) {
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
describe("translating de-DE string: Nicht abgeschlossener Kommentar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht abgeschlossener Kommentar", function (err, _translation) {
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
describe("translating de-DE string: 'return'-Anweisung außerhalb einer Funktion", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'return'-Anweisung außerhalb einer Funktion", function (err, _translation) {
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
describe("translating de-DE string: 'break' außerhalb einer Schleife nicht möglich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'break' außerhalb einer Schleife nicht möglich", function (err, _translation) {
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
describe("translating de-DE string: 'continue' außerhalb einer Schleife nicht möglich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'continue' außerhalb einer Schleife nicht möglich", function (err, _translation) {
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
describe("translating de-DE string: Hexadezimalziffer erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hexadezimalziffer erwartet", function (err, _translation) {
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
describe("translating de-DE string: 'while' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while' erwartet", function (err, _translation) {
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
describe("translating de-DE string: Marke neu definiert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Marke neu definiert", function (err, _translation) {
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
describe("translating de-DE string: Marke nicht gefunden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Marke nicht gefunden", function (err, _translation) {
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
describe("translating de-DE string: 'default' kann nur einmal in einer 'switch'-Anweisung auftreten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' kann nur einmal in einer 'switch'-Anweisung auftreten", function (err, _translation) {
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
describe("translating de-DE string: Bezeichner, Zeichenfolge oder Zahl erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bezeichner, Zeichenfolge oder Zahl erwartet", function (err, _translation) {
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
describe("translating de-DE string: '@end' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' erwartet", function (err, _translation) {
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
describe("translating de-DE string: Bedingte Kompilierung ist ausgeschaltet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bedingte Kompilierung ist ausgeschaltet", function (err, _translation) {
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
describe("translating de-DE string: Konstante erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Konstante erwartet", function (err, _translation) {
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
describe("translating de-DE string: '@' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' erwartet", function (err, _translation) {
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
describe("translating de-DE string: 'catch' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch' erwartet", function (err, _translation) {
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
describe("translating de-DE string: 'var' erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var' erwartet", function (err, _translation) {
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
describe("translating de-DE string: Auf \"throw\" muss ein Ausdruck in derselben Quellzeile folgen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Auf \"throw\" muss ein Ausdruck in derselben Quellzeile folgen", function (err, _translation) {
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
describe("translating de-DE string: \"with\"-Anweisungen sind im Strict-Modus nicht zulässig", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"with\"-Anweisungen sind im Strict-Modus nicht zulässig", function (err, _translation) {
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
describe("translating de-DE string: Doppelte formale Parameternamen sind im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Doppelte formale Parameternamen sind im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Oktale numerische Literale und Escapezeichen sind im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oktale numerische Literale und Escapezeichen sind im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Verwendung von \"eval\" im Strict-Modus.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Verwendung von \"eval\" im Strict-Modus.", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Verwendung von \"arguments\" im Strict-Modus.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Verwendung von \"arguments\" im Strict-Modus.", function (err, _translation) {
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
describe("translating de-DE string: Das Aufrufen des Löschvorgangs nach einem Ausdruck ist im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Aufrufen des Löschvorgangs nach einem Ausdruck ist im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Mehrere Definitionen einer Eigenschaft sind im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Mehrere Definitionen einer Eigenschaft sind im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Im Strict-Modus können keine Funktionsdeklarationen in einer Anweisung oder einem Block geschachtelt werden. Sie werden möglicherweise nur auf der obersten Ebene oder direkt in einem Funktionstext angezeigt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Im Strict-Modus können keine Funktionsdeklarationen in einer Anweisung oder einem Block geschachtelt werden. Sie werden möglicherweise nur auf der obersten Ebene oder direkt in einem Funktionstext angezeigt.", function (err, _translation) {
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
describe("translating de-DE string: Die Verwendung eines Schlüsselworts für eine ID ist ungültig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Verwendung eines Schlüsselworts für eine ID ist ungültig.", function (err, _translation) {
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
describe("translating de-DE string: Die Verwendung eines zukünftigen reservierten Worts für eine ID ist ungültig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Verwendung eines zukünftigen reservierten Worts für eine ID ist ungültig.", function (err, _translation) {
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
describe("translating de-DE string: Die Verwendung eines zukünftigen reservierten Worts für eine ID ist ungültig. Der ID-Name ist im Strict-Modus reserviert.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Verwendung eines zukünftigen reservierten Worts für eine ID ist ungültig. Der ID-Name ist im Strict-Modus reserviert.", function (err, _translation) {
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
describe("translating de-DE string: Setter-Funktionen müssen ein Argument besitzen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Setter-Funktionen müssen ein Argument besitzen.", function (err, _translation) {
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
describe("translating de-DE string: Kompilierungsfehler in JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kompilierungsfehler in JavaScript", function (err, _translation) {
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
describe("translating de-DE string: Laufzeitfehler in JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Laufzeitfehler in JavaScript", function (err, _translation) {
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
describe("translating de-DE string: Unbekannter Laufzeitfehler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unbekannter Laufzeitfehler", function (err, _translation) {
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
describe("translating de-DE string: Zuweisung an 'this' nicht möglich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zuweisung an 'this' nicht möglich", function (err, _translation) {
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
describe("translating de-DE string: Zahl erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zahl erwartet", function (err, _translation) {
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
describe("translating de-DE string: Funktion erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktion erwartet", function (err, _translation) {
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
describe("translating de-DE string: Kann dem Ergebnis einer Funktion nicht zugewiesen werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kann dem Ergebnis einer Funktion nicht zugewiesen werden", function (err, _translation) {
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
describe("translating de-DE string: Objekt kann nicht indiziert werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt kann nicht indiziert werden", function (err, _translation) {
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
describe("translating de-DE string: Zeichenfolge erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zeichenfolge erwartet", function (err, _translation) {
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
describe("translating de-DE string: Datumsobjekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Datumsobjekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültige linke Seite in Zuweisung", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige linke Seite in Zuweisung", function (err, _translation) {
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
describe("translating de-DE string: Nicht definierter Bezeichner", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht definierter Bezeichner", function (err, _translation) {
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
describe("translating de-DE string: Boolesch erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boolesch erwartet", function (err, _translation) {
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
describe("translating de-DE string: Code eines freigegebenen Skripts kann nicht ausgeführt werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Code eines freigegebenen Skripts kann nicht ausgeführt werden", function (err, _translation) {
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
describe("translating de-DE string: Objektmitglied erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objektmitglied erwartet", function (err, _translation) {
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
describe("translating de-DE string: VBArray erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray erwartet", function (err, _translation) {
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
describe("translating de-DE string: JavaScript-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Aufzählungsobjekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Aufzählungsobjekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Regulärer Ausdruck als Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Regulärer Ausdruck als Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Syntaxfehler in regulärem Ausdruck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaxfehler in regulärem Ausdruck", function (err, _translation) {
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
describe("translating de-DE string: Unerwarteter Quantifizierer", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unerwarteter Quantifizierer", function (err, _translation) {
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
describe("translating de-DE string: Erwartet ']' in regulärem Ausdruck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erwartet ']' in regulärem Ausdruck", function (err, _translation) {
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
describe("translating de-DE string: Erwartet ')' in regulärem Ausdruck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erwartet ')' in regulärem Ausdruck", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Bereich in Zeichensatz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Bereich in Zeichensatz", function (err, _translation) {
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
describe("translating de-DE string: Annahme ausgelöst und nicht aufgefangen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Annahme ausgelöst und nicht aufgefangen.", function (err, _translation) {
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
describe("translating de-DE string: Die Funktion hat kein gültiges Prototyp-Objekt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Funktion hat kein gültiges Prototyp-Objekt.", function (err, _translation) {
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
describe("translating de-DE string: Der zu verschlüsselnde URI enthält ein ungültiges Zeichen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der zu verschlüsselnde URI enthält ein ungültiges Zeichen.", function (err, _translation) {
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
describe("translating de-DE string: Der zu entschlüsselnde URI hat keine gültige Verschlüsselung.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der zu entschlüsselnde URI hat keine gültige Verschlüsselung.", function (err, _translation) {
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
describe("translating de-DE string: Die Anzahl der Bruchstellen befindet sich außerhalb des gültigen Bereichs.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Anzahl der Bruchstellen befindet sich außerhalb des gültigen Bereichs.", function (err, _translation) {
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
describe("translating de-DE string: Die Präzision befindet sich außerhalb des gültigen Bereichs.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Präzision befindet sich außerhalb des gültigen Bereichs.", function (err, _translation) {
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
describe("translating de-DE string: Array- oder Arguments-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array- oder Arguments-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Die Arraylänge muss eine finite positive Ganzzahl sein.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Arraylänge muss eine finite positive Ganzzahl sein.", function (err, _translation) {
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
describe("translating de-DE string: Der Arraylänge muss eine finite positive Zahl zugewiesen sein.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Arraylänge muss eine finite positive Zahl zugewiesen sein.", function (err, _translation) {
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
describe("translating de-DE string: Arrayobjekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Arrayobjekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Zirkelverweis wird im Wertargument nicht unterstützt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zirkelverweis wird im Wertargument nicht unterstützt.", function (err, _translation) {
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
describe("translating de-DE string: Ungültiges Ersetzungsargument.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiges Ersetzungsargument.", function (err, _translation) {
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
describe("translating de-DE string: Die Argumentliste ist zu lang, um angewendet zu werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Argumentliste ist zu lang, um angewendet zu werden.", function (err, _translation) {
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
describe("translating de-DE string: Neudeklaration der \"const\"-Eigenschaft.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neudeklaration der \"const\"-Eigenschaft.", function (err, _translation) {
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
describe("translating de-DE string: Nicht konfigurierbares Objektmitglied.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht konfigurierbares Objektmitglied.", function (err, _translation) {
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
describe("translating de-DE string: Nicht definierte Variable im Strict-Modus.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nicht definierte Variable im Strict-Modus.", function (err, _translation) {
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
describe("translating de-DE string: Der Zugriff auf die caller-Eigenschaft einer Funktion oder eines arguments-Objekts ist im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Zugriff auf die caller-Eigenschaft einer Funktion oder eines arguments-Objekts ist im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Der Zugriff auf die callee-Eigenschaft eines arguments-Objekts ist im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Zugriff auf die callee-Eigenschaft eines arguments-Objekts ist im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Die Zuordnung zu schreibgeschützten Eigenschaften ist im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Zuordnung zu schreibgeschützten Eigenschaften ist im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft für ein nicht erweiterbares Objekt kann nicht erstellt werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft für ein nicht erweiterbares Objekt kann nicht erstellt werden.", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Funktion erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktion erwartet", function (err, _translation) {
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
describe("translating de-DE string: Funktion erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktion erwartet", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft kann nicht sowohl Accessors als auch einen Wert aufweisen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft kann nicht sowohl Accessors als auch einen Wert aufweisen.", function (err, _translation) {
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
describe("translating de-DE string: 'this' ist Null oder undefiniert.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' ist Null oder undefiniert.", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Funktion erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktion erwartet", function (err, _translation) {
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
describe("translating de-DE string: Zeichenfolge erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zeichenfolge erwartet", function (err, _translation) {
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
describe("translating de-DE string: Boolesch erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boolesch erwartet", function (err, _translation) {
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
describe("translating de-DE string: Datum erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Datum erwartet", function (err, _translation) {
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
describe("translating de-DE string: Zahl erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zahl erwartet", function (err, _translation) {
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
describe("translating de-DE string: VBArray erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray erwartet", function (err, _translation) {
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
describe("translating de-DE string: JavaScript-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Aufzählungsobjekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Aufzählungsobjekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: RegExp-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("RegExp-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültiges Funktionsargument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiges Funktionsargument", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: JavaScript-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Funktion erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktion erwartet", function (err, _translation) {
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
describe("translating de-DE string: VBArray erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray erwartet", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültige \"length\"-Eigenschaft", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige \"length\"-Eigenschaft", function (err, _translation) {
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
describe("translating de-DE string: Array- oder Arguments-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array- oder Arguments-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Operand", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Operand", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Operand", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Eigenschaftendeskriptor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Eigenschaftendeskriptor", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft kann nicht definiert werden: Das Objekt ist nicht erweiterbar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft kann nicht definiert werden: Das Objekt ist nicht erweiterbar", function (err, _translation) {
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
describe("translating de-DE string: Die nicht konfigurierbare Eigenschaft kann nicht neu definiert werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die nicht konfigurierbare Eigenschaft kann nicht neu definiert werden", function (err, _translation) {
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
describe("translating de-DE string: Die schreibgeschützte Eigenschaft kann nicht geändert werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die schreibgeschützte Eigenschaft kann nicht geändert werden", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft kann nicht geändert werden: \"length\" ist schreibgeschützt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft kann nicht geändert werden: \"length\" ist schreibgeschützt", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft kann nicht definiert werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft kann nicht definiert werden", function (err, _translation) {
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
describe("translating de-DE string: Ungültiges Konstruktorargument in typisiertem Array.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiges Konstruktorargument in typisiertem Array.", function (err, _translation) {
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
describe("translating de-DE string: 'this' ist kein Objekt für ein typisiertes Array.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' ist kein Objekt für ein typisiertes Array.", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Offset oder ungültige Länge beim Erstellen eines typisierten Arrays.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Offset oder ungültige Länge beim Erstellen eines typisierten Arrays.", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Start- oder Endwert in Unterarraymethode eines typisierten Arrays.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Start- oder Endwert in Unterarraymethode eines typisierten Arrays.", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Quelle in typisiertem Array.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Quelle in typisiertem Array.", function (err, _translation) {
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
describe("translating de-DE string: 'this' ist kein Datenansichtsobjekt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' ist kein Datenansichtsobjekt.", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Argumente in Datenansicht.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Argumente in Datenansicht.", function (err, _translation) {
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
describe("translating de-DE string: Zugriff eines Datenansichtsvorgangs jenseits der angegebenen Pufferlänge.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zugriff eines Datenansichtsvorgangs jenseits der angegebenen Pufferlänge.", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Argumente in Datenansicht.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Argumente in Datenansicht.", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Funktionssignatur.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Funktionssignatur.", function (err, _translation) {
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
describe("translating de-DE string: Ungültige Eigenschaftssignatur.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültige Eigenschaftssignatur.", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Eingabeparametertyp.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Eingabeparametertyp.", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Eingabeparameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Eingabeparameter", function (err, _translation) {
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
describe("translating de-DE string: Der Zugriff auf die arguments-Eigenschaft einer Funktion ist im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Zugriff auf die arguments-Eigenschaft einer Funktion ist im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Inspectable-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inspectable-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Arguments in Typ \"char\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Arguments in Typ \"char\"", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Arguments in Typ \"GUID\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Arguments in Typ \"GUID\"", function (err, _translation) {
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
describe("translating de-DE string: \"IInspectable\" erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"IInspectable\" erwartet", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Objekts in Struktur: Objekt fehlt erwartete Eigenschaft.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Objekts in Struktur: Objekt fehlt erwartete Eigenschaft.", function (err, _translation) {
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
describe("translating de-DE string: Unbekannter Typ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unbekannter Typ", function (err, _translation) {
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
describe("translating de-DE string: Funktion aufgerufen mit zu wenig Argumenten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funktion aufgerufen mit zu wenig Argumenten", function (err, _translation) {
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
describe("translating de-DE string: Typ kann nicht konstruiert werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typ kann nicht konstruiert werden.", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Werts in \"PropertyValue\": Typ nicht unterstützt von \"PropertyValue\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Werts in \"PropertyValue\": Typ nicht unterstützt von \"PropertyValue\"", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Werts zu \"IInspectable\": Typ nicht unterstützt von \"IInspectable\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Werts zu \"IInspectable\": Typ nicht unterstützt von \"IInspectable\"", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Datums zu \"Windows.Foundation.DateTime\": Wert außerhalb des gültigen Bereichs", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Datums zu \"Windows.Foundation.DateTime\": Wert außerhalb des gültigen Bereichs", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Werts in \"Windows.Foundation.TimeSpan\": Wert außerhalb des gültigen Bereichs", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Werts in \"Windows.Foundation.TimeSpan\": Wert außerhalb des gültigen Bereichs", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Zugriff auf bereits freigegebenes Inspectable-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Zugriff auf bereits freigegebenes Inspectable-Objekt", function (err, _translation) {
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
describe("translating de-DE string: Bereits freigegebenes Inspectable-Objekt kann nicht freigegeben werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bereits freigegebenes Inspectable-Objekt kann nicht freigegeben werden.", function (err, _translation) {
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
describe("translating de-DE string: \"this\" ist nicht vom erwarteten Typ.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"this\" ist nicht vom erwarteten Typ.", function (err, _translation) {
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
describe("translating de-DE string: Für das Array wurde eine nicht zulässige Länge und Größe angegeben.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Für das Array wurde eine nicht zulässige Länge und Größe angegeben.", function (err, _translation) {
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
describe("translating de-DE string: Unerwarteter Fehler beim Abrufen von Metadateninformationen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unerwarteter Fehler beim Abrufen von Metadateninformationen.", function (err, _translation) {
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
describe("translating de-DE string: Der Status lautet \"error\", es wurde jedoch kein Fehler von \"getResults\" zurückgegeben.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Status lautet \"error\", es wurde jedoch kein Fehler von \"getResults\" zurückgegeben.", function (err, _translation) {
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
describe("translating de-DE string: An den abgeschlossenen Handler wurde ein fehlender oder ungültiger Statusparameter übergeben.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("An den abgeschlossenen Handler wurde ein fehlender oder ungültiger Statusparameter übergeben.", function (err, _translation) {
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
describe("translating de-DE string: An den abgeschlossenen Handler wurde ein fehlender oder ungültiger Absenderparameter übergeben.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("An den abgeschlossenen Handler wurde ein fehlender oder ungültiger Absenderparameter übergeben.", function (err, _translation) {
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
describe("translating de-DE string: Unendlich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unendlich", function (err, _translation) {
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
describe("translating de-DE string: -unendlich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-unendlich", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt unterstützt die Eigenschaft oder Methode \"MyDynamicTestString\" nicht", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt unterstützt die Eigenschaft oder Methode \"MyDynamicTestString\" nicht", function (err, _translation) {
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
describe("translating de-DE string: Ein Argument für die Funktion \"MyDynamicTestString\" ist nicht optional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ein Argument für die Funktion \"MyDynamicTestString\" ist nicht optional", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist keine Zahl", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist keine Zahl", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist keine Funktion", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist keine Funktion", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist kein indizierbares Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist kein indizierbares Objekt", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist keine Zeichenfolge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist keine Zeichenfolge", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist kein Datumsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist kein Datumsobjekt", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist Null oder kein Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist Null oder kein Objekt", function (err, _translation) {
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
describe("translating de-DE string: Zuweisung an \"MyDynamicTestString\" nicht möglich", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zuweisung an \"MyDynamicTestString\" nicht möglich", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist undefiniert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist undefiniert", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist nicht vom Typ Boolesch", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist nicht vom Typ Boolesch", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" kann nicht gelöscht werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" kann nicht gelöscht werden", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist nicht vom Typ VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist nicht vom Typ VBArray", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist kein JavaScript-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist kein JavaScript-Objekt", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist kein Aufzählungsobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist kein Aufzählungsobjekt", function (err, _translation) {
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
describe("translating de-DE string: \"MyDynamicTestString\" ist kein Objekt mit regulärem Ausdruck", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"MyDynamicTestString\" ist kein Objekt mit regulärem Ausdruck", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString ist kein Array- oder Arguments-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString ist kein Array- oder Arguments-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString ist kein Arrayobjekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString ist kein Arrayobjekt", function (err, _translation) {
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
describe("translating de-DE string: Das \"MyDynamicTestString\"-Attribut für den Eigenschaftendeskriptor kann für dieses Objekt nicht auf \"true\" festgelegt werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das \"MyDynamicTestString\"-Attribut für den Eigenschaftendeskriptor kann für dieses Objekt nicht auf \"true\" festgelegt werden", function (err, _translation) {
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
describe("translating de-DE string: Das \"MyDynamicTestString\"-Attribut für den Eigenschaftendeskriptor kann für dieses Objekt nicht auf \"false\" festgelegt werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das \"MyDynamicTestString\"-Attribut für den Eigenschaftendeskriptor kann für dieses Objekt nicht auf \"false\" festgelegt werden", function (err, _translation) {
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
describe("translating de-DE string: Neudeklaration der Konstante \"MyDynamicTestString\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neudeklaration der Konstante \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating de-DE string: Das Aufrufen des Löschvorgangs für \"MyDynamicTestString\" ist im Strict-Modus nicht zulässig.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Aufrufen des Löschvorgangs für \"MyDynamicTestString\" ist im Strict-Modus nicht zulässig.", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft \"MyDynamicTestString\" eines undefinierten oder Nullverweises kann nicht festgelegt werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft \"MyDynamicTestString\" eines undefinierten oder Nullverweises kann nicht festgelegt werden.", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft \"MyDynamicTestString\" eines undefinierten oder Nullverweises kann nicht abgerufen werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft \"MyDynamicTestString\" eines undefinierten oder Nullverweises kann nicht abgerufen werden.", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft \"MyDynamicTestString\" eines undefinierten oder Nullverweises kann nicht gelöscht werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft \"MyDynamicTestString\" eines undefinierten oder Nullverweises kann nicht gelöscht werden.", function (err, _translation) {
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
describe("translating de-DE string: Auf die Eigenschaft \"MyDynamicTestString\" kann nicht zugegriffen werden: Der Typ \"VarDate\" unterstützt keine benutzerdefinierten Eigenschaften", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Auf die Eigenschaft \"MyDynamicTestString\" kann nicht zugegriffen werden: Der Typ \"VarDate\" unterstützt keine benutzerdefinierten Eigenschaften", function (err, _translation) {
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
describe("translating de-DE string: Der Wert der Eigenschaft \"MyDynamicTestString\" ist kein Function-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Wert der Eigenschaft \"MyDynamicTestString\" ist kein Function-Objekt", function (err, _translation) {
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
describe("translating de-DE string: Der Wert der Eigenschaft \"MyDynamicTestString\" ist Null oder undefiniert, kein Function-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Der Wert der Eigenschaft \"MyDynamicTestString\" ist Null oder undefiniert, kein Function-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist Null oder undefiniert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist Null oder undefiniert", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein Function-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein Function-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein String-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein String-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein Boolesch-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein Boolesch-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein Date-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein Date-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein Number-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein Number-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein VBArray-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein VBArray-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein JavaScript-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein JavaScript-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein Enumerator-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein Enumerator-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: 'this' ist kein RegExp-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' ist kein RegExp-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Ungültiges Argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Ungültiges Argument", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Argument ist kein Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Argument ist kein Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Argument ist kein JavaScript-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Argument ist kein JavaScript-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Argument ist kein Function-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Argument ist kein Function-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Argument ist kein VBArray-Objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Argument ist kein VBArray-Objekt", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Argument ist Null oder undefiniert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Argument ist Null oder undefiniert", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Argument ist kein Objekt und ist nicht Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Argument ist kein Objekt und ist nicht Null", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Argument weist keine gültige \"length\"-Eigenschaft auf", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Argument weist keine gültige \"length\"-Eigenschaft auf", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Array- oder Arguments-Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Array- oder Arguments-Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Operand für \"MyDynamicTestString\": Objekt erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Operand für \"MyDynamicTestString\": Objekt erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Operand für \"MyDynamicTestString\": Funktion erwartet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Operand für \"MyDynamicTestString\": Funktion erwartet", function (err, _translation) {
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
describe("translating de-DE string: Ungültiger Deskriptor für die Eigenschaft \"MyDynamicTestString\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiger Deskriptor für die Eigenschaft \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft \"MyDynamicTestString\" kann nicht definiert werden: Das Objekt ist nicht erweiterbar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft \"MyDynamicTestString\" kann nicht definiert werden: Das Objekt ist nicht erweiterbar", function (err, _translation) {
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
describe("translating de-DE string: Die nicht konfigurierbare Eigenschaft \"MyDynamicTestString\" kann nicht neu definiert werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die nicht konfigurierbare Eigenschaft \"MyDynamicTestString\" kann nicht neu definiert werden", function (err, _translation) {
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
describe("translating de-DE string: Die schreibgeschützte Eigenschaft \"MyDynamicTestString\" kann nicht geändert werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die schreibgeschützte Eigenschaft \"MyDynamicTestString\" kann nicht geändert werden", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft \"MyDynamicTestString\" kann nicht geändert werden: 'length' ist schreibgeschützt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft \"MyDynamicTestString\" kann nicht geändert werden: 'length' ist schreibgeschützt", function (err, _translation) {
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
describe("translating de-DE string: Die Eigenschaft \"MyDynamicTestString\" kann nicht definiert werden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Eigenschaft \"MyDynamicTestString\" kann nicht definiert werden", function (err, _translation) {
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
describe("translating de-DE string: Erforderliches Argument MyDynamicTestString für Datenansichtsmethode wurde nicht angegeben.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erforderliches Argument MyDynamicTestString für Datenansichtsmethode wurde nicht angegeben.", function (err, _translation) {
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
describe("translating de-DE string: Ungültiges Konstruktorargument MyDynamicTestString in Datenansicht.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ungültiges Konstruktorargument MyDynamicTestString in Datenansicht.", function (err, _translation) {
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
describe("translating de-DE string: Die Funktion \"MyDynamicTestString\" kann aufgrund einer ungültigen Signatur nicht aufgerufen werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Funktion \"MyDynamicTestString\" kann aufgrund einer ungültigen Signatur nicht aufgerufen werden.", function (err, _translation) {
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
describe("translating de-DE string: Auf die Eigenschaft \"MyDynamicTestString\" kann aufgrund einer ungültigen Signatur nicht zugegriffen werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Auf die Eigenschaft \"MyDynamicTestString\" kann aufgrund einer ungültigen Signatur nicht zugegriffen werden.", function (err, _translation) {
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
describe("translating de-DE string: Die Laufzeitklasse \"MyDynamicTestString\", die \"Windows.Foundation.IPropertyValue\" als Standardschnittstelle besitzt, wird nicht als Eingabeparametertyp unterstützt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Die Laufzeitklasse \"MyDynamicTestString\", die \"Windows.Foundation.IPropertyValue\" als Standardschnittstelle besitzt, wird nicht als Eingabeparametertyp unterstützt.", function (err, _translation) {
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
describe("translating de-DE string: Das Objekt mit der Schnittstelle \"Windows.Foundation.IPropertyValue\", das den Laufzeitklassennamen \"MyDynamicTestString\" besitzt, wird nicht als out-Parameter unterstützt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das Objekt mit der Schnittstelle \"Windows.Foundation.IPropertyValue\", das den Laufzeitklassennamen \"MyDynamicTestString\" besitzt, wird nicht als out-Parameter unterstützt.", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: \"this\" ist kein Inspectable-Objekt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"this\" ist kein Inspectable-Objekt.", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Fehler beim Konvertieren des Arguments in Typ \"char\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Fehler beim Konvertieren des Arguments in Typ \"char\"", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Fehler beim Konvertieren des Arguments in Typ \"GUID\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Fehler beim Konvertieren des Arguments in Typ \"GUID\"", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Fehler beim Konvertieren des Rückgabewerts in \"IInspectable\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Fehler beim Konvertieren des Rückgabewerts in \"IInspectable\"", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Objekts in Struktur: Objekt fehlt erwartete Eigenschaft \"MyDynamicTestString\".", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Objekts in Struktur: Objekt fehlt erwartete Eigenschaft \"MyDynamicTestString\".", function (err, _translation) {
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
describe("translating de-DE string: Typ \"MyDynamicTestString\" nicht gefunden", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typ \"MyDynamicTestString\" nicht gefunden", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Funktion aufgerufen mit zu wenig Argumenten", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Funktion aufgerufen mit zu wenig Argumenten", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Typ kann nicht konstruiert werden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Typ kann nicht konstruiert werden.", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Werts in \"PropertyValue\": MyDynamicTestString nicht unterstützt von \"PropertyValue\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Werts in \"PropertyValue\": MyDynamicTestString nicht unterstützt von \"PropertyValue\"", function (err, _translation) {
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
describe("translating de-DE string: Fehler beim Konvertieren des Werts in \"IInspectable\": MyDynamicTestString nicht unterstützt von \"IInspectable\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fehler beim Konvertieren des Werts in \"IInspectable\": MyDynamicTestString nicht unterstützt von \"IInspectable\"", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Das Inspectable-Objekt \"this\" wurde freigegeben, Zugriff nicht möglich.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Das Inspectable-Objekt \"this\" wurde freigegeben, Zugriff nicht möglich.", function (err, _translation) {
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
describe("translating de-DE string: \"this\" ist nicht vom erwarteten Typ: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("\"this\" ist nicht vom erwarteten Typ: MyDynamicTestString", function (err, _translation) {
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
describe("translating de-DE string: MyDynamicTestString: Unerwarteter Fehler beim Abrufen von Metadateninformationen.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Unerwarteter Fehler beim Abrufen von Metadateninformationen.", function (err, _translation) {
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
describe("translating de-DE string: Das angegebene Datum wurde im aktuellen Gebietsschemakalender nicht gefunden.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Das angegebene Datum wurde im aktuellen Gebietsschemakalender nicht gefunden.", function (err, _translation) {
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
