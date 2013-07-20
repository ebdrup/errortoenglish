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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected", function () {
		expect(translation, translation).to.match(/String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected", function () {
		expect(translation, translation).to.match(/String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
