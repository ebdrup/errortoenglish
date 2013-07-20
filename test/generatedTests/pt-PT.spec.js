var errorToEnglish = require("../../lib/errortoenglish");
describe("translating pt-PT string: Chamada ou argumento de procedimento inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chamada ou argumento de procedimento inválido", function (err, _translation) {
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
describe("translating pt-PT string: Excesso de capacidade", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Excesso de capacidade", function (err, _translation) {
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
describe("translating pt-PT string: Memória esgotada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Memória esgotada", function (err, _translation) {
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
describe("translating pt-PT string: Formato inferior à linha fora do intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Formato inferior à linha fora do intervalo", function (err, _translation) {
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
describe("translating pt-PT string: Esta matriz é constante ou está temporariamente bloqueada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Esta matriz é constante ou está temporariamente bloqueada", function (err, _translation) {
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
describe("translating pt-PT string: Divisão por zero", function () {
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
	});
});
describe("translating pt-PT string: Tipo incorreto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tipo incorreto", function (err, _translation) {
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
describe("translating pt-PT string: Espaço insuficiente para cadeias", function () {
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
	});
});
describe("translating pt-PT string: Não é possível efetuar operação pedida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível efetuar operação pedida", function (err, _translation) {
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
describe("translating pt-PT string: Espaço insuficiente na pilha", function () {
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
	});
});
describe("translating pt-PT string: Sub ou Function não definidas", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub ou Function não definidas", function (err, _translation) {
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
describe("translating pt-PT string: Erro ao carregar a DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro ao carregar a DLL", function (err, _translation) {
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
describe("translating pt-PT string: Erro interno", function () {
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
	});
});
describe("translating pt-PT string: Nome ou número de ficheiro incorreto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nome ou número de ficheiro incorreto", function (err, _translation) {
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
describe("translating pt-PT string: Ficheiro não encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ficheiro não encontrado", function (err, _translation) {
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
describe("translating pt-PT string: Modo de ficheiro incorreto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Modo de ficheiro incorreto", function (err, _translation) {
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
describe("translating pt-PT string: Ficheiro já está aberto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ficheiro já está aberto", function (err, _translation) {
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
describe("translating pt-PT string: Erro de E/S no dispositivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de E/S no dispositivo", function (err, _translation) {
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
describe("translating pt-PT string: Ficheiro já existente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ficheiro já existente", function (err, _translation) {
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
describe("translating pt-PT string: Disco cheio", function () {
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
	});
});
describe("translating pt-PT string: O comando Input ultrapassou o final do ficheiro", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O comando Input ultrapassou o final do ficheiro", function (err, _translation) {
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
describe("translating pt-PT string: Demasiados ficheiros", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Demasiados ficheiros", function (err, _translation) {
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
describe("translating pt-PT string: Dispositivo não disponível", function () {
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
	});
});
describe("translating pt-PT string: Permissão negada", function () {
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
	});
});
describe("translating pt-PT string: O disco não está preparado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O disco não está preparado", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível mudar o nome para uma unidade diferente", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível mudar o nome para uma unidade diferente", function (err, _translation) {
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
describe("translating pt-PT string: Erro de acesso a caminho/ficheiro", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de acesso a caminho/ficheiro", function (err, _translation) {
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
describe("translating pt-PT string: Caminho não encontrado", function () {
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
	});
});
describe("translating pt-PT string: Variável de objeto ou variável de bloco With não definidos", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variável de objeto ou variável de bloco With não definidos", function (err, _translation) {
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
describe("translating pt-PT string: Loop com For não inicializado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Loop com For não inicializado", function (err, _translation) {
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
describe("translating pt-PT string: Utilização incorreta de Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Utilização incorreta de Null", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível criar o ficheiro temporário necessário", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível criar o ficheiro temporário necessário", function (err, _translation) {
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
describe("translating pt-PT string: Objeto necessário", function () {
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
	});
});
describe("translating pt-PT string: O servidor Automation não consegue criar o objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O servidor Automation não consegue criar o objeto", function (err, _translation) {
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
describe("translating pt-PT string: Class não suporta Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Class não suporta Automation", function (err, _translation) {
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
describe("translating pt-PT string: Nome de ficheiro ou classe não encontrado durante a operação Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nome de ficheiro ou classe não encontrado durante a operação Automation", function (err, _translation) {
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
describe("translating pt-PT string: O objeto não suporta esta propriedade ou método", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não suporta esta propriedade ou método", function (err, _translation) {
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
describe("translating pt-PT string: Erro de Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de Automation", function (err, _translation) {
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
describe("translating pt-PT string: O objeto não suporta esta ação", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não suporta esta ação", function (err, _translation) {
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
describe("translating pt-PT string: O objeto não suporta argumentos com nomes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não suporta argumentos com nomes", function (err, _translation) {
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
describe("translating pt-PT string: O objeto não suporta a definição de local atual", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não suporta a definição de local atual", function (err, _translation) {
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
describe("translating pt-PT string: Nome de argumento não encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nome de argumento não encontrado", function (err, _translation) {
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
describe("translating pt-PT string: O argumento não é opcional", function () {
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
	});
});
describe("translating pt-PT string: Número errado de argumentos ou atribuição inválida de propriedade", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Número errado de argumentos ou atribuição inválida de propriedade", function (err, _translation) {
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
describe("translating pt-PT string: O objeto não é uma coleção", function () {
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
	});
});
describe("translating pt-PT string: A função DLL especificada não foi encontrada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A função DLL especificada não foi encontrada", function (err, _translation) {
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
describe("translating pt-PT string: A variável utiliza um tipo de Automation não suportado em JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A variável utiliza um tipo de Automation não suportado em JavaScript", function (err, _translation) {
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
describe("translating pt-PT string: O servidor remoto não existe ou não está disponível", function () {
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
	});
});
describe("translating pt-PT string: Não é possível atribuir um valor à variável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível atribuir um valor à variável", function (err, _translation) {
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
describe("translating pt-PT string: Não é seguro processar o script do objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é seguro processar o script do objeto", function (err, _translation) {
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
describe("translating pt-PT string: Não é seguro iniciar o objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é seguro iniciar o objeto", function (err, _translation) {
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
describe("translating pt-PT string: Não é seguro criar objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é seguro criar objeto", function (err, _translation) {
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
describe("translating pt-PT string: Ocorreu uma exceção", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ocorreu uma exceção", function (err, _translation) {
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
describe("translating pt-PT string: Memória esgotada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Memória esgotada", function (err, _translation) {
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
describe("translating pt-PT string: Erro de sintaxe", function () {
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
	});
});
describe("translating pt-PT string: Caráter ':' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter ':' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Caráter ';' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter ';' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Caráter '(' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter '(' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Caráter ')' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter ')' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Caráter ']' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter ']' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Caráter '{' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter '{' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Caráter '}' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter '}' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Identificador esperado", function () {
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
	});
});
describe("translating pt-PT string: Caráter '=' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter '=' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Caráter '/' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter '/' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Número inválido", function () {
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
	});
});
describe("translating pt-PT string: Caráter inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter inválido", function (err, _translation) {
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
describe("translating pt-PT string: Constante de cadeia não terminada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constante de cadeia não terminada", function (err, _translation) {
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
describe("translating pt-PT string: Comentário não terminado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Comentário não terminado", function (err, _translation) {
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
describe("translating pt-PT string: Instrução 'return' fora da função", function () {
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
	});
});
describe("translating pt-PT string: Não é permitido 'break' fora do loop", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é permitido 'break' fora do loop", function (err, _translation) {
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
describe("translating pt-PT string: Não é permitido 'continue' fora do loop", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é permitido 'continue' fora do loop", function (err, _translation) {
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
describe("translating pt-PT string: Dígito hexadecimal esperado", function () {
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
	});
});
describe("translating pt-PT string: 'while' esperado", function () {
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
	});
});
describe("translating pt-PT string: Rótulo redefinido", function () {
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
	});
});
describe("translating pt-PT string: Rótulo não encontrado", function () {
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
	});
});
describe("translating pt-PT string: 'default' só pode aparecer uma vez numa instrução 'switch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' só pode aparecer uma vez numa instrução 'switch'", function (err, _translation) {
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
describe("translating pt-PT string: Identificador, cadeia ou número esperado", function () {
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
	});
});
describe("translating pt-PT string: Caráter '@end' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter '@end' esperado", function (err, _translation) {
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
describe("translating pt-PT string: A compilação condicional está desativada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A compilação condicional está desativada", function (err, _translation) {
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
describe("translating pt-PT string: Constante esperada", function () {
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
	});
});
describe("translating pt-PT string: Caráter '@' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter '@' esperado", function (err, _translation) {
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
describe("translating pt-PT string: 'catch' esperado", function () {
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
	});
});
describe("translating pt-PT string: 'var' esperado", function () {
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
	});
});
describe("translating pt-PT string: a 'devolução de uma exceção' deverá ser seguida de uma expressão na mesma linha de código original", function () {
	var translation;
	before(function (done) {
		errorToEnglish("a 'devolução de uma exceção' deverá ser seguida de uma expressão na mesma linha de código original", function (err, _translation) {
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
describe("translating pt-PT string: declarações 'com' não são permitidas no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("declarações 'com' não são permitidas no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Não são permitidos nomes de parâmetro formais duplicados no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não são permitidos nomes de parâmetro formais duplicados no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Não são permitidos literais numéricos octais e carateres de escape no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não são permitidos literais numéricos octais e carateres de escape no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Utilização inválida de 'eval' no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Utilização inválida de 'eval' no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Utilização inválida de 'arguments' no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Utilização inválida de 'arguments' no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Chamada de eliminação com expressão não permitida no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chamada de eliminação com expressão não permitida no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Múltiplas definições de uma propriedade não permitidas no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Múltiplas definições de uma propriedade não permitidas no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: No modo restrito, não é possível aninhar declarações de função dentro de uma instrução ou bloco. Só podem aparecer no nível superior ou diretamente dentro do corpo de uma função.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("No modo restrito, não é possível aninhar declarações de função dentro de uma instrução ou bloco. Só podem aparecer no nível superior ou diretamente dentro do corpo de uma função.", function (err, _translation) {
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
describe("translating pt-PT string: A utilização de uma palavra-chave para um identificador é inválida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A utilização de uma palavra-chave para um identificador é inválida", function (err, _translation) {
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
describe("translating pt-PT string: A utilização de uma palavra reservada futura para um identificador é inválida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A utilização de uma palavra reservada futura para um identificador é inválida", function (err, _translation) {
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
describe("translating pt-PT string: A utilização de uma palavra reservada futura para um identificador é inválida. O nome do identificador está reservado no modo restrito.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A utilização de uma palavra reservada futura para um identificador é inválida. O nome do identificador está reservado no modo restrito.", function (err, _translation) {
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
describe("translating pt-PT string: As funções setter têm de ter um argumento", function () {
	var translation;
	before(function (done) {
		errorToEnglish("As funções setter têm de ter um argumento", function (err, _translation) {
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
describe("translating pt-PT string: Erro de compilação de JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de compilação de JavaScript", function (err, _translation) {
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
describe("translating pt-PT string: Erro de runtime de JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de runtime de JavaScript", function (err, _translation) {
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
describe("translating pt-PT string: Erro em tempo de execução desconhecido", function () {
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
	});
});
describe("translating pt-PT string: Não é possível atribuir um valor a 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível atribuir um valor a 'this'", function (err, _translation) {
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
describe("translating pt-PT string: Número esperado", function () {
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
	});
});
describe("translating pt-PT string: Função esperada", function () {
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating pt-PT string: Não é permitido atribuir um valor a um resultado de função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é permitido atribuir um valor a um resultado de função", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível indexar objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível indexar objeto", function (err, _translation) {
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
describe("translating pt-PT string: Cadeia esperada", function () {
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
	});
});
describe("translating pt-PT string: Objeto Date esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Date esperado", function (err, _translation) {
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
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Parte esquerda inválida na atribuição", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Parte esquerda inválida na atribuição", function (err, _translation) {
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
describe("translating pt-PT string: Identificador não definido", function () {
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
	});
});
describe("translating pt-PT string: Booleano esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Booleano esperado", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível executar códigos a partir de um script livre", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível executar códigos a partir de um script livre", function (err, _translation) {
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
describe("translating pt-PT string: Membro de objeto esperado", function () {
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
	});
});
describe("translating pt-PT string: VBArray esperado", function () {
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
	});
});
describe("translating pt-PT string: Objeto JavaScript esperado", function () {
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
	});
});
describe("translating pt-PT string: Objeto Enumerator esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Enumerator esperado", function (err, _translation) {
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
describe("translating pt-PT string: Objeto Regular Expression esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Regular Expression esperado", function (err, _translation) {
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
describe("translating pt-PT string: Erro de sintaxe na expressão normal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erro de sintaxe na expressão normal", function (err, _translation) {
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
describe("translating pt-PT string: Quantificador inesperado", function () {
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
	});
});
describe("translating pt-PT string: Caráter ']' esperado em expressão normal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter ']' esperado em expressão normal", function (err, _translation) {
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
describe("translating pt-PT string: Caráter ')' esperado em expressão normal", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caráter ')' esperado em expressão normal", function (err, _translation) {
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
describe("translating pt-PT string: Intervalo inválido no conjunto de carateres", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Intervalo inválido no conjunto de carateres", function (err, _translation) {
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
describe("translating pt-PT string: Foi devolvida uma exceção mas desconhece-se a sua origem", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Foi devolvida uma exceção mas desconhece-se a sua origem", function (err, _translation) {
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
describe("translating pt-PT string: A função não tem um objeto protótipo válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A função não tem um objeto protótipo válido", function (err, _translation) {
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
describe("translating pt-PT string: O URI a ser codificado contém um caráter inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O URI a ser codificado contém um caráter inválido", function (err, _translation) {
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
describe("translating pt-PT string: O URI a ser descodificado não possui uma codificação válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O URI a ser descodificado não possui uma codificação válida", function (err, _translation) {
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
describe("translating pt-PT string: O número de dígitos fracionais está fora do intervalo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O número de dígitos fracionais está fora do intervalo", function (err, _translation) {
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
describe("translating pt-PT string: A precisão está fora do intervalo", function () {
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
	});
});
describe("translating pt-PT string: Objeto 'Array' ou 'arguments' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto 'Array' ou 'arguments' esperado", function (err, _translation) {
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
describe("translating pt-PT string: O comprimento da matriz tem de ser um inteiro finito positivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O comprimento da matriz tem de ser um inteiro finito positivo", function (err, _translation) {
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
describe("translating pt-PT string: O comprimento da matriz tem de ter atribuído um número finito positivo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O comprimento da matriz tem de ter atribuído um número finito positivo", function (err, _translation) {
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
describe("translating pt-PT string: Objeto 'Array' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto 'Array' esperado", function (err, _translation) {
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
describe("translating pt-PT string: A referência circular no argumento 'value' não é suportada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A referência circular no argumento 'value' não é suportada", function (err, _translation) {
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
describe("translating pt-PT string: Argumento 'replacer' inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumento 'replacer' inválido", function (err, _translation) {
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
describe("translating pt-PT string: Lista de argumentos demasiado grande para aplicar", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Lista de argumentos demasiado grande para aplicar", function (err, _translation) {
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
describe("translating pt-PT string: Nova declaração da propriedade const", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nova declaração da propriedade const", function (err, _translation) {
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
describe("translating pt-PT string: Membro de objeto não configurável", function () {
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
	});
});
describe("translating pt-PT string: Variável não definida no modo estrito", function () {
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
	});
});
describe("translating pt-PT string: Acesso à propriedade 'caller' de um objeto de função ou de argumentos não permitido no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acesso à propriedade 'caller' de um objeto de função ou de argumentos não permitido no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Acesso à propriedade 'callee' de um objeto de argumentos não permitido no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acesso à propriedade 'callee' de um objeto de argumentos não permitido no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Atribuição a propriedades só de leitura não permitida no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Atribuição a propriedades só de leitura não permitida no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível criar a propriedade para um objeto não extensível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível criar a propriedade para um objeto não extensível", function (err, _translation) {
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
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Função esperada", function () {
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating pt-PT string: Função esperada", function () {
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating pt-PT string: A propriedade não pode ter simultaneamente acessores e um valor", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A propriedade não pode ter simultaneamente acessores e um valor", function (err, _translation) {
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
describe("translating pt-PT string: 'this' é nulo ou não definido", function () {
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
	});
});
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Função esperada", function () {
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating pt-PT string: Cadeia esperada", function () {
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
	});
});
describe("translating pt-PT string: Booleano esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Booleano esperado", function (err, _translation) {
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
describe("translating pt-PT string: Data esperada", function () {
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
	});
});
describe("translating pt-PT string: Número esperado", function () {
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
	});
});
describe("translating pt-PT string: VBArray esperado", function () {
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
	});
});
describe("translating pt-PT string: Objeto JavaScript esperado", function () {
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
	});
});
describe("translating pt-PT string: Objeto Enumerator esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Enumerator esperado", function (err, _translation) {
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
describe("translating pt-PT string: Objeto RegExp esperado", function () {
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
	});
});
describe("translating pt-PT string: Argumento de função inválido", function () {
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
	});
});
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Objeto JavaScript esperado", function () {
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
	});
});
describe("translating pt-PT string: Função esperada", function () {
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
	});
});
describe("translating pt-PT string: VBArray esperado", function () {
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
	});
});
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Objeto esperado", function () {
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
	});
});
describe("translating pt-PT string: Propriedade 'length' inválida", function () {
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
	});
});
describe("translating pt-PT string: Objeto 'Array' ou 'arguments' esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto 'Array' ou 'arguments' esperado", function (err, _translation) {
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
describe("translating pt-PT string: Operando inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando inválido", function (err, _translation) {
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
describe("translating pt-PT string: Operando inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Operando inválido", function (err, _translation) {
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
describe("translating pt-PT string: Descritor de propriedade inválido", function () {
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
	});
});
describe("translating pt-PT string: Não é possível definir a propriedade: o objeto não é extensível", function () {
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
	});
});
describe("translating pt-PT string: Não é possível redefinir uma propriedade não configurável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível redefinir uma propriedade não configurável", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível alterar uma propriedade não gravável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível alterar uma propriedade não gravável", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível alterar a propriedade: 'length' não é gravável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível alterar a propriedade: 'length' não é gravável", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível definir a propriedade", function () {
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
	});
});
describe("translating pt-PT string: O argumento de construtor da matriz escrita é inválido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento de construtor da matriz escrita é inválido", function (err, _translation) {
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
describe("translating pt-PT string: 'this' não é um objeto da matriz escrita", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' não é um objeto da matriz escrita", function (err, _translation) {
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
describe("translating pt-PT string: Desvio/comprimento inválido ao criar a matriz escrita", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Desvio/comprimento inválido ao criar a matriz escrita", function (err, _translation) {
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
describe("translating pt-PT string: Valor de início/fim inválido no método de submatriz da matriz escrita", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Valor de início/fim inválido no método de submatriz da matriz escrita", function (err, _translation) {
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
describe("translating pt-PT string: Origem inválida no conjunto da matriz escrita", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Origem inválida no conjunto da matriz escrita", function (err, _translation) {
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
describe("translating pt-PT string: 'this' não é um objeto DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' não é um objeto DataView", function (err, _translation) {
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
describe("translating pt-PT string: Argumentos inválidos em DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentos inválidos em DataView", function (err, _translation) {
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
describe("translating pt-PT string: Acesso da operação DataView para lá do tamanho da memória intermédia especificado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acesso da operação DataView para lá do tamanho da memória intermédia especificado", function (err, _translation) {
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
describe("translating pt-PT string: Argumentos inválidos em DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argumentos inválidos em DataView", function (err, _translation) {
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
describe("translating pt-PT string: assinatura de função inválida", function () {
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
	});
});
describe("translating pt-PT string: assinatura de propriedade inválida", function () {
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
	});
});
describe("translating pt-PT string: tipo de parâmetro de entrada inválido", function () {
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
	});
});
describe("translating pt-PT string: parâmetro de saída inválido", function () {
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
	});
});
describe("translating pt-PT string: O acesso à propriedade 'arguments' de uma função não é permitido no modo restrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O acesso à propriedade 'arguments' de uma função não é permitido no modo restrito", function (err, _translation) {
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
describe("translating pt-PT string: Objeto Passível de Inspeção esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objeto Passível de Inspeção esperado", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o argumento no tipo 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o argumento no tipo 'char'", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o argumento no tipo 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o argumento no tipo 'GUID'", function (err, _translation) {
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
describe("translating pt-PT string: Era esperado IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Era esperado IInspectable", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o objeto em estrutura: falta uma propriedade esperada no objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o objeto em estrutura: falta uma propriedade esperada no objeto", function (err, _translation) {
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
describe("translating pt-PT string: Tipo desconhecido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tipo desconhecido", function (err, _translation) {
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
describe("translating pt-PT string: Função chamada com argumentos insuficientes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Função chamada com argumentos insuficientes", function (err, _translation) {
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
describe("translating pt-PT string: O tipo não é estruturável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O tipo não é estruturável", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o valor em PropertyValue: tipo não suportado por PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o valor em PropertyValue: tipo não suportado por PropertyValue", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o valor em IInspectable: tipo não suportado por IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o valor em IInspectable: tipo não suportado por IInspectable", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter Date em Windows.Foundation.DateTime: valor fora do intervalo válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter Date em Windows.Foundation.DateTime: valor fora do intervalo válido", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o valor em Windows.Foundation.TimeSpan: valor fora do intervalo válido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o valor em Windows.Foundation.TimeSpan: valor fora do intervalo válido", function (err, _translation) {
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
describe("translating pt-PT string: Acesso inválido ao Objeto Passível de Inspeção já libertado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Acesso inválido ao Objeto Passível de Inspeção já libertado", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível libertar o Objeto Passível de Inspeção já libertado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível libertar o Objeto Passível de Inspeção já libertado", function (err, _translation) {
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
describe("translating pt-PT string: 'this' não tem o tipo esperado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' não tem o tipo esperado", function (err, _translation) {
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
describe("translating pt-PT string: Comprimento e tamanho inválidos especificados para a matriz", function () {
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
	});
});
describe("translating pt-PT string: Ocorreu uma falha inesperada ao tentar obter informações de metadados", function () {
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
	});
});
describe("translating pt-PT string: O estado é 'erro', mas getResults não devolveu um erro", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O estado é 'erro', mas getResults não devolveu um erro", function (err, _translation) {
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
describe("translating pt-PT string: Um parâmetro de estado inválido ou em falta foi transmitido a um processador concluído", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Um parâmetro de estado inválido ou em falta foi transmitido a um processador concluído", function (err, _translation) {
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
describe("translating pt-PT string: Um parâmetro de emissor inválido ou em falta foi transmitido a um processador concluído", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Um parâmetro de emissor inválido ou em falta foi transmitido a um processador concluído", function (err, _translation) {
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
describe("translating pt-PT string: Infinito", function () {
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
describe("translating pt-PT string: -Infinito", function () {
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
describe("translating pt-PT string: O objeto não suporta a propriedade nem o método 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto não suporta a propriedade nem o método 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-PT string: O argumento da função 'MyDynamicTestString' não é opcional", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento da função 'MyDynamicTestString' não é opcional", function (err, _translation) {
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
describe("translating pt-PT string: 'MyDynamicTestString' não é um número", function () {
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
	});
});
describe("translating pt-PT string: 'MyDynamicTestString' não é uma função", function () {
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
	});
});
describe("translating pt-PT string: 'MyDynamicTestString' não é um objeto indexável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto indexável", function (err, _translation) {
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
describe("translating pt-PT string: 'MyDynamicTestString' não é uma cadeia", function () {
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
	});
});
describe("translating pt-PT string: 'MyDynamicTestString' não é um objeto Date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto Date", function (err, _translation) {
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
describe("translating pt-PT string: 'MyDynamicTestString' é nulo ou não é um objeto", function () {
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
	});
});
describe("translating pt-PT string: Não é possível atribuir a 'MyDynamicTestString'", function () {
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
	});
});
describe("translating pt-PT string: 'MyDynamicTestString' não está definido", function () {
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
	});
});
describe("translating pt-PT string: 'MyDynamicTestString' não é um booleano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um booleano", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível eliminar 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível eliminar 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-PT string: 'MyDynamicTestString' não é um VBArray", function () {
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
	});
});
describe("translating pt-PT string: 'MyDynamicTestString' não é um objeto JavaScript", function () {
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
	});
});
describe("translating pt-PT string: 'MyDynamicTestString' não é um objeto Enumerator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto Enumerator", function (err, _translation) {
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
describe("translating pt-PT string: 'MyDynamicTestString' não é um objeto Regular Expression", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' não é um objeto Regular Expression", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString não é um objeto 'Array' ou 'arguments'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString não é um objeto 'Array' ou 'arguments'", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString não é um objeto 'Array'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString não é um objeto 'Array'", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível definir o atributo 'MyDynamicTestString' do descritor de propriedades como 'true' neste objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir o atributo 'MyDynamicTestString' do descritor de propriedades como 'true' neste objeto", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível definir o atributo 'MyDynamicTestString' do descritor de propriedades como 'false' neste objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir o atributo 'MyDynamicTestString' do descritor de propriedades como 'false' neste objeto", function (err, _translation) {
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
describe("translating pt-PT string: Nova declaração de const 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nova declaração de const 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-PT string: Chamada de eliminação para 'MyDynamicTestString' não permitida no modo estrito", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chamada de eliminação para 'MyDynamicTestString' não permitida no modo estrito", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível definir a propriedade 'MyDynamicTestString' de uma referência não definida ou nula", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir a propriedade 'MyDynamicTestString' de uma referência não definida ou nula", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível obter a propriedade 'MyDynamicTestString' de uma referência não definida ou nula", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível obter a propriedade 'MyDynamicTestString' de uma referência não definida ou nula", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível eliminar a propriedade 'MyDynamicTestString' de uma referência não definida ou nula", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível eliminar a propriedade 'MyDynamicTestString' de uma referência não definida ou nula", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível aceder à propriedade 'MyDynamicTestString': o tipo 'VarDate' não suporta propriedades definidas pelo utilizador", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível aceder à propriedade 'MyDynamicTestString': o tipo 'VarDate' não suporta propriedades definidas pelo utilizador", function (err, _translation) {
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
describe("translating pt-PT string: O valor da propriedade 'MyDynamicTestString' não é um objeto de Função", function () {
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
	});
});
describe("translating pt-PT string: O valor da propriedade 'MyDynamicTestString' é nulo ou não definido, não um objeto de Função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O valor da propriedade 'MyDynamicTestString' é nulo ou não definido, não um objeto de Função", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: 'this' é nulo ou não definido", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um Objeto", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto de Função", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto de Cadeia", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto de Cadeia", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto Booleano", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um objeto Booleano", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto de Data", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto de Número", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto VBArray", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto JavaScript", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto Enumerador", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um objeto RegExp", function () {
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: argumento inválido", function () {
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
	});
});
describe("translating pt-PT string: MyDynamicTestString: o argumento não é um Objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o argumento não é um Objeto", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o argumento não é um objeto JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o argumento não é um objeto JavaScript", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o argumento não é um objeto de Função", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o argumento não é um objeto de Função", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o argumento não é um objeto VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o argumento não é um objeto VBArray", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o argumento é nulo ou não definido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o argumento é nulo ou não definido", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o argumento não é um Objeto e não é nulo", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o argumento não é um Objeto e não é nulo", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o argumento não tem uma propriedade 'length' válida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o argumento não tem uma propriedade 'length' válida", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: Matriz ou objeto de argumentos esperados", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Matriz ou objeto de argumentos esperados", function (err, _translation) {
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
describe("translating pt-PT string: Operando inválido para 'MyDynamicTestString': Objeto esperado", function () {
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
	});
});
describe("translating pt-PT string: Operando inválido para 'MyDynamicTestString': Função esperada", function () {
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
	});
});
describe("translating pt-PT string: Descritor inválido para a propriedade 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Descritor inválido para a propriedade 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível definir a propriedade 'MyDynamicTestString': objeto não é extensível", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível definir a propriedade 'MyDynamicTestString': objeto não é extensível", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível redefinir uma propriedade não configurável 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível redefinir uma propriedade não configurável 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível alterar uma propriedade não gravável 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível alterar uma propriedade não gravável 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível alterar a propriedade 'MyDynamicTestString': 'length' não é gravável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não é possível alterar a propriedade 'MyDynamicTestString': 'length' não é gravável", function (err, _translation) {
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
describe("translating pt-PT string: Não é possível definir a propriedade 'MyDynamicTestString'", function () {
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
	});
});
describe("translating pt-PT string: O argumento necessário MyDynamicTestString no método DataView não foi especificado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O argumento necessário MyDynamicTestString no método DataView não foi especificado", function (err, _translation) {
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
describe("translating pt-PT string: O argumento do construtor DataView MyDynamicTestString é inválido", function () {
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
	});
});
describe("translating pt-PT string: A função 'MyDynamicTestString' tem uma assinatura inválida e não pode ser chamada", function () {
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
	});
});
describe("translating pt-PT string: A propriedade 'MyDynamicTestString' tem uma assinatura inválida e não pode ser acedida", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A propriedade 'MyDynamicTestString' tem uma assinatura inválida e não pode ser acedida", function (err, _translation) {
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
describe("translating pt-PT string: O runtimeclass MyDynamicTestString que tem Windows.Foundation.IPropertyValue como interface predefinida não é suportado como tipo de parâmetro de entrada", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O runtimeclass MyDynamicTestString que tem Windows.Foundation.IPropertyValue como interface predefinida não é suportado como tipo de parâmetro de entrada", function (err, _translation) {
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
describe("translating pt-PT string: O objeto com a interface Windows.Foundation.IPropertyValue que tem o nome de runtimeclass MyDynamicTestString não é suportado como parâmetro de saída", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O objeto com a interface Windows.Foundation.IPropertyValue que tem o nome de runtimeclass MyDynamicTestString não é suportado como parâmetro de saída", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: 'this' não é um Objeto Passível de Inspeção", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' não é um Objeto Passível de Inspeção", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: não foi possível converter o argumento no tipo 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: não foi possível converter o argumento no tipo 'char'", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: não foi possível converter o argumento no tipo 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: não foi possível converter o argumento no tipo 'GUID'", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: não foi possível converter o valor de retorno em IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: não foi possível converter o valor de retorno em IInspectable", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o objeto em estrutura: falta a propriedade esperada 'MyDynamicTestString' no objeto", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o objeto em estrutura: falta a propriedade esperada 'MyDynamicTestString' no objeto", function (err, _translation) {
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
describe("translating pt-PT string: O tipo 'MyDynamicTestString' não foi encontrado", function () {
	var translation;
	before(function (done) {
		errorToEnglish("O tipo 'MyDynamicTestString' não foi encontrado", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: função chamada com argumentos insuficientes", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: função chamada com argumentos insuficientes", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o tipo não é estruturável", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o tipo não é estruturável", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o valor em PropertyValue: MyDynamicTestString não é suportado por PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o valor em PropertyValue: MyDynamicTestString não é suportado por PropertyValue", function (err, _translation) {
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
describe("translating pt-PT string: Não foi possível converter o valor em IInspectable: MyDynamicTestString não é suportado por IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Não foi possível converter o valor em IInspectable: MyDynamicTestString não é suportado por IInspectable", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: o objeto passível de inspeção 'this' foi libertado e não pode ser acedido", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: o objeto passível de inspeção 'this' foi libertado e não pode ser acedido", function (err, _translation) {
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
describe("translating pt-PT string: 'this' não tem o tipo esperado: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' não tem o tipo esperado: MyDynamicTestString", function (err, _translation) {
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
describe("translating pt-PT string: MyDynamicTestString: ocorreu uma falha inesperada ao tentar obter informações de metadados", function () {
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
	});
});
describe("translating pt-PT string: A data especificada não está disponível no calendário da localização atual", function () {
	var translation;
	before(function (done) {
		errorToEnglish("A data especificada não está disponível no calendário da localização atual", function (err, _translation) {
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
