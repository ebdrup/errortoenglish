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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
