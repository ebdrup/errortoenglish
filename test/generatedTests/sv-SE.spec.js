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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
