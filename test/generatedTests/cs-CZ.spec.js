var errorToEnglish = require("../../lib/errortoenglish");
describe("translating cs-CZ string: Neplatné volání nebo argument procedury", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatné volání nebo argument procedury", function (err, _translation) {
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
describe("translating cs-CZ string: Přetečení", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Přetečení", function (err, _translation) {
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
describe("translating cs-CZ string: Nedostatek paměti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedostatek paměti", function (err, _translation) {
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
describe("translating cs-CZ string: Index prvku pole je mimo rozsah.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Index prvku pole je mimo rozsah.", function (err, _translation) {
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
describe("translating cs-CZ string: Pole je pevné nebo dočasně uzamčené.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pole je pevné nebo dočasně uzamčené.", function (err, _translation) {
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
describe("translating cs-CZ string: Dělení nulou", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dělení nulou", function (err, _translation) {
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
describe("translating cs-CZ string: Neshoda typu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neshoda typu", function (err, _translation) {
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
describe("translating cs-CZ string: Nedostatek místa v řetězci", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedostatek místa v řetězci", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze provést požadovanou operaci.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze provést požadovanou operaci.", function (err, _translation) {
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
describe("translating cs-CZ string: Nedostatek místa v zásobníku", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedostatek místa v zásobníku", function (err, _translation) {
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
describe("translating cs-CZ string: Procedura Sub nebo funkce Function není definována.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Procedura Sub nebo funkce Function není definována.", function (err, _translation) {
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
describe("translating cs-CZ string: Chyba při načítání knihovny DLL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chyba při načítání knihovny DLL", function (err, _translation) {
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
describe("translating cs-CZ string: Vnitřní chyba", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vnitřní chyba", function (err, _translation) {
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
describe("translating cs-CZ string: Chybný název nebo číslo souboru", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chybný název nebo číslo souboru", function (err, _translation) {
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
describe("translating cs-CZ string: Soubor nebyl nalezen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Soubor nebyl nalezen.", function (err, _translation) {
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
describe("translating cs-CZ string: Chybný režim souboru", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chybný režim souboru", function (err, _translation) {
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
describe("translating cs-CZ string: Soubor je již otevřen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Soubor je již otevřen.", function (err, _translation) {
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
describe("translating cs-CZ string: Vstupně-výstupní chyba zařízení", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vstupně-výstupní chyba zařízení", function (err, _translation) {
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
describe("translating cs-CZ string: Soubor již existuje.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Soubor již existuje.", function (err, _translation) {
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
describe("translating cs-CZ string: Disk je plný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Disk je plný.", function (err, _translation) {
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
describe("translating cs-CZ string: Vstup za koncem souboru", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vstup za koncem souboru", function (err, _translation) {
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
describe("translating cs-CZ string: Příliš mnoho souborů", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Příliš mnoho souborů", function (err, _translation) {
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
describe("translating cs-CZ string: Zařízení není k dispozici.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zařízení není k dispozici.", function (err, _translation) {
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
describe("translating cs-CZ string: Oprávnění byla odepřena.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Oprávnění byla odepřena.", function (err, _translation) {
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
describe("translating cs-CZ string: Disk není připraven.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Disk není připraven.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze přejmenovat na jinou jednotku.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze přejmenovat na jinou jednotku.", function (err, _translation) {
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
describe("translating cs-CZ string: Chyba přístupu k souboru nebo k cestě", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chyba přístupu k souboru nebo k cestě", function (err, _translation) {
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
describe("translating cs-CZ string: Cesta nebyla nalezena.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Cesta nebyla nalezena.", function (err, _translation) {
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
describe("translating cs-CZ string: Proměnná typu Object nebo blok With není nastavena.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Proměnná typu Object nebo blok With není nastavena.", function (err, _translation) {
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
describe("translating cs-CZ string: Smyčka For není inicializována.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Smyčka For není inicializována.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatné použití položky Null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatné použití položky Null", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze vytvořit potřebný dočasný soubor.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze vytvořit potřebný dočasný soubor.", function (err, _translation) {
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
describe("translating cs-CZ string: Je požadován objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Je požadován objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Automatizační server nemůže vytvořit objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Automatizační server nemůže vytvořit objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Třída nepodporuje objekt Automation.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Třída nepodporuje objekt Automation.", function (err, _translation) {
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
describe("translating cs-CZ string: Název souboru nebo třídy nebyl během operace s objektem Automation nalezen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Název souboru nebo třídy nebyl během operace s objektem Automation nalezen.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt tuto vlastnost nebo metodu nepodporuje.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt tuto vlastnost nebo metodu nepodporuje.", function (err, _translation) {
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
describe("translating cs-CZ string: Chyba automatizace", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chyba automatizace", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt tuto akci nepodporuje.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt tuto akci nepodporuje.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt nepodporuje pojmenované argumenty.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt nepodporuje pojmenované argumenty.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt nepodporuje aktuální místní nastavení.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt nepodporuje aktuální místní nastavení.", function (err, _translation) {
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
describe("translating cs-CZ string: Pojmenovaný argument nebyl nalezen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pojmenovaný argument nebyl nalezen.", function (err, _translation) {
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
describe("translating cs-CZ string: Argument není nepovinný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument není nepovinný.", function (err, _translation) {
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
describe("translating cs-CZ string: Chybný počet argumentů nebo chybné přiřazení vlastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chybný počet argumentů nebo chybné přiřazení vlastnosti", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt není kolekce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt není kolekce.", function (err, _translation) {
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
describe("translating cs-CZ string: Zadaná funkce knihovny DLL nebyla nalezena.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zadaná funkce knihovny DLL nebyla nalezena.", function (err, _translation) {
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
describe("translating cs-CZ string: Proměnná používá typ Automation, který není v jazyce JavaScript podporován.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Proměnná používá typ Automation, který není v jazyce JavaScript podporován.", function (err, _translation) {
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
describe("translating cs-CZ string: Vzdálený server neexistuje nebo není k dispozici.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vzdálený server neexistuje nebo není k dispozici.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze přiřadit do proměnné.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze přiřadit do proměnné.", function (err, _translation) {
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
describe("translating cs-CZ string: Skriptování objektu není bezpečné.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Skriptování objektu není bezpečné.", function (err, _translation) {
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
describe("translating cs-CZ string: Inicializace objektu není bezpečná.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Inicializace objektu není bezpečná.", function (err, _translation) {
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
describe("translating cs-CZ string: Vytvoření objektu není bezpečné.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vytvoření objektu není bezpečné.", function (err, _translation) {
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
describe("translating cs-CZ string: Došlo k výjimce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Došlo k výjimce.", function (err, _translation) {
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
describe("translating cs-CZ string: Nedostatek paměti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedostatek paměti", function (err, _translation) {
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
describe("translating cs-CZ string: Chybná syntaxe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chybná syntaxe", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak ':'", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak ';'", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak '('", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak ')'", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak ']'", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak '{'", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak '}'", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván identifikátor.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván identifikátor.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak '='", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak '/'", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatné číslo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatné číslo", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný znak", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný znak", function (err, _translation) {
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
describe("translating cs-CZ string: Neukončená řetězcová konstanta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neukončená řetězcová konstanta", function (err, _translation) {
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
describe("translating cs-CZ string: Neukončený komentář", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neukončený komentář", function (err, _translation) {
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
describe("translating cs-CZ string: Příkaz 'return' byl použit vně funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Příkaz 'return' byl použit vně funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Příkaz 'break' nelze použít mimo smyčku.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Příkaz 'break' nelze použít mimo smyčku.", function (err, _translation) {
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
describe("translating cs-CZ string: Příkaz 'continue' nelze použít mimo smyčku.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Příkaz 'continue' nelze použít mimo smyčku.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána hexadecimální číslice.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána hexadecimální číslice.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván příkaz 'while'.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván příkaz 'while'.", function (err, _translation) {
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
describe("translating cs-CZ string: Návěstí bylo předefinováno.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Návěstí bylo předefinováno.", function (err, _translation) {
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
describe("translating cs-CZ string: Návěstí nebylo nalezeno.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Návěstí nebylo nalezeno.", function (err, _translation) {
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
describe("translating cs-CZ string: Výraz 'default' lze v příkazu 'switch' použít jen jednou.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Výraz 'default' lze v příkazu 'switch' použít jen jednou.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván identifikátor, řetězec nebo číslo.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván identifikátor, řetězec nebo číslo.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván příkaz '@end'.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván příkaz '@end'.", function (err, _translation) {
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
describe("translating cs-CZ string: Podmíněná kompilace je vypnuta.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Podmíněná kompilace je vypnuta.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána konstanta.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána konstanta.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak '@'", function (err, _translation) {
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
describe("translating cs-CZ string: Bylo očekáváno klíčové slovo 'catch'.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Bylo očekáváno klíčové slovo 'catch'.", function (err, _translation) {
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
describe("translating cs-CZ string: Bylo očekáváno klíčové slovo 'var'.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Bylo očekáváno klíčové slovo 'var'.", function (err, _translation) {
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
describe("translating cs-CZ string: Za příkazem throw musí na stejném zdrojovém řádku následovat výraz.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Za příkazem throw musí na stejném zdrojovém řádku následovat výraz.", function (err, _translation) {
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
describe("translating cs-CZ string: Příkazy with nejsou povoleny ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Příkazy with nejsou povoleny ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Duplicitní názvy formálních parametrů nejsou povoleny ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Duplicitní názvy formálních parametrů nejsou povoleny ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Osmičkové číselné literály a řídicí znaky nejsou povoleny ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Osmičkové číselné literály a řídicí znaky nejsou povoleny ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatné použití funkce eval ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatné použití funkce eval ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatné použití funkce arguments ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatné použití funkce arguments ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Volání funkce delete pro výraz není povoleno ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Volání funkce delete pro výraz není povoleno ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Několik definic vlastnosti není povoleno ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Několik definic vlastnosti není povoleno ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Ve striktním režimu nemohou být deklarace function vnořené v příkazu nebo v bloku. Mohou se vyskytovat pouze na nejvyšší úrovni nebo přímo v těle funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ve striktním režimu nemohou být deklarace function vnořené v příkazu nebo v bloku. Mohou se vyskytovat pouze na nejvyšší úrovni nebo přímo v těle funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Použití klíčového slova jako identifikátoru je neplatné.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Použití klíčového slova jako identifikátoru je neplatné.", function (err, _translation) {
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
describe("translating cs-CZ string: Použití budoucího rezervovaného slova jako identifikátoru je neplatné.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Použití budoucího rezervovaného slova jako identifikátoru je neplatné.", function (err, _translation) {
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
describe("translating cs-CZ string: Použití budoucího rezervovaného slova jako identifikátoru je neplatné. Název identifikátoru je ve striktním režimu rezervovaný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Použití budoucího rezervovaného slova jako identifikátoru je neplatné. Název identifikátoru je ve striktním režimu rezervovaný.", function (err, _translation) {
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
describe("translating cs-CZ string: Funkce Setter musí mít jeden argument.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funkce Setter musí mít jeden argument.", function (err, _translation) {
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
describe("translating cs-CZ string: JavaScript – chyba kompilace", function () {
    var translation;
    before(function (done) {
        errorToEnglish("JavaScript – chyba kompilace", function (err, _translation) {
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
describe("translating cs-CZ string: JavaScript – chyba při běhu programu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("JavaScript – chyba při běhu programu", function (err, _translation) {
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
describe("translating cs-CZ string: Neznámá chyba při běhu programu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neznámá chyba při běhu programu", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze přiřadit objektu 'this'.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze přiřadit objektu 'this'.", function (err, _translation) {
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
describe("translating cs-CZ string: Bylo očekáváno číslo.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Bylo očekáváno číslo.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze přiřadit výsledku funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze přiřadit výsledku funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt nelze indexovat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt nelze indexovat.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván řetězec.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván řetězec.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt typu datum.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt typu datum.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Nepovolená levá část přiřazení", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nepovolená levá část přiřazení", function (err, _translation) {
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
describe("translating cs-CZ string: Nedefinovaný identifikátor", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedefinovaný identifikátor", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána hodnota typu Boolean.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána hodnota typu Boolean.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze spustit kód z uvolněného skriptu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze spustit kód z uvolněného skriptu.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván člen objektu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván člen objektu.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván typ VBArray.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván typ VBArray.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt JavaScript.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt JavaScript.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt typu Enumerator.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt typu Enumerator.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt regulárního výrazu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt regulárního výrazu.", function (err, _translation) {
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
describe("translating cs-CZ string: Chybná syntaxe regulárního výrazu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chybná syntaxe regulárního výrazu", function (err, _translation) {
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
describe("translating cs-CZ string: Neočekávaný kvantifikátor", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neočekávaný kvantifikátor", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak ']' v regulárním výrazu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak ']' v regulárním výrazu", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván znak ')' v regulárním výrazu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván znak ')' v regulárním výrazu", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný rozsah znakové sady", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný rozsah znakové sady", function (err, _translation) {
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
describe("translating cs-CZ string: Výjimka byla generována, ale nebyla zachycena.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Výjimka byla generována, ale nebyla zachycena.", function (err, _translation) {
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
describe("translating cs-CZ string: Funkce neobsahuje platný objekt prototypu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funkce neobsahuje platný objekt prototypu.", function (err, _translation) {
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
describe("translating cs-CZ string: Identifikátor URI, který má být kódován, obsahuje neplatný znak.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Identifikátor URI, který má být kódován, obsahuje neplatný znak.", function (err, _translation) {
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
describe("translating cs-CZ string: Identifikátor URI, který má být dekódován, nemá platné kódování.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Identifikátor URI, který má být dekódován, nemá platné kódování.", function (err, _translation) {
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
describe("translating cs-CZ string: Počet desetinných míst je mimo rozsah.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Počet desetinných míst je mimo rozsah.", function (err, _translation) {
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
describe("translating cs-CZ string: Přesnost je mimo rozsah.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Přesnost je mimo rozsah.", function (err, _translation) {
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
describe("translating cs-CZ string: Je očekáván objekt typu Array nebo Arguments.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Je očekáván objekt typu Array nebo Arguments.", function (err, _translation) {
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
describe("translating cs-CZ string: Délka pole musí být konečné celé kladné číslo.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Délka pole musí být konečné celé kladné číslo.", function (err, _translation) {
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
describe("translating cs-CZ string: Délce pole musí být přiřazeno konečné celé kladné číslo.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Délce pole musí být přiřazeno konečné celé kladné číslo.", function (err, _translation) {
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
describe("translating cs-CZ string: Je očekáván objekt typu Array.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Je očekáván objekt typu Array.", function (err, _translation) {
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
describe("translating cs-CZ string: Cyklický odkaz v hodnotě argumentu není podporován", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Cyklický odkaz v hodnotě argumentu není podporován", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný argument pro nahrazení", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný argument pro nahrazení", function (err, _translation) {
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
describe("translating cs-CZ string: Seznam argumentů je příliš rozsáhlý. Nelze ho proto použít.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Seznam argumentů je příliš rozsáhlý. Nelze ho proto použít.", function (err, _translation) {
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
describe("translating cs-CZ string: Opětovná deklarace vlastnosti const", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Opětovná deklarace vlastnosti const", function (err, _translation) {
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
describe("translating cs-CZ string: Členský objekt nelze konfigurovat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Členský objekt nelze konfigurovat.", function (err, _translation) {
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
describe("translating cs-CZ string: Proměnná není definována ve striktním režimu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Proměnná není definována ve striktním režimu.", function (err, _translation) {
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
describe("translating cs-CZ string: Ve striktním režimu není povolen přístup k vlastnosti „caller“ funkce nebo objektu argumentů.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ve striktním režimu není povolen přístup k vlastnosti „caller“ funkce nebo objektu argumentů.", function (err, _translation) {
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
describe("translating cs-CZ string: Ve striktním režimu není povolen přístup k vlastnosti „callee“ objektu argumentů.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ve striktním režimu není povolen přístup k vlastnosti „callee“ objektu argumentů.", function (err, _translation) {
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
describe("translating cs-CZ string: Ve striktním režimu není povoleno přiřazení k vlastnostem jen pro čtení.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ve striktním režimu není povoleno přiřazení k vlastnostem jen pro čtení.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze vytvořit vlastnost pro objekt, který nelze rozšířit.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze vytvořit vlastnost pro objekt, který nelze rozšířit.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost nemůže mít přístupový objekt i hodnotu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost nemůže mít přístupový objekt i hodnotu.", function (err, _translation) {
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
describe("translating cs-CZ string: Metoda 'this' vrací hodnotu Null nebo není definována.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Metoda 'this' vrací hodnotu Null nebo není definována.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván řetězec.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván řetězec.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána hodnota typu Boolean.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána hodnota typu Boolean.", function (err, _translation) {
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
describe("translating cs-CZ string: Bylo očekáváno datum.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Bylo očekáváno datum.", function (err, _translation) {
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
describe("translating cs-CZ string: Bylo očekáváno číslo.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Bylo očekáváno číslo.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván typ VBArray.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván typ VBArray.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt JavaScript.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt JavaScript.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt typu Enumerator.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt typu Enumerator.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt RegExp.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt RegExp.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný argument funkce", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný argument funkce", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt JavaScript.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt JavaScript.", function (err, _translation) {
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
describe("translating cs-CZ string: Byla očekávána funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla očekávána funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván typ VBArray.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván typ VBArray.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatná vlastnost length", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatná vlastnost length", function (err, _translation) {
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
describe("translating cs-CZ string: Je očekáván objekt typu Array nebo Arguments.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Je očekáván objekt typu Array nebo Arguments.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný operand", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný operand", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný operand", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný operand", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný popisovač vlastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný popisovač vlastnosti", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost nelze definovat: Objekt nelze rozšířit.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost nelze definovat: Objekt nelze rozšířit.", function (err, _translation) {
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
describe("translating cs-CZ string: Nekonfigurovatelnou vlastnost nelze předefinovat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nekonfigurovatelnou vlastnost nelze předefinovat.", function (err, _translation) {
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
describe("translating cs-CZ string: Nezapisovatelnou vlastnost nelze změnit.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nezapisovatelnou vlastnost nelze změnit.", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost nelze změnit: Vlastnost length není zapisovatelná.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost nelze změnit: Vlastnost length není zapisovatelná.", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost nelze definovat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost nelze definovat.", function (err, _translation) {
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
describe("translating cs-CZ string: Argument konstruktoru typovaného pole je neplatný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument konstruktoru typovaného pole je neplatný.", function (err, _translation) {
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
describe("translating cs-CZ string: „this“ není objekt typovaného pole.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("„this“ není objekt typovaného pole.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný posun/délka při vytváření typovaného pole", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný posun/délka při vytváření typovaného pole", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatná počáteční/koncová hodnota v metodě dílčího pole typovaného pole", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatná počáteční/koncová hodnota v metodě dílčího pole typovaného pole", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný zdroj v sadě typovaného pole", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný zdroj v sadě typovaného pole", function (err, _translation) {
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
describe("translating cs-CZ string: „this“ není objekt DataView.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("„this“ není objekt DataView.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatné argumenty v objektu DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatné argumenty v objektu DataView", function (err, _translation) {
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
describe("translating cs-CZ string: Přístup operace DataView je mimo zadanou délku vyrovnávací paměti.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Přístup operace DataView je mimo zadanou délku vyrovnávací paměti.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatné argumenty v objektu DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatné argumenty v objektu DataView", function (err, _translation) {
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
describe("translating cs-CZ string: neplatný podpis funkce", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neplatný podpis funkce", function (err, _translation) {
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
describe("translating cs-CZ string: neplatný podpis vlastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neplatný podpis vlastnosti", function (err, _translation) {
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
describe("translating cs-CZ string: neplatný typ vstupního parametru", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neplatný typ vstupního parametru", function (err, _translation) {
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
describe("translating cs-CZ string: neplatný výstupní parametr", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neplatný výstupní parametr", function (err, _translation) {
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
describe("translating cs-CZ string: Ve striktním režimu není povolen přístup k vlastnosti „arguments“ funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ve striktním režimu není povolen přístup k vlastnosti „arguments“ funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Je očekáván zkontrolovatelný objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Je očekáván zkontrolovatelný objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Argument nelze převést na typ char.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument nelze převést na typ char.", function (err, _translation) {
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
describe("translating cs-CZ string: Argument nelze převést na typ GUID.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument nelze převést na typ GUID.", function (err, _translation) {
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
describe("translating cs-CZ string: Bylo očekáváno rozhraní IInspectable.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Bylo očekáváno rozhraní IInspectable.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt nelze převést na strukturu: U objektu chybí očekávaná vlastnost.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt nelze převést na strukturu: U objektu chybí očekávaná vlastnost.", function (err, _translation) {
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
describe("translating cs-CZ string: Neznámý typ", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neznámý typ", function (err, _translation) {
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
describe("translating cs-CZ string: Byla volána funkce s příliš málo argumenty.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Byla volána funkce s příliš málo argumenty.", function (err, _translation) {
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
describe("translating cs-CZ string: Typ není konstruovatelný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Typ není konstruovatelný.", function (err, _translation) {
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
describe("translating cs-CZ string: Hodnotu nelze převést na objekt PropertyValue: Typ není objektem PropertyValue podporován.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hodnotu nelze převést na objekt PropertyValue: Typ není objektem PropertyValue podporován.", function (err, _translation) {
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
describe("translating cs-CZ string: Hodnotu nelze převést na objekt IInspectable: Typ není objektem IInspectable podporován.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hodnotu nelze převést na objekt IInspectable: Typ není objektem IInspectable podporován.", function (err, _translation) {
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
describe("translating cs-CZ string: Datum nelze převést na objekt Windows.Foundation.DateTime: Hodnota je mimo platný rozsah.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Datum nelze převést na objekt Windows.Foundation.DateTime: Hodnota je mimo platný rozsah.", function (err, _translation) {
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
describe("translating cs-CZ string: Hodnotu nelze převést na objekt Windows.Foundation.TimeSpan: Hodnota je mimo platný rozsah.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hodnotu nelze převést na objekt Windows.Foundation.TimeSpan: Hodnota je mimo platný rozsah.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný přístup k již uvolněnému zkontrolovatelnému objektu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný přístup k již uvolněnému zkontrolovatelnému objektu", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze uvolnit již uvolněný zkontrolovatelný objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze uvolnit již uvolněný zkontrolovatelný objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt this nemá očekávaný typ.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt this nemá očekávaný typ.", function (err, _translation) {
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
describe("translating cs-CZ string: Je určena neplatná délka a velikost pole.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Je určena neplatná délka a velikost pole.", function (err, _translation) {
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
describe("translating cs-CZ string: Při pokusu o získání informací o metadatech došlo k neočekávané chybě.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Při pokusu o získání informací o metadatech došlo k neočekávané chybě.", function (err, _translation) {
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
describe("translating cs-CZ string: Stav je chybový, ale metoda getResults nevrátila chybu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Stav je chybový, ale metoda getResults nevrátila chybu.", function (err, _translation) {
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
describe("translating cs-CZ string: Parametr status předaný do dokončené obslužné rutiny chybí nebo je neplatný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Parametr status předaný do dokončené obslužné rutiny chybí nebo je neplatný.", function (err, _translation) {
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
describe("translating cs-CZ string: Parametr sender předaný do dokončené obslužné rutiny chybí nebo je neplatný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Parametr sender předaný do dokončené obslužné rutiny chybí nebo je neplatný.", function (err, _translation) {
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
describe("translating cs-CZ string: Nekonečno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nekonečno", function (err, _translation) {
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
describe("translating cs-CZ string: - Nekonečno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("- Nekonečno", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt neumožňuje použití vlastnosti či metody MyDynamicTestString.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt neumožňuje použití vlastnosti či metody MyDynamicTestString.", function (err, _translation) {
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
describe("translating cs-CZ string: Argument funkce MyDynamicTestString není volitelný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument funkce MyDynamicTestString není volitelný.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není číslo.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není číslo.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není indexovatelný objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není indexovatelný objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není řetězec.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není řetězec.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není objekt typu Date.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není objekt typu Date.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString má hodnotu null nebo není objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString má hodnotu null nebo není objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze přiřadit k objektu MyDynamicTestString.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze přiřadit k objektu MyDynamicTestString.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt MyDynamicTestString není definován.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt MyDynamicTestString není definován.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není typu Boolean.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není typu Boolean.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt MyDynamicTestString nelze odstranit.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt MyDynamicTestString nelze odstranit.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není typu VBArray.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není typu VBArray.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není objekt JavaScript.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není objekt JavaScript.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není objekt typu Enumerator.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není objekt typu Enumerator.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není objekt regulárního výrazu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není objekt regulárního výrazu.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není objekt typu Array nebo Arguments.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není objekt typu Array nebo Arguments.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString není objekt typu Array.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString není objekt typu Array.", function (err, _translation) {
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
describe("translating cs-CZ string: Atribut MyDynamicTestString ve třídě property descriptor nemůže být u tohoto objektu nastaven na hodnotu true.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Atribut MyDynamicTestString ve třídě property descriptor nemůže být u tohoto objektu nastaven na hodnotu true.", function (err, _translation) {
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
describe("translating cs-CZ string: Atribut MyDynamicTestString ve třídě property descriptor nemůže být u tohoto objektu nastaven na hodnotu false.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Atribut MyDynamicTestString ve třídě property descriptor nemůže být u tohoto objektu nastaven na hodnotu false.", function (err, _translation) {
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
describe("translating cs-CZ string: Opětovná deklarace konstanty MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Opětovná deklarace konstanty MyDynamicTestString", function (err, _translation) {
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
describe("translating cs-CZ string: Ve striktním režimu není povoleno volání metody delete pro objekt MyDynamicTestString.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ve striktním režimu není povoleno volání metody delete pro objekt MyDynamicTestString.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze nastavit vlastnost MyDynamicTestString nedefinovaného nebo nulového odkazu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze nastavit vlastnost MyDynamicTestString nedefinovaného nebo nulového odkazu.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze načíst vlastnost MyDynamicTestString nedefinovaného nebo nulového odkazu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze načíst vlastnost MyDynamicTestString nedefinovaného nebo nulového odkazu.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze odstranit vlastnost MyDynamicTestString nedefinovaného nebo nulového odkazu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze odstranit vlastnost MyDynamicTestString nedefinovaného nebo nulového odkazu.", function (err, _translation) {
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
describe("translating cs-CZ string: Nelze přistupovat k vlastnosti MyDynamicTestString: Typ VarDate nepodporuje uživatelské vlastnosti.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nelze přistupovat k vlastnosti MyDynamicTestString: Typ VarDate nepodporuje uživatelské vlastnosti.", function (err, _translation) {
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
describe("translating cs-CZ string: Hodnota vlastnosti MyDynamicTestString není objektem Function.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hodnota vlastnosti MyDynamicTestString není objektem Function.", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost MyDynamicTestString má hodnotu Null nebo není definována. Vlastnost není objektem Function.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost MyDynamicTestString má hodnotu Null nebo není definována. Vlastnost není objektem Function.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' má hodnotu Null nebo není definována.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' má hodnotu Null nebo není definována.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není objektem.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není objektem.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není objektem Function.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není objektem Function.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není řetězcovým objektem (typ String).", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není řetězcovým objektem (typ String).", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není booleovským objektem (typ Boolean).", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není booleovským objektem (typ Boolean).", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není kalendářním objektem (typ Date).", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není kalendářním objektem (typ Date).", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není číselným objektem (typ Number).", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není číselným objektem (typ Number).", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není objektem VBArray.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není objektem VBArray.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není objektem jazyka JavaScript.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není objektem jazyka JavaScript.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není objektem Enumerator.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není objektem Enumerator.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Metoda 'this' není objektem RegExp.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Metoda 'this' není objektem RegExp.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Neplatný argument", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Neplatný argument", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument není objektem.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument není objektem.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument není objektem jazyka JavaScript.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument není objektem jazyka JavaScript.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument není objektem Function.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument není objektem Function.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument není objektem VBArray.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument není objektem VBArray.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument má hodnotu Null nebo není definován.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument má hodnotu Null nebo není definován.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument není objektem a nemá hodnotu Null.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument není objektem a nemá hodnotu Null.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument nemá platnou hodnotu vlastnosti length.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument nemá platnou hodnotu vlastnosti length.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Byl očekáván objekt typu Array nebo Arguments.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Byl očekáván objekt typu Array nebo Arguments.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný operand MyDynamicTestString: Byl očekáván objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný operand MyDynamicTestString: Byl očekáván objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný operand MyDynamicTestString: Byla očekávána funkce.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný operand MyDynamicTestString: Byla očekávána funkce.", function (err, _translation) {
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
describe("translating cs-CZ string: Neplatný popisovač pro vlastnost MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neplatný popisovač pro vlastnost MyDynamicTestString", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost MyDynamicTestString nelze definovat: Objekt nelze rozšířit.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost MyDynamicTestString nelze definovat: Objekt nelze rozšířit.", function (err, _translation) {
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
describe("translating cs-CZ string: Nekonfigurovatelnou vlastnost MyDynamicTestString nelze předefinovat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nekonfigurovatelnou vlastnost MyDynamicTestString nelze předefinovat.", function (err, _translation) {
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
describe("translating cs-CZ string: Nezapisovatelnou vlastnost MyDynamicTestString nelze změnit.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nezapisovatelnou vlastnost MyDynamicTestString nelze změnit.", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost MyDynamicTestString nelze změnit: Vlastnost length není zapisovatelná.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost MyDynamicTestString nelze změnit: Vlastnost length není zapisovatelná.", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost MyDynamicTestString nelze definovat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost MyDynamicTestString nelze definovat.", function (err, _translation) {
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
describe("translating cs-CZ string: V metodě DataView není zadán požadovaný argument MyDynamicTestString.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("V metodě DataView není zadán požadovaný argument MyDynamicTestString.", function (err, _translation) {
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
describe("translating cs-CZ string: Argument MyDynamicTestString konstruktoru objektu DataView je neplatný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument MyDynamicTestString konstruktoru objektu DataView je neplatný.", function (err, _translation) {
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
describe("translating cs-CZ string: Funkce MyDynamicTestString má neplatný podpis a nelze ji volat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funkce MyDynamicTestString má neplatný podpis a nelze ji volat.", function (err, _translation) {
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
describe("translating cs-CZ string: Vlastnost MyDynamicTestString má neplatný podpis a nelze k ní získat přístup.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vlastnost MyDynamicTestString má neplatný podpis a nelze k ní získat přístup.", function (err, _translation) {
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
describe("translating cs-CZ string: Třída modulu runtime MyDynamicTestString, která má jako výchozí rozhraní Windows.Foundation.IPropertyValue, není jako typ vstupního parametru podporována.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Třída modulu runtime MyDynamicTestString, která má jako výchozí rozhraní Windows.Foundation.IPropertyValue, není jako typ vstupního parametru podporována.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt s rozhraním Windows.Foundation.IPropertyValue, který má název třídy v modulu runtime MyDynamicTestString, není podporován jako výstupní parametr.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt s rozhraním Windows.Foundation.IPropertyValue, který má název třídy v modulu runtime MyDynamicTestString, není podporován jako výstupní parametr.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: „this“ není prozkoumatelný objekt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: „this“ není prozkoumatelný objekt.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument nelze převést na typ char.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument nelze převést na typ char.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Argument nelze převést na typ GUID.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Argument nelze převést na typ GUID.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Vrácenou hodnotu nelze převést na IInspectable.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Vrácenou hodnotu nelze převést na IInspectable.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt nelze převést na strukturu: U objektu chybí očekávaná vlastnost MyDynamicTestString.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt nelze převést na strukturu: U objektu chybí očekávaná vlastnost MyDynamicTestString.", function (err, _translation) {
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
describe("translating cs-CZ string: Typ MyDynamicTestString nebyl nalezen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Typ MyDynamicTestString nebyl nalezen.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Byla volána funkce s příliš málo argumenty.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Byla volána funkce s příliš málo argumenty.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Typ není konstruovatelný.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Typ není konstruovatelný.", function (err, _translation) {
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
describe("translating cs-CZ string: Hodnotu nelze převést na objekt PropertyValue: Objekt PropertyValue nepodporuje MyDynamicTestString.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hodnotu nelze převést na objekt PropertyValue: Objekt PropertyValue nepodporuje MyDynamicTestString.", function (err, _translation) {
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
describe("translating cs-CZ string: Hodnotu nelze převést na IInspectable: Rozhraní IInspectable nepodporuje MyDynamicTestString.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hodnotu nelze převést na IInspectable: Rozhraní IInspectable nepodporuje MyDynamicTestString.", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Zkontrolovatelný objekt „this“ je uvolněn a nelze k němu získat přístup.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Zkontrolovatelný objekt „this“ je uvolněn a nelze k němu získat přístup.", function (err, _translation) {
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
describe("translating cs-CZ string: Objekt this nemá očekávaný typ: MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekt this nemá očekávaný typ: MyDynamicTestString", function (err, _translation) {
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
describe("translating cs-CZ string: MyDynamicTestString: Při pokusu o získání informací o metadatech došlo k neočekávané chybě.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Při pokusu o získání informací o metadatech došlo k neočekávané chybě.", function (err, _translation) {
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
describe("translating cs-CZ string: Zadané datum není v kalendáři národního prostředí k dispozici.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zadané datum není v kalendáři národního prostředí k dispozici.", function (err, _translation) {
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
