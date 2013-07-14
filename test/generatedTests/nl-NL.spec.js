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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
