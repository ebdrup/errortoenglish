var errorToEnglish = require("../../lib/errortoenglish");
describe("translating he-IL string: ‏‏ארגומנט או קריאה לפרוצדורה לא חוקיים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ארגומנט או קריאה לפרוצדורה לא חוקיים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏גלישה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏גלישה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין זיכרון פנוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין זיכרון פנוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏Subscript מחוץ לטווח", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏Subscript מחוץ לטווח", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מערך זה קבוע או נעול באופן זמני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מערך זה קבוע או נעול באופן זמני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏חלוקה באפס", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏חלוקה באפס", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אי-התאמה של סוג", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אי-התאמה של סוג", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין שטח מחרוזת פנוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין שטח מחרוזת פנוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות לבצע פעולה מבוקשת", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות לבצע פעולה מבוקשת", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין שטח מחסנית פנוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין שטח מחסנית פנוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שיגרת משנה או פונקציה לא הוגדרו", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שיגרת משנה או פונקציה לא הוגדרו", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאה בטעינת DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאה בטעינת DLL", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאה פנימית", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאה פנימית", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מספר או שם קובץ שגויים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מספר או שם קובץ שגויים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הקובץ לא נמצא", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הקובץ לא נמצא", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מצב קובץ שגוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מצב קובץ שגוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הקובץ פתוח כבר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הקובץ פתוח כבר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאת קלט/פלט בהתקן", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאת קלט/פלט בהתקן", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הקובץ קיים כבר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הקובץ קיים כבר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הדיסק מלא", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הדיסק מלא", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הקלט הוזן מעבר לסוף הקובץ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הקלט הוזן מעבר לסוף הקובץ", function (err, _translation) {
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
describe("translating he-IL string: ‏‏קבצים רבים מדי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏קבצים רבים מדי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏התקן לא זמין", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏התקן לא זמין", function (err, _translation) {
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
describe("translating he-IL string: ‏‏ההרשאה נדחתה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ההרשאה נדחתה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הדיסק אינו מוכן", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הדיסק אינו מוכן", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות לשנות שם באמצעות כונן אחר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות לשנות שם באמצעות כונן אחר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאת גישה לנתיב/קובץ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאת גישה לנתיב/קובץ", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הנתיב לא נמצא", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הנתיב לא נמצא", function (err, _translation) {
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
describe("translating he-IL string: ‏‏המשתנה Object או המשתנה With block לא הוגדרו", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏המשתנה Object או המשתנה With block לא הוגדרו", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לולאה מסוג For לא אותחלה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לולאה מסוג For לא אותחלה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שימוש לא חוקי בערך Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שימוש לא חוקי בערך Null", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות ליצור קובץ זמני נחוץ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות ליצור קובץ זמני נחוץ", function (err, _translation) {
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
describe("translating he-IL string: ‏‏דרוש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏דרוש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לשרת אוטומציה אין אפשרות ליצור אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לשרת אוטומציה אין אפשרות ליצור אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏המחלקה אינה תומכת באוטומציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏המחלקה אינה תומכת באוטומציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שם קובץ או שם מחלקה לא נמצאו במהלך פעולת אוטומציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שם קובץ או שם מחלקה לא נמצאו במהלך פעולת אוטומציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו תומך במאפיין או בפעולת שירות אלה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו תומך במאפיין או בפעולת שירות אלה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאת אוטומציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאת אוטומציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו תומך בפעולה זו", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו תומך בפעולה זו", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו תומך בארגומנטים בעלי שם", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו תומך בארגומנטים בעלי שם", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו תומך בהגדרת האזור הנוכחית", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו תומך בהגדרת האזור הנוכחית", function (err, _translation) {
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
describe("translating he-IL string: ‏‏ארגומנט בעל שם לא נמצא", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ארגומנט בעל שם לא נמצא", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הארגומנט אינו אופציונלי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הארגומנט אינו אופציונלי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מספר ארגומנטים שגוי או הקצאת מאפיין לא חוקית", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מספר ארגומנטים שגוי או הקצאת מאפיין לא חוקית", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו אוסף", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו אוסף", function (err, _translation) {
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
describe("translating he-IL string: ‏‏פונקציית DLL שצוינה לא נמצאה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏פונקציית DLL שצוינה לא נמצאה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏המשתנה עושה שימוש בסוג אוטומציה שאינו נתמך ב- JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏המשתנה עושה שימוש בסוג אוטומציה שאינו נתמך ב- JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מחשב השרת המרוחק אינו קיים או אינו זמין", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מחשב השרת המרוחק אינו קיים או אינו זמין", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות להקצות למשתנה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות להקצות למשתנה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו בטוח עבור Scripting", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו בטוח עבור Scripting", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו בטוח לאתחול", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו בטוח לאתחול", function (err, _translation) {
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
describe("translating he-IL string: ‏‏האובייקט אינו בטוח ליצירה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏האובייקט אינו בטוח ליצירה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אירע מצב חריג", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אירע מצב חריג", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין זיכרון פנוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין זיכרון פנוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאת תחביר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאת תחביר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש ':'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש ';'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש ')'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '('", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '['", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '['", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '}'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '{'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש מזהה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש מזהה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '='", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '/'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מספר לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מספר לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏תו לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏תו לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏קבוע מחרוזת לא גמור", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏קבוע מחרוזת לא גמור", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הערה לא גמורה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הערה לא גמורה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏משפט 'return' מחוץ לפונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏משפט 'return' מחוץ לפונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות לקיום 'break' מחוץ ללולאה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות לקיום 'break' מחוץ ללולאה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות לקיום 'continue' מחוץ ללולאה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות לקיום 'continue' מחוץ ללולאה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת ספרה הקסדצימאלית", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת ספרה הקסדצימאלית", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש 'while'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏התווית הוגדרה מחדש", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏התווית הוגדרה מחדש", function (err, _translation) {
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
describe("translating he-IL string: ‏‏התווית לא נמצאה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏התווית לא נמצאה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הערך 'default' יכול להופיע פעם אחת בלבד במשפט 'switch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הערך 'default' יכול להופיע פעם אחת בלבד במשפט 'switch'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשים מזהה, מחרוזת או מספר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשים מזהה, מחרוזת או מספר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '@end'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏קומפילציה מותנית אינה פועלת", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏קומפילציה מותנית אינה פועלת", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש קבוע", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש קבוע", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '@'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש 'catch'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש 'var'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לאחר 'throw' צריך להופיע ביטוי באותה שורת מקור", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לאחר 'throw' צריך להופיע ביטוי באותה שורת מקור", function (err, _translation) {
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
describe("translating he-IL string: ‏‏משפטי 'with' אינם מותרים במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏משפטי 'with' אינם מותרים במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שמות פרמטרים רשמיים כפולים אינם מותרים במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שמות פרמטרים רשמיים כפולים אינם מותרים במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏ליטרלים מספריים אוקטליים ותווי ביטול אינם מותרים במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ליטרלים מספריים אוקטליים ותווי ביטול אינם מותרים במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שימוש לא חוקי ב- 'eval' במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שימוש לא חוקי ב- 'eval' במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שימוש לא חוקי ב- 'arguments' במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שימוש לא חוקי ב- 'arguments' במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏קריאה למחיקה בביטוי אינה מותרת במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏קריאה למחיקה בביטוי אינה מותרת במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הגדרות מרובות של מאפיין אינן מותרות במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הגדרות מרובות של מאפיין אינן מותרות במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: במצב קפדני, לא ניתן לקנן הצהרות פונקציה בתוך משפט או בלוק. הן יכולות להופיע רק ברמה העליונה או ישירות בתוך גוף פונקציה.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("במצב קפדני, לא ניתן לקנן הצהרות פונקציה בתוך משפט או בלוק. הן יכולות להופיע רק ברמה העליונה או ישירות בתוך גוף פונקציה.", function (err, _translation) {
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
describe("translating he-IL string: השימוש במילת מפתח עבור מזהה אינו חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("השימוש במילת מפתח עבור מזהה אינו חוקי", function (err, _translation) {
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
describe("translating he-IL string: השימוש במילה שמורה עתידית עבור מזהה אינו חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("השימוש במילה שמורה עתידית עבור מזהה אינו חוקי", function (err, _translation) {
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
describe("translating he-IL string: השימוש במילה שמורה עתידית עבור מזהה אינו חוקי. שם המזהה שמור במצב קפדני.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("השימוש במילה שמורה עתידית עבור מזהה אינו חוקי. שם המזהה שמור במצב קפדני.", function (err, _translation) {
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
describe("translating he-IL string: ‏‏פונקציות רכיב מגדיר חייבות לכלול ארגומנט אחד", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏פונקציות רכיב מגדיר חייבות לכלול ארגומנט אחד", function (err, _translation) {
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
describe("translating he-IL string: שגיאת קומפילציה של JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("שגיאת קומפילציה של JavaScript", function (err, _translation) {
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
describe("translating he-IL string: שגיאת זמן ריצה של JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("שגיאת זמן ריצה של JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאת זמן ריצה לא ידועה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאת זמן ריצה לא ידועה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות להקצות עבור 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות להקצות עבור 'this'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש מספר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש מספר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות להקצות לתוצאת פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות להקצות לתוצאת פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות ליצור אינדקס עבור האובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות ליצור אינדקס עבור האובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת מחרוזת", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת מחרוזת", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט תאריך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט תאריך", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏צד שמאלי לא חוקי בהקצאה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏צד שמאלי לא חוקי בהקצאה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מזהה לא מוגדר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מזהה לא מוגדר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש ערך בוליאני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש ערך בוליאני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות להפעיל קוד מתוך Script פנוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות להפעיל קוד מתוך Script פנוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש פריט אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש פריט אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש VBArray", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט מונה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט מונה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט ביטוי רגיל", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט ביטוי רגיל", function (err, _translation) {
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
describe("translating he-IL string: ‏‏שגיאת תחביר בביטוי רגיל", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏שגיאת תחביר בביטוי רגיל", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מכמת לא צפוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מכמת לא צפוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '[' בביטוי רגיל", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '[' בביטוי רגיל", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש '(' בביטוי רגיל", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש '(' בביטוי רגיל", function (err, _translation) {
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
describe("translating he-IL string: ‏‏טווח לא חוקי בערכת תווים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏טווח לא חוקי בערכת תווים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏חריג התרחש ולא נתפס", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏חריג התרחש ולא נתפס", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לפונקציה אין אובייקט אב-טיפוס חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לפונקציה אין אובייקט אב-טיפוס חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏ה- URI המיועד לקידוד מכיל תו לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ה- URI המיועד לקידוד מכיל תו לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏ה- URI המיועד לפענוח אינו קידוד חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ה- URI המיועד לפענוח אינו קידוד חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מספר ספרות השברים נמצא מחוץ לטווח", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מספר ספרות השברים נמצא מחוץ לטווח", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הדיוק נמצא מחוץ לטווח", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הדיוק נמצא מחוץ לטווח", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט מערך או ארגומנטים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט מערך או ארגומנטים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אורך המערך חייב להיות מספר שלם חיובי סופי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אורך המערך חייב להיות מספר שלם חיובי סופי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏יש להקצות לאורך המערך מספר חיובי סופי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏יש להקצות לאורך המערך מספר חיובי סופי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט מערך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט מערך", function (err, _translation) {
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
describe("translating he-IL string: הפניה מעגלית בארגומנט ערך אינה נתמכת", function () {
	var translation;
	before(function (done) {
		errorToEnglish("הפניה מעגלית בארגומנט ערך אינה נתמכת", function (err, _translation) {
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
describe("translating he-IL string: ארגומנט מחליף לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ארגומנט מחליף לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏רשימת הארגומנטים גדולה מכדי שניתן יהיה להחילה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏רשימת הארגומנטים גדולה מכדי שניתן יהיה להחילה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הצהרה מחדש על מאפיין קבוע", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הצהרה מחדש על מאפיין קבוע", function (err, _translation) {
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
describe("translating he-IL string: ‏‏פריט אובייקט אינו ניתן להגדרה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏פריט אובייקט אינו ניתן להגדרה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏משתנה לא מוגדר במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏משתנה לא מוגדר במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: גישה למאפיין 'caller' של אובייקט פונקציה או ארגומנטים אסורה במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("גישה למאפיין 'caller' של אובייקט פונקציה או ארגומנטים אסורה במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: גישה למאפיין 'callee' של אובייקט ארגומנטים אסורה במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("גישה למאפיין 'callee' של אובייקט ארגומנטים אסורה במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: הקצאה למאפיינים לקריאה בלבד אסורה במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("הקצאה למאפיינים לקריאה בלבד אסורה במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות ליצור מאפיין עבור אובייקט שאינו ניתן להרחבה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות ליצור מאפיין עבור אובייקט שאינו ניתן להרחבה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מאפיין אינו יכול להכיל גם רכיבי גישה (Accessor) וגם ערך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מאפיין אינו יכול להכיל גם רכיבי גישה (Accessor) וגם ערך", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'this' הוא Null או לא מוגדר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'this' הוא Null או לא מוגדר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת מחרוזת", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת מחרוזת", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש ערך בוליאני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש ערך בוליאני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש תאריך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש תאריך", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש מספר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש מספר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש VBArray", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט מונה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט מונה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט RegExp", function (err, _translation) {
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
describe("translating he-IL string: ‏‏ארגומנט פונקציה לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ארגומנט פונקציה לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרשת פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרשת פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש VBArray", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מאפיין 'length' לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מאפיין 'length' לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏נדרש אובייקט מערך או ארגומנטים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏נדרש אובייקט מערך או ארגומנטים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אופרנד לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אופרנד לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אופרנד לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אופרנד לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מתאר מאפיין לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מתאר מאפיין לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר מאפיין: האובייקט אינו ניתן להרחבה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר מאפיין: האובייקט אינו ניתן להרחבה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר מחדש מאפיין שאין אפשרות לקבוע את תצורתו", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר מחדש מאפיין שאין אפשרות לקבוע את תצורתו", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן לשנות מאפיין שאינו ניתן לכתיבה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן לשנות מאפיין שאינו ניתן לכתיבה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן לשנות מאפיין: 'length' אינו ניתן לכתיבה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן לשנות מאפיין: 'length' אינו ניתן לכתיבה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר מאפיין", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר מאפיין", function (err, _translation) {
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
describe("translating he-IL string: ארגומנט הבנאי של המערך המסווג אינו חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ארגומנט הבנאי של המערך המסווג אינו חוקי", function (err, _translation) {
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
describe("translating he-IL string: 'this' אינו אובייקט מערך מסווג", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' אינו אובייקט מערך מסווג", function (err, _translation) {
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
describe("translating he-IL string: היסט/אורך לא חוקיים בעת יצירת מערך מסווג", function () {
	var translation;
	before(function (done) {
		errorToEnglish("היסט/אורך לא חוקיים בעת יצירת מערך מסווג", function (err, _translation) {
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
describe("translating he-IL string: ערך התחלה/סיום לא חוקי בפעולת שירות של מערך משנה של מערך מסווג", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ערך התחלה/סיום לא חוקי בפעולת שירות של מערך משנה של מערך מסווג", function (err, _translation) {
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
describe("translating he-IL string: מקור לא חוקי בקבוצת מערך מסווג", function () {
	var translation;
	before(function (done) {
		errorToEnglish("מקור לא חוקי בקבוצת מערך מסווג", function (err, _translation) {
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
describe("translating he-IL string: 'this' אינו אובייקט DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' אינו אובייקט DataView", function (err, _translation) {
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
describe("translating he-IL string: ארגומנטים לא חוקיים ב- DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ארגומנטים לא חוקיים ב- DataView", function (err, _translation) {
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
describe("translating he-IL string: גישה לפעולת DataView מעבר לאורך המאגר שצוין", function () {
	var translation;
	before(function (done) {
		errorToEnglish("גישה לפעולת DataView מעבר לאורך המאגר שצוין", function (err, _translation) {
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
describe("translating he-IL string: ארגומנטים לא חוקיים ב- DataView", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ארגומנטים לא חוקיים ב- DataView", function (err, _translation) {
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
describe("translating he-IL string: חתימת פונקציה לא חוקית", function () {
	var translation;
	before(function (done) {
		errorToEnglish("חתימת פונקציה לא חוקית", function (err, _translation) {
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
describe("translating he-IL string: חתימת מאפיין לא חוקית", function () {
	var translation;
	before(function (done) {
		errorToEnglish("חתימת מאפיין לא חוקית", function (err, _translation) {
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
describe("translating he-IL string: סוג פרמטר קלט לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("סוג פרמטר קלט לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: פרמטר פלט לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("פרמטר פלט לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: גישה למאפיין 'arguments' של פונקציה אסורה במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("גישה למאפיין 'arguments' של פונקציה אסורה במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: המערכת ציפתה לאובייקט הניתן לבדיקה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("המערכת ציפתה לאובייקט הניתן לבדיקה", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר ארגומנט לסוג 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר ארגומנט לסוג 'char'", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר ארגומנט לסוג 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר ארגומנט לסוג 'GUID'", function (err, _translation) {
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
describe("translating he-IL string: המערכת ציפתה ל- IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("המערכת ציפתה ל- IInspectable", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר אובייקט למבנה: באובייקט חסר מאפיין צפוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר אובייקט למבנה: באובייקט חסר מאפיין צפוי", function (err, _translation) {
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
describe("translating he-IL string: סוג לא ידוע", function () {
	var translation;
	before(function (done) {
		errorToEnglish("סוג לא ידוע", function (err, _translation) {
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
describe("translating he-IL string: בוצעה קריאה לפונקציה עם מעט מדי ארגומנטים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("בוצעה קריאה לפונקציה עם מעט מדי ארגומנטים", function (err, _translation) {
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
describe("translating he-IL string: הסוג אינו ניתן לבנייה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("הסוג אינו ניתן לבנייה", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר ערך ל- PropertyValue: הסוג אינו נתמך על-ידי PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר ערך ל- PropertyValue: הסוג אינו נתמך על-ידי PropertyValue", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר ערך ל- IInspectable: הסוג אינו נתמך על-ידי IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר ערך ל- IInspectable: הסוג אינו נתמך על-ידי IInspectable", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר תאריך ל- Windows.Foundation.DateTime: הערך נמצא מחוץ לטווח החוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר תאריך ל- Windows.Foundation.DateTime: הערך נמצא מחוץ לטווח החוקי", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר ערך ל- Windows.Foundation.TimeSpan: הערך נמצא מחוץ לטווח החוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר ערך ל- Windows.Foundation.TimeSpan: הערך נמצא מחוץ לטווח החוקי", function (err, _translation) {
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
describe("translating he-IL string: גישה לא חוקית לאובייקט הניתן לבדיקה ששוחרר כבר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("גישה לא חוקית לאובייקט הניתן לבדיקה ששוחרר כבר", function (err, _translation) {
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
describe("translating he-IL string: אין אפשרות לשחרר אובייקט הניתן לבדיקה ששוחרר כבר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("אין אפשרות לשחרר אובייקט הניתן לבדיקה ששוחרר כבר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'this' אינו מהסוג הצפוי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'this' אינו מהסוג הצפוי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏צוינו אורך וגודל לא חוקיים עבור המערך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏צוינו אורך וגודל לא חוקיים עבור המערך", function (err, _translation) {
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
describe("translating he-IL string: כשל לא צפוי אירע בעת ניסיון להשיג מידע של מטה-נתונים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("כשל לא צפוי אירע בעת ניסיון להשיג מידע של מטה-נתונים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏המצב הוא 'error', אך getResults לא החזיר שגיאה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏המצב הוא 'error', אך getResults לא החזיר שגיאה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏פרמטר מצב חסר או לא חוקי הועבר למטפל שהושלם", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏פרמטר מצב חסר או לא חוקי הועבר למטפל שהושלם", function (err, _translation) {
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
describe("translating he-IL string: ‏‏פרמטר שולח חסר או לא חוקי הועבר למטפל שהושלם", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏פרמטר שולח חסר או לא חוקי הועבר למטפל שהושלם", function (err, _translation) {
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
describe("translating he-IL string: אינסוף", function () {
	var translation;
	before(function (done) {
		errorToEnglish("אינסוף", function (err, _translation) {
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
describe("translating he-IL string: -אינסוף", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-אינסוף", function (err, _translation) {
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
describe("translating he-IL string: ‏‏ארגומנט לפונקציה 'MyDynamicTestString' אינו אופציונלי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ארגומנט לפונקציה 'MyDynamicTestString' אינו אופציונלי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו מספר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו מספר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו אובייקט שניתן ליצור עבורו אינדקס", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו אובייקט שניתן ליצור עבורו אינדקס", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו מחרוזת", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו מחרוזת", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו אובייקט תאריך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו אובייקט תאריך", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' ריק או שאינו אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' ריק או שאינו אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות להקצות עבור 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות להקצות עבור 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו מוגדר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו מוגדר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו ערך בוליאני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו ערך בוליאני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אין אפשרות למחוק את 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אין אפשרות למחוק את 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו VBArray", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו אובייקט JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו אובייקט JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו אובייקט מונה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו אובייקט מונה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'MyDynamicTestString' אינו אובייקט ביטוי רגיל", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'MyDynamicTestString' אינו אובייקט ביטוי רגיל", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString אינו אובייקט מערך או ארגומנטים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString אינו אובייקט מערך או ארגומנטים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString אינו אובייקט מערך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString אינו אובייקט מערך", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר את התכונה 'MyDynamicTestString' במתאר המאפיין לערך 'true' באובייקט זה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר את התכונה 'MyDynamicTestString' במתאר המאפיין לערך 'true' באובייקט זה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר את התכונה 'MyDynamicTestString' במתאר המאפיין לערך 'false' באובייקט זה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר את התכונה 'MyDynamicTestString' במתאר המאפיין לערך 'false' באובייקט זה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הצהרה מחדש על הקבוע 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הצהרה מחדש על הקבוע 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: קריאה למחיקה ב- 'MyDynamicTestString' אסורה במצב קפדני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("קריאה למחיקה ב- 'MyDynamicTestString' אסורה במצב קפדני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן לקבוע את המאפיין 'MyDynamicTestString' של הפניה לא מוגדרת או Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן לקבוע את המאפיין 'MyDynamicTestString' של הפניה לא מוגדרת או Null", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן למחוק את המאפיין 'MyDynamicTestString' של הפניה לא מוגדרת או Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן למחוק את המאפיין 'MyDynamicTestString' של הפניה לא מוגדרת או Null", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן לגשת למאפיין 'MyDynamicTestString': הסוג 'VarDate' אינו תומך במאפיינים המוגדרים על-ידי המשתמש", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן לגשת למאפיין 'MyDynamicTestString': הסוג 'VarDate' אינו תומך במאפיינים המוגדרים על-ידי המשתמש", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הערך של המאפיין 'MyDynamicTestString' אינו אובייקט פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הערך של המאפיין 'MyDynamicTestString' אינו אובייקט פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏הערך של המאפיין 'MyDynamicTestString' הוא Null או לא מוגדר, ואינו אובייקט פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏הערך של המאפיין 'MyDynamicTestString' הוא Null או לא מוגדר, ואינו אובייקט פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' הוא Null או לא מוגדר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' הוא Null או לא מוגדר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט מחרוזת", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט מחרוזת", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט בוליאני", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט בוליאני", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט תאריך", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט תאריך", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט מספר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט מספר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט VBArray", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט מונה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט מונה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString:‏ 'this' אינו אובייקט RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString:‏ 'this' אינו אובייקט RegExp", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט לא חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט לא חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט אינו אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט אינו אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט אינו אובייקט JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט אינו אובייקט JavaScript", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט אינו אובייקט פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט אינו אובייקט פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט אינו אובייקט VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט אינו אובייקט VBArray", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט Null או לא מוגדר", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט Null או לא מוגדר", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט אינו אובייקט ואינו Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט אינו אובייקט ואינו Null", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: ארגומנט אינו כולל מאפיין 'length' חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: ארגומנט אינו כולל מאפיין 'length' חוקי", function (err, _translation) {
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
describe("translating he-IL string: ‏‏MyDynamicTestString: נדרש אובייקט מערך או ארגומנטים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏MyDynamicTestString: נדרש אובייקט מערך או ארגומנטים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אופרנד לא חוקי ל- 'MyDynamicTestString': נדרש אובייקט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אופרנד לא חוקי ל- 'MyDynamicTestString': נדרש אובייקט", function (err, _translation) {
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
describe("translating he-IL string: ‏‏אופרנד לא חוקי ל- 'MyDynamicTestString': נדרשת פונקציה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏אופרנד לא חוקי ל- 'MyDynamicTestString': נדרשת פונקציה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏מתאר לא חוקי עבור המאפיין 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏מתאר לא חוקי עבור המאפיין 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר מאפיין 'MyDynamicTestString': האובייקט אינו ניתן להרחבה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר מאפיין 'MyDynamicTestString': האובייקט אינו ניתן להרחבה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר מחדש מאפיין שאין אפשרות לקבוע את תצורתו 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר מחדש מאפיין שאין אפשרות לקבוע את תצורתו 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן לשנות מאפיין שאינו ניתן לכתיבה 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן לשנות מאפיין שאינו ניתן לכתיבה 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן לשנות מאפיין 'MyDynamicTestString':‏ 'length' אינו ניתן לכתיבה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן לשנות מאפיין 'MyDynamicTestString':‏ 'length' אינו ניתן לכתיבה", function (err, _translation) {
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
describe("translating he-IL string: ‏‏לא ניתן להגדיר מאפיין 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏לא ניתן להגדיר מאפיין 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: הארגומנט הנדרש MyDynamicTestString בפעולת שירות של DataView לא צוין", function () {
	var translation;
	before(function (done) {
		errorToEnglish("הארגומנט הנדרש MyDynamicTestString בפעולת שירות של DataView לא צוין", function (err, _translation) {
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
describe("translating he-IL string: ארגומנט הבנאי MyDynamicTestString של DataView אינו חוקי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ארגומנט הבנאי MyDynamicTestString של DataView אינו חוקי", function (err, _translation) {
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
describe("translating he-IL string: לפונקציה 'MyDynamicTestString' יש חתימה לא חוקית ולא ניתן לקרוא לה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לפונקציה 'MyDynamicTestString' יש חתימה לא חוקית ולא ניתן לקרוא לה", function (err, _translation) {
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
describe("translating he-IL string: למאפיין 'MyDynamicTestString' יש חתימה לא חוקית ולא ניתן לגשת אליו", function () {
	var translation;
	before(function (done) {
		errorToEnglish("למאפיין 'MyDynamicTestString' יש חתימה לא חוקית ולא ניתן לגשת אליו", function (err, _translation) {
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
describe("translating he-IL string: ה- runtimeclass בשם MyDynamicTestString שממשק ברירת המחדל שלו הוא Windows.Foundation.IPropertyValue אינו נתמך כסוג פרמטר קלט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ה- runtimeclass בשם MyDynamicTestString שממשק ברירת המחדל שלו הוא Windows.Foundation.IPropertyValue אינו נתמך כסוג פרמטר קלט", function (err, _translation) {
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
describe("translating he-IL string: האובייקט בעל הממשק Windows.Foundation.IPropertyValue ששם ה- runtimeclass שלו הוא MyDynamicTestString אינו נתמך כפרמטר פלט", function () {
	var translation;
	before(function (done) {
		errorToEnglish("האובייקט בעל הממשק Windows.Foundation.IPropertyValue ששם ה- runtimeclass שלו הוא MyDynamicTestString אינו נתמך כפרמטר פלט", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString:‏ 'this' אינו אובייקט הניתן לבדיקה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString:‏ 'this' אינו אובייקט הניתן לבדיקה", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString: לא היתה אפשרות להמיר ארגומנט לסוג 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: לא היתה אפשרות להמיר ארגומנט לסוג 'char'", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString: לא היתה אפשרות להמיר ארגומנט לסוג 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: לא היתה אפשרות להמיר ארגומנט לסוג 'GUID'", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString: לא היתה אפשרות להמיר ערך החזרה ל- IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: לא היתה אפשרות להמיר ערך החזרה ל- IInspectable", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר אובייקט למבנה: באובייקט חסר מאפיין צפוי 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר אובייקט למבנה: באובייקט חסר מאפיין צפוי 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating he-IL string: הסוג 'MyDynamicTestString' לא נמצא", function () {
	var translation;
	before(function (done) {
		errorToEnglish("הסוג 'MyDynamicTestString' לא נמצא", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString: בוצעה קריאה לפונקציה עם מעט מדי ארגומנטים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: בוצעה קריאה לפונקציה עם מעט מדי ארגומנטים", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString: הסוג אינו ניתן לבנייה", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: הסוג אינו ניתן לבנייה", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר ערך ל- PropertyValue:‏ MyDynamicTestString אינו נתמך על-ידי PropertyValue", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר ערך ל- PropertyValue:‏ MyDynamicTestString אינו נתמך על-ידי PropertyValue", function (err, _translation) {
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
describe("translating he-IL string: לא היתה אפשרות להמיר ערך ל- IInspectable:‏ MyDynamicTestString אינו נתמך על-ידי IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("לא היתה אפשרות להמיר ערך ל- IInspectable:‏ MyDynamicTestString אינו נתמך על-ידי IInspectable", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString: האובייקט הניתן לבדיקה 'this' משוחרר ואין אפשרות לגשת אליו", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: האובייקט הניתן לבדיקה 'this' משוחרר ואין אפשרות לגשת אליו", function (err, _translation) {
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
describe("translating he-IL string: ‏‏'this' אינו מהסוג הצפוי: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏'this' אינו מהסוג הצפוי: MyDynamicTestString", function (err, _translation) {
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
describe("translating he-IL string: MyDynamicTestString: כשל לא צפוי אירע בעת ניסיון להשיג מידע של מטה-נתונים", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: כשל לא צפוי אירע בעת ניסיון להשיג מידע של מטה-נתונים", function (err, _translation) {
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
describe("translating he-IL string: ‏‏התאריך שצוין אינו זמין בלוח השנה של האזור הנוכחי", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏התאריך שצוין אינו זמין בלוח השנה של האזור הנוכחי", function (err, _translation) {
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
