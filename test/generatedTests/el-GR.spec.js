var errorToEnglish = require("../../lib/errortoenglish");
describe("translating el-GR string: Η κλήση διαδικασίας ή το όρισμα δεν είναι έγκυρα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η κλήση διαδικασίας ή το όρισμα δεν είναι έγκυρα", function (err, _translation) {
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
describe("translating el-GR string: Υπερχείλιση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Υπερχείλιση", function (err, _translation) {
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
describe("translating el-GR string: Η μνήμη δεν επαρκεί", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η μνήμη δεν επαρκεί", function (err, _translation) {
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
describe("translating el-GR string: Δείκτης εκτός περιοχής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δείκτης εκτός περιοχής", function (err, _translation) {
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
describe("translating el-GR string: Αυτός ο πίνακας είναι σταθερός ή προσωρινά κλειδωμένος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αυτός ο πίνακας είναι σταθερός ή προσωρινά κλειδωμένος", function (err, _translation) {
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
describe("translating el-GR string: Διαίρεση δια του μηδενός", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Διαίρεση δια του μηδενός", function (err, _translation) {
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
describe("translating el-GR string: Ασυμφωνία τύπων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ασυμφωνία τύπων", function (err, _translation) {
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
describe("translating el-GR string: Ο χώρος της συμβολοσειράς εξαντλήθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο χώρος της συμβολοσειράς εξαντλήθηκε", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η εκτέλεση της λειτουργίας που ζητήθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η εκτέλεση της λειτουργίας που ζητήθηκε", function (err, _translation) {
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
describe("translating el-GR string: Ο χώρος της στοίβας εξαντλήθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο χώρος της στοίβας εξαντλήθηκε", function (err, _translation) {
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
describe("translating el-GR string: Δεν έχει οριστεί το υποπρόγραμμα ή η συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν έχει οριστεί το υποπρόγραμμα ή η συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Σφάλμα κατά τη φόρτωση DLL", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Σφάλμα κατά τη φόρτωση DLL", function (err, _translation) {
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
describe("translating el-GR string: Παρουσιάστηκε εσωτερικό σφάλμα.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Παρουσιάστηκε εσωτερικό σφάλμα.", function (err, _translation) {
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
describe("translating el-GR string: Ακατάλληλο όνομα αρχείου ή αριθμός", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ακατάλληλο όνομα αρχείου ή αριθμός", function (err, _translation) {
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
describe("translating el-GR string: Το αρχείο δεν βρέθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αρχείο δεν βρέθηκε", function (err, _translation) {
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
describe("translating el-GR string: Ακατάλληλη κατάσταση αρχείου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ακατάλληλη κατάσταση αρχείου", function (err, _translation) {
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
describe("translating el-GR string: Το αρχείο είναι ήδη ανοικτό", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αρχείο είναι ήδη ανοικτό", function (err, _translation) {
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
describe("translating el-GR string: Σφάλμα εισόδου/εξόδου συσκευής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Σφάλμα εισόδου/εξόδου συσκευής", function (err, _translation) {
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
describe("translating el-GR string: Το αρχείο υπάρχει ήδη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αρχείο υπάρχει ήδη", function (err, _translation) {
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
describe("translating el-GR string: Ο δίσκος γέμισε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο δίσκος γέμισε", function (err, _translation) {
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
describe("translating el-GR string: Τα δεδομένα εισόδου ξεπέρασαν το τέλος του αρχείου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Τα δεδομένα εισόδου ξεπέρασαν το τέλος του αρχείου", function (err, _translation) {
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
describe("translating el-GR string: Υπερβολικά μεγάλος αριθμός αρχείων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Υπερβολικά μεγάλος αριθμός αρχείων", function (err, _translation) {
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
describe("translating el-GR string: Η συσκευή δεν είναι διαθέσιμη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η συσκευή δεν είναι διαθέσιμη", function (err, _translation) {
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
describe("translating el-GR string: Άρνηση άδειας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Άρνηση άδειας", function (err, _translation) {
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
describe("translating el-GR string: Ο δίσκος δεν είναι έτοιμος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο δίσκος δεν είναι έτοιμος", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η μετονομασία με διαφορετική μονάδα δίσκου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η μετονομασία με διαφορετική μονάδα δίσκου", function (err, _translation) {
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
describe("translating el-GR string: Παρουσιάστηκε σφάλμα κατά την πρόσβαση διαδρομής/αρχείου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Παρουσιάστηκε σφάλμα κατά την πρόσβαση διαδρομής/αρχείου", function (err, _translation) {
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
describe("translating el-GR string: Η διαδρομή δεν βρέθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η διαδρομή δεν βρέθηκε", function (err, _translation) {
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
describe("translating el-GR string: Δεν έχει οριστεί μεταβλητή αντικειμένου ή μεταβλητή μπλοκ With", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν έχει οριστεί μεταβλητή αντικειμένου ή μεταβλητή μπλοκ With", function (err, _translation) {
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
describe("translating el-GR string: Δεν έχει γίνει προετοιμασία του βρόχου \"For\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν έχει γίνει προετοιμασία του βρόχου \"For\"", function (err, _translation) {
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
describe("translating el-GR string: Η χρήση του μηδενικού (Null) χαρακτήρα δεν είναι έγκυρη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η χρήση του μηδενικού (Null) χαρακτήρα δεν είναι έγκυρη", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η δημιουργία του απαραίτητου προσωρινού αρχείου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η δημιουργία του απαραίτητου προσωρινού αρχείου", function (err, _translation) {
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
describe("translating el-GR string: Απαιτείται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Απαιτείται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η δημιουργία του αντικειμένου από το διακομιστή αυτοματοποίησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η δημιουργία του αντικειμένου από το διακομιστή αυτοματοποίησης", function (err, _translation) {
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
describe("translating el-GR string: Η κλάση δεν υποστηρίζει αυτοματοποίηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η κλάση δεν υποστηρίζει αυτοματοποίηση", function (err, _translation) {
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
describe("translating el-GR string: Το όνομα αρχείου ή κλάσης δεν βρέθηκε κατά τη λειτουργία της Αυτοματοποίησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το όνομα αρχείου ή κλάσης δεν βρέθηκε κατά τη λειτουργία της Αυτοματοποίησης", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν υποστηρίζει αυτή την ιδιότητα ή μέθοδο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν υποστηρίζει αυτή την ιδιότητα ή μέθοδο", function (err, _translation) {
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
describe("translating el-GR string: Σφάλμα αυτοματοποίησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Σφάλμα αυτοματοποίησης", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν υποστηρίζει αυτή την ενέργεια", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν υποστηρίζει αυτή την ενέργεια", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν υποστηρίζει επώνυμα ορίσματα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν υποστηρίζει επώνυμα ορίσματα", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν υποστηρίζει την τρέχουσα τοπική ρύθμιση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν υποστηρίζει την τρέχουσα τοπική ρύθμιση", function (err, _translation) {
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
describe("translating el-GR string: Το επώνυμο όρισμα δε βρέθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το επώνυμο όρισμα δε βρέθηκε", function (err, _translation) {
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
describe("translating el-GR string: Το όρισμα δεν είναι προαιρετικό", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το όρισμα δεν είναι προαιρετικό", function (err, _translation) {
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
describe("translating el-GR string: Εσφαλμένο πλήθος ορισμάτων ή η εκχώρηση ιδιότητας δεν είναι έγκυρη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Εσφαλμένο πλήθος ορισμάτων ή η εκχώρηση ιδιότητας δεν είναι έγκυρη", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν είναι συλλογή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν είναι συλλογή", function (err, _translation) {
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
describe("translating el-GR string: Η καθορισμένη συνάρτηση DLL δεν βρέθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η καθορισμένη συνάρτηση DLL δεν βρέθηκε", function (err, _translation) {
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
describe("translating el-GR string: Η μεταβλητή χρησιμοποιεί έναν τύπο αυτοματοποίησης που δεν υποστηρίζεται στη JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η μεταβλητή χρησιμοποιεί έναν τύπο αυτοματοποίησης που δεν υποστηρίζεται στη JavaScript", function (err, _translation) {
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
describe("translating el-GR string: Ο απομακρυσμένος διακομιστής δεν υπάρχει ή δεν είναι διαθέσιμος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο απομακρυσμένος διακομιστής δεν υπάρχει ή δεν είναι διαθέσιμος", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η εκχώρηση σε μεταβλητή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η εκχώρηση σε μεταβλητή", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν είναι ασφαλές για δέσμη ενεργειών", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν είναι ασφαλές για δέσμη ενεργειών", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν είναι ασφαλές για προετοιμασία", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν είναι ασφαλές για προετοιμασία", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν είναι ασφαλές για δημιουργία", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν είναι ασφαλές για δημιουργία", function (err, _translation) {
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
describe("translating el-GR string: Παρουσιάστηκε εξαίρεση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Παρουσιάστηκε εξαίρεση", function (err, _translation) {
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
describe("translating el-GR string: Η μνήμη δεν επαρκεί", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η μνήμη δεν επαρκεί", function (err, _translation) {
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
describe("translating el-GR string: Συντακτικό σφάλμα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Συντακτικό σφάλμα", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο ':'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο ';'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο '('", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο ')'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο ']'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο '{'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο '}'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο αναγνωριστικό", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο αναγνωριστικό", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο '='", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο '/'", function (err, _translation) {
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
describe("translating el-GR string: Ο αριθμός δεν είναι έγκυρος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο αριθμός δεν είναι έγκυρος", function (err, _translation) {
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
describe("translating el-GR string: Ο χαρακτήρας δεν είναι έγκυρος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο χαρακτήρας δεν είναι έγκυρος", function (err, _translation) {
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
describe("translating el-GR string: Μη τερματισμένη σταθερά συμβολοσειράς", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη τερματισμένη σταθερά συμβολοσειράς", function (err, _translation) {
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
describe("translating el-GR string: Μη τερματισμένο σχόλιο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη τερματισμένο σχόλιο", function (err, _translation) {
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
describe("translating el-GR string: Πρόταση 'return' έξω από συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Πρόταση 'return' έξω από συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Δεν επιτρέπεται το 'break' έξω από βρόχο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν επιτρέπεται το 'break' έξω από βρόχο", function (err, _translation) {
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
describe("translating el-GR string: Δεν επιτρέπεται το 'continue' έξω από βρόχο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν επιτρέπεται το 'continue' έξω από βρόχο", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο δεκαεξαδικό ψηφίο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο δεκαεξαδικό ψηφίο", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο 'while'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο 'while'", function (err, _translation) {
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
describe("translating el-GR string: Η ετικέτα ορίστηκε πάλι", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η ετικέτα ορίστηκε πάλι", function (err, _translation) {
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
describe("translating el-GR string: Η ετικέτα δεν βρέθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η ετικέτα δεν βρέθηκε", function (err, _translation) {
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
describe("translating el-GR string: Το 'default' είναι δυνατό να εμφανίζεται μόνο μία φορά σε προτάσεις 'switch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'default' είναι δυνατό να εμφανίζεται μόνο μία φορά σε προτάσεις 'switch'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο αναγνωριστικό, συμβολοσειρά ή αριθμός", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο αναγνωριστικό, συμβολοσειρά ή αριθμός", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο '@end'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο '@end'", function (err, _translation) {
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
describe("translating el-GR string: Η μεταγλώττιση υπό όρους είναι απενεργοποιημένη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η μεταγλώττιση υπό όρους είναι απενεργοποιημένη", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενη σταθερά", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενη σταθερά", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο '@'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο 'catch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο 'catch'", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο 'var'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο 'var'", function (err, _translation) {
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
describe("translating el-GR string: Το στοιχείο \"throw\" πρέπει να ακολουθείται από μια έκφραση στην ίδια γραμμή προέλευσης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το στοιχείο \"throw\" πρέπει να ακολουθείται από μια έκφραση στην ίδια γραμμή προέλευσης", function (err, _translation) {
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
describe("translating el-GR string: Δηλώσεις \"with\" δεν επιτρέπονται σε αυστηρή λειτουργία", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δηλώσεις \"with\" δεν επιτρέπονται σε αυστηρή λειτουργία", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπονται διπλότυπα ονόματα τυπικής παραμέτρου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπονται διπλότυπα ονόματα τυπικής παραμέτρου", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπονται οκταδικές αριθμητικές τιμές literal και χαρακτήρες διαφυγής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπονται οκταδικές αριθμητικές τιμές literal και χαρακτήρες διαφυγής", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη χρήση του 'eval' σε αυστηρή λειτουργία", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη χρήση του 'eval' σε αυστηρή λειτουργία", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη χρήση του 'arguments' σε αυστηρή λειτουργία", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη χρήση του 'arguments' σε αυστηρή λειτουργία", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπεται κλήση διαγραφής σε παράσταση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπεται κλήση διαγραφής σε παράσταση", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπονται πολλαπλοί ορισμοί μιας ιδιότητας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπονται πολλαπλοί ορισμοί μιας ιδιότητας", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία, οι δηλώσεις συνάρτησης δεν είναι δυνατό να είναι ένθετες σε πρόταση ή  μπλοκ. Ίσως εμφανίζονται μόνο σε ανώτατο επίπεδο ή απευθείας σε σώμα λειτουργίας.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία, οι δηλώσεις συνάρτησης δεν είναι δυνατό να είναι ένθετες σε πρόταση ή  μπλοκ. Ίσως εμφανίζονται μόνο σε ανώτατο επίπεδο ή απευθείας σε σώμα λειτουργίας.", function (err, _translation) {
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
describe("translating el-GR string: Η χρήση λέξης-κλειδιού για αναγνωριστικό δεν είναι έγκυρη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η χρήση λέξης-κλειδιού για αναγνωριστικό δεν είναι έγκυρη", function (err, _translation) {
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
describe("translating el-GR string: Η χρήση μιας μελλοντικής δεσμευμένης λέξης για αναγνωριστικό δεν είναι έγκυρη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η χρήση μιας μελλοντικής δεσμευμένης λέξης για αναγνωριστικό δεν είναι έγκυρη", function (err, _translation) {
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
describe("translating el-GR string: Η χρήση μιας μελλοντικής δεσμευμένης λέξης για αναγνωριστικό δεν είναι έγκυρη. Το αναγνωριστικό όνομα είναι δεσμευμένο στην αυστηρή λειτουργία.", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η χρήση μιας μελλοντικής δεσμευμένης λέξης για αναγνωριστικό δεν είναι έγκυρη. Το αναγνωριστικό όνομα είναι δεσμευμένο στην αυστηρή λειτουργία.", function (err, _translation) {
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
describe("translating el-GR string: Οι συναρτήσεις του setter πρέπει να έχουν ένα όρισμα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Οι συναρτήσεις του setter πρέπει να έχουν ένα όρισμα", function (err, _translation) {
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
describe("translating el-GR string: Σφάλμα μεταγλώττισης JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Σφάλμα μεταγλώττισης JavaScript", function (err, _translation) {
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
describe("translating el-GR string: Σφάλμα χρόνου εκτέλεσης JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Σφάλμα χρόνου εκτέλεσης JavaScript", function (err, _translation) {
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
describe("translating el-GR string: Άγνωστο σφάλμα χρόνου εκτέλεσης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Άγνωστο σφάλμα χρόνου εκτέλεσης", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η εκχώρηση σε 'this'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η εκχώρηση σε 'this'", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αριθμός", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αριθμός", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η εκχώρηση σε αποτέλεσμα συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η εκχώρηση σε αποτέλεσμα συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η εκχώρηση δείκτη στο αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η εκχώρηση δείκτη στο αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται συμβολοσειρά", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται συμβολοσειρά", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο ημερομηνίας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο ημερομηνίας", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη αριστερή πλευρά στην εκχώρηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη αριστερή πλευρά στην εκχώρηση", function (err, _translation) {
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
describe("translating el-GR string: Μη καθορισμένο αναγνωριστικό", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη καθορισμένο αναγνωριστικό", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται δυαδική τιμή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται δυαδική τιμή", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η εκτέλεση κώδικα από ελεύθερη δέσμη ενεργειών", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η εκτέλεση κώδικα από ελεύθερη δέσμη ενεργειών", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται μέλος αντικειμένου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται μέλος αντικειμένου", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται VBArray", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο JavaScript", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο απαρίθμησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο απαρίθμησης", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο κανονικής έκφρασης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο κανονικής έκφρασης", function (err, _translation) {
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
describe("translating el-GR string: Συντακτικό σφάλμα σε κανονική έκφραση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Συντακτικό σφάλμα σε κανονική έκφραση", function (err, _translation) {
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
describe("translating el-GR string: Μη αναμενόμενος ποσοδείκτης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη αναμενόμενος ποσοδείκτης", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο ']' σε κανονική έκφραση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο ']' σε κανονική έκφραση", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενο ')' σε κανονική έκφραση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενο ')' σε κανονική έκφραση", function (err, _translation) {
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
describe("translating el-GR string: Η περιοχή σε σύνολο χαρακτήρων δεν είναι έγκυρη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η περιοχή σε σύνολο χαρακτήρων δεν είναι έγκυρη", function (err, _translation) {
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
describe("translating el-GR string: Εμφανίστηκε εξαίρεση και δεν έγινε αντιληπτή από το σύστημα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Εμφανίστηκε εξαίρεση και δεν έγινε αντιληπτή από το σύστημα", function (err, _translation) {
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
describe("translating el-GR string: Η συνάρτηση δεν έχει έγκυρο αντικείμενο πρωτοτύπου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η συνάρτηση δεν έχει έγκυρο αντικείμενο πρωτοτύπου", function (err, _translation) {
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
describe("translating el-GR string: Το URI που θα κωδικοποιηθεί περιέχει χαρακτήρα που δεν είναι έγκυρος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το URI που θα κωδικοποιηθεί περιέχει χαρακτήρα που δεν είναι έγκυρος", function (err, _translation) {
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
describe("translating el-GR string: Το URI που θα αποκωδικοποιηθεί δεν είναι έγκυρη κωδικοποίηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το URI που θα αποκωδικοποιηθεί δεν είναι έγκυρη κωδικοποίηση", function (err, _translation) {
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
describe("translating el-GR string: Το πλήθος των κλασματικών ψηφίων είναι εκτός περιοχής τιμών", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το πλήθος των κλασματικών ψηφίων είναι εκτός περιοχής τιμών", function (err, _translation) {
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
describe("translating el-GR string: Η ακρίβεια είναι εκτός περιοχής τιμών", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η ακρίβεια είναι εκτός περιοχής τιμών", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται πίνακας ή αντικείμενο ορισμάτων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται πίνακας ή αντικείμενο ορισμάτων", function (err, _translation) {
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
describe("translating el-GR string: Το μήκος του πίνακα πρέπει να είναι πεπερασμένος θετικός ακέραιος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το μήκος του πίνακα πρέπει να είναι πεπερασμένος θετικός ακέραιος", function (err, _translation) {
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
describe("translating el-GR string: Στο μήκος του πίνακα πρέπει να αντιστοιχιστεί πεπερασμένος θετικός αριθμός", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στο μήκος του πίνακα πρέπει να αντιστοιχιστεί πεπερασμένος θετικός αριθμός", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο πίνακα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο πίνακα", function (err, _translation) {
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
describe("translating el-GR string: Δεν υποστηρίζεται κυκλική αναφορά σε όρισμα τιμής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν υποστηρίζεται κυκλική αναφορά σε όρισμα τιμής", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρο όρισμα αντικατάστασης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρο όρισμα αντικατάστασης", function (err, _translation) {
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
describe("translating el-GR string: Η λίστα ορισμάτων είναι υπερβολικά μεγάλη για να εφαρμοστεί", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η λίστα ορισμάτων είναι υπερβολικά μεγάλη για να εφαρμοστεί", function (err, _translation) {
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
describe("translating el-GR string: Νέα δήλωση ιδιότητας const", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Νέα δήλωση ιδιότητας const", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η ρύθμιση μέλους αντικειμένου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η ρύθμιση μέλους αντικειμένου", function (err, _translation) {
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
describe("translating el-GR string: Μη καθορισμένη μεταβλητή σε αυστηρή λειτουργία", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη καθορισμένη μεταβλητή σε αυστηρή λειτουργία", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπεται η πρόσβαση στην ιδιότητα 'caller' μιας συνάρτησης ή ενός αντικειμένου ορισμάτων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπεται η πρόσβαση στην ιδιότητα 'caller' μιας συνάρτησης ή ενός αντικειμένου ορισμάτων", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπεται η πρόσβαση στην ιδιότητα 'callee' ενός αντικειμένου ορισμάτων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπεται η πρόσβαση στην ιδιότητα 'callee' ενός αντικειμένου ορισμάτων", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπεται ανάθεση σε ιδιότητες μόνο για ανάγνωση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπεται ανάθεση σε ιδιότητες μόνο για ανάγνωση", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η δημιουργία ιδιότητας για μη επεκτάσιμο αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η δημιουργία ιδιότητας για μη επεκτάσιμο αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Η ιδιότητα δεν μπορεί να έχει στοιχεία πρόσβασης και τιμή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η ιδιότητα δεν μπορεί να έχει στοιχεία πρόσβασης και τιμή", function (err, _translation) {
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
describe("translating el-GR string: Η ιδιότητα 'this' είναι null ή ακαθόριστη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η ιδιότητα 'this' είναι null ή ακαθόριστη", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται συμβολοσειρά", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται συμβολοσειρά", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται δυαδική τιμή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται δυαδική τιμή", function (err, _translation) {
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
describe("translating el-GR string: Αναμενόμενη ημερομηνία", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμενόμενη ημερομηνία", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αριθμός", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αριθμός", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται VBArray", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο JavaScript", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο απαρίθμησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο απαρίθμησης", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο RegExp", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο RegExp", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρο όρισμα συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρο όρισμα συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο JavaScript", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται VBArray", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη ιδιότητα 'length'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη ιδιότητα 'length'", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται πίνακας ή αντικείμενο ορισμάτων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται πίνακας ή αντικείμενο ορισμάτων", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρος τελεστέος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρος τελεστέος", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρος τελεστέος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρος τελεστέος", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη περιγραφή ιδιότητας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη περιγραφή ιδιότητας", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατός ο ορισμός της ιδιότητας: το αντικείμενο δεν είναι επεκτάσιμο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατός ο ορισμός της ιδιότητας: το αντικείμενο δεν είναι επεκτάσιμο", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η επανάληψη του ορισμού της μη ρυθμιζόμενης ιδιότητας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η επανάληψη του ορισμού της μη ρυθμιζόμενης ιδιότητας", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η τροποποίηση της ιδιότητας χωρίς δυνατότητα εγγραφής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η τροποποίηση της ιδιότητας χωρίς δυνατότητα εγγραφής", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η τροποποίηση της ιδιότητας: η ιδιότητα 'length' δεν έχει δυνατότητα εγγραφής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η τροποποίηση της ιδιότητας: η ιδιότητα 'length' δεν έχει δυνατότητα εγγραφής", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατός ο ορισμός της ιδιότητας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατός ο ορισμός της ιδιότητας", function (err, _translation) {
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
describe("translating el-GR string: Το όρισμα κατασκευής καθορισμένου πίνακα δεν είναι έγκυρο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το όρισμα κατασκευής καθορισμένου πίνακα δεν είναι έγκυρο", function (err, _translation) {
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
describe("translating el-GR string: Το 'this' δεν αποτελεί αντικείμενο καθορισμένου πίνακα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'this' δεν αποτελεί αντικείμενο καθορισμένου πίνακα", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη μετατόπιση/μήκος κατά τη δημιουργία ενός καθορισμένου πίνακα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη μετατόπιση/μήκος κατά τη δημιουργία ενός καθορισμένου πίνακα", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη τιμή έναρξης/λήξης στη μέθοδο δευτερεύοντος πίνακα καθορισμένου πίνακα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη τιμή έναρξης/λήξης στη μέθοδο δευτερεύοντος πίνακα καθορισμένου πίνακα", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη προέλευση συνόλου καθορισμένου πίνακα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη προέλευση συνόλου καθορισμένου πίνακα", function (err, _translation) {
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
describe("translating el-GR string: Το 'this' δεν αποτελεί αντικείμενο DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'this' δεν αποτελεί αντικείμενο DataView", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρα ορίσματα στο DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρα ορίσματα στο DataView", function (err, _translation) {
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
describe("translating el-GR string: Λειτουργία πρόσβασης DataView πέρα από το καθορισμένο μήκος buffer", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Λειτουργία πρόσβασης DataView πέρα από το καθορισμένο μήκος buffer", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρα ορίσματα στο DataView", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρα ορίσματα στο DataView", function (err, _translation) {
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
describe("translating el-GR string: μη έγκυρη υπογραφή συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("μη έγκυρη υπογραφή συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: μη έγκυρη υπογραφή ιδιότητας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("μη έγκυρη υπογραφή ιδιότητας", function (err, _translation) {
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
describe("translating el-GR string: μη έγκυρος τύπος παραμέτρου εισόδου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("μη έγκυρος τύπος παραμέτρου εισόδου", function (err, _translation) {
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
describe("translating el-GR string: μη έγκυρη παράμετρος εξόδου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("μη έγκυρη παράμετρος εξόδου", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπεται η πρόσβαση στην ιδιότητα 'arguments' μιας συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπεται η πρόσβαση στην ιδιότητα 'arguments' μιας συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται αντικείμενο με δυνατότητα ελέγχου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται αντικείμενο με δυνατότητα ελέγχου", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο 'char'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο 'char'", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο  'GUID'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο  'GUID'", function (err, _translation) {
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
describe("translating el-GR string: Αναμένεται IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Αναμένεται IInspectable", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή αντικειμένου σε δομή: το αντικείμενο δεν διαθέτει την αναμενόμενη ιδιότητα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή αντικειμένου σε δομή: το αντικείμενο δεν διαθέτει την αναμενόμενη ιδιότητα", function (err, _translation) {
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
describe("translating el-GR string: Άγνωστος τύπος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Άγνωστος τύπος", function (err, _translation) {
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
describe("translating el-GR string: Έγινε κλήση συνάρτησης με πολύ λίγα ορίσματα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Έγινε κλήση συνάρτησης με πολύ λίγα ορίσματα", function (err, _translation) {
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
describe("translating el-GR string: Ο τύπος δεν είναι κατασκευάσιμος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο τύπος δεν είναι κατασκευάσιμος", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή της τιμής σε PropertyValue: Ο τύπος δεν υποστηρίζεται από το PropertyValue", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή της τιμής σε PropertyValue: Ο τύπος δεν υποστηρίζεται από το PropertyValue", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή της τιμής σε IInspectable: Ο τύπος δεν υποστηρίζεται από το IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή της τιμής σε IInspectable: Ο τύπος δεν υποστηρίζεται από το IInspectable", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή του Date σε Windows.Foundation.DateTime: η τιμή βρίσκεται εκτός της έγκυρης περιοχής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή του Date σε Windows.Foundation.DateTime: η τιμή βρίσκεται εκτός της έγκυρης περιοχής", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή της τιμής σε Windows.Foundation.TimeSpan: η τιμή βρίσκεται εκτός της έγκυρης περιοχής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή της τιμής σε Windows.Foundation.TimeSpan: η τιμή βρίσκεται εκτός της έγκυρης περιοχής", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη πρόσβαση στο αντικείμενο με δυνατότητα ελέγχου το οποίο έχει ήδη εκδοθεί", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη πρόσβαση στο αντικείμενο με δυνατότητα ελέγχου το οποίο έχει ήδη εκδοθεί", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η έκδοση του αντικειμένου με δυνατότητα ελέγχου το οποίο έχει ήδη εκδοθεί", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η έκδοση του αντικειμένου με δυνατότητα ελέγχου το οποίο έχει ήδη εκδοθεί", function (err, _translation) {
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
describe("translating el-GR string: \"αυτό\" δεν είναι του αναμενόμενου τύπου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"αυτό\" δεν είναι του αναμενόμενου τύπου", function (err, _translation) {
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
describe("translating el-GR string: Έχει καθοριστεί μη έγκυρο μήκος και μέγεθος πίνακα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Έχει καθοριστεί μη έγκυρο μήκος και μέγεθος πίνακα", function (err, _translation) {
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
describe("translating el-GR string: Παρουσιάστηκε μη αναμενόμενη αποτυχία κατά την προσπάθεια απόκτησης των πληροφοριών μετα-δεδομένων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Παρουσιάστηκε μη αναμενόμενη αποτυχία κατά την προσπάθεια απόκτησης των πληροφοριών μετα-δεδομένων", function (err, _translation) {
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
describe("translating el-GR string: Η κατάσταση είναι \"σφάλμα\", αλλά το getResults δεν επέστρεψε σφάλμα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η κατάσταση είναι \"σφάλμα\", αλλά το getResults δεν επέστρεψε σφάλμα", function (err, _translation) {
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
describe("translating el-GR string: Στο ολοκληρωμένο πρόγραμμα χειρισμού διαβιβάστηκε μη έγκυρη παράμετρος κατάστασης ή παράμετρος κατάστασης που λείπει", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στο ολοκληρωμένο πρόγραμμα χειρισμού διαβιβάστηκε μη έγκυρη παράμετρος κατάστασης ή παράμετρος κατάστασης που λείπει", function (err, _translation) {
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
describe("translating el-GR string: Στο ολοκληρωμένο πρόγραμμα χειρισμού διαβιβάστηκε μη έγκυρη παράμετρος αποστολέα ή παράμετρος αποστολέα που λείπει", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στο ολοκληρωμένο πρόγραμμα χειρισμού διαβιβάστηκε μη έγκυρη παράμετρος αποστολέα ή παράμετρος αποστολέα που λείπει", function (err, _translation) {
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
describe("translating el-GR string: Άπειρο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Άπειρο", function (err, _translation) {
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
describe("translating el-GR string: -Άπειρο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("-Άπειρο", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο δεν υποστηρίζει την ιδιότητα ή μέθοδο 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο δεν υποστηρίζει την ιδιότητα ή μέθοδο 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Το όρισμα στη συνάρτηση 'MyDynamicTestString' δεν είναι προαιρετικό", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το όρισμα στη συνάρτηση 'MyDynamicTestString' δεν είναι προαιρετικό", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι αριθμός", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι αριθμός", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι αντικείμενο με δυνατότητα ευρετηρίου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι αντικείμενο με δυνατότητα ευρετηρίου", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι συμβολοσειρά", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι συμβολοσειρά", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι αντικείμενο ημερομηνίας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι αντικείμενο ημερομηνίας", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' είναι μηδενικό ή δεν είναι αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' είναι μηδενικό ή δεν είναι αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η εκχώρηση στο 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η εκχώρηση στο 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν έχει οριστεί", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν έχει οριστεί", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι δυαδική τιμή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι δυαδική τιμή", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η διαγραφή του 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η διαγραφή του 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι VBArray", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι αντικείμενο JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι αντικείμενο JavaScript", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι αντικείμενο απαριθμητή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι αντικείμενο απαριθμητή", function (err, _translation) {
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
describe("translating el-GR string: Το 'MyDynamicTestString' δεν είναι αντικείμενο κανονικής έκφρασης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το 'MyDynamicTestString' δεν είναι αντικείμενο κανονικής έκφρασης", function (err, _translation) {
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
describe("translating el-GR string: Το MyDynamicTestString δεν είναι πίνακας (Array) ή αντικείμενο ορισμάτων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το MyDynamicTestString δεν είναι πίνακας (Array) ή αντικείμενο ορισμάτων", function (err, _translation) {
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
describe("translating el-GR string: Το MyDynamicTestString δεν είναι αντικείμενο πίνακα (Array)", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το MyDynamicTestString δεν είναι αντικείμενο πίνακα (Array)", function (err, _translation) {
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
describe("translating el-GR string: Το χαρακτηριστικό 'MyDynamicTestString' στην περιγραφή της ιδιότητας δεν είναι δυνατό να οριστεί σε \"true\" σε αυτό το αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το χαρακτηριστικό 'MyDynamicTestString' στην περιγραφή της ιδιότητας δεν είναι δυνατό να οριστεί σε \"true\" σε αυτό το αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Το χαρακτηριστικό 'MyDynamicTestString' στην περιγραφή της ιδιότητας δεν είναι δυνατό να οριστεί σε \"false\" σε αυτό το αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το χαρακτηριστικό 'MyDynamicTestString' στην περιγραφή της ιδιότητας δεν είναι δυνατό να οριστεί σε \"false\" σε αυτό το αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Νέα δήλωση της σταθεράς 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Νέα δήλωση της σταθεράς 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Στην αυστηρή λειτουργία δεν επιτρέπεται κλήση διαγραφής στο 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Στην αυστηρή λειτουργία δεν επιτρέπεται κλήση διαγραφής στο 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατός ο ορισμός της ιδιότητας ''MyDynamicTestString\" με ακαθόριστη αναφορά ή αναφορά null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατός ο ορισμός της ιδιότητας ''MyDynamicTestString\" με ακαθόριστη αναφορά ή αναφορά null", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η λήψη της ιδιότητας ''MyDynamicTestString\" με ακαθόριστη αναφορά ή αναφορά null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η λήψη της ιδιότητας ''MyDynamicTestString\" με ακαθόριστη αναφορά ή αναφορά null", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η διαγραφή της ιδιότητας ''MyDynamicTestString\" με ακαθόριστη αναφορά ή αναφορά null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η διαγραφή της ιδιότητας ''MyDynamicTestString\" με ακαθόριστη αναφορά ή αναφορά null", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η πρόσβαση στην ιδιότητα 'MyDynamicTestString': ο τύπος 'VarDate' δεν υποστηρίζει ιδιότητες που καθορίζονται από το χρήστη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η πρόσβαση στην ιδιότητα 'MyDynamicTestString': ο τύπος 'VarDate' δεν υποστηρίζει ιδιότητες που καθορίζονται από το χρήστη", function (err, _translation) {
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
describe("translating el-GR string: Η τιμή της ιδιότητας 'MyDynamicTestString' δεν είναι αντικείμενο συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η τιμή της ιδιότητας 'MyDynamicTestString' δεν είναι αντικείμενο συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: Η τιμή της ιδιότητας 'MyDynamicTestString' είναι null ή ακαθόριστη και όχι αντικείμενο συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η τιμή της ιδιότητας 'MyDynamicTestString' είναι null ή ακαθόριστη και όχι αντικείμενο συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' έχει τιμή null ή είναι ακαθόριστη", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' έχει τιμή null ή είναι ακαθόριστη", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο συμβολοσειράς", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο συμβολοσειράς", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι δυαδικό αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι δυαδικό αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο ημερομηνίας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο ημερομηνίας", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο αριθμού", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο αριθμού", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο VBArray", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο JavaScript", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο απαρίθμησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο απαρίθμησης", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο RegExp", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: η ιδιότητα 'this' δεν είναι αντικείμενο RegExp", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: μη έγκυρο όρισμα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: μη έγκυρο όρισμα", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το όρισμα δεν είναι αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το όρισμα δεν είναι αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το όρισμα δεν είναι αντικείμενο JavaScript", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το όρισμα δεν είναι αντικείμενο JavaScript", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το όρισμα δεν είναι αντικείμενο συνάρτησης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το όρισμα δεν είναι αντικείμενο συνάρτησης", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το όρισμα δεν είναι αντικείμενο VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το όρισμα δεν είναι αντικείμενο VBArray", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το όρισμα έχει τιμή null ή είναι ακαθόριστο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το όρισμα έχει τιμή null ή είναι ακαθόριστο", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το όρισμα δεν είναι αντικείμενο και δεν έχει τιμή null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το όρισμα δεν είναι αντικείμενο και δεν έχει τιμή null", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το όρισμα δεν έχει έγκυρη ιδιότητα 'length'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το όρισμα δεν έχει έγκυρη ιδιότητα 'length'", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: Αναμένεται αντικείμενο πίνακα (Array) ή ορισμάτων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Αναμένεται αντικείμενο πίνακα (Array) ή ορισμάτων", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρος τελεστέος στο 'MyDynamicTestString': Αναμένεται αντικείμενο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρος τελεστέος στο 'MyDynamicTestString': Αναμένεται αντικείμενο", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρος τελεστέος στο 'MyDynamicTestString': Αναμένεται συνάρτηση", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρος τελεστέος στο 'MyDynamicTestString': Αναμένεται συνάρτηση", function (err, _translation) {
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
describe("translating el-GR string: Μη έγκυρη περιγραφή για την ιδιότητα 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Μη έγκυρη περιγραφή για την ιδιότητα 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατός ο ορισμός της ιδιότητας 'MyDynamicTestString': το αντικείμενο δεν είναι επεκτάσιμο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατός ο ορισμός της ιδιότητας 'MyDynamicTestString': το αντικείμενο δεν είναι επεκτάσιμο", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η επανάληψη του ορισμού της ιδιότητας 'MyDynamicTestString' χωρίς δυνατότητα ρύθμισης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η επανάληψη του ορισμού της ιδιότητας 'MyDynamicTestString' χωρίς δυνατότητα ρύθμισης", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η τροποποίηση της ιδιότητας 'MyDynamicTestString' χωρίς δυνατότητα εγγραφής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η τροποποίηση της ιδιότητας 'MyDynamicTestString' χωρίς δυνατότητα εγγραφής", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατή η τροποποίηση της ιδιότητας 'MyDynamicTestString': η ιδιότητα 'length' δεν έχει δυνατότητα εγγραφής", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατή η τροποποίηση της ιδιότητας 'MyDynamicTestString': η ιδιότητα 'length' δεν έχει δυνατότητα εγγραφής", function (err, _translation) {
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
describe("translating el-GR string: Δεν είναι δυνατός ο ορισμός της ιδιότητας 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν είναι δυνατός ο ορισμός της ιδιότητας 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Το απαιτούμενο όρισμα MyDynamicTestString στη μέθοδο DataView δεν έχει καθοριστεί", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το απαιτούμενο όρισμα MyDynamicTestString στη μέθοδο DataView δεν έχει καθοριστεί", function (err, _translation) {
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
describe("translating el-GR string: Το όρισμα κατασκευής DataView  MyDynamicTestString δεν είναι έγκυρο", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το όρισμα κατασκευής DataView  MyDynamicTestString δεν είναι έγκυρο", function (err, _translation) {
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
describe("translating el-GR string: Η λειτουργία 'MyDynamicTestString' δεν έχει έγκυρη υπογραφή και δεν είναι δυνατή η κλήση της", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η λειτουργία 'MyDynamicTestString' δεν έχει έγκυρη υπογραφή και δεν είναι δυνατή η κλήση της", function (err, _translation) {
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
describe("translating el-GR string: Η ιδιότητα 'MyDynamicTestString' δεν έχει έγκυρη υπογραφή και η πρόσβαση σε αυτή δεν είναι δυνατή", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η ιδιότητα 'MyDynamicTestString' δεν έχει έγκυρη υπογραφή και η πρόσβαση σε αυτή δεν είναι δυνατή", function (err, _translation) {
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
describe("translating el-GR string: Το runtimeclass MyDynamicTestString το οποίο έχει το Windows.Foundation.IPropertyValue ως προεπιλεγμένη διασύνδεση δεν υποστηρίζεται ως τύπος παραμέτρου εισόδου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το runtimeclass MyDynamicTestString το οποίο έχει το Windows.Foundation.IPropertyValue ως προεπιλεγμένη διασύνδεση δεν υποστηρίζεται ως τύπος παραμέτρου εισόδου", function (err, _translation) {
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
describe("translating el-GR string: Το αντικείμενο με διασύνδεση Windows.Foundation.IPropertyValue που έχει όνομα runtimeclass MyDynamicTestString δεν υποστηρίζεται ως παράμετρος εξόδου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Το αντικείμενο με διασύνδεση Windows.Foundation.IPropertyValue που έχει όνομα runtimeclass MyDynamicTestString δεν υποστηρίζεται ως παράμετρος εξόδου", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: το 'this' δεν αποτελεί αντικείμενο με δυνατότητα ελέγχου", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: το 'this' δεν αποτελεί αντικείμενο με δυνατότητα ελέγχου", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο 'char'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο 'char'", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο 'GUID'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: δεν ήταν δυνατή η μετατροπή του ορίσματος σε τύπο 'GUID'", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: δεν ήταν δυνατή η μετατροπή της επιστρεφόμενης τιμής σε IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: δεν ήταν δυνατή η μετατροπή της επιστρεφόμενης τιμής σε IInspectable", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή του αντικειμένου σε δομή: το αντικείμενο δεν διαθέτει την αναμενόμενη ιδιότητα 'MyDynamicTestString'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή του αντικειμένου σε δομή: το αντικείμενο δεν διαθέτει την αναμενόμενη ιδιότητα 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating el-GR string: Ο τύπος 'MyDynamicTestString' δεν βρέθηκε", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Ο τύπος 'MyDynamicTestString' δεν βρέθηκε", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: έγινε κλήση συνάρτησης με πολύ λίγα ορίσματα", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: έγινε κλήση συνάρτησης με πολύ λίγα ορίσματα", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: ο τύπος δεν είναι κατασκευάσιμος", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: ο τύπος δεν είναι κατασκευάσιμος", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή της τιμής σε PropertyValue: το MyDynamicTestString δεν υποστηρίζεται από το PropertyValue", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή της τιμής σε PropertyValue: το MyDynamicTestString δεν υποστηρίζεται από το PropertyValue", function (err, _translation) {
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
describe("translating el-GR string: Δεν ήταν δυνατή η μετατροπή της τιμής σε IInspectable: το MyDynamicTestString δεν υποστηρίζεται από το IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Δεν ήταν δυνατή η μετατροπή της τιμής σε IInspectable: το MyDynamicTestString δεν υποστηρίζεται από το IInspectable", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: Το αντικείμενο με δυνατότητα ελέγχου 'this' έχει εκδοθεί και δεν υπάρχει δυνατότητα πρόσβασης", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Το αντικείμενο με δυνατότητα ελέγχου 'this' έχει εκδοθεί και δεν υπάρχει δυνατότητα πρόσβασης", function (err, _translation) {
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
describe("translating el-GR string: \"αυτό\" δεν είναι αναμενόμενου τύπου: MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("\"αυτό\" δεν είναι αναμενόμενου τύπου: MyDynamicTestString", function (err, _translation) {
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
describe("translating el-GR string: MyDynamicTestString: παρουσιάστηκε μη αναμενόμενη αποτυχία κατά την προσπάθεια απόκτησης των πληροφοριών μετα-δεδομένων", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: παρουσιάστηκε μη αναμενόμενη αποτυχία κατά την προσπάθεια απόκτησης των πληροφοριών μετα-δεδομένων", function (err, _translation) {
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
describe("translating el-GR string: Η καθορισμένη ημερομηνία δεν είναι διαθέσιμη στο ημερολόγιο της τρέχουσας τοποθεσίας", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Η καθορισμένη ημερομηνία δεν είναι διαθέσιμη στο ημερολόγιο της τρέχουσας τοποθεσίας", function (err, _translation) {
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
