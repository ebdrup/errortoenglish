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

	it("should return the english version: Invalid procedure call or argument", function () {
		expect(translation, translation).to.equal("Invalid procedure call or argument");
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

	it("should return the english version: Overflow", function () {
		expect(translation, translation).to.equal("Overflow");
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

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
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

	it("should return the english version: Subscript out of range", function () {
		expect(translation, translation).to.equal("Subscript out of range");
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

	it("should return the english version: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.equal("This array is fixed or temporarily locked");
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

	it("should return the english version: Division by zero", function () {
		expect(translation, translation).to.equal("Division by zero");
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

	it("should return the english version: Type mismatch", function () {
		expect(translation, translation).to.equal("Type mismatch");
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

	it("should return the english version: Out of string space", function () {
		expect(translation, translation).to.equal("Out of string space");
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

	it("should return the english version: Can't perform requested operation", function () {
		expect(translation, translation).to.equal("Can't perform requested operation");
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

	it("should return the english version: Out of stack space", function () {
		expect(translation, translation).to.equal("Out of stack space");
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

	it("should return the english version: Sub or Function not defined", function () {
		expect(translation, translation).to.equal("Sub or Function not defined");
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

	it("should return the english version: Error in loading DLL", function () {
		expect(translation, translation).to.equal("Error in loading DLL");
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

	it("should return the english version: Internal error", function () {
		expect(translation, translation).to.equal("Internal error");
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

	it("should return the english version: Bad file name or number", function () {
		expect(translation, translation).to.equal("Bad file name or number");
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

	it("should return the english version: File not found", function () {
		expect(translation, translation).to.equal("File not found");
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

	it("should return the english version: Bad file mode", function () {
		expect(translation, translation).to.equal("Bad file mode");
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

	it("should return the english version: File already open", function () {
		expect(translation, translation).to.equal("File already open");
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

	it("should return the english version: Device I/O error", function () {
		expect(translation, translation).to.equal("Device I/O error");
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

	it("should return the english version: File already exists", function () {
		expect(translation, translation).to.equal("File already exists");
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

	it("should return the english version: Disk full", function () {
		expect(translation, translation).to.equal("Disk full");
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

	it("should return the english version: Input past end of file", function () {
		expect(translation, translation).to.equal("Input past end of file");
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

	it("should return the english version: Too many files", function () {
		expect(translation, translation).to.equal("Too many files");
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

	it("should return the english version: Device unavailable", function () {
		expect(translation, translation).to.equal("Device unavailable");
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

	it("should return the english version: Permission denied", function () {
		expect(translation, translation).to.equal("Permission denied");
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

	it("should return the english version: Disk not ready", function () {
		expect(translation, translation).to.equal("Disk not ready");
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

	it("should return the english version: Can't rename with different drive", function () {
		expect(translation, translation).to.equal("Can't rename with different drive");
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

	it("should return the english version: Path/File access error", function () {
		expect(translation, translation).to.equal("Path/File access error");
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

	it("should return the english version: Path not found", function () {
		expect(translation, translation).to.equal("Path not found");
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

	it("should return the english version: Object variable or With block variable not set", function () {
		expect(translation, translation).to.equal("Object variable or With block variable not set");
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

	it("should return the english version: For loop not initialized", function () {
		expect(translation, translation).to.equal("For loop not initialized");
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

	it("should return the english version: Invalid use of Null", function () {
		expect(translation, translation).to.equal("Invalid use of Null");
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

	it("should return the english version: Can't create necessary temporary file", function () {
		expect(translation, translation).to.equal("Can't create necessary temporary file");
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

	it("should return the english version: Object required", function () {
		expect(translation, translation).to.equal("Object required");
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

	it("should return the english version: Automation server can't create object", function () {
		expect(translation, translation).to.equal("Automation server can't create object");
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

	it("should return the english version: Class doesn't support Automation", function () {
		expect(translation, translation).to.equal("Class doesn't support Automation");
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

	it("should return the english version: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.equal("File name or class name not found during Automation operation");
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

	it("should return the english version: Object doesn't support this property or method", function () {
		expect(translation, translation).to.equal("Object doesn't support this property or method");
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

	it("should return the english version: Automation error", function () {
		expect(translation, translation).to.equal("Automation error");
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

	it("should return the english version: Object doesn't support this action", function () {
		expect(translation, translation).to.equal("Object doesn't support this action");
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

	it("should return the english version: Object doesn't support named arguments", function () {
		expect(translation, translation).to.equal("Object doesn't support named arguments");
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

	it("should return the english version: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.equal("Object doesn't support current locale setting");
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

	it("should return the english version: Named argument not found", function () {
		expect(translation, translation).to.equal("Named argument not found");
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

	it("should return the english version: Argument not optional", function () {
		expect(translation, translation).to.equal("Argument not optional");
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

	it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.equal("Wrong number of arguments or invalid property assignment");
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

	it("should return the english version: Object not a collection", function () {
		expect(translation, translation).to.equal("Object not a collection");
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

	it("should return the english version: Specified DLL function not found", function () {
		expect(translation, translation).to.equal("Specified DLL function not found");
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

	it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

	it("should return the english version: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.equal("The remote server machine does not exist or is unavailable");
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

	it("should return the english version: Cannot assign to variable", function () {
		expect(translation, translation).to.equal("Cannot assign to variable");
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

	it("should return the english version: Object not safe for scripting", function () {
		expect(translation, translation).to.equal("Object not safe for scripting");
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

	it("should return the english version: Object not safe for initializing", function () {
		expect(translation, translation).to.equal("Object not safe for initializing");
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

	it("should return the english version: Object not safe for creating", function () {
		expect(translation, translation).to.equal("Object not safe for creating");
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

	it("should return the english version: An exception occurred", function () {
		expect(translation, translation).to.equal("An exception occurred");
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

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
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

	it("should return the english version: Syntax error", function () {
		expect(translation, translation).to.equal("Syntax error");
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

	it("should return the english version: Expected ':'", function () {
		expect(translation, translation).to.equal("Expected ':'");
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

	it("should return the english version: Expected ';'", function () {
		expect(translation, translation).to.equal("Expected ';'");
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

	it("should return the english version: Expected '('", function () {
		expect(translation, translation).to.equal("Expected '('");
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

	it("should return the english version: Expected ')'", function () {
		expect(translation, translation).to.equal("Expected ')'");
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

	it("should return the english version: Expected ']'", function () {
		expect(translation, translation).to.equal("Expected ']'");
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

	it("should return the english version: Expected '{'", function () {
		expect(translation, translation).to.equal("Expected '{'");
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

	it("should return the english version: Expected '}'", function () {
		expect(translation, translation).to.equal("Expected '}'");
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

	it("should return the english version: Expected identifier", function () {
		expect(translation, translation).to.equal("Expected identifier");
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

	it("should return the english version: Expected '='", function () {
		expect(translation, translation).to.equal("Expected '='");
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

	it("should return the english version: Expected '/'", function () {
		expect(translation, translation).to.equal("Expected '/'");
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

	it("should return the english version: Invalid number", function () {
		expect(translation, translation).to.equal("Invalid number");
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

	it("should return the english version: Invalid character", function () {
		expect(translation, translation).to.equal("Invalid character");
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

	it("should return the english version: Unterminated string constant", function () {
		expect(translation, translation).to.equal("Unterminated string constant");
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

	it("should return the english version: Unterminated comment", function () {
		expect(translation, translation).to.equal("Unterminated comment");
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

	it("should return the english version: 'return' statement outside of function", function () {
		expect(translation, translation).to.equal("'return' statement outside of function");
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

	it("should return the english version: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'break' outside of loop");
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

	it("should return the english version: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'continue' outside of loop");
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

	it("should return the english version: Expected hexadecimal digit", function () {
		expect(translation, translation).to.equal("Expected hexadecimal digit");
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

	it("should return the english version: Expected 'while'", function () {
		expect(translation, translation).to.equal("Expected 'while'");
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

	it("should return the english version: Label redefined", function () {
		expect(translation, translation).to.equal("Label redefined");
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

	it("should return the english version: Label not found", function () {
		expect(translation, translation).to.equal("Label not found");
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

	it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.equal("'default' can only appear once in a 'switch' statement");
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

	it("should return the english version: Expected identifier, string or number", function () {
		expect(translation, translation).to.equal("Expected identifier, string or number");
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

	it("should return the english version: Expected '@end'", function () {
		expect(translation, translation).to.equal("Expected '@end'");
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

	it("should return the english version: Conditional compilation is turned off", function () {
		expect(translation, translation).to.equal("Conditional compilation is turned off");
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

	it("should return the english version: Expected constant", function () {
		expect(translation, translation).to.equal("Expected constant");
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

	it("should return the english version: Expected '@'", function () {
		expect(translation, translation).to.equal("Expected '@'");
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

	it("should return the english version: Expected 'catch'", function () {
		expect(translation, translation).to.equal("Expected 'catch'");
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

	it("should return the english version: Expected 'var'", function () {
		expect(translation, translation).to.equal("Expected 'var'");
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

	it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.equal("'throw' must be followed by an expression on the same source line");
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

	it("should return the english version: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.equal("'with' statements are not allowed in strict mode");
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

	it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

	it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

	it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'eval' in strict mode");
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

	it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

	it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on expression not allowed in strict mode");
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

	it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

	it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

	it("should return the english version: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a keyword for an identifier is invalid");
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

	it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

	it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

	it("should return the english version: Setter functions must have one argument", function () {
		expect(translation, translation).to.equal("Setter functions must have one argument");
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

	it("should return the english version: JavaScript compilation error", function () {
		expect(translation, translation).to.equal("JavaScript compilation error");
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

	it("should return the english version: JavaScript runtime error", function () {
		expect(translation, translation).to.equal("JavaScript runtime error");
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

	it("should return the english version: Unknown runtime error", function () {
		expect(translation, translation).to.equal("Unknown runtime error");
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

	it("should return the english version: Cannot assign to 'this'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'this'");
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

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Cannot assign to a function result", function () {
		expect(translation, translation).to.equal("Cannot assign to a function result");
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

	it("should return the english version: Cannot index object", function () {
		expect(translation, translation).to.equal("Cannot index object");
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

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
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

	it("should return the english version: Date object expected", function () {
		expect(translation, translation).to.equal("Date object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.equal("Invalid left-hand side in assignment");
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

	it("should return the english version: Undefined identifier", function () {
		expect(translation, translation).to.equal("Undefined identifier");
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

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
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

	it("should return the english version: Can't execute code from a freed script", function () {
		expect(translation, translation).to.equal("Can't execute code from a freed script");
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

	it("should return the english version: Object member expected", function () {
		expect(translation, translation).to.equal("Object member expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
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

	it("should return the english version: Regular Expression object expected", function () {
		expect(translation, translation).to.equal("Regular Expression object expected");
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

	it("should return the english version: Syntax error in regular expression", function () {
		expect(translation, translation).to.equal("Syntax error in regular expression");
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

	it("should return the english version: Unexpected quantifier", function () {
		expect(translation, translation).to.equal("Unexpected quantifier");
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

	it("should return the english version: Expected ']' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ']' in regular expression");
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

	it("should return the english version: Expected ')' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ')' in regular expression");
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

	it("should return the english version: Invalid range in character set", function () {
		expect(translation, translation).to.equal("Invalid range in character set");
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

	it("should return the english version: Exception thrown and not caught", function () {
		expect(translation, translation).to.equal("Exception thrown and not caught");
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

	it("should return the english version: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.equal("Function does not have a valid prototype object");
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

	it("should return the english version: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.equal("The URI to be encoded contains an invalid character");
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

	it("should return the english version: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.equal("The URI to be decoded is not a valid encoding");
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

	it("should return the english version: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.equal("The number of fractional digits is out of range");
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

	it("should return the english version: The precision is out of range", function () {
		expect(translation, translation).to.equal("The precision is out of range");
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

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
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

	it("should return the english version: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.equal("Array length must be a finite positive integer");
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

	it("should return the english version: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.equal("Array length must be assigned a finite positive number");
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

	it("should return the english version: Array object expected", function () {
		expect(translation, translation).to.equal("Array object expected");
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

	it("should return the english version: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.equal("Circular reference in value argument not supported");
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

	it("should return the english version: Invalid replacer argument", function () {
		expect(translation, translation).to.equal("Invalid replacer argument");
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

	it("should return the english version: Argument list too large to apply", function () {
		expect(translation, translation).to.equal("Argument list too large to apply");
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

	it("should return the english version: Redeclaration of const property", function () {
		expect(translation, translation).to.equal("Redeclaration of const property");
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

	it("should return the english version: Object member not configurable", function () {
		expect(translation, translation).to.equal("Object member not configurable");
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

	it("should return the english version: Variable undefined in strict mode", function () {
		expect(translation, translation).to.equal("Variable undefined in strict mode");
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

	it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

	it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

	it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

	it("should return the english version: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.equal("Cannot create property for a non-extensible object");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.equal("Property cannot have both accessors and a value");
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

	it("should return the english version: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("'this' is null or undefined");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
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

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
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

	it("should return the english version: Date expected", function () {
		expect(translation, translation).to.equal("Date expected");
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

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
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

	it("should return the english version: RegExp object expected", function () {
		expect(translation, translation).to.equal("RegExp object expected");
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

	it("should return the english version: Invalid function argument", function () {
		expect(translation, translation).to.equal("Invalid function argument");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Invalid 'length' property", function () {
		expect(translation, translation).to.equal("Invalid 'length' property");
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

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
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

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
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

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
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

	it("should return the english version: Invalid property descriptor", function () {
		expect(translation, translation).to.equal("Invalid property descriptor");
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

	it("should return the english version: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property: object is not extensible");
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

	it("should return the english version: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property");
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

	it("should return the english version: Cannot modify non-writable property", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property");
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

	it("should return the english version: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property: 'length' is not writable");
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

	it("should return the english version: Cannot define property", function () {
		expect(translation, translation).to.equal("Cannot define property");
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

	it("should return the english version: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.equal("Typed array constructor argument is invalid");
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

	it("should return the english version: 'this' is not a typed array object", function () {
		expect(translation, translation).to.equal("'this' is not a typed array object");
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

	it("should return the english version: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.equal("Invalid offset/length when creating typed array");
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

	it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.equal("Invalid begin/end value in typed array subarray method");
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

	it("should return the english version: Invalid source in typed array set", function () {
		expect(translation, translation).to.equal("Invalid source in typed array set");
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

	it("should return the english version: 'this' is not a DataView object", function () {
		expect(translation, translation).to.equal("'this' is not a DataView object");
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

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
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

	it("should return the english version: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.equal("DataView operation access beyond specified buffer length");
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

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
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

	it("should return the english version: invalid function signature", function () {
		expect(translation, translation).to.equal("invalid function signature");
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

	it("should return the english version: invalid property signature", function () {
		expect(translation, translation).to.equal("invalid property signature");
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

	it("should return the english version: invalid input parameter type", function () {
		expect(translation, translation).to.equal("invalid input parameter type");
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

	it("should return the english version: invalid ouput parameter", function () {
		expect(translation, translation).to.equal("invalid ouput parameter");
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

	it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

	it("should return the english version: Inspectable Object expected", function () {
		expect(translation, translation).to.equal("Inspectable Object expected");
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

	it("should return the english version: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'char'");
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

	it("should return the english version: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'GUID'");
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

	it("should return the english version: IInspectable expected", function () {
		expect(translation, translation).to.equal("IInspectable expected");
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

	it("should return the english version: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property");
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

	it("should return the english version: Unknown type", function () {
		expect(translation, translation).to.equal("Unknown type");
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

	it("should return the english version: Function called with too few arguments", function () {
		expect(translation, translation).to.equal("Function called with too few arguments");
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

	it("should return the english version: Type is not constructible", function () {
		expect(translation, translation).to.equal("Type is not constructible");
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

	it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

	it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

	it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

	it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

	it("should return the english version: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Invalid access to already released Inspectable Object");
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

	it("should return the english version: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Cannot release already released Inspectable Object");
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

	it("should return the english version: 'this' is not of the expected type", function () {
		expect(translation, translation).to.equal("'this' is not of the expected type");
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

	it("should return the english version: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.equal("Illegal length and size specified for the array");
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

	it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

	it("should return the english version: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.equal("Status is 'error', but getResults did not return an error");
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

	it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

	it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

	it("should return the english version: Infinity", function () {
		expect(translation, translation).to.equal("Infinity");
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

	it("should return the english version: -Infinity", function () {
		expect(translation, translation).to.equal("-Infinity");
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

	it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

	it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

	it("should return the english version: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a number");
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

	it("should return the english version: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a function");
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

	it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

	it("should return the english version: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a string");
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

	it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a date object");
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

	it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is null or not an object");
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

	it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

	it("should return the english version: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is undefined");
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

	it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a boolean");
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

	it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

	it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

	it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

	it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

	it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

	it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

	it("should return the english version: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array object");
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

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

	it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

	it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

	it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

	it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

	it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

	it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

	it("should return the english version: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: invalid argument");
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

	it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object");
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

	it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

	it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

	it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

	it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

	it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

	it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

	it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

	it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

	it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

	it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

	it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

	it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

	it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

	it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

	it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

	it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

	it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

	it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

	it("should return the english version: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.equal("Type 'MyDynamicTestString' not found");
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

	it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

	it("should return the english version: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: type is not constructible");
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

	it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

	it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

	it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

	it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

	it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

	it("should return the english version: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.equal("The specified date is not available in the current locale's calendar");
	});
});
