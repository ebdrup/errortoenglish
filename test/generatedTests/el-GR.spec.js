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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
