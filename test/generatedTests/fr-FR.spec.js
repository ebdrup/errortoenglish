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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
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

    it("should return the english version: Infinity", function () {
        expect(translation).to.equal("Infinity");
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

    it("should return the english version: -Infinity", function () {
        expect(translation).to.equal("-Infinity");
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
