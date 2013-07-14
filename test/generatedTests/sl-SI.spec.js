var errorToEnglish = require("../../lib/errortoenglish");
describe("translating sl-SI string: Neveljaven argument ali klic procedure", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven argument ali klic procedure", function (err, _translation) {
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
describe("translating sl-SI string: Prekoračitev obsega", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prekoračitev obsega", function (err, _translation) {
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
describe("translating sl-SI string: Zmanjkalo je pomnilnika", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zmanjkalo je pomnilnika", function (err, _translation) {
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
describe("translating sl-SI string: Indeks je zunaj obsega", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Indeks je zunaj obsega", function (err, _translation) {
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
describe("translating sl-SI string: To polje je nespremenljivo ali pa je začasno zaklenjeno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("To polje je nespremenljivo ali pa je začasno zaklenjeno", function (err, _translation) {
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
describe("translating sl-SI string: Deljenje z nič", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Deljenje z nič", function (err, _translation) {
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
describe("translating sl-SI string: Neujemanje tipov", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neujemanje tipov", function (err, _translation) {
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
describe("translating sl-SI string: Zmanjkalo je prostora za nize", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zmanjkalo je prostora za nize", function (err, _translation) {
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
describe("translating sl-SI string: Zahtevane operacije ni mogoče opraviti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zahtevane operacije ni mogoče opraviti", function (err, _translation) {
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
describe("translating sl-SI string: Zmanjkalo je prostora za sklad", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zmanjkalo je prostora za sklad", function (err, _translation) {
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
describe("translating sl-SI string: Podprogram ali funkcija ni definirana", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Podprogram ali funkcija ni definirana", function (err, _translation) {
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
describe("translating sl-SI string: Napaka med nalaganjem DLL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napaka med nalaganjem DLL", function (err, _translation) {
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
describe("translating sl-SI string: Notranja napaka", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Notranja napaka", function (err, _translation) {
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
describe("translating sl-SI string: Napačno ime datoteke ali število", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napačno ime datoteke ali število", function (err, _translation) {
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
describe("translating sl-SI string: Datoteke ni mogoče najti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Datoteke ni mogoče najti", function (err, _translation) {
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
describe("translating sl-SI string: Napačen datotečni način", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napačen datotečni način", function (err, _translation) {
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
describe("translating sl-SI string: Datoteka je že odprta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Datoteka je že odprta", function (err, _translation) {
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
describe("translating sl-SI string: Vhodno/izhodna napaka naprave", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vhodno/izhodna napaka naprave", function (err, _translation) {
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
describe("translating sl-SI string: Datoteka že obstaja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Datoteka že obstaja", function (err, _translation) {
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
describe("translating sl-SI string: Disk je poln", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Disk je poln", function (err, _translation) {
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
describe("translating sl-SI string: Vnos prek konca datoteke", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vnos prek konca datoteke", function (err, _translation) {
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
describe("translating sl-SI string: Preveč datotek", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Preveč datotek", function (err, _translation) {
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
describe("translating sl-SI string: Naprava ni na voljo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Naprava ni na voljo", function (err, _translation) {
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
describe("translating sl-SI string: Dostop zavrnjen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dostop zavrnjen", function (err, _translation) {
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
describe("translating sl-SI string: Disk ni pripravljen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Disk ni pripravljen", function (err, _translation) {
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
describe("translating sl-SI string: Preimenovanje pogona ni mogoče", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Preimenovanje pogona ni mogoče", function (err, _translation) {
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
describe("translating sl-SI string: Napaka pri dostopu do poti/datoteke", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napaka pri dostopu do poti/datoteke", function (err, _translation) {
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
describe("translating sl-SI string: Poti ni mogoče najti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Poti ni mogoče najti", function (err, _translation) {
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
describe("translating sl-SI string: Spremenljivka predmeta ali bloka »With« ne obstaja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Spremenljivka predmeta ali bloka »With« ne obstaja", function (err, _translation) {
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
describe("translating sl-SI string: Zanka »For« ni inicializirana", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zanka »For« ni inicializirana", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavna uporaba izraza »Null«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavna uporaba izraza »Null«", function (err, _translation) {
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
describe("translating sl-SI string: Potrebne začasne datoteke ni mogoče ustvariti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Potrebne začasne datoteke ni mogoče ustvariti", function (err, _translation) {
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
describe("translating sl-SI string: Zahtevan je predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zahtevan je predmet", function (err, _translation) {
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
describe("translating sl-SI string: Avtomatizacijski strežnik ne more ustvariti predmeta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Avtomatizacijski strežnik ne more ustvariti predmeta", function (err, _translation) {
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
describe("translating sl-SI string: Razred ne podpira avtomatizacije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Razred ne podpira avtomatizacije", function (err, _translation) {
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
describe("translating sl-SI string: Med izvajanjem avtomatizacije ni bilo mogoče najti imena datoteke ali razreda", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Med izvajanjem avtomatizacije ni bilo mogoče najti imena datoteke ali razreda", function (err, _translation) {
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
describe("translating sl-SI string: Predmet ne podpira te lastnosti ali metode", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet ne podpira te lastnosti ali metode", function (err, _translation) {
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
describe("translating sl-SI string: Napaka avtomatizacije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napaka avtomatizacije", function (err, _translation) {
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
describe("translating sl-SI string: Predmet ne podpira tega dejanja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet ne podpira tega dejanja", function (err, _translation) {
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
describe("translating sl-SI string: Predmet ne podpira imenovanih argumentov", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet ne podpira imenovanih argumentov", function (err, _translation) {
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
describe("translating sl-SI string: Predmet ne podpira trenutnih področnih nastavitev", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet ne podpira trenutnih področnih nastavitev", function (err, _translation) {
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
describe("translating sl-SI string: Imenovanega argumenta ni bilo mogoče najti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Imenovanega argumenta ni bilo mogoče najti", function (err, _translation) {
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
describe("translating sl-SI string: Argument je obvezen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument je obvezen", function (err, _translation) {
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
describe("translating sl-SI string: Napačno število argumentov ali neveljavna dodelitev lastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napačno število argumentov ali neveljavna dodelitev lastnosti", function (err, _translation) {
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
describe("translating sl-SI string: Predmet ni zbirka", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet ni zbirka", function (err, _translation) {
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
describe("translating sl-SI string: Navedene funkcije iz DLL-a ni bilo mogoče najti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Navedene funkcije iz DLL-a ni bilo mogoče najti", function (err, _translation) {
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
describe("translating sl-SI string: Spremenljivka uporablja vrsto avtomatizacije, ki je JScript ne podpira", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Spremenljivka uporablja vrsto avtomatizacije, ki je JScript ne podpira", function (err, _translation) {
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
describe("translating sl-SI string: Oddaljeni strežnik ne obstaja ali pa ni na voljo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Oddaljeni strežnik ne obstaja ali pa ni na voljo", function (err, _translation) {
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
describe("translating sl-SI string: Ni mogoče prirediti spremenljivki", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ni mogoče prirediti spremenljivki", function (err, _translation) {
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
describe("translating sl-SI string: Predmeta ni varno uporabljati v skriptih", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmeta ni varno uporabljati v skriptih", function (err, _translation) {
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
describe("translating sl-SI string: Predmeta ni varno inicializirati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmeta ni varno inicializirati", function (err, _translation) {
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
describe("translating sl-SI string: Predmeta ni varno ustvariti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmeta ni varno ustvariti", function (err, _translation) {
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
describe("translating sl-SI string: Prišlo je do izjemne napake", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prišlo je do izjemne napake", function (err, _translation) {
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
describe("translating sl-SI string: Zmanjkalo je pomnilnika", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Zmanjkalo je pomnilnika", function (err, _translation) {
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
describe("translating sl-SI string: Napaka v sintaksi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napaka v sintaksi", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak ':'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak ';'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak '('", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan zank ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan zank ')'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak ']'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak '{'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak '}'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan identifikator", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan identifikator", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak '='", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak '/'", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavno število", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavno število", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven znak", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven znak", function (err, _translation) {
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
describe("translating sl-SI string: Nedokončana nizovna konstanta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedokončana nizovna konstanta", function (err, _translation) {
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
describe("translating sl-SI string: Nedokončan komentar", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedokončan komentar", function (err, _translation) {
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
describe("translating sl-SI string: Stavek 'return' zunaj funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Stavek 'return' zunaj funkcije", function (err, _translation) {
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
describe("translating sl-SI string: 'break' ne more biti zunaj zanke", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'break' ne more biti zunaj zanke", function (err, _translation) {
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
describe("translating sl-SI string: 'continue' ne more biti zunaj zanke", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'continue' ne more biti zunaj zanke", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana šestnajstiška števka", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana šestnajstiška števka", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan niz 'while'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan niz 'while'", function (err, _translation) {
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
describe("translating sl-SI string: Oznaka predefinirana", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Oznaka predefinirana", function (err, _translation) {
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
describe("translating sl-SI string: Oznake ni bilo mogoče najti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Oznake ni bilo mogoče najti", function (err, _translation) {
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
describe("translating sl-SI string: 'default' se lahko v stavku 'switch' pojavi le enkrat", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'default' se lahko v stavku 'switch' pojavi le enkrat", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana je oznaka, niz ali številka", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana je oznaka, niz ali številka", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan niz '@end'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan niz '@end'", function (err, _translation) {
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
describe("translating sl-SI string: Pogojno prevajanje je izklopljeno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pogojno prevajanje je izklopljeno", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana konstanta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana konstanta", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan znak '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan znak '@'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan niz 'catch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan niz 'catch'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan niz 'var'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan niz 'var'", function (err, _translation) {
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
describe("translating sl-SI string: Izjavi »throw« mora slediti izraz v isti izvorni vrstici", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Izjavi »throw« mora slediti izraz v isti izvorni vrstici", function (err, _translation) {
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
describe("translating sl-SI string: Izjave »with« niso dovoljene v strogem načinu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Izjave »with« niso dovoljene v strogem načinu", function (err, _translation) {
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
describe("translating sl-SI string: Podvojena uradna imena parametrov v strogem načinu niso dovoljena", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Podvojena uradna imena parametrov v strogem načinu niso dovoljena", function (err, _translation) {
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
describe("translating sl-SI string: Osmiški številčni nizi in ubežni znaki v strogem načinu niso dovoljeni", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Osmiški številčni nizi in ubežni znaki v strogem načinu niso dovoljeni", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavna uporaba izraza »eval« v strogem načinu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavna uporaba izraza »eval« v strogem načinu", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavna uporaba argumentov v strogem načinu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavna uporaba argumentov v strogem načinu", function (err, _translation) {
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
describe("translating sl-SI string: Priklic brisanja za izraz v strogem načinu ni dovoljen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Priklic brisanja za izraz v strogem načinu ni dovoljen", function (err, _translation) {
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
describe("translating sl-SI string: Več definicij lastnosti v strogem načinu ni dovoljenih", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Več definicij lastnosti v strogem načinu ni dovoljenih", function (err, _translation) {
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
describe("translating sl-SI string: V strogem načinu deklaracij funkcije ni mogoče ugnezditi znotraj izjave ali bloka. Prikažejo se lahko le na najvišji ravni ali neposredno v telesu funkcije.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("V strogem načinu deklaracij funkcije ni mogoče ugnezditi znotraj izjave ali bloka. Prikažejo se lahko le na najvišji ravni ali neposredno v telesu funkcije.", function (err, _translation) {
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
describe("translating sl-SI string: Uporaba ključne besede za identifikator je neveljavna", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uporaba ključne besede za identifikator je neveljavna", function (err, _translation) {
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
describe("translating sl-SI string: Uporaba prihodnje rezervirane besede za identifikator je neveljavna", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uporaba prihodnje rezervirane besede za identifikator je neveljavna", function (err, _translation) {
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
describe("translating sl-SI string: Uporaba prihodnje rezervirane besede za identifikator je neveljavna. Ime identifikatorja je rezervirano v strogem načinu.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uporaba prihodnje rezervirane besede za identifikator je neveljavna. Ime identifikatorja je rezervirano v strogem načinu.", function (err, _translation) {
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
describe("translating sl-SI string: Funkcije nastavljalnika »setter« morajo imeti en argument", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funkcije nastavljalnika »setter« morajo imeti en argument", function (err, _translation) {
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
describe("translating sl-SI string: Napaka pri prevajanju skripta JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napaka pri prevajanju skripta JavaScript", function (err, _translation) {
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
describe("translating sl-SI string: Napaka pri izvajanju skripta JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napaka pri izvajanju skripta JavaScript", function (err, _translation) {
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
describe("translating sl-SI string: Neznana napaka pri izvajanju", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neznana napaka pri izvajanju", function (err, _translation) {
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
describe("translating sl-SI string: Ni mogoče prirediti 'this'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ni mogoče prirediti 'this'", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana številka", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana številka", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana funkcija", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana funkcija", function (err, _translation) {
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
describe("translating sl-SI string: Ni mogoče prirediti rezultatu funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ni mogoče prirediti rezultatu funkcije", function (err, _translation) {
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
describe("translating sl-SI string: Predmeta ni mogoče indeksirati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmeta ni mogoče indeksirati", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan niz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan niz", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan je datumski predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan je datumski predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavna leva stran v dodelitvi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavna leva stran v dodelitvi", function (err, _translation) {
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
describe("translating sl-SI string: Nedefiniran identifikator", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nedefiniran identifikator", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan je »Boolean«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan je »Boolean«", function (err, _translation) {
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
describe("translating sl-SI string: Kode iz sproščenega skripta ni mogoče izvršiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kode iz sproščenega skripta ni mogoče izvršiti", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan član predmeta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan član predmeta", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan VBArray", function (err, _translation) {
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
describe("translating sl-SI string: Predmet JavaScript je pričakovan", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet JavaScript je pričakovan", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan enumeracijski predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan enumeracijski predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet regularni izraz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet regularni izraz", function (err, _translation) {
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
describe("translating sl-SI string: Napaka v sintaksi regularnega izraza", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Napaka v sintaksi regularnega izraza", function (err, _translation) {
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
describe("translating sl-SI string: Nepričakovani kvantifikator", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nepričakovani kvantifikator", function (err, _translation) {
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
describe("translating sl-SI string: V regularnem izrazu je pričakovan znak ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("V regularnem izrazu je pričakovan znak ']'", function (err, _translation) {
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
describe("translating sl-SI string: V regularnem izrazu je pričakovan znak ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("V regularnem izrazu je pričakovan znak ')'", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven obseg v naboru znakov", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven obseg v naboru znakov", function (err, _translation) {
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
describe("translating sl-SI string: Prišlo je do izjeme, ki ni bila prestrežena", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prišlo je do izjeme, ki ni bila prestrežena", function (err, _translation) {
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
describe("translating sl-SI string: Funkcija nima veljavnega prototipnega predmeta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funkcija nima veljavnega prototipnega predmeta", function (err, _translation) {
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
describe("translating sl-SI string: URI, ki ga nameravate kodirati, vsebuje neveljaven znak", function () {
    var translation;
    before(function (done) {
        errorToEnglish("URI, ki ga nameravate kodirati, vsebuje neveljaven znak", function (err, _translation) {
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
describe("translating sl-SI string: URI, ki ga nameravate dekodirati, ni pravilno kodiran", function () {
    var translation;
    before(function (done) {
        errorToEnglish("URI, ki ga nameravate dekodirati, ni pravilno kodiran", function (err, _translation) {
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
describe("translating sl-SI string: Število mest v števcu oz. v imenovalcu je zunaj obsega", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Število mest v števcu oz. v imenovalcu je zunaj obsega", function (err, _translation) {
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
describe("translating sl-SI string: Natančnost je zunaj obsega", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Natančnost je zunaj obsega", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan je predmet polja ali argumenotv", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan je predmet polja ali argumenotv", function (err, _translation) {
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
describe("translating sl-SI string: Dolžina polja mora biti končno pozitivno celo število", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dolžina polja mora biti končno pozitivno celo število", function (err, _translation) {
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
describe("translating sl-SI string: Dolžini polja mora biti prirejeno končno pozitivno celo število", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dolžini polja mora biti prirejeno končno pozitivno celo število", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan je predmet Array", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan je predmet Array", function (err, _translation) {
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
describe("translating sl-SI string: Krožno sklicevanje v argumentu vrednosti ni podprto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Krožno sklicevanje v argumentu vrednosti ni podprto", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven argument nadomestnega elementa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven argument nadomestnega elementa", function (err, _translation) {
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
describe("translating sl-SI string: Seznam argumentov je prevelik za uporabo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Seznam argumentov je prevelik za uporabo", function (err, _translation) {
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
describe("translating sl-SI string: Vnovična deklaracija lastnosti »const«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vnovična deklaracija lastnosti »const«", function (err, _translation) {
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
describe("translating sl-SI string: Člana predmeta ni mogoče nastaviti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Člana predmeta ni mogoče nastaviti", function (err, _translation) {
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
describe("translating sl-SI string: Spremenljivka v strogem načinu ni določena", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Spremenljivka v strogem načinu ni določena", function (err, _translation) {
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
describe("translating sl-SI string: Dostop do lastnosti »caller« funkcijskega predmeta ali predmeta argumentov v strogem načinu ni dovoljen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dostop do lastnosti »caller« funkcijskega predmeta ali predmeta argumentov v strogem načinu ni dovoljen", function (err, _translation) {
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
describe("translating sl-SI string: Dostop do lastnosti »callee« predmeta argumentov v strogem načinu ni dovoljen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dostop do lastnosti »callee« predmeta argumentov v strogem načinu ni dovoljen", function (err, _translation) {
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
describe("translating sl-SI string: Dodelitev za lastnosti samo za branje v strogem načinu ni dovoljena", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dodelitev za lastnosti samo za branje v strogem načinu ni dovoljena", function (err, _translation) {
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
describe("translating sl-SI string: Ni mogoče ustvariti lastnosti za nerazširljiv predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ni mogoče ustvariti lastnosti za nerazširljiv predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana funkcija", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana funkcija", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana funkcija", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana funkcija", function (err, _translation) {
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
describe("translating sl-SI string: Lastnost ne more imeti dostopnikov in vrednosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnost ne more imeti dostopnikov in vrednosti", function (err, _translation) {
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
describe("translating sl-SI string: 'this' je nič ali nedoločeno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' je nič ali nedoločeno", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana funkcija", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana funkcija", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan niz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan niz", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan logični izraz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan logični izraz", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovani datum", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovani datum", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana številka", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana številka", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan VBArray", function (err, _translation) {
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
describe("translating sl-SI string: Predmet JavaScript je pričakovan", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet JavaScript je pričakovan", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan enumeracijski predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan enumeracijski predmet", function (err, _translation) {
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
describe("translating sl-SI string: Predmet RegExp je pričakovan", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet RegExp je pričakovan", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven argument funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven argument funkcije", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Predmet JavaScript je pričakovan", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet JavaScript je pričakovan", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana funkcija", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana funkcija", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan VBArray", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan predmet", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavna lastnost »length«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavna lastnost »length«", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan je predmet polja ali argumentov", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan je predmet polja ali argumentov", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven operand", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven operand", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven operand", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven operand", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven deskriptor lastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven deskriptor lastnosti", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti ni mogoče določiti: predmeta ni mogoče razširiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti ni mogoče določiti: predmeta ni mogoče razširiti", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti, ki je ni mogoče konfigurirati, ni mogoče znova določiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti, ki je ni mogoče konfigurirati, ni mogoče znova določiti", function (err, _translation) {
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
describe("translating sl-SI string: Nezapisljive lastnosti ni mogoče spremeniti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nezapisljive lastnosti ni mogoče spremeniti", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti ni mogoče spremeniti: »length« ni zapisljiva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti ni mogoče spremeniti: »length« ni zapisljiva", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti ni mogoče določiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti ni mogoče določiti", function (err, _translation) {
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
describe("translating sl-SI string: Argument konstruktorja tipizirane matrike ni veljaven", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument konstruktorja tipizirane matrike ni veljaven", function (err, _translation) {
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
describe("translating sl-SI string: »this« ni tipiziran predmet matrike", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»this« ni tipiziran predmet matrike", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven odmik/dolžina pri ustvarjanju tipizirane matrike", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven odmik/dolžina pri ustvarjanju tipizirane matrike", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavna začetna/končna vrednost v metodi »subarray « tipizirane matrike", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavna začetna/končna vrednost v metodi »subarray « tipizirane matrike", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven vir v tipizirani množici matrik", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven vir v tipizirani množici matrik", function (err, _translation) {
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
describe("translating sl-SI string: »this« ni predmet »DataView«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»this« ni predmet »DataView«", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavni argumenti v predmetu »DataView«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavni argumenti v predmetu »DataView«", function (err, _translation) {
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
describe("translating sl-SI string: Operacija predmeta »DataView« presega določeno dolžino medpomnilnika", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Operacija predmeta »DataView« presega določeno dolžino medpomnilnika", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavni argumenti v pogledu podatkov", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavni argumenti v pogledu podatkov", function (err, _translation) {
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
describe("translating sl-SI string: neveljaven podpis funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neveljaven podpis funkcije", function (err, _translation) {
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
describe("translating sl-SI string: neveljaven podpis lastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neveljaven podpis lastnosti", function (err, _translation) {
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
describe("translating sl-SI string: neveljavna vrsta vhodnega parametra", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neveljavna vrsta vhodnega parametra", function (err, _translation) {
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
describe("translating sl-SI string: neveljaven izhodni parameter", function () {
    var translation;
    before(function (done) {
        errorToEnglish("neveljaven izhodni parameter", function (err, _translation) {
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
describe("translating sl-SI string: V strogem načinu dostop do lastnosti »argumentov« funkcije ni dovoljen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("V strogem načinu dostop do lastnosti »argumentov« funkcije ni dovoljen", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovan je predmet, ki ga je mogoče pregledati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovan je predmet, ki ga je mogoče pregledati", function (err, _translation) {
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
describe("translating sl-SI string: Argumenta ni bilo mogoče pretvoriti v vrsto »char«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumenta ni bilo mogoče pretvoriti v vrsto »char«", function (err, _translation) {
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
describe("translating sl-SI string: Argumenta ni bilo mogoče pretvoriti v vrsto »GUID«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumenta ni bilo mogoče pretvoriti v vrsto »GUID«", function (err, _translation) {
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
describe("translating sl-SI string: Pričakovana je vrsta »IInspectable«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pričakovana je vrsta »IInspectable«", function (err, _translation) {
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
describe("translating sl-SI string: Predmeta ni mogoče pretvoriti v »struct«: v predmetu manjka pričakovana lastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmeta ni mogoče pretvoriti v »struct«: v predmetu manjka pričakovana lastnosti", function (err, _translation) {
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
describe("translating sl-SI string: Neznana vrsta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neznana vrsta", function (err, _translation) {
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
describe("translating sl-SI string: Funkcija je poklicana s premalo argumenti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funkcija je poklicana s premalo argumenti", function (err, _translation) {
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
describe("translating sl-SI string: Vrste ni mogoče graditi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrste ni mogoče graditi", function (err, _translation) {
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
describe("translating sl-SI string: Vrednosti ni mogoče pretvoriti v »PropertyValue«: »PropertyValue« ne podpira te vrste", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrednosti ni mogoče pretvoriti v »PropertyValue«: »PropertyValue« ne podpira te vrste", function (err, _translation) {
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
describe("translating sl-SI string: Vrednosti ni mogoče pretvoriti v »IInspectable«: »IInspectable« ne podpira te vrste", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrednosti ni mogoče pretvoriti v »IInspectable«: »IInspectable« ne podpira te vrste", function (err, _translation) {
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
describe("translating sl-SI string: Datuma ni mogoče pretvoriti v »Windows.Foundation.DateTime«: vrednost je izven veljavnega obsega", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Datuma ni mogoče pretvoriti v »Windows.Foundation.DateTime«: vrednost je izven veljavnega obsega", function (err, _translation) {
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
describe("translating sl-SI string: Vrednosti ni mogoče pretvoriti v »Windows.Foundation.TimeSpan«: vrednost je izven veljavnega obsega", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrednosti ni mogoče pretvoriti v »Windows.Foundation.TimeSpan«: vrednost je izven veljavnega obsega", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven dostop do že objavljenega predmeta za pregled", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven dostop do že objavljenega predmeta za pregled", function (err, _translation) {
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
describe("translating sl-SI string: Ni mogoče objaviti že objavljenega predmeta za pregled", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ni mogoče objaviti že objavljenega predmeta za pregled", function (err, _translation) {
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
describe("translating sl-SI string: »this« ni pričakovana vrsta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»this« ni pričakovana vrsta", function (err, _translation) {
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
describe("translating sl-SI string: Za polje sta določeni neveljavna dolžina in velikost", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Za polje sta določeni neveljavna dolžina in velikost", function (err, _translation) {
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
describe("translating sl-SI string: Pri pridobivanju informacij o metapodatkih je prišlo do nepričakovane napake", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pri pridobivanju informacij o metapodatkih je prišlo do nepričakovane napake", function (err, _translation) {
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
describe("translating sl-SI string: Stanje je »error«, vendar getResults ni vrnil napake", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Stanje je »error«, vendar getResults ni vrnil napake", function (err, _translation) {
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
describe("translating sl-SI string: Manjkajoč ali neveljaven parameter stanja je prešel na dokončano rutino za obravnavo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Manjkajoč ali neveljaven parameter stanja je prešel na dokončano rutino za obravnavo", function (err, _translation) {
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
describe("translating sl-SI string: Manjkajoč ali neveljaven parameter pošiljatelja je prešel na dokončano rutino za obravnavo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Manjkajoč ali neveljaven parameter pošiljatelja je prešel na dokončano rutino za obravnavo", function (err, _translation) {
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
describe("translating sl-SI string: Neskončno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neskončno", function (err, _translation) {
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
describe("translating sl-SI string: -Neskončno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("-Neskončno", function (err, _translation) {
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
describe("translating sl-SI string: Predmet ne podpira lastnosti ali metode »MyDynamicTestString«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet ne podpira lastnosti ali metode »MyDynamicTestString«", function (err, _translation) {
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
describe("translating sl-SI string: Argument funkcije »MyDynamicTestString« ni izbiren", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument funkcije »MyDynamicTestString« ni izbiren", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni številka", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni številka", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni funkcija", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni funkcija", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« je predmet, ki ga ni mogoče indeksirati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« je predmet, ki ga ni mogoče indeksirati", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni niz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni niz", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni datumski predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni datumski predmet", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ima vrednost »null« ali pa ni predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ima vrednost »null« ali pa ni predmet", function (err, _translation) {
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
describe("translating sl-SI string: Ni mogoče dodeliti »MyDynamicTestString«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ni mogoče dodeliti »MyDynamicTestString«", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni določen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni določen", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni logična vrednost", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni logična vrednost", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni mogoče izbrisati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni mogoče izbrisati", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni predmet VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni predmet VBArray", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni predmet jezika JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni predmet jezika JavaScript", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni predmet popisovalnika", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni predmet popisovalnika", function (err, _translation) {
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
describe("translating sl-SI string: »MyDynamicTestString« ni predmet regularni izraz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»MyDynamicTestString« ni predmet regularni izraz", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString ni predmet polja ali argumentov", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ni predmet polja ali argumentov", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString ni predmet polja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ni predmet polja", function (err, _translation) {
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
describe("translating sl-SI string: Atributa »MyDynamicTestString« v deskriptorju lastnosti tega predmeta ni mogoče nastaviti na vrednost »true«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Atributa »MyDynamicTestString« v deskriptorju lastnosti tega predmeta ni mogoče nastaviti na vrednost »true«", function (err, _translation) {
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
describe("translating sl-SI string: Atributa »MyDynamicTestString« v deskriptorju lastnosti tega predmeta ni mogoče nastaviti na vrednost »false«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Atributa »MyDynamicTestString« v deskriptorju lastnosti tega predmeta ni mogoče nastaviti na vrednost »false«", function (err, _translation) {
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
describe("translating sl-SI string: Vnovična deklaracija konstante »MyDynamicTestString«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vnovična deklaracija konstante »MyDynamicTestString«", function (err, _translation) {
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
describe("translating sl-SI string: Priklic brisanja za »MyDynamicTestString« ni dovoljen v strogem načinu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Priklic brisanja za »MyDynamicTestString« ni dovoljen v strogem načinu", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti »MyDynamicTestString« nedoločenega ali ničnega sklica ni mogoče nastaviti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti »MyDynamicTestString« nedoločenega ali ničnega sklica ni mogoče nastaviti", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti »MyDynamicTestString« nedoločenega ali ničnega sklica ni mogoče pridobiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti »MyDynamicTestString« nedoločenega ali ničnega sklica ni mogoče pridobiti", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti »MyDynamicTestString« nedoločenega ali ničnega sklica ni mogoče izbrisati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti »MyDynamicTestString« nedoločenega ali ničnega sklica ni mogoče izbrisati", function (err, _translation) {
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
describe("translating sl-SI string: Dostopa do lastnosti »MyDynamicTestString« ni mogoč: vrsta »VarDate« ne podpira uporabniško določenih lastnosti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Dostopa do lastnosti »MyDynamicTestString« ni mogoč: vrsta »VarDate« ne podpira uporabniško določenih lastnosti", function (err, _translation) {
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
describe("translating sl-SI string: Vrednost lastnosti »MyDynamicTestString« ni predmet funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrednost lastnosti »MyDynamicTestString« ni predmet funkcije", function (err, _translation) {
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
describe("translating sl-SI string: Vrednost lastnosti »MyDynamicTestString« je »null« ali ni določena in ni predmet funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrednost lastnosti »MyDynamicTestString« je »null« ali ni določena in ni predmet funkcije", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' je »null« ali ni določeno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' je »null« ali ni določeno", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni predmet", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni predmet funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni predmet funkcije", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni predmet niza", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni predmet niza", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni logični predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni logični predmet", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni datumski predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni datumski predmet", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni številski predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni številski predmet", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni predmet VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni predmet VBArray", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni predmet jezika JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni predmet jezika JavaScript", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni predmet popisovalnika", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni predmet popisovalnika", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: 'this' ni predmet regularni izraz", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' ni predmet regularni izraz", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: neveljaven argument", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: neveljaven argument", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argument ni predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argument ni predmet", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argument is ni predmet jezika JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argument is ni predmet jezika JavaScript", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argument ni predmet funkcije", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argument ni predmet funkcije", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argument ni predmet VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argument ni predmet VBArray", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argument je »null« ali ni določen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argument je »null« ali ni določen", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argument ni predmet in ni »null«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argument ni predmet in ni »null«", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argument nima veljavne lastnosti »length«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argument nima veljavne lastnosti »length«", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: pričakovan je predmet polja ali argumentov", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: pričakovan je predmet polja ali argumentov", function (err, _translation) {
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
describe("translating sl-SI string: Neveljavni operand za »MyDynamicTestString«: pričakovan je predmet", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljavni operand za »MyDynamicTestString«: pričakovan je predmet", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven operand za »MyDynamicTestString«: pričakovana je funkcija", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven operand za »MyDynamicTestString«: pričakovana je funkcija", function (err, _translation) {
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
describe("translating sl-SI string: Neveljaven deskriptor lastnosti »MyDynamicTestString«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Neveljaven deskriptor lastnosti »MyDynamicTestString«", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti »MyDynamicTestString« ni mogoče določiti: predmeta ni mogoče razširiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti »MyDynamicTestString« ni mogoče določiti: predmeta ni mogoče razširiti", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti »MyDynamicTestString«, ki je ni mogoče konfigurirati, ni mogoče znova določiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti »MyDynamicTestString«, ki je ni mogoče konfigurirati, ni mogoče znova določiti", function (err, _translation) {
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
describe("translating sl-SI string: Nezapisljive lastnosti »MyDynamicTestString« ni mogoče spremeniti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nezapisljive lastnosti »MyDynamicTestString« ni mogoče spremeniti", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti »MyDynamicTestString« ni mogoče spremeniti: »length« ni zapisljiva", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti »MyDynamicTestString« ni mogoče spremeniti: »length« ni zapisljiva", function (err, _translation) {
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
describe("translating sl-SI string: Lastnosti »MyDynamicTestString« ni mogoče določiti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lastnosti »MyDynamicTestString« ni mogoče določiti", function (err, _translation) {
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
describe("translating sl-SI string: Obvezni argument MyDynamicTestString metode predmeta »DataView« ni določen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Obvezni argument MyDynamicTestString metode predmeta »DataView« ni določen", function (err, _translation) {
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
describe("translating sl-SI string: Argument MyDynamicTestString konstruktorja predmeta »DataView« ni veljaven", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argument MyDynamicTestString konstruktorja predmeta »DataView« ni veljaven", function (err, _translation) {
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
describe("translating sl-SI string: Podpis funkcije »MyDynamicTestString« ni veljaven, zato je ni mogoče priklicati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Podpis funkcije »MyDynamicTestString« ni veljaven, zato je ni mogoče priklicati", function (err, _translation) {
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
describe("translating sl-SI string: Podpis lastnosti »MyDynamicTestString« ni veljaven, zato dostop do nje ni mogoč", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Podpis lastnosti »MyDynamicTestString« ni veljaven, zato dostop do nje ni mogoč", function (err, _translation) {
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
describe("translating sl-SI string: Izvajalni razred MyDynamicTestString, ki ima Windows.Foundation.IPropertyValue za privzeti vmesnik, ni podprt kot tip vhodnega parametra", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Izvajalni razred MyDynamicTestString, ki ima Windows.Foundation.IPropertyValue za privzeti vmesnik, ni podprt kot tip vhodnega parametra", function (err, _translation) {
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
describe("translating sl-SI string: Predmet z vmesnikom Windows.Foundation.IPropertyValue, ki ima ime izvajalnega razreda MyDynamicTestString, ni podprt kot izhodni parameter", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmet z vmesnikom Windows.Foundation.IPropertyValue, ki ima ime izvajalnega razreda MyDynamicTestString, ni podprt kot izhodni parameter", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: »this« ni predmet, ki ga je mogoče pregledati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: »this« ni predmet, ki ga je mogoče pregledati", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argumenta ni bilo mogoče pretvoriti v vrsto »char«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumenta ni bilo mogoče pretvoriti v vrsto »char«", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: argumenta ni bilo mogoče pretvoriti v vrsto »GUID«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumenta ni bilo mogoče pretvoriti v vrsto »GUID«", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: povratne vrednosti ni bilo mogoče pretvoriti v »IInspectable«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: povratne vrednosti ni bilo mogoče pretvoriti v »IInspectable«", function (err, _translation) {
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
describe("translating sl-SI string: Predmeta ni bilo mogoče pretvoriti v »struct«: predmet nima pričakovane lastnosti »MyDynamicTestString«", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Predmeta ni bilo mogoče pretvoriti v »struct«: predmet nima pričakovane lastnosti »MyDynamicTestString«", function (err, _translation) {
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
describe("translating sl-SI string: Vrste »MyDynamicTestString« ni mogoče najti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrste »MyDynamicTestString« ni mogoče najti", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: funkcija je poklicana s premalo argumenti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: funkcija je poklicana s premalo argumenti", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: vrste ni mogoče graditi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: vrste ni mogoče graditi", function (err, _translation) {
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
describe("translating sl-SI string: Vrednosti ni mogoče pretvoriti v »PropertyValue«: »PropertyValue« ne podpira MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrednosti ni mogoče pretvoriti v »PropertyValue«: »PropertyValue« ne podpira MyDynamicTestString", function (err, _translation) {
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
describe("translating sl-SI string: Vrednosti ni mogoče pretvoriti v »IInspectable«: »IInspectable« ne podpira MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vrednosti ni mogoče pretvoriti v »IInspectable«: »IInspectable« ne podpira MyDynamicTestString", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: predmet za pregled »this« je objavljen in ni mogoče dostopati do njega", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: predmet za pregled »this« je objavljen in ni mogoče dostopati do njega", function (err, _translation) {
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
describe("translating sl-SI string: »this« ni pričakovana vrsta: MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("»this« ni pričakovana vrsta: MyDynamicTestString", function (err, _translation) {
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
describe("translating sl-SI string: MyDynamicTestString: Pri pridobivanju informacij o metapodatkih je prišlo do nepričakovane napake", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Pri pridobivanju informacij o metapodatkih je prišlo do nepričakovane napake", function (err, _translation) {
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
describe("translating sl-SI string: Navedeni datum ni na voljo v koledarju trenutnih področnih nastavitev.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Navedeni datum ni na voljo v koledarju trenutnih področnih nastavitev.", function (err, _translation) {
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
