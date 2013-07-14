var errorToEnglish = require("../../lib/errortoenglish");
describe("translating it-IT string: Chiamata di routine o argomento non validi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Chiamata di routine o argomento non validi", function (err, _translation) {
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
describe("translating it-IT string: Memoria esaurita", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Memoria esaurita", function (err, _translation) {
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
describe("translating it-IT string: Indice non incluso nell'intervallo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Indice non incluso nell'intervallo", function (err, _translation) {
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
describe("translating it-IT string: Questa matrice è fissa o temporaneamente bloccata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Questa matrice è fissa o temporaneamente bloccata", function (err, _translation) {
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
describe("translating it-IT string: Divisione per zero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Divisione per zero", function (err, _translation) {
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
describe("translating it-IT string: Tipo non corrispondente", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tipo non corrispondente", function (err, _translation) {
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
describe("translating it-IT string: Spazio stringa esaurito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Spazio stringa esaurito", function (err, _translation) {
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
describe("translating it-IT string: Impossibile eseguire l'operazione richiesta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile eseguire l'operazione richiesta", function (err, _translation) {
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
describe("translating it-IT string: Spazio dello stack esaurito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Spazio dello stack esaurito", function (err, _translation) {
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
describe("translating it-IT string: Sub o Function non definita", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Sub o Function non definita", function (err, _translation) {
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
describe("translating it-IT string: Errore di caricamento DLL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di caricamento DLL", function (err, _translation) {
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
describe("translating it-IT string: Errore interno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore interno", function (err, _translation) {
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
describe("translating it-IT string: Nome o numero di file non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nome o numero di file non valido", function (err, _translation) {
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
describe("translating it-IT string: Impossibile trovare il file", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile trovare il file", function (err, _translation) {
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
describe("translating it-IT string: Modalità file non valida", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Modalità file non valida", function (err, _translation) {
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
describe("translating it-IT string: File già aperto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("File già aperto", function (err, _translation) {
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
describe("translating it-IT string: Errore di I/O periferica", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di I/O periferica", function (err, _translation) {
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
describe("translating it-IT string: File già esistente", function () {
    var translation;
    before(function (done) {
        errorToEnglish("File già esistente", function (err, _translation) {
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
describe("translating it-IT string: Disco pieno", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Disco pieno", function (err, _translation) {
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
describe("translating it-IT string: Input oltre la fine del file", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Input oltre la fine del file", function (err, _translation) {
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
describe("translating it-IT string: Troppi file", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Troppi file", function (err, _translation) {
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
describe("translating it-IT string: Periferica non disponibile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Periferica non disponibile", function (err, _translation) {
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
describe("translating it-IT string: Autorizzazione negata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Autorizzazione negata", function (err, _translation) {
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
describe("translating it-IT string: Disco non pronto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Disco non pronto", function (err, _translation) {
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
describe("translating it-IT string: Impossibile rinominare con unità diversa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile rinominare con unità diversa", function (err, _translation) {
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
describe("translating it-IT string: Errore di accesso al percorso/file", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di accesso al percorso/file", function (err, _translation) {
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
describe("translating it-IT string: Impossibile trovare il percorso", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile trovare il percorso", function (err, _translation) {
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
describe("translating it-IT string: Variabile oggetto o variabile del blocco With non impostata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Variabile oggetto o variabile del blocco With non impostata", function (err, _translation) {
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
describe("translating it-IT string: Ciclo For non inizializzato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ciclo For non inizializzato", function (err, _translation) {
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
describe("translating it-IT string: Utilizzo non valido di Null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Utilizzo non valido di Null", function (err, _translation) {
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
describe("translating it-IT string: Impossibile creare il file temporaneo necessario", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile creare il file temporaneo necessario", function (err, _translation) {
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
describe("translating it-IT string: Necessario oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Necessario oggetto", function (err, _translation) {
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
describe("translating it-IT string: Il server di automazione non può creare l'oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Il server di automazione non può creare l'oggetto", function (err, _translation) {
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
describe("translating it-IT string: La classe non supporta l'automazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La classe non supporta l'automazione", function (err, _translation) {
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
describe("translating it-IT string: Impossibile trovare nome di file o nome di classe durante un'operazione di automazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile trovare nome di file o nome di classe durante un'operazione di automazione", function (err, _translation) {
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
describe("translating it-IT string: Proprietà o metodo non supportati dall'oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Proprietà o metodo non supportati dall'oggetto", function (err, _translation) {
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
describe("translating it-IT string: Errore di automazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di automazione", function (err, _translation) {
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
describe("translating it-IT string: Azione non valida per l'oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Azione non valida per l'oggetto", function (err, _translation) {
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
describe("translating it-IT string: L'oggetto non supporta argomenti predefiniti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'oggetto non supporta argomenti predefiniti", function (err, _translation) {
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
describe("translating it-IT string: L'oggetto non supporta le impostazioni internazionali correnti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'oggetto non supporta le impostazioni internazionali correnti", function (err, _translation) {
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
describe("translating it-IT string: Impossibile trovare l'argomento predefinito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile trovare l'argomento predefinito", function (err, _translation) {
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
describe("translating it-IT string: Argomento non facoltativo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argomento non facoltativo", function (err, _translation) {
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
describe("translating it-IT string: Numero errato di argomenti o assegnazione di proprietà non valida", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Numero errato di argomenti o assegnazione di proprietà non valida", function (err, _translation) {
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
describe("translating it-IT string: L'oggetto non è un insieme", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'oggetto non è un insieme", function (err, _translation) {
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
describe("translating it-IT string: Impossibile trovare nella DLL la funzione specificata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile trovare nella DLL la funzione specificata", function (err, _translation) {
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
describe("translating it-IT string: La variabile utilizza un tipo di automazione non supportato in JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La variabile utilizza un tipo di automazione non supportato in JavaScript", function (err, _translation) {
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
describe("translating it-IT string: Il computer server remoto non esiste o non è disponibile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Il computer server remoto non esiste o non è disponibile", function (err, _translation) {
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
describe("translating it-IT string: Impossibile assegnare alla variabile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile assegnare alla variabile", function (err, _translation) {
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
describe("translating it-IT string: Oggetto non sicuro per la creazione di script", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Oggetto non sicuro per la creazione di script", function (err, _translation) {
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
describe("translating it-IT string: Oggetto non sicuro per l'inizializzazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Oggetto non sicuro per l'inizializzazione", function (err, _translation) {
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
describe("translating it-IT string: Oggetto non sicuro per la creazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Oggetto non sicuro per la creazione", function (err, _translation) {
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
describe("translating it-IT string: Si è verificata un'eccezione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Si è verificata un'eccezione", function (err, _translation) {
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
describe("translating it-IT string: Memoria esaurita", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Memoria esaurita", function (err, _translation) {
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
describe("translating it-IT string: Errore di sintassi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di sintassi", function (err, _translation) {
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
describe("translating it-IT string: Previsto ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto ':'", function (err, _translation) {
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
describe("translating it-IT string: Previsto ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto ';'", function (err, _translation) {
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
describe("translating it-IT string: Previsto '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto '('", function (err, _translation) {
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
describe("translating it-IT string: Previsto ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto ')'", function (err, _translation) {
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
describe("translating it-IT string: Previsto ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto ']'", function (err, _translation) {
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
describe("translating it-IT string: Previsto '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto '{'", function (err, _translation) {
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
describe("translating it-IT string: Previsto '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto '}'", function (err, _translation) {
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
describe("translating it-IT string: Previsto identificatore", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto identificatore", function (err, _translation) {
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
describe("translating it-IT string: Previsto '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto '='", function (err, _translation) {
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
describe("translating it-IT string: Previsto '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto '/'", function (err, _translation) {
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
describe("translating it-IT string: Numero non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Numero non valido", function (err, _translation) {
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
describe("translating it-IT string: Carattere non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Carattere non valido", function (err, _translation) {
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
describe("translating it-IT string: Costante String senza terminazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Costante String senza terminazione", function (err, _translation) {
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
describe("translating it-IT string: Commento senza terminazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Commento senza terminazione", function (err, _translation) {
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
describe("translating it-IT string: Istruzione 'return' esterna alla funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Istruzione 'return' esterna alla funzione", function (err, _translation) {
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
describe("translating it-IT string: Impossibile utilizzare 'break' all'esterno di un ciclo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile utilizzare 'break' all'esterno di un ciclo", function (err, _translation) {
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
describe("translating it-IT string: Impossibile utilizzare 'continue' all'esterno di un ciclo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile utilizzare 'continue' all'esterno di un ciclo", function (err, _translation) {
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
describe("translating it-IT string: Prevista cifra esadecimale", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista cifra esadecimale", function (err, _translation) {
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
describe("translating it-IT string: Previsto 'while'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto 'while'", function (err, _translation) {
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
describe("translating it-IT string: Etichetta ridefinita", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Etichetta ridefinita", function (err, _translation) {
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
describe("translating it-IT string: Impossibile trovare l'etichetta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile trovare l'etichetta", function (err, _translation) {
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
describe("translating it-IT string: 'default' può apparire una volta sola in una istruzione 'switch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'default' può apparire una volta sola in una istruzione 'switch'", function (err, _translation) {
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
describe("translating it-IT string: Previsto identificatore, stringa o numero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto identificatore, stringa o numero", function (err, _translation) {
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
describe("translating it-IT string: Previsto '@end'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto '@end'", function (err, _translation) {
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
describe("translating it-IT string: Compilazione condizionale disattivata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Compilazione condizionale disattivata", function (err, _translation) {
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
describe("translating it-IT string: Prevista costante", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista costante", function (err, _translation) {
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
describe("translating it-IT string: Previsto '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto '@'", function (err, _translation) {
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
describe("translating it-IT string: Previsto 'catch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto 'catch'", function (err, _translation) {
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
describe("translating it-IT string: Previsto 'var'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto 'var'", function (err, _translation) {
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
describe("translating it-IT string: la parola chiave 'throw' deve essere seguita da un'espressione nella stessa riga di codice sorgente", function () {
    var translation;
    before(function (done) {
        errorToEnglish("la parola chiave 'throw' deve essere seguita da un'espressione nella stessa riga di codice sorgente", function (err, _translation) {
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
describe("translating it-IT string: le istruzioni 'with' non sono consentite in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("le istruzioni 'with' non sono consentite in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Nomi parametri formali duplicati non consentiti in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nomi parametri formali duplicati non consentiti in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Letterali numerici ottali e caratteri escape non consentiti in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Letterali numerici ottali e caratteri escape non consentiti in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Uso non valido di 'eval' in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uso non valido di 'eval' in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Uso non valido di 'arguments' in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uso non valido di 'arguments' in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Uso funzionalità di eliminazione nell'espressione non consentito in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uso funzionalità di eliminazione nell'espressione non consentito in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Più definizioni di una proprietà non consentite in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Più definizioni di una proprietà non consentite in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Nella modalità strict le dichiarazioni di funzioni non possono essere nidificate in un'istruzione o un blocco. Possono essere presenti solo nel livello superiore o direttamente nel corpo di una funzione.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Nella modalità strict le dichiarazioni di funzioni non possono essere nidificate in un'istruzione o un blocco. Possono essere presenti solo nel livello superiore o direttamente nel corpo di una funzione.", function (err, _translation) {
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
describe("translating it-IT string: Una parola chiave non può essere utilizzata come identificativo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Una parola chiave non può essere utilizzata come identificativo", function (err, _translation) {
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
describe("translating it-IT string: Una parola riservata per il futuro non può essere utilizzata come identificativo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Una parola riservata per il futuro non può essere utilizzata come identificativo", function (err, _translation) {
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
describe("translating it-IT string: Una parola riservata per il futuro non può essere utilizzata come identificativo. Il nome dell'identificativo è riservato in modalità strict.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Una parola riservata per il futuro non può essere utilizzata come identificativo. Il nome dell'identificativo è riservato in modalità strict.", function (err, _translation) {
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
describe("translating it-IT string: Le funzioni setter devono avere un solo argomento", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Le funzioni setter devono avere un solo argomento", function (err, _translation) {
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
describe("translating it-IT string: Errore di compilazione di JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di compilazione di JavaScript", function (err, _translation) {
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
describe("translating it-IT string: Errore di run-time di JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di run-time di JavaScript", function (err, _translation) {
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
describe("translating it-IT string: Errore di run-time sconosciuto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di run-time sconosciuto", function (err, _translation) {
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
describe("translating it-IT string: Impossibile assegnare a 'this'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile assegnare a 'this'", function (err, _translation) {
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
describe("translating it-IT string: Previsto numero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto numero", function (err, _translation) {
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
describe("translating it-IT string: Prevista funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista funzione", function (err, _translation) {
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
describe("translating it-IT string: Impossibile assegnare al risultato di una funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile assegnare al risultato di una funzione", function (err, _translation) {
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
describe("translating it-IT string: Impossibile indicizzare l'oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile indicizzare l'oggetto", function (err, _translation) {
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
describe("translating it-IT string: Prevista stringa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista stringa", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto data", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto data", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Lato sinistro non valido nell'assegnazione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lato sinistro non valido nell'assegnazione", function (err, _translation) {
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
describe("translating it-IT string: Identificatore non definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Identificatore non definito", function (err, _translation) {
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
describe("translating it-IT string: Previsto valore Boolean", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto valore Boolean", function (err, _translation) {
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
describe("translating it-IT string: Impossibile eseguire il codice da uno script liberato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile eseguire il codice da uno script liberato", function (err, _translation) {
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
describe("translating it-IT string: Previsto membro oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto membro oggetto", function (err, _translation) {
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
describe("translating it-IT string: Prevista VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista VBArray", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto JavaScript", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto enumeratore", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto enumeratore", function (err, _translation) {
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
describe("translating it-IT string: Previsto un oggetto espressione regolare", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto un oggetto espressione regolare", function (err, _translation) {
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
describe("translating it-IT string: Errore di sintassi nell'espressione regolare", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore di sintassi nell'espressione regolare", function (err, _translation) {
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
describe("translating it-IT string: Quantificatore imprevisto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Quantificatore imprevisto", function (err, _translation) {
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
describe("translating it-IT string: Prevista ']' nell'espressione regolare", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista ']' nell'espressione regolare", function (err, _translation) {
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
describe("translating it-IT string: Prevista ')' nell'espressione regolare", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista ')' nell'espressione regolare", function (err, _translation) {
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
describe("translating it-IT string: Intervallo non valido nel set di caratteri", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Intervallo non valido nel set di caratteri", function (err, _translation) {
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
describe("translating it-IT string: Eccezione formulata con throw ma senza catch", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Eccezione formulata con throw ma senza catch", function (err, _translation) {
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
describe("translating it-IT string: Alla funzione non è associato nessun oggetto prototipo valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Alla funzione non è associato nessun oggetto prototipo valido", function (err, _translation) {
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
describe("translating it-IT string: L'URI da codificare contiene un carattere non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'URI da codificare contiene un carattere non valido", function (err, _translation) {
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
describe("translating it-IT string: La codifica utilizzata per l'URI da decodificare non è corretta", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La codifica utilizzata per l'URI da decodificare non è corretta", function (err, _translation) {
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
describe("translating it-IT string: Numero di cifre frazionarie non incluso nell'intervallo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Numero di cifre frazionarie non incluso nell'intervallo", function (err, _translation) {
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
describe("translating it-IT string: Approssimazione non inclusa nell'intervallo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Approssimazione non inclusa nell'intervallo", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto Array o arguments", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto Array o arguments", function (err, _translation) {
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
describe("translating it-IT string: La lunghezza della matrice deve essere un intero positivo finito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La lunghezza della matrice deve essere un intero positivo finito", function (err, _translation) {
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
describe("translating it-IT string: Alla lunghezza della matrice deve essere assegnato un numero positivo finito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Alla lunghezza della matrice deve essere assegnato un numero positivo finito", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto Array", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto Array", function (err, _translation) {
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
describe("translating it-IT string: Riferimento circolare nell'argomento value non supportato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Riferimento circolare nell'argomento value non supportato", function (err, _translation) {
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
describe("translating it-IT string: Argomento replacer non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argomento replacer non valido", function (err, _translation) {
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
describe("translating it-IT string: Elenco argomenti troppo esteso per essere applicato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Elenco argomenti troppo esteso per essere applicato", function (err, _translation) {
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
describe("translating it-IT string: Ridichiarazione proprietà const", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ridichiarazione proprietà const", function (err, _translation) {
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
describe("translating it-IT string: Membro oggetto non configurabile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Membro oggetto non configurabile", function (err, _translation) {
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
describe("translating it-IT string: Variabile non definita in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Variabile non definita in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Accesso proprietà 'caller' non consentito in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Accesso proprietà 'caller' non consentito in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Accesso proprietà 'callee' non consentito in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Accesso proprietà 'callee' non consentito in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Assegnazione a proprietà di sola lettura non consentita in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Assegnazione a proprietà di sola lettura non consentita in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Impossibile creare una proprietà per un oggetto non estensibile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile creare una proprietà per un oggetto non estensibile", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Prevista funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista funzione", function (err, _translation) {
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
describe("translating it-IT string: Prevista funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista funzione", function (err, _translation) {
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
describe("translating it-IT string: La proprietà non può avere sia funzioni di accesso sia un valore", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La proprietà non può avere sia funzioni di accesso sia un valore", function (err, _translation) {
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
describe("translating it-IT string: 'this' è nullo o non definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' è nullo o non definito", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Prevista funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista funzione", function (err, _translation) {
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
describe("translating it-IT string: Prevista stringa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista stringa", function (err, _translation) {
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
describe("translating it-IT string: Previsto valore booleano", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto valore booleano", function (err, _translation) {
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
describe("translating it-IT string: Data prevista", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Data prevista", function (err, _translation) {
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
describe("translating it-IT string: Previsto numero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto numero", function (err, _translation) {
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
describe("translating it-IT string: Previsto VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto VBArray", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto JavaScript", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto enumeratore", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto enumeratore", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto RegExp", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto RegExp", function (err, _translation) {
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
describe("translating it-IT string: Argomento funzione non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argomento funzione non valido", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto JavaScript", function (err, _translation) {
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
describe("translating it-IT string: Prevista funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Prevista funzione", function (err, _translation) {
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
describe("translating it-IT string: Previsto VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto VBArray", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Proprietà 'length' non valida", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Proprietà 'length' non valida", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto array o argomenti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto array o argomenti", function (err, _translation) {
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
describe("translating it-IT string: Operando non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Operando non valido", function (err, _translation) {
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
describe("translating it-IT string: Operando non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Operando non valido", function (err, _translation) {
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
describe("translating it-IT string: Descrittore proprietà non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Descrittore proprietà non valido", function (err, _translation) {
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
describe("translating it-IT string: Impossibile definire la proprietà: l'oggetto non è estendibile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile definire la proprietà: l'oggetto non è estendibile", function (err, _translation) {
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
describe("translating it-IT string: Impossibile ridefinire una proprietà non configurabile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile ridefinire una proprietà non configurabile", function (err, _translation) {
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
describe("translating it-IT string: Impossibile modificare una proprietà a cui non si può accedere in scrittura", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile modificare una proprietà a cui non si può accedere in scrittura", function (err, _translation) {
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
describe("translating it-IT string: Impossibile modificare la proprietà: 'length' non è accessibile in scrittura", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile modificare la proprietà: 'length' non è accessibile in scrittura", function (err, _translation) {
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
describe("translating it-IT string: Impossibile definire la proprietà", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile definire la proprietà", function (err, _translation) {
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
describe("translating it-IT string: L'argomento del costruttore della matrice tipizzata non è valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'argomento del costruttore della matrice tipizzata non è valido", function (err, _translation) {
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
describe("translating it-IT string: 'this' non è un oggetto di matrice tipizzata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' non è un oggetto di matrice tipizzata", function (err, _translation) {
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
describe("translating it-IT string: Offset/lunghezza non valida per la creazione di una matrice tipizzata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Offset/lunghezza non valida per la creazione di una matrice tipizzata", function (err, _translation) {
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
describe("translating it-IT string: Valore inizio/fine non valido nel metodo della matrice secondaria della matrice tipizzata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Valore inizio/fine non valido nel metodo della matrice secondaria della matrice tipizzata", function (err, _translation) {
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
describe("translating it-IT string: Tipo di origine non valido nel set di matrici tipizzate", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tipo di origine non valido nel set di matrici tipizzate", function (err, _translation) {
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
describe("translating it-IT string: 'this' non è un oggetto DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' non è un oggetto DataView", function (err, _translation) {
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
describe("translating it-IT string: Argomenti non validi in DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argomenti non validi in DataView", function (err, _translation) {
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
describe("translating it-IT string: L'accesso all'operazione DataView supera la lunghezza del buffer specificato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'accesso all'operazione DataView supera la lunghezza del buffer specificato", function (err, _translation) {
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
describe("translating it-IT string: Argomenti non validi in DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Argomenti non validi in DataView", function (err, _translation) {
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
describe("translating it-IT string: firma di funzione non valida", function () {
    var translation;
    before(function (done) {
        errorToEnglish("firma di funzione non valida", function (err, _translation) {
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
describe("translating it-IT string: firma di proprietà non valida", function () {
    var translation;
    before(function (done) {
        errorToEnglish("firma di proprietà non valida", function (err, _translation) {
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
describe("translating it-IT string: tipo di parametro di input non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("tipo di parametro di input non valido", function (err, _translation) {
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
describe("translating it-IT string: parametro di input non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("parametro di input non valido", function (err, _translation) {
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
describe("translating it-IT string: In modalità strict non è consentito accedere alla proprietà 'arguments' di una funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("In modalità strict non è consentito accedere alla proprietà 'arguments' di una funzione", function (err, _translation) {
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
describe("translating it-IT string: Previsto oggetto Inspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto oggetto Inspectable", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire l'argomento nel tipo 'char'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire l'argomento nel tipo 'char'", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire l'argomento nel tipo 'GUID'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire l'argomento nel tipo 'GUID'", function (err, _translation) {
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
describe("translating it-IT string: Previsto IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Previsto IInspectable", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire l'oggetto in struct: proprietà prevista dell'oggetto mancante", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire l'oggetto in struct: proprietà prevista dell'oggetto mancante", function (err, _translation) {
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
describe("translating it-IT string: Tipo sconosciuto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tipo sconosciuto", function (err, _translation) {
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
describe("translating it-IT string: Funzione chiamata con troppo pochi argomenti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Funzione chiamata con troppo pochi argomenti", function (err, _translation) {
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
describe("translating it-IT string: Tipo non costruibile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tipo non costruibile", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire il valore in PropertyValue. Tipo non supportato da PropertyValue", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire il valore in PropertyValue. Tipo non supportato da PropertyValue", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire il valore in IInspectable. Tipo non supportato da IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire il valore in IInspectable. Tipo non supportato da IInspectable", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire la data in Windows.Foundation.DateTime. Valore non compreso nell'intervallo valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire la data in Windows.Foundation.DateTime. Valore non compreso nell'intervallo valido", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire il valore in Windows.Foundation.TimeSpan. Valore non compreso nell'intervallo valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire il valore in Windows.Foundation.TimeSpan. Valore non compreso nell'intervallo valido", function (err, _translation) {
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
describe("translating it-IT string: Accesso non valido all'oggetto Inspectable già rilasciato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Accesso non valido all'oggetto Inspectable già rilasciato", function (err, _translation) {
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
describe("translating it-IT string: Impossibile rilasciare l'oggetto Inspectable già rilasciato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile rilasciare l'oggetto Inspectable già rilasciato", function (err, _translation) {
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
describe("translating it-IT string: 'this' non è del tipo previsto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' non è del tipo previsto", function (err, _translation) {
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
describe("translating it-IT string: Specificate lunghezza e dimensioni non valide per l'array", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Specificate lunghezza e dimensioni non valide per l'array", function (err, _translation) {
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
describe("translating it-IT string: Errore imprevisto durante il recupero di informazioni sui metadati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Errore imprevisto durante il recupero di informazioni sui metadati", function (err, _translation) {
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
describe("translating it-IT string: Lo stato è 'error', ma getResults non ha restituito alcun errore", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Lo stato è 'error', ma getResults non ha restituito alcun errore", function (err, _translation) {
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
describe("translating it-IT string: Passato parametro status non valido o mancante al gestore completato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Passato parametro status non valido o mancante al gestore completato", function (err, _translation) {
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
describe("translating it-IT string: Passato parametro sender non valido o mancante al gestore completato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Passato parametro sender non valido o mancante al gestore completato", function (err, _translation) {
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
describe("translating it-IT string: L'oggetto non supporta la proprietà o il metodo 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'oggetto non supporta la proprietà o il metodo 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating it-IT string: L'argomento per la funzione 'MyDynamicTestString' non è facoltativo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'argomento per la funzione 'MyDynamicTestString' non è facoltativo", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è un numero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è un numero", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è una funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è una funzione", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è un oggetto indicizzabile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è un oggetto indicizzabile", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è una stringa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è una stringa", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è un oggetto data", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è un oggetto data", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' è nullo o non è un oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' è nullo o non è un oggetto", function (err, _translation) {
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
describe("translating it-IT string: Impossibile assegnare a 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile assegnare a 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è definito", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è un valore booleano", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è un valore booleano", function (err, _translation) {
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
describe("translating it-IT string: Impossibile eliminare 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile eliminare 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è una VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è una VBArray", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è un oggetto JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è un oggetto JavaScript", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è un oggetto enumeratore", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è un oggetto enumeratore", function (err, _translation) {
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
describe("translating it-IT string: 'MyDynamicTestString' non è un oggetto espressione regolare", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'MyDynamicTestString' non è un oggetto espressione regolare", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString non è un oggetto Array o arguments", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString non è un oggetto Array o arguments", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString non è un oggetto Array", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString non è un oggetto Array", function (err, _translation) {
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
describe("translating it-IT string: Impossibile impostare l'attributo 'MyDynamicTestString' del descrittore di proprietà su 'true' per questo oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile impostare l'attributo 'MyDynamicTestString' del descrittore di proprietà su 'true' per questo oggetto", function (err, _translation) {
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
describe("translating it-IT string: Impossibile impostare l'attributo 'MyDynamicTestString' del descrittore di proprietà su 'false' per questo oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile impostare l'attributo 'MyDynamicTestString' del descrittore di proprietà su 'false' per questo oggetto", function (err, _translation) {
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
describe("translating it-IT string: Ridichiarazione costante 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ridichiarazione costante 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating it-IT string: Uso funzionalità di eliminazione in 'MyDynamicTestString' non è consentito in modalità strict", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Uso funzionalità di eliminazione in 'MyDynamicTestString' non è consentito in modalità strict", function (err, _translation) {
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
describe("translating it-IT string: Impossibile impostare la proprietà 'MyDynamicTestString' di un riferimento nullo o non definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile impostare la proprietà 'MyDynamicTestString' di un riferimento nullo o non definito", function (err, _translation) {
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
describe("translating it-IT string: Impossibile recuperare la proprietà 'MyDynamicTestString' di un riferimento nullo o non definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile recuperare la proprietà 'MyDynamicTestString' di un riferimento nullo o non definito", function (err, _translation) {
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
describe("translating it-IT string: Impossibile eliminare la proprietà 'MyDynamicTestString' di un riferimento nullo o non definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile eliminare la proprietà 'MyDynamicTestString' di un riferimento nullo o non definito", function (err, _translation) {
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
describe("translating it-IT string: Impossibile accedere alla proprietà 'MyDynamicTestString': 'VarDate' non supporta le proprietà definite dall'utente", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile accedere alla proprietà 'MyDynamicTestString': 'VarDate' non supporta le proprietà definite dall'utente", function (err, _translation) {
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
describe("translating it-IT string: Il valore della proprietà 'MyDynamicTestString' non è un oggetto funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Il valore della proprietà 'MyDynamicTestString' non è un oggetto funzione", function (err, _translation) {
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
describe("translating it-IT string: Il valore della proprietà 'MyDynamicTestString' è nullo o non definito, non è un oggetto funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Il valore della proprietà 'MyDynamicTestString' è nullo o non definito, non è un oggetto funzione", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' è nullo o non definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' è nullo o non definito", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto funzione", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto stringa", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto stringa", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto booleano", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto booleano", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto data", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto data", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto numero", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto numero", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto VBArray", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto JavaScript", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto enumeratore", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto enumeratore", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto RegExp", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto RegExp", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: argomento non valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: argomento non valido", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'argomento non è un oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'argomento non è un oggetto", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'argomento non è un oggetto JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'argomento non è un oggetto JavaScript", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'argomento non è un oggetto funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'argomento non è un oggetto funzione", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'argomento non è un oggetto VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'argomento non è un oggetto VBArray", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'argomento è nullo o non definito", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'argomento è nullo o non definito", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'argomento non è un oggetto e non è nullo", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'argomento non è un oggetto e non è nullo", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'argomento non ha una proprietà 'length' valida", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'argomento non ha una proprietà 'length' valida", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: previsto oggetto Array o arguments", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: previsto oggetto Array o arguments", function (err, _translation) {
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
describe("translating it-IT string: Operando non valido per 'MyDynamicTestString': previsto oggetto", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Operando non valido per 'MyDynamicTestString': previsto oggetto", function (err, _translation) {
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
describe("translating it-IT string: Operando non valido per 'MyDynamicTestString': prevista funzione", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Operando non valido per 'MyDynamicTestString': prevista funzione", function (err, _translation) {
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
describe("translating it-IT string: Descrittore non valido per la proprietà 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Descrittore non valido per la proprietà 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating it-IT string: Impossibile definire la proprietà 'MyDynamicTestString': l'oggetto non è estendibile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile definire la proprietà 'MyDynamicTestString': l'oggetto non è estendibile", function (err, _translation) {
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
describe("translating it-IT string: Impossibile ridefinire la proprietà 'MyDynamicTestString' non configurabile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile ridefinire la proprietà 'MyDynamicTestString' non configurabile", function (err, _translation) {
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
describe("translating it-IT string: Impossibile modificare la proprietà 'MyDynamicTestString' a cui non si può accedere in scrittura", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile modificare la proprietà 'MyDynamicTestString' a cui non si può accedere in scrittura", function (err, _translation) {
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
describe("translating it-IT string: Impossibile modificare la proprietà 'MyDynamicTestString': 'length' non è accessibile in scrittura", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile modificare la proprietà 'MyDynamicTestString': 'length' non è accessibile in scrittura", function (err, _translation) {
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
describe("translating it-IT string: Impossibile definire la proprietà 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile definire la proprietà 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating it-IT string: L'argomento obbligatorio MyDynamicTestString nel metodo DataView non è specificato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'argomento obbligatorio MyDynamicTestString nel metodo DataView non è specificato", function (err, _translation) {
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
describe("translating it-IT string: L'argomento MyDynamicTestString del costruttore di DataView non è valido", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'argomento MyDynamicTestString del costruttore di DataView non è valido", function (err, _translation) {
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
describe("translating it-IT string: La funzione 'MyDynamicTestString' ha una firma non valida e non può essere chiamata", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La funzione 'MyDynamicTestString' ha una firma non valida e non può essere chiamata", function (err, _translation) {
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
describe("translating it-IT string: La proprietà 'MyDynamicTestString' ha una firma non valida ed è impossibile accedervi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La proprietà 'MyDynamicTestString' ha una firma non valida ed è impossibile accedervi", function (err, _translation) {
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
describe("translating it-IT string: Runtimeclass MyDynamicTestString con l'interfaccia predefinita Windows.Foundation.IPropertyValue non è supportato come tipo di parametro di input", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Runtimeclass MyDynamicTestString con l'interfaccia predefinita Windows.Foundation.IPropertyValue non è supportato come tipo di parametro di input", function (err, _translation) {
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
describe("translating it-IT string: L'oggetto con interfaccia Windows.Foundation.IPropertyValue con nome runtimeclass MyDynamicTestString non è supportato come parametro di output", function () {
    var translation;
    before(function (done) {
        errorToEnglish("L'oggetto con interfaccia Windows.Foundation.IPropertyValue con nome runtimeclass MyDynamicTestString non è supportato come parametro di output", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: 'this' non è un oggetto Inspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' non è un oggetto Inspectable", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: impossibile convertire l'argomento nel tipo 'char'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: impossibile convertire l'argomento nel tipo 'char'", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: impossibile convertire l'argomento nel tipo 'GUID'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: impossibile convertire l'argomento nel tipo 'GUID'", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: impossibile convertire il valore restituito in IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: impossibile convertire il valore restituito in IInspectable", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire l'oggetto in struct: proprietà prevista dell'oggetto 'MyDynamicTestString' mancante", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire l'oggetto in struct: proprietà prevista dell'oggetto 'MyDynamicTestString' mancante", function (err, _translation) {
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
describe("translating it-IT string: Tipo 'MyDynamicTestString' non trovato", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Tipo 'MyDynamicTestString' non trovato", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: funzione chiamata con troppo pochi argomenti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: funzione chiamata con troppo pochi argomenti", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: tipo non costruibile", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: tipo non costruibile", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire il valore in PropertyValue. MyDynamicTestString non supportato da PropertyValue", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire il valore in PropertyValue. MyDynamicTestString non supportato da PropertyValue", function (err, _translation) {
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
describe("translating it-IT string: Impossibile convertire il valore in IInspectable. MyDynamicTestString non supportato da IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Impossibile convertire il valore in IInspectable. MyDynamicTestString non supportato da IInspectable", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: l'oggetto Inspectable 'this' è rilasciato e non è possibile accedervi", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: l'oggetto Inspectable 'this' è rilasciato e non è possibile accedervi", function (err, _translation) {
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
describe("translating it-IT string: 'this' non è del tipo previsto: MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' non è del tipo previsto: MyDynamicTestString", function (err, _translation) {
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
describe("translating it-IT string: MyDynamicTestString: errore imprevisto durante il recupero di informazioni sui metadati", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: errore imprevisto durante il recupero di informazioni sui metadati", function (err, _translation) {
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
describe("translating it-IT string: La data specificata non è disponibile nel calendario delle impostazioni internazionali correnti", function () {
    var translation;
    before(function (done) {
        errorToEnglish("La data specificata non è disponibile nel calendario delle impostazioni internazionali correnti", function (err, _translation) {
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
