var errorToEnglish = require("../../lib/errortoenglish");
describe("translating pl-PL string: Nieprawidłowe wywołanie procedury lub nieprawidłowy argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowe wywołanie procedury lub nieprawidłowy argument", function (err, _translation) {
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
describe("translating pl-PL string: Przepełnienie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Przepełnienie", function (err, _translation) {
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
describe("translating pl-PL string: Za mało pamięci", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Za mało pamięci", function (err, _translation) {
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
describe("translating pl-PL string: Indeks poza zakresem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Indeks poza zakresem", function (err, _translation) {
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
describe("translating pl-PL string: Ta tablica ma stały rozmiar lub jest chwilowo zablokowana.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ta tablica ma stały rozmiar lub jest chwilowo zablokowana.", function (err, _translation) {
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
describe("translating pl-PL string: Dzielenie przez zero", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dzielenie przez zero", function (err, _translation) {
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
describe("translating pl-PL string: Niezgodność typów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Niezgodność typów", function (err, _translation) {
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
describe("translating pl-PL string: Za mało miejsca na ciąg znaków", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Za mało miejsca na ciąg znaków", function (err, _translation) {
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
describe("translating pl-PL string: Nie można wykonać żądanej operacji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można wykonać żądanej operacji.", function (err, _translation) {
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
describe("translating pl-PL string: Za mało miejsca na stosie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Za mało miejsca na stosie", function (err, _translation) {
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
describe("translating pl-PL string: Niezdefiniowany podprogram lub funkcja", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Niezdefiniowany podprogram lub funkcja", function (err, _translation) {
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
describe("translating pl-PL string: Błąd podczas ładowania biblioteki DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd podczas ładowania biblioteki DLL", function (err, _translation) {
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
describe("translating pl-PL string: Błąd wewnętrzny", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd wewnętrzny", function (err, _translation) {
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
describe("translating pl-PL string: Zła nazwa lub numer pliku", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zła nazwa lub numer pliku", function (err, _translation) {
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
describe("translating pl-PL string: Nie można odnaleźć pliku.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można odnaleźć pliku.", function (err, _translation) {
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
describe("translating pl-PL string: Zły tryb pliku", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zły tryb pliku", function (err, _translation) {
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
describe("translating pl-PL string: Plik jest już otwarty.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Plik jest już otwarty.", function (err, _translation) {
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
describe("translating pl-PL string: Błąd We/Wy urządzenia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd We/Wy urządzenia", function (err, _translation) {
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
describe("translating pl-PL string: Plik już istnieje.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Plik już istnieje.", function (err, _translation) {
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
describe("translating pl-PL string: Dysk zapełniony", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dysk zapełniony", function (err, _translation) {
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
describe("translating pl-PL string: Próba zapisu poza końcem pliku", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Próba zapisu poza końcem pliku", function (err, _translation) {
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
describe("translating pl-PL string: Za dużo plików", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Za dużo plików", function (err, _translation) {
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
describe("translating pl-PL string: Urządzenie niedostępne", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Urządzenie niedostępne", function (err, _translation) {
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
describe("translating pl-PL string: Brak uprawnień", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Brak uprawnień", function (err, _translation) {
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
describe("translating pl-PL string: Dysk nie jest gotowy.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dysk nie jest gotowy.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zmienić nazwy używając innego dysku.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zmienić nazwy używając innego dysku.", function (err, _translation) {
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
describe("translating pl-PL string: Błąd dostępu do ścieżki/pliku", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd dostępu do ścieżki/pliku", function (err, _translation) {
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
describe("translating pl-PL string: Nie można odnaleźć ścieżki.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można odnaleźć ścieżki.", function (err, _translation) {
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
describe("translating pl-PL string: Zmienna obiektowa lub zmienna bloku With nie jest ustawiona.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zmienna obiektowa lub zmienna bloku With nie jest ustawiona.", function (err, _translation) {
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
describe("translating pl-PL string: Nie zainicjowana pętla For", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie zainicjowana pętla For", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowe użycie Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowe użycie Null", function (err, _translation) {
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
describe("translating pl-PL string: Nie można utworzyć niezbędnego pliku tymczasowego.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można utworzyć niezbędnego pliku tymczasowego.", function (err, _translation) {
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
describe("translating pl-PL string: Wymagany jest obiekt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wymagany jest obiekt", function (err, _translation) {
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
describe("translating pl-PL string: Serwer automatyzacji nie może utworzyć obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Serwer automatyzacji nie może utworzyć obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Klasa nie obsługuje automatyzacji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Klasa nie obsługuje automatyzacji.", function (err, _translation) {
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
describe("translating pl-PL string: Podczas operacji automatyzacji nie można odnaleźć nazwy pliku lub klasy.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Podczas operacji automatyzacji nie można odnaleźć nazwy pliku lub klasy.", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt nie obsługuje tej właściwości lub metody.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt nie obsługuje tej właściwości lub metody.", function (err, _translation) {
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
describe("translating pl-PL string: Błąd automatyzacji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd automatyzacji", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt nie obsługuje tej operacji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt nie obsługuje tej operacji.", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt nie obsługuje argumentów nazwanych.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt nie obsługuje argumentów nazwanych.", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt nie obsługuje bieżących ustawień regionalnych.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt nie obsługuje bieżących ustawień regionalnych.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można odnaleźć nazwanego argumentu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można odnaleźć nazwanego argumentu.", function (err, _translation) {
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
describe("translating pl-PL string: Argument nie jest opcjonalny.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument nie jest opcjonalny.", function (err, _translation) {
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
describe("translating pl-PL string: Zła liczba argumentów lub nieprawidłowe przyporządkowanie właściwości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zła liczba argumentów lub nieprawidłowe przyporządkowanie właściwości", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt nie jest kolekcją.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt nie jest kolekcją.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można odnaleźć podanej funkcji DLL.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można odnaleźć podanej funkcji DLL.", function (err, _translation) {
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
describe("translating pl-PL string: Zmienna używa typu automatyzacji, który nie jest obsługiwany przez język JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zmienna używa typu automatyzacji, który nie jest obsługiwany przez język JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: Serwer zdalny nie istnieje lub jest niedostępny", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Serwer zdalny nie istnieje lub jest niedostępny", function (err, _translation) {
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
describe("translating pl-PL string: Nie można wykonać przypisania do zmiennej", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można wykonać przypisania do zmiennej", function (err, _translation) {
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
describe("translating pl-PL string: Obiektu nie należy używać w skryptach.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiektu nie należy używać w skryptach.", function (err, _translation) {
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
describe("translating pl-PL string: Obiektu nie należy inicjować.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiektu nie należy inicjować.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można bezpiecznie utworzyć obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można bezpiecznie utworzyć obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Wystąpił wyjątek", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wystąpił wyjątek", function (err, _translation) {
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
describe("translating pl-PL string: Za mało pamięci", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Za mało pamięci", function (err, _translation) {
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
describe("translating pl-PL string: Błąd składni", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd składni", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku ':'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku ';'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku '('", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku ')'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku ']'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku ']'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku '{'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku '}'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano identyfikatora", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano identyfikatora", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku '='", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku '/'", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowa liczba", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowa liczba", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy znak", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy znak", function (err, _translation) {
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
describe("translating pl-PL string: Brak zakończenia stałej znakowej", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Brak zakończenia stałej znakowej", function (err, _translation) {
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
describe("translating pl-PL string: Brak zakończenia komentarza", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Brak zakończenia komentarza", function (err, _translation) {
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
describe("translating pl-PL string: Instrukcja 'return' jest poza funkcją.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Instrukcja 'return' jest poza funkcją.", function (err, _translation) {
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
describe("translating pl-PL string: Instrukcji 'break' nie można używać poza pętlą.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Instrukcji 'break' nie można używać poza pętlą.", function (err, _translation) {
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
describe("translating pl-PL string: Instrukcji 'continue' nie można używać poza pętlą.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Instrukcji 'continue' nie można używać poza pętlą.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano liczby heksadecymalnej", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano liczby heksadecymalnej", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano słowa kluczowego 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano słowa kluczowego 'while'", function (err, _translation) {
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
describe("translating pl-PL string: Ponowna definicja etykiety", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ponowna definicja etykiety", function (err, _translation) {
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
describe("translating pl-PL string: Nie można odnaleźć etykiety.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można odnaleźć etykiety.", function (err, _translation) {
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
describe("translating pl-PL string: Słowo kluczowe 'default' w zakresie instrukcji 'switch' może wystąpić tylko raz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Słowo kluczowe 'default' w zakresie instrukcji 'switch' może wystąpić tylko raz", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano identyfikatora, ciągu znaków lub liczby", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano identyfikatora, ciągu znaków lub liczby", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano '@end'", function (err, _translation) {
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
describe("translating pl-PL string: Kompilacja warunkowa jest wyłączona", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Kompilacja warunkowa jest wyłączona", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano stałej", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano stałej", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku '@'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano 'catch'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano 'var'", function (err, _translation) {
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
describe("translating pl-PL string: po instrukcji „throw” powinno występować wyrażenie w tym samym wierszu kodu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("po instrukcji „throw” powinno występować wyrażenie w tym samym wierszu kodu", function (err, _translation) {
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
describe("translating pl-PL string: instrukcje „with” są niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("instrukcje „with” są niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Zduplikowane nazwy parametrów formalnych nie są dozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zduplikowane nazwy parametrów formalnych nie są dozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Stałe liczbowe zapisane ósemkowo i znaki ucieczki są niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Stałe liczbowe zapisane ósemkowo i znaki ucieczki są niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowe użycie wyrażenia „eval” w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowe użycie wyrażenia „eval” w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowe użycie wyrażenia „arguments” w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowe użycie wyrażenia „arguments” w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Wywołanie usunięcia w odniesieniu do wyrażenie jest niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wywołanie usunięcia w odniesieniu do wyrażenie jest niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Wiele definicji właściwości jest niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wiele definicji właściwości jest niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: W trybie standardów deklaracje funkcji nie mogą być zagnieżdżone wewnątrz instrukcji lub bloku. Mogą występować tylko na najwyższym poziomie lub bezpośrednio wewnątrz treści funkcji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("W trybie standardów deklaracje funkcji nie mogą być zagnieżdżone wewnątrz instrukcji lub bloku. Mogą występować tylko na najwyższym poziomie lub bezpośrednio wewnątrz treści funkcji.", function (err, _translation) {
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
describe("translating pl-PL string: Użycie identyfikatora w postaci słowa kluczowego jest nieprawidłowe", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Użycie identyfikatora w postaci słowa kluczowego jest nieprawidłowe", function (err, _translation) {
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
describe("translating pl-PL string: Użycie identyfikatora w postaci słowa zastrzeżonego dla przyszłego użycia jest nieprawidłowe", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Użycie identyfikatora w postaci słowa zastrzeżonego dla przyszłego użycia jest nieprawidłowe", function (err, _translation) {
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
describe("translating pl-PL string: Użycie identyfikatora w postaci słowa zastrzeżonego dla przyszłego użycia jest nieprawidłowe. Ta nazwa identyfikatora jest zastrzeżona w trybie standardów.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Użycie identyfikatora w postaci słowa zastrzeżonego dla przyszłego użycia jest nieprawidłowe. Ta nazwa identyfikatora jest zastrzeżona w trybie standardów.", function (err, _translation) {
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
describe("translating pl-PL string: Funkcje setter muszą mieć jeden argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funkcje setter muszą mieć jeden argument", function (err, _translation) {
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
describe("translating pl-PL string: Błąd kompilacji kodu JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd kompilacji kodu JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: Błąd czasu wykonywania kodu JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd czasu wykonywania kodu JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: Nieznany błąd czasu wykonywania.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieznany błąd czasu wykonywania.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można wykonać przypisania do 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można wykonać przypisania do 'this'", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano liczby.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano liczby.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano funkcji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano funkcji.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można wykonać przypisania do wyniku funkcji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można wykonać przypisania do wyniku funkcji.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można indeksować obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można indeksować obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano ciągu znaków.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano ciągu znaków.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu typu Date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu typu Date", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowa lewa strona przypisania", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowa lewa strona przypisania", function (err, _translation) {
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
describe("translating pl-PL string: Niezdefiniowany identyfikator.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Niezdefiniowany identyfikator.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano wartości typu Boolean.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano wartości typu Boolean.", function (err, _translation) {
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
describe("translating pl-PL string: Nie można wykonać kodu programu ze skryptu uwolnionego.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można wykonać kodu programu ze skryptu uwolnionego.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano składowej obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano składowej obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu typu VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu typu VBArray", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu wyliczeniowego.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu wyliczeniowego.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu wyrażenia zwykłego.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu wyrażenia zwykłego.", function (err, _translation) {
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
describe("translating pl-PL string: Błąd składniowy w wyrażeniu zwykłym.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Błąd składniowy w wyrażeniu zwykłym.", function (err, _translation) {
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
describe("translating pl-PL string: Nieoczekiwany kwantyfikator.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieoczekiwany kwantyfikator.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku  ']' w wyrażeniu zwykłym.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku  ']' w wyrażeniu zwykłym.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano znaku ')' w wyrażeniu zwykłym.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano znaku ')' w wyrażeniu zwykłym.", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy zakres dla zbioru znaków.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy zakres dla zbioru znaków.", function (err, _translation) {
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
describe("translating pl-PL string: Wyjątek przerzucony i nie wyłapany", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wyjątek przerzucony i nie wyłapany", function (err, _translation) {
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
describe("translating pl-PL string: Funkcja nie posiada właściwego obiektu prototypowego", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funkcja nie posiada właściwego obiektu prototypowego", function (err, _translation) {
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
describe("translating pl-PL string: Adres URL do dekodowania zawiera nieprawidłowy znak", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Adres URL do dekodowania zawiera nieprawidłowy znak", function (err, _translation) {
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
describe("translating pl-PL string: Adres URL do dekodowania jest nieprawidłowo zakodowany", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Adres URL do dekodowania jest nieprawidłowo zakodowany", function (err, _translation) {
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
describe("translating pl-PL string: Liczba miejsc po przecinku jest poza zakresem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Liczba miejsc po przecinku jest poza zakresem", function (err, _translation) {
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
describe("translating pl-PL string: Dokładność jest poza zakresem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dokładność jest poza zakresem", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektów tablicy lub argumentów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektów tablicy lub argumentów", function (err, _translation) {
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
describe("translating pl-PL string: Długość tablicy musi być skończoną, dodatnią liczbą całkowitą", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Długość tablicy musi być skończoną, dodatnią liczbą całkowitą", function (err, _translation) {
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
describe("translating pl-PL string: Długości tablicy musi być przypisana skończona liczba dodatnia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Długości tablicy musi być przypisana skończona liczba dodatnia", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu tablicy", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu tablicy", function (err, _translation) {
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
describe("translating pl-PL string: Odwołanie cykliczne w argumencie wartości nie jest obsługiwane", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Odwołanie cykliczne w argumencie wartości nie jest obsługiwane", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy argument zamiany", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy argument zamiany", function (err, _translation) {
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
describe("translating pl-PL string: Lista argumentów za duża do zastosowania", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Lista argumentów za duża do zastosowania", function (err, _translation) {
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
describe("translating pl-PL string: Ponowna deklaracja właściwości const", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ponowna deklaracja właściwości const", function (err, _translation) {
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
describe("translating pl-PL string: Nie można skonfigurować obiektu członkowskiego", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można skonfigurować obiektu członkowskiego", function (err, _translation) {
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
describe("translating pl-PL string: Zmienna niezdefiniowana w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Zmienna niezdefiniowana w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Uzyskiwanie dostępu do właściwości „caller” obiektu funkcji lub argumentów jest niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uzyskiwanie dostępu do właściwości „caller” obiektu funkcji lub argumentów jest niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Uzyskiwanie dostępu do właściwości „callee” obiektu argumentów jest niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uzyskiwanie dostępu do właściwości „callee” obiektu argumentów jest niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Przypisanie właściwości tylko do odczytu jest niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Przypisanie właściwości tylko do odczytu jest niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Nie można utworzyć właściwości dla obiektu nierozszerzalnego", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można utworzyć właściwości dla obiektu nierozszerzalnego", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano funkcji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano funkcji.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano funkcji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano funkcji.", function (err, _translation) {
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
describe("translating pl-PL string: Właściwość nie może mieć jednocześnie metod dostępu i wartości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Właściwość nie może mieć jednocześnie metod dostępu i wartości", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt „this” jest pusty lub niezdefiniowany", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt „this” jest pusty lub niezdefiniowany", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano funkcji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano funkcji.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano ciągu znaków.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano ciągu znaków.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano wartości typu Boolean.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano wartości typu Boolean.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano daty", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano daty", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano liczby.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano liczby.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu typu VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu typu VBArray", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu wyliczeniowego.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu wyliczeniowego.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu RegExp", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy argument funkcji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy argument funkcji", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano funkcji.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano funkcji.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu typu VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu typu VBArray", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu.", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowa właściwość „length”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowa właściwość „length”", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektów tablicy lub argumentów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektów tablicy lub argumentów", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy argument operacji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy argument operacji", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy argument operacji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy argument operacji", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy deskryptor właściwości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy deskryptor właściwości", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zdefiniować właściwości: obiekt nie jest rozszerzalny", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zdefiniować właściwości: obiekt nie jest rozszerzalny", function (err, _translation) {
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
describe("translating pl-PL string: Nie można ponownie zdefiniować niekonfigurowalnej właściwości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można ponownie zdefiniować niekonfigurowalnej właściwości", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zdefiniować niezapisywalnej właściwości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zdefiniować niezapisywalnej właściwości", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zmodyfikować właściwości: wartość „length” jest niezapisywalna", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zmodyfikować właściwości: wartość „length” jest niezapisywalna", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zdefiniować właściwości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zdefiniować właściwości", function (err, _translation) {
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
describe("translating pl-PL string: Argument konstruktora tablicy z określonym typem jest nieprawidłowy", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument konstruktora tablicy z określonym typem jest nieprawidłowy", function (err, _translation) {
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
describe("translating pl-PL string: „this” nie jest obiektem tablicy z określonym typem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„this” nie jest obiektem tablicy z określonym typem", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowa wartość przesunięcia/długości podczas tworzenia tablicy z określonym typem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowa wartość przesunięcia/długości podczas tworzenia tablicy z określonym typem", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowa wartość początkowa/końcowa w metodzie tablicy podrzędnej dla tablicy z określonym typem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowa wartość początkowa/końcowa w metodzie tablicy podrzędnej dla tablicy z określonym typem", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowe źródło w operacji ustawiania tablicy z określonym typem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowe źródło w operacji ustawiania tablicy z określonym typem", function (err, _translation) {
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
describe("translating pl-PL string: „this” nie jest obiektem DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„this” nie jest obiektem DataView", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowe argumenty w obiekcie DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowe argumenty w obiekcie DataView", function (err, _translation) {
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
describe("translating pl-PL string: Dostęp do lokalizacji spoza określonej długości bufora w operacji obiektu DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dostęp do lokalizacji spoza określonej długości bufora w operacji obiektu DataView", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowe argumenty w obiekcie DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowe argumenty w obiekcie DataView", function (err, _translation) {
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
describe("translating pl-PL string: nieprawidłowa sygnatura funkcji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("nieprawidłowa sygnatura funkcji", function (err, _translation) {
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
describe("translating pl-PL string: nieprawidłowa sygnatura właściwości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("nieprawidłowa sygnatura właściwości", function (err, _translation) {
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
describe("translating pl-PL string: nieprawidłowy typ parametru wejściowego", function () {
	var translation;
	before(function (done) {
		errorToEnglish("nieprawidłowy typ parametru wejściowego", function (err, _translation) {
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
describe("translating pl-PL string: nieprawidłowy parametr wyjściowy", function () {
	var translation;
	before(function (done) {
		errorToEnglish("nieprawidłowy parametr wyjściowy", function (err, _translation) {
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
describe("translating pl-PL string: Dostęp do właściwości „arguments” funkcji jest niedozwolony w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dostęp do właściwości „arguments” funkcji jest niedozwolony w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu Inspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu Inspectable", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować argumentu na typ „char”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować argumentu na typ „char”", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować argumentu na typ „GUID”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować argumentu na typ „GUID”", function (err, _translation) {
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
describe("translating pl-PL string: Oczekiwano obiektu IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Oczekiwano obiektu IInspectable", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować obiektu na strukturę: w obiekcie brakuje oczekiwanej właściwości", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować obiektu na strukturę: w obiekcie brakuje oczekiwanej właściwości", function (err, _translation) {
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
describe("translating pl-PL string: Nieznany typ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieznany typ", function (err, _translation) {
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
describe("translating pl-PL string: Wywołano funkcję ze zbyt małą liczbą argumentów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wywołano funkcję ze zbyt małą liczbą argumentów", function (err, _translation) {
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
describe("translating pl-PL string: Typ nie umożliwia konstrukcji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typ nie umożliwia konstrukcji", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować wartości na obiekt PropertyValue: typ nie jest obsługiwany przez obiekt PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować wartości na obiekt PropertyValue: typ nie jest obsługiwany przez obiekt PropertyValue", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować wartości na obiekt IInspectable: typ nie jest obsługiwany przez obiekt IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować wartości na obiekt IInspectable: typ nie jest obsługiwany przez obiekt IInspectable", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować daty na obiekt Windows.Foundation.DateTime: wartość spoza prawidłowego zakresu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować daty na obiekt Windows.Foundation.DateTime: wartość spoza prawidłowego zakresu", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować wartości na obiekt Windows.Foundation.TimeSpan: wartość spoza prawidłowego zakresu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować wartości na obiekt Windows.Foundation.TimeSpan: wartość spoza prawidłowego zakresu", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy dostęp do obiektu Inspectable, który został już zwolniony", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy dostęp do obiektu Inspectable, który został już zwolniony", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zwolnić obiektu Inspectable, który został już zwolniony", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zwolnić obiektu Inspectable, który został już zwolniony", function (err, _translation) {
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
describe("translating pl-PL string: Typ obiektu „this” jest inny niż oczekiwany.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typ obiektu „this” jest inny niż oczekiwany.", function (err, _translation) {
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
describe("translating pl-PL string: Dla tablicy określono niedozwolone długość i rozmiar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dla tablicy określono niedozwolone długość i rozmiar", function (err, _translation) {
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
describe("translating pl-PL string: Wystąpił nieoczekiwany błąd podczas próby uzyskania informacji o metadanych", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wystąpił nieoczekiwany błąd podczas próby uzyskania informacji o metadanych", function (err, _translation) {
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
describe("translating pl-PL string: Stan ma wartość „error” (błąd), ale funkcja getResults nie zwróciła błędu.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Stan ma wartość „error” (błąd), ale funkcja getResults nie zwróciła błędu.", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy parametr stanu przekazany do dojścia ukończenia lub brak takiego parametru.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy parametr stanu przekazany do dojścia ukończenia lub brak takiego parametru.", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy parametr nadawcy przekazany do dojścia ukończenia lub brak takiego parametru.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy parametr nadawcy przekazany do dojścia ukończenia lub brak takiego parametru.", function (err, _translation) {
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
describe("translating pl-PL string: Nieskończoność", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieskończoność", function (err, _translation) {
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
describe("translating pl-PL string: -Nieskończoność", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Nieskończoność", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt nie obsługuje właściwości lub metody „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt nie obsługuje właściwości lub metody „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Argument dla funkcji „MyDynamicTestString” nie jest opcjonalny", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument dla funkcji „MyDynamicTestString” nie jest opcjonalny", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest liczbą", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest liczbą", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest funkcją", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest funkcją", function (err, _translation) {
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
describe("translating pl-PL string: Obiektu „MyDynamicTestString” nie można indeksować", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiektu „MyDynamicTestString” nie można indeksować", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest ciągiem znaków", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest ciągiem znaków", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest obiektem typu date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest obiektem typu date", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” jest pusty lub nie jest obiektem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” jest pusty lub nie jest obiektem", function (err, _translation) {
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
describe("translating pl-PL string: Nie można wykonać przypisania do „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można wykonać przypisania do „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Brak definicji „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Brak definicji „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest wartością typu Boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest wartością typu Boolean", function (err, _translation) {
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
describe("translating pl-PL string: Nie można usunąć „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można usunąć „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest obiektem typu VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest obiektem typu VBArray", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest obiektem typu JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest obiektem typu JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: „MyDynamicTestString” nie jest obiektem wyliczeniowym", function () {
	var translation;
	before(function (done) {
		errorToEnglish("„MyDynamicTestString” nie jest obiektem wyliczeniowym", function (err, _translation) {
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
describe("translating pl-PL string: Symbol „MyDynamicTestString” nie jest obiektem wyrażenia regularnego", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Symbol „MyDynamicTestString” nie jest obiektem wyrażenia regularnego", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString nie jest obiektem Array ani obiektem argumentów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie jest obiektem Array ani obiektem argumentów", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString nie jest obiektem Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString nie jest obiektem Array", function (err, _translation) {
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
describe("translating pl-PL string: Atrybut „MyDynamicTestString” dotyczący deskryptora właściwości nie może mieć wartości „true” dla tego obiektu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Atrybut „MyDynamicTestString” dotyczący deskryptora właściwości nie może mieć wartości „true” dla tego obiektu", function (err, _translation) {
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
describe("translating pl-PL string: Atrybut „MyDynamicTestString” dotyczący deskryptora właściwości nie może mieć wartości „false” dla tego obiektu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Atrybut „MyDynamicTestString” dotyczący deskryptora właściwości nie może mieć wartości „false” dla tego obiektu", function (err, _translation) {
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
describe("translating pl-PL string: Ponowna deklaracja stałej „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ponowna deklaracja stałej „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Wywołanie usunięcia w odniesieniu do „MyDynamicTestString” jest niedozwolone w trybie standardów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wywołanie usunięcia w odniesieniu do „MyDynamicTestString” jest niedozwolone w trybie standardów", function (err, _translation) {
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
describe("translating pl-PL string: Nie można ustawić właściwości „MyDynamicTestString” dla niezdefiniowanego lub pustego odwołania", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można ustawić właściwości „MyDynamicTestString” dla niezdefiniowanego lub pustego odwołania", function (err, _translation) {
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
describe("translating pl-PL string: Nie można pobrać właściwości „MyDynamicTestString” dla niezdefiniowanego lub pustego odwołania", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można pobrać właściwości „MyDynamicTestString” dla niezdefiniowanego lub pustego odwołania", function (err, _translation) {
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
describe("translating pl-PL string: Nie można usunąć właściwości „MyDynamicTestString” dla niezdefiniowanego lub pustego odwołania", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można usunąć właściwości „MyDynamicTestString” dla niezdefiniowanego lub pustego odwołania", function (err, _translation) {
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
describe("translating pl-PL string: Nie można uzyskać dostępu do właściwości „MyDynamicTestString”: typ „VarDate” nie obsługuje właściwości zdefiniowanych przez użytkownika", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można uzyskać dostępu do właściwości „MyDynamicTestString”: typ „VarDate” nie obsługuje właściwości zdefiniowanych przez użytkownika", function (err, _translation) {
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
describe("translating pl-PL string: Wartość właściwości „MyDynamicTestString” nie jest obiektem Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wartość właściwości „MyDynamicTestString” nie jest obiektem Function", function (err, _translation) {
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
describe("translating pl-PL string: Wartość właściwości „MyDynamicTestString” jest pusta lub niezdefiniowana, nie jest obiektem Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wartość właściwości „MyDynamicTestString” jest pusta lub niezdefiniowana, nie jest obiektem Function", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” jest pusty lub niezdefiniowany", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” jest pusty lub niezdefiniowany", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie należy do klasy Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie należy do klasy Object", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem Function", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem String", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem String", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem Boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem Boolean", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem Date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem Date", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem Number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem Number", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem VBArray", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem Enumerator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem Enumerator", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt „this” nie jest obiektem RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt „this” nie jest obiektem RegExp", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: nieprawidłowy argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: nieprawidłowy argument", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: argument nie jest klasy Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie jest klasy Object", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: argument nie jest obiektem JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie jest obiektem JavaScript", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: argument nie jest obiektem Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie jest obiektem Function", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: argument nie jest obiektem VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie jest obiektem VBArray", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: argument jest pusty lub niezdefiniowany", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument jest pusty lub niezdefiniowany", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: argument nie jest klasy Object i nie jest pusty", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie jest klasy Object i nie jest pusty", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: argument nie ma prawidłowej właściwości „length”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argument nie ma prawidłowej właściwości „length”", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: oczekiwano obiektu tablicy lub argumentów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: oczekiwano obiektu tablicy lub argumentów", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy argument operacji „MyDynamicTestString”: oczekiwano obiektu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy argument operacji „MyDynamicTestString”: oczekiwano obiektu", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy argument operacji „MyDynamicTestString”: oczekiwano funkcji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy argument operacji „MyDynamicTestString”: oczekiwano funkcji", function (err, _translation) {
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
describe("translating pl-PL string: Nieprawidłowy deskryptor właściwości „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nieprawidłowy deskryptor właściwości „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zdefiniować właściwości „MyDynamicTestString”: obiekt nie jest rozszerzalny", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zdefiniować właściwości „MyDynamicTestString”: obiekt nie jest rozszerzalny", function (err, _translation) {
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
describe("translating pl-PL string: Nie można ponownie zdefiniować niekonfigurowalnej właściwości „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można ponownie zdefiniować niekonfigurowalnej właściwości „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zdefiniować niezapisywalnej właściwości „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zdefiniować niezapisywalnej właściwości „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zmodyfikować właściwości „MyDynamicTestString”: wartość „length” jest niezapisywalna", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zmodyfikować właściwości „MyDynamicTestString”: wartość „length” jest niezapisywalna", function (err, _translation) {
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
describe("translating pl-PL string: Nie można zdefiniować właściwości „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można zdefiniować właściwości „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Wymagany argument MyDynamicTestString w metodzie obiektu DataView nie został określony", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Wymagany argument MyDynamicTestString w metodzie obiektu DataView nie został określony", function (err, _translation) {
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
describe("translating pl-PL string: Argument konstruktora obiektu DataView MyDynamicTestString jest nieprawidłowy", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument konstruktora obiektu DataView MyDynamicTestString jest nieprawidłowy", function (err, _translation) {
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
describe("translating pl-PL string: Funkcja „MyDynamicTestString” ma nieprawidłową sygnaturę i nie można jej wywołać", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Funkcja „MyDynamicTestString” ma nieprawidłową sygnaturę i nie można jej wywołać", function (err, _translation) {
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
describe("translating pl-PL string: Właściwość „MyDynamicTestString” ma nieprawidłową sygnaturę i nie można uzyskać do niej dostępu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Właściwość „MyDynamicTestString” ma nieprawidłową sygnaturę i nie można uzyskać do niej dostępu", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt z nazwą runtimeclass MyDynamicTestString mający interfejs domyślny Windows.Foundation.IPropertyValue nie jest obsługiwany jako typ parametru wejściowego", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt z nazwą runtimeclass MyDynamicTestString mający interfejs domyślny Windows.Foundation.IPropertyValue nie jest obsługiwany jako typ parametru wejściowego", function (err, _translation) {
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
describe("translating pl-PL string: Obiekt z interfejsem Windows.Foundation.IPropertyValue mający nazwę runtimeclass MyDynamicTestString nie jest obsługiwany jako parametr wyjściowy", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Obiekt z interfejsem Windows.Foundation.IPropertyValue mający nazwę runtimeclass MyDynamicTestString nie jest obsługiwany jako parametr wyjściowy", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: „this” nie jest obiektem Inspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: „this” nie jest obiektem Inspectable", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: nie można przekonwertować argumentu na typ „char”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: nie można przekonwertować argumentu na typ „char”", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: nie można przekonwertować argumentu na typ „GUID”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: nie można przekonwertować argumentu na typ „GUID”", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: nie można przekonwertować zwróconej wartości na obiekt IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: nie można przekonwertować zwróconej wartości na obiekt IInspectable", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować obiektu na strukturę: w obiekcie brakuje oczekiwanej właściwości „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować obiektu na strukturę: w obiekcie brakuje oczekiwanej właściwości „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: Nie odnaleziono typu „MyDynamicTestString”", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie odnaleziono typu „MyDynamicTestString”", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: wywołano funkcję ze zbyt małą liczbą argumentów", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: wywołano funkcję ze zbyt małą liczbą argumentów", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: typ nie umożliwia konstrukcji", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: typ nie umożliwia konstrukcji", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować wartości na obiekt PropertyValue: wartość MyDynamicTestString nie jest obsługiwana przez obiekt PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować wartości na obiekt PropertyValue: wartość MyDynamicTestString nie jest obsługiwana przez obiekt PropertyValue", function (err, _translation) {
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
describe("translating pl-PL string: Nie można przekonwertować wartości na obiekt IInspectable: wartość MyDynamicTestString nie jest obsługiwana przez obiekt IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nie można przekonwertować wartości na obiekt IInspectable: wartość MyDynamicTestString nie jest obsługiwana przez obiekt IInspectable", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: obiekt Inspectable „this” został zwolniony i nie można uzyskać do niego dostępu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: obiekt Inspectable „this” został zwolniony i nie można uzyskać do niego dostępu", function (err, _translation) {
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
describe("translating pl-PL string: Typ obiektu „this” jest inny niż oczekiwany: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Typ obiektu „this” jest inny niż oczekiwany: MyDynamicTestString", function (err, _translation) {
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
describe("translating pl-PL string: MyDynamicTestString: wystąpił nieoczekiwany błąd podczas próby uzyskania informacji o metadanych", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: wystąpił nieoczekiwany błąd podczas próby uzyskania informacji o metadanych", function (err, _translation) {
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
describe("translating pl-PL string: Podana data jest niedostępna w kalendarzu ustawionym według bieżących ustawień regionalnych", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Podana data jest niedostępna w kalendarzu ustawionym według bieżących ustawień regionalnych", function (err, _translation) {
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
