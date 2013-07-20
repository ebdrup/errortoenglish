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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected/g);
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

	it("should return one of the english versions: Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected", function () {
		expect(translation, translation).to.match(/String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected", function () {
		expect(translation, translation).to.match(/String\ expected/g);
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

	it("should return one of the english versions: Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
	});
});
describe("translating ar-SA string: Object doesn't support property or method 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Object doesn't support property or method 'MyDynamicTestString'", function (err, _translation) {
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
	});
});
describe("translating ar-SA string: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Unable to get property 'MyDynamicTestString' of undefined or null reference", function (err, _translation) {
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
