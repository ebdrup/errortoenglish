var errorToEnglish = require("../../lib/errortoenglish");
describe("translating sk-SK string: Neplatné volanie alebo neplatný argument procedúry", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatné volanie alebo neplatný argument procedúry", function (err, _translation) {
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
describe("translating sk-SK string: Pretečenie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Pretečenie", function (err, _translation) {
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
describe("translating sk-SK string: Nedostatok pamäte", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedostatok pamäte", function (err, _translation) {
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
describe("translating sk-SK string: Index je mimo rozsahu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Index je mimo rozsahu", function (err, _translation) {
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
describe("translating sk-SK string: Pole je pevné alebo dočasne zamknuté", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Pole je pevné alebo dočasne zamknuté", function (err, _translation) {
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
describe("translating sk-SK string: Delenie nulou", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Delenie nulou", function (err, _translation) {
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
describe("translating sk-SK string: Rozdielne typy", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Rozdielne typy", function (err, _translation) {
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
describe("translating sk-SK string: Nedostatok miesta v reťazci", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedostatok miesta v reťazci", function (err, _translation) {
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
describe("translating sk-SK string: Požadovaná operácia sa nedá vykonať", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Požadovaná operácia sa nedá vykonať", function (err, _translation) {
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
describe("translating sk-SK string: Nedostatok miesta v zásobníku", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedostatok miesta v zásobníku", function (err, _translation) {
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
describe("translating sk-SK string: Podprocedúra alebo funkcia sa nenašla", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Podprocedúra alebo funkcia sa nenašla", function (err, _translation) {
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
describe("translating sk-SK string: Chyba pri načítavaní knižnice DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chyba pri načítavaní knižnice DLL", function (err, _translation) {
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
describe("translating sk-SK string: Vnútorná chyba", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vnútorná chyba", function (err, _translation) {
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
describe("translating sk-SK string: Nesprávny názov alebo nesprávne číslo súboru", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesprávny názov alebo nesprávne číslo súboru", function (err, _translation) {
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
describe("translating sk-SK string: Súbor sa nenašiel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Súbor sa nenašiel", function (err, _translation) {
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
describe("translating sk-SK string: Chybný režim súboru", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chybný režim súboru", function (err, _translation) {
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
describe("translating sk-SK string: Súbor už je otvorený", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Súbor už je otvorený", function (err, _translation) {
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
describe("translating sk-SK string: Vstupno-výstupná chyba zariadenia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vstupno-výstupná chyba zariadenia", function (err, _translation) {
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
describe("translating sk-SK string: Súbor už existuje", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Súbor už existuje", function (err, _translation) {
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
describe("translating sk-SK string: Disk je plný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disk je plný", function (err, _translation) {
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
describe("translating sk-SK string: Vstup za koncom súboru", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vstup za koncom súboru", function (err, _translation) {
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
describe("translating sk-SK string: Priveľa súborov", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Priveľa súborov", function (err, _translation) {
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
describe("translating sk-SK string: Zariadenie nie je dostupné", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zariadenie nie je dostupné", function (err, _translation) {
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
describe("translating sk-SK string: Prístup bol odmietnutý", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Prístup bol odmietnutý", function (err, _translation) {
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
describe("translating sk-SK string: Disk nie je pripravený", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disk nie je pripravený", function (err, _translation) {
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
describe("translating sk-SK string: Nedá sa premenovať s použitím inej jednotky", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedá sa premenovať s použitím inej jednotky", function (err, _translation) {
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
describe("translating sk-SK string: Chyba pri prístupe k ceste alebo k súboru", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chyba pri prístupe k ceste alebo k súboru", function (err, _translation) {
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
describe("translating sk-SK string: Cesta sa nenašla", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cesta sa nenašla", function (err, _translation) {
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
describe("translating sk-SK string: Premenná objektu alebo bloku With nie je nastavená", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Premenná objektu alebo bloku With nie je nastavená", function (err, _translation) {
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
describe("translating sk-SK string: Cyklus For nie je inicializovaný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cyklus For nie je inicializovaný", function (err, _translation) {
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
describe("translating sk-SK string: Neplatné použitie konštanty Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatné použitie konštanty Null", function (err, _translation) {
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
describe("translating sk-SK string: Nemožno vytvoriť potrebný dočasný súbor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nemožno vytvoriť potrebný dočasný súbor", function (err, _translation) {
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
describe("translating sk-SK string: Vyžaduje sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vyžaduje sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Server automatizácie nemôže vytvoriť objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Server automatizácie nemôže vytvoriť objekt", function (err, _translation) {
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
describe("translating sk-SK string: Trieda nepodporuje automatizáciu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Trieda nepodporuje automatizáciu", function (err, _translation) {
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
describe("translating sk-SK string: Počas operácie automatizácie sa nenašiel názov súboru alebo triedy", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Počas operácie automatizácie sa nenašiel názov súboru alebo triedy", function (err, _translation) {
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
describe("translating sk-SK string: Objekt nepodporuje túto vlastnosť alebo metódu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt nepodporuje túto vlastnosť alebo metódu", function (err, _translation) {
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
describe("translating sk-SK string: Chyba automatizácie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chyba automatizácie", function (err, _translation) {
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
describe("translating sk-SK string: Objekt nepodporuje túto akciu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt nepodporuje túto akciu", function (err, _translation) {
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
describe("translating sk-SK string: Objekt nepodporuje pomenované argumenty", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt nepodporuje pomenované argumenty", function (err, _translation) {
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
describe("translating sk-SK string: Objekt nepodporuje miestne nastavenia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt nepodporuje miestne nastavenia", function (err, _translation) {
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
describe("translating sk-SK string: Pomenovaný argument sa nenašiel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Pomenovaný argument sa nenašiel", function (err, _translation) {
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
describe("translating sk-SK string: Argument nie je voliteľný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument nie je voliteľný", function (err, _translation) {
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
describe("translating sk-SK string: Nesprávny  počet argumentov alebo nesprávne priradenie vlastností", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesprávny  počet argumentov alebo nesprávne priradenie vlastností", function (err, _translation) {
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
describe("translating sk-SK string: Objekt nie je kolekciou", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt nie je kolekciou", function (err, _translation) {
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
describe("translating sk-SK string: Zadaná funkcia knižnice DLL sa nedá nájsť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zadaná funkcia knižnice DLL sa nedá nájsť", function (err, _translation) {
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
describe("translating sk-SK string: Premenná používa typ automatizácie, ktorý nie je podporovaný jazykom JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Premenná používa typ automatizácie, ktorý nie je podporovaný jazykom JavaScript", function (err, _translation) {
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
describe("translating sk-SK string: Vzdialený server neexistuje alebo nie je k dispozícii", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vzdialený server neexistuje alebo nie je k dispozícii", function (err, _translation) {
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
describe("translating sk-SK string: Premennej sa nedá priradiť hodnota", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Premennej sa nedá priradiť hodnota", function (err, _translation) {
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
describe("translating sk-SK string: Spracovanie objektu skriptom nie je bezpečné", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Spracovanie objektu skriptom nie je bezpečné", function (err, _translation) {
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
describe("translating sk-SK string: Inicializácia objektu nie je bezpečná", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inicializácia objektu nie je bezpečná", function (err, _translation) {
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
describe("translating sk-SK string: Vytvorenie objektu nie je bezpečné", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vytvorenie objektu nie je bezpečné", function (err, _translation) {
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
describe("translating sk-SK string: Vyskytla sa výnimka", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vyskytla sa výnimka", function (err, _translation) {
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
describe("translating sk-SK string: Nedostatok pamäte", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedostatok pamäte", function (err, _translation) {
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
describe("translating sk-SK string: Syntaktická chyba", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaktická chyba", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa ':'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa ';'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa '('", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa ')'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa ']'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa ']'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa '{'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa '}'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa identifikátor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa identifikátor", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa '='", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa '/'", function (err, _translation) {
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
describe("translating sk-SK string: Neplatné číslo", function () {
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
describe("translating sk-SK string: Neplatný znak", function () {
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
describe("translating sk-SK string: Neukončená reťazcová konštanta", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neukončená reťazcová konštanta", function (err, _translation) {
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
describe("translating sk-SK string: Neukončený komentár", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neukončený komentár", function (err, _translation) {
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
describe("translating sk-SK string: Príkaz 'return' mimo funkcie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Príkaz 'return' mimo funkcie", function (err, _translation) {
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
describe("translating sk-SK string: Príkaz 'break' nemožno použiť mimo cyklu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Príkaz 'break' nemožno použiť mimo cyklu", function (err, _translation) {
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
describe("translating sk-SK string: Príkaz 'continue' nemožno použiť mimo cyklu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Príkaz 'continue' nemožno použiť mimo cyklu", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa hexadecimálna číslica", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa hexadecimálna číslica", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa 'while'", function (err, _translation) {
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
describe("translating sk-SK string: Návestie sa predefinovalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Návestie sa predefinovalo", function (err, _translation) {
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
describe("translating sk-SK string: Menovka sa nedá nájsť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Menovka sa nedá nájsť", function (err, _translation) {
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
describe("translating sk-SK string: 'default' sa môže v príkaze 'switch' nachádzať len raz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' sa môže v príkaze 'switch' nachádzať len raz", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa identifikátor, reťazec alebo číslo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa identifikátor, reťazec alebo číslo", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa '@end'", function (err, _translation) {
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
describe("translating sk-SK string: Podmienená kompilácia je vypnutá", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Podmienená kompilácia je vypnutá", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa konštanta", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa konštanta", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa '@'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa 'catch'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa 'var'", function (err, _translation) {
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
describe("translating sk-SK string: Za príkazom throw musí na tom istom zdrojovom riadku nasledovať výraz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Za príkazom throw musí na tom istom zdrojovom riadku nasledovať výraz", function (err, _translation) {
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
describe("translating sk-SK string: Prehlásenia with nie sú v prísnom režime povolené", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Prehlásenia with nie sú v prísnom režime povolené", function (err, _translation) {
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
describe("translating sk-SK string: Duplikáty názvov formálnych parametrov nie sú povolené v prísnom režime", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Duplikáty názvov formálnych parametrov nie sú povolené v prísnom režime", function (err, _translation) {
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
describe("translating sk-SK string: Osmičkové číselné explicitné hodnoty premennej a znaky ukončenia nie sú v prísnom režime povolené", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Osmičkové číselné explicitné hodnoty premennej a znaky ukončenia nie sú v prísnom režime povolené", function (err, _translation) {
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
describe("translating sk-SK string: Neplatné použitie výrazu eval v prísnom režime", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatné použitie výrazu eval v prísnom režime", function (err, _translation) {
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
describe("translating sk-SK string: Neplatné použitie argumentov v prísnom režime", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatné použitie argumentov v prísnom režime", function (err, _translation) {
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
describe("translating sk-SK string: Volanie funkcie odstránenia pre výraz v prísnom režime nie je povolené", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Volanie funkcie odstránenia pre výraz v prísnom režime nie je povolené", function (err, _translation) {
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
describe("translating sk-SK string: Viac definícií vlastnosti nie je v prísnom režime povolených", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Viac definícií vlastnosti nie je v prísnom režime povolených", function (err, _translation) {
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
describe("translating sk-SK string: Deklarácie funkcií nemôžu byť v prísnom režime vnorené v príkaze alebo bloku. Môžu sa zobraziť len na najvyššej úrovni alebo priamo v tele funkcie.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Deklarácie funkcií nemôžu byť v prísnom režime vnorené v príkaze alebo bloku. Môžu sa zobraziť len na najvyššej úrovni alebo priamo v tele funkcie.", function (err, _translation) {
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
describe("translating sk-SK string: Používanie kľúčového slova ako identifikátora je neplatné.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Používanie kľúčového slova ako identifikátora je neplatné.", function (err, _translation) {
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
describe("translating sk-SK string: Používanie budúceho vyhradeného slova ako identifikátora je neplatné.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Používanie budúceho vyhradeného slova ako identifikátora je neplatné.", function (err, _translation) {
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
describe("translating sk-SK string: Používanie budúceho vyhradeného slova ako identifikátora je neplatné. Názov identifikátora je vyhradený v prísnom režime.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Používanie budúceho vyhradeného slova ako identifikátora je neplatné. Názov identifikátora je vyhradený v prísnom režime.", function (err, _translation) {
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
describe("translating sk-SK string: Funkcie metódy Setter musia mať jeden argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funkcie metódy Setter musia mať jeden argument", function (err, _translation) {
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
describe("translating sk-SK string: JavaScript – chyba kompilácie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript – chyba kompilácie", function (err, _translation) {
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
describe("translating sk-SK string: JavaScript – chyba počas práce", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript – chyba počas práce", function (err, _translation) {
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
describe("translating sk-SK string: Neznáma chyba počas práce", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neznáma chyba počas práce", function (err, _translation) {
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
describe("translating sk-SK string: Nemožno priradiť hodnotu premennej 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nemožno priradiť hodnotu premennej 'this'", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa číslo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa číslo", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa funkcia", function (err, _translation) {
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
describe("translating sk-SK string: K výsledku funkcie nemožno priradiť hodnotu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("K výsledku funkcie nemožno priradiť hodnotu", function (err, _translation) {
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
describe("translating sk-SK string: Objekt sa nedá indexovať", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt sa nedá indexovať", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa reťazec", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa reťazec", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt typu dátum", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt typu dátum", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Neplatná ľavá strana v priradení", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatná ľavá strana v priradení", function (err, _translation) {
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
describe("translating sk-SK string: Nedefinovaný identifikátor", function () {
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
describe("translating sk-SK string: Očakáva sa objekt typu boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt typu boolean", function (err, _translation) {
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
describe("translating sk-SK string: Nemožno vykonať kód z uvoľneného skriptu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nemožno vykonať kód z uvoľneného skriptu", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa člen objektu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa člen objektu", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt VBArray", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt jazyka JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt jazyka JavaScript", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt Enumerator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt Enumerator", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt typu Regular Expression", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt typu Regular Expression", function (err, _translation) {
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
describe("translating sk-SK string: Syntaktická chyba v regulárnom výraze", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Syntaktická chyba v regulárnom výraze", function (err, _translation) {
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
describe("translating sk-SK string: Neočakávaný kvantifikátor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neočakávaný kvantifikátor", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa ']' v regulárnom výraze", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa ']' v regulárnom výraze", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa ')' v regulárnom výraze", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa ')' v regulárnom výraze", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný rozsah znakovej sady", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný rozsah znakovej sady", function (err, _translation) {
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
describe("translating sk-SK string: Výnimka bola vygenerovaná, ale nebola zachytená", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Výnimka bola vygenerovaná, ale nebola zachytená", function (err, _translation) {
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
describe("translating sk-SK string: Funkcia neobsahuje platný objekt prototypu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funkcia neobsahuje platný objekt prototypu", function (err, _translation) {
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
describe("translating sk-SK string: Kódované URI obsahuje neplatný znak", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kódované URI obsahuje neplatný znak", function (err, _translation) {
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
describe("translating sk-SK string: Dekódované URI nemá platné kódovanie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dekódované URI nemá platné kódovanie", function (err, _translation) {
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
describe("translating sk-SK string: Počet desatinných miest je mimo rozsahu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Počet desatinných miest je mimo rozsahu", function (err, _translation) {
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
describe("translating sk-SK string: Presnosť je mimo rozsahu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Presnosť je mimo rozsahu", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt typu Array alebo argumenty", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt typu Array alebo argumenty", function (err, _translation) {
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
describe("translating sk-SK string: Dĺžka poľa musí byť konečné celé kladné číslo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dĺžka poľa musí byť konečné celé kladné číslo", function (err, _translation) {
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
describe("translating sk-SK string: Dĺžke poľa musí byť priradené konečné celé kladné číslo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dĺžke poľa musí byť priradené konečné celé kladné číslo", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt typu Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt typu Array", function (err, _translation) {
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
describe("translating sk-SK string: Zacyklený odkaz v argumente hodnoty nie je podporovaný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zacyklený odkaz v argumente hodnoty nie je podporovaný", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný argument náhrady", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný argument náhrady", function (err, _translation) {
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
describe("translating sk-SK string: Zoznam argumentov je príliš dlhý a nedá sa použiť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zoznam argumentov je príliš dlhý a nedá sa použiť", function (err, _translation) {
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
describe("translating sk-SK string: Opakovaná deklarácia vlastnosti const", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Opakovaná deklarácia vlastnosti const", function (err, _translation) {
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
describe("translating sk-SK string: Člen objektu sa nedá konfigurovať", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Člen objektu sa nedá konfigurovať", function (err, _translation) {
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
describe("translating sk-SK string: Nedefinovaná premenná v prísnom režime", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedefinovaná premenná v prísnom režime", function (err, _translation) {
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
describe("translating sk-SK string: Prístup k vlastnosti caller objektu funkcie alebo argumentov nie je v prísnom režime povolený.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Prístup k vlastnosti caller objektu funkcie alebo argumentov nie je v prísnom režime povolený.", function (err, _translation) {
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
describe("translating sk-SK string: Prístup k vlastnosti callee objektu argumentov nie je v prísnom režime povolený.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Prístup k vlastnosti callee objektu argumentov nie je v prísnom režime povolený.", function (err, _translation) {
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
describe("translating sk-SK string: Priradenie k vlastnostiam určeným iba na čítanie nie je v prísnom režime povolené.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Priradenie k vlastnostiam určeným iba na čítanie nie je v prísnom režime povolené.", function (err, _translation) {
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
describe("translating sk-SK string: Nedá sa vytvoriť vlastnosť pre nerozšíriteľný objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedá sa vytvoriť vlastnosť pre nerozšíriteľný objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa funkcia", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa funkcia", function (err, _translation) {
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
describe("translating sk-SK string: Vlastnosť nemôže mať definované pristupovače zároveň s hodnotou", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vlastnosť nemôže mať definované pristupovače zároveň s hodnotou", function (err, _translation) {
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
describe("translating sk-SK string: Parameter 'this' má hodnotu null alebo nie je definovaný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Parameter 'this' má hodnotu null alebo nie je definovaný", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa funkcia", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa reťazec", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa reťazec", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt typu boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt typu boolean", function (err, _translation) {
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
describe("translating sk-SK string: Očakávaný dátum", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakávaný dátum", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa číslo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa číslo", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt VBArray", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt jazyka JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt jazyka JavaScript", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt Enumerator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt Enumerator", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt RegExp", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný argument funkcie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný argument funkcie", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt jazyka JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt jazyka JavaScript", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa funkcia", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt VBArray", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Neplatná vlastnosť length", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatná vlastnosť length", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa pole alebo objekt argumentov", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa pole alebo objekt argumentov", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný operand", function () {
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
describe("translating sk-SK string: Neplatný operand", function () {
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
describe("translating sk-SK string: Neplatný popisovač vlastnosti", function () {
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
describe("translating sk-SK string: Vlastnosť sa nepodarilo definovať: objekt nie je rozšíriteľný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vlastnosť sa nepodarilo definovať: objekt nie je rozšíriteľný", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné predefinovať nekonfigurovateľnú vlastnosť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné predefinovať nekonfigurovateľnú vlastnosť", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné upraviť nezapisovateľnú vlastnosť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné upraviť nezapisovateľnú vlastnosť", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné upraviť vlastnosť: vlastnosť length nie je zapisovateľná", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné upraviť vlastnosť: vlastnosť length nie je zapisovateľná", function (err, _translation) {
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
describe("translating sk-SK string: Vlastnosť nie je možné definovať", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Vlastnosť nie je možné definovať", function (err, _translation) {
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
describe("translating sk-SK string: Argument konštruktora zadaného poľa je neplatný.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument konštruktora zadaného poľa je neplatný.", function (err, _translation) {
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
describe("translating sk-SK string: „toto“ nie je objekt zadaného poľa.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„toto“ nie je objekt zadaného poľa.", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný posun alebo neplatná dĺžka pri vytváraní zadaného poľa", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný posun alebo neplatná dĺžka pri vytváraní zadaného poľa", function (err, _translation) {
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
describe("translating sk-SK string: Neplatná počiatočná alebo koncová hodnota v metóde podpolí zadaných polí", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatná počiatočná alebo koncová hodnota v metóde podpolí zadaných polí", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný zdroj v množine zadaných polí", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný zdroj v množine zadaných polí", function (err, _translation) {
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
describe("translating sk-SK string: „toto“ nie je objekt knižnice DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„toto“ nie je objekt knižnice DataView", function (err, _translation) {
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
describe("translating sk-SK string: Neplatné argumenty v knižnici DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatné argumenty v knižnici DataView", function (err, _translation) {
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
describe("translating sk-SK string: Prístup k operácii knižnice DataView prekročil zadanú dĺžku medzipamäte.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Prístup k operácii knižnice DataView prekročil zadanú dĺžku medzipamäte.", function (err, _translation) {
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
describe("translating sk-SK string: Neplatné argumenty v knižnici DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatné argumenty v knižnici DataView", function (err, _translation) {
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
describe("translating sk-SK string: neplatný podpis funkcie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("neplatný podpis funkcie", function (err, _translation) {
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
describe("translating sk-SK string: neplatný podpis vlastnosti", function () {
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
describe("translating sk-SK string: neplatný typ vstupného parametra", function () {
	var translation;
	before(function (done) {
		errorToEnglish("neplatný typ vstupného parametra", function (err, _translation) {
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
describe("translating sk-SK string: neplatný výstupný parameter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("neplatný výstupný parameter", function (err, _translation) {
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
describe("translating sk-SK string: Prístup k vlastnosti arguments funkcie nie je v prísnom režime povolený.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Prístup k vlastnosti arguments funkcie nie je v prísnom režime povolený.", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa kontrolovateľný objekt.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa kontrolovateľný objekt.", function (err, _translation) {
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
describe("translating sk-SK string: Argument sa nepodarilo skonvertovať na typ char", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument sa nepodarilo skonvertovať na typ char", function (err, _translation) {
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
describe("translating sk-SK string: Argument sa nepodarilo skonvertovať na typ GUID", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument sa nepodarilo skonvertovať na typ GUID", function (err, _translation) {
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
describe("translating sk-SK string: Očakáva sa parameter IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Očakáva sa parameter IInspectable", function (err, _translation) {
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
describe("translating sk-SK string: Objekt sa nepodarilo skonvertovať na štruktúru: objektu chýba očakávaná vlastnosť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt sa nepodarilo skonvertovať na štruktúru: objektu chýba očakávaná vlastnosť", function (err, _translation) {
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
describe("translating sk-SK string: Neznámy typ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neznámy typ", function (err, _translation) {
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
describe("translating sk-SK string: Funkcia bola vyvolaná pomocou príliš malého množstva argumentov", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funkcia bola vyvolaná pomocou príliš malého množstva argumentov", function (err, _translation) {
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
describe("translating sk-SK string: Typ nemožno zostaviť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typ nemožno zostaviť", function (err, _translation) {
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
describe("translating sk-SK string: Hodnotu sa nepodarilo skonvertovať na parameter PropertyValue: typ nie je podporovaný parametrom PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hodnotu sa nepodarilo skonvertovať na parameter PropertyValue: typ nie je podporovaný parametrom PropertyValue", function (err, _translation) {
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
describe("translating sk-SK string: Hodnotu sa nepodarilo skonvertovať na parameter IInspectable: typ nie je podporovaný parametrom IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hodnotu sa nepodarilo skonvertovať na parameter IInspectable: typ nie je podporovaný parametrom IInspectable", function (err, _translation) {
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
describe("translating sk-SK string: Dátum sa nepodarilo skonvertovať na parameter Windows.Foundation.DateTime: hodnota mimo platného rozsahu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dátum sa nepodarilo skonvertovať na parameter Windows.Foundation.DateTime: hodnota mimo platného rozsahu", function (err, _translation) {
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
describe("translating sk-SK string: Hodnotu sa nepodarilo skonvertovať na parameter Windows.Foundation.TimeSpan: hodnota mimo platného rozsahu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hodnotu sa nepodarilo skonvertovať na parameter Windows.Foundation.TimeSpan: hodnota mimo platného rozsahu", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný prístup k už uvoľnenému kontrolovateľnému objektu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný prístup k už uvoľnenému kontrolovateľnému objektu", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné uvoľniť už uvoľnený kontrolovateľný objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné uvoľniť už uvoľnený kontrolovateľný objekt", function (err, _translation) {
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
describe("translating sk-SK string: „toto“ nie je očakávaného typu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„toto“ nie je očakávaného typu", function (err, _translation) {
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
describe("translating sk-SK string: Bola zadaná nepovolená dĺžka a veľkosť poľa", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bola zadaná nepovolená dĺžka a veľkosť poľa", function (err, _translation) {
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
describe("translating sk-SK string: Pri získavaní informácií o metaúdajoch sa vyskytla neočakávaná chyba", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Pri získavaní informácií o metaúdajoch sa vyskytla neočakávaná chyba", function (err, _translation) {
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
describe("translating sk-SK string: Stav je „chyba“, ale metóda getResults nevrátila chybu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Stav je „chyba“, ale metóda getResults nevrátila chybu", function (err, _translation) {
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
describe("translating sk-SK string: Do dokončeného obslužného programu sa odovzdal chýbajúci alebo neplatný parameter stavu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Do dokončeného obslužného programu sa odovzdal chýbajúci alebo neplatný parameter stavu", function (err, _translation) {
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
describe("translating sk-SK string: Do dokončeného obslužného programu sa odovzdal chýbajúci alebo neplatný parameter odosielateľa", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Do dokončeného obslužného programu sa odovzdal chýbajúci alebo neplatný parameter odosielateľa", function (err, _translation) {
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
describe("translating sk-SK string: Nekonečno", function () {
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
describe("translating sk-SK string: -Nekonečno", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Nekonečno", function (err, _translation) {
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
describe("translating sk-SK string: Objekt nepodporuje vlastnosť alebo metódu MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt nepodporuje vlastnosť alebo metódu MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Argument pre funkciu MyDynamicTestString nie je voliteľný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument pre funkciu MyDynamicTestString nie je voliteľný", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je číslo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je číslo", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je funkcia", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je indexovateľný objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je indexovateľný objekt", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je reťazec", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je reťazec", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt typu dátum", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt typu dátum", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString má hodnotu null alebo nie je objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString má hodnotu null alebo nie je objekt", function (err, _translation) {
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
describe("translating sk-SK string: Nemožno priradiť hodnotu k objektu MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nemožno priradiť hodnotu k objektu MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Objekt MyDynamicTestString nie je definovaný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt MyDynamicTestString nie je definovaný", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt typu boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt typu boolean", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString sa nedá odstrániť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString sa nedá odstrániť", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt typu VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt typu VBArray", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt jazyka JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt jazyka JavaScript", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt vymenovaného typu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt vymenovaného typu", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt typu výraz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt typu výraz", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt typu Array ani argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt typu Array ani argument", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString nie je objekt typu Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie je objekt typu Array", function (err, _translation) {
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
describe("translating sk-SK string: Atribút MyDynamicTestString na popisovači vlastnosti tohto objektu nie je možné nastaviť na hodnotu pravda", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Atribút MyDynamicTestString na popisovači vlastnosti tohto objektu nie je možné nastaviť na hodnotu pravda", function (err, _translation) {
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
describe("translating sk-SK string: Atribút MyDynamicTestString na popisovači vlastnosti tohto objektu nie je možné nastaviť na hodnotu nepravda", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Atribút MyDynamicTestString na popisovači vlastnosti tohto objektu nie je možné nastaviť na hodnotu nepravda", function (err, _translation) {
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
describe("translating sk-SK string: Opakovaná deklarácia konštanty MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Opakovaná deklarácia konštanty MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Volanie funkcie odstránenia pre funkciu MyDynamicTestString nie je v prísnom režime povolené.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Volanie funkcie odstránenia pre funkciu MyDynamicTestString nie je v prísnom režime povolené.", function (err, _translation) {
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
describe("translating sk-SK string: Nemožno nastaviť vlastnosť MyDynamicTestString nedefinovaného odkazu alebo odkazu s hodnotou null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nemožno nastaviť vlastnosť MyDynamicTestString nedefinovaného odkazu alebo odkazu s hodnotou null", function (err, _translation) {
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
describe("translating sk-SK string: Nemožno získať vlastnosť MyDynamicTestString nedefinovaného odkazu alebo odkazu s hodnotou null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nemožno získať vlastnosť MyDynamicTestString nedefinovaného odkazu alebo odkazu s hodnotou null", function (err, _translation) {
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
describe("translating sk-SK string: Nemožno odstrániť vlastnosť MyDynamicTestString nedefinovaného odkazu alebo odkazu s hodnotou null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nemožno odstrániť vlastnosť MyDynamicTestString nedefinovaného odkazu alebo odkazu s hodnotou null", function (err, _translation) {
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
describe("translating sk-SK string: Nedá sa pristupovať k vlastnosti MyDynamicTestString: typ VarDate nepodporuje vlastnosti definované používateľom", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nedá sa pristupovať k vlastnosti MyDynamicTestString: typ VarDate nepodporuje vlastnosti definované používateľom", function (err, _translation) {
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
describe("translating sk-SK string: Hodnota vlastnosti MyDynamicTestString nie je objektom typu Funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hodnota vlastnosti MyDynamicTestString nie je objektom typu Funkcia", function (err, _translation) {
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
describe("translating sk-SK string: Hodnota vlastnosti MyDynamicTestString je null alebo nie je definovaná, a nie je objektom typu Funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hodnota vlastnosti MyDynamicTestString je null alebo nie je definovaná, a nie je objektom typu Funkcia", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' má hodnotu null alebo nie je definovaný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' má hodnotu null alebo nie je definovaný", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je objektom", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je objektom", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je objektom typu Funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je objektom typu Funkcia", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je objektom typu Reťazec", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je objektom typu Reťazec", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je booleovským objektom", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je booleovským objektom", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je objektom typu Dátum", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je objektom typu Dátum", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je nie je objektom typu Číslo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je nie je objektom typu Číslo", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je objektom VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je objektom VBArray", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je objektom jazyka JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je objektom jazyka JavaScript", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je objektom vymenovaného typu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je objektom vymenovaného typu", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: parameter 'this' nie je nie je objektom RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: parameter 'this' nie je nie je objektom RegExp", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: neplatný argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: neplatný argument", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument nie je objektom", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie je objektom", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument nie je objektom jazyka JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie je objektom jazyka JavaScript", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument nie je objektom typu Funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie je objektom typu Funkcia", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument nie je objektom VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie je objektom VBArray", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument má hodnotu null alebo nie je definovaný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument má hodnotu null alebo nie je definovaný", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument nie je objektom a nemá hodnotu null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie je objektom a nemá hodnotu null", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument nemá platnú vlastnosť length", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nemá platnú vlastnosť length", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: očakáva sa pole alebo objekt argumentov", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: očakáva sa pole alebo objekt argumentov", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný operand pre parameter MyDynamicTestString: očakáva sa objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný operand pre parameter MyDynamicTestString: očakáva sa objekt", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný operand pre parameter MyDynamicTestString: očakáva sa funkcia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný operand pre parameter MyDynamicTestString: očakáva sa funkcia", function (err, _translation) {
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
describe("translating sk-SK string: Neplatný popisovač vlastnosti MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Neplatný popisovač vlastnosti MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné definovať vlastnosť MyDynamicTestString: objekt nie je rozšíriteľný", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné definovať vlastnosť MyDynamicTestString: objekt nie je rozšíriteľný", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné predefinovať nekonfigurovateľnú vlastnosť MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné predefinovať nekonfigurovateľnú vlastnosť MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné upraviť nezapisovateľnú vlastnosť MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné upraviť nezapisovateľnú vlastnosť MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné upraviť vlastnosť MyDynamicTestString: vlastnosť length nie je zapisovateľná", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné upraviť vlastnosť MyDynamicTestString: vlastnosť length nie je zapisovateľná", function (err, _translation) {
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
describe("translating sk-SK string: Nie je možné definovať vlastnosť MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je možné definovať vlastnosť MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Nie je zadaný požadovaný argument MyDynamicTestString v metóde knižnice DataView.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie je zadaný požadovaný argument MyDynamicTestString v metóde knižnice DataView.", function (err, _translation) {
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
describe("translating sk-SK string: Argument konštruktora knižnice DataView MyDynamicTestString je neplatný.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument konštruktora knižnice DataView MyDynamicTestString je neplatný.", function (err, _translation) {
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
describe("translating sk-SK string: Podpis funkcie MyDynamicTestString je neplatný a funkciu nemožno volať.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Podpis funkcie MyDynamicTestString je neplatný a funkciu nemožno volať.", function (err, _translation) {
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
describe("translating sk-SK string: Podpis vlastnosti MyDynamicTestString je neplatný a vlastnosť je neprístupná.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Podpis vlastnosti MyDynamicTestString je neplatný a vlastnosť je neprístupná.", function (err, _translation) {
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
describe("translating sk-SK string: Trieda modulu runtime MyDynamicTestString, ktorej predvoleným rozhraním je Windows.Foundation.IPropertyValue, nie je podporovaná ako typ vstupného parametra.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Trieda modulu runtime MyDynamicTestString, ktorej predvoleným rozhraním je Windows.Foundation.IPropertyValue, nie je podporovaná ako typ vstupného parametra.", function (err, _translation) {
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
describe("translating sk-SK string: Objekt s rozhraním Windows.Foundation.IPropertyValue a názvom triedy modulu runtime MyDynamicTestString nie je podporovaný ako výstupný parameter.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt s rozhraním Windows.Foundation.IPropertyValue a názvom triedy modulu runtime MyDynamicTestString nie je podporovaný ako výstupný parameter.", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: „toto“ nie je kontrolovateľný objekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: „toto“ nie je kontrolovateľný objekt", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument sa nepodarilo skonvertovať na typ char", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument sa nepodarilo skonvertovať na typ char", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: argument sa nepodarilo skonvertovať na typ GUID", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument sa nepodarilo skonvertovať na typ GUID", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: vrátenú hodnotu sa nepodarilo skonvertovať na parameter IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: vrátenú hodnotu sa nepodarilo skonvertovať na parameter IInspectable", function (err, _translation) {
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
describe("translating sk-SK string: Objekt sa nepodarilo skonvertovať na štruktúru: objektu chýba očakávaná vlastnosť MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objekt sa nepodarilo skonvertovať na štruktúru: objektu chýba očakávaná vlastnosť MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: Typ MyDynamicTestString sa nenašiel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typ MyDynamicTestString sa nenašiel", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: funkcia vyvolaná pomocou príliš malého množstva argumentov", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: funkcia vyvolaná pomocou príliš malého množstva argumentov", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: typ nemožno zostaviť", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: typ nemožno zostaviť", function (err, _translation) {
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
describe("translating sk-SK string: Hodnotu sa nepodarilo sa skonvertovať na parameter PropertyValue: MyDynamicTestString – nepodporované parametrom PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hodnotu sa nepodarilo sa skonvertovať na parameter PropertyValue: MyDynamicTestString – nepodporované parametrom PropertyValue", function (err, _translation) {
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
describe("translating sk-SK string: Hodnotu sa nepodarilo sa skonvertovať na parameter IInspectable: MyDynamicTestString – nepodporované parametrom IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hodnotu sa nepodarilo sa skonvertovať na parameter IInspectable: MyDynamicTestString – nepodporované parametrom IInspectable", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: Kontrolovateľný objekt „toto“ je uvoľnený a nemožno k nemu získať prístup", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Kontrolovateľný objekt „toto“ je uvoľnený a nemožno k nemu získať prístup", function (err, _translation) {
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
describe("translating sk-SK string: „toto“ nie je očakávaného typu: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„toto“ nie je očakávaného typu: MyDynamicTestString", function (err, _translation) {
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
describe("translating sk-SK string: MyDynamicTestString: pri získavaní informácií o metaúdajoch sa vyskytla neočakávaná chyba", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: pri získavaní informácií o metaúdajoch sa vyskytla neočakávaná chyba", function (err, _translation) {
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
describe("translating sk-SK string: Zadaný dátum nie je dostupný v kalendári aktuálneho národného prostredia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zadaný dátum nie je dostupný v kalendári aktuálneho národného prostredia", function (err, _translation) {
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
