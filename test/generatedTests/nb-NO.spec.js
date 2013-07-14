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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
