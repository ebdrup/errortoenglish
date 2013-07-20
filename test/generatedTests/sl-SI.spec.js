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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
