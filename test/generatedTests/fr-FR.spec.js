var errorToEnglish = require("../../lib/errortoenglish");
describe("translating fr-FR string: Argument ou appel de procédure incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument ou appel de procédure incorrect", function (err, _translation) {
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
describe("translating fr-FR string: Dépassement de capacité", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Dépassement de capacité", function (err, _translation) {
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
describe("translating fr-FR string: Mémoire insuffisante", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Mémoire insuffisante", function (err, _translation) {
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
describe("translating fr-FR string: Indice en dehors de la plage", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Indice en dehors de la plage", function (err, _translation) {
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
describe("translating fr-FR string: Tableau fixe ou temporairement verrouillé", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Tableau fixe ou temporairement verrouillé", function (err, _translation) {
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
describe("translating fr-FR string: Division par zéro", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Division par zéro", function (err, _translation) {
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
describe("translating fr-FR string: Type incompatible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type incompatible", function (err, _translation) {
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
describe("translating fr-FR string: Espace de chaîne insuffisant", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Espace de chaîne insuffisant", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d'exécuter l'opération requise", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d'exécuter l'opération requise", function (err, _translation) {
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
describe("translating fr-FR string: Espace pile insuffisant", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Espace pile insuffisant", function (err, _translation) {
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
describe("translating fr-FR string: Sub ou Function non définie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub ou Function non définie", function (err, _translation) {
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
describe("translating fr-FR string: Erreur de chargement de la DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur de chargement de la DLL", function (err, _translation) {
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
describe("translating fr-FR string: Erreur interne", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur interne", function (err, _translation) {
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
describe("translating fr-FR string: Nom ou numéro de fichier incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nom ou numéro de fichier incorrect", function (err, _translation) {
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
describe("translating fr-FR string: Fichier introuvable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fichier introuvable", function (err, _translation) {
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
describe("translating fr-FR string: Mode fichier incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Mode fichier incorrect", function (err, _translation) {
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
describe("translating fr-FR string: Fichier déjà ouvert", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fichier déjà ouvert", function (err, _translation) {
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
describe("translating fr-FR string: Erreur d'entrée/sortie de périphérique", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur d'entrée/sortie de périphérique", function (err, _translation) {
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
describe("translating fr-FR string: Ce fichier existe déjà", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Ce fichier existe déjà", function (err, _translation) {
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
describe("translating fr-FR string: Disque plein", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disque plein", function (err, _translation) {
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
describe("translating fr-FR string: L'entrée dépasse la fin du fichier", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L'entrée dépasse la fin du fichier", function (err, _translation) {
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
describe("translating fr-FR string: Trop de fichiers", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Trop de fichiers", function (err, _translation) {
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
describe("translating fr-FR string: Périphérique non disponible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Périphérique non disponible", function (err, _translation) {
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
describe("translating fr-FR string: Permission refusée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Permission refusée", function (err, _translation) {
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
describe("translating fr-FR string: Disque non prêt", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Disque non prêt", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d'attribuer un nom de lecteur différent", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d'attribuer un nom de lecteur différent", function (err, _translation) {
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
describe("translating fr-FR string: Chemin d'accès erroné", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chemin d'accès erroné", function (err, _translation) {
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
describe("translating fr-FR string: Chemin d'accès introuvable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chemin d'accès introuvable", function (err, _translation) {
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
describe("translating fr-FR string: Variable objet ou variable de bloc With non définie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variable objet ou variable de bloc With non définie", function (err, _translation) {
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
describe("translating fr-FR string: Boucle For non initialisée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boucle For non initialisée", function (err, _translation) {
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
describe("translating fr-FR string: Utilisation non autorisée de Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Utilisation non autorisée de Null", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de créer le fichier temporaire nécessaire", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de créer le fichier temporaire nécessaire", function (err, _translation) {
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
describe("translating fr-FR string: Objet requis", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet requis", function (err, _translation) {
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
describe("translating fr-FR string: Un composant ActiveX ne peut pas créer un objet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Un composant ActiveX ne peut pas créer un objet", function (err, _translation) {
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
describe("translating fr-FR string: Cette classe ne gère pas Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cette classe ne gère pas Automation", function (err, _translation) {
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
describe("translating fr-FR string: Nom du fichier ou de la classe introuvable lors de l'opération Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nom du fichier ou de la classe introuvable lors de l'opération Automation", function (err, _translation) {
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
describe("translating fr-FR string: Cet objet ne gère pas cette propriété ou cette méthode", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cet objet ne gère pas cette propriété ou cette méthode", function (err, _translation) {
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
describe("translating fr-FR string: Erreur Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur Automation", function (err, _translation) {
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
describe("translating fr-FR string: Cet objet ne gère pas cette action", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cet objet ne gère pas cette action", function (err, _translation) {
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
describe("translating fr-FR string: Cet objet ne gère pas les arguments nommés", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cet objet ne gère pas les arguments nommés", function (err, _translation) {
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
describe("translating fr-FR string: Cet objet ne gère pas les paramètres régionaux en cours", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cet objet ne gère pas les paramètres régionaux en cours", function (err, _translation) {
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
describe("translating fr-FR string: Argument nommé introuvable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument nommé introuvable", function (err, _translation) {
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
describe("translating fr-FR string: Argument obligatoire", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument obligatoire", function (err, _translation) {
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
describe("translating fr-FR string: Nombre d'arguments ou affectation de propriété incorrects", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nombre d'arguments ou affectation de propriété incorrects", function (err, _translation) {
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
describe("translating fr-FR string: Cet objet n'est pas une collection", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cet objet n'est pas une collection", function (err, _translation) {
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
describe("translating fr-FR string: Fonction de DLL spécifiée introuvable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fonction de DLL spécifiée introuvable", function (err, _translation) {
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
describe("translating fr-FR string: Cette variable utilise un type Automation non géré par JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Cette variable utilise un type Automation non géré par JavaScript", function (err, _translation) {
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
describe("translating fr-FR string: Le serveur distant n'existe pas ou n'est pas disponible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Le serveur distant n'existe pas ou n'est pas disponible", function (err, _translation) {
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
describe("translating fr-FR string: Affectation à la variable impossible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Affectation à la variable impossible", function (err, _translation) {
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
describe("translating fr-FR string: Objet non sécurisé pour le script", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet non sécurisé pour le script", function (err, _translation) {
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
describe("translating fr-FR string: Objet non sécurisé pour l'initialisation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet non sécurisé pour l'initialisation", function (err, _translation) {
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
describe("translating fr-FR string: Objet non sécurisé pour la création", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet non sécurisé pour la création", function (err, _translation) {
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
describe("translating fr-FR string: Une exception est survenue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Une exception est survenue", function (err, _translation) {
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
describe("translating fr-FR string: Mémoire insuffisante", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Mémoire insuffisante", function (err, _translation) {
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
describe("translating fr-FR string: Erreur de syntaxe", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur de syntaxe", function (err, _translation) {
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
describe("translating fr-FR string: ':' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':' attendu", function (err, _translation) {
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
describe("translating fr-FR string: ';' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';' attendu", function (err, _translation) {
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
describe("translating fr-FR string: '(' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'(' attendu", function (err, _translation) {
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
describe("translating fr-FR string: ')' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' attendu", function (err, _translation) {
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
describe("translating fr-FR string: ']' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' attendu", function (err, _translation) {
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
describe("translating fr-FR string: '{' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{' attendu", function (err, _translation) {
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
describe("translating fr-FR string: '}' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}' attendu", function (err, _translation) {
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
describe("translating fr-FR string: Identificateur attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identificateur attendu", function (err, _translation) {
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
describe("translating fr-FR string: '=' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'=' attendu", function (err, _translation) {
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
describe("translating fr-FR string: '/' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/' attendu", function (err, _translation) {
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
describe("translating fr-FR string: Nombre incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nombre incorrect", function (err, _translation) {
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
describe("translating fr-FR string: Caractère incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caractère incorrect", function (err, _translation) {
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
describe("translating fr-FR string: Constante chaîne non terminée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constante chaîne non terminée", function (err, _translation) {
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
describe("translating fr-FR string: Commentaire non terminé", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Commentaire non terminé", function (err, _translation) {
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
describe("translating fr-FR string: Instruction 'return' en dehors d'une fonction", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Instruction 'return' en dehors d'une fonction", function (err, _translation) {
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
describe("translating fr-FR string: Un 'break' doit se trouver à l'intérieur d'une boucle", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Un 'break' doit se trouver à l'intérieur d'une boucle", function (err, _translation) {
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
describe("translating fr-FR string: Un 'continue' doit se trouver à l'intérieur d'une boucle", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Un 'continue' doit se trouver à l'intérieur d'une boucle", function (err, _translation) {
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
describe("translating fr-FR string: Caractère hexadécimal attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Caractère hexadécimal attendu", function (err, _translation) {
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
describe("translating fr-FR string: 'while' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while' attendu", function (err, _translation) {
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
describe("translating fr-FR string: Étiquette redéfinie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Étiquette redéfinie", function (err, _translation) {
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
describe("translating fr-FR string: Étiquette introuvable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Étiquette introuvable", function (err, _translation) {
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
describe("translating fr-FR string: 'default' ne peut apparaître qu'une fois dans une instruction 'switch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' ne peut apparaître qu'une fois dans une instruction 'switch'", function (err, _translation) {
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
describe("translating fr-FR string: Identificateur, chaîne ou nombre attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identificateur, chaîne ou nombre attendu", function (err, _translation) {
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
describe("translating fr-FR string: '@end' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' attendu", function (err, _translation) {
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
describe("translating fr-FR string: La compilation conditionnelle est désactivée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La compilation conditionnelle est désactivée", function (err, _translation) {
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
describe("translating fr-FR string: Constante attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Constante attendue", function (err, _translation) {
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
describe("translating fr-FR string: '@' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' attendu", function (err, _translation) {
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
describe("translating fr-FR string: 'catch' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch' attendu", function (err, _translation) {
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
describe("translating fr-FR string: 'var' attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var' attendu", function (err, _translation) {
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
describe("translating fr-FR string: « throw » doit être suivi par une expression sur la même ligne source", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« throw » doit être suivi par une expression sur la même ligne source", function (err, _translation) {
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
describe("translating fr-FR string: les instructions « with » ne sont pas autorisées en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("les instructions « with » ne sont pas autorisées en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: La duplication de noms de paramètre formels n’est pas autorisée en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La duplication de noms de paramètre formels n’est pas autorisée en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Les littéraux numériques octaux et les caractères d’échappement ne sont pas autorisés en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Les littéraux numériques octaux et les caractères d’échappement ne sont pas autorisés en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Utilisation non valide de l’« évaluation » en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Utilisation non valide de l’« évaluation » en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Utilisation non valide d’« arguments » en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Utilisation non valide d’« arguments » en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Appel de la fonction delete non autorisé en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Appel de la fonction delete non autorisé en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Plusieurs définitions d’une propriété ne sont pas autorisées en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Plusieurs définitions d’une propriété ne sont pas autorisées en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: En mode strict, les déclarations de fonction ne peuvent pas être imbriquées dans une instruction ou un bloc. Elles peuvent uniquement apparaître au niveau supérieur ou directement dans le corps d’une fonction.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("En mode strict, les déclarations de fonction ne peuvent pas être imbriquées dans une instruction ou un bloc. Elles peuvent uniquement apparaître au niveau supérieur ou directement dans le corps d’une fonction.", function (err, _translation) {
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
describe("translating fr-FR string: L’utilisation d’un mot clé pour un identificateur n’est pas valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’utilisation d’un mot clé pour un identificateur n’est pas valide", function (err, _translation) {
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
describe("translating fr-FR string: L’utilisation d’un mot réservé futur pour un identificateur n’est pas valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’utilisation d’un mot réservé futur pour un identificateur n’est pas valide", function (err, _translation) {
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
describe("translating fr-FR string: L’utilisation d’un mot réservé futur pour un identificateur n’est pas valide. Le nom d’identificateur est réservé en mode strict.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’utilisation d’un mot réservé futur pour un identificateur n’est pas valide. Le nom d’identificateur est réservé en mode strict.", function (err, _translation) {
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
describe("translating fr-FR string: Les fonctions setter doivent avoir un argument", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Les fonctions setter doivent avoir un argument", function (err, _translation) {
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
describe("translating fr-FR string: Erreur de compilation JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur de compilation JavaScript", function (err, _translation) {
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
describe("translating fr-FR string: Erreur d’exécution JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur d’exécution JavaScript", function (err, _translation) {
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
describe("translating fr-FR string: Erreur d'exécution inconnue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur d'exécution inconnue", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d'affecter à 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d'affecter à 'this'", function (err, _translation) {
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
describe("translating fr-FR string: Nombre attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nombre attendu", function (err, _translation) {
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
describe("translating fr-FR string: Fonction attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fonction attendue", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d'affecter à un résultat de fonction", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d'affecter à un résultat de fonction", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d'indexer l'objet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d'indexer l'objet", function (err, _translation) {
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
describe("translating fr-FR string: Chaîne attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chaîne attendue", function (err, _translation) {
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
describe("translating fr-FR string: Objet date attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet date attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Côté gauche non valide dans l’affectation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Côté gauche non valide dans l’affectation", function (err, _translation) {
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
describe("translating fr-FR string: Identificateur non défini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Identificateur non défini", function (err, _translation) {
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
describe("translating fr-FR string: Booléen attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Booléen attendu", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d'exécuter le code à partir d'un script libéré", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d'exécuter le code à partir d'un script libéré", function (err, _translation) {
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
describe("translating fr-FR string: Membre d'objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Membre d'objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: VBArray attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet JavaScript attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet JavaScript attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet d'énumération attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet d'énumération attendu", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected/g);
	});
});
describe("translating fr-FR string: Objet d'expression régulière attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet d'expression régulière attendu", function (err, _translation) {
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
describe("translating fr-FR string: Erreur de syntaxe dans l'expression régulière", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Erreur de syntaxe dans l'expression régulière", function (err, _translation) {
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
describe("translating fr-FR string: Quantificateur inattendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Quantificateur inattendu", function (err, _translation) {
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
describe("translating fr-FR string: ']' attendu dans l'expression régulière", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' attendu dans l'expression régulière", function (err, _translation) {
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
describe("translating fr-FR string: ')' attendu dans l'expression régulière", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' attendu dans l'expression régulière", function (err, _translation) {
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
describe("translating fr-FR string: Plage incorrecte dans le jeu de caractères", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Plage incorrecte dans le jeu de caractères", function (err, _translation) {
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
describe("translating fr-FR string: Exception levée mais non décelée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Exception levée mais non décelée", function (err, _translation) {
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
describe("translating fr-FR string: La fonction ne possède pas d'objet prototype valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La fonction ne possède pas d'objet prototype valide", function (err, _translation) {
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
describe("translating fr-FR string: L'URI à coder contient un caractère incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L'URI à coder contient un caractère incorrect", function (err, _translation) {
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
describe("translating fr-FR string: L'URI à décoder contient un caractère incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L'URI à décoder contient un caractère incorrect", function (err, _translation) {
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
describe("translating fr-FR string: Le nombre de fractions est en dehors de la plage", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Le nombre de fractions est en dehors de la plage", function (err, _translation) {
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
describe("translating fr-FR string: La précision est en dehors de la plage", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La précision est en dehors de la plage", function (err, _translation) {
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
describe("translating fr-FR string: Objet Array ou Arguments attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet Array ou Arguments attendu", function (err, _translation) {
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
describe("translating fr-FR string: La longueur du tableau doit être un entier positif fini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La longueur du tableau doit être un entier positif fini", function (err, _translation) {
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
describe("translating fr-FR string: Un nombre positif fini doit être attribué à la longueur du tableau", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Un nombre positif fini doit être attribué à la longueur du tableau", function (err, _translation) {
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
describe("translating fr-FR string: Objet Array attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet Array attendu", function (err, _translation) {
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
describe("translating fr-FR string: Référence circulaire dans l'argument de valeur non prise en charge", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Référence circulaire dans l'argument de valeur non prise en charge", function (err, _translation) {
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
describe("translating fr-FR string: Argument de remplacement incorrect", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument de remplacement incorrect", function (err, _translation) {
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
describe("translating fr-FR string: Liste d’arguments trop importante pour être appliquée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Liste d’arguments trop importante pour être appliquée", function (err, _translation) {
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
describe("translating fr-FR string: Redéclaration d’une propriété const", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Redéclaration d’une propriété const", function (err, _translation) {
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
describe("translating fr-FR string: Membre d’objet non configurable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Membre d’objet non configurable", function (err, _translation) {
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
describe("translating fr-FR string: Variable non définie en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Variable non définie en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Accès à la propriété « caller » d’une fonction ou d’un objet arguments non autorisé en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accès à la propriété « caller » d’une fonction ou d’un objet arguments non autorisé en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Accès à la propriété « callee » d’un objet arguments non autorisé en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accès à la propriété « callee » d’un objet arguments non autorisé en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Affectation aux propriétés en lecture seule non autorisée en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Affectation aux propriétés en lecture seule non autorisée en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de créer une propriété pour un objet non extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de créer une propriété pour un objet non extensible", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Fonction attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fonction attendue", function (err, _translation) {
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
describe("translating fr-FR string: Fonction attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fonction attendue", function (err, _translation) {
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
describe("translating fr-FR string: Une propriété ne peut pas avoir des accesseurs et une valeur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Une propriété ne peut pas avoir des accesseurs et une valeur", function (err, _translation) {
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
describe("translating fr-FR string: 'this' est null ou non défini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' est null ou non défini", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Fonction attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fonction attendue", function (err, _translation) {
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
describe("translating fr-FR string: Chaîne attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Chaîne attendue", function (err, _translation) {
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
describe("translating fr-FR string: Booléen attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Booléen attendu", function (err, _translation) {
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
describe("translating fr-FR string: Date attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Date attendue", function (err, _translation) {
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
describe("translating fr-FR string: Nombre attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Nombre attendu", function (err, _translation) {
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
describe("translating fr-FR string: VBArray attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet JavaScript attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet JavaScript attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet d’énumération attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet d’énumération attendu", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected/g);
	});
});
describe("translating fr-FR string: Objet RegExp attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet RegExp attendu", function (err, _translation) {
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
describe("translating fr-FR string: Argument de fonction non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Argument de fonction non valide", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet JavaScript attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet JavaScript attendu", function (err, _translation) {
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
describe("translating fr-FR string: Fonction attendue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fonction attendue", function (err, _translation) {
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
describe("translating fr-FR string: VBArray attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Objet attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet attendu", function (err, _translation) {
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
describe("translating fr-FR string: Propriété de « longueur » non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Propriété de « longueur » non valide", function (err, _translation) {
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
describe("translating fr-FR string: Objet Array ou Arguments attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet Array ou Arguments attendu", function (err, _translation) {
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
describe("translating fr-FR string: Opérande non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Opérande non valide", function (err, _translation) {
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
describe("translating fr-FR string: Opérande non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Opérande non valide", function (err, _translation) {
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
describe("translating fr-FR string: Descripteur de propriété non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Descripteur de propriété non valide", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de définir une propriété : objet non extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de définir une propriété : objet non extensible", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de redéfinir une propriété non configurable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de redéfinir une propriété non configurable", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de modifier une propriété non accessible en écriture", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de modifier une propriété non accessible en écriture", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de modifier une propriété : « length » n’est pas accessible en écriture", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de modifier une propriété : « length » n’est pas accessible en écriture", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de définir une propriété", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de définir une propriété", function (err, _translation) {
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
describe("translating fr-FR string: L’argument du constructeur de tableau typé n’est pas valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’argument du constructeur de tableau typé n’est pas valide", function (err, _translation) {
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
describe("translating fr-FR string: « this » n’est pas un objet de tableau typé", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« this » n’est pas un objet de tableau typé", function (err, _translation) {
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
describe("translating fr-FR string: Décalage/longueur non valide lors de la création du tableau typé", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Décalage/longueur non valide lors de la création du tableau typé", function (err, _translation) {
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
describe("translating fr-FR string: Valeur de début/fin non valide dans la méthode sous-tableau du tableau typé", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Valeur de début/fin non valide dans la méthode sous-tableau du tableau typé", function (err, _translation) {
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
describe("translating fr-FR string: Source non valide dans l’ensemble de tableaux typés", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Source non valide dans l’ensemble de tableaux typés", function (err, _translation) {
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
describe("translating fr-FR string: « this » n’est pas un objet DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« this » n’est pas un objet DataView", function (err, _translation) {
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
describe("translating fr-FR string: Arguments non valides dans DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Arguments non valides dans DataView", function (err, _translation) {
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
describe("translating fr-FR string: Accès à l’opération DataView au-delà de la longueur de tampon spécifiée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accès à l’opération DataView au-delà de la longueur de tampon spécifiée", function (err, _translation) {
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
describe("translating fr-FR string: Arguments non valides dans DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Arguments non valides dans DataView", function (err, _translation) {
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
describe("translating fr-FR string: Signature de fonction non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Signature de fonction non valide", function (err, _translation) {
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
describe("translating fr-FR string: Signature de propriété non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Signature de propriété non valide", function (err, _translation) {
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
describe("translating fr-FR string: type de paramètre d’entrée non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("type de paramètre d’entrée non valide", function (err, _translation) {
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
describe("translating fr-FR string: paramètre de sortie non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("paramètre de sortie non valide", function (err, _translation) {
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
describe("translating fr-FR string: Accès à la propriété « arguments » d’une fonction non autorisé en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accès à la propriété « arguments » d’une fonction non autorisé en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Objet Inspectable attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Objet Inspectable attendu", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir l’argument en type « char »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir l’argument en type « char »", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir l’argument en type « GUID »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir l’argument en type « GUID »", function (err, _translation) {
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
describe("translating fr-FR string: IInspectable attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable attendu", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir l’objet en struct : propriété attendue manquante pour l’objet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir l’objet en struct : propriété attendue manquante pour l’objet", function (err, _translation) {
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
describe("translating fr-FR string: Type inconnu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type inconnu", function (err, _translation) {
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
describe("translating fr-FR string: Fonction appelée avec trop peu d’arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Fonction appelée avec trop peu d’arguments", function (err, _translation) {
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
describe("translating fr-FR string: Type non constructible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type non constructible", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir la valeur en PropertyValue : type non pris en charge par PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir la valeur en PropertyValue : type non pris en charge par PropertyValue", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir la valeur en IInspectable : type non pris en charge par IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir la valeur en IInspectable : type non pris en charge par IInspectable", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir Date en Windows.Foundation.DateTime : valeur située en dehors de la plage valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir Date en Windows.Foundation.DateTime : valeur située en dehors de la plage valide", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir la valeur en Windows.Foundation.TimeSpan : valeur située en dehors de la plage valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir la valeur en Windows.Foundation.TimeSpan : valeur située en dehors de la plage valide", function (err, _translation) {
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
describe("translating fr-FR string: Accès non valide à un objet Inspectable déjà libéré", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Accès non valide à un objet Inspectable déjà libéré", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de libérer un objet Inspectable déjà libéré", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de libérer un objet Inspectable déjà libéré", function (err, _translation) {
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
describe("translating fr-FR string: « this » n’est pas du type attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« this » n’est pas du type attendu", function (err, _translation) {
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
describe("translating fr-FR string: Longueur et taille non autorisées spécifiées pour le tableau", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Longueur et taille non autorisées spécifiées pour le tableau", function (err, _translation) {
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
describe("translating fr-FR string: Une défaillance inattendue s’est produite lors de la tentative d’obtention d’informations de métadonnées.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Une défaillance inattendue s’est produite lors de la tentative d’obtention d’informations de métadonnées.", function (err, _translation) {
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
describe("translating fr-FR string: L’état a la valeur Erreur, mais getResults n’a pas retourné d’erreur.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’état a la valeur Erreur, mais getResults n’a pas retourné d’erreur.", function (err, _translation) {
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
describe("translating fr-FR string: Paramètre d’état manquant ou non valide passé au gestionnaire completed", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Paramètre d’état manquant ou non valide passé au gestionnaire completed", function (err, _translation) {
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
describe("translating fr-FR string: Paramètre d’expéditeur manquant ou non valide passé au gestionnaire completed", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Paramètre d’expéditeur manquant ou non valide passé au gestionnaire completed", function (err, _translation) {
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
describe("translating fr-FR string: Infini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Infini", function (err, _translation) {
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
describe("translating fr-FR string: -Infini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-Infini", function (err, _translation) {
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
describe("translating fr-FR string: L’objet ne gère pas la propriété ou la méthode « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’objet ne gère pas la propriété ou la méthode « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: L’argument pour la fonction « MyDynamicTestString » n’est pas facultatif", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’argument pour la fonction « MyDynamicTestString » n’est pas facultatif", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un nombre", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un nombre", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas une fonction", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas une fonction", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un objet indexable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un objet indexable", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas une chaîne", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas une chaîne", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un objet de date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un objet de date", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » a la valeur null ou n’est pas un objet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » a la valeur null ou n’est pas un objet", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d’affecter à « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d’affecter à « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » est indéfini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » est indéfini", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un opérateur booléen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un opérateur booléen", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de supprimer « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de supprimer « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un VBArray", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un objet JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un objet JavaScript", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un objet d’énumération", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un objet d’énumération", function (err, _translation) {
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
describe("translating fr-FR string: « MyDynamicTestString » n’est pas un objet d’expression régulière", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« MyDynamicTestString » n’est pas un objet d’expression régulière", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString n’est pas un objet Array ou Arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString n’est pas un objet Array ou Arguments", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString n’est pas un objet Array", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString n’est pas un objet Array", function (err, _translation) {
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
describe("translating fr-FR string: L’attribut « MyDynamicTestString » du descripteur de propriété ne peut pas être défini à « true » sur cet objet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’attribut « MyDynamicTestString » du descripteur de propriété ne peut pas être défini à « true » sur cet objet", function (err, _translation) {
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
describe("translating fr-FR string: L’attribut « MyDynamicTestString » du descripteur de propriété ne peut pas avoir la valeur « false » sur cet objet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’attribut « MyDynamicTestString » du descripteur de propriété ne peut pas avoir la valeur « false » sur cet objet", function (err, _translation) {
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
describe("translating fr-FR string: Redéclaration de const « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Redéclaration de const « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: Appel de la fonction delete sur « MyDynamicTestString » non autorisé en mode strict", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Appel de la fonction delete sur « MyDynamicTestString » non autorisé en mode strict", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de définir la propriété « MyDynamicTestString » d’une référence null ou non définie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de définir la propriété « MyDynamicTestString » d’une référence null ou non définie", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d’obtenir la propriété  « MyDynamicTestString » d’une référence null ou non définie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d’obtenir la propriété  « MyDynamicTestString » d’une référence null ou non définie", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de supprimer la propriété « MyDynamicTestString » d’une référence null ou non définie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de supprimer la propriété « MyDynamicTestString » d’une référence null ou non définie", function (err, _translation) {
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
describe("translating fr-FR string: Impossible d’accéder à la propriété « MyDynamicTestString » : le type « VarDate » ne prend pas en charge les propriétés définies par l’utilisateur", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible d’accéder à la propriété « MyDynamicTestString » : le type « VarDate » ne prend pas en charge les propriétés définies par l’utilisateur", function (err, _translation) {
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
describe("translating fr-FR string: La valeur de la propriété « MyDynamicTestString » n’est pas un objet Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La valeur de la propriété « MyDynamicTestString » n’est pas un objet Function", function (err, _translation) {
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
describe("translating fr-FR string: La valeur de la propriété « MyDynamicTestString » est null ou non définie, pas un objet Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La valeur de la propriété « MyDynamicTestString » est null ou non définie, pas un objet Function", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' est null ou non défini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' est null ou non défini", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet Object", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet Function", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet String", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet String", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet booléen", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet booléen", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet Date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet Date", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet Number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet Number", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet VBArray", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet JavaScript", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet Enumerator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet Enumerator", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : 'this' n’est pas un objet RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : 'this' n’est pas un objet RegExp", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : argument non valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : argument non valide", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’argument n’est pas un objet Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’argument n’est pas un objet Object", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’argument n’est pas un objet JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’argument n’est pas un objet JavaScript", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’argument n’est pas un objet Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’argument n’est pas un objet Function", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’argument n’est pas un objet VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’argument n’est pas un objet VBArray", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’argument est null ou non défini", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’argument est null ou non défini", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’argument n’est pas un objet Object et est non null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’argument n’est pas un objet Object et est non null", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’argument n’a pas une propriété de « longueur » valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’argument n’a pas une propriété de « longueur » valide", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : Objet Array ou Arguments attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : Objet Array ou Arguments attendu", function (err, _translation) {
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
describe("translating fr-FR string: Opérande non valide pour « MyDynamicTestString » : objet Object attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Opérande non valide pour « MyDynamicTestString » : objet Object attendu", function (err, _translation) {
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
describe("translating fr-FR string: Opérande non valide pour « MyDynamicTestString » : objet Function attendu", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Opérande non valide pour « MyDynamicTestString » : objet Function attendu", function (err, _translation) {
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
describe("translating fr-FR string: Descripteur non valide pour la propriété « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Descripteur non valide pour la propriété « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de définir une propriété « MyDynamicTestString » : objet non extensible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de définir une propriété « MyDynamicTestString » : objet non extensible", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de redéfinir une propriété non configurable « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de redéfinir une propriété non configurable « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de modifier une propriété non accessible en écriture « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de modifier une propriété non accessible en écriture « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de modifier la propriété « MyDynamicTestString » : « length » n’est pas accessible en écriture", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de modifier la propriété « MyDynamicTestString » : « length » n’est pas accessible en écriture", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de définir une propriété « MyDynamicTestString »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de définir une propriété « MyDynamicTestString »", function (err, _translation) {
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
describe("translating fr-FR string: L’argument obligatoire MyDynamicTestString dans la méthode DataView n’est pas spécifié", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’argument obligatoire MyDynamicTestString dans la méthode DataView n’est pas spécifié", function (err, _translation) {
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
describe("translating fr-FR string: L’argument MyDynamicTestString du constructeur DataView n’est pas valide", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’argument MyDynamicTestString du constructeur DataView n’est pas valide", function (err, _translation) {
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
describe("translating fr-FR string: La signature de la fonction « MyDynamicTestString » n’est pas valide et ne peut pas être appelée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La signature de la fonction « MyDynamicTestString » n’est pas valide et ne peut pas être appelée", function (err, _translation) {
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
describe("translating fr-FR string: La signature de la propriété « MyDynamicTestString » n’est pas valide et n’est pas accessible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La signature de la propriété « MyDynamicTestString » n’est pas valide et n’est pas accessible", function (err, _translation) {
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
describe("translating fr-FR string: La classe runtime MyDynamicTestString avec Windows.Foundation.IPropertyValue comme interface par défaut n’est pas prise en charge en tant que type de paramètre d’entrée", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La classe runtime MyDynamicTestString avec Windows.Foundation.IPropertyValue comme interface par défaut n’est pas prise en charge en tant que type de paramètre d’entrée", function (err, _translation) {
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
describe("translating fr-FR string: L’objet avec l’interface Windows.Foundation.IPropertyValue avec le nom runtimeclass MyDynamicTestString n’est pas pris en charge en tant que paramètre de sortie", function () {
	var translation;
	before(function (done) {
		errorToEnglish("L’objet avec l’interface Windows.Foundation.IPropertyValue avec le nom runtimeclass MyDynamicTestString n’est pas pris en charge en tant que paramètre de sortie", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : « this » n’est pas un objet Inspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : « this » n’est pas un objet Inspectable", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : impossible de convertir l’argument en type « char »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : impossible de convertir l’argument en type « char »", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : impossible de convertir l’argument en type « GUID »", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : impossible de convertir l’argument en type « GUID »", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : impossible de convertir la valeur renvoyée en IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : impossible de convertir la valeur renvoyée en IInspectable", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir l’objet en struct : propriété attendue « MyDynamicTestString » manquante pour l’objet", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir l’objet en struct : propriété attendue « MyDynamicTestString » manquante pour l’objet", function (err, _translation) {
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
describe("translating fr-FR string: Type « MyDynamicTestString » introuvable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Type « MyDynamicTestString » introuvable", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : fonction appelée avec trop peu d’arguments", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : fonction appelée avec trop peu d’arguments", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : type non constructible", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : type non constructible", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir la valeur en PropertyValue : MyDynamicTestString non pris en charge par PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir la valeur en PropertyValue : MyDynamicTestString non pris en charge par PropertyValue", function (err, _translation) {
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
describe("translating fr-FR string: Impossible de convertir la valeur en IInspectable : MyDynamicTestString non pris en charge par IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Impossible de convertir la valeur en IInspectable : MyDynamicTestString non pris en charge par IInspectable", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : l’objet Inspectable « this » est libéré et inaccessible.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : l’objet Inspectable « this » est libéré et inaccessible.", function (err, _translation) {
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
describe("translating fr-FR string: « this » n’est pas du type attendu : MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("« this » n’est pas du type attendu : MyDynamicTestString", function (err, _translation) {
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
describe("translating fr-FR string: MyDynamicTestString : une défaillance inattendue s’est produite lors de la tentative d’obtention d’informations de métadonnées.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString : une défaillance inattendue s’est produite lors de la tentative d’obtention d’informations de métadonnées.", function (err, _translation) {
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
describe("translating fr-FR string: La date spécifiée n'est pas disponible dans le calendrier régional actuel", function () {
	var translation;
	before(function (done) {
		errorToEnglish("La date spécifiée n'est pas disponible dans le calendrier régional actuel", function (err, _translation) {
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
