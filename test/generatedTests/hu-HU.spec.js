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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
