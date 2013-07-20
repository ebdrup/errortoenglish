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

	it("should return the english version: Invalid procedure call or argument", function () {
		expect(translation, translation).to.equal("Invalid procedure call or argument");
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

	it("should return the english version: Overflow", function () {
		expect(translation, translation).to.equal("Overflow");
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

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
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

	it("should return the english version: Subscript out of range", function () {
		expect(translation, translation).to.equal("Subscript out of range");
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

	it("should return the english version: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.equal("This array is fixed or temporarily locked");
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

	it("should return the english version: Division by zero", function () {
		expect(translation, translation).to.equal("Division by zero");
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

	it("should return the english version: Type mismatch", function () {
		expect(translation, translation).to.equal("Type mismatch");
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

	it("should return the english version: Out of string space", function () {
		expect(translation, translation).to.equal("Out of string space");
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

	it("should return the english version: Can't perform requested operation", function () {
		expect(translation, translation).to.equal("Can't perform requested operation");
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

	it("should return the english version: Out of stack space", function () {
		expect(translation, translation).to.equal("Out of stack space");
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

	it("should return the english version: Sub or Function not defined", function () {
		expect(translation, translation).to.equal("Sub or Function not defined");
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

	it("should return the english version: Error in loading DLL", function () {
		expect(translation, translation).to.equal("Error in loading DLL");
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

	it("should return the english version: Internal error", function () {
		expect(translation, translation).to.equal("Internal error");
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

	it("should return the english version: Bad file name or number", function () {
		expect(translation, translation).to.equal("Bad file name or number");
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

	it("should return the english version: File not found", function () {
		expect(translation, translation).to.equal("File not found");
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

	it("should return the english version: Bad file mode", function () {
		expect(translation, translation).to.equal("Bad file mode");
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

	it("should return the english version: File already open", function () {
		expect(translation, translation).to.equal("File already open");
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

	it("should return the english version: Device I/O error", function () {
		expect(translation, translation).to.equal("Device I/O error");
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

	it("should return the english version: File already exists", function () {
		expect(translation, translation).to.equal("File already exists");
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

	it("should return the english version: Disk full", function () {
		expect(translation, translation).to.equal("Disk full");
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

	it("should return the english version: Input past end of file", function () {
		expect(translation, translation).to.equal("Input past end of file");
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

	it("should return the english version: Too many files", function () {
		expect(translation, translation).to.equal("Too many files");
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

	it("should return the english version: Device unavailable", function () {
		expect(translation, translation).to.equal("Device unavailable");
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

	it("should return the english version: Permission denied", function () {
		expect(translation, translation).to.equal("Permission denied");
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

	it("should return the english version: Disk not ready", function () {
		expect(translation, translation).to.equal("Disk not ready");
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

	it("should return the english version: Can't rename with different drive", function () {
		expect(translation, translation).to.equal("Can't rename with different drive");
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

	it("should return the english version: Path/File access error", function () {
		expect(translation, translation).to.equal("Path/File access error");
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

	it("should return the english version: Path not found", function () {
		expect(translation, translation).to.equal("Path not found");
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

	it("should return the english version: Object variable or With block variable not set", function () {
		expect(translation, translation).to.equal("Object variable or With block variable not set");
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

	it("should return the english version: For loop not initialized", function () {
		expect(translation, translation).to.equal("For loop not initialized");
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

	it("should return the english version: Invalid use of Null", function () {
		expect(translation, translation).to.equal("Invalid use of Null");
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

	it("should return the english version: Can't create necessary temporary file", function () {
		expect(translation, translation).to.equal("Can't create necessary temporary file");
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

	it("should return the english version: Object required", function () {
		expect(translation, translation).to.equal("Object required");
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

	it("should return the english version: Automation server can't create object", function () {
		expect(translation, translation).to.equal("Automation server can't create object");
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

	it("should return the english version: Class doesn't support Automation", function () {
		expect(translation, translation).to.equal("Class doesn't support Automation");
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

	it("should return the english version: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.equal("File name or class name not found during Automation operation");
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

	it("should return the english version: Object doesn't support this property or method", function () {
		expect(translation, translation).to.equal("Object doesn't support this property or method");
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

	it("should return the english version: Automation error", function () {
		expect(translation, translation).to.equal("Automation error");
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

	it("should return the english version: Object doesn't support this action", function () {
		expect(translation, translation).to.equal("Object doesn't support this action");
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

	it("should return the english version: Object doesn't support named arguments", function () {
		expect(translation, translation).to.equal("Object doesn't support named arguments");
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

	it("should return the english version: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.equal("Object doesn't support current locale setting");
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

	it("should return the english version: Named argument not found", function () {
		expect(translation, translation).to.equal("Named argument not found");
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

	it("should return the english version: Argument not optional", function () {
		expect(translation, translation).to.equal("Argument not optional");
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

	it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.equal("Wrong number of arguments or invalid property assignment");
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

	it("should return the english version: Object not a collection", function () {
		expect(translation, translation).to.equal("Object not a collection");
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

	it("should return the english version: Specified DLL function not found", function () {
		expect(translation, translation).to.equal("Specified DLL function not found");
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

	it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

	it("should return the english version: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.equal("The remote server machine does not exist or is unavailable");
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

	it("should return the english version: Cannot assign to variable", function () {
		expect(translation, translation).to.equal("Cannot assign to variable");
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

	it("should return the english version: Object not safe for scripting", function () {
		expect(translation, translation).to.equal("Object not safe for scripting");
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

	it("should return the english version: Object not safe for initializing", function () {
		expect(translation, translation).to.equal("Object not safe for initializing");
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

	it("should return the english version: Object not safe for creating", function () {
		expect(translation, translation).to.equal("Object not safe for creating");
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

	it("should return the english version: An exception occurred", function () {
		expect(translation, translation).to.equal("An exception occurred");
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

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
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

	it("should return the english version: Syntax error", function () {
		expect(translation, translation).to.equal("Syntax error");
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

	it("should return the english version: Expected ':'", function () {
		expect(translation, translation).to.equal("Expected ':'");
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

	it("should return the english version: Expected ';'", function () {
		expect(translation, translation).to.equal("Expected ';'");
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

	it("should return the english version: Expected '('", function () {
		expect(translation, translation).to.equal("Expected '('");
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

	it("should return the english version: Expected ')'", function () {
		expect(translation, translation).to.equal("Expected ')'");
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

	it("should return the english version: Expected ']'", function () {
		expect(translation, translation).to.equal("Expected ']'");
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

	it("should return the english version: Expected '{'", function () {
		expect(translation, translation).to.equal("Expected '{'");
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

	it("should return the english version: Expected '}'", function () {
		expect(translation, translation).to.equal("Expected '}'");
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

	it("should return the english version: Expected identifier", function () {
		expect(translation, translation).to.equal("Expected identifier");
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

	it("should return the english version: Expected '='", function () {
		expect(translation, translation).to.equal("Expected '='");
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

	it("should return the english version: Expected '/'", function () {
		expect(translation, translation).to.equal("Expected '/'");
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

	it("should return the english version: Invalid number", function () {
		expect(translation, translation).to.equal("Invalid number");
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

	it("should return the english version: Invalid character", function () {
		expect(translation, translation).to.equal("Invalid character");
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

	it("should return the english version: Unterminated string constant", function () {
		expect(translation, translation).to.equal("Unterminated string constant");
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

	it("should return the english version: Unterminated comment", function () {
		expect(translation, translation).to.equal("Unterminated comment");
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

	it("should return the english version: 'return' statement outside of function", function () {
		expect(translation, translation).to.equal("'return' statement outside of function");
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

	it("should return the english version: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'break' outside of loop");
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

	it("should return the english version: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'continue' outside of loop");
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

	it("should return the english version: Expected hexadecimal digit", function () {
		expect(translation, translation).to.equal("Expected hexadecimal digit");
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

	it("should return the english version: Expected 'while'", function () {
		expect(translation, translation).to.equal("Expected 'while'");
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

	it("should return the english version: Label redefined", function () {
		expect(translation, translation).to.equal("Label redefined");
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

	it("should return the english version: Label not found", function () {
		expect(translation, translation).to.equal("Label not found");
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

	it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.equal("'default' can only appear once in a 'switch' statement");
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

	it("should return the english version: Expected identifier, string or number", function () {
		expect(translation, translation).to.equal("Expected identifier, string or number");
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

	it("should return the english version: Expected '@end'", function () {
		expect(translation, translation).to.equal("Expected '@end'");
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

	it("should return the english version: Conditional compilation is turned off", function () {
		expect(translation, translation).to.equal("Conditional compilation is turned off");
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

	it("should return the english version: Expected constant", function () {
		expect(translation, translation).to.equal("Expected constant");
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

	it("should return the english version: Expected '@'", function () {
		expect(translation, translation).to.equal("Expected '@'");
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

	it("should return the english version: Expected 'catch'", function () {
		expect(translation, translation).to.equal("Expected 'catch'");
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

	it("should return the english version: Expected 'var'", function () {
		expect(translation, translation).to.equal("Expected 'var'");
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

	it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.equal("'throw' must be followed by an expression on the same source line");
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

	it("should return the english version: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.equal("'with' statements are not allowed in strict mode");
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

	it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

	it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

	it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'eval' in strict mode");
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

	it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

	it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on expression not allowed in strict mode");
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

	it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

	it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

	it("should return the english version: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a keyword for an identifier is invalid");
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

	it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

	it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

	it("should return the english version: Setter functions must have one argument", function () {
		expect(translation, translation).to.equal("Setter functions must have one argument");
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

	it("should return the english version: JavaScript compilation error", function () {
		expect(translation, translation).to.equal("JavaScript compilation error");
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

	it("should return the english version: JavaScript runtime error", function () {
		expect(translation, translation).to.equal("JavaScript runtime error");
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

	it("should return the english version: Unknown runtime error", function () {
		expect(translation, translation).to.equal("Unknown runtime error");
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

	it("should return the english version: Cannot assign to 'this'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'this'");
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

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Cannot assign to a function result", function () {
		expect(translation, translation).to.equal("Cannot assign to a function result");
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

	it("should return the english version: Cannot index object", function () {
		expect(translation, translation).to.equal("Cannot index object");
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

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
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

	it("should return the english version: Date object expected", function () {
		expect(translation, translation).to.equal("Date object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.equal("Invalid left-hand side in assignment");
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

	it("should return the english version: Undefined identifier", function () {
		expect(translation, translation).to.equal("Undefined identifier");
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

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
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

	it("should return the english version: Can't execute code from a freed script", function () {
		expect(translation, translation).to.equal("Can't execute code from a freed script");
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

	it("should return the english version: Object member expected", function () {
		expect(translation, translation).to.equal("Object member expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
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

	it("should return the english version: Regular Expression object expected", function () {
		expect(translation, translation).to.equal("Regular Expression object expected");
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

	it("should return the english version: Syntax error in regular expression", function () {
		expect(translation, translation).to.equal("Syntax error in regular expression");
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

	it("should return the english version: Unexpected quantifier", function () {
		expect(translation, translation).to.equal("Unexpected quantifier");
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

	it("should return the english version: Expected ']' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ']' in regular expression");
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

	it("should return the english version: Expected ')' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ')' in regular expression");
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

	it("should return the english version: Invalid range in character set", function () {
		expect(translation, translation).to.equal("Invalid range in character set");
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

	it("should return the english version: Exception thrown and not caught", function () {
		expect(translation, translation).to.equal("Exception thrown and not caught");
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

	it("should return the english version: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.equal("Function does not have a valid prototype object");
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

	it("should return the english version: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.equal("The URI to be encoded contains an invalid character");
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

	it("should return the english version: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.equal("The URI to be decoded is not a valid encoding");
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

	it("should return the english version: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.equal("The number of fractional digits is out of range");
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

	it("should return the english version: The precision is out of range", function () {
		expect(translation, translation).to.equal("The precision is out of range");
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

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
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

	it("should return the english version: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.equal("Array length must be a finite positive integer");
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

	it("should return the english version: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.equal("Array length must be assigned a finite positive number");
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

	it("should return the english version: Array object expected", function () {
		expect(translation, translation).to.equal("Array object expected");
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

	it("should return the english version: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.equal("Circular reference in value argument not supported");
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

	it("should return the english version: Invalid replacer argument", function () {
		expect(translation, translation).to.equal("Invalid replacer argument");
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

	it("should return the english version: Argument list too large to apply", function () {
		expect(translation, translation).to.equal("Argument list too large to apply");
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

	it("should return the english version: Redeclaration of const property", function () {
		expect(translation, translation).to.equal("Redeclaration of const property");
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

	it("should return the english version: Object member not configurable", function () {
		expect(translation, translation).to.equal("Object member not configurable");
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

	it("should return the english version: Variable undefined in strict mode", function () {
		expect(translation, translation).to.equal("Variable undefined in strict mode");
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

	it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

	it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

	it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

	it("should return the english version: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.equal("Cannot create property for a non-extensible object");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.equal("Property cannot have both accessors and a value");
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

	it("should return the english version: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("'this' is null or undefined");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
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

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
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

	it("should return the english version: Date expected", function () {
		expect(translation, translation).to.equal("Date expected");
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

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
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

	it("should return the english version: RegExp object expected", function () {
		expect(translation, translation).to.equal("RegExp object expected");
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

	it("should return the english version: Invalid function argument", function () {
		expect(translation, translation).to.equal("Invalid function argument");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Invalid 'length' property", function () {
		expect(translation, translation).to.equal("Invalid 'length' property");
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

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
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

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
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

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
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

	it("should return the english version: Invalid property descriptor", function () {
		expect(translation, translation).to.equal("Invalid property descriptor");
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

	it("should return the english version: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property: object is not extensible");
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

	it("should return the english version: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property");
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

	it("should return the english version: Cannot modify non-writable property", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property");
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

	it("should return the english version: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property: 'length' is not writable");
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

	it("should return the english version: Cannot define property", function () {
		expect(translation, translation).to.equal("Cannot define property");
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

	it("should return the english version: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.equal("Typed array constructor argument is invalid");
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

	it("should return the english version: 'this' is not a typed array object", function () {
		expect(translation, translation).to.equal("'this' is not a typed array object");
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

	it("should return the english version: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.equal("Invalid offset/length when creating typed array");
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

	it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.equal("Invalid begin/end value in typed array subarray method");
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

	it("should return the english version: Invalid source in typed array set", function () {
		expect(translation, translation).to.equal("Invalid source in typed array set");
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

	it("should return the english version: 'this' is not a DataView object", function () {
		expect(translation, translation).to.equal("'this' is not a DataView object");
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

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
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

	it("should return the english version: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.equal("DataView operation access beyond specified buffer length");
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

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
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

	it("should return the english version: invalid function signature", function () {
		expect(translation, translation).to.equal("invalid function signature");
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

	it("should return the english version: invalid property signature", function () {
		expect(translation, translation).to.equal("invalid property signature");
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

	it("should return the english version: invalid input parameter type", function () {
		expect(translation, translation).to.equal("invalid input parameter type");
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

	it("should return the english version: invalid ouput parameter", function () {
		expect(translation, translation).to.equal("invalid ouput parameter");
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

	it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

	it("should return the english version: Inspectable Object expected", function () {
		expect(translation, translation).to.equal("Inspectable Object expected");
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

	it("should return the english version: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'char'");
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

	it("should return the english version: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'GUID'");
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

	it("should return the english version: IInspectable expected", function () {
		expect(translation, translation).to.equal("IInspectable expected");
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

	it("should return the english version: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property");
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

	it("should return the english version: Unknown type", function () {
		expect(translation, translation).to.equal("Unknown type");
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

	it("should return the english version: Function called with too few arguments", function () {
		expect(translation, translation).to.equal("Function called with too few arguments");
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

	it("should return the english version: Type is not constructible", function () {
		expect(translation, translation).to.equal("Type is not constructible");
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

	it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

	it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

	it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

	it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

	it("should return the english version: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Invalid access to already released Inspectable Object");
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

	it("should return the english version: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Cannot release already released Inspectable Object");
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

	it("should return the english version: 'this' is not of the expected type", function () {
		expect(translation, translation).to.equal("'this' is not of the expected type");
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

	it("should return the english version: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.equal("Illegal length and size specified for the array");
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

	it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

	it("should return the english version: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.equal("Status is 'error', but getResults did not return an error");
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

	it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

	it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

	it("should return the english version: Infinity", function () {
		expect(translation, translation).to.equal("Infinity");
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

	it("should return the english version: -Infinity", function () {
		expect(translation, translation).to.equal("-Infinity");
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

	it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

	it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

	it("should return the english version: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a number");
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

	it("should return the english version: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a function");
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

	it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

	it("should return the english version: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a string");
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

	it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a date object");
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

	it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is null or not an object");
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

	it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

	it("should return the english version: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is undefined");
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

	it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a boolean");
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

	it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

	it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

	it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

	it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

	it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

	it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

	it("should return the english version: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array object");
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

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

	it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

	it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

	it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

	it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

	it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

	it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

	it("should return the english version: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: invalid argument");
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

	it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object");
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

	it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

	it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

	it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

	it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

	it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

	it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

	it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

	it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

	it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

	it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

	it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

	it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

	it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

	it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

	it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

	it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

	it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

	it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

	it("should return the english version: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.equal("Type 'MyDynamicTestString' not found");
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

	it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

	it("should return the english version: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: type is not constructible");
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

	it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

	it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

	it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

	it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

	it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

	it("should return the english version: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.equal("The specified date is not available in the current locale's calendar");
	});
});
