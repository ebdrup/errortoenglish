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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
