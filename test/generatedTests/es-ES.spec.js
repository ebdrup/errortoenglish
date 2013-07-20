var errorToEnglish = require("../../lib/errortoenglish");
describe("translating es-ES string: Argumento o llamada a procedimiento no válidos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento o llamada a procedimiento no válidos", function (err, _translation) {
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
describe("translating es-ES string: Desbordamiento", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Desbordamiento", function (err, _translation) {
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
describe("translating es-ES string: Memoria insuficiente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Memoria insuficiente", function (err, _translation) {
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
describe("translating es-ES string: El subíndice está fuera del intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El subíndice está fuera del intervalo", function (err, _translation) {
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
describe("translating es-ES string: La matriz está bloqueada de manera fija o temporal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La matriz está bloqueada de manera fija o temporal", function (err, _translation) {
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
describe("translating es-ES string: División por cero", function () {
	var translation;
	before(function (done) {
		errorToEnglish("División por cero", function (err, _translation) {
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
describe("translating es-ES string: No coinciden los tipos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No coinciden los tipos", function (err, _translation) {
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
describe("translating es-ES string: No hay suficiente espacio de cadena", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No hay suficiente espacio de cadena", function (err, _translation) {
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
describe("translating es-ES string: No se puede realizar la operación solicitada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede realizar la operación solicitada", function (err, _translation) {
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
describe("translating es-ES string: No hay suficiente espacio de pila", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No hay suficiente espacio de pila", function (err, _translation) {
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
describe("translating es-ES string: No se ha definido Sub o Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se ha definido Sub o Function", function (err, _translation) {
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
describe("translating es-ES string: Error al cargar la biblioteca DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error al cargar la biblioteca DLL", function (err, _translation) {
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
describe("translating es-ES string: Error interno", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error interno", function (err, _translation) {
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
describe("translating es-ES string: Nombre o número de archivo incorrecto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nombre o número de archivo incorrecto", function (err, _translation) {
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
describe("translating es-ES string: Archivo no encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Archivo no encontrado", function (err, _translation) {
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
describe("translating es-ES string: Modo de archivo incorrecto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Modo de archivo incorrecto", function (err, _translation) {
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
describe("translating es-ES string: El archivo ya está abierto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El archivo ya está abierto", function (err, _translation) {
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
describe("translating es-ES string: Error de E/S de dispositivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error de E/S de dispositivo", function (err, _translation) {
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
describe("translating es-ES string: El archivo ya existe", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El archivo ya existe", function (err, _translation) {
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
describe("translating es-ES string: Disco lleno", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disco lleno", function (err, _translation) {
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
describe("translating es-ES string: Se sobrepasó el final del archivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se sobrepasó el final del archivo", function (err, _translation) {
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
describe("translating es-ES string: Hay demasiados archivos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Hay demasiados archivos", function (err, _translation) {
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
describe("translating es-ES string: El dispositivo no está disponible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El dispositivo no está disponible", function (err, _translation) {
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
describe("translating es-ES string: Permiso denegado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Permiso denegado", function (err, _translation) {
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
describe("translating es-ES string: Disco no preparado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disco no preparado", function (err, _translation) {
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
describe("translating es-ES string: No se puede cambiar el nombre con una unidad de disco diferente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede cambiar el nombre con una unidad de disco diferente", function (err, _translation) {
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
describe("translating es-ES string: Error de acceso a la ruta o al archivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error de acceso a la ruta o al archivo", function (err, _translation) {
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
describe("translating es-ES string: Ruta de acceso no encontrada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ruta de acceso no encontrada", function (err, _translation) {
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
describe("translating es-ES string: Variable de objeto o bloque With no establecido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variable de objeto o bloque With no establecido", function (err, _translation) {
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
describe("translating es-ES string: Bucle For no inicializado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Bucle For no inicializado", function (err, _translation) {
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
describe("translating es-ES string: Uso no válido de Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uso no válido de Null", function (err, _translation) {
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
describe("translating es-ES string: No se puede crear un archivo temporal necesario", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede crear un archivo temporal necesario", function (err, _translation) {
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
describe("translating es-ES string: Se requiere un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se requiere un objeto", function (err, _translation) {
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
describe("translating es-ES string: El servidor de Automatización no puede crear el objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El servidor de Automatización no puede crear el objeto", function (err, _translation) {
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
describe("translating es-ES string: Esta clase no acepta Automatización", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Esta clase no acepta Automatización", function (err, _translation) {
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
describe("translating es-ES string: No se encontró el nombre del archivo o de la clase durante la operación de Automatización", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se encontró el nombre del archivo o de la clase durante la operación de Automatización", function (err, _translation) {
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
describe("translating es-ES string: El objeto no acepta esta propiedad o método", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El objeto no acepta esta propiedad o método", function (err, _translation) {
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
describe("translating es-ES string: Error de Automatización", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error de Automatización", function (err, _translation) {
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
describe("translating es-ES string: El objeto no acepta esta acción", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El objeto no acepta esta acción", function (err, _translation) {
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
describe("translating es-ES string: El objeto no acepta argumentos con nombre", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El objeto no acepta argumentos con nombre", function (err, _translation) {
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
describe("translating es-ES string: El objeto no acepta la configuración regional actual", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El objeto no acepta la configuración regional actual", function (err, _translation) {
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
describe("translating es-ES string: Argumento con nombre no encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento con nombre no encontrado", function (err, _translation) {
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
describe("translating es-ES string: Argumento no opcional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento no opcional", function (err, _translation) {
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
describe("translating es-ES string: Número de argumentos erróneo o asignación de propiedad no válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número de argumentos erróneo o asignación de propiedad no válida", function (err, _translation) {
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
describe("translating es-ES string: El objeto no es una colección", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El objeto no es una colección", function (err, _translation) {
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
describe("translating es-ES string: No se encuentra la función de biblioteca DLL especificada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se encuentra la función de biblioteca DLL especificada", function (err, _translation) {
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
describe("translating es-ES string: La variable usa un tipo de Automatización no aceptado en JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La variable usa un tipo de Automatización no aceptado en JavaScript", function (err, _translation) {
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
describe("translating es-ES string: El servidor remoto no existe o no está disponible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El servidor remoto no existe o no está disponible", function (err, _translation) {
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
describe("translating es-ES string: No se puede asignar a una variable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede asignar a una variable", function (err, _translation) {
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
describe("translating es-ES string: Objeto no seguro para secuencias de comandos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto no seguro para secuencias de comandos", function (err, _translation) {
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
describe("translating es-ES string: Objeto no seguro para inicialización", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto no seguro para inicialización", function (err, _translation) {
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
describe("translating es-ES string: Objeto no seguro para creación", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto no seguro para creación", function (err, _translation) {
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
describe("translating es-ES string: Error de excepción", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error de excepción", function (err, _translation) {
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
describe("translating es-ES string: Memoria insuficiente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Memoria insuficiente", function (err, _translation) {
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
describe("translating es-ES string: Error de sintaxis", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error de sintaxis", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba ':'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba ';'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba '('", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba ')'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba ']'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba ']'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba '{'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba '}'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un identificador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un identificador", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba '='", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba '/'", function (err, _translation) {
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
describe("translating es-ES string: Número no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número no válido", function (err, _translation) {
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
describe("translating es-ES string: Carácter no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Carácter no válido", function (err, _translation) {
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
describe("translating es-ES string: Constante de cadena sin terminar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constante de cadena sin terminar", function (err, _translation) {
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
describe("translating es-ES string: Comentario sin terminar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Comentario sin terminar", function (err, _translation) {
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
describe("translating es-ES string: La instrucción 'return' está fuera de una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La instrucción 'return' está fuera de una función", function (err, _translation) {
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
describe("translating es-ES string: No puede haber 'break' fuera de un bucle", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No puede haber 'break' fuera de un bucle", function (err, _translation) {
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
describe("translating es-ES string: No puede haber 'continue' fuera de un bucle", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No puede haber 'continue' fuera de un bucle", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un dígito hexadecimal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un dígito hexadecimal", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba 'while'", function (err, _translation) {
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
describe("translating es-ES string: Ya se definió la etiqueta", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ya se definió la etiqueta", function (err, _translation) {
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
describe("translating es-ES string: Etiqueta no encontrada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Etiqueta no encontrada", function (err, _translation) {
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
describe("translating es-ES string: 'default' solo puede aparecer una vez en una instrucción 'switch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' solo puede aparecer una vez en una instrucción 'switch'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un identificador, una cadena o un número", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un identificador, una cadena o un número", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba '@end'", function (err, _translation) {
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
describe("translating es-ES string: La compilación condicional está desactivada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La compilación condicional está desactivada", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una constante", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una constante", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba '@'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba 'catch'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba  'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba  'var'", function (err, _translation) {
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
describe("translating es-ES string: 'throw' debe seguir una expresión en la misma línea de origen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'throw' debe seguir una expresión en la misma línea de origen", function (err, _translation) {
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
describe("translating es-ES string: 'with' instrucciones no permitidas en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'with' instrucciones no permitidas en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: Nombres formales duplicados de parámetros no permitidos en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nombres formales duplicados de parámetros no permitidos en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: Literales numéricos octales o carácter de escape no permitidos en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Literales numéricos octales o carácter de escape no permitidos en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: Uso no válido de 'eval' en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uso no válido de 'eval' en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: Uso no válido de 'argumentos' en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uso no válido de 'argumentos' en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: Solicitar eliminación de expresiones no permitidas en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Solicitar eliminación de expresiones no permitidas en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: Definiciones múltiples de una propiedad no permitida en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Definiciones múltiples de una propiedad no permitida en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: En modo estricto, las declaraciones de función no se pueden anidar dentro de una instrucción o un bloque. Solo pueden aparecer en el nivel superior o directamente dentro del cuerpo de la función.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En modo estricto, las declaraciones de función no se pueden anidar dentro de una instrucción o un bloque. Solo pueden aparecer en el nivel superior o directamente dentro del cuerpo de la función.", function (err, _translation) {
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
describe("translating es-ES string: El uso de una palabra clave para un identificador no es válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El uso de una palabra clave para un identificador no es válido", function (err, _translation) {
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
describe("translating es-ES string: El uso de una palabra reservada futura para un identificador no es válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El uso de una palabra reservada futura para un identificador no es válido", function (err, _translation) {
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
describe("translating es-ES string: El uso de una palabra reservada futura para un identificador no es válido. El nombre del identificador es reservado en modo estricto.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El uso de una palabra reservada futura para un identificador no es válido. El nombre del identificador es reservado en modo estricto.", function (err, _translation) {
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
describe("translating es-ES string: Las funciones de setter deben tener un argumento", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Las funciones de setter deben tener un argumento", function (err, _translation) {
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
describe("translating es-ES string: Error de compilación de JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error de compilación de JavaScript", function (err, _translation) {
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
describe("translating es-ES string: Error en tiempo de ejecución de JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error en tiempo de ejecución de JavaScript", function (err, _translation) {
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
describe("translating es-ES string: Error desconocido en tiempo de ejecución", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error desconocido en tiempo de ejecución", function (err, _translation) {
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
describe("translating es-ES string: No se puede asignar a 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede asignar a 'this'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un número", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un número", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una función", function (err, _translation) {
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
describe("translating es-ES string: No se puede asignar al resultado de una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede asignar al resultado de una función", function (err, _translation) {
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
describe("translating es-ES string: No se puede indizar el objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede indizar el objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una cadena", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una cadena", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto de fecha", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto de fecha", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Lado izquierdo no válido en asignación", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Lado izquierdo no válido en asignación", function (err, _translation) {
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
describe("translating es-ES string: Identificador no definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identificador no definido", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un tipo booleano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un tipo booleano", function (err, _translation) {
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
describe("translating es-ES string: No se puede ejecutar código de una secuencia de comandos liberada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede ejecutar código de una secuencia de comandos liberada", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto miembro", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto miembro", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba VBArray", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto JScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto JScript", function (err, _translation) {
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
describe("translating es-ES string: Intervalo no válido en el juego de caracteres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Intervalo no válido en el juego de caracteres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected or Invalid range in character set or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Invalid\ range\ in\ character\ set|Enumerator\ object\ expected/g);
	});
});
describe("translating es-ES string: Se esperaba un objeto expresión regular", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto expresión regular", function (err, _translation) {
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
describe("translating es-ES string: Error de sintaxis en expresión regular", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error de sintaxis en expresión regular", function (err, _translation) {
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
describe("translating es-ES string: Cuantificador inesperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cuantificador inesperado", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba ']' en la expresión regular", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba ']' en la expresión regular", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba ')' en la expresión regular", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba ')' en la expresión regular", function (err, _translation) {
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
describe("translating es-ES string: Intervalo no válido en el juego de caracteres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Intervalo no válido en el juego de caracteres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected or Invalid range in character set or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Invalid\ range\ in\ character\ set|Enumerator\ object\ expected/g);
	});
});
describe("translating es-ES string: Excepción lanzada y no recogida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Excepción lanzada y no recogida", function (err, _translation) {
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
describe("translating es-ES string: La función no tiene un objeto prototipo válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La función no tiene un objeto prototipo válido", function (err, _translation) {
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
describe("translating es-ES string: El identificador URI para codificar contiene un carácter no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El identificador URI para codificar contiene un carácter no válido", function (err, _translation) {
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
describe("translating es-ES string: El identificador URI para descodificar no tiene una codificación válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El identificador URI para descodificar no tiene una codificación válida", function (err, _translation) {
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
describe("translating es-ES string: El número de dígitos fraccionarios está fuera del intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El número de dígitos fraccionarios está fuera del intervalo", function (err, _translation) {
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
describe("translating es-ES string: La precisión está fuera del intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La precisión está fuera del intervalo", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto array o arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto array o arguments", function (err, _translation) {
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
describe("translating es-ES string: La longitud de la matriz debe ser un valor entero finito positivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La longitud de la matriz debe ser un valor entero finito positivo", function (err, _translation) {
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
describe("translating es-ES string: La longitud de la matriz debe ser un número positivo finito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La longitud de la matriz debe ser un número positivo finito", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto Array", function (err, _translation) {
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
describe("translating es-ES string: Referencia circular en un argumento de valor no admitida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Referencia circular en un argumento de valor no admitida", function (err, _translation) {
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
describe("translating es-ES string: Argumento reemplazante no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento reemplazante no válido", function (err, _translation) {
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
describe("translating es-ES string: La lista de argumentos es demasiado extensa para aplicarse", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La lista de argumentos es demasiado extensa para aplicarse", function (err, _translation) {
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
describe("translating es-ES string: Nueva declaración de la propiedad const", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nueva declaración de la propiedad const", function (err, _translation) {
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
describe("translating es-ES string: Objeto miembro no configurable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto miembro no configurable", function (err, _translation) {
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
describe("translating es-ES string: Variable sin definir en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variable sin definir en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: El acceso a la propiedad 'autor de la llamada' de una función u objeto de argumentos no está permitido en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El acceso a la propiedad 'autor de la llamada' de una función u objeto de argumentos no está permitido en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: El acceso a la propiedad 'destinatario de la llamada' de un objeto de argumentos no está permitido en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El acceso a la propiedad 'destinatario de la llamada' de un objeto de argumentos no está permitido en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: La asignación a propiedades de solo lectura no está permitida en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La asignación a propiedades de solo lectura no está permitida en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: No se puede crear una propiedad para un objeto no extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede crear una propiedad para un objeto no extensible", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una función", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una función", function (err, _translation) {
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
describe("translating es-ES string: La propiedad no puede tener descriptores de acceso y un valor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La propiedad no puede tener descriptores de acceso y un valor", function (err, _translation) {
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
describe("translating es-ES string: 'this' es nulo o está sin definir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' es nulo o está sin definir", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una función", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una cadena", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una cadena", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un tipo booleano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un tipo booleano", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una fecha", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una fecha", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un número", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un número", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba VBArray", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto JScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto JScript", function (err, _translation) {
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
describe("translating es-ES string: Intervalo no válido en el juego de caracteres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Intervalo no válido en el juego de caracteres", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected or Invalid range in character set or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Invalid\ range\ in\ character\ set|Enumerator\ object\ expected/g);
	});
});
describe("translating es-ES string: Se esperaba un objeto RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto RegExp", function (err, _translation) {
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
describe("translating es-ES string: Argumento de la función no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento de la función no válido", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto JScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto JScript", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba una función", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba VBArray", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Propiedad de 'longitud' no válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Propiedad de 'longitud' no válida", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba un objeto matriz o argumentos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba un objeto matriz o argumentos", function (err, _translation) {
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
describe("translating es-ES string: Operando no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando no válido", function (err, _translation) {
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
describe("translating es-ES string: Operando no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando no válido", function (err, _translation) {
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
describe("translating es-ES string: Descriptor de propiedad no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Descriptor de propiedad no válido", function (err, _translation) {
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
describe("translating es-ES string: No se puede definir la propiedad: el objeto no es extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede definir la propiedad: el objeto no es extensible", function (err, _translation) {
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
describe("translating es-ES string: No se puede redefinir la propiedad no configurable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede redefinir la propiedad no configurable", function (err, _translation) {
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
describe("translating es-ES string: No se puede modificar la propiedad que no permite escritura", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede modificar la propiedad que no permite escritura", function (err, _translation) {
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
describe("translating es-ES string: No se puede modificar la propiedad: 'longitud' no permite escritura", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede modificar la propiedad: 'longitud' no permite escritura", function (err, _translation) {
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
describe("translating es-ES string: No se puede definir la propiedad", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede definir la propiedad", function (err, _translation) {
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
describe("translating es-ES string: Argumento de constructor de matriz con tipo no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento de constructor de matriz con tipo no válido", function (err, _translation) {
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
describe("translating es-ES string: 'esto' no es un objeto de matriz con tipo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'esto' no es un objeto de matriz con tipo", function (err, _translation) {
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
describe("translating es-ES string: Longitud o desplazamiento no válido al crear matriz con tipo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Longitud o desplazamiento no válido al crear matriz con tipo", function (err, _translation) {
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
describe("translating es-ES string: Valor inicial o final no válido en método de su matriz de matriz con tipo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Valor inicial o final no válido en método de su matriz de matriz con tipo", function (err, _translation) {
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
describe("translating es-ES string: Origen no válido en conjunto de matriz con tipo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Origen no válido en conjunto de matriz con tipo", function (err, _translation) {
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
describe("translating es-ES string: 'esto' no es un objeto DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'esto' no es un objeto DataView", function (err, _translation) {
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
describe("translating es-ES string: Argumentos no válidos en DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentos no válidos en DataView", function (err, _translation) {
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
describe("translating es-ES string: Acceso a operación DataView más allá de la longitud de búfer especificada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acceso a operación DataView más allá de la longitud de búfer especificada", function (err, _translation) {
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
describe("translating es-ES string: Argumentos no válidos en DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentos no válidos en DataView", function (err, _translation) {
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
describe("translating es-ES string: firma de función no válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("firma de función no válida", function (err, _translation) {
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
describe("translating es-ES string: firma de propiedad no válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("firma de propiedad no válida", function (err, _translation) {
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
describe("translating es-ES string: tipo de parámetro de entrada no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("tipo de parámetro de entrada no válido", function (err, _translation) {
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
describe("translating es-ES string: parámetro de entrada no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("parámetro de entrada no válido", function (err, _translation) {
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
describe("translating es-ES string: El acceso a la propiedad 'argumentos' de una función no está permitido en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El acceso a la propiedad 'argumentos' de una función no está permitido en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: Se espera objeto inspeccionable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se espera objeto inspeccionable", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el argumento al tipo 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el argumento al tipo 'char'", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el argumento al tipo 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el argumento al tipo 'GUID'", function (err, _translation) {
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
describe("translating es-ES string: Se esperaba IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se esperaba IInspectable", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el objeto a struct: objeto sin la propiedad esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el objeto a struct: objeto sin la propiedad esperada", function (err, _translation) {
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
describe("translating es-ES string: Tipo desconocido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tipo desconocido", function (err, _translation) {
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
describe("translating es-ES string: Función llamada con muy pocos argumentos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Función llamada con muy pocos argumentos", function (err, _translation) {
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
describe("translating es-ES string: El tipo no es construible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El tipo no es construible", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el valor a PropertyValue: Tipo no admitido por PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el valor a PropertyValue: Tipo no admitido por PropertyValue", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el valor a IInspectable: Tipo no admitido por IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el valor a IInspectable: Tipo no admitido por IInspectable", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse la fecha a Windows.Foundation.DateTime: valor fuera de rango válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse la fecha a Windows.Foundation.DateTime: valor fuera de rango válido", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el valor a Windows.Foundation.TimeSpan: valor fuera de rango válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el valor a Windows.Foundation.TimeSpan: valor fuera de rango válido", function (err, _translation) {
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
describe("translating es-ES string: Acceso no válido a objeto inspeccionable ya distribuido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acceso no válido a objeto inspeccionable ya distribuido", function (err, _translation) {
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
describe("translating es-ES string: No puede distribuirse un objeto inspeccionable ya distribuido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No puede distribuirse un objeto inspeccionable ya distribuido", function (err, _translation) {
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
describe("translating es-ES string: 'esto' no es del tipo esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'esto' no es del tipo esperado", function (err, _translation) {
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
describe("translating es-ES string: Longitud y tamaño no válidos especificados para la matriz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Longitud y tamaño no válidos especificados para la matriz", function (err, _translation) {
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
describe("translating es-ES string: Error inesperado al intentar obtener información de metadatos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Error inesperado al intentar obtener información de metadatos", function (err, _translation) {
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
describe("translating es-ES string: El estado es 'error', pero getResults no obtuvo ningún error", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El estado es 'error', pero getResults no obtuvo ningún error", function (err, _translation) {
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
describe("translating es-ES string: Se pasó un parámetro status que falta o no es válido al controlador completado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se pasó un parámetro status que falta o no es válido al controlador completado", function (err, _translation) {
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
describe("translating es-ES string: Se pasó un parámetro sender que falta o no es válido al controlador completado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Se pasó un parámetro sender que falta o no es válido al controlador completado", function (err, _translation) {
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
describe("translating es-ES string: Infinito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Infinito", function (err, _translation) {
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
describe("translating es-ES string: -Infinito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Infinito", function (err, _translation) {
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
describe("translating es-ES string: El objeto no acepta la propiedad o el método 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El objeto no acepta la propiedad o el método 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: El argumento de la función 'MyDynamicTestString' no es opcional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El argumento de la función 'MyDynamicTestString' no es opcional", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString'  no es un número", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'  no es un número", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es una función", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString'  no es un objeto indizable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'  no es un objeto indizable", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es una cadena", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es una cadena", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es un objeto de fecha", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es un objeto de fecha", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' es nulo o no es un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' es nulo o no es un objeto", function (err, _translation) {
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
describe("translating es-ES string: No se puede asignar a 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede asignar a 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no está definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no está definido", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es un tipo booleano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es un tipo booleano", function (err, _translation) {
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
describe("translating es-ES string: No se puede eliminar 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede eliminar 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es de tipo VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es de tipo VBArray", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es un objeto JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es un objeto JavaScript", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es un objeto enumerador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es un objeto enumerador", function (err, _translation) {
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
describe("translating es-ES string: 'MyDynamicTestString' no es un objeto expresión regular", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' no es un objeto expresión regular", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString no es un objeto Array o arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString no es un objeto Array o arguments", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString no es un objeto Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString no es un objeto Array", function (err, _translation) {
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
describe("translating es-ES string: El atributo 'MyDynamicTestString' del descriptor de propiedad no se puede establecer en 'true' en este objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El atributo 'MyDynamicTestString' del descriptor de propiedad no se puede establecer en 'true' en este objeto", function (err, _translation) {
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
describe("translating es-ES string: El atributo 'MyDynamicTestString' del descriptor de propiedad no se puede establecer en 'false' en este objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El atributo 'MyDynamicTestString' del descriptor de propiedad no se puede establecer en 'false' en este objeto", function (err, _translation) {
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
describe("translating es-ES string: Nueva declaración de const 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nueva declaración de const 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: Solicitar la eliminación de 'MyDynamicTestString' no está permitida en modo estricto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Solicitar la eliminación de 'MyDynamicTestString' no está permitida en modo estricto", function (err, _translation) {
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
describe("translating es-ES string: No se puede establecer la propiedad 'MyDynamicTestString' de referencia nula o sin definir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede establecer la propiedad 'MyDynamicTestString' de referencia nula o sin definir", function (err, _translation) {
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
describe("translating es-ES string: No se puede obtener la propiedad 'MyDynamicTestString' de referencia nula o sin definir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede obtener la propiedad 'MyDynamicTestString' de referencia nula o sin definir", function (err, _translation) {
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
describe("translating es-ES string: No se puede eliminar la propiedad 'MyDynamicTestString' de referencia nula o sin definir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede eliminar la propiedad 'MyDynamicTestString' de referencia nula o sin definir", function (err, _translation) {
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
describe("translating es-ES string: No se puede obtener acceso a la propiedad 'MyDynamicTestString': tipo 'VarDate' no es compatible con las propiedades definidas por el usuario", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede obtener acceso a la propiedad 'MyDynamicTestString': tipo 'VarDate' no es compatible con las propiedades definidas por el usuario", function (err, _translation) {
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
describe("translating es-ES string: El valor de la propiedad 'MyDynamicTestString' no es un objeto de función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El valor de la propiedad 'MyDynamicTestString' no es un objeto de función", function (err, _translation) {
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
describe("translating es-ES string: El valor de la propiedad 'MyDynamicTestString' es nulo o no está definido, no es un objeto de función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El valor de la propiedad 'MyDynamicTestString' es nulo o no está definido, no es un objeto de función", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' es nulo o está sin definir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' es nulo o está sin definir", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto de función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto de función", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto de cadena", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto de cadena", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto booleano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto booleano", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto de fecha", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto de fecha", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto de número", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto de número", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto VBArray", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto JavaScript", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto enumerador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto enumerador", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto RegExp", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: argumento no válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento no válido", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el argumento no es un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el argumento no es un objeto", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el argumento no es un objeto JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el argumento no es un objeto JavaScript", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el argumento no es un objeto de función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el argumento no es un objeto de función", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el argumento no es un objeto VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el argumento no es un objeto VBArray", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el argumento es nulo o está sin definir", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el argumento es nulo o está sin definir", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el argumento no es un objeto y no es nulo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el argumento no es un objeto y no es nulo", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el argumento no tiene una propiedad de 'longitud' válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el argumento no tiene una propiedad de 'longitud' válida", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: se esperaba un objeto de matriz o argumentos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: se esperaba un objeto de matriz o argumentos", function (err, _translation) {
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
describe("translating es-ES string: Operando no válido para 'MyDynamicTestString': se esperaba un objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando no válido para 'MyDynamicTestString': se esperaba un objeto", function (err, _translation) {
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
describe("translating es-ES string: Operando no válido para 'MyDynamicTestString': se esperaba una función", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando no válido para 'MyDynamicTestString': se esperaba una función", function (err, _translation) {
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
describe("translating es-ES string: Descriptor no válido para la propiedad 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Descriptor no válido para la propiedad 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: No se puede definir la propiedad 'MyDynamicTestString': el objeto no es extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede definir la propiedad 'MyDynamicTestString': el objeto no es extensible", function (err, _translation) {
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
describe("translating es-ES string: No se puede redefinir la propiedad no configurable 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede redefinir la propiedad no configurable 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: No se puede modificar la propiedad que no permite escritura 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede modificar la propiedad que no permite escritura 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: No se puede modificar la propiedad 'MyDynamicTestString': 'longitud' no permite escritura", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede modificar la propiedad 'MyDynamicTestString': 'longitud' no permite escritura", function (err, _translation) {
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
describe("translating es-ES string: No se puede definir la propiedad 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No se puede definir la propiedad 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: El argumento necesario MyDynamicTestString en el método DataView no se ha especificado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El argumento necesario MyDynamicTestString en el método DataView no se ha especificado", function (err, _translation) {
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
describe("translating es-ES string: El argumento de constructor MyDynamicTestString de DataView no es válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El argumento de constructor MyDynamicTestString de DataView no es válido", function (err, _translation) {
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
describe("translating es-ES string: La función 'MyDynamicTestString' tiene una firma no válida y no se puede llamar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La función 'MyDynamicTestString' tiene una firma no válida y no se puede llamar", function (err, _translation) {
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
describe("translating es-ES string: La propiedad 'MyDynamicTestString' tiene una firma no válida y no se puede obtener acceso a ella", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La propiedad 'MyDynamicTestString' tiene una firma no válida y no se puede obtener acceso a ella", function (err, _translation) {
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
describe("translating es-ES string: La runtimeclass MyDynamicTestString con Windows.Foundation.IPropertyValue como interfaz predeterminada no es compatible como tipo de parámetro de entrada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La runtimeclass MyDynamicTestString con Windows.Foundation.IPropertyValue como interfaz predeterminada no es compatible como tipo de parámetro de entrada", function (err, _translation) {
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
describe("translating es-ES string: El objeto con la interfaz Windows.Foundation.IPropertyValue y el nombre de runtimeclass MyDynamicTestString no es compatible como parámetro de salida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("El objeto con la interfaz Windows.Foundation.IPropertyValue y el nombre de runtimeclass MyDynamicTestString no es compatible como parámetro de salida", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: 'this' no es un objeto inspeccionable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' no es un objeto inspeccionable", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: no pudo convertirse el argumento al tipo 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: no pudo convertirse el argumento al tipo 'char'", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: no pudo convertirse el argumento al tipo 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: no pudo convertirse el argumento al tipo 'GUID'", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: no pudo convertirse el valor devuelto a IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: no pudo convertirse el valor devuelto a IInspectable", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el objeto a struct: objeto sin la propiedad esperada 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el objeto a struct: objeto sin la propiedad esperada 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating es-ES string: Tipo 'MyDynamicTestString' no encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tipo 'MyDynamicTestString' no encontrado", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: función llamada con muy pocos argumentos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: función llamada con muy pocos argumentos", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: tipo no construible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: tipo no construible", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el valor a PropertyValue: PropertyValue no admite MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el valor a PropertyValue: PropertyValue no admite MyDynamicTestString", function (err, _translation) {
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
describe("translating es-ES string: No pudo convertirse el valor a IInspectable: IInspectable no admite MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No pudo convertirse el valor a IInspectable: IInspectable no admite MyDynamicTestString", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: el objeto inspeccionable 'this' ya se distribuyó y no puede obtenerse acceso a él", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: el objeto inspeccionable 'this' ya se distribuyó y no puede obtenerse acceso a él", function (err, _translation) {
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
describe("translating es-ES string: 'esto' no es del tipo esperado: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'esto' no es del tipo esperado: MyDynamicTestString", function (err, _translation) {
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
describe("translating es-ES string: MyDynamicTestString: error inesperado al intentar obtener información de metadatos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: error inesperado al intentar obtener información de metadatos", function (err, _translation) {
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
describe("translating es-ES string: La fecha especificada no está disponible en el calendario de la configuración regional actual", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La fecha especificada no está disponible en el calendario de la configuración regional actual", function (err, _translation) {
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
