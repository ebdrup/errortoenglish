var errorToEnglish = require("../../lib/errortoenglish");
describe("translating tr-TR string: Geçersiz yordam çağrısı veya değişken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz yordam çağrısı veya değişken", function (err, _translation) {
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
describe("translating tr-TR string: Taşma", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Taşma", function (err, _translation) {
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
describe("translating tr-TR string: Yetersiz bellek", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yetersiz bellek", function (err, _translation) {
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
describe("translating tr-TR string: Altsimge aralık dışı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Altsimge aralık dışı", function (err, _translation) {
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
describe("translating tr-TR string: Bu dizi sabitlendi veya geçici olarak kilitlendi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bu dizi sabitlendi veya geçici olarak kilitlendi", function (err, _translation) {
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
describe("translating tr-TR string: Sıfıra bölme", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sıfıra bölme", function (err, _translation) {
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
describe("translating tr-TR string: Tür uyumsuz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tür uyumsuz", function (err, _translation) {
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
describe("translating tr-TR string: Karakter dizi alanı doldu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Karakter dizi alanı doldu", function (err, _translation) {
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
describe("translating tr-TR string: İstenilen işlem yürütülemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İstenilen işlem yürütülemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Yığma alanı doldu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yığma alanı doldu", function (err, _translation) {
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
describe("translating tr-TR string: Tanımsız Sub veya Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tanımsız Sub veya Function", function (err, _translation) {
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
describe("translating tr-TR string: DLL yükleme hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DLL yükleme hatası", function (err, _translation) {
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
describe("translating tr-TR string: İç hata", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İç hata", function (err, _translation) {
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
describe("translating tr-TR string: Yanlış dosya adı veya numarası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yanlış dosya adı veya numarası", function (err, _translation) {
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
describe("translating tr-TR string: Dosya bulunamadı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dosya bulunamadı", function (err, _translation) {
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
describe("translating tr-TR string: Yanlış dosya modu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yanlış dosya modu", function (err, _translation) {
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
describe("translating tr-TR string: Dosya zaten açık", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dosya zaten açık", function (err, _translation) {
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
describe("translating tr-TR string: Aygıt G/Ç hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Aygıt G/Ç hatası", function (err, _translation) {
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
describe("translating tr-TR string: Dosya  var", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dosya  var", function (err, _translation) {
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
describe("translating tr-TR string: Disk dolu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disk dolu", function (err, _translation) {
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
describe("translating tr-TR string: Giriş dosya sonunu geçti", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Giriş dosya sonunu geçti", function (err, _translation) {
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
describe("translating tr-TR string: Çok fazla dosya", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Çok fazla dosya", function (err, _translation) {
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
describe("translating tr-TR string: Aygıt yok", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Aygıt yok", function (err, _translation) {
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
describe("translating tr-TR string: İzin verilmedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İzin verilmedi", function (err, _translation) {
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
describe("translating tr-TR string: Disk hazır değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disk hazır değil", function (err, _translation) {
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
describe("translating tr-TR string: Farklı bir sürücü adına değiştirilemez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Farklı bir sürücü adına değiştirilemez", function (err, _translation) {
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
describe("translating tr-TR string: Yol/Dosya erişim hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yol/Dosya erişim hatası", function (err, _translation) {
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
describe("translating tr-TR string: Yol bulunamadı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yol bulunamadı", function (err, _translation) {
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
describe("translating tr-TR string: Object değişkeni veya With blok değişkeni ayarlanmamış", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object değişkeni veya With blok değişkeni ayarlanmamış", function (err, _translation) {
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
describe("translating tr-TR string: For döngüsü başlatılmamış", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For döngüsü başlatılmamış", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz Null kullanımı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz Null kullanımı", function (err, _translation) {
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
describe("translating tr-TR string: Gerekli geçici dosya oluşturulamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Gerekli geçici dosya oluşturulamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne gerekli", function (err, _translation) {
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
describe("translating tr-TR string: Otomasyon sunucusu, nesne oluşturamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Otomasyon sunucusu, nesne oluşturamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Sınıf, Otomasyon'u desteklemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sınıf, Otomasyon'u desteklemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Otomasyon işlemi boyunca dosya adı veya sınıf adı bulunamadı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Otomasyon işlemi boyunca dosya adı veya sınıf adı bulunamadı", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bu özellik veya yöntemi desteklemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bu özellik veya yöntemi desteklemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Otomasyon hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Otomasyon hatası", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bu eylemi desteklemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bu eylemi desteklemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne adlandırılmış bağımsız değişkeni desteklemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne adlandırılmış bağımsız değişkeni desteklemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne geçerli yerel ayarları desteklemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne geçerli yerel ayarları desteklemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Adlandırılmış bağımsız değişken bulunamadı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Adlandırılmış bağımsız değişken bulunamadı", function (err, _translation) {
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
describe("translating tr-TR string: Bağımsız değişken isteğe bağlı değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bağımsız değişken isteğe bağlı değil", function (err, _translation) {
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
describe("translating tr-TR string: Hatalı bağımsız değişken numarası veya geçersiz özellik ataması", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hatalı bağımsız değişken numarası veya geçersiz özellik ataması", function (err, _translation) {
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
describe("translating tr-TR string: Nesne koleksiyon değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne koleksiyon değil", function (err, _translation) {
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
describe("translating tr-TR string: Belirtilen DLL işlevi bulunamadı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Belirtilen DLL işlevi bulunamadı", function (err, _translation) {
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
describe("translating tr-TR string: Değişken, JavaScript'te desteklenmeyen bir Otomasyon türü kullanıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değişken, JavaScript'te desteklenmeyen bir Otomasyon türü kullanıyor", function (err, _translation) {
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
describe("translating tr-TR string: Uzak sunucu makinesi yok veya kullanılabilir değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uzak sunucu makinesi yok veya kullanılabilir değil", function (err, _translation) {
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
describe("translating tr-TR string: Değişkene atanamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değişkene atanamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne, yazım için güvenli değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne, yazım için güvenli değil", function (err, _translation) {
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
describe("translating tr-TR string: Nesne, başlatma için güvenli değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne, başlatma için güvenli değil", function (err, _translation) {
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
describe("translating tr-TR string: Nesne yaratmak için güvenli değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne yaratmak için güvenli değil", function (err, _translation) {
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
describe("translating tr-TR string: Özel bir durum oluştu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Özel bir durum oluştu", function (err, _translation) {
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
describe("translating tr-TR string: Yetersiz bellek", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yetersiz bellek", function (err, _translation) {
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
describe("translating tr-TR string: Sözdizimi hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sözdizimi hatası", function (err, _translation) {
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
describe("translating tr-TR string: ':' gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':' gerekli", function (err, _translation) {
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
describe("translating tr-TR string: ';'  gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';'  gerekli", function (err, _translation) {
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
describe("translating tr-TR string: '(' gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'(' gerekli", function (err, _translation) {
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
describe("translating tr-TR string: ')'  gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')'  gerekli", function (err, _translation) {
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
describe("translating tr-TR string: ']'  gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']'  gerekli", function (err, _translation) {
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
describe("translating tr-TR string: '{'  gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{'  gerekli", function (err, _translation) {
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
describe("translating tr-TR string: '}'  gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}'  gerekli", function (err, _translation) {
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
describe("translating tr-TR string: Belirleyici gerekli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Belirleyici gerekli", function (err, _translation) {
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
describe("translating tr-TR string: '=' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'=' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: '/' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz sayı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz sayı", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz karakter", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz karakter", function (err, _translation) {
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
describe("translating tr-TR string: Sonlandırılmamış dize sabiti", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sonlandırılmamış dize sabiti", function (err, _translation) {
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
describe("translating tr-TR string: Sonlandırılmamış açıklama", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sonlandırılmamış açıklama", function (err, _translation) {
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
describe("translating tr-TR string: işlevin dışında 'return' deyimi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("işlevin dışında 'return' deyimi", function (err, _translation) {
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
describe("translating tr-TR string: Döngünün dışında 'break' olamaz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Döngünün dışında 'break' olamaz", function (err, _translation) {
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
describe("translating tr-TR string: Döngünün dışında 'continue' olamaz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Döngünün dışında 'continue' olamaz", function (err, _translation) {
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
describe("translating tr-TR string: Onaltılık hane bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Onaltılık hane bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: 'while' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Etiket yeniden tanımlandı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Etiket yeniden tanımlandı", function (err, _translation) {
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
describe("translating tr-TR string: Etiket bulunamadı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Etiket bulunamadı", function (err, _translation) {
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
describe("translating tr-TR string: 'default', 'switch' bildirisinde yalnız bir kere görünebilir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default', 'switch' bildirisinde yalnız bir kere görünebilir", function (err, _translation) {
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
describe("translating tr-TR string: Tanımlayıcı, dize veya sayı bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tanımlayıcı, dize veya sayı bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: '@end' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Koşullu derleme kapalı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Koşullu derleme kapalı", function (err, _translation) {
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
describe("translating tr-TR string: Sabit bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sabit bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: '@' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: 'catch' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: 'var' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: 'throw' yönergesinden sonra aynı kaynak satırında bir ifade gelmeli", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'throw' yönergesinden sonra aynı kaynak satırında bir ifade gelmeli", function (err, _translation) {
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
describe("translating tr-TR string: 'with' deyimlerinin katı modda kullanılmasına izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'with' deyimlerinin katı modda kullanılmasına izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Yinelenen biçimsel parametre adlarına katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yinelenen biçimsel parametre adlarına katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Sekizli sayısal değişmez değerlere ve kaçış karakterlerine katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sekizli sayısal değişmez değerlere ve kaçış karakterlerine katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Katı modda 'eval' öğesinin geçersiz kullanımı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Katı modda 'eval' öğesinin geçersiz kullanımı", function (err, _translation) {
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
describe("translating tr-TR string: Katı modda 'arguments' öğesinin geçersiz kullanımı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Katı modda 'arguments' öğesinin geçersiz kullanımı", function (err, _translation) {
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
describe("translating tr-TR string: İfadede silme işlevini çağırmaya katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İfadede silme işlevini çağırmaya katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Bir özelliğin birden fazla tanımına katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bir özelliğin birden fazla tanımına katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Katı modda, işlev bildirimleri bir deyim veya blok içinde iç içe olamaz. Yalnızca en üst düzeyde veya doğrudan işlev gövdesinin içinde görünebilirler.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Katı modda, işlev bildirimleri bir deyim veya blok içinde iç içe olamaz. Yalnızca en üst düzeyde veya doğrudan işlev gövdesinin içinde görünebilirler.", function (err, _translation) {
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
describe("translating tr-TR string: Bir tanımlayıcının anahtar sözcük kullanımı geçersiz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bir tanımlayıcının anahtar sözcük kullanımı geçersiz", function (err, _translation) {
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
describe("translating tr-TR string: Bir tanımlayıcının ileride kullanılmak üzere ayrılmış sözcük kullanımı geçersiz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bir tanımlayıcının ileride kullanılmak üzere ayrılmış sözcük kullanımı geçersiz", function (err, _translation) {
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
describe("translating tr-TR string: Bir tanımlayıcının ileride kullanılmak üzere ayrılmış sözcük kullanımı geçersiz. Tanımlayıcı adı katı modda ayrılmış.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bir tanımlayıcının ileride kullanılmak üzere ayrılmış sözcük kullanımı geçersiz. Tanımlayıcı adı katı modda ayrılmış.", function (err, _translation) {
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
describe("translating tr-TR string: Ayarlayıcı işlevleri bir bağımsız değişken içermelidir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ayarlayıcı işlevleri bir bağımsız değişken içermelidir", function (err, _translation) {
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
describe("translating tr-TR string: JavaScript derleme hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript derleme hatası", function (err, _translation) {
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
describe("translating tr-TR string: JavaScript çalışma zamanı hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript çalışma zamanı hatası", function (err, _translation) {
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
describe("translating tr-TR string: Bilinmeyen çalışma hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bilinmeyen çalışma hatası", function (err, _translation) {
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
describe("translating tr-TR string: 'this' için atama yapılamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' için atama yapılamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Sayı bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sayı bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: İşlev bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlev bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: İşlev sonucuna atanamaz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlev sonucuna atanamaz", function (err, _translation) {
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
describe("translating tr-TR string: Nesne dizilemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne dizilemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Dize bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dize bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Tarih nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tarih nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Atama içinde sol taraf geçersiz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Atama içinde sol taraf geçersiz", function (err, _translation) {
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
describe("translating tr-TR string: Tanımsız belirleyici", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tanımsız belirleyici", function (err, _translation) {
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
describe("translating tr-TR string: Boolean bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boolean bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Boşaltılmış komut dosyasından kod çalıştırılamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boşaltılmış komut dosyasından kod çalıştırılamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne üyesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne üyesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: VBArray bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: JavaScript nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Numaralandırıcı nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Numaralandırıcı nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Normal Deyim nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Normal Deyim nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Normal deyimde yazım hatası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Normal deyimde yazım hatası", function (err, _translation) {
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
describe("translating tr-TR string: Beklenmeyen miktar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Beklenmeyen miktar", function (err, _translation) {
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
describe("translating tr-TR string: Normal deyimde ']' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Normal deyimde ']' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Normal deyimde ')' bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Normal deyimde ')' bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz karakter kümesi aralığı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz karakter kümesi aralığı", function (err, _translation) {
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
describe("translating tr-TR string: Olağan dışı durum oluşturuldu (throw ile) ve yakalanmadı (catch ile)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Olağan dışı durum oluşturuldu (throw ile) ve yakalanmadı (catch ile)", function (err, _translation) {
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
describe("translating tr-TR string: İşlevin geçerli bir prototip nesnesi yok", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlevin geçerli bir prototip nesnesi yok", function (err, _translation) {
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
describe("translating tr-TR string: Kodlanacak URI geçersiz bir karakter içeriyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kodlanacak URI geçersiz bir karakter içeriyor", function (err, _translation) {
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
describe("translating tr-TR string: Kodu çözülecek URI geçerli bir kodlama değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kodu çözülecek URI geçerli bir kodlama değil", function (err, _translation) {
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
describe("translating tr-TR string: Kesir basamak sayısı aralık dışında", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kesir basamak sayısı aralık dışında", function (err, _translation) {
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
describe("translating tr-TR string: Duyarlılık aralık dışında", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Duyarlılık aralık dışında", function (err, _translation) {
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
describe("translating tr-TR string: Array veya arguments nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array veya arguments nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Dizi uzunluğu sonlu pozitif bir tamsayı olmalıdır", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dizi uzunluğu sonlu pozitif bir tamsayı olmalıdır", function (err, _translation) {
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
describe("translating tr-TR string: Dizi uzunluğu sonlu pozitif bir tamsayıya atanmalıdır", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dizi uzunluğu sonlu pozitif bir tamsayıya atanmalıdır", function (err, _translation) {
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
describe("translating tr-TR string: Dizi nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dizi nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Değer değişkenindeki döngüsel başvuru desteklenmiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değer değişkenindeki döngüsel başvuru desteklenmiyor", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz değiştirici bağımsız değişkeni", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz değiştirici bağımsız değişkeni", function (err, _translation) {
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
describe("translating tr-TR string: Bağımsız değişken listesi uygulamak için çok büyük", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bağımsız değişken listesi uygulamak için çok büyük", function (err, _translation) {
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
describe("translating tr-TR string: Sabit özelliğinin yeniden bildirimi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sabit özelliğinin yeniden bildirimi", function (err, _translation) {
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
describe("translating tr-TR string: Nesne üyesi yapılandırılabilir değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne üyesi yapılandırılabilir değil", function (err, _translation) {
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
describe("translating tr-TR string: Katı modda değişken tanımsız", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Katı modda değişken tanımsız", function (err, _translation) {
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
describe("translating tr-TR string: İşlevin veya bağımsız değişkenlerinin 'caller' özelliğine erişimine katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlevin veya bağımsız değişkenlerinin 'caller' özelliğine erişimine katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: İşlevin veya bağımsız değişkenlerinin 'callee' özelliğine erişimine katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlevin veya bağımsız değişkenlerinin 'callee' özelliğine erişimine katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Salt okunur özelliklerin atanmasına katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Salt okunur özelliklerin atanmasına katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Genişletilebilir olmayan bir nesne için özellik oluşturulamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Genişletilebilir olmayan bir nesne için özellik oluşturulamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: İşlev bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlev bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: İşlev bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlev bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Özelliğin hem erişimcisi hem de değeri olamaz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Özelliğin hem erişimcisi hem de değeri olamaz", function (err, _translation) {
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
describe("translating tr-TR string: 'this' boş veya tanımsız", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' boş veya tanımsız", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: İşlev bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlev bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Dize bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dize bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Boole bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boole bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Tarih bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tarih bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Sayı bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sayı bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: VBArray bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: JavaScript nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Numaralandırıcı nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Numaralandırıcı nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: RegExp nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("RegExp nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz işlev bağımsız değişkeni", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz işlev bağımsız değişkeni", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: JavaScript nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: İşlev bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlev bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: VBArray bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz 'length' özelliği", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz 'length' özelliği", function (err, _translation) {
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
describe("translating tr-TR string: Array veya arguments nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array veya arguments nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz İşlenen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz İşlenen", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz İşlenen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz İşlenen", function (err, _translation) {
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
describe("translating tr-TR string: Geçersiz özellik tanımlayıcısı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Geçersiz özellik tanımlayıcısı", function (err, _translation) {
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
describe("translating tr-TR string: Özellik tanımlanamıyor: nesne genişletilebilir değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Özellik tanımlanamıyor: nesne genişletilebilir değil", function (err, _translation) {
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
describe("translating tr-TR string: Yapılandırılabilir olmayan özellik yeniden tanımlanamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yapılandırılabilir olmayan özellik yeniden tanımlanamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Yazılabilir olmayan özellik değiştirilemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yazılabilir olmayan özellik değiştirilemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Özellik değiştirilemiyor: 'length' yazılabilir değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Özellik değiştirilemiyor: 'length' yazılabilir değil", function (err, _translation) {
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
describe("translating tr-TR string: Özellik tanımlanamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Özellik tanımlanamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Türü örtük olarak belirlenmiş dizinin kurucu bağımsız değişkeni geçersiz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Türü örtük olarak belirlenmiş dizinin kurucu bağımsız değişkeni geçersiz", function (err, _translation) {
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
describe("translating tr-TR string: 'this' türü örtük olarak belirlenmiş dizi nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' türü örtük olarak belirlenmiş dizi nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: Türü örtük olarak belirlenmiş dizi oluşturulurken geçersiz uzaklık/uzunluk", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Türü örtük olarak belirlenmiş dizi oluşturulurken geçersiz uzaklık/uzunluk", function (err, _translation) {
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
describe("translating tr-TR string: Türü örtük olarak belirlenmiş dizi alt dizi yönteminde geçersiz başlangıç/bitiş değeri", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Türü örtük olarak belirlenmiş dizi alt dizi yönteminde geçersiz başlangıç/bitiş değeri", function (err, _translation) {
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
describe("translating tr-TR string: Türü örtük olarak belirlenmiş dizi kümesinde geçersiz kaynak", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Türü örtük olarak belirlenmiş dizi kümesinde geçersiz kaynak", function (err, _translation) {
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
describe("translating tr-TR string: 'this' bir DataView nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' bir DataView nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: DataView içinde geçersiz bağımsız değişkenler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView içinde geçersiz bağımsız değişkenler", function (err, _translation) {
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
describe("translating tr-TR string: DataView işlemi belirtilen arabellek uzunluğunun dışına erişiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView işlemi belirtilen arabellek uzunluğunun dışına erişiyor", function (err, _translation) {
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
describe("translating tr-TR string: DataView içinde geçersiz bağımsız değişkenler", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView içinde geçersiz bağımsız değişkenler", function (err, _translation) {
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
describe("translating tr-TR string: geçersiz işlev imzası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("geçersiz işlev imzası", function (err, _translation) {
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
describe("translating tr-TR string: geçersiz özellik imzası", function () {
	var translation;
	before(function (done) {
		errorToEnglish("geçersiz özellik imzası", function (err, _translation) {
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
describe("translating tr-TR string: geçersiz giriş parametresi türü", function () {
	var translation;
	before(function (done) {
		errorToEnglish("geçersiz giriş parametresi türü", function (err, _translation) {
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
describe("translating tr-TR string: geçersiz çıkış parametresi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("geçersiz çıkış parametresi", function (err, _translation) {
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
describe("translating tr-TR string: İşlevin 'arguments' özelliğine erişmeye katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlevin 'arguments' özelliğine erişmeye katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: İncelenebilir Nesne bekleniyordu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İncelenebilir Nesne bekleniyordu", function (err, _translation) {
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
describe("translating tr-TR string: Bağımsız değişken 'char' türüne dönüştürülemedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bağımsız değişken 'char' türüne dönüştürülemedi", function (err, _translation) {
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
describe("translating tr-TR string: Bağımsız değişken 'GUID' türüne dönüştürülemedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bağımsız değişken 'GUID' türüne dönüştürülemedi", function (err, _translation) {
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
describe("translating tr-TR string: IInspectable olması bekleniyordu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable olması bekleniyordu", function (err, _translation) {
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
describe("translating tr-TR string: Nesne yapı birimine dönüştürülemedi: nesnede beklenen özellik yok", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne yapı birimine dönüştürülemedi: nesnede beklenen özellik yok", function (err, _translation) {
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
describe("translating tr-TR string: Bilinmeyen tür", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bilinmeyen tür", function (err, _translation) {
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
describe("translating tr-TR string: İşlev çok az bağımsız değişkenle çağrıldı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("İşlev çok az bağımsız değişkenle çağrıldı", function (err, _translation) {
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
describe("translating tr-TR string: Tür, oluşturulabilir bir tür değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tür, oluşturulabilir bir tür değil", function (err, _translation) {
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
describe("translating tr-TR string: Değer PropertyValue değerine dönüştürülemedi: Tür PropertyValue tarafından desteklenmiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değer PropertyValue değerine dönüştürülemedi: Tür PropertyValue tarafından desteklenmiyor", function (err, _translation) {
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
describe("translating tr-TR string: Değer IInspectable değerine dönüştürülemedi: Tür IInspectable tarafından desteklenmiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değer IInspectable değerine dönüştürülemedi: Tür IInspectable tarafından desteklenmiyor", function (err, _translation) {
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
describe("translating tr-TR string: Tarih Windows.Foundation.DateTime biçimine dönüştürülemedi: değer geçerli aralığın dışında", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tarih Windows.Foundation.DateTime biçimine dönüştürülemedi: değer geçerli aralığın dışında", function (err, _translation) {
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
describe("translating tr-TR string: Değer Windows.Foundation.TimeSpan biçimine dönüştürülemedi: değer geçerli aralığın dışında", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değer Windows.Foundation.TimeSpan biçimine dönüştürülemedi: değer geçerli aralığın dışında", function (err, _translation) {
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
describe("translating tr-TR string: Serbest bırakılan Inspectable Nesnesi erişimi geçersiz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Serbest bırakılan Inspectable Nesnesi erişimi geçersiz", function (err, _translation) {
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
describe("translating tr-TR string: Serbest bırakılmış olan Inspectable Nesnesi serbest bırakılamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Serbest bırakılmış olan Inspectable Nesnesi serbest bırakılamıyor", function (err, _translation) {
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
describe("translating tr-TR string: 'bu' beklenen tür değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'bu' beklenen tür değil", function (err, _translation) {
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
describe("translating tr-TR string: Dize için belirtilen geçersiz uzunluk ve boyut", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dize için belirtilen geçersiz uzunluk ve boyut", function (err, _translation) {
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
describe("translating tr-TR string: Meta veri bilgilerini almaya çalışırken beklenmeyen bir hata oluştu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Meta veri bilgilerini almaya çalışırken beklenmeyen bir hata oluştu", function (err, _translation) {
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
describe("translating tr-TR string: Durum: 'hata'  ancak getResults hata döndürmedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Durum: 'hata'  ancak getResults hata döndürmedi", function (err, _translation) {
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
describe("translating tr-TR string: Eksik veya geçersiz durum parametresi tamamlanan işleyiciye geçirildi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Eksik veya geçersiz durum parametresi tamamlanan işleyiciye geçirildi", function (err, _translation) {
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
describe("translating tr-TR string: Eksik veya geçersiz gönderen parametresi tamamlanan işleyiciye geçirildi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Eksik veya geçersiz gönderen parametresi tamamlanan işleyiciye geçirildi", function (err, _translation) {
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
describe("translating tr-TR string: Sonsuz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sonsuz", function (err, _translation) {
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
describe("translating tr-TR string: -Sonsuz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Sonsuz", function (err, _translation) {
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
describe("translating tr-TR string: Nesne, 'MyDynamicTestString' özelliğini veya yöntemini desteklemez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne, 'MyDynamicTestString' özelliğini veya yöntemini desteklemez", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' işlevinin bağımsız değişkeni isteğe bağlı değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' işlevinin bağımsız değişkeni isteğe bağlı değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', bir sayı değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', bir sayı değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', bir işlev değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', bir işlev değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', dizilebilir bir nesne değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', dizilebilir bir nesne değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', bir dize değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', bir dize değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', bir tarih nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', bir tarih nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', boş veya bir nesne değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', boş veya bir nesne değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' üzerine atama yapılamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' üzerine atama yapılamıyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' tanımsız", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' tanımsız", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', boolean değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', boolean değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' silinemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' silinemiyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString', VBArray değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString', VBArray değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' JavaScript nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' JavaScript nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' numaralandırıcı nesne değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' numaralandırıcı nesne değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' normal bir ifade nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' normal bir ifade nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString, Array veya arguments nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString, Array veya arguments nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString, Array nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString, Array nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: Özellik tanımlayıcısındaki 'MyDynamicTestString' özniteliği, bu nesnede 'true' olarak ayarlanamaz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Özellik tanımlayıcısındaki 'MyDynamicTestString' özniteliği, bu nesnede 'true' olarak ayarlanamaz", function (err, _translation) {
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
describe("translating tr-TR string: Özellik tanımlayıcısındaki 'MyDynamicTestString' özniteliği, bu nesnede 'false' olarak ayarlanamaz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Özellik tanımlayıcısındaki 'MyDynamicTestString' özniteliği, bu nesnede 'false' olarak ayarlanamaz", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' sabitinin yeniden bildirimi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' sabitinin yeniden bildirimi", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' üzerinde silme işlevini çağırmaya katı modda izin verilmez", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' üzerinde silme işlevini çağırmaya katı modda izin verilmez", function (err, _translation) {
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
describe("translating tr-TR string: Tanımsız veya boş referansın 'MyDynamicTestString' özelliği ayarlanamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tanımsız veya boş referansın 'MyDynamicTestString' özelliği ayarlanamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Tanımsız veya boş referansın 'MyDynamicTestString' özelliği alınamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tanımsız veya boş referansın 'MyDynamicTestString' özelliği alınamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Tanımsız veya boş referansın 'MyDynamicTestString' özelliği silinemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tanımsız veya boş referansın 'MyDynamicTestString' özelliği silinemiyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliğine erişilemiyor: 'VarDate' türü kullanıcı tanımlı özellikleri desteklemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliğine erişilemiyor: 'VarDate' türü kullanıcı tanımlı özellikleri desteklemiyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliğinin değeri İşlev nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliğinin değeri İşlev nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliğinin değeri boş veya tanımsız, İşlev nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliğinin değeri boş veya tanımsız, İşlev nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' boş veya tanımsız", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' boş veya tanımsız", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir Nesne değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir Nesne değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir İşlev nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir İşlev nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir Dize nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir Dize nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir Boole nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir Boole nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir Tarih nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir Tarih nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir Sayı nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir Sayı nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir VBArray nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir VBArray nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir JavaScript nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir JavaScript nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir Numaralandırıcı nesne değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir Numaralandırıcı nesne değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir RegExp nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir RegExp nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: geçersiz bağımsız değişken", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: geçersiz bağımsız değişken", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken bir Nesne değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken bir Nesne değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken bir JavaScript nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken bir JavaScript nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken bir İşlev nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken bir İşlev nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken bir VBArray nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken bir VBArray nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken boş veya tanımsız", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken boş veya tanımsız", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken bir Nesne değil ve boş değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken bir Nesne değil ve boş değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişkenin geçerli bir 'length' özelliği yok", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişkenin geçerli bir 'length' özelliği yok", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: Array veya arguments nesnesi bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Array veya arguments nesnesi bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' için geçersiz işlenen: Nesne bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' için geçersiz işlenen: Nesne bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' için geçersiz işlenen: İşlev bekleniyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' için geçersiz işlenen: İşlev bekleniyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliği için geçersiz tanımlayıcı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliği için geçersiz tanımlayıcı", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliği tanımlanamıyor: nesne genişletilebilir değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliği tanımlanamıyor: nesne genişletilebilir değil", function (err, _translation) {
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
describe("translating tr-TR string: Yapılandırılabilir olmayan 'MyDynamicTestString' özelliği yeniden tanımlanamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yapılandırılabilir olmayan 'MyDynamicTestString' özelliği yeniden tanımlanamıyor", function (err, _translation) {
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
describe("translating tr-TR string: Yazılabilir olmayan 'MyDynamicTestString' özelliği değiştirilemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Yazılabilir olmayan 'MyDynamicTestString' özelliği değiştirilemiyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliği değiştirilemiyor: 'length' yazılabilir değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliği değiştirilemiyor: 'length' yazılabilir değil", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliği tanımlanamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliği tanımlanamıyor", function (err, _translation) {
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
describe("translating tr-TR string: DataView yönteminde gereken MyDynamicTestString bağımsız değişkeni belirtilmedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView yönteminde gereken MyDynamicTestString bağımsız değişkeni belirtilmedi", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString DataView kurucu bağımsız değişkeni geçersiz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString DataView kurucu bağımsız değişkeni geçersiz", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' işlevinde geçersiz bir imza var ve çağrılamıyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' işlevinde geçersiz bir imza var ve çağrılamıyor", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' özelliğinde geçersiz bir imza var ve erişilemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' özelliğinde geçersiz bir imza var ve erişilemiyor", function (err, _translation) {
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
describe("translating tr-TR string: Varsayılan arabirimi Windows.Foundation.IPropertyValue olan MyDynamicTestString çalışma zamanı sınıfı, giriş parametresi türü olarak desteklenmiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Varsayılan arabirimi Windows.Foundation.IPropertyValue olan MyDynamicTestString çalışma zamanı sınıfı, giriş parametresi türü olarak desteklenmiyor", function (err, _translation) {
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
describe("translating tr-TR string: Çalışma zamanı sınıfı adı MyDynamicTestString olan Windows.Foundation.IPropertyValue arabirimine sahip nesne, çıkış parametresi olarak desteklenmiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Çalışma zamanı sınıfı adı MyDynamicTestString olan Windows.Foundation.IPropertyValue arabirimine sahip nesne, çıkış parametresi olarak desteklenmiyor", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' bir Inspectable Nesnesi değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' bir Inspectable Nesnesi değil", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken 'char' türüne dönüştürülemedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken 'char' türüne dönüştürülemedi", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: bağımsız değişken 'GUID' türüne dönüştürülemedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: bağımsız değişken 'GUID' türüne dönüştürülemedi", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: dönen değer IInspectable değerine dönüştürülemedi", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: dönen değer IInspectable değerine dönüştürülemedi", function (err, _translation) {
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
describe("translating tr-TR string: Nesne yapı birimine dönüştürülemedi: nesnede beklenen 'MyDynamicTestString' özelliği yok", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nesne yapı birimine dönüştürülemedi: nesnede beklenen 'MyDynamicTestString' özelliği yok", function (err, _translation) {
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
describe("translating tr-TR string: 'MyDynamicTestString' türü bulunamadı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' türü bulunamadı", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: işlev çok az bağımsız değişkenle çağrıldı", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: işlev çok az bağımsız değişkenle çağrıldı", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: tür, oluşturulabilir bir tür değil", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: tür, oluşturulabilir bir tür değil", function (err, _translation) {
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
describe("translating tr-TR string: Değer PropertyValue değerine dönüştürülemedi: MyDynamicTestString PropertyValue tarafından desteklenmiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değer PropertyValue değerine dönüştürülemedi: MyDynamicTestString PropertyValue tarafından desteklenmiyor", function (err, _translation) {
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
describe("translating tr-TR string: Değer IInspectable değerine dönüştürülemedi: MyDynamicTestString IInspectable tarafından desteklenmiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Değer IInspectable değerine dönüştürülemedi: MyDynamicTestString IInspectable tarafından desteklenmiyor", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: 'this' Inspectable nesnesi serbest bırakıldı ve erişilemiyor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' Inspectable nesnesi serbest bırakıldı ve erişilemiyor", function (err, _translation) {
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
describe("translating tr-TR string: 'bu' beklenen tür değil: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'bu' beklenen tür değil: MyDynamicTestString", function (err, _translation) {
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
describe("translating tr-TR string: MyDynamicTestString: meta veri bilgilerini almaya çalışırken beklenmeyen bir hata oluştu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: meta veri bilgilerini almaya çalışırken beklenmeyen bir hata oluştu", function (err, _translation) {
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
describe("translating tr-TR string: Belirtilen tarih şu anki yerin takviminde kullanılamaz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Belirtilen tarih şu anki yerin takviminde kullanılamaz", function (err, _translation) {
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
