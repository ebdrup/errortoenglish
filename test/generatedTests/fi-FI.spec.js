var errorToEnglish = require("../../lib/errortoenglish");
describe("translating fi-FI string: Virheellinen toimintosarjakutsu tai argumentti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen toimintosarjakutsu tai argumentti", function (err, _translation) {
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
describe("translating fi-FI string: Ylivuoto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ylivuoto", function (err, _translation) {
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
describe("translating fi-FI string: Muisti ei riitä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Muisti ei riitä", function (err, _translation) {
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
describe("translating fi-FI string: Viittaus alueen ulkopuolelle", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Viittaus alueen ulkopuolelle", function (err, _translation) {
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
describe("translating fi-FI string: Taulukko on kiinteä tai tilapäisesti lukittu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Taulukko on kiinteä tai tilapäisesti lukittu", function (err, _translation) {
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
describe("translating fi-FI string: Jako nollalla", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Jako nollalla", function (err, _translation) {
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
describe("translating fi-FI string: Tyyppivirhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tyyppivirhe", function (err, _translation) {
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
describe("translating fi-FI string: Merkkijonon tila ei riitä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Merkkijonon tila ei riitä", function (err, _translation) {
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
describe("translating fi-FI string: Toimintoa ei voi suorittaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Toimintoa ei voi suorittaa", function (err, _translation) {
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
describe("translating fi-FI string: Pinotila ei riitä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Pinotila ei riitä", function (err, _translation) {
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
describe("translating fi-FI string: Sub- tai Function-toimintosarjaa ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Sub- tai Function-toimintosarjaa ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: Virhe ladattaessa DLL-kirjastoa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virhe ladattaessa DLL-kirjastoa", function (err, _translation) {
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
describe("translating fi-FI string: Sisäinen virhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Sisäinen virhe", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen tiedostonimi tai numero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen tiedostonimi tai numero", function (err, _translation) {
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
describe("translating fi-FI string: Tiedostoa ei löydy", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tiedostoa ei löydy", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen tiedostomuoto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen tiedostomuoto", function (err, _translation) {
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
describe("translating fi-FI string: Tiedosto on jo avoinna", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tiedosto on jo avoinna", function (err, _translation) {
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
describe("translating fi-FI string: Laitteen I/O-virhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Laitteen I/O-virhe", function (err, _translation) {
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
describe("translating fi-FI string: Tiedosto on jo olemassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tiedosto on jo olemassa", function (err, _translation) {
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
describe("translating fi-FI string: Levy on täynnä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Levy on täynnä", function (err, _translation) {
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
describe("translating fi-FI string: Syöte tiedoston lopun jälkeen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Syöte tiedoston lopun jälkeen", function (err, _translation) {
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
describe("translating fi-FI string: Liian monta tiedostoa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Liian monta tiedostoa", function (err, _translation) {
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
describe("translating fi-FI string: Laite ei ole käytettävissä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Laite ei ole käytettävissä", function (err, _translation) {
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
describe("translating fi-FI string: Ei käyttöoikeutta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei käyttöoikeutta", function (err, _translation) {
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
describe("translating fi-FI string: Levy ei ole valmiina", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Levy ei ole valmiina", function (err, _translation) {
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
describe("translating fi-FI string: Uudelleennimettäessä ei voi vaihtaa asemaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uudelleennimettäessä ei voi vaihtaa asemaa", function (err, _translation) {
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
describe("translating fi-FI string: Polkua tai tiedostoa ei voi käyttää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Polkua tai tiedostoa ei voi käyttää", function (err, _translation) {
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
describe("translating fi-FI string: Polkua ei löydy", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Polkua ei löydy", function (err, _translation) {
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
describe("translating fi-FI string: Object-tyyppistä muuttujaa tai With-lohkomuuttujaa ei ole asetettu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Object-tyyppistä muuttujaa tai With-lohkomuuttujaa ei ole asetettu", function (err, _translation) {
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
describe("translating fi-FI string: For-silmukkaa ei ole alustettu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("For-silmukkaa ei ole alustettu", function (err, _translation) {
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
describe("translating fi-FI string: Null-arvon virheellinen käyttö", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Null-arvon virheellinen käyttö", function (err, _translation) {
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
describe("translating fi-FI string: Tarvittavan tilapäistiedoston luominen ei onnistu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvittavan tilapäistiedoston luominen ei onnistu", function (err, _translation) {
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
describe("translating fi-FI string: Objekti puuttuu", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti puuttuu", function (err, _translation) {
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
describe("translating fi-FI string: ActiveX-komponentti ei pysty luomaan objektia", function () {
    var translation;
    before(function (done) {
        errorToEnglish("ActiveX-komponentti ei pysty luomaan objektia", function (err, _translation) {
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
describe("translating fi-FI string: Luokka ei tue automaatiota", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Luokka ei tue automaatiota", function (err, _translation) {
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
describe("translating fi-FI string: Tiedoston tai luokan nimeä ei löytynyt automaatiotoiminnon aikana", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tiedoston tai luokan nimeä ei löytynyt automaatiotoiminnon aikana", function (err, _translation) {
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
describe("translating fi-FI string: Objekti ei tue tätä ominaisuutta tai menetelmää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti ei tue tätä ominaisuutta tai menetelmää", function (err, _translation) {
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
describe("translating fi-FI string: Automaation virhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Automaation virhe", function (err, _translation) {
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
describe("translating fi-FI string: Objekti ei tue tätä toimintoa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti ei tue tätä toimintoa", function (err, _translation) {
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
describe("translating fi-FI string: Objekti ei tue nimettyjä argumentteja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti ei tue nimettyjä argumentteja", function (err, _translation) {
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
describe("translating fi-FI string: Objekti ei tue käytössä olevia maakohtaisia asetuksia", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti ei tue käytössä olevia maakohtaisia asetuksia", function (err, _translation) {
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
describe("translating fi-FI string: Nimettyä argumenttia ei löydy", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nimettyä argumenttia ei löydy", function (err, _translation) {
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
describe("translating fi-FI string: Argumentti on pakollinen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumentti on pakollinen", function (err, _translation) {
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
describe("translating fi-FI string: Argumenttien määrä tai ominaisuusasetus ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumenttien määrä tai ominaisuusasetus ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Objekti ei ole kokoelma", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti ei ole kokoelma", function (err, _translation) {
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
describe("translating fi-FI string: Määritettyä DLL-funktiota ei löydy", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Määritettyä DLL-funktiota ei löydy", function (err, _translation) {
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
describe("translating fi-FI string: Muuttuja käyttää automaatiotyyppiä, jota JavaScriptissä ei tueta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Muuttuja käyttää automaatiotyyppiä, jota JavaScriptissä ei tueta", function (err, _translation) {
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
describe("translating fi-FI string: Etäpalvelinkonetta ei ole tai sitä ei voi käyttää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Etäpalvelinkonetta ei ole tai sitä ei voi käyttää", function (err, _translation) {
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
describe("translating fi-FI string: Ei liitettävissä muuttujaan", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei liitettävissä muuttujaan", function (err, _translation) {
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
describe("translating fi-FI string: Objektiin ei ole turvallista liittää komentokieltä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objektiin ei ole turvallista liittää komentokieltä", function (err, _translation) {
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
describe("translating fi-FI string: Objektia ei ole turvallista alustaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objektia ei ole turvallista alustaa", function (err, _translation) {
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
describe("translating fi-FI string: Objektia ei ole turvallista luoda", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objektia ei ole turvallista luoda", function (err, _translation) {
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
describe("translating fi-FI string: On tapahtunut poikkeus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("On tapahtunut poikkeus", function (err, _translation) {
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
describe("translating fi-FI string: Muisti ei riitä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Muisti ei riitä", function (err, _translation) {
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
describe("translating fi-FI string: Syntaksivirhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Syntaksivirhe", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan ':'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan ';'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan '('", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan ')'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan ']'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan '{'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan '}'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan tunniste", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan tunniste", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan '='", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan '/'", function (err, _translation) {
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
describe("translating fi-FI string: Luku ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Luku ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Merkki ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Merkki ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Päättymätön merkkijonovakio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Päättymätön merkkijonovakio", function (err, _translation) {
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
describe("translating fi-FI string: Päättymätön kommentti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Päättymätön kommentti", function (err, _translation) {
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
describe("translating fi-FI string: 'return'-lause funktion ulkopuolella", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'return'-lause funktion ulkopuolella", function (err, _translation) {
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
describe("translating fi-FI string: 'break'-lausetta ei voi käyttää silmukan ulkopuolella", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'break'-lausetta ei voi käyttää silmukan ulkopuolella", function (err, _translation) {
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
describe("translating fi-FI string: 'continue'-lausetta ei voi käyttää silmukan ulkopuolella", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'continue'-lausetta ei voi käyttää silmukan ulkopuolella", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan heksadesimaalinumero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan heksadesimaalinumero", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan 'while'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan 'while'", function (err, _translation) {
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
describe("translating fi-FI string: Nimi on määritetty uudelleen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nimi on määritetty uudelleen", function (err, _translation) {
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
describe("translating fi-FI string: Nimeä ei löydy", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nimeä ei löydy", function (err, _translation) {
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
describe("translating fi-FI string: 'switch'-lauseessa voi olla vain yksi 'default'-määre", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'switch'-lauseessa voi olla vain yksi 'default'-määre", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan tunniste, merkkijono tai numero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan tunniste, merkkijono tai numero", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan '@end'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan '@end'", function (err, _translation) {
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
describe("translating fi-FI string: Ehdollinen kääntäminen on poistettu käytöstä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ehdollinen kääntäminen on poistettu käytöstä", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan vakio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan vakio", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan '@'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan 'catch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan 'catch'", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan 'var'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan 'var'", function (err, _translation) {
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
describe("translating fi-FI string: throw-kohdetta pitää seurata lauseke samalla lähderivillä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("throw-kohdetta pitää seurata lauseke samalla lähderivillä", function (err, _translation) {
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
describe("translating fi-FI string: with-lausekkeita ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("with-lausekkeita ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Muodollisten parametrien nimien kaksoiskappaleita ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Muodollisten parametrien nimien kaksoiskappaleita ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Numeerisia oktaaliliteraaleja ja ohjausmerkkejä ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Numeerisia oktaaliliteraaleja ja ohjausmerkkejä ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen eval-kohteen käyttö tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen eval-kohteen käyttö tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen arguments-kohteen käyttö tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen arguments-kohteen käyttö tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Delete-kutsun tekemistä lausekkeelle ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Delete-kutsun tekemistä lausekkeelle ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuuden useita määrityksiä ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuuden useita määrityksiä ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Tarkassa tilassa funktioiden kuvaukset eivät voi olla lausekkeen tai lohkon sisällä, vaan niitä voidaan määrittää ainoastaan päätasolla tai suoraan funktion runko-osassa.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarkassa tilassa funktioiden kuvaukset eivät voi olla lausekkeen tai lohkon sisällä, vaan niitä voidaan määrittää ainoastaan päätasolla tai suoraan funktion runko-osassa.", function (err, _translation) {
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
describe("translating fi-FI string: Avainsanan käyttäminen tunnuksena ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Avainsanan käyttäminen tunnuksena ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Varatun sanan käyttäminen tunnuksena ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Varatun sanan käyttäminen tunnuksena ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Varatun sanan käyttäminen tunnuksena ei kelpaa. Tunnuksen nimi on varattu tarkassa tilassa.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Varatun sanan käyttäminen tunnuksena ei kelpaa. Tunnuksen nimi on varattu tarkassa tilassa.", function (err, _translation) {
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
describe("translating fi-FI string: Setter-funktioilla on oltava yksi argumentti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Setter-funktioilla on oltava yksi argumentti", function (err, _translation) {
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
describe("translating fi-FI string: JavaScript-käännösvirhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("JavaScript-käännösvirhe", function (err, _translation) {
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
describe("translating fi-FI string: Suorituksenaikainen JavaScript-virhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Suorituksenaikainen JavaScript-virhe", function (err, _translation) {
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
describe("translating fi-FI string: Tuntematon suorituksenaikainen virhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tuntematon suorituksenaikainen virhe", function (err, _translation) {
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
describe("translating fi-FI string: Ei liitettävissä 'this'-lauseeseen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei liitettävissä 'this'-lauseeseen", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava luku", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava luku", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan funktio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan funktio", function (err, _translation) {
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
describe("translating fi-FI string: Ei liitettävissä funktion tulokseen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei liitettävissä funktion tulokseen", function (err, _translation) {
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
describe("translating fi-FI string: Objektia ei voi indeksoida", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objektia ei voi indeksoida", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan merkkijono", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan merkkijono", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava päivämääräobjekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava päivämääräobjekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen vasemmanpuoleinen osa määrityksessä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen vasemmanpuoleinen osa määrityksessä", function (err, _translation) {
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
describe("translating fi-FI string: Tunnistetta ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tunnistetta ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava totuusarvo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava totuusarvo", function (err, _translation) {
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
describe("translating fi-FI string: Vapaan komentosarjan koodia ei voi suorittaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vapaan komentosarjan koodia ei voi suorittaa", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objektin jäsen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objektin jäsen", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava VBArray-taulukko", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava VBArray-taulukko", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava JScript-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava JScript-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava laskuriobjekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava laskuriobjekti", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan lausekeobjekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan lausekeobjekti", function (err, _translation) {
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
describe("translating fi-FI string: Säännöllisessä lausekkeessa on syntaksivirhe", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Säännöllisessä lausekkeessa on syntaksivirhe", function (err, _translation) {
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
describe("translating fi-FI string: Odottamaton rajoitin", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Odottamaton rajoitin", function (err, _translation) {
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
describe("translating fi-FI string: Säännölliseen lausekkeeseen kuuluu ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Säännölliseen lausekkeeseen kuuluu ']'", function (err, _translation) {
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
describe("translating fi-FI string: Säännölliseen lausekkeeseen kuuluu ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Säännölliseen lausekkeeseen kuuluu ')'", function (err, _translation) {
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
describe("translating fi-FI string: Merkistön arvoalue ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Merkistön arvoalue ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Keskeytys havaittu muttei käsitelty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Keskeytys havaittu muttei käsitelty", function (err, _translation) {
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
describe("translating fi-FI string: Funktion prototyyppiobjekti ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funktion prototyyppiobjekti ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Koodattava URI sisältää merkin, joka ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Koodattava URI sisältää merkin, joka ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: URIn purettava koodi ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("URIn purettava koodi ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Murtolukujen määrä on määritettyjen rajojen ulkopuolella", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Murtolukujen määrä on määritettyjen rajojen ulkopuolella", function (err, _translation) {
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
describe("translating fi-FI string: Tarkkuus on määritettyjen rajojen ulkopuolella", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarkkuus on määritettyjen rajojen ulkopuolella", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan array- tai arguments-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan array- tai arguments-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Taulukon pituuden arvon on oltava äärellinen positiivinen kokonaisluku", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Taulukon pituuden arvon on oltava äärellinen positiivinen kokonaisluku", function (err, _translation) {
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
describe("translating fi-FI string: Taulukon pituuden arvoksi on määritettävä äärellinen positiivinen kokonaisluku", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Taulukon pituuden arvoksi on määritettävä äärellinen positiivinen kokonaisluku", function (err, _translation) {
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
describe("translating fi-FI string: Tarvitaan taulukko-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tarvitaan taulukko-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoargumentin kehäviittauksia ei tueta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoargumentin kehäviittauksia ei tueta", function (err, _translation) {
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
describe("translating fi-FI string: Korvaava argumentti ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Korvaava argumentti ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: Argumenttiluettelo on liian suuri otettavaksi käyttöön", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumenttiluettelo on liian suuri otettavaksi käyttöön", function (err, _translation) {
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
describe("translating fi-FI string: Const-ominaisuuden uudelleenmääritys", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Const-ominaisuuden uudelleenmääritys", function (err, _translation) {
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
describe("translating fi-FI string: Objektijäsentä ei voi määrittää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objektijäsentä ei voi määrittää", function (err, _translation) {
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
describe("translating fi-FI string: Muuttajaa ei ole määritetty tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Muuttajaa ei ole määritetty tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Funktion tai argumenttiobjektin caller-ominaisuuden käyttöä ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funktion tai argumenttiobjektin caller-ominaisuuden käyttöä ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Argumenttiobjektin callee-ominaisuuden käyttöä ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumenttiobjektin callee-ominaisuuden käyttöä ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Vain luku -ominaisuuksiin määritystä ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vain luku -ominaisuuksiin määritystä ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta ei voi luoda objektille, jota ei voi laajentaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta ei voi luoda objektille, jota ei voi laajentaa", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava funktio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava funktio", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava funktio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava funktio", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuudella ei voi olla sekä käyttömenetelmää että arvoa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuudella ei voi olla sekä käyttömenetelmää että arvoa", function (err, _translation) {
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
describe("translating fi-FI string: this-kohde on tyhjäarvoinen, tai sitä ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("this-kohde on tyhjäarvoinen, tai sitä ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava funktio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava funktio", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava merkkijono", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava merkkijono", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava totuusarvo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava totuusarvo", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava päivämäärä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava päivämäärä", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava luku", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava luku", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava VBArray", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava JScript-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava JScript-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava laskuriobjekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava laskuriobjekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava RegExp-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava RegExp-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen funktion argumentti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen funktion argumentti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava JScript-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava JScript-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava funktio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava funktio", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava VBArray", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen length-ominaisuus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen length-ominaisuus", function (err, _translation) {
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
describe("translating fi-FI string: Arvoksi on annettava array- tai arguments-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvoksi on annettava array- tai arguments-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen operandi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen operandi", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen operandi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen operandi", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen ominaisuuskuvaus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen ominaisuuskuvaus", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta ei voi määrittää: objekti ei ole laajennettavissa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta ei voi määrittää: objekti ei ole laajennettavissa", function (err, _translation) {
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
describe("translating fi-FI string: Ei määritettävissä olevaa ominaisuutta ei voi määrittää uudelleen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei määritettävissä olevaa ominaisuutta ei voi määrittää uudelleen", function (err, _translation) {
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
describe("translating fi-FI string: Ei kirjoitettavissa olevaa ominaisuutta ei voi muokata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei kirjoitettavissa olevaa ominaisuutta ei voi muokata", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta ei voi muokata: length-kohde ei ole kirjoitettavissa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta ei voi muokata: length-kohde ei ole kirjoitettavissa", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta ei voi määrittää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta ei voi määrittää", function (err, _translation) {
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
describe("translating fi-FI string: Tyyppimääritetyn taulukon konstruktoriargumentti ei kelpaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tyyppimääritetyn taulukon konstruktoriargumentti ei kelpaa", function (err, _translation) {
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
describe("translating fi-FI string: \"This\" ei ole tyyppimääritetyn taulukon objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"This\" ei ole tyyppimääritetyn taulukon objekti", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen siirtymä tai pituus tyyppimääritetyn taulukon luonnissa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen siirtymä tai pituus tyyppimääritetyn taulukon luonnissa", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen alku- tai loppuarvo tyyppimääritetyn taulukon alitaulukkomenetelmässä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen alku- tai loppuarvo tyyppimääritetyn taulukon alitaulukkomenetelmässä", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen lähde tyyppimääritetyssä taulukkojoukossa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen lähde tyyppimääritetyssä taulukkojoukossa", function (err, _translation) {
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
describe("translating fi-FI string: \"This\" ei ole DataView-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"This\" ei ole DataView-objekti", function (err, _translation) {
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
describe("translating fi-FI string: DataView sisältää virheellisiä argumentteja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView sisältää virheellisiä argumentteja", function (err, _translation) {
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
describe("translating fi-FI string: DataView-toiminto ylittää määritetyn puskuripituuden", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView-toiminto ylittää määritetyn puskuripituuden", function (err, _translation) {
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
describe("translating fi-FI string: DataView sisältää virheellisiä argumentteja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView sisältää virheellisiä argumentteja", function (err, _translation) {
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
describe("translating fi-FI string: virheellinen funktion allekirjoitus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("virheellinen funktion allekirjoitus", function (err, _translation) {
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
describe("translating fi-FI string: virheellinen ominaisuuden allekirjoitus", function () {
    var translation;
    before(function (done) {
        errorToEnglish("virheellinen ominaisuuden allekirjoitus", function (err, _translation) {
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
describe("translating fi-FI string: virheellinen syöteparametrin laji", function () {
    var translation;
    before(function (done) {
        errorToEnglish("virheellinen syöteparametrin laji", function (err, _translation) {
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
describe("translating fi-FI string: virheellinen tulosparametri", function () {
    var translation;
    before(function (done) {
        errorToEnglish("virheellinen tulosparametri", function (err, _translation) {
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
describe("translating fi-FI string: Funktion arguments-ominaisuuden käyttö ei ole sallittua tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funktion arguments-ominaisuuden käyttö ei ole sallittua tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Odotettiin tarkastettavaa objektia", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Odotettiin tarkastettavaa objektia", function (err, _translation) {
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
describe("translating fi-FI string: Argumentin muunnos char-tyypiksi ei onnistunut", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumentin muunnos char-tyypiksi ei onnistunut", function (err, _translation) {
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
describe("translating fi-FI string: Argumentin muunnos GUID-tyypiksi ei onnistunut", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argumentin muunnos GUID-tyypiksi ei onnistunut", function (err, _translation) {
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
describe("translating fi-FI string: Odotettiin: IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Odotettiin: IInspectable", function (err, _translation) {
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
describe("translating fi-FI string: Objektin muunnos struct-rakenteeksi ei onnistunut: odotettu ominaisuus puuttuu objektista", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objektin muunnos struct-rakenteeksi ei onnistunut: odotettu ominaisuus puuttuu objektista", function (err, _translation) {
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
describe("translating fi-FI string: Tuntematon tyyppi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tuntematon tyyppi", function (err, _translation) {
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
describe("translating fi-FI string: Funktiokutsussa ei ole riittävästi argumentteja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funktiokutsussa ei ole riittävästi argumentteja", function (err, _translation) {
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
describe("translating fi-FI string: Tyyppi ei ole konstruoitava", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tyyppi ei ole konstruoitava", function (err, _translation) {
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
describe("translating fi-FI string: Arvon muuntaminen PropertyValue-arvoksi ei onnistunut: PropertyValue ei tue tyyppiä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvon muuntaminen PropertyValue-arvoksi ei onnistunut: PropertyValue ei tue tyyppiä", function (err, _translation) {
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
describe("translating fi-FI string: Arvon muuntaminen IInspectable-arvoksi ei onnistunut: IInspectable ei tue tyyppiä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvon muuntaminen IInspectable-arvoksi ei onnistunut: IInspectable ei tue tyyppiä", function (err, _translation) {
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
describe("translating fi-FI string: Päivämääräarvon muuntaminen Windows.Foundation.DateTime-arvoksi ei onnistunut: arvo on kelvollisen alueen ulkopuolella", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Päivämääräarvon muuntaminen Windows.Foundation.DateTime-arvoksi ei onnistunut: arvo on kelvollisen alueen ulkopuolella", function (err, _translation) {
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
describe("translating fi-FI string: Arvon muuntaminen Windows.Foundation.TimeSpan-arvoksi ei onnistunut: arvo on kelvollisen alueen ulkopuolella", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvon muuntaminen Windows.Foundation.TimeSpan-arvoksi ei onnistunut: arvo on kelvollisen alueen ulkopuolella", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen vapautetun tarkastettavan objektin käyttö", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen vapautetun tarkastettavan objektin käyttö", function (err, _translation) {
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
describe("translating fi-FI string: Vapautettua tarkastettavaa objektia ei voi vapauttaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Vapautettua tarkastettavaa objektia ei voi vapauttaa", function (err, _translation) {
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
describe("translating fi-FI string: this-lause ei ole odotettua tyyppiä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("this-lause ei ole odotettua tyyppiä", function (err, _translation) {
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
describe("translating fi-FI string: Taulukolle määritetty pituus ja koko ovat virheelliset", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Taulukolle määritetty pituus ja koko ovat virheelliset", function (err, _translation) {
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
describe("translating fi-FI string: Odottamaton virhe yritettäessä hankkia metatietotietoja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Odottamaton virhe yritettäessä hankkia metatietotietoja", function (err, _translation) {
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
describe("translating fi-FI string: Tila on virhe, mutta getResults-funktio ei palauttanut virhettä", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tila on virhe, mutta getResults-funktio ei palauttanut virhettä", function (err, _translation) {
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
describe("translating fi-FI string: Suoritetulle käsittelijälle välitettiin puuttuva tai virheellinen tilan parametri", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Suoritetulle käsittelijälle välitettiin puuttuva tai virheellinen tilan parametri", function (err, _translation) {
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
describe("translating fi-FI string: Suoritetulle käsittelijälle välitettiin puuttuva tai virheellinen lähettäjän parametri", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Suoritetulle käsittelijälle välitettiin puuttuva tai virheellinen lähettäjän parametri", function (err, _translation) {
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
describe("translating fi-FI string: Ääretön", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ääretön", function (err, _translation) {
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
describe("translating fi-FI string: -Ääretön", function () {
    var translation;
    before(function (done) {
        errorToEnglish("-Ääretön", function (err, _translation) {
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
describe("translating fi-FI string: Objekti ei tue ominaisuutta tai menetelmää MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti ei tue ominaisuutta tai menetelmää MyDynamicTestString", function (err, _translation) {
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
describe("translating fi-FI string: Funktion MyDynamicTestString argumentti on pakollinen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funktion MyDynamicTestString argumentti on pakollinen", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole luku", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole luku", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole funktio", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole funktio", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole indeksoitavissa oleva objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole indeksoitavissa oleva objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole merkkijono", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole merkkijono", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole päivämääräobjekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole päivämääräobjekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString on tyhjäarvoinen, tai se ei ole objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString on tyhjäarvoinen, tai se ei ole objekti", function (err, _translation) {
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
describe("translating fi-FI string: Kohteeseen MyDynamicTestString ei voi määrittää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kohteeseen MyDynamicTestString ei voi määrittää", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole totuusarvo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole totuusarvo", function (err, _translation) {
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
describe("translating fi-FI string: Kohdetta MyDynamicTestString ei voi poistaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Kohdetta MyDynamicTestString ei voi poistaa", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole VBArray-kohde", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole VBArray-kohde", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole JavaScript-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole JavaScript-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole luettelointiobjekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole luettelointiobjekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole säännöllisen lausekkeen objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole säännöllisen lausekkeen objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole Array- tai arguments-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole Array- tai arguments-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString ei ole Array-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString ei ole Array-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuuskuvaimen määritteen MyDynamicTestString arvoksi ei voi määrittää true tälle objektille", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuuskuvaimen määritteen MyDynamicTestString arvoksi ei voi määrittää true tälle objektille", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuuskuvaimen määritteen MyDynamicTestString arvoksi ei voi määrittää false tälle objektille", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuuskuvaimen määritteen MyDynamicTestString arvoksi ei voi määrittää false tälle objektille", function (err, _translation) {
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
describe("translating fi-FI string: Const-kohteen MyDynamicTestString uudelleenmääritys", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Const-kohteen MyDynamicTestString uudelleenmääritys", function (err, _translation) {
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
describe("translating fi-FI string: Poistokutsun tekemistä kohteelle MyDynamicTestString ei sallita tarkassa tilassa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Poistokutsun tekemistä kohteelle MyDynamicTestString ei sallita tarkassa tilassa", function (err, _translation) {
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
describe("translating fi-FI string: Määrittämättömän tai tyhjän viittauksen ominaisuutta MyDynamicTestString ei voi määrittää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Määrittämättömän tai tyhjän viittauksen ominaisuutta MyDynamicTestString ei voi määrittää", function (err, _translation) {
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
describe("translating fi-FI string: Määrittämättömän tai tyhjän viittauksen ominaisuutta MyDynamicTestString ei voi noutaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Määrittämättömän tai tyhjän viittauksen ominaisuutta MyDynamicTestString ei voi noutaa", function (err, _translation) {
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
describe("translating fi-FI string: Määrittämättömän tai tyhjän viittauksen ominaisuutta MyDynamicTestString ei voi poistaa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Määrittämättömän tai tyhjän viittauksen ominaisuutta MyDynamicTestString ei voi poistaa", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta MyDynamicTestString ei voi käyttää: tyyppi VarDate ei tue käyttäjän määrittämiä ominaisuuksia", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta MyDynamicTestString ei voi käyttää: tyyppi VarDate ei tue käyttäjän määrittämiä ominaisuuksia", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuuden MyDynamicTestString arvo ei ole Function-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuuden MyDynamicTestString arvo ei ole Function-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuuden MyDynamicTestString arvo ei ole Function-objekti, vaan se on tyhjäarvoinen, tai sitä ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuuden MyDynamicTestString arvo ei ole Function-objekti, vaan se on tyhjäarvoinen, tai sitä ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde on tyhjäarvoinen, tai sitä ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde on tyhjäarvoinen, tai sitä ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole Function-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole Function-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole String-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole String-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole Boolean-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole Boolean-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole Date-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole Date-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole Number-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole Number-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole VBArray-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole VBArray-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole JavaScript-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole JavaScript-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole Enumerator-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole Enumerator-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: this-kohde ei ole RegExp-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: this-kohde ei ole RegExp-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: virheellinen argumentti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: virheellinen argumentti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentti ei ole objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentti ei ole objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentti ei ole JavaScript-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentti ei ole JavaScript-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentti ei ole Function-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentti ei ole Function-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentti ei ole VBArray-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentti ei ole VBArray-objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentti on tyhjäarvoinen, tai sitä ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentti on tyhjäarvoinen, tai sitä ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentti ei ole objekti, eikä se ole tyhjäarvoinen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentti ei ole objekti, eikä se ole tyhjäarvoinen", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentilla ei ole kelvollista length-ominaisuutta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentilla ei ole kelvollista length-ominaisuutta", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: arvoksi on annettava Array- tai arguments-objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: arvoksi on annettava Array- tai arguments-objekti", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen operandi kohteelle MyDynamicTestString: odotetaan objektia", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen operandi kohteelle MyDynamicTestString: odotetaan objektia", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen operandi kohteelle MyDynamicTestString: odotetaan funktiota", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen operandi kohteelle MyDynamicTestString: odotetaan funktiota", function (err, _translation) {
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
describe("translating fi-FI string: Virheellinen kuvain ominaisuudelle MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen kuvain ominaisuudelle MyDynamicTestString", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta MyDynamicTestString ei voi määrittää: objekti ei ole laajennettavissa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta MyDynamicTestString ei voi määrittää: objekti ei ole laajennettavissa", function (err, _translation) {
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
describe("translating fi-FI string: Ei määritettävissä olevaa ominaisuutta MyDynamicTestString ei voi määrittää uudelleen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei määritettävissä olevaa ominaisuutta MyDynamicTestString ei voi määrittää uudelleen", function (err, _translation) {
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
describe("translating fi-FI string: Ei kirjoitettavissa olevaa ominaisuutta MyDynamicTestString ei voi muokata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ei kirjoitettavissa olevaa ominaisuutta MyDynamicTestString ei voi muokata", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta MyDynamicTestString ei voi muokata: length-kohde ei ole kirjoitettavissa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta MyDynamicTestString ei voi muokata: length-kohde ei ole kirjoitettavissa", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuutta MyDynamicTestString ei voi määrittää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuutta MyDynamicTestString ei voi määrittää", function (err, _translation) {
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
describe("translating fi-FI string: DataView-menetelmän pakollista argumenttia MyDynamicTestString ei ole määritetty", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView-menetelmän pakollista argumenttia MyDynamicTestString ei ole määritetty", function (err, _translation) {
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
describe("translating fi-FI string: DataView-konstruktorin argumentti MyDynamicTestString on virheellinen", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView-konstruktorin argumentti MyDynamicTestString on virheellinen", function (err, _translation) {
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
describe("translating fi-FI string: Toiminnon MyDynamicTestString allekirjoitus on virheellinen. Toimintoa ei voi kutsua", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Toiminnon MyDynamicTestString allekirjoitus on virheellinen. Toimintoa ei voi kutsua", function (err, _translation) {
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
describe("translating fi-FI string: Ominaisuuden MyDynamicTestString allekirjoitus on virheellinen. Ominaisuutta ei voi käyttää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ominaisuuden MyDynamicTestString allekirjoitus on virheellinen. Ominaisuutta ei voi käyttää", function (err, _translation) {
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
describe("translating fi-FI string: Ajonaikainen luokka MyDynamicTestString, jonka oletusliittymäksi on määritetty Windows.Foundation.IPropertyValue, ei ole tuettu syöteparametrilajina", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ajonaikainen luokka MyDynamicTestString, jonka oletusliittymäksi on määritetty Windows.Foundation.IPropertyValue, ei ole tuettu syöteparametrilajina", function (err, _translation) {
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
describe("translating fi-FI string: Objekti, jonka liittymäksi on määritetty Windows.Foundation.IPropertyValue ja jonka ajonaikainen luokkanimi on MyDynamicTestString, ei ole tuettu tulosparametrina", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objekti, jonka liittymäksi on määritetty Windows.Foundation.IPropertyValue ja jonka ajonaikainen luokkanimi on MyDynamicTestString, ei ole tuettu tulosparametrina", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: \"this\" ei ole tarkastettava objekti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" ei ole tarkastettava objekti", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentin muuntaminen char-tyypiksi ei onnistunut", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentin muuntaminen char-tyypiksi ei onnistunut", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: argumentin muuntaminen GUID-tyypiksi ei onnistunut", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argumentin muuntaminen GUID-tyypiksi ei onnistunut", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: paluuarvon muuntaminen IInspectable-arvoksi ei onnistunut", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: paluuarvon muuntaminen IInspectable-arvoksi ei onnistunut", function (err, _translation) {
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
describe("translating fi-FI string: Objektin muuntaminen struct-rakenteeksi ei onnistunut: objektista puuttuu odotettu ominaisuus MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Objektin muuntaminen struct-rakenteeksi ei onnistunut: objektista puuttuu odotettu ominaisuus MyDynamicTestString", function (err, _translation) {
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
describe("translating fi-FI string: Tyyppiä MyDynamicTestString ei löytynyt", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tyyppiä MyDynamicTestString ei löytynyt", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: funktiokutsussa on liian vähän argumentteja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: funktiokutsussa on liian vähän argumentteja", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: tyyppi ei ole konstruoitava", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: tyyppi ei ole konstruoitava", function (err, _translation) {
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
describe("translating fi-FI string: Arvon muunnos PropertyValue-arvoksi epäonnistui: MyDynamicTestString ei ole tuettu PropertyValue-arvo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvon muunnos PropertyValue-arvoksi epäonnistui: MyDynamicTestString ei ole tuettu PropertyValue-arvo", function (err, _translation) {
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
describe("translating fi-FI string: Arvon muunnos IInspectable-arvoksi epäonnistui: MyDynamicTestString ei ole tuettu IInspectable-arvo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Arvon muunnos IInspectable-arvoksi epäonnistui: MyDynamicTestString ei ole tuettu IInspectable-arvo", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: tarkastettava objekti \"this\" on vapautettu, eikä objektia voi käyttää", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: tarkastettava objekti \"this\" on vapautettu, eikä objektia voi käyttää", function (err, _translation) {
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
describe("translating fi-FI string: this-lause ei ole odotettua tyyppiä: MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("this-lause ei ole odotettua tyyppiä: MyDynamicTestString", function (err, _translation) {
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
describe("translating fi-FI string: MyDynamicTestString: odottamaton virhe yritettäessä hankkia metatietotietoja", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: odottamaton virhe yritettäessä hankkia metatietotietoja", function (err, _translation) {
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
describe("translating fi-FI string: Määritettyä päivämäärää ei ole käytössä olevassa maakohtaisessa kalenterissa.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Määritettyä päivämäärää ei ole käytössä olevassa maakohtaisessa kalenterissa.", function (err, _translation) {
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
