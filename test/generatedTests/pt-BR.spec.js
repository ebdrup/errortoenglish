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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected", function () {
		expect(translation, translation).to.match(/String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected", function () {
		expect(translation, translation).to.match(/String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
