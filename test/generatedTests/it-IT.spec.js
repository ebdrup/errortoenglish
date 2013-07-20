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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
	});
});
describe("translating it-IT string: Overflow", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Overflow", function (err, _translation) {
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
	});
});
describe("translating it-IT string: Infinity", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Infinity", function (err, _translation) {
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
describe("translating it-IT string: -Infinity", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Infinity", function (err, _translation) {
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
