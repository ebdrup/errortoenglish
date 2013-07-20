var errorToEnglish = require("../../lib/errortoenglish");
describe("translating pt-BR string: Chamada de procedimento ou argumento inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chamada de procedimento ou argumento inválido", function (err, _translation) {
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
describe("translating pt-BR string: Estouro", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Estouro", function (err, _translation) {
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
describe("translating pt-BR string: Memória insuficiente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Memória insuficiente", function (err, _translation) {
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
describe("translating pt-BR string: Subscrito fora do intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Subscrito fora do intervalo", function (err, _translation) {
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
describe("translating pt-BR string: Matriz fixa ou temporariamente bloqueada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Matriz fixa ou temporariamente bloqueada", function (err, _translation) {
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
describe("translating pt-BR string: Divisão por zero", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Divisão por zero", function (err, _translation) {
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
describe("translating pt-BR string: Tipos incompatíveis", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tipos incompatíveis", function (err, _translation) {
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
describe("translating pt-BR string: Espaço insuficiente para cadeias", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Espaço insuficiente para cadeias", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível executar a operação solicitada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível executar a operação solicitada", function (err, _translation) {
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
describe("translating pt-BR string: Espaço insuficiente na pilha", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Espaço insuficiente na pilha", function (err, _translation) {
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
describe("translating pt-BR string: Sub ou Function não definida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub ou Function não definida", function (err, _translation) {
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
describe("translating pt-BR string: Erro ao carregar DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro ao carregar DLL", function (err, _translation) {
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
describe("translating pt-BR string: Erro interno", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro interno", function (err, _translation) {
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
describe("translating pt-BR string: Nome ou número de arquivo inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nome ou número de arquivo inválido", function (err, _translation) {
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
describe("translating pt-BR string: Arquivo não encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Arquivo não encontrado", function (err, _translation) {
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
describe("translating pt-BR string: Modo de arquivo inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Modo de arquivo inválido", function (err, _translation) {
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
describe("translating pt-BR string: O arquivo já está aberto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O arquivo já está aberto", function (err, _translation) {
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
describe("translating pt-BR string: Erro de E/S do dispositivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de E/S do dispositivo", function (err, _translation) {
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
describe("translating pt-BR string: O arquivo já existe", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O arquivo já existe", function (err, _translation) {
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
describe("translating pt-BR string: Disco cheio", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disco cheio", function (err, _translation) {
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
describe("translating pt-BR string: Final do arquivo ultrapassado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Final do arquivo ultrapassado", function (err, _translation) {
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
describe("translating pt-BR string: Número excessivo de arquivos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número excessivo de arquivos", function (err, _translation) {
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
describe("translating pt-BR string: Dispositivo não disponível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dispositivo não disponível", function (err, _translation) {
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
describe("translating pt-BR string: Permissão negada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Permissão negada", function (err, _translation) {
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
describe("translating pt-BR string: O disco não está pronto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O disco não está pronto", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível renomear com unidade diferente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível renomear com unidade diferente", function (err, _translation) {
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
describe("translating pt-BR string: Erro de acesso ao caminho/arquivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de acesso ao caminho/arquivo", function (err, _translation) {
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
describe("translating pt-BR string: Caminho não encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caminho não encontrado", function (err, _translation) {
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
describe("translating pt-BR string: A variável do objeto ou a variável do bloco 'With' não foi definida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A variável do objeto ou a variável do bloco 'With' não foi definida", function (err, _translation) {
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
describe("translating pt-BR string: Loop For não inicializado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Loop For não inicializado", function (err, _translation) {
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
describe("translating pt-BR string: Uso inválido de Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uso inválido de Null", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível criar o arquivo temporário necessário", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível criar o arquivo temporário necessário", function (err, _translation) {
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
describe("translating pt-BR string: Objeto necessário", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto necessário", function (err, _translation) {
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
describe("translating pt-BR string: O servidor de automação não pode criar objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O servidor de automação não pode criar objeto", function (err, _translation) {
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
describe("translating pt-BR string: A classe não dá suporte para automação", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A classe não dá suporte para automação", function (err, _translation) {
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
describe("translating pt-BR string: Nome de arquivo ou classe não encontrado durante a operação de automação", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nome de arquivo ou classe não encontrado durante a operação de automação", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não dá suporte para a propriedade ou método", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não dá suporte para a propriedade ou método", function (err, _translation) {
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
describe("translating pt-BR string: Erro de automação", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de automação", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não oferece suporte à ação", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não oferece suporte à ação", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não dá suporte para argumentos nomeados", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não dá suporte para argumentos nomeados", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não dá suporte para a configuração de localidade atual", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não dá suporte para a configuração de localidade atual", function (err, _translation) {
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
describe("translating pt-BR string: Argumento nomeado não encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento nomeado não encontrado", function (err, _translation) {
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
describe("translating pt-BR string: O argumento não é opcional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento não é opcional", function (err, _translation) {
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
describe("translating pt-BR string: Número de argumentos incorreto ou atribuição de propriedade inválida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número de argumentos incorreto ou atribuição de propriedade inválida", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não é uma coleção", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não é uma coleção", function (err, _translation) {
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
describe("translating pt-BR string: Função de DLL especificada não encontrada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função de DLL especificada não encontrada", function (err, _translation) {
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
describe("translating pt-BR string: A variável usa um tipo de automação sem suporte no JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A variável usa um tipo de automação sem suporte no JavaScript", function (err, _translation) {
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
describe("translating pt-BR string: O servidor remoto não existe ou não está disponível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O servidor remoto não existe ou não está disponível", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível atribuir a uma variável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível atribuir a uma variável", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não é seguro para scripts", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não é seguro para scripts", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não é seguro para inicialização", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não é seguro para inicialização", function (err, _translation) {
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
describe("translating pt-BR string: O objeto não é seguro para criação", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não é seguro para criação", function (err, _translation) {
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
describe("translating pt-BR string: Exceção", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Exceção", function (err, _translation) {
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
describe("translating pt-BR string: Memória insuficiente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Memória insuficiente", function (err, _translation) {
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
describe("translating pt-BR string: Erro de sintaxe", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de sintaxe", function (err, _translation) {
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
describe("translating pt-BR string: ':' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':' esperado", function (err, _translation) {
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
describe("translating pt-BR string: ';' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';' esperado", function (err, _translation) {
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
describe("translating pt-BR string: '(' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'(' esperado", function (err, _translation) {
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
describe("translating pt-BR string: ')' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' esperado", function (err, _translation) {
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
describe("translating pt-BR string: ']' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' esperado", function (err, _translation) {
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
describe("translating pt-BR string: '{' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{' esperado", function (err, _translation) {
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
describe("translating pt-BR string: '}' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}' esperado", function (err, _translation) {
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
describe("translating pt-BR string: Identificador esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identificador esperado", function (err, _translation) {
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
describe("translating pt-BR string: '=' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'=' esperado", function (err, _translation) {
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
describe("translating pt-BR string: '/' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/' esperado", function (err, _translation) {
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
describe("translating pt-BR string: Número inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número inválido", function (err, _translation) {
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
describe("translating pt-BR string: Caractere inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caractere inválido", function (err, _translation) {
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
describe("translating pt-BR string: Constante de cadeia não finalizada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constante de cadeia não finalizada", function (err, _translation) {
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
describe("translating pt-BR string: Comentário não finalizado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Comentário não finalizado", function (err, _translation) {
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
describe("translating pt-BR string: Instrução 'return' fora da função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Instrução 'return' fora da função", function (err, _translation) {
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
describe("translating pt-BR string: Não pode haver 'break' fora de loop", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não pode haver 'break' fora de loop", function (err, _translation) {
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
describe("translating pt-BR string: Não pode haver 'continue' fora de loop", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não pode haver 'continue' fora de loop", function (err, _translation) {
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
describe("translating pt-BR string: Dígito hexadecimal esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dígito hexadecimal esperado", function (err, _translation) {
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
describe("translating pt-BR string: 'while' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while' esperado", function (err, _translation) {
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
describe("translating pt-BR string: Rótulo redefinido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Rótulo redefinido", function (err, _translation) {
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
describe("translating pt-BR string: Rótulo não encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Rótulo não encontrado", function (err, _translation) {
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
describe("translating pt-BR string: 'default' pode aparecer somente uma vez em uma instrução 'switch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' pode aparecer somente uma vez em uma instrução 'switch'", function (err, _translation) {
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
describe("translating pt-BR string: Identificador, cadeia ou número esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identificador, cadeia ou número esperado", function (err, _translation) {
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
describe("translating pt-BR string: '@end' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' esperado", function (err, _translation) {
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
describe("translating pt-BR string: Compilação condicional desativada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Compilação condicional desativada", function (err, _translation) {
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
describe("translating pt-BR string: Constante esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constante esperada", function (err, _translation) {
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
describe("translating pt-BR string: '@' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' esperado", function (err, _translation) {
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
describe("translating pt-BR string: 'catch' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch' esperado", function (err, _translation) {
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
describe("translating pt-BR string: 'var' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var' esperado", function (err, _translation) {
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
describe("translating pt-BR string: O 'descarte' deve ser seguido por uma expressão na mesma linha de origem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O 'descarte' deve ser seguido por uma expressão na mesma linha de origem", function (err, _translation) {
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
describe("translating pt-BR string: As instruções 'wit'h não são permitidas no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("As instruções 'wit'h não são permitidas no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Nomes de parâmetro formais duplicados não permitidos no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nomes de parâmetro formais duplicados não permitidos no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Literais numéricos octais e caracteres de escape não permitidos no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Literais numéricos octais e caracteres de escape não permitidos no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Uso inválido de 'eval' no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uso inválido de 'eval' no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Uso inválido de 'arguments' no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Uso inválido de 'arguments' no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Execução de exclusão na expressão não permitida no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Execução de exclusão na expressão não permitida no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Várias definições de uma propriedade não permitidas no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Várias definições de uma propriedade não permitidas no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: No modo estrito, as declarações de função não podem ser aninhadas dentro de uma instrução ou bloco. Elas só podem aparecer no nível superior ou diretamente dentro de um corpo de função.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No modo estrito, as declarações de função não podem ser aninhadas dentro de uma instrução ou bloco. Elas só podem aparecer no nível superior ou diretamente dentro de um corpo de função.", function (err, _translation) {
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
describe("translating pt-BR string: É inválido usar uma palavra-chave para um identificador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("É inválido usar uma palavra-chave para um identificador", function (err, _translation) {
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
describe("translating pt-BR string: É inválido usar uma palavra reservada para o futuro para um identificador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("É inválido usar uma palavra reservada para o futuro para um identificador", function (err, _translation) {
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
describe("translating pt-BR string: É inválido usar uma palavra reservada para o futuro para um identificador. O nome do identificador é reservado no modo estrito.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("É inválido usar uma palavra reservada para o futuro para um identificador. O nome do identificador é reservado no modo estrito.", function (err, _translation) {
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
describe("translating pt-BR string: As funções setter devem ter um argumento", function () {
	var translation;
	before(function (done) {
		errorToEnglish("As funções setter devem ter um argumento", function (err, _translation) {
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
describe("translating pt-BR string: Erro de compilação do JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de compilação do JavaScript", function (err, _translation) {
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
describe("translating pt-BR string: Erro em tempo de execução do JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro em tempo de execução do JavaScript", function (err, _translation) {
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
describe("translating pt-BR string: Erro em tempo de execução desconhecido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro em tempo de execução desconhecido", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível atribuir a 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível atribuir a 'this'", function (err, _translation) {
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
describe("translating pt-BR string: Número esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número esperado", function (err, _translation) {
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
describe("translating pt-BR string: Função esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função esperada", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível atribuir ao resultado de uma função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível atribuir ao resultado de uma função", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível indexar o objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível indexar o objeto", function (err, _translation) {
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
describe("translating pt-BR string: Cadeia esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cadeia esperada", function (err, _translation) {
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
describe("translating pt-BR string: Objeto de data esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto de data esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Lado esquerdo inválido em atribuição", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Lado esquerdo inválido em atribuição", function (err, _translation) {
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
describe("translating pt-BR string: Identificador não definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identificador não definido", function (err, _translation) {
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
describe("translating pt-BR string: Booliano esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Booliano esperado", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível executar o código a partir de um script liberado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível executar o código a partir de um script liberado", function (err, _translation) {
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
describe("translating pt-BR string: Membro de objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Membro de objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: VBArray esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto JavaScript esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto JavaScript esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto enumerador esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto enumerador esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto de expressão normal esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto de expressão normal esperado", function (err, _translation) {
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
describe("translating pt-BR string: Erro de sintaxe em expressão normal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de sintaxe em expressão normal", function (err, _translation) {
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
describe("translating pt-BR string: Quantificador inesperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Quantificador inesperado", function (err, _translation) {
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
describe("translating pt-BR string: ']' esperado na expressão normal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' esperado na expressão normal", function (err, _translation) {
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
describe("translating pt-BR string: ')' esperado na expressão normal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' esperado na expressão normal", function (err, _translation) {
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
describe("translating pt-BR string: Intervalo inválido no conjunto de caracteres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Intervalo inválido no conjunto de caracteres", function (err, _translation) {
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
describe("translating pt-BR string: Exceção descartada e não capturada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Exceção descartada e não capturada", function (err, _translation) {
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
describe("translating pt-BR string: A função não possui um objeto protótipo válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A função não possui um objeto protótipo válido", function (err, _translation) {
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
describe("translating pt-BR string: O URI a ser codificado contém um caractere inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O URI a ser codificado contém um caractere inválido", function (err, _translation) {
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
describe("translating pt-BR string: O URI a ser decodificado não é uma codificação válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O URI a ser decodificado não é uma codificação válida", function (err, _translation) {
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
describe("translating pt-BR string: O número de dígitos fracionários está fora do intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O número de dígitos fracionários está fora do intervalo", function (err, _translation) {
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
describe("translating pt-BR string: A precisão está fora do intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A precisão está fora do intervalo", function (err, _translation) {
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
describe("translating pt-BR string: Objeto Array ou argumentos esperados", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Array ou argumentos esperados", function (err, _translation) {
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
describe("translating pt-BR string: O tamanho da matriz deve ser um número inteiro positivo finito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O tamanho da matriz deve ser um número inteiro positivo finito", function (err, _translation) {
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
describe("translating pt-BR string: Um número positivo finito deve ser atribuído ao tamanho da matriz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Um número positivo finito deve ser atribuído ao tamanho da matriz", function (err, _translation) {
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
describe("translating pt-BR string: Objeto Array esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Array esperado", function (err, _translation) {
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
describe("translating pt-BR string: Não há suporte para referência circular no argumento de valor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não há suporte para referência circular no argumento de valor", function (err, _translation) {
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
describe("translating pt-BR string: Argumento substituto inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento substituto inválido", function (err, _translation) {
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
describe("translating pt-BR string: Lista de argumentos muito grande para aplicação", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Lista de argumentos muito grande para aplicação", function (err, _translation) {
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
describe("translating pt-BR string: Redeclaração da propriedade const", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Redeclaração da propriedade const", function (err, _translation) {
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
describe("translating pt-BR string: Membro de objeto não configurável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Membro de objeto não configurável", function (err, _translation) {
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
describe("translating pt-BR string: Variável não definida no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variável não definida no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: O acesso à propriedade 'caller' de uma função ou objeto de argumentos não é permitido no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O acesso à propriedade 'caller' de uma função ou objeto de argumentos não é permitido no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: O acesso à propriedade 'callee' de um objeto de argumentos não é permitido no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O acesso à propriedade 'callee' de um objeto de argumentos não é permitido no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: A atribuição às propriedades somente leitura não permitida no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A atribuição às propriedades somente leitura não permitida no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível criar propriedade para um objeto não extensível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível criar propriedade para um objeto não extensível", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Função esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função esperada", function (err, _translation) {
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
describe("translating pt-BR string: Função esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função esperada", function (err, _translation) {
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
describe("translating pt-BR string: A propriedade não pode ter acessadores e um valor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A propriedade não pode ter acessadores e um valor", function (err, _translation) {
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
describe("translating pt-BR string: 'this' é nulo ou não definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' é nulo ou não definido", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Função esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função esperada", function (err, _translation) {
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
describe("translating pt-BR string: Cadeia de caracteres esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cadeia de caracteres esperada", function (err, _translation) {
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
describe("translating pt-BR string: Booliano esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Booliano esperado", function (err, _translation) {
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
describe("translating pt-BR string: Data esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Data esperada", function (err, _translation) {
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
describe("translating pt-BR string: Número esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número esperado", function (err, _translation) {
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
describe("translating pt-BR string: VBArray esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto JavaScript esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto JavaScript esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto enumerador esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto enumerador esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto RegExp esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto RegExp esperado", function (err, _translation) {
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
describe("translating pt-BR string: Argumento de função inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento de função inválido", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto JavaScript esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto JavaScript esperado", function (err, _translation) {
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
describe("translating pt-BR string: Função esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função esperada", function (err, _translation) {
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
describe("translating pt-BR string: VBArray esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Propriedade 'length' inválida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Propriedade 'length' inválida", function (err, _translation) {
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
describe("translating pt-BR string: Objeto Array ou arguments esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Array ou arguments esperado", function (err, _translation) {
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
describe("translating pt-BR string: Operando Inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando Inválido", function (err, _translation) {
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
describe("translating pt-BR string: Operando Inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando Inválido", function (err, _translation) {
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
describe("translating pt-BR string: Descritor de propriedade inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Descritor de propriedade inválido", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível definir a propriedade: o objeto não é extensível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir a propriedade: o objeto não é extensível", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível redefinir propriedade não configurável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível redefinir propriedade não configurável", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível modificar propriedade não gravável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível modificar propriedade não gravável", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível modificar a propriedade: 'length' não é gravável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível modificar a propriedade: 'length' não é gravável", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível definir a propriedade", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir a propriedade", function (err, _translation) {
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
describe("translating pt-BR string: O argumento do construtor de matriz digitada é inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento do construtor de matriz digitada é inválido", function (err, _translation) {
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
describe("translating pt-BR string: 'este' não é um objeto de matriz digitada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'este' não é um objeto de matriz digitada", function (err, _translation) {
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
describe("translating pt-BR string: Deslocamento/tamanho inválido ao criar matriz digitada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Deslocamento/tamanho inválido ao criar matriz digitada", function (err, _translation) {
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
describe("translating pt-BR string: Valor inicial/final inválido no método de submatriz da matriz digitada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Valor inicial/final inválido no método de submatriz da matriz digitada", function (err, _translation) {
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
describe("translating pt-BR string: Origem inválida no conjunto de matrizes digitadas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Origem inválida no conjunto de matrizes digitadas", function (err, _translation) {
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
describe("translating pt-BR string: 'este' não é um objeto DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'este' não é um objeto DataView", function (err, _translation) {
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
describe("translating pt-BR string: Argumentos inválidos no DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentos inválidos no DataView", function (err, _translation) {
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
describe("translating pt-BR string: Acesso à operação DataView além do tamanho de buffer especificado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acesso à operação DataView além do tamanho de buffer especificado", function (err, _translation) {
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
describe("translating pt-BR string: Argumentos inválidos no DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentos inválidos no DataView", function (err, _translation) {
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
describe("translating pt-BR string: assinatura de função inválida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("assinatura de função inválida", function (err, _translation) {
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
describe("translating pt-BR string: assinatura de propriedade inválida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("assinatura de propriedade inválida", function (err, _translation) {
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
describe("translating pt-BR string: tipo de parâmetro de entrada inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("tipo de parâmetro de entrada inválido", function (err, _translation) {
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
describe("translating pt-BR string: parâmetro de saída inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("parâmetro de saída inválido", function (err, _translation) {
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
describe("translating pt-BR string: O acesso à propriedade 'arguments' de uma função não é permitido no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O acesso à propriedade 'arguments' de uma função não é permitido no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Objeto Inspecionável esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Inspecionável esperado", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter argumento em tipo 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter argumento em tipo 'char'", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter argumento em tipo 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter argumento em tipo 'GUID'", function (err, _translation) {
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
describe("translating pt-BR string: IInspectable esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable esperado", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter objeto em struct: propriedade esperada ausente do objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter objeto em struct: propriedade esperada ausente do objeto", function (err, _translation) {
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
describe("translating pt-BR string: tipo desconhecido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("tipo desconhecido", function (err, _translation) {
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
describe("translating pt-BR string: Função chamada com poucos argumentos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função chamada com poucos argumentos", function (err, _translation) {
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
describe("translating pt-BR string: O tipo não é construível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O tipo não é construível", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter valor em PropertyValue: Tipo sem suporte de PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter valor em PropertyValue: Tipo sem suporte de PropertyValue", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter valor em IInspectable: Tipo sem suporte de IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter valor em IInspectable: Tipo sem suporte de IInspectable", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter Data em Windows.Foundation.DateTime: valor fora do intervalo válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter Data em Windows.Foundation.DateTime: valor fora do intervalo válido", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter valor em Windows.Foundation.TimeSpan: valor fora do intervalo válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter valor em Windows.Foundation.TimeSpan: valor fora do intervalo válido", function (err, _translation) {
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
describe("translating pt-BR string: Acesso inválido a Objeto Inspecionável já liberado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acesso inválido a Objeto Inspecionável já liberado", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível liberar Objeto Inspecionável já liberado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível liberar Objeto Inspecionável já liberado", function (err, _translation) {
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
describe("translating pt-BR string: 'isto' não é do tipo esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'isto' não é do tipo esperado", function (err, _translation) {
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
describe("translating pt-BR string: Comprimento e tamanho inválidos especificados para a matriz", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Comprimento e tamanho inválidos especificados para a matriz", function (err, _translation) {
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
describe("translating pt-BR string: Ocorreu uma falha inesperada ao tentar obter informações de metadados", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ocorreu uma falha inesperada ao tentar obter informações de metadados", function (err, _translation) {
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
describe("translating pt-BR string: O status é 'erro', mas getResults não retornou um erro", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O status é 'erro', mas getResults não retornou um erro", function (err, _translation) {
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
describe("translating pt-BR string: Parâmetro de status ausente ou inválido repassado para o manipulador concluído", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Parâmetro de status ausente ou inválido repassado para o manipulador concluído", function (err, _translation) {
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
describe("translating pt-BR string: Parâmetro de remetente ausente ou inválido repassado para o manipulador concluído", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Parâmetro de remetente ausente ou inválido repassado para o manipulador concluído", function (err, _translation) {
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
describe("translating pt-BR string: Infinito", function () {
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
describe("translating pt-BR string: -Infinito", function () {
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
describe("translating pt-BR string: O objeto não oferece suporte à propriedade ou método 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não oferece suporte à propriedade ou método 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: O argumento para a função 'MyDynamicTestString' não é opcional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento para a função 'MyDynamicTestString' não é opcional", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um número", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um número", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é uma função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é uma função", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um objeto que pode ser indexado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto que pode ser indexado", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é uma cadeia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é uma cadeia", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um objeto de data", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto de data", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' é nulo ou não é um objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' é nulo ou não é um objeto", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível atribuir a 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível atribuir a 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não está definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não está definido", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um booliano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um booliano", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível excluir 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível excluir 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um VBArray", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um objeto JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto JavaScript", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um objeto enumerador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto enumerador", function (err, _translation) {
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
describe("translating pt-BR string: 'MyDynamicTestString' não é um objeto de expressão regular", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto de expressão regular", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString não é um objeto Array ou arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString não é um objeto Array ou arguments", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString não é um objeto Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString não é um objeto Array", function (err, _translation) {
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
describe("translating pt-BR string: O atributo 'MyDynamicTestString' no descritor de propriedade não pode ser definido como 'true' neste objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O atributo 'MyDynamicTestString' no descritor de propriedade não pode ser definido como 'true' neste objeto", function (err, _translation) {
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
describe("translating pt-BR string: O atributo 'MyDynamicTestString' no descritor de propriedade não pode ser definido como 'false' neste objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O atributo 'MyDynamicTestString' no descritor de propriedade não pode ser definido como 'false' neste objeto", function (err, _translation) {
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
describe("translating pt-BR string: Redeclaração de const 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Redeclaração de const 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: Execução de exclusão em 'MyDynamicTestString' não permitida no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Execução de exclusão em 'MyDynamicTestString' não permitida no modo estrito", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível definir a propriedade 'MyDynamicTestString' de referência indefinida ou nula", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir a propriedade 'MyDynamicTestString' de referência indefinida ou nula", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível obter a propriedade 'MyDynamicTestString' de referência indefinida ou nula", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível obter a propriedade 'MyDynamicTestString' de referência indefinida ou nula", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível excluir a propriedade 'MyDynamicTestString' de referência indefinida ou nula", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível excluir a propriedade 'MyDynamicTestString' de referência indefinida ou nula", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível acessar a propriedade 'MyDynamicTestString': tipo 'VarDate' não oferece suporte a propriedades definidas pelo usuário", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível acessar a propriedade 'MyDynamicTestString': tipo 'VarDate' não oferece suporte a propriedades definidas pelo usuário", function (err, _translation) {
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
describe("translating pt-BR string: O valor da propriedade 'MyDynamicTestString' não é um objeto de Função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O valor da propriedade 'MyDynamicTestString' não é um objeto de Função", function (err, _translation) {
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
describe("translating pt-BR string: O valor da propriedade 'MyDynamicTestString' é nulo ou não definido; não é um objeto de Função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O valor da propriedade 'MyDynamicTestString' é nulo ou não definido; não é um objeto de Função", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' é nulo ou não definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' é nulo ou não definido", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um Objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um Objeto", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto de Função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto de Função", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto de Cadeia de Caracteres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto de Cadeia de Caracteres", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto Booliano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto Booliano", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto de Data", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto de Data", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto de Número", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto de Número", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto VBArray", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto JavaScript", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto Enumerador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto Enumerador", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto RegExp", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento inválido", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento não é um Objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento não é um Objeto", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento não é um objeto JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento não é um objeto JavaScript", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento não é um objeto de Função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento não é um objeto de Função", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento não é um objeto VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento não é um objeto VBArray", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento é nulo ou não definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento é nulo ou não definido", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento não é um Objeto e não é nulo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento não é um Objeto e não é nulo", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: argumento não tem uma propriedade 'length' válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: argumento não tem uma propriedade 'length' válida", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: objeto Array ou arguments esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: objeto Array ou arguments esperado", function (err, _translation) {
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
describe("translating pt-BR string: Operando inválido para 'MyDynamicTestString': Objeto esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando inválido para 'MyDynamicTestString': Objeto esperado", function (err, _translation) {
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
describe("translating pt-BR string: Operando inválido para 'MyDynamicTestString': Função esperada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando inválido para 'MyDynamicTestString': Função esperada", function (err, _translation) {
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
describe("translating pt-BR string: Descritor inválido para propriedade 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Descritor inválido para propriedade 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível definir a propriedade 'MyDynamicTestString': o objeto não é extensível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir a propriedade 'MyDynamicTestString': o objeto não é extensível", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível redefinir a propriedade não configurável 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível redefinir a propriedade não configurável 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível modificar a propriedade não gravável 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível modificar a propriedade não gravável 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível modificar a propriedade 'MyDynamicTestString': 'length' não é gravável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível modificar a propriedade 'MyDynamicTestString': 'length' não é gravável", function (err, _translation) {
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
describe("translating pt-BR string: Não é possível definir a propriedade 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir a propriedade 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-BR string: O argumento necessário MyDynamicTestString no método DataView não está especificado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento necessário MyDynamicTestString no método DataView não está especificado", function (err, _translation) {
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
describe("translating pt-BR string: O argumento do construtor DataView MyDynamicTestString é inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento do construtor DataView MyDynamicTestString é inválido", function (err, _translation) {
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
describe("translating pt-BR string: A função 'MyDynamicTestString' tem uma assinatura inválida e não pode ser chamada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A função 'MyDynamicTestString' tem uma assinatura inválida e não pode ser chamada", function (err, _translation) {
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
describe("translating pt-BR string: A propriedade 'MyDynamicTestString' tem uma assinatura inválida e não pode ser acessada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A propriedade 'MyDynamicTestString' tem uma assinatura inválida e não pode ser acessada", function (err, _translation) {
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
describe("translating pt-BR string: O runtimeclass MyDynamicTestString que tem Windows.Foundation.IPropertyValue como interface padrão não tem suporte como tipo de parâmetro de entrada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O runtimeclass MyDynamicTestString que tem Windows.Foundation.IPropertyValue como interface padrão não tem suporte como tipo de parâmetro de entrada", function (err, _translation) {
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
describe("translating pt-BR string: O objeto com interface Windows.Foundation.IPropertyValue que tem runtimeclass chamado MyDynamicTestString não tem suporte como parâmetro de saída", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto com interface Windows.Foundation.IPropertyValue que tem runtimeclass chamado MyDynamicTestString não tem suporte como parâmetro de saída", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: 'this' não é um objeto Inspecionável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto Inspecionável", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: não foi possível converter argumento em tipo 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: não foi possível converter argumento em tipo 'char'", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: não foi possível converter argumento em tipo 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: não foi possível converter argumento em tipo 'GUID'", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: não foi possível converter valor de retorno em IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: não foi possível converter valor de retorno em IInspectable", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter objeto em struct: propriedade esperada 'MyDynamicTestString' ausente do objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter objeto em struct: propriedade esperada 'MyDynamicTestString' ausente do objeto", function (err, _translation) {
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
describe("translating pt-BR string: Tipo 'MyDynamicTestString' não encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tipo 'MyDynamicTestString' não encontrado", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: função chamada com poucos argumentos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: função chamada com poucos argumentos", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: o tipo não é construível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o tipo não é construível", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter valor em PropertyValue: MyDynamicTestString sem suporte de PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter valor em PropertyValue: MyDynamicTestString sem suporte de PropertyValue", function (err, _translation) {
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
describe("translating pt-BR string: Não foi possível converter valor em IInspectable: MyDynamicTestString sem suporte de IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter valor em IInspectable: MyDynamicTestString sem suporte de IInspectable", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: O objeto inspecionável 'this' foi liberado e não pode ser acessado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: O objeto inspecionável 'this' foi liberado e não pode ser acessado", function (err, _translation) {
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
describe("translating pt-BR string: 'isto' não é do tipo esperado: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'isto' não é do tipo esperado: MyDynamicTestString", function (err, _translation) {
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
describe("translating pt-BR string: MyDynamicTestString: ocorreu uma falha inesperada ao tentar obter informações de metadados", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: ocorreu uma falha inesperada ao tentar obter informações de metadados", function (err, _translation) {
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
describe("translating pt-BR string: A data especificada não está disponível no calendário da localidade atual", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A data especificada não está disponível no calendário da localidade atual", function (err, _translation) {
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
