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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
