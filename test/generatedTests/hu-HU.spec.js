var errorToEnglish = require("../../lib/errortoenglish");
describe("translating hu-HU string: Érvénytelen eljáráshívás vagy argumentum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen eljáráshívás vagy argumentum", function (err, _translation) {
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
describe("translating hu-HU string: Túlcsordulás", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Túlcsordulás", function (err, _translation) {
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
describe("translating hu-HU string: Kevés a memória.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kevés a memória.", function (err, _translation) {
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
describe("translating hu-HU string: Az index kívül esik a tartományon.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az index kívül esik a tartományon.", function (err, _translation) {
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
describe("translating hu-HU string: Ez a tömb rögzített vagy ideiglenesen zárolva van.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ez a tömb rögzített vagy ideiglenesen zárolva van.", function (err, _translation) {
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
describe("translating hu-HU string: Nullával való osztás", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nullával való osztás", function (err, _translation) {
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
describe("translating hu-HU string: Típuseltérés", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Típuseltérés", function (err, _translation) {
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
describe("translating hu-HU string: A karakterlánc túl hosszú.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A karakterlánc túl hosszú.", function (err, _translation) {
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
describe("translating hu-HU string: A megadott művelet nem hajtható végre.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A megadott művelet nem hajtható végre.", function (err, _translation) {
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
describe("translating hu-HU string: Nincs elég veremmemória.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nincs elég veremmemória.", function (err, _translation) {
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
describe("translating hu-HU string: Nem definiált Sub vagy Function", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem definiált Sub vagy Function", function (err, _translation) {
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
describe("translating hu-HU string: Hiba lépett fel a DLL betöltése közben.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hiba lépett fel a DLL betöltése közben.", function (err, _translation) {
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
describe("translating hu-HU string: Belső hiba", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Belső hiba", function (err, _translation) {
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
describe("translating hu-HU string: Helytelen fájlnév vagy -szám", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Helytelen fájlnév vagy -szám", function (err, _translation) {
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
describe("translating hu-HU string: A fájl nem található.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A fájl nem található.", function (err, _translation) {
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
describe("translating hu-HU string: Helytelen fájlmód", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Helytelen fájlmód", function (err, _translation) {
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
describe("translating hu-HU string: A fájl már meg van nyitva.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A fájl már meg van nyitva.", function (err, _translation) {
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
describe("translating hu-HU string: Eszköz I/O-hibája", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Eszköz I/O-hibája", function (err, _translation) {
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
describe("translating hu-HU string: A fájl már létezik.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A fájl már létezik.", function (err, _translation) {
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
describe("translating hu-HU string: A lemez megtelt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A lemez megtelt.", function (err, _translation) {
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
describe("translating hu-HU string: A bevitel túllépte a fájl végét.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A bevitel túllépte a fájl végét.", function (err, _translation) {
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
describe("translating hu-HU string: Túl sok fájl", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Túl sok fájl", function (err, _translation) {
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
describe("translating hu-HU string: Az eszköz nem áll készen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az eszköz nem áll készen.", function (err, _translation) {
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
describe("translating hu-HU string: Engedély megtagadva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Engedély megtagadva", function (err, _translation) {
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
describe("translating hu-HU string: A lemez nem áll készen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A lemez nem áll készen.", function (err, _translation) {
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
describe("translating hu-HU string: Az átnevezés nem vonatkozhat a meghajtó betűjelére.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az átnevezés nem vonatkozhat a meghajtó betűjelére.", function (err, _translation) {
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
describe("translating hu-HU string: A fájlt vagy könyvtárat nem lehet elérni.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A fájlt vagy könyvtárat nem lehet elérni.", function (err, _translation) {
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
describe("translating hu-HU string: Az elérési út nem található.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az elérési út nem található.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektumváltozó vagy a With blokk változója nincs beállítva.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektumváltozó vagy a With blokk változója nincs beállítva.", function (err, _translation) {
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
describe("translating hu-HU string: A For ciklus nincs inicializálva.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A For ciklus nincs inicializálva.", function (err, _translation) {
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
describe("translating hu-HU string: A Null szabálytalan használata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A Null szabálytalan használata", function (err, _translation) {
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
describe("translating hu-HU string: A szükséges ideiglenes fájl nem hozható létre.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A szükséges ideiglenes fájl nem hozható létre.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektumot kötelező megadni.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektumot kötelező megadni.", function (err, _translation) {
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
describe("translating hu-HU string: Az automatizálható szolgáltató nem tudja létrehozni az objektumot.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az automatizálható szolgáltató nem tudja létrehozni az objektumot.", function (err, _translation) {
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
describe("translating hu-HU string: Az osztály nem automatizálható.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az osztály nem automatizálható.", function (err, _translation) {
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
describe("translating hu-HU string: A fájlnév vagy objektumnév nem található az automatizálási művelet közben.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A fájlnév vagy objektumnév nem található az automatizálási művelet közben.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem támogatja ezt a tulajdonságot vagy metódust.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem támogatja ezt a tulajdonságot vagy metódust.", function (err, _translation) {
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
describe("translating hu-HU string: Automatizálási hiba", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Automatizálási hiba", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem támogatja a műveletet.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem támogatja a műveletet.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem támogatja az elnevezett argumentumokat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem támogatja az elnevezett argumentumokat.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem támogatja az aktuális területi beállításokat.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem támogatja az aktuális területi beállításokat.", function (err, _translation) {
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
describe("translating hu-HU string: Az elnevezett argumentum nem található.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az elnevezett argumentum nem található.", function (err, _translation) {
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
describe("translating hu-HU string: Az argumentumot kötelező megadni.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az argumentumot kötelező megadni.", function (err, _translation) {
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
describe("translating hu-HU string: Nem megfelelő számú argumentum, vagy érvénytelen tulajdonság-hozzárendelés.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem megfelelő számú argumentum, vagy érvénytelen tulajdonság-hozzárendelés.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem gyűjtemény.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem gyűjtemény.", function (err, _translation) {
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
describe("translating hu-HU string: A megadott DLL nem található.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A megadott DLL nem található.", function (err, _translation) {
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
describe("translating hu-HU string: A JavaScript nem támogatja a változó által használt automatizálási típust", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A JavaScript nem támogatja a változó által használt automatizálási típust", function (err, _translation) {
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
describe("translating hu-HU string: A távoli kiszolgáló számítógép nem létezik vagy nem érhető el.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A távoli kiszolgáló számítógép nem létezik vagy nem érhető el.", function (err, _translation) {
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
describe("translating hu-HU string: Nem rendelhető változóhoz.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem rendelhető változóhoz.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem használható biztonságosan szkriptben.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem használható biztonságosan szkriptben.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem inicializálható biztonságosan.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem inicializálható biztonságosan.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektumot nem lehet biztonságosan létrehozni.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektumot nem lehet biztonságosan létrehozni.", function (err, _translation) {
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
describe("translating hu-HU string: Kivétel történt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kivétel történt.", function (err, _translation) {
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
describe("translating hu-HU string: Kevés a memória.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kevés a memória.", function (err, _translation) {
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
describe("translating hu-HU string: Szintaktikai hiba", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Szintaktikai hiba", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem ':'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem ';'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem '('", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem ')'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem ']'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem '{'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem '}'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem azonosító", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem azonosító", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem '='", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem '/'", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen szám", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen szám", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen karakter", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen karakter", function (err, _translation) {
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
describe("translating hu-HU string: Lezáratlan karakterlánckonstans", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lezáratlan karakterlánckonstans", function (err, _translation) {
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
describe("translating hu-HU string: Lezáratlan megjegyzés", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lezáratlan megjegyzés", function (err, _translation) {
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
describe("translating hu-HU string: Függvényen kívüli 'return' utasítás", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Függvényen kívüli 'return' utasítás", function (err, _translation) {
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
describe("translating hu-HU string: A 'break' utasítás nem szerepelhet cikluson kívül.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A 'break' utasítás nem szerepelhet cikluson kívül.", function (err, _translation) {
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
describe("translating hu-HU string: A 'continue' utasítás nem szerepelhet cikluson kívül.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A 'continue' utasítás nem szerepelhet cikluson kívül.", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem hexadecimális szám", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem hexadecimális szám", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem 'while'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem 'while'", function (err, _translation) {
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
describe("translating hu-HU string: A címke újra lett definiálva.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A címke újra lett definiálva.", function (err, _translation) {
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
describe("translating hu-HU string: A címke nem található.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A címke nem található.", function (err, _translation) {
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
describe("translating hu-HU string: A 'default' utasítás csak egyszer szerepelhet egy 'switch' blokkon belül.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A 'default' utasítás csak egyszer szerepelhet egy 'switch' blokkon belül.", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem azonosító, karakterlánc vagy szám", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem azonosító, karakterlánc vagy szám", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem '@end'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem '@end'", function (err, _translation) {
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
describe("translating hu-HU string: A feltételes fordítás ki van kapcsolva.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A feltételes fordítás ki van kapcsolva.", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem konstans", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem konstans", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem '@'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem 'catch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem 'catch'", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem 'var'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem 'var'", function (err, _translation) {
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
describe("translating hu-HU string: A \"throw\" utasítás után a forrás ugyanazon sorában kifejezésnek kell szerepelnie", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A \"throw\" utasítás után a forrás ugyanazon sorában kifejezésnek kell szerepelnie", function (err, _translation) {
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
describe("translating hu-HU string: A \"with\" utasítás nem engedélyezett szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A \"with\" utasítás nem engedélyezett szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: Az ismétlődő formális paraméternevek nem engedélyezettek szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az ismétlődő formális paraméternevek nem engedélyezettek szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: Az oktális numerikus konstansok és escape-karakterek nem engedélyezettek szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az oktális numerikus konstansok és escape-karakterek nem engedélyezettek szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: Az eval használata érvénytelen szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az eval használata érvénytelen szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: Az 'arguments' használata érvénytelen szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az 'arguments' használata érvénytelen szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: A delete függvény nem hívható meg kifejezésben szigorú üzemmód esetén", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A delete függvény nem hívható meg kifejezésben szigorú üzemmód esetén", function (err, _translation) {
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
describe("translating hu-HU string: Egy tulajdonság nem definiálható többször szigorú üzemmód esetén", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Egy tulajdonság nem definiálható többször szigorú üzemmód esetén", function (err, _translation) {
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
describe("translating hu-HU string: Szigorú üzemmódban a függvénydeklarációk nem ágyazhatók be egy utasításba vagy blokkba. Csak a legfelső szinten vagy közvetlenül a függvénytörzsben jelenhetnek meg.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Szigorú üzemmódban a függvénydeklarációk nem ágyazhatók be egy utasításba vagy blokkba. Csak a legfelső szinten vagy közvetlenül a függvénytörzsben jelenhetnek meg.", function (err, _translation) {
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
describe("translating hu-HU string: Kulcsszó használata azonosítóként érvénytelen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kulcsszó használata azonosítóként érvénytelen", function (err, _translation) {
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
describe("translating hu-HU string: Leendő foglalt kulcsszó használata azonosítóként érvénytelen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Leendő foglalt kulcsszó használata azonosítóként érvénytelen", function (err, _translation) {
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
describe("translating hu-HU string: Leendő foglalt kulcsszó használata azonosítóként érvénytelen. Az azonosító neve szigorú üzemmódban foglalt.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Leendő foglalt kulcsszó használata azonosítóként érvénytelen. Az azonosító neve szigorú üzemmódban foglalt.", function (err, _translation) {
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
describe("translating hu-HU string: A beállító függvényeknek egy argumentumuk lehet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A beállító függvényeknek egy argumentumuk lehet", function (err, _translation) {
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
describe("translating hu-HU string: JavaScript - fordítási hiba", function () {
    var translation;
    before(function (done) {
        errorToEnglish("JavaScript - fordítási hiba", function (err, _translation) {
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
describe("translating hu-HU string: JavaScript - futásidejű hiba", function () {
    var translation;
    before(function (done) {
        errorToEnglish("JavaScript - futásidejű hiba", function (err, _translation) {
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
describe("translating hu-HU string: Ismeretlen futásidejű hiba", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ismeretlen futásidejű hiba", function (err, _translation) {
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
describe("translating hu-HU string: Nem rendelhető a 'this' objektumhoz.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem rendelhető a 'this' objektumhoz.", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem szám", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem szám", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem függvény", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem függvény", function (err, _translation) {
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
describe("translating hu-HU string: Nem rendelhető függvényeredményhez.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem rendelhető függvényeredményhez.", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem indexelhető.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem indexelhető.", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem karakterlánc", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem karakterlánc", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem dátumobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem dátumobjektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen a hozzárendelés bal oldala", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen a hozzárendelés bal oldala", function (err, _translation) {
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
describe("translating hu-HU string: Nem definiált azonosító", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem definiált azonosító", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem logikai változó", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem logikai változó", function (err, _translation) {
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
describe("translating hu-HU string: Felszabadított szkriptben nem hajtható végre kód.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Felszabadított szkriptben nem hajtható végre kód.", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektumtag", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektumtag", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem VBArray", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem JavaScript-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem JavaScript-objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem enumerátorobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem enumerátorobjektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem reguláris kifejezés", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem reguláris kifejezés", function (err, _translation) {
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
describe("translating hu-HU string: Szintaktikai hiba a reguláris kifejezésben", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Szintaktikai hiba a reguláris kifejezésben", function (err, _translation) {
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
describe("translating hu-HU string: Váratlan ismétlődésleíró", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Váratlan ismétlődésleíró", function (err, _translation) {
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
describe("translating hu-HU string: Hiányzó ']' a reguláris kifejezésben", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hiányzó ']' a reguláris kifejezésben", function (err, _translation) {
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
describe("translating hu-HU string: Hiányzó ')' a reguláris kifejezésben", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Hiányzó ')' a reguláris kifejezésben", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen tartomány a karakterkészletben", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen tartomány a karakterkészletben", function (err, _translation) {
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
describe("translating hu-HU string: Kezeletlen kivétel.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kezeletlen kivétel.", function (err, _translation) {
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
describe("translating hu-HU string: A függvénynek nincs érvényes prototípusa.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A függvénynek nincs érvényes prototípusa.", function (err, _translation) {
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
describe("translating hu-HU string: A kódolandó URI érvénytelen karaktert tartalmaz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A kódolandó URI érvénytelen karaktert tartalmaz", function (err, _translation) {
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
describe("translating hu-HU string: A dekódolandó URI kódolása érvénytelen.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A dekódolandó URI kódolása érvénytelen.", function (err, _translation) {
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
describe("translating hu-HU string: A tizedesjegyek száma nincs a megengedett tartományban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A tizedesjegyek száma nincs a megengedett tartományban", function (err, _translation) {
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
describe("translating hu-HU string: A tizedespontosság nincs a megengedett tartományban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A tizedespontosság nincs a megengedett tartományban", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem tömb vagy argumentumobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem tömb vagy argumentumobjektum", function (err, _translation) {
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
describe("translating hu-HU string: A tömb hossza csak véges pozitív egész szám lehet.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A tömb hossza csak véges pozitív egész szám lehet.", function (err, _translation) {
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
describe("translating hu-HU string: A tömb hossza csak véges pozitív számként adható meg.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A tömb hossza csak véges pozitív számként adható meg.", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem tömbobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem tömbobjektum", function (err, _translation) {
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
describe("translating hu-HU string: A körkörös hivatkozás érték argumentumnál nem támogatott", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A körkörös hivatkozás érték argumentumnál nem támogatott", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen lecserélő argumentum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen lecserélő argumentum", function (err, _translation) {
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
describe("translating hu-HU string: Az argumentumlista túl hosszú, ezért nem alkalmazható", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az argumentumlista túl hosszú, ezért nem alkalmazható", function (err, _translation) {
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
describe("translating hu-HU string: Újra meg lett határozva a const tulajdonság", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Újra meg lett határozva a const tulajdonság", function (err, _translation) {
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
describe("translating hu-HU string: Az objektumtag nem konfigurálható", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektumtag nem konfigurálható", function (err, _translation) {
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
describe("translating hu-HU string: A változó nincs meghatározva szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A változó nincs meghatározva szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: A függvények vagy argumentumobjektumok caller tulajdonságának lekérdezése nem engedélyezett szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A függvények vagy argumentumobjektumok caller tulajdonságának lekérdezése nem engedélyezett szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: Az argumentumobjektumok callee tulajdonságának lekérdezése nem engedélyezett szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az argumentumobjektumok callee tulajdonságának lekérdezése nem engedélyezett szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: A csak olvasható tulajdonságok értékadása nem engedélyezett szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A csak olvasható tulajdonságok értékadása nem engedélyezett szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: Nem hozható létre tulajdonság egy nem kiterjeszthető objektum esetén", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem hozható létre tulajdonság egy nem kiterjeszthető objektum esetén", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem függvény", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem függvény", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem függvény", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem függvény", function (err, _translation) {
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
describe("translating hu-HU string: A tulajdonságnak nem lehet egyszerre értéke és elérője is", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A tulajdonságnak nem lehet egyszerre értéke és elérője is", function (err, _translation) {
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
describe("translating hu-HU string: 'this' értéke null vagy nincs meghatározva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' értéke null vagy nincs meghatározva", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem függvény", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem függvény", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem karakterlánc", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem karakterlánc", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem logikai változó", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem logikai változó", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem dátum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem dátum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem szám", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem szám", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem VBArray", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem JavaScript-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem JavaScript-objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem enumerátorobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem enumerátorobjektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem reguláris kifejezés objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem reguláris kifejezés objektum", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen függvényargumentum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen függvényargumentum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem JavaScript-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem JavaScript-objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem függvény", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem függvény", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem VBArray", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen length tulajdonság", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen length tulajdonság", function (err, _translation) {
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
describe("translating hu-HU string: A várt elem tömb vagy argumentumobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A várt elem tömb vagy argumentumobjektum", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen operandus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen operandus", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen operandus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen operandus", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen a tulajdonság leírója", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen a tulajdonság leírója", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet meghatározni a tulajdonságot: az objektum nem kiterjeszthető", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet meghatározni a tulajdonságot: az objektum nem kiterjeszthető", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet újra meghatározni a nem konfigurálható tulajdonságot", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet újra meghatározni a nem konfigurálható tulajdonságot", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet módosítani a nem írható tulajdonságot", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet módosítani a nem írható tulajdonságot", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet módosítani a tulajdonságot: a \"length\" nem írható", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet módosítani a tulajdonságot: a \"length\" nem írható", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet definiálni a tulajdonságot", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet definiálni a tulajdonságot", function (err, _translation) {
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
describe("translating hu-HU string: A típusos tömb konstruktorargumentuma érvénytelen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A típusos tömb konstruktorargumentuma érvénytelen", function (err, _translation) {
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
describe("translating hu-HU string: A 'this' nem típusos tömb objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A 'this' nem típusos tömb objektum", function (err, _translation) {
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
describe("translating hu-HU string: A program a típusos tömb létrehozásakor érvénytelen eltolást vagy hosszt talált", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A program a típusos tömb létrehozásakor érvénytelen eltolást vagy hosszt talált", function (err, _translation) {
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
describe("translating hu-HU string: Egy típusos tömb tömbrészképző metódusa érvénytelen kezdő vagy befejező értéket kapott", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Egy típusos tömb tömbrészképző metódusa érvénytelen kezdő vagy befejező értéket kapott", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen a forrás a típusostömb-készletben", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen a forrás a típusostömb-készletben", function (err, _translation) {
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
describe("translating hu-HU string: A 'this' nem DataView objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A 'this' nem DataView objektum", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen argumentumok a DataView objektumban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen argumentumok a DataView objektumban", function (err, _translation) {
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
describe("translating hu-HU string: A DataView műveletei túlnyúlnak a megadott pufferhosszúságon", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A DataView műveletei túlnyúlnak a megadott pufferhosszúságon", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen argumentumok a DataView objektumban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen argumentumok a DataView objektumban", function (err, _translation) {
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
describe("translating hu-HU string: érvénytelen függvényaláírás", function () {
    var translation;
    before(function (done) {
        errorToEnglish("érvénytelen függvényaláírás", function (err, _translation) {
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
describe("translating hu-HU string: érvénytelen tulajdonság-aláírás", function () {
    var translation;
    before(function (done) {
        errorToEnglish("érvénytelen tulajdonság-aláírás", function (err, _translation) {
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
describe("translating hu-HU string: érvénytelen bemenetiparaméter-típus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("érvénytelen bemenetiparaméter-típus", function (err, _translation) {
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
describe("translating hu-HU string: érvénytelen kimenetiparaméter-típus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("érvénytelen kimenetiparaméter-típus", function (err, _translation) {
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
describe("translating hu-HU string: A függvények arguments tulajdonságának lekérdezése nem engedélyezett szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A függvények arguments tulajdonságának lekérdezése nem engedélyezett szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: A program vizsgálható objektumot várt", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A program vizsgálható objektumot várt", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az argumentum 'char' típusúvá konvertálása", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az argumentum 'char' típusúvá konvertálása", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az argumentum 'GUID' típusúvá konvertálása", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az argumentum 'GUID' típusúvá konvertálása", function (err, _translation) {
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
describe("translating hu-HU string: A program IInspectable elemet várt", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A program IInspectable elemet várt", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az objektum struktúrává konvertálása: az objektumból hiányzik egy várt tulajdonság", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az objektum struktúrává konvertálása: az objektumból hiányzik egy várt tulajdonság", function (err, _translation) {
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
describe("translating hu-HU string: Ismeretlen típus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ismeretlen típus", function (err, _translation) {
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
describe("translating hu-HU string: A függvény túl kevés argumentummal lett meghívva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A függvény túl kevés argumentummal lett meghívva", function (err, _translation) {
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
describe("translating hu-HU string: Ez nem példányosítható típus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ez nem példányosítható típus", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az érték PropertyValue típusúvá konvertálása: a típust a PropertyValue osztály nem támogatja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az érték PropertyValue típusúvá konvertálása: a típust a PropertyValue osztály nem támogatja", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az érték IInspectable típusúvá konvertálása: a típust az IInspectable osztály nem támogatja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az érték IInspectable típusúvá konvertálása: a típust az IInspectable osztály nem támogatja", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült a dátum Windows.Foundation.DateTime típusúvá konvertálása: az érték kívül esik az érvényes tartományon", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült a dátum Windows.Foundation.DateTime típusúvá konvertálása: az érték kívül esik az érvényes tartományon", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az érték Windows.Foundation.TimeSpan típusúvá konvertálása: az érték kívül esik az érvényes tartományon", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az érték Windows.Foundation.TimeSpan típusúvá konvertálása: az érték kívül esik az érvényes tartományon", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen hozzáférés a már felszabadított vizsgálható objektumhoz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen hozzáférés a már felszabadított vizsgálható objektumhoz", function (err, _translation) {
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
describe("translating hu-HU string: Nem szabadítható fel a már felszabadított vizsgálható objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem szabadítható fel a már felszabadított vizsgálható objektum", function (err, _translation) {
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
describe("translating hu-HU string: A 'this' nem várt típus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A 'this' nem várt típus", function (err, _translation) {
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
describe("translating hu-HU string: Szabálytalan a tömb megadott hossza és mérete", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Szabálytalan a tömb megadott hossza és mérete", function (err, _translation) {
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
describe("translating hu-HU string: Váratlan hiba történt a metaadat-információ beszerzése során", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Váratlan hiba történt a metaadat-információ beszerzése során", function (err, _translation) {
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
describe("translating hu-HU string: Az állapot \"error\", de a getResults metódus nem adott vissza hibát", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az állapot \"error\", de a getResults metódus nem adott vissza hibát", function (err, _translation) {
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
describe("translating hu-HU string: A program hiányzó vagy érvénytelen állapotparamétert adott át a befejezést kezelő leírónak", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A program hiányzó vagy érvénytelen állapotparamétert adott át a befejezést kezelő leírónak", function (err, _translation) {
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
describe("translating hu-HU string: A program hiányzó vagy érvénytelen, küldőre vonatkozó paramétert adott át a befejezést kezelő leírónak", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A program hiányzó vagy érvénytelen, küldőre vonatkozó paramétert adott át a befejezést kezelő leírónak", function (err, _translation) {
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
describe("translating hu-HU string: Végtelen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Végtelen", function (err, _translation) {
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
describe("translating hu-HU string: -Végtelen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("-Végtelen", function (err, _translation) {
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
describe("translating hu-HU string: Az objektum nem támogatja a következő tulajdonságot vagy metódust: 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Az objektum nem támogatja a következő tulajdonságot vagy metódust: 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating hu-HU string: A(z) 'MyDynamicTestString' függvénynek kötelező argumentumot adni", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A(z) 'MyDynamicTestString' függvénynek kötelező argumentumot adni", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem szám", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem szám", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem függvény", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem függvény", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem indexelhető objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem indexelhető objektum", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem karakterlánc", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem karakterlánc", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem dátumobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem dátumobjektum", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' értéke NULL, vagy nem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' értéke NULL, vagy nem objektum", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet hozzárendelni a következőhöz: 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet hozzárendelni a következőhöz: 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nincs definiálva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nincs definiálva", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem logikai változó", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem logikai változó", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem törölhető", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem törölhető", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem VBArray", function (err, _translation) {
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
describe("translating hu-HU string: A(z) 'MyDynamicTestString' nem JavaScript-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A(z) 'MyDynamicTestString' nem JavaScript-objektum", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem enumerátorobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem enumerátorobjektum", function (err, _translation) {
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
describe("translating hu-HU string: 'MyDynamicTestString' nem reguláris kifejezés", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' nem reguláris kifejezés", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString nem tömb vagy argumentumobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString nem tömb vagy argumentumobjektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString nem tömbobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString nem tömbobjektum", function (err, _translation) {
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
describe("translating hu-HU string: A tulajdonságleíró 'MyDynamicTestString' attribútuma nem állítható be \"True\" értékre ehhez az objektumhoz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A tulajdonságleíró 'MyDynamicTestString' attribútuma nem állítható be \"True\" értékre ehhez az objektumhoz", function (err, _translation) {
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
describe("translating hu-HU string: A tulajdonságleíró 'MyDynamicTestString' attribútuma nem állítható be \"False\" értékre ehhez az objektumhoz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A tulajdonságleíró 'MyDynamicTestString' attribútuma nem állítható be \"False\" értékre ehhez az objektumhoz", function (err, _translation) {
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
describe("translating hu-HU string: Újra meg lett határozva a(z) 'MyDynamicTestString' konstans", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Újra meg lett határozva a(z) 'MyDynamicTestString' konstans", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString esetében nem hívható delete függvény szigorú üzemmódban", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString esetében nem hívható delete függvény szigorú üzemmódban", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet beállítani a(z) MyDynamicTestString tulajdonságot, amelyhez nem definiált vagy null értékű hivatkozás tartozik", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet beállítani a(z) MyDynamicTestString tulajdonságot, amelyhez nem definiált vagy null értékű hivatkozás tartozik", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet lekérni a(z) MyDynamicTestString tulajdonságot, amelyhez nem definiált vagy null értékű hivatkozás tartozik", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet lekérni a(z) MyDynamicTestString tulajdonságot, amelyhez nem definiált vagy null értékű hivatkozás tartozik", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet törölni a(z) MyDynamicTestString tulajdonságot, amelyhez nem definiált vagy null értékű hivatkozás tartozik", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet törölni a(z) MyDynamicTestString tulajdonságot, amelyhez nem definiált vagy null értékű hivatkozás tartozik", function (err, _translation) {
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
describe("translating hu-HU string: Nem érhető el a(z) 'MyDynamicTestString' tulajdonság: VarDate típus esetén nem használható felhasználó által meghatározott tulajdonság", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem érhető el a(z) 'MyDynamicTestString' tulajdonság: VarDate típus esetén nem használható felhasználó által meghatározott tulajdonság", function (err, _translation) {
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
describe("translating hu-HU string: A(z) 'MyDynamicTestString' tulajdonság értéke nem függvényobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A(z) 'MyDynamicTestString' tulajdonság értéke nem függvényobjektum", function (err, _translation) {
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
describe("translating hu-HU string: A(z) 'MyDynamicTestString' tulajdonság értéke null vagy nincs meghatározva, nem pedig függvényobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A(z) 'MyDynamicTestString' tulajdonság értéke null vagy nincs meghatározva, nem pedig függvényobjektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' null értékű vagy nincs meghatározva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' null értékű vagy nincs meghatározva", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem függvényobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem függvényobjektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem karakterlánc-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem karakterlánc-objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem logikai objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem logikai objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem dátumobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem dátumobjektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem numerikus objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem numerikus objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem VBArray-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem VBArray-objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem JavaScript-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem JavaScript-objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem enumerátorobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem enumerátorobjektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: 'this' nem reguláris kifejezés objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' nem reguláris kifejezés objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: érvénytelen argumentum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: érvénytelen argumentum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: az argumentum nem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: az argumentum nem objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: az argumentum nem JavaScript-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: az argumentum nem JavaScript-objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: az argumentum nem függvényobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: az argumentum nem függvényobjektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: az argumentum nem VBArray-objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: az argumentum nem VBArray-objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: az argumentum null értékű vagy nincs meghatározva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: az argumentum null értékű vagy nincs meghatározva", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: az argumentum nem objektum és nem null értékű", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: az argumentum nem objektum és nem null értékű", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: az argumentumnak nincs érvényes \"length\" tulajdonsága", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: az argumentumnak nincs érvényes \"length\" tulajdonsága", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: a várt elem tömb vagy argumentumobjektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: a várt elem tömb vagy argumentumobjektum", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen a(z) 'MyDynamicTestString' operandusa: a várt elem objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen a(z) 'MyDynamicTestString' operandusa: a várt elem objektum", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen a(z) 'MyDynamicTestString' operandusa: a várt elem függvény", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen a(z) 'MyDynamicTestString' operandusa: a várt elem függvény", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen a(z) 'MyDynamicTestString' tulajdonság leírója", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen a(z) 'MyDynamicTestString' tulajdonság leírója", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet meghatározni a(z) 'MyDynamicTestString' tulajdonságot: az objektum nem kiterjeszthető", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet meghatározni a(z) 'MyDynamicTestString' tulajdonságot: az objektum nem kiterjeszthető", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet újra meghatározni a(z) 'MyDynamicTestString' nem konfigurálható tulajdonságot", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet újra meghatározni a(z) 'MyDynamicTestString' nem konfigurálható tulajdonságot", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet módosítani a(z) 'MyDynamicTestString' nem írható tulajdonságot", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet módosítani a(z) 'MyDynamicTestString' nem írható tulajdonságot", function (err, _translation) {
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
describe("translating hu-HU string: Nem lehet módosítani a(z) 'MyDynamicTestString' tulajdonságot: a \"length\" nem írható", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem lehet módosítani a(z) 'MyDynamicTestString' tulajdonságot: a \"length\" nem írható", function (err, _translation) {
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
describe("translating hu-HU string: Nem definiálható a(z) 'MyDynamicTestString' tulajdonság", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem definiálható a(z) 'MyDynamicTestString' tulajdonság", function (err, _translation) {
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
describe("translating hu-HU string: Nincs megadva a DataView metódus kötelező MyDynamicTestString argumentuma", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nincs megadva a DataView metódus kötelező MyDynamicTestString argumentuma", function (err, _translation) {
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
describe("translating hu-HU string: Érvénytelen a DataView MyDynamicTestString konstruktorargumentuma", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Érvénytelen a DataView MyDynamicTestString konstruktorargumentuma", function (err, _translation) {
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
describe("translating hu-HU string: A(z) MyDynamicTestString függvény aláírása érvénytelen, és a függvény nem hívható", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A(z) MyDynamicTestString függvény aláírása érvénytelen, és a függvény nem hívható", function (err, _translation) {
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
describe("translating hu-HU string: A(z) MyDynamicTestString tulajdonság aláírása érvénytelen, és a tulajdonság nem kérdezhető le", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A(z) MyDynamicTestString tulajdonság aláírása érvénytelen, és a tulajdonság nem kérdezhető le", function (err, _translation) {
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
describe("translating hu-HU string: A Windows.Foundation.IPropertyValue alapértelmezett felületű MyDynamicTestString futásidejű osztályt a program nem támogatja bemenetiparaméter-típusként", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A Windows.Foundation.IPropertyValue alapértelmezett felületű MyDynamicTestString futásidejű osztályt a program nem támogatja bemenetiparaméter-típusként", function (err, _translation) {
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
describe("translating hu-HU string: A(z) MyDynamicTestString futásidejűosztály-névvel rendelkező Windows.Foundation.IPropertyValue felületű objektumot a program nem támogatja kimeneti paraméterként", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A(z) MyDynamicTestString futásidejűosztály-névvel rendelkező Windows.Foundation.IPropertyValue felületű objektumot a program nem támogatja kimeneti paraméterként", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: a 'this' nem vizsgálható objektum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: a 'this' nem vizsgálható objektum", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: nem sikerült az argumentum 'char' típusúvá konvertálása", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: nem sikerült az argumentum 'char' típusúvá konvertálása", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: nem sikerült az argumentum 'GUID' típusúvá konvertálása", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: nem sikerült az argumentum 'GUID' típusúvá konvertálása", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: nem sikerült a visszatérési érték IInspectable típusúvá konvertálása", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: nem sikerült a visszatérési érték IInspectable típusúvá konvertálása", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az objektum struktúrává konvertálása: az objektumból hiányzik a következő várt tulajdonság: 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az objektum struktúrává konvertálása: az objektumból hiányzik a következő várt tulajdonság: 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating hu-HU string: Nem található a(z) 'MyDynamicTestString' típus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem található a(z) 'MyDynamicTestString' típus", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: a függvény túl kevés argumentummal lett meghívva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: a függvény túl kevés argumentummal lett meghívva", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: ez nem példányosítható típus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: ez nem példányosítható típus", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az érték PropertyValue típusúvá konvertálása: a(z) MyDynamicTestString típust a PropertyValue osztály nem támogatja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az érték PropertyValue típusúvá konvertálása: a(z) MyDynamicTestString típust a PropertyValue osztály nem támogatja", function (err, _translation) {
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
describe("translating hu-HU string: Nem sikerült az érték IInspectable típusúvá konvertálása: a(z) MyDynamicTestString típust az IInspectable osztály nem támogatja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nem sikerült az érték IInspectable típusúvá konvertálása: a(z) MyDynamicTestString típust az IInspectable osztály nem támogatja", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: a 'this' vizsgálható objektum fel van szabadítva és nem érhető el", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: a 'this' vizsgálható objektum fel van szabadítva és nem érhető el", function (err, _translation) {
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
describe("translating hu-HU string: A 'this' nem várt típus: MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A 'this' nem várt típus: MyDynamicTestString", function (err, _translation) {
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
describe("translating hu-HU string: MyDynamicTestString: váratlan hiba történt a metaadat-információ beszerzése során", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: váratlan hiba történt a metaadat-információ beszerzése során", function (err, _translation) {
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
describe("translating hu-HU string: A megadott dátum nem található az aktuális nyelv naptárában", function () {
    var translation;
    before(function (done) {
        errorToEnglish("A megadott dátum nem található az aktuális nyelv naptárában", function (err, _translation) {
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
