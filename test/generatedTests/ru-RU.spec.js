var errorToEnglish = require("../../lib/errortoenglish");
describe("translating ru-RU string: Недопустимый вызов или аргумент процедуры", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый вызов или аргумент процедуры", function (err, _translation) {
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
describe("translating ru-RU string: Переполнение", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Переполнение", function (err, _translation) {
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
describe("translating ru-RU string: Недостаточно памяти", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недостаточно памяти", function (err, _translation) {
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
describe("translating ru-RU string: Индекс выходит за пределы допустимого диапазона", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Индекс выходит за пределы допустимого диапазона", function (err, _translation) {
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
describe("translating ru-RU string: Массив имеет фиксированную длину или временно блокирован", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Массив имеет фиксированную длину или временно блокирован", function (err, _translation) {
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
describe("translating ru-RU string: Деление на 0", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Деление на 0", function (err, _translation) {
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
describe("translating ru-RU string: Несоответствие типа", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Несоответствие типа", function (err, _translation) {
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
describe("translating ru-RU string: Недостаточно памяти для строки", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недостаточно памяти для строки", function (err, _translation) {
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
describe("translating ru-RU string: Не удается выполнить требуемую операцию", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается выполнить требуемую операцию", function (err, _translation) {
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
describe("translating ru-RU string: Недостаточно места в стеке", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недостаточно места в стеке", function (err, _translation) {
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
describe("translating ru-RU string: Процедура Sub или Function не определена", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Процедура Sub или Function не определена", function (err, _translation) {
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
describe("translating ru-RU string: Ошибка при загрузке DLL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ошибка при загрузке DLL", function (err, _translation) {
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
describe("translating ru-RU string: Внутренняя ошибка", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Внутренняя ошибка", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое имя или номер файла", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое имя или номер файла", function (err, _translation) {
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
describe("translating ru-RU string: Файл не найден", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Файл не найден", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый режим файла", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый режим файла", function (err, _translation) {
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
describe("translating ru-RU string: Файл уже открыт", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Файл уже открыт", function (err, _translation) {
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
describe("translating ru-RU string: Ошибка устройства ввода/вывода", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ошибка устройства ввода/вывода", function (err, _translation) {
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
describe("translating ru-RU string: Файл уже существует", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Файл уже существует", function (err, _translation) {
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
describe("translating ru-RU string: Диск переполнен", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Диск переполнен", function (err, _translation) {
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
describe("translating ru-RU string: Ввод данных за пределами файла", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ввод данных за пределами файла", function (err, _translation) {
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
describe("translating ru-RU string: Слишком много файлов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Слишком много файлов", function (err, _translation) {
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
describe("translating ru-RU string: Нет доступа к устройству", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Нет доступа к устройству", function (err, _translation) {
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
describe("translating ru-RU string: Разрешение отклонено", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Разрешение отклонено", function (err, _translation) {
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
describe("translating ru-RU string: Диск не готов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Диск не готов", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно переименование с другим именем диска", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно переименование с другим именем диска", function (err, _translation) {
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
describe("translating ru-RU string: Ошибка доступа к файлу или каталогу", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ошибка доступа к файлу или каталогу", function (err, _translation) {
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
describe("translating ru-RU string: Путь не найден", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Путь не найден", function (err, _translation) {
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
describe("translating ru-RU string: Объектная переменная или переменная блока With не задана", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Объектная переменная или переменная блока With не задана", function (err, _translation) {
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
describe("translating ru-RU string: Цикл For не инициализирован", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Цикл For не инициализирован", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое использование Null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое использование Null", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно создание требуемого временного файла", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно создание требуемого временного файла", function (err, _translation) {
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
describe("translating ru-RU string: Требуется объект", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Требуется объект", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно создание объекта сервером программирования объектов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно создание объекта сервером программирования объектов", function (err, _translation) {
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
describe("translating ru-RU string: Класс не поддерживает программирование объектов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Класс не поддерживает программирование объектов", function (err, _translation) {
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
describe("translating ru-RU string: Не найдено имя файла или класса при операции программирования объектов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не найдено имя файла или класса при операции программирования объектов", function (err, _translation) {
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
describe("translating ru-RU string: Объект не поддерживает это свойство или метод", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Объект не поддерживает это свойство или метод", function (err, _translation) {
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
describe("translating ru-RU string: Ошибка программирования объектов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ошибка программирования объектов", function (err, _translation) {
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
describe("translating ru-RU string: Команда не поддерживается объектом", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Команда не поддерживается объектом", function (err, _translation) {
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
describe("translating ru-RU string: Объект не поддерживает именованные аргументы", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Объект не поддерживает именованные аргументы", function (err, _translation) {
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
describe("translating ru-RU string: Объект не поддерживает текущую национальную настройку", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Объект не поддерживает текущую национальную настройку", function (err, _translation) {
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
describe("translating ru-RU string: Именованный аргумент не найден", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Именованный аргумент не найден", function (err, _translation) {
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
describe("translating ru-RU string: Обязательный аргумент", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Обязательный аргумент", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое число аргументов или присвоение значения свойства", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое число аргументов или присвоение значения свойства", function (err, _translation) {
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
describe("translating ru-RU string: Объект не является семейством", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Объект не является семейством", function (err, _translation) {
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
describe("translating ru-RU string: Указанная функция DLL не найдена", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Указанная функция DLL не найдена", function (err, _translation) {
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
describe("translating ru-RU string: Переменная использует не поддерживаемый в JavaScript тип программирования объектов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Переменная использует не поддерживаемый в JavaScript тип программирования объектов", function (err, _translation) {
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
describe("translating ru-RU string: Компьютер удаленного сервера не существует или недоступен", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Компьютер удаленного сервера не существует или недоступен", function (err, _translation) {
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
describe("translating ru-RU string: Присвоение значения переменной невозможно", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Присвоение значения переменной невозможно", function (err, _translation) {
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
describe("translating ru-RU string: Применение объекта в сценариях небезопасно", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Применение объекта в сценариях небезопасно", function (err, _translation) {
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
describe("translating ru-RU string: Инициализация объекта небезопасна", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Инициализация объекта небезопасна", function (err, _translation) {
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
describe("translating ru-RU string: Создание объекта небезопасно", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Создание объекта небезопасно", function (err, _translation) {
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
describe("translating ru-RU string: Возникло исключение", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Возникло исключение", function (err, _translation) {
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
describe("translating ru-RU string: Недостаточно памяти", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недостаточно памяти", function (err, _translation) {
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
describe("translating ru-RU string: Синтаксическая ошибка", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Синтаксическая ошибка", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие ':'", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие ';'", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие '('", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие ')'", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие ']'", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие '{'", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие '}'", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие идентификатора", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие идентификатора", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие '='", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие '/'", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое число", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое число", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый знак", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый знак", function (err, _translation) {
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
describe("translating ru-RU string: Незавершенная строковая константа", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Незавершенная строковая константа", function (err, _translation) {
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
describe("translating ru-RU string: Незавершенная строка комментария", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Незавершенная строка комментария", function (err, _translation) {
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
describe("translating ru-RU string: Инструкция 'return' вне функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Инструкция 'return' вне функции", function (err, _translation) {
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
describe("translating ru-RU string: Инструкция 'break' не может находиться вне блока loop", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Инструкция 'break' не может находиться вне блока loop", function (err, _translation) {
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
describe("translating ru-RU string: Инструкция 'continue' не может находиться вне блока loop", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Инструкция 'continue' не может находиться вне блока loop", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается шестнадцатеричное число", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается шестнадцатеричное число", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие 'while'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие 'while'", function (err, _translation) {
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
describe("translating ru-RU string: Метка переопределена", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Метка переопределена", function (err, _translation) {
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
describe("translating ru-RU string: Метка не найдена", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Метка не найдена", function (err, _translation) {
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
describe("translating ru-RU string: Инструкция 'default' может присутствовать в конструкции 'switch' только один раз", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Инструкция 'default' может присутствовать в конструкции 'switch' только один раз", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие идентификатора, строки или числа", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие идентификатора, строки или числа", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие '@end'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие '@end'", function (err, _translation) {
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
describe("translating ru-RU string: Условная компиляция выключена", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Условная компиляция выключена", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие константы", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие константы", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие '@'", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается 'catch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается 'catch'", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается 'var'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается 'var'", function (err, _translation) {
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
describe("translating ru-RU string: \"throw\" требует после себя выражение на той же строке", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"throw\" требует после себя выражение на той же строке", function (err, _translation) {
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
describe("translating ru-RU string: операторы \"with\" запрещены в строгом режиме", function () {
    var translation;
    before(function (done) {
        errorToEnglish("операторы \"with\" запрещены в строгом режиме", function (err, _translation) {
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
describe("translating ru-RU string: Дублирование имен формальных параметров в строгом режиме запрещено", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Дублирование имен формальных параметров в строгом режиме запрещено", function (err, _translation) {
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
describe("translating ru-RU string: Восьмеричные численные литералы и escape-символы в строгом режиме запрещены", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Восьмеричные численные литералы и escape-символы в строгом режиме запрещены", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое использование функции \"eval\" в строгом режиме", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое использование функции \"eval\" в строгом режиме", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое использование функции \"arguments\" в строгом режиме", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое использование функции \"arguments\" в строгом режиме", function (err, _translation) {
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
describe("translating ru-RU string: Вызов удаления для выражения в строгом режиме запрещен", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Вызов удаления для выражения в строгом режиме запрещен", function (err, _translation) {
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
describe("translating ru-RU string: Использование нескольких определений свойства в строгом режиме запрещено", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Использование нескольких определений свойства в строгом режиме запрещено", function (err, _translation) {
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
describe("translating ru-RU string: При использовании строгого режима объявления функций не могут располагаться внутри оператора или блока. Объявления функций могут располагаться только на верхнем уровне или непосредственно в теле функции.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("При использовании строгого режима объявления функций не могут располагаться внутри оператора или блока. Объявления функций могут располагаться только на верхнем уровне или непосредственно в теле функции.", function (err, _translation) {
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
describe("translating ru-RU string: Использование ключевых слов для идентификатора недопустимо", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Использование ключевых слов для идентификатора недопустимо", function (err, _translation) {
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
describe("translating ru-RU string: Использование зарезервированных слов для идентификатора недопустимо", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Использование зарезервированных слов для идентификатора недопустимо", function (err, _translation) {
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
describe("translating ru-RU string: Использование зарезервированных слов для идентификатора недопустимо. Имя идентификатора зарезервировано в строгом режиме.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Использование зарезервированных слов для идентификатора недопустимо. Имя идентификатора зарезервировано в строгом режиме.", function (err, _translation) {
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
describe("translating ru-RU string: У функций Setter должен быть один аргумент", function () {
    var translation;
    before(function (done) {
        errorToEnglish("У функций Setter должен быть один аргумент", function (err, _translation) {
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
describe("translating ru-RU string: Ошибка компиляции JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ошибка компиляции JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: Ошибка выполнения JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ошибка выполнения JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: Неизвестная ошибка выполнения", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Неизвестная ошибка выполнения", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно присвоение значения 'this'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно присвоение значения 'this'", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие числа", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие числа", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие функции", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно присвоение результату функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно присвоение результату функции", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно индексирование объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно индексирование объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие строки", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие строки", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта-даты", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта-даты", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимая величина в левой части присвоения", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимая величина в левой части присвоения", function (err, _translation) {
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
describe("translating ru-RU string: Неопределенный идентификатор", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Неопределенный идентификатор", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие логического значения", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие логического значения", function (err, _translation) {
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
describe("translating ru-RU string: Не удается выполнить программу из освобожденного сценария", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается выполнить программу из освобожденного сценария", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие компонента объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие компонента объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие VBArray", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается объект JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается объект JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта Enumerator", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта Enumerator", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта регулярного выражения", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта регулярного выражения", function (err, _translation) {
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
describe("translating ru-RU string: Синтаксическая ошибка в регулярном выражении", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Синтаксическая ошибка в регулярном выражении", function (err, _translation) {
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
describe("translating ru-RU string: Неизвестный числовой показатель", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Неизвестный числовой показатель", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие ']' в регулярном выражении", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие ']' в регулярном выражении", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие ')' в регулярном выражении", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие ')' в регулярном выражении", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый диапазон в наборе знаков", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый диапазон в наборе знаков", function (err, _translation) {
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
describe("translating ru-RU string: Исключение брошено и не поймано", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Исключение брошено и не поймано", function (err, _translation) {
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
describe("translating ru-RU string: Функция не имеет правильного объекта - прототипа", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Функция не имеет правильного объекта - прототипа", function (err, _translation) {
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
describe("translating ru-RU string: Обнаружен недопустимый знак при попытке кодирования URI", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Обнаружен недопустимый знак при попытке кодирования URI", function (err, _translation) {
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
describe("translating ru-RU string: Обнаружена недопустимая кодировка при попытке декодирования URI", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Обнаружена недопустимая кодировка при попытке декодирования URI", function (err, _translation) {
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
describe("translating ru-RU string: Количество цифр дробной части превышает допустимое значение", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Количество цифр дробной части превышает допустимое значение", function (err, _translation) {
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
describe("translating ru-RU string: Точность представления превышает допустимую", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Точность представления превышает допустимую", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта Array или arguments", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта Array или arguments", function (err, _translation) {
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
describe("translating ru-RU string: Длина массива должна быть конечным положительным целым числом", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Длина массива должна быть конечным положительным целым числом", function (err, _translation) {
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
describe("translating ru-RU string: Длине массива должно быть присвоено конечное положительное значение", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Длине массива должно быть присвоено конечное положительное значение", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта Array", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта Array", function (err, _translation) {
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
describe("translating ru-RU string: Циклические ссылки не поддерживаются в аргументах значений", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Циклические ссылки не поддерживаются в аргументах значений", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый аргумент замены", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый аргумент замены", function (err, _translation) {
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
describe("translating ru-RU string: Не удается применить список аргументов из-за слишком большого размера", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается применить список аргументов из-за слишком большого размера", function (err, _translation) {
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
describe("translating ru-RU string: Повторное объявление константного свойства", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Повторное объявление константного свойства", function (err, _translation) {
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
describe("translating ru-RU string: Ненастраиваемый элемент объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ненастраиваемый элемент объекта", function (err, _translation) {
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
describe("translating ru-RU string: Неопределенная переменная в строгом режиме", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Неопределенная переменная в строгом режиме", function (err, _translation) {
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
describe("translating ru-RU string: Доступ к свойству \"caller\" функции или объекта \"arguments\" в строгом режиме запрещен", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Доступ к свойству \"caller\" функции или объекта \"arguments\" в строгом режиме запрещен", function (err, _translation) {
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
describe("translating ru-RU string: Доступ к свойству \"callee\" объекта \"arguments\" в строгом режиме запрещен", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Доступ к свойству \"callee\" объекта \"arguments\" в строгом режиме запрещен", function (err, _translation) {
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
describe("translating ru-RU string: Присвоение значений свойствам только для чтения в строгом режиме запрещено", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Присвоение значений свойствам только для чтения в строгом режиме запрещено", function (err, _translation) {
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
describe("translating ru-RU string: Не удается создать свойство для нерасширяемого объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается создать свойство для нерасширяемого объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие функции", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие функции", function (err, _translation) {
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
describe("translating ru-RU string: Свойство не может одновременно иметь методы доступа и значение", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Свойство не может одновременно иметь методы доступа и значение", function (err, _translation) {
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
describe("translating ru-RU string: объект \"this\" равен null или не определен", function () {
    var translation;
    before(function (done) {
        errorToEnglish("объект \"this\" равен null или не определен", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие функции", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие строки", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие строки", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие логического значения", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие логического значения", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается дата", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается дата", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие числа", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие числа", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие VBArray", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается объект JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается объект JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта Enumerator", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта Enumerator", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается объект RegExp", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается объект RegExp", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый аргумент функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый аргумент функции", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается объект JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается объект JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие функции", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие VBArray", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое свойство \"length\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое свойство \"length\"", function (err, _translation) {
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
describe("translating ru-RU string: Предполагается наличие объекта Array или arguments", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Предполагается наличие объекта Array или arguments", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый операнд", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый операнд", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый операнд", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый операнд", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый дескриптор свойства", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый дескриптор свойства", function (err, _translation) {
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
describe("translating ru-RU string: Не удается определить свойство: объект не является расширяемым", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается определить свойство: объект не является расширяемым", function (err, _translation) {
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
describe("translating ru-RU string: Не удается переопределить ненастраиваемое свойство", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается переопределить ненастраиваемое свойство", function (err, _translation) {
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
describe("translating ru-RU string: Не удается изменить недоступное для записи свойство", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается изменить недоступное для записи свойство", function (err, _translation) {
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
describe("translating ru-RU string: Не удается изменить свойство: свойство \"length\" недоступно для записи", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается изменить свойство: свойство \"length\" недоступно для записи", function (err, _translation) {
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
describe("translating ru-RU string: Не удается определить свойство", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается определить свойство", function (err, _translation) {
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
describe("translating ru-RU string: Аргумент конструктора типизированного массива недопустим", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Аргумент конструктора типизированного массива недопустим", function (err, _translation) {
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
describe("translating ru-RU string: \"this\" не является объектом типизированного массива", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"this\" не является объектом типизированного массива", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое смещение или длина при создании типизированного массива", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое смещение или длина при создании типизированного массива", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимое значение начала или конца в методе подмассива типизированного массива", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимое значение начала или конца в методе подмассива типизированного массива", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый источник в наборе типизированного массива", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый источник в наборе типизированного массива", function (err, _translation) {
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
describe("translating ru-RU string: \"this\" не является объектом DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"this\" не является объектом DataView", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимые аргументы в DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимые аргументы в DataView", function (err, _translation) {
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
describe("translating ru-RU string: DataView пытается получить доступ к данным вне указанной длины буфера", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView пытается получить доступ к данным вне указанной длины буфера", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимые аргументы в DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимые аргументы в DataView", function (err, _translation) {
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
describe("translating ru-RU string: недопустимая подпись функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("недопустимая подпись функции", function (err, _translation) {
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
describe("translating ru-RU string: недопустимая подпись свойства", function () {
    var translation;
    before(function (done) {
        errorToEnglish("недопустимая подпись свойства", function (err, _translation) {
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
describe("translating ru-RU string: недопустимый тип входного параметра", function () {
    var translation;
    before(function (done) {
        errorToEnglish("недопустимый тип входного параметра", function (err, _translation) {
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
describe("translating ru-RU string: недопустимый тип выходного параметра", function () {
    var translation;
    before(function (done) {
        errorToEnglish("недопустимый тип выходного параметра", function (err, _translation) {
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
describe("translating ru-RU string: В строгом режиме невозможно получить доступ к свойству \"arguments\" функции", function () {
    var translation;
    before(function (done) {
        errorToEnglish("В строгом режиме невозможно получить доступ к свойству \"arguments\" функции", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается объект, поддерживающий проверку", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается объект, поддерживающий проверку", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать аргумент в тип \"char\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать аргумент в тип \"char\"", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать аргумент в тип \"GUID\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать аргумент в тип \"GUID\"", function (err, _translation) {
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
describe("translating ru-RU string: Ожидается IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидается IInspectable", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать объект в структуру: отсутствует ожидаемое свойство объекта", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать объект в структуру: отсутствует ожидаемое свойство объекта", function (err, _translation) {
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
describe("translating ru-RU string: Неизвестный тип", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Неизвестный тип", function (err, _translation) {
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
describe("translating ru-RU string: Функция вызвана с недостаточным числом аргументов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Функция вызвана с недостаточным числом аргументов", function (err, _translation) {
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
describe("translating ru-RU string: Тип не является конструируемым", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Тип не является конструируемым", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать значение в PropertyValue: тип не поддерживается PropertyValue", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать значение в PropertyValue: тип не поддерживается PropertyValue", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать значение в IInspectable: тип не поддерживается IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать значение в IInspectable: тип не поддерживается IInspectable", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать Date в Windows.Foundation.DateTime: значение находится вне допустимого диапазона", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать Date в Windows.Foundation.DateTime: значение находится вне допустимого диапазона", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать значение в Windows.Foundation.TimeSpan: значение находится вне допустимого диапазона", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать значение в Windows.Foundation.TimeSpan: значение находится вне допустимого диапазона", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимая попытка доступа к уже освобожденному объекту, поддерживающему проверку", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимая попытка доступа к уже освобожденному объекту, поддерживающему проверку", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно освободить уже освобожденный объект, поддерживающий проверку", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно освободить уже освобожденный объект, поддерживающий проверку", function (err, _translation) {
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
describe("translating ru-RU string: Ожидался другой тип объекта \"this\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидался другой тип объекта \"this\"", function (err, _translation) {
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
describe("translating ru-RU string: Заданы недопустимая длина и размер массива", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Заданы недопустимая длина и размер массива", function (err, _translation) {
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
describe("translating ru-RU string: Непредвиденный сбой при попытке получения метаданных", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Непредвиденный сбой при попытке получения метаданных", function (err, _translation) {
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
describe("translating ru-RU string: Состояние — \"error\", но команда getResults не возвратила ошибку", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Состояние — \"error\", но команда getResults не возвратила ошибку", function (err, _translation) {
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
describe("translating ru-RU string: Параметр Status недопустим или не передан в обработчик Completed", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Параметр Status недопустим или не передан в обработчик Completed", function (err, _translation) {
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
describe("translating ru-RU string: Параметр Sender недопустим или не передан в обработчик Completed", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Параметр Sender недопустим или не передан в обработчик Completed", function (err, _translation) {
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
describe("translating ru-RU string: Бесконечность", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Бесконечность", function (err, _translation) {
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
describe("translating ru-RU string: -Бесконечность", function () {
    var translation;
    before(function (done) {
        errorToEnglish("-Бесконечность", function (err, _translation) {
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
describe("translating ru-RU string: Объект не поддерживает свойство или метод \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Объект не поддерживает свойство или метод \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: Аргумент функции \"MyDynamicTestString\" является обязательным", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Аргумент функции \"MyDynamicTestString\" является обязательным", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" не является числом", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" не является числом", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" не является функцией", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" не является функцией", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" не является индексируемым объектом", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" не является индексируемым объектом", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" не является строкой", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" не является строкой", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" не является объектом-датой", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" не является объектом-датой", function (err, _translation) {
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
describe("translating ru-RU string: Значением \"MyDynamicTestString\" является NULL или это значение не является объектом", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Значением \"MyDynamicTestString\" является NULL или это значение не является объектом", function (err, _translation) {
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
describe("translating ru-RU string: Невозможно присвоить \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Невозможно присвоить \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" не определено", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" не определено", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" не является логическим значением", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" не является логическим значением", function (err, _translation) {
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
describe("translating ru-RU string: Не удается удалить \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается удалить \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" — не VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" — не VBArray", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" — не объект JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" — не объект JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" — не объект Enumerator", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" — не объект Enumerator", function (err, _translation) {
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
describe("translating ru-RU string: \"MyDynamicTestString\" — не объект регулярного выражения", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"MyDynamicTestString\" — не объект регулярного выражения", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString — не является ни объектом Array, ни объектом аргументов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString — не является ни объектом Array, ни объектом аргументов", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString — не объект Array", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString — не объект Array", function (err, _translation) {
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
describe("translating ru-RU string: Для данного объекта атрибут \"MyDynamicTestString\" дескриптора свойства не может иметь значение True", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Для данного объекта атрибут \"MyDynamicTestString\" дескриптора свойства не может иметь значение True", function (err, _translation) {
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
describe("translating ru-RU string: Для данного объекта атрибут \"MyDynamicTestString\" дескриптора свойства не может иметь значение False", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Для данного объекта атрибут \"MyDynamicTestString\" дескриптора свойства не может иметь значение False", function (err, _translation) {
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
describe("translating ru-RU string: Повторное объявление константы \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Повторное объявление константы \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: Вызов delete для \"MyDynamicTestString\" в строгом режиме запрещен", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Вызов delete для \"MyDynamicTestString\" в строгом режиме запрещен", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось задать свойство \"MyDynamicTestString\" ссылки, значение которой не определено или является NULL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось задать свойство \"MyDynamicTestString\" ссылки, значение которой не определено или является NULL", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось получить свойство \"MyDynamicTestString\" ссылки, значение которой не определено или является NULL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось получить свойство \"MyDynamicTestString\" ссылки, значение которой не определено или является NULL", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось удалить свойство \"MyDynamicTestString\" ссылки, значение которой не определено или является NULL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось удалить свойство \"MyDynamicTestString\" ссылки, значение которой не определено или является NULL", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось получить доступ к свойству \"MyDynamicTestString\": тип \"VarDate\" не поддерживает пользовательские свойства", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось получить доступ к свойству \"MyDynamicTestString\": тип \"VarDate\" не поддерживает пользовательские свойства", function (err, _translation) {
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
describe("translating ru-RU string: Значение свойства \"MyDynamicTestString\" не является объектом Function", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Значение свойства \"MyDynamicTestString\" не является объектом Function", function (err, _translation) {
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
describe("translating ru-RU string: Значением свойства \"MyDynamicTestString\" или является NULL, или оно не определено, или не является объектом Function", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Значением свойства \"MyDynamicTestString\" или является NULL, или оно не определено, или не является объектом Function", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: значением \"this\" является NULL или оно не определено", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: значением \"this\" является NULL или оно не определено", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом Function", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом Function", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом String", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом String", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом Boolean", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом Boolean", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом Date", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом Date", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом Number", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом Number", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом VBArray", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом Enumerator", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом Enumerator", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом RegExp", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом RegExp", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: недопустимый аргумент", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: недопустимый аргумент", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: аргумент не является объектом", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: аргумент не является объектом", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: аргумент не является объектом JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: аргумент не является объектом JavaScript", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: аргумент не является объектом Function", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: аргумент не является объектом Function", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: аргумент не является объектом VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: аргумент не является объектом VBArray", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: аргумент не определен или его значением является NULL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: аргумент не определен или его значением является NULL", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: аргумент не является объектом и его значением не является NULL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: аргумент не является объектом и его значением не является NULL", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: у аргумента нет допустимого значения свойства \"length\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: у аргумента нет допустимого значения свойства \"length\"", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: ожидается массив или объект аргументов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: ожидается массив или объект аргументов", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый операнд \"MyDynamicTestString\": ожидается объект", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый операнд \"MyDynamicTestString\": ожидается объект", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый операнд \"MyDynamicTestString\": ожидается функция", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый операнд \"MyDynamicTestString\": ожидается функция", function (err, _translation) {
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
describe("translating ru-RU string: Недопустимый дескриптор свойства \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Недопустимый дескриптор свойства \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: Не удается определить свойство \"MyDynamicTestString\": объект не является расширяемым", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается определить свойство \"MyDynamicTestString\": объект не является расширяемым", function (err, _translation) {
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
describe("translating ru-RU string: Не удается переопределить ненастраиваемое свойство \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается переопределить ненастраиваемое свойство \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: Не удается изменить недоступное для записи свойство \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается изменить недоступное для записи свойство \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: Не удается изменить свойство \"MyDynamicTestString\": свойство \"length\" недоступно для записи", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается изменить свойство \"MyDynamicTestString\": свойство \"length\" недоступно для записи", function (err, _translation) {
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
describe("translating ru-RU string: Не удается определить свойство \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается определить свойство \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: В методе DataView не указан обязательный аргумент MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("В методе DataView не указан обязательный аргумент MyDynamicTestString", function (err, _translation) {
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
describe("translating ru-RU string: Аргумент MyDynamicTestString конструктора DataView недопустим", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Аргумент MyDynamicTestString конструктора DataView недопустим", function (err, _translation) {
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
describe("translating ru-RU string: Не удается вызвать функцию \"MyDynamicTestString\", так как ее подпись недопустима", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается вызвать функцию \"MyDynamicTestString\", так как ее подпись недопустима", function (err, _translation) {
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
describe("translating ru-RU string: Не удается получить доступ к свойству \"MyDynamicTestString\", так как его подпись недопустима", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удается получить доступ к свойству \"MyDynamicTestString\", так как его подпись недопустима", function (err, _translation) {
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
describe("translating ru-RU string: runtimeclass MyDynamicTestString, использующий Windows.Foundation.IPropertyValue в качестве интерфейса по умолчанию, не поддерживается в качестве типа входного параметра", function () {
    var translation;
    before(function (done) {
        errorToEnglish("runtimeclass MyDynamicTestString, использующий Windows.Foundation.IPropertyValue в качестве интерфейса по умолчанию, не поддерживается в качестве типа входного параметра", function (err, _translation) {
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
describe("translating ru-RU string: Объект с интерфейсом Windows.Foundation.IPropertyValue, который имеет имя runtimeclass MyDynamicTestString, невозможно использовать в качестве выходного параметра", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Объект с интерфейсом Windows.Foundation.IPropertyValue, который имеет имя runtimeclass MyDynamicTestString, невозможно использовать в качестве выходного параметра", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: \"this\" не является объектом, поддерживающим проверку", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" не является объектом, поддерживающим проверку", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: не удалось преобразовать аргумент в тип \"char\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: не удалось преобразовать аргумент в тип \"char\"", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: не удалось преобразовать аргумент в тип \"GUID\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: не удалось преобразовать аргумент в тип \"GUID\"", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: не удалось вернуть значение в IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: не удалось вернуть значение в IInspectable", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать объект в структуру: отсутствует ожидаемое свойство объекта \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать объект в структуру: отсутствует ожидаемое свойство объекта \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating ru-RU string: Тип \"MyDynamicTestString\" не найден", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Тип \"MyDynamicTestString\" не найден", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: функция вызвана с недостаточным числом аргументов", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: функция вызвана с недостаточным числом аргументов", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: тип не является конструируемым", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: тип не является конструируемым", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать значение в PropertyValue: MyDynamicTestString не поддерживается PropertyValue", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать значение в PropertyValue: MyDynamicTestString не поддерживается PropertyValue", function (err, _translation) {
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
describe("translating ru-RU string: Не удалось преобразовать значение в IInspectable: MyDynamicTestString не поддерживается IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Не удалось преобразовать значение в IInspectable: MyDynamicTestString не поддерживается IInspectable", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: поддерживающий проверку объект \"this\" освобожден, и к нему невозможно получить доступ", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: поддерживающий проверку объект \"this\" освобожден, и к нему невозможно получить доступ", function (err, _translation) {
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
describe("translating ru-RU string: Ожидался другой тип объекта \"this\": MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ожидался другой тип объекта \"this\": MyDynamicTestString", function (err, _translation) {
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
describe("translating ru-RU string: MyDynamicTestString: непредвиденный сбой при попытке получения метаданных", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: непредвиденный сбой при попытке получения метаданных", function (err, _translation) {
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
describe("translating ru-RU string: Указанная дата не найдена в текущем локальном календаре", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Указанная дата не найдена в текущем локальном календаре", function (err, _translation) {
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
