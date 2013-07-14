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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
