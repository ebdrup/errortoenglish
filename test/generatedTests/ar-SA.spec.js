var errorToEnglish = require("../../lib/errortoenglish");
describe("translating ar-SA string: ‏‏استدعاء إجراء غير صالح أو وسيطة غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏استدعاء إجراء غير صالح أو وسيطة غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏تجاوز سعة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏تجاوز سعة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏نفاد الذاكرة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏نفاد الذاكرة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏رمز سفلي خارج النطاق", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏رمز سفلي خارج النطاق", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏هذا الصفيف ثابت أو أنه مؤمن مؤقتاً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏هذا الصفيف ثابت أو أنه مؤمن مؤقتاً", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏تقسيم على صفر", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏تقسيم على صفر", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏عدم تطابق في النوع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏عدم تطابق في النوع", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏نفاد مساحة السلسلة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏نفاد مساحة السلسلة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن إنجاز العملية المطلوبة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن إنجاز العملية المطلوبة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏نفاد مساحة المكدس", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏نفاد مساحة المكدس", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏إجراء فرعي أو دالة غير معرّفين", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏إجراء فرعي أو دالة غير معرّفين", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ في تحميل DLL", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ في تحميل DLL", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ داخلي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ داخلي", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏اسم ملف أو رقم غير صحيحين", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏اسم ملف أو رقم غير صحيحين", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لم يتم العثور على الملف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لم يتم العثور على الملف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏وضع ملف غير صحيح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏وضع ملف غير صحيح", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الملف مفتوح مسبقاً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الملف مفتوح مسبقاً", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ في إدخال/إخراج جهاز", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ في إدخال/إخراج جهاز", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الملف موجود مسبقاً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الملف موجود مسبقاً", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏القرص ممتلئ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏القرص ممتلئ", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏تجاوز الإدخال نهاية الملف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏تجاوز الإدخال نهاية الملف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏عدد ملفات كبير جداً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏عدد ملفات كبير جداً", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الجهاز غير متوفر", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الجهاز غير متوفر", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الإذن مرفوض", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الإذن مرفوض", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏القرص غير جاهز", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏القرص غير جاهز", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن إعادة التسمية إلى محرك أقراص مختلف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن إعادة التسمية إلى محرك أقراص مختلف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ في الوصول إلى المسار/الملف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ في الوصول إلى المسار/الملف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لم يتم العثور على المسار", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لم يتم العثور على المسار", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏متغير غير معين من نوع Object أو من نوع With block", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏متغير غير معين من نوع Object أو من نوع With block", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏حلقة For غير مهيئة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏حلقة For غير مهيئة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏استخدام غير صالح للقيمة الفارغة Null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏استخدام غير صالح للقيمة الفارغة Null", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن إنشاء ملف مؤقت ضروري", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن إنشاء ملف مؤقت ضروري", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏مطلوب كائن (Object)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏مطلوب كائن (Object)", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن لملقم الأتمتة إنشاء كائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن لملقم الأتمتة إنشاء كائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الفئة (Class) لا تعتمد الأتمتة (Automation)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الفئة (Class) لا تعتمد الأتمتة (Automation)", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لم يتم العثور على اسم الملف أو اسم الفئة خلال عملية الأتمتة (Automation)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لم يتم العثور على اسم الملف أو اسم الفئة خلال عملية الأتمتة (Automation)", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏هذه الخاصية أو هذا الأسلوب غير معتمدين من قبل الكائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏هذه الخاصية أو هذا الأسلوب غير معتمدين من قبل الكائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ أتمتة (Automation)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ أتمتة (Automation)", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏هذا الإجراء غير معتمد من قبل الكائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏هذا الإجراء غير معتمد من قبل الكائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الوسائط المسماة غير معتمدة من قبل الكائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الوسائط المسماة غير معتمدة من قبل الكائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏إعداد الموقع الحالي غير معتمد من قبل الكائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏إعداد الموقع الحالي غير معتمد من قبل الكائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لم يتم العثور على الوسيطة المسماة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لم يتم العثور على الوسيطة المسماة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الوسيطة ليست اختيارية", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الوسيطة ليست اختيارية", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏عدد وسائط غير صحيح أو تعيين خاصية غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏عدد وسائط غير صحيح أو تعيين خاصية غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الكائن ليس بمجموعة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الكائن ليس بمجموعة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لم يتم العثور على دالة DLL المحددة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لم يتم العثور على دالة DLL المحددة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتغيرات التي تستخدم النوع Automation غير معتمدة في JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتغيرات التي تستخدم النوع Automation غير معتمدة في JavaScript", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏جهاز الملقم البعيد غير موجود أو غير متوفر", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏جهاز الملقم البعيد غير موجود أو غير متوفر", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن التعيين إلى متغير", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن التعيين إلى متغير", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الكائن ليس آمناً لاستخدامه في البرمجة النصية", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الكائن ليس آمناً لاستخدامه في البرمجة النصية", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الكائن غير آمن لتهيئته", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الكائن غير آمن لتهيئته", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الكائن غير آمن لإنشائه", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الكائن غير آمن لإنشائه", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏حدث استثناء حاسم", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏حدث استثناء حاسم", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏نفاد الذاكرة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏نفاد الذاكرة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ في بناء الجملة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ في بناء الجملة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود ':'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود ';'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود ')'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '('", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '['", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '['", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '}'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '{'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود معرّف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود معرّف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '='", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '/'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏رقم غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏رقم غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏حرف غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏حرف غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏ثابت سلسلة غير منهي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏ثابت سلسلة غير منهي", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏تعليق غير منهي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏تعليق غير منهي", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏عبارة 'return' خارج الدالة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏عبارة 'return' خارج الدالة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏‏‏لا يمكن وجود 'break' خارج الحلقة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏‏‏لا يمكن وجود 'break' خارج الحلقة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن وجود 'continue' خارج الحلقة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن وجود 'continue' خارج الحلقة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود رقم ست عشري", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود رقم ست عشري", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود 'while'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏عنوان (Label) تمت إعادة تعريفه", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏عنوان (Label) تمت إعادة تعريفه", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏عنوان (Label) غير موجود", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏عنوان (Label) غير موجود", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن ظهور 'default' أكثر من مرة واحدة في عبارة 'switch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن ظهور 'default' أكثر من مرة واحدة في عبارة 'switch'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود معرّف، أو سلسلة، أو رقم", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود معرّف، أو سلسلة، أو رقم", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '@end'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الترجمة الشرطية بحالة عدم تشغيل", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الترجمة الشرطية بحالة عدم تشغيل", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود ثابت", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود ثابت", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود '@'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود 'catch'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود 'var'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏يجب أن تأتي 'throw' متبوعة بتعبير في سطر المصدر نفسه", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏يجب أن تأتي 'throw' متبوعة بتعبير في سطر المصدر نفسه", function (err, _translation) {
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
describe("translating ar-SA string: تكون عبارات 'with' غير مسموح بها في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تكون عبارات 'with' غير مسموح بها في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: غير مسموح بأسماء المعلمات الرسمية المكررة في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("غير مسموح بأسماء المعلمات الرسمية المكررة في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: أحرف الأرقام الثُمانية وأحرف الإلغاء غير مسموح بها في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("أحرف الأرقام الثُمانية وأحرف الإلغاء غير مسموح بها في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: استخدام غير صالح لـ  'eval' في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("استخدام غير صالح لـ  'eval' في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: استخدام غير صالح لـ 'arguments' في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("استخدام غير صالح لـ 'arguments' في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: غير مسموح بطلب الحذف في التعبير في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("غير مسموح بطلب الحذف في التعبير في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: غير مسموح بتعريفات متعددة للخاصية في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("غير مسموح بتعريفات متعددة للخاصية في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: في الوضع المقيّد، يتعذر تضمين إقرارات الدوال في بيان أو كتلة. يمكن لهذه الإقرارات أن تظهر فقط في المستوى الأعلى أو مباشرةً داخل نص دالة.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("في الوضع المقيّد، يتعذر تضمين إقرارات الدوال في بيان أو كتلة. يمكن لهذه الإقرارات أن تظهر فقط في المستوى الأعلى أو مباشرةً داخل نص دالة.", function (err, _translation) {
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
describe("translating ar-SA string: يُعد استخدام كلمة أساسية لمعرف إجراءً غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يُعد استخدام كلمة أساسية لمعرف إجراءً غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: يُعد استخدام كلمة محجوزة مستقبلاً لمعرف إجراءً غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يُعد استخدام كلمة محجوزة مستقبلاً لمعرف إجراءً غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: يُعد استخدام كلمة محجوزة مستقبلاً لمعرف إجراءً غير صالح. يتم حفظ اسم المعرف في الوضع المقيّد.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يُعد استخدام كلمة محجوزة مستقبلاً لمعرف إجراءً غير صالح. يتم حفظ اسم المعرف في الوضع المقيّد.", function (err, _translation) {
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
describe("translating ar-SA string: يلزم أن يكون لوظائف Setter وسيطة واحدة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يلزم أن يكون لوظائف Setter وسيطة واحدة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ تحويل برمجي في JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ تحويل برمجي في JavaScript", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ وقت التشغيل في JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ وقت التشغيل في JavaScript", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ أثناء وقت التشغيل غير معروف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ أثناء وقت التشغيل غير معروف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن التعيين إلى 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن التعيين إلى 'this'", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود رقم", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود رقم", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود دالة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود دالة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن التعيين إلى ناتج دالة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن التعيين إلى ناتج دالة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن فهرسة كائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن فهرسة كائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود سلسلة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود سلسلة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود كائن من نوع Date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود كائن من نوع Date", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود كائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود كائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏تعيين غير صالح جهة اليمين", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏تعيين غير صالح جهة اليمين", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏معرّف لم يتم تعريفه", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏معرّف لم يتم تعريفه", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود Boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود Boolean", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا يمكن تنفيذ تعليمات من برنامج نصي ذي نوع freed", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا يمكن تنفيذ تعليمات من برنامج نصي ذي نوع freed", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود عضو كائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود عضو كائن", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود VBArray", function (err, _translation) {
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
describe("translating ar-SA string: كائن JavaScript متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن JavaScript متوقع", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود كائن من نوع Enumerator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود كائن من نوع Enumerator", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود كائن من نوع Regular Expression", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود كائن من نوع Regular Expression", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏خطأ في بناء الجملة ضمن تعبير عادي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏خطأ في بناء الجملة ضمن تعبير عادي", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏مقدار غير متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏مقدار غير متوقع", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود ']' ضمن تعبير عادي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود ']' ضمن تعبير عادي", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود ')' ضمن تعبير عادي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود ')' ضمن تعبير عادي", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏نطاق غير صالح ضمن مجموعة أحرف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏نطاق غير صالح ضمن مجموعة أحرف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏استثناء إهمال وليس إمساك", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏استثناء إهمال وليس إمساك", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏لا تتضمن الدالة كائناً صالحاً من نوع prototype", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏لا تتضمن الدالة كائناً صالحاً من نوع prototype", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏URI المراد فك ترميزها تحتوي على حرف غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏URI المراد فك ترميزها تحتوي على حرف غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏URI المراد فك ترميزها لها ترميز غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏URI المراد فك ترميزها لها ترميز غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏عدد الأرقام الكسرية خارج النطاق", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏عدد الأرقام الكسرية خارج النطاق", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏الدقة خارج النطاق", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏الدقة خارج النطاق", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود كائن صفيف أو وسائط", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود كائن صفيف أو وسائط", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏يجب أن يكون طول الصفيف عدد صحيح موجب منتهي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏يجب أن يكون طول الصفيف عدد صحيح موجب منتهي", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏يجب أن يتم تعيين عدد موجب منتهي لطول الصفيف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏يجب أن يتم تعيين عدد موجب منتهي لطول الصفيف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود كائن صفيف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود كائن صفيف", function (err, _translation) {
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
describe("translating ar-SA string: المرجع الدائري في وسيطة القيمة غير مدعوم", function () {
	var translation;
	before(function (done) {
		errorToEnglish("المرجع الدائري في وسيطة القيمة غير مدعوم", function (err, _translation) {
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
describe("translating ar-SA string: وسيطة بديلة غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وسيطة بديلة غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: قائمة الوسيطات كبيرة جداً بحيث يصعب تطبيقها", function () {
	var translation;
	before(function (done) {
		errorToEnglish("قائمة الوسيطات كبيرة جداً بحيث يصعب تطبيقها", function (err, _translation) {
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
describe("translating ar-SA string: إعادة تعريف خاصية ثابتة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("إعادة تعريف خاصية ثابتة", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تكوين عضو الكائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تكوين عضو الكائن", function (err, _translation) {
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
describe("translating ar-SA string: المتغير غير معرّف في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("المتغير غير معرّف في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: لا يُسمح بالوصول إلى خاصية 'المتصل' لدالة أو كائن وسيطات في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("لا يُسمح بالوصول إلى خاصية 'المتصل' لدالة أو كائن وسيطات في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: لا يُسمح بالوصول إلى خاصية 'المتصَل به' لدالة أو كائن وسيطات في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("لا يُسمح بالوصول إلى خاصية 'المتصَل به' لدالة أو كائن وسيطات في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: في الوضع المقيد، غير مسموح بالتعيين إلى خصائص للقراءة فقط", function () {
	var translation;
	before(function (done) {
		errorToEnglish("في الوضع المقيد، غير مسموح بالتعيين إلى خصائص للقراءة فقط", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر إنشاء خاصية لكائن غير قابل للامتداد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر إنشاء خاصية لكائن غير قابل للامتداد", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Function متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Function متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Function متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Function متوقع", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر أن يكون للخاصية كلا الموصلين وقيمة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر أن يكون للخاصية كلا الموصلين وقيمة", function (err, _translation) {
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
describe("translating ar-SA string: 'this' خالية أو غير معرّفة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' خالية أو غير معرّفة", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Function متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Function متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع String متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع String متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Boolean متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Boolean متوقع", function (err, _translation) {
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
describe("translating ar-SA string: التاريخ المتوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("التاريخ المتوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Number متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Number متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع VBArray متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع VBArray متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن JavaScript متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن JavaScript متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Enumerator متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Enumerator متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن RegExp متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن RegExp متوقع", function (err, _translation) {
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
describe("translating ar-SA string: وسيطة وظيفة غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وسيطة وظيفة غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن JavaScript متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن JavaScript متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Function متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Function متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع VBArray متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع VBArray متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: كائن من نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("كائن من نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: الخاصية 'length' غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("الخاصية 'length' غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏المتوقع وجود كائن صفيف أو وسائط", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏المتوقع وجود كائن صفيف أو وسائط", function (err, _translation) {
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
describe("translating ar-SA string: مُعامل غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("مُعامل غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: مُعامل غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("مُعامل غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: واصف خاصية غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("واصف خاصية غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تحديد الخاصية: الكائن غير قابل للمد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تحديد الخاصية: الكائن غير قابل للمد", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر إعادة تعريف الخاصية غير القابلة للتكوين", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر إعادة تعريف الخاصية غير القابلة للتكوين", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تعديل الخاصية غير القابلة للكتابة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تعديل الخاصية غير القابلة للكتابة", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تعديل الخاصية: 'length' غير قابلة للكتابة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تعديل الخاصية: 'length' غير قابلة للكتابة", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تحديد الخاصية", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تحديد الخاصية", function (err, _translation) {
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
describe("translating ar-SA string: وسيطة منشئ الصفيف المكتوب غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وسيطة منشئ الصفيف المكتوب غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: 'هذا' ليس كائن صفيف مكتوب", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'هذا' ليس كائن صفيف مكتوب", function (err, _translation) {
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
describe("translating ar-SA string: الإزاحة/الطول غير صالح عند إنشاء صفيف مكتوب", function () {
	var translation;
	before(function (done) {
		errorToEnglish("الإزاحة/الطول غير صالح عند إنشاء صفيف مكتوب", function (err, _translation) {
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
describe("translating ar-SA string: قيمة بداية/انتهاء غير صالحة بأسلوب الصفيف الفرعي المكتوب", function () {
	var translation;
	before(function (done) {
		errorToEnglish("قيمة بداية/انتهاء غير صالحة بأسلوب الصفيف الفرعي المكتوب", function (err, _translation) {
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
describe("translating ar-SA string: مصدر غير صالح في مجموعة الصفيف المكتوب", function () {
	var translation;
	before(function (done) {
		errorToEnglish("مصدر غير صالح في مجموعة الصفيف المكتوب", function (err, _translation) {
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
describe("translating ar-SA string: 'هذا' ليس كائن عرض بيانات", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'هذا' ليس كائن عرض بيانات", function (err, _translation) {
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
describe("translating ar-SA string: وسيطات غير صالحة بعرض البيانات", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وسيطات غير صالحة بعرض البيانات", function (err, _translation) {
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
describe("translating ar-SA string: وصول تشغيل عرض البيانات يتجاوز طول المخزن المؤقت المحدد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وصول تشغيل عرض البيانات يتجاوز طول المخزن المؤقت المحدد", function (err, _translation) {
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
describe("translating ar-SA string: وسيطات غير صالحة بعرض البيانات", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وسيطات غير صالحة بعرض البيانات", function (err, _translation) {
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
describe("translating ar-SA string: توقيع الوظيفة غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("توقيع الوظيفة غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: توقيع الخاصية غير صالح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("توقيع الخاصية غير صالح", function (err, _translation) {
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
describe("translating ar-SA string: نوع معلمة إدخال غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("نوع معلمة إدخال غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: معلمة إدخال غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("معلمة إدخال غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: لا يُسمح بالوصول إلى خاصية 'الوسيطات' لدالة في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("لا يُسمح بالوصول إلى خاصية 'الوسيطات' لدالة في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: تم توقع كائن يمكن فحصه", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تم توقع كائن يمكن فحصه", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل وسيطة لكتابة 'الحرف'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل وسيطة لكتابة 'الحرف'", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل وسيطة لكتابة 'المعرف الفريد العمومي'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل وسيطة لكتابة 'المعرف الفريد العمومي'", function (err, _translation) {
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
describe("translating ar-SA string: IInspectable متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable متوقع", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل كائن إلى بنية: يفقد الكائن خاصية متوقعة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل كائن إلى بنية: يفقد الكائن خاصية متوقعة", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏نوع غير معروف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏نوع غير معروف", function (err, _translation) {
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
describe("translating ar-SA string: تم استدعاء الوظيفة باستخدام وسيطات قليلة جداً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تم استدعاء الوظيفة باستخدام وسيطات قليلة جداً", function (err, _translation) {
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
describe("translating ar-SA string: الكتابة غير قابلة للبناء", function () {
	var translation;
	before(function (done) {
		errorToEnglish("الكتابة غير قابلة للبناء", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل القيمة إلى PropertyValue:  PropertyValue لا يدعم الكتابة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل القيمة إلى PropertyValue:  PropertyValue لا يدعم الكتابة", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل القيمة إلى IInspectable: IInspectable لا يدعم الكتابة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل القيمة إلى IInspectable: IInspectable لا يدعم الكتابة", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل التاريخ إلى Windows.Foundation.DateTime: القيمة خارج النطاق الصحيح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل التاريخ إلى Windows.Foundation.DateTime: القيمة خارج النطاق الصحيح", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل القيمة إلى Windows.Foundation.TimeSpan: القيمة خارج النطاق الصحيح", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل القيمة إلى Windows.Foundation.TimeSpan: القيمة خارج النطاق الصحيح", function (err, _translation) {
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
describe("translating ar-SA string: وصول غير صالح إلى كائن قابل للفحص تم تحريره بالفعل", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وصول غير صالح إلى كائن قابل للفحص تم تحريره بالفعل", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تحرير كائن قابل للفحص تم تحريره بالفعل", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تحرير كائن قابل للفحص تم تحريره بالفعل", function (err, _translation) {
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
describe("translating ar-SA string: 'هذا' ليس من النوع المتوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'هذا' ليس من النوع المتوقع", function (err, _translation) {
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
describe("translating ar-SA string: تم تحديد حجم وطول غير قانوني للصفيف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تم تحديد حجم وطول غير قانوني للصفيف", function (err, _translation) {
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
describe("translating ar-SA string: حدث فشل غير متوقع أثناء محاولة الحصول على معلومات بيانات التعريف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("حدث فشل غير متوقع أثناء محاولة الحصول على معلومات بيانات التعريف", function (err, _translation) {
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
describe("translating ar-SA string: الحالة \"خطأ\"، لكن لم يُرجع getResults خطأً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("الحالة \"خطأ\"، لكن لم يُرجع getResults خطأً", function (err, _translation) {
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
describe("translating ar-SA string: تم تمرير معلمة حالة مفقودة أو غير صالحة للمعالج المكتمل", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تم تمرير معلمة حالة مفقودة أو غير صالحة للمعالج المكتمل", function (err, _translation) {
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
describe("translating ar-SA string: تم تمرير معلمة مُرسل مفقودة أو غير صالحة للمعالج المكتمل", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تم تمرير معلمة مُرسل مفقودة أو غير صالحة للمعالج المكتمل", function (err, _translation) {
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
describe("translating ar-SA string: ما لا نهاية", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ما لا نهاية", function (err, _translation) {
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
describe("translating ar-SA string: -ما لا نهاية", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-ما لا نهاية", function (err, _translation) {
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
describe("translating ar-SA string: وسيطة الوظيفة 'MyDynamicTestString' ليست اختيارية", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وسيطة الوظيفة 'MyDynamicTestString' ليست اختيارية", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس رقماً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس رقماً", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس دالة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس دالة", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس كائناً قابلاً للفهرسة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس كائناً قابلاً للفهرسة", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس سلسلة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس سلسلة", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس كائناً من نوع date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس كائناً من نوع date", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' فارغاً أو ليس كائناً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' فارغاً أو ليس كائناً", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏يتعذر التعيين إلى 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏يتعذر التعيين إلى 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' غير محدد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' غير محدد", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس منطقياً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس منطقياً", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏يتعذر حذف 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏يتعذر حذف 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' هو ليس VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' هو ليس VBArray", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس كائن JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس كائن JavaScript", function (err, _translation) {
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
describe("translating ar-SA string: ‏'MyDynamicTestString' ليس كائناً تعدادياً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏'MyDynamicTestString' ليس كائناً تعدادياً", function (err, _translation) {
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
describe("translating ar-SA string: 'MyDynamicTestString' ليس كائن تعبير عادي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' ليس كائن تعبير عادي", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString ليس كائن صفيف أو وسائط", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString ليس كائن صفيف أو وسائط", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString ليس كائن صفيف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString ليس كائن صفيف", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تعيين السمة 'MyDynamicTestString' في واصف الخاصية إلى 'true' في هذا الكائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تعيين السمة 'MyDynamicTestString' في واصف الخاصية إلى 'true' في هذا الكائن", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تعيين السمة 'MyDynamicTestString' في واصف الخاصية إلى 'false' في هذا الكائن", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تعيين السمة 'MyDynamicTestString' في واصف الخاصية إلى 'false' في هذا الكائن", function (err, _translation) {
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
describe("translating ar-SA string: إعادة تعريف خاصية 'MyDynamicTestString' ثابتة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("إعادة تعريف خاصية 'MyDynamicTestString' ثابتة", function (err, _translation) {
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
describe("translating ar-SA string: غير مسموح بطلب الحذف في الخاصية 'MyDynamicTestString' في الوضع المقيد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("غير مسموح بطلب الحذف في الخاصية 'MyDynamicTestString' في الوضع المقيد", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تعيين الخاصية 'MyDynamicTestString' لمرجع غير محدد أو فارغ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تعيين الخاصية 'MyDynamicTestString' لمرجع غير محدد أو فارغ", function (err, _translation) {
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
describe("translating ar-SA string: تعذر حذف الخاصية 'MyDynamicTestString' لمرجع غير محدد أو فارغ", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر حذف الخاصية 'MyDynamicTestString' لمرجع غير محدد أو فارغ", function (err, _translation) {
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
describe("translating ar-SA string: تعذر الوصول إلى الخاصية 'MyDynamicTestString': النوع  'VarDate' لا يدعم الخصائص غير المحددة بواسطة المستخدم", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر الوصول إلى الخاصية 'MyDynamicTestString': النوع  'VarDate' لا يدعم الخصائص غير المحددة بواسطة المستخدم", function (err, _translation) {
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
describe("translating ar-SA string: قيمة الخاصية 'MyDynamicTestString' ليست كائن وظيفة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("قيمة الخاصية 'MyDynamicTestString' ليست كائن وظيفة", function (err, _translation) {
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
describe("translating ar-SA string: قيمة الخاصية 'MyDynamicTestString' خالية أو غير معرفة وهي ليست كائن وظيفة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("قيمة الخاصية 'MyDynamicTestString' خالية أو غير معرفة وهي ليست كائن وظيفة", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' خالية أو غير محددة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' خالية أو غير محددة", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست من النوع Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست من النوع Object", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString:الخاصية 'this' ليست كائن من النوع Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString:الخاصية 'this' ليست كائن من النوع Function", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع String", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع String", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Boolean", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Boolean", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Date", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Date", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Number", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Number", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع VBArray", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع JavaScript", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Enumerator", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع Enumerator", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الخاصية 'this' ليست كائن من النوع RegExp", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الخاصية 'this' ليست كائن من النوع RegExp", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: وسيطة غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: وسيطة غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: وسيطة ليست من النوع Object", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: وسيطة ليست من النوع Object", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الوسيطة ليست كائن JavaScript", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الوسيطة ليست كائن JavaScript", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الوسيطة ليست كائن Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الوسيطة ليست كائن Function", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الوسيطة ليست كائن VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الوسيطة ليست كائن VBArray", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: وسيطة خالية أو غير محددة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: وسيطة خالية أو غير محددة", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: وسيطة ليست Object وليست خالية", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: وسيطة ليست Object وليست خالية", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الوسيطة لا تحتوي على خاصية 'length' صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الوسيطة لا تحتوي على خاصية 'length' صالحة", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: كائن صفيف أو وسيطات متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: كائن صفيف أو وسيطات متوقع", function (err, _translation) {
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
describe("translating ar-SA string: مُعامل غير صالح لـ'MyDynamicTestString': نوع Object متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("مُعامل غير صالح لـ'MyDynamicTestString': نوع Object متوقع", function (err, _translation) {
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
describe("translating ar-SA string: مُعامل غير صالح لـ 'MyDynamicTestString' نوع Function متوقع", function () {
	var translation;
	before(function (done) {
		errorToEnglish("مُعامل غير صالح لـ 'MyDynamicTestString' نوع Function متوقع", function (err, _translation) {
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
describe("translating ar-SA string: واصف غير صالح للخاصية 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("واصف غير صالح للخاصية 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تعريف الخاصية 'MyDynamicTestString': الكائن غير قابل للمد", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تعريف الخاصية 'MyDynamicTestString': الكائن غير قابل للمد", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر إعادة تعريف الخاصية غير القابلة للتكوين 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر إعادة تعريف الخاصية غير القابلة للتكوين 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تعديل الخاصية غير القابلة للكتابة 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تعديل الخاصية غير القابلة للكتابة 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر تعديل الخاصية 'MyDynamicTestString': 'length' غير قابل للكتابة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر تعديل الخاصية 'MyDynamicTestString': 'length' غير قابل للكتابة", function (err, _translation) {
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
describe("translating ar-SA string: يتعذر إعادة تعريف الخاصية 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("يتعذر إعادة تعريف الخاصية 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: لم يتم تحديد الوسيطة المطلوبة MyDynamicTestString بأسلوب عرض البيانات", function () {
	var translation;
	before(function (done) {
		errorToEnglish("لم يتم تحديد الوسيطة المطلوبة MyDynamicTestString بأسلوب عرض البيانات", function (err, _translation) {
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
describe("translating ar-SA string: وسيطة منشئ عرض البيانات MyDynamicTestString غير صالحة", function () {
	var translation;
	before(function (done) {
		errorToEnglish("وسيطة منشئ عرض البيانات MyDynamicTestString غير صالحة", function (err, _translation) {
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
describe("translating ar-SA string: تحتوي الدالة 'MyDynamicTestString' على توقيع غير صالح ولا يمكن استدعاؤها", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تحتوي الدالة 'MyDynamicTestString' على توقيع غير صالح ولا يمكن استدعاؤها", function (err, _translation) {
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
describe("translating ar-SA string: تحتوي الخاصية 'MyDynamicTestString' على توقيع غير صالح ولا يمكن الوصول إليها", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تحتوي الخاصية 'MyDynamicTestString' على توقيع غير صالح ولا يمكن الوصول إليها", function (err, _translation) {
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
describe("translating ar-SA string: لا يتم دعم فئة وقت التشغيل MyDynamicTestString، التي تتضمن Windows.Foundation.IPropertyValue كواجهة افتراضية، كنوع معلمة إدخال", function () {
	var translation;
	before(function (done) {
		errorToEnglish("لا يتم دعم فئة وقت التشغيل MyDynamicTestString، التي تتضمن Windows.Foundation.IPropertyValue كواجهة افتراضية، كنوع معلمة إدخال", function (err, _translation) {
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
describe("translating ar-SA string: لا يتم دعم الكائن، الذي يحتوي على الواجهة Windows.Foundation.IPropertyValue التي تتضمن اسم فئة التشغيل MyDynamicTestString، كمعلمة إخراج", function () {
	var translation;
	before(function (done) {
		errorToEnglish("لا يتم دعم الكائن، الذي يحتوي على الواجهة Windows.Foundation.IPropertyValue التي تتضمن اسم فئة التشغيل MyDynamicTestString، كمعلمة إخراج", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: \"هذا\" ليس كائن قابل للفحص", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: \"هذا\" ليس كائن قابل للفحص", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: تعذر تحويل وسيطة لكتابة \"الحرف\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: تعذر تحويل وسيطة لكتابة \"الحرف\"", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: تعذر تحويل وسيطة لكتابة \"المعرف الفريد العمومي\"", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: تعذر تحويل وسيطة لكتابة \"المعرف الفريد العمومي\"", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: تعذر تحويل قيمة الإرجاع إلى IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: تعذر تحويل قيمة الإرجاع إلى IInspectable", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل كائن إلى بنية: يفقد الكائن خاصية متوقعة 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل كائن إلى بنية: يفقد الكائن خاصية متوقعة 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: لم يتم العثور على النوع 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("لم يتم العثور على النوع 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: تم استدعاء الوظيفة باستخدام وسيطات قليلة جداً", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: تم استدعاء الوظيفة باستخدام وسيطات قليلة جداً", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: الكتابة غير قابلة للبناء", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: الكتابة غير قابلة للبناء", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل القيمة إلى PropertyValue: PropertyValue غير مدعومة من قبل MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل القيمة إلى PropertyValue: PropertyValue غير مدعومة من قبل MyDynamicTestString", function (err, _translation) {
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
describe("translating ar-SA string: تعذر تحويل القيمة إلى IInspectable: IInspectable لا يدعم MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("تعذر تحويل القيمة إلى IInspectable: IInspectable لا يدعم MyDynamicTestString", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: تم تحرير الكائن \"هذا\" القابل للفحص، كما يتعذر الوصول إليه", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: تم تحرير الكائن \"هذا\" القابل للفحص، كما يتعذر الوصول إليه", function (err, _translation) {
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
describe("translating ar-SA string: 'هذا' ليس من النوع المتوقع: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'هذا' ليس من النوع المتوقع: MyDynamicTestString", function (err, _translation) {
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
describe("translating ar-SA string: MyDynamicTestString: حدث فشل غير متوقع أثناء محاولة الحصول على معلومات بيانات التعريف", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: حدث فشل غير متوقع أثناء محاولة الحصول على معلومات بيانات التعريف", function (err, _translation) {
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
describe("translating ar-SA string: ‏‏التاريخ المحدد غير متوفر في تقويم الموقع الحالي", function () {
	var translation;
	before(function (done) {
		errorToEnglish("‏‏التاريخ المحدد غير متوفر في تقويم الموقع الحالي", function (err, _translation) {
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
