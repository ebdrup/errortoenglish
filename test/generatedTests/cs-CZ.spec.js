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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
