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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
