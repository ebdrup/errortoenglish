var errorToEnglish = require("../../lib/errortoenglish");
describe("translating zh-HK string: 程序呼叫或引數不正確", function () {
	var translation;
	before(function (done) {
		errorToEnglish("程序呼叫或引數不正確", function (err, _translation) {
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
describe("translating zh-HK string: 溢位", function () {
	var translation;
	before(function (done) {
		errorToEnglish("溢位", function (err, _translation) {
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
describe("translating zh-HK string: 記憶體不足", function () {
	var translation;
	before(function (done) {
		errorToEnglish("記憶體不足", function (err, _translation) {
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
describe("translating zh-HK string: 陣列索引超出範圍", function () {
	var translation;
	before(function (done) {
		errorToEnglish("陣列索引超出範圍", function (err, _translation) {
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
describe("translating zh-HK string: 此陣列的長度是固定的或暫時被鎖住", function () {
	var translation;
	before(function (done) {
		errorToEnglish("此陣列的長度是固定的或暫時被鎖住", function (err, _translation) {
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
describe("translating zh-HK string: 除以零", function () {
	var translation;
	before(function (done) {
		errorToEnglish("除以零", function (err, _translation) {
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
describe("translating zh-HK string: 類型不符", function () {
	var translation;
	before(function (done) {
		errorToEnglish("類型不符", function (err, _translation) {
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
describe("translating zh-HK string: 字串空間不足", function () {
	var translation;
	before(function (done) {
		errorToEnglish("字串空間不足", function (err, _translation) {
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
describe("translating zh-HK string: 無法執行所要求的動作", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法執行所要求的動作", function (err, _translation) {
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
describe("translating zh-HK string: 堆疊空間不足", function () {
	var translation;
	before(function (done) {
		errorToEnglish("堆疊空間不足", function (err, _translation) {
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
describe("translating zh-HK string: 沒有定義這個 Sub 或 Function", function () {
	var translation;
	before(function (done) {
		errorToEnglish("沒有定義這個 Sub 或 Function", function (err, _translation) {
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
describe("translating zh-HK string: 載入 DLL 時發生錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("載入 DLL 時發生錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 內部錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("內部錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 錯誤的檔案名稱或代號", function () {
	var translation;
	before(function (done) {
		errorToEnglish("錯誤的檔案名稱或代號", function (err, _translation) {
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
describe("translating zh-HK string: 找不到檔案", function () {
	var translation;
	before(function (done) {
		errorToEnglish("找不到檔案", function (err, _translation) {
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
describe("translating zh-HK string: 錯誤的檔案模式", function () {
	var translation;
	before(function (done) {
		errorToEnglish("錯誤的檔案模式", function (err, _translation) {
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
describe("translating zh-HK string: 檔案已開啟", function () {
	var translation;
	before(function (done) {
		errorToEnglish("檔案已開啟", function (err, _translation) {
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
describe("translating zh-HK string: 週邊設備 I/O 錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("週邊設備 I/O 錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 檔案已存在", function () {
	var translation;
	before(function (done) {
		errorToEnglish("檔案已存在", function (err, _translation) {
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
describe("translating zh-HK string: 磁碟已滿", function () {
	var translation;
	before(function (done) {
		errorToEnglish("磁碟已滿", function (err, _translation) {
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
describe("translating zh-HK string: 輸入超出檔案結尾", function () {
	var translation;
	before(function (done) {
		errorToEnglish("輸入超出檔案結尾", function (err, _translation) {
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
describe("translating zh-HK string: 檔案過多", function () {
	var translation;
	before(function (done) {
		errorToEnglish("檔案過多", function (err, _translation) {
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
describe("translating zh-HK string: 無法使用周邊設備", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法使用周邊設備", function (err, _translation) {
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
describe("translating zh-HK string: 沒有使用權限", function () {
	var translation;
	before(function (done) {
		errorToEnglish("沒有使用權限", function (err, _translation) {
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
describe("translating zh-HK string: 磁碟尚未準備好", function () {
	var translation;
	before(function (done) {
		errorToEnglish("磁碟尚未準備好", function (err, _translation) {
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
describe("translating zh-HK string: 在不同的磁碟機上，無法重新命名", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在不同的磁碟機上，無法重新命名", function (err, _translation) {
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
describe("translating zh-HK string: 路徑或檔案存取錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("路徑或檔案存取錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 找不到路徑", function () {
	var translation;
	before(function (done) {
		errorToEnglish("找不到路徑", function (err, _translation) {
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
describe("translating zh-HK string: 沒有設定物件變數或 With 區塊變數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("沒有設定物件變數或 With 區塊變數", function (err, _translation) {
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
describe("translating zh-HK string: 沒有設定 For 迴圈的初始值", function () {
	var translation;
	before(function (done) {
		errorToEnglish("沒有設定 For 迴圈的初始值", function (err, _translation) {
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
describe("translating zh-HK string: Null 的使用不正確", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Null 的使用不正確", function (err, _translation) {
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
describe("translating zh-HK string: 無法產生必要的暫時檔案", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法產生必要的暫時檔案", function (err, _translation) {
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
describe("translating zh-HK string: 此處需要物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("此處需要物件", function (err, _translation) {
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
describe("translating zh-HK string: Automation 伺服程式無法產生物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automation 伺服程式無法產生物件", function (err, _translation) {
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
describe("translating zh-HK string: 該物件類別不支援 Automation", function () {
	var translation;
	before(function (done) {
		errorToEnglish("該物件類別不支援 Automation", function (err, _translation) {
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
describe("translating zh-HK string: 在 Automation 的運作過程中找不到檔案名稱或物件類別名稱", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在 Automation 的運作過程中找不到檔案名稱或物件類別名稱", function (err, _translation) {
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
describe("translating zh-HK string: 物件不支援此屬性或方法", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件不支援此屬性或方法", function (err, _translation) {
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
describe("translating zh-HK string: Automation 錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Automation 錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 物件不支援此動作", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件不支援此動作", function (err, _translation) {
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
describe("translating zh-HK string: 物件不支援指名引數(Named Argument)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件不支援指名引數(Named Argument)", function (err, _translation) {
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
describe("translating zh-HK string: 物件不支援目前的地區設定", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件不支援目前的地區設定", function (err, _translation) {
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
describe("translating zh-HK string: 找不到指名引數(Named Argument)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("找不到指名引數(Named Argument)", function (err, _translation) {
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
describe("translating zh-HK string: 引數不為選擇性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引數不為選擇性", function (err, _translation) {
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
describe("translating zh-HK string: 引數的個數錯誤或指定了不正確的屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引數的個數錯誤或指定了不正確的屬性", function (err, _translation) {
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
describe("translating zh-HK string: 此物件並非集合物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("此物件並非集合物件", function (err, _translation) {
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
describe("translating zh-HK string: 找不到指定的 DLL 函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("找不到指定的 DLL 函數", function (err, _translation) {
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
describe("translating zh-HK string: 此變數使用了 JavaScript 不支援的 Automation 型態", function () {
	var translation;
	before(function (done) {
		errorToEnglish("此變數使用了 JavaScript 不支援的 Automation 型態", function (err, _translation) {
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
describe("translating zh-HK string: 遠端伺服器不存在或無法使用", function () {
	var translation;
	before(function (done) {
		errorToEnglish("遠端伺服器不存在或無法使用", function (err, _translation) {
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
describe("translating zh-HK string: 無法指定至變數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法指定至變數", function (err, _translation) {
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
describe("translating zh-HK string: 物件無法安全地於 Scripting 中使用", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件無法安全地於 Scripting 中使用", function (err, _translation) {
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
describe("translating zh-HK string: 物件無法安全地初始化", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件無法安全地初始化", function (err, _translation) {
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
describe("translating zh-HK string: 物件無法安全地建立", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件無法安全地建立", function (err, _translation) {
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
describe("translating zh-HK string: 發生例外情況", function () {
	var translation;
	before(function (done) {
		errorToEnglish("發生例外情況", function (err, _translation) {
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
describe("translating zh-HK string: 記憶體不足", function () {
	var translation;
	before(function (done) {
		errorToEnglish("記憶體不足", function (err, _translation) {
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
describe("translating zh-HK string: 語法錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("語法錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 ':'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 ':'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 ';'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 ';'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 '('", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 '('", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 ')'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 ']'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 ']'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 '{'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 '{'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 '}'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 '}'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有識別項", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有識別項", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 '='", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 '='", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 '/'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 '/'", function (err, _translation) {
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
describe("translating zh-HK string: 不正確的數字", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不正確的數字", function (err, _translation) {
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
describe("translating zh-HK string: 字元無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("字元無效", function (err, _translation) {
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
describe("translating zh-HK string: 無法判定字串常數的結尾", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法判定字串常數的結尾", function (err, _translation) {
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
describe("translating zh-HK string: 無法判定程式註解的結尾", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法判定程式註解的結尾", function (err, _translation) {
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
describe("translating zh-HK string: 不能在函數之外使用 'return' 陳述式", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不能在函數之外使用 'return' 陳述式", function (err, _translation) {
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
describe("translating zh-HK string: 不能在迴圈之外使用 'break'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不能在迴圈之外使用 'break'", function (err, _translation) {
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
describe("translating zh-HK string: 不能在迴圈之外使用 'continue'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不能在迴圈之外使用 'continue'", function (err, _translation) {
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
describe("translating zh-HK string: 必須是十六進位制的數值", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須是十六進位制的數值", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 'while'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 'while'", function (err, _translation) {
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
describe("translating zh-HK string: 標籤被重新定義", function () {
	var translation;
	before(function (done) {
		errorToEnglish("標籤被重新定義", function (err, _translation) {
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
describe("translating zh-HK string: 標籤不存在", function () {
	var translation;
	before(function (done) {
		errorToEnglish("標籤不存在", function (err, _translation) {
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
describe("translating zh-HK string: 'switch' 陳述式中，'default' 僅能出現一次", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'switch' 陳述式中，'default' 僅能出現一次", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有識別項，字串或數字", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有識別項，字串或數字", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 '@end'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 '@end'", function (err, _translation) {
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
describe("translating zh-HK string: 關閉條件式編譯", function () {
	var translation;
	before(function (done) {
		errorToEnglish("關閉條件式編譯", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有常數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有常數", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 '@'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 '@'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 'catch'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 'catch'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 'var'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 'var'", function (err, _translation) {
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
describe("translating zh-HK string: 'throw' 必須接著一運算式，且於同一行程式碼", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'throw' 必須接著一運算式，且於同一行程式碼", function (err, _translation) {
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
describe("translating zh-HK string: 不可在 strict 模式中使用 'with' 陳述式", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可在 strict 模式中使用 'with' 陳述式", function (err, _translation) {
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
describe("translating zh-HK string: 不可在 strict 模式中使用重複的型式參數名稱", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可在 strict 模式中使用重複的型式參數名稱", function (err, _translation) {
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
describe("translating zh-HK string: 不可在 strict 模式中使用八進位數值常值與逸出字元", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可在 strict 模式中使用八進位數值常值與逸出字元", function (err, _translation) {
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
describe("translating zh-HK string: 在 strict 模式中使用 'eval' 無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在 strict 模式中使用 'eval' 無效", function (err, _translation) {
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
describe("translating zh-HK string: 在 strict 模式中使用 'arguments' 無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在 strict 模式中使用 'arguments' 無效", function (err, _translation) {
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
describe("translating zh-HK string: 在 strict 模式中不可對運算式呼叫 delete", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在 strict 模式中不可對運算式呼叫 delete", function (err, _translation) {
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
describe("translating zh-HK string: 在 strict 模式中不可有屬性的多項定義", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在 strict 模式中不可有屬性的多項定義", function (err, _translation) {
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
describe("translating zh-HK string: 在 strict 模式中，無法在陳述式或區塊中使用巢狀函式宣告。它們只能出現在頂層或直接出現在函式主體內。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在 strict 模式中，無法在陳述式或區塊中使用巢狀函式宣告。它們只能出現在頂層或直接出現在函式主體內。", function (err, _translation) {
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
describe("translating zh-HK string: 為識別碼使用關鍵字是無效的", function () {
	var translation;
	before(function (done) {
		errorToEnglish("為識別碼使用關鍵字是無效的", function (err, _translation) {
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
describe("translating zh-HK string: 為識別碼使用未來的保留字是無效的", function () {
	var translation;
	before(function (done) {
		errorToEnglish("為識別碼使用未來的保留字是無效的", function (err, _translation) {
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
describe("translating zh-HK string: 為識別碼使用未來的保留字是無效的。識別碼名稱在 strict 模式中是保留字。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("為識別碼使用未來的保留字是無效的。識別碼名稱在 strict 模式中是保留字。", function (err, _translation) {
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
describe("translating zh-HK string: Setter 函式必須有一個引數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Setter 函式必須有一個引數", function (err, _translation) {
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
describe("translating zh-HK string: JavaScript 編譯錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 編譯錯誤", function (err, _translation) {
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
describe("translating zh-HK string: JavaScript 執行階段錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 執行階段錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 未知的執行階段錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未知的執行階段錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 無法指定至 'this'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法指定至 'this'", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有數字", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有數字", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有函數", function (err, _translation) {
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
describe("translating zh-HK string: 無法指定為函數的結果", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法指定為函數的結果", function (err, _translation) {
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
describe("translating zh-HK string: 無法索引物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法索引物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有字串", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有字串", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 Date 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 Date 物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 指派的左側無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("指派的左側無效", function (err, _translation) {
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
describe("translating zh-HK string: 未定義的識別項", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未定義的識別項", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有布林值", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有布林值", function (err, _translation) {
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
describe("translating zh-HK string: 無法執行已被釋放的 Script", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法執行已被釋放的 Script", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件成員", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件成員", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 VBArray", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 JavaScript 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 JavaScript 物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 Enumerator 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 Enumerator 物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有通用運算式 (Regular Expression) 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有通用運算式 (Regular Expression) 物件", function (err, _translation) {
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
describe("translating zh-HK string: 在通用運算式 (Regular Expression) 中有語法錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("在通用運算式 (Regular Expression) 中有語法錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 未預期的次數符號", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未預期的次數符號", function (err, _translation) {
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
describe("translating zh-HK string: 通用(Regular) 運算式中，必須要有 ']'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("通用(Regular) 運算式中，必須要有 ']'", function (err, _translation) {
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
describe("translating zh-HK string: 通用(Regular) 運算式中，必須要有 ')'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("通用(Regular) 運算式中，必須要有 ')'", function (err, _translation) {
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
describe("translating zh-HK string: 不正確的字元集範圍", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不正確的字元集範圍", function (err, _translation) {
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
describe("translating zh-HK string: 已丟出(Throw) 一 例外事件但並未被接收(Catch)", function () {
	var translation;
	before(function (done) {
		errorToEnglish("已丟出(Throw) 一 例外事件但並未被接收(Catch)", function (err, _translation) {
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
describe("translating zh-HK string: 函數沒有一個正確的原型(Prototype) 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("函數沒有一個正確的原型(Prototype) 物件", function (err, _translation) {
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
describe("translating zh-HK string: 此 URI 含有一個不正確的字元", function () {
	var translation;
	before(function (done) {
		errorToEnglish("此 URI 含有一個不正確的字元", function (err, _translation) {
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
describe("translating zh-HK string: 此 URI 不是個正確編碼", function () {
	var translation;
	before(function (done) {
		errorToEnglish("此 URI 不是個正確編碼", function (err, _translation) {
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
describe("translating zh-HK string: 分數位的數值超出範圍", function () {
	var translation;
	before(function (done) {
		errorToEnglish("分數位的數值超出範圍", function (err, _translation) {
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
describe("translating zh-HK string: 此精算值是超出範圍的", function () {
	var translation;
	before(function (done) {
		errorToEnglish("此精算值是超出範圍的", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有陣列或引數物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有陣列或引數物件", function (err, _translation) {
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
describe("translating zh-HK string: 陣列長度必須是一有限的正整數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("陣列長度必須是一有限的正整數", function (err, _translation) {
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
describe("translating zh-HK string: 陣列長度必須被指定為一有限的正值", function () {
	var translation;
	before(function (done) {
		errorToEnglish("陣列長度必須被指定為一有限的正值", function (err, _translation) {
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
describe("translating zh-HK string: 需要有陣列或引數物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("需要有陣列或引數物件", function (err, _translation) {
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
describe("translating zh-HK string: 不支援數值引數中的循環參照", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不支援數值引數中的循環參照", function (err, _translation) {
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
describe("translating zh-HK string: 無效的取代子引數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的取代子引數", function (err, _translation) {
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
describe("translating zh-HK string: 引數清單太大，無法套用", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引數清單太大，無法套用", function (err, _translation) {
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
describe("translating zh-HK string: 重新宣告 const 屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("重新宣告 const 屬性", function (err, _translation) {
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
describe("translating zh-HK string: 無法設定物件成員", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法設定物件成員", function (err, _translation) {
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
describe("translating zh-HK string: 未在 strict 模式中定義此變數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未在 strict 模式中定義此變數", function (err, _translation) {
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
describe("translating zh-HK string: 不可在 strict 模式中存取函式或引數物件的 'caller' 屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可在 strict 模式中存取函式或引數物件的 'caller' 屬性", function (err, _translation) {
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
describe("translating zh-HK string: 不可在 strict 模式中存取引數物件的 'callee' 屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可在 strict 模式中存取引數物件的 'callee' 屬性", function (err, _translation) {
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
describe("translating zh-HK string: 不可在 strict 模式中指派唯讀屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可在 strict 模式中指派唯讀屬性", function (err, _translation) {
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
describe("translating zh-HK string: 不可建立無法延伸的物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可建立無法延伸的物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有函數", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有函數", function (err, _translation) {
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
describe("translating zh-HK string: 屬性不可同時具有存取子與值", function () {
	var translation;
	before(function (done) {
		errorToEnglish("屬性不可同時具有存取子與值", function (err, _translation) {
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
describe("translating zh-HK string: 'this' 為 null 或未經定義", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' 為 null 或未經定義", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有函數", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有字串", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有字串", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有布林值", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有布林值", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有日期", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有日期", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有數字", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有數字", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 VBArray", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 JavaScript 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 JavaScript 物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 Enumerator 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 Enumerator 物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 RegExp 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 RegExp 物件", function (err, _translation) {
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
describe("translating zh-HK string: 無效的函數引數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的函數引數", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 JavaScript 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 JavaScript 物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有函數", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有 VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有 VBArray", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 無效的 'length' 屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的 'length' 屬性", function (err, _translation) {
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
describe("translating zh-HK string: 必須要有陣列或引數物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須要有陣列或引數物件", function (err, _translation) {
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
describe("translating zh-HK string: 無效的運算元", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的運算元", function (err, _translation) {
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
describe("translating zh-HK string: 無效的運算元", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的運算元", function (err, _translation) {
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
describe("translating zh-HK string: 無效的屬性描述元", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的屬性描述元", function (err, _translation) {
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
describe("translating zh-HK string: 無法定義屬性: 物件不可延伸", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法定義屬性: 物件不可延伸", function (err, _translation) {
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
describe("translating zh-HK string: 無法重新定義不可設定的屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法重新定義不可設定的屬性", function (err, _translation) {
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
describe("translating zh-HK string: 無法修改不可寫入的屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法修改不可寫入的屬性", function (err, _translation) {
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
describe("translating zh-HK string: 無法修改屬性: 'length' 不可寫入", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法修改屬性: 'length' 不可寫入", function (err, _translation) {
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
describe("translating zh-HK string: 無法定義屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法定義屬性", function (err, _translation) {
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
describe("translating zh-HK string: 已指定型別的陣列建構函式引數無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("已指定型別的陣列建構函式引數無效", function (err, _translation) {
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
describe("translating zh-HK string: 'this' 不是已指定型別的陣列物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' 不是已指定型別的陣列物件", function (err, _translation) {
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
describe("translating zh-HK string: 建立已指定型別之陣列時指定的位移/長度無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("建立已指定型別之陣列時指定的位移/長度無效", function (err, _translation) {
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
describe("translating zh-HK string: 已指定型別之陣列子陣列方法中的開始/結束值無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("已指定型別之陣列子陣列方法中的開始/結束值無效", function (err, _translation) {
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
describe("translating zh-HK string: 已指定型別之陣列集中的來源無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("已指定型別之陣列集中的來源無效", function (err, _translation) {
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
describe("translating zh-HK string: 'this' 不是 DataView 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' 不是 DataView 物件", function (err, _translation) {
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
describe("translating zh-HK string: DataView 中的引數無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 中的引數無效", function (err, _translation) {
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
describe("translating zh-HK string: DataView 作業存取超過指定的緩衝區長度", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 作業存取超過指定的緩衝區長度", function (err, _translation) {
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
describe("translating zh-HK string: DataView 中的引數無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 中的引數無效", function (err, _translation) {
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
describe("translating zh-HK string: 無效的函式簽章", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的函式簽章", function (err, _translation) {
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
describe("translating zh-HK string: 無效的屬性簽章", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的屬性簽章", function (err, _translation) {
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
describe("translating zh-HK string: 無效的輸入參數型別", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的輸入參數型別", function (err, _translation) {
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
describe("translating zh-HK string: 無效的輸出參數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無效的輸出參數", function (err, _translation) {
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
describe("translating zh-HK string: 不允許在 strict 模式中存取函式的 'arguments' 屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不允許在 strict 模式中存取函式的 'arguments' 屬性", function (err, _translation) {
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
describe("translating zh-HK string: 必須是可檢查的物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須是可檢查的物件", function (err, _translation) {
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
describe("translating zh-HK string: 無法將引數的類型轉換為 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將引數的類型轉換為 'char'", function (err, _translation) {
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
describe("translating zh-HK string: 無法將引數的類型轉換為 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將引數的類型轉換為 'GUID'", function (err, _translation) {
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
describe("translating zh-HK string: 必須是 IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必須是 IInspectable", function (err, _translation) {
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
describe("translating zh-HK string: 無法將物件轉換為 struct: 物件缺少必要屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將物件轉換為 struct: 物件缺少必要屬性", function (err, _translation) {
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
describe("translating zh-HK string: 類型不詳", function () {
	var translation;
	before(function (done) {
		errorToEnglish("類型不詳", function (err, _translation) {
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
describe("translating zh-HK string: 呼叫函式時使用的引數太多", function () {
	var translation;
	before(function (done) {
		errorToEnglish("呼叫函式時使用的引數太多", function (err, _translation) {
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
describe("translating zh-HK string: 類型不是可建構的", function () {
	var translation;
	before(function (done) {
		errorToEnglish("類型不是可建構的", function (err, _translation) {
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
describe("translating zh-HK string: 無法將值轉換為 PropertyValue: PropertyValue 不支援此類型", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將值轉換為 PropertyValue: PropertyValue 不支援此類型", function (err, _translation) {
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
describe("translating zh-HK string: 無法將值轉換為 IInspectable: IInspectable 不支援此類型", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將值轉換為 IInspectable: IInspectable 不支援此類型", function (err, _translation) {
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
describe("translating zh-HK string: 無法將 Date 轉換為 Windows.Foundation.DateTime: 值超過有效範圍", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將 Date 轉換為 Windows.Foundation.DateTime: 值超過有效範圍", function (err, _translation) {
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
describe("translating zh-HK string: 無法將值轉換為 Windows.Foundation.TimeSpan: 值超過有效範圍", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將值轉換為 Windows.Foundation.TimeSpan: 值超過有效範圍", function (err, _translation) {
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
describe("translating zh-HK string: 對於已釋放之可檢查的物件的存取無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("對於已釋放之可檢查的物件的存取無效", function (err, _translation) {
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
describe("translating zh-HK string: 無法釋放已釋放的可檢查的物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法釋放已釋放的可檢查的物件", function (err, _translation) {
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
describe("translating zh-HK string: 'this' 不是預期的類型", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' 不是預期的類型", function (err, _translation) {
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
describe("translating zh-HK string: 為陣列指定的長度與大小不合法", function () {
	var translation;
	before(function (done) {
		errorToEnglish("為陣列指定的長度與大小不合法", function (err, _translation) {
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
describe("translating zh-HK string: 嘗試取得中繼資料資訊時發生意外失敗", function () {
	var translation;
	before(function (done) {
		errorToEnglish("嘗試取得中繼資料資訊時發生意外失敗", function (err, _translation) {
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
describe("translating zh-HK string: 狀態是「錯誤」，但 getResults 未傳回錯誤", function () {
	var translation;
	before(function (done) {
		errorToEnglish("狀態是「錯誤」，但 getResults 未傳回錯誤", function (err, _translation) {
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
describe("translating zh-HK string: 傳遞給已完成之處理常式的狀態參數遺失或無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("傳遞給已完成之處理常式的狀態參數遺失或無效", function (err, _translation) {
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
describe("translating zh-HK string: 傳遞給已完成之處理常式的傳送者參數遺失或無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("傳遞給已完成之處理常式的傳送者參數遺失或無效", function (err, _translation) {
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
describe("translating zh-HK string: 無限", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無限", function (err, _translation) {
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
describe("translating zh-HK string: -無限", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-無限", function (err, _translation) {
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
describe("translating zh-HK string: 物件沒有支援這個屬性或方法 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("物件沒有支援這個屬性或方法 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 函數 'MyDynamicTestString' 的引數不為選擇性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("函數 'MyDynamicTestString' 的引數不為選擇性", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個數字", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個數字", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個函數", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個可給予索引的物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個可給予索引的物件", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個字串", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個字串", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個日期物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個日期物件", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 是 null 或不是一個物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 是 null 或不是一個物件", function (err, _translation) {
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
describe("translating zh-HK string: 無法指定至 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法指定至 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 未經定義", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 未經定義", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 並非為布林值", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 並非為布林值", function (err, _translation) {
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
describe("translating zh-HK string: 無法刪除 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法刪除 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個 VBArray", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個 VBArray", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是 JavaScript 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是 JavaScript 物件", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個列舉值物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個列舉值物件", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 不是一個通用運算式 (Regular Expression) 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 不是一個通用運算式 (Regular Expression) 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString 不是陣列或引數物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString 不是陣列或引數物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString 不是陣列物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString 不是陣列物件", function (err, _translation) {
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
describe("translating zh-HK string: 屬性描述元上的 'MyDynamicTestString' 屬性在此物件上不可設為 'true'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("屬性描述元上的 'MyDynamicTestString' 屬性在此物件上不可設為 'true'", function (err, _translation) {
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
describe("translating zh-HK string: 屬性描述元上的 'MyDynamicTestString' 屬性在此物件上不可設為 'false'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("屬性描述元上的 'MyDynamicTestString' 屬性在此物件上不可設為 'false'", function (err, _translation) {
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
describe("translating zh-HK string: 重新宣告常數 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("重新宣告常數 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 不可在 strict 模式中對 'MyDynamicTestString' 呼叫 delete", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不可在 strict 模式中對 'MyDynamicTestString' 呼叫 delete", function (err, _translation) {
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
describe("translating zh-HK string: 無法設定未定義或 Null 參考的屬性 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法設定未定義或 Null 參考的屬性 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 無法取得未定義或 Null 參考的屬性 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法取得未定義或 Null 參考的屬性 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 無法刪除未定義或 Null 參考的屬性 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法刪除未定義或 Null 參考的屬性 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 無法存取屬性 'MyDynamicTestString': 型別 'VarDate' 不支援使用者定義的屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法存取屬性 'MyDynamicTestString': 型別 'VarDate' 不支援使用者定義的屬性", function (err, _translation) {
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
describe("translating zh-HK string: 屬性 'MyDynamicTestString' 的值不是 Function 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("屬性 'MyDynamicTestString' 的值不是 Function 物件", function (err, _translation) {
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
describe("translating zh-HK string: 屬性 'MyDynamicTestString' 的值為 null 或未經定義，且不是 Function 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("屬性 'MyDynamicTestString' 的值為 null 或未經定義，且不是 Function 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 為 null 或未經定義", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 為 null 或未經定義", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 Function 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 Function 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 String 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 String 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 Boolean 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 Boolean 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 Date 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 Date 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 Number 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 Number 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 VBArray 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 VBArray 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 JavaScript 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 JavaScript 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 Enumerator 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 Enumerator 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是 RegExp 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是 RegExp 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 無效的引數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 無效的引數", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 引數不是物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引數不是物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 引數不是 JavaScript 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引數不是 JavaScript 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 引數不是 Function 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引數不是 Function 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 引數不是 VBArray 物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引數不是 VBArray 物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 引數為 null 或未經定義", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引數為 null 或未經定義", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 引數不是物件或不是 null", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引數不是物件或不是 null", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 引數不具有效的 'length' 屬性", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引數不具有效的 'length' 屬性", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 必須要有陣列或引數物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 必須要有陣列或引數物件", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 的運算元無效: 必須要有物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 的運算元無效: 必須要有物件", function (err, _translation) {
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
describe("translating zh-HK string: 'MyDynamicTestString' 的運算元無效: 必須要有函數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 的運算元無效: 必須要有函數", function (err, _translation) {
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
describe("translating zh-HK string: 屬性 'MyDynamicTestString' 的描述子無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("屬性 'MyDynamicTestString' 的描述子無效", function (err, _translation) {
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
describe("translating zh-HK string: 無法定義屬性 'MyDynamicTestString': 物件不可延伸", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法定義屬性 'MyDynamicTestString': 物件不可延伸", function (err, _translation) {
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
describe("translating zh-HK string: 無法重新定義不可設定的屬性 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法重新定義不可設定的屬性 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 無法修改不可寫入的屬性 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法修改不可寫入的屬性 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 無法修改屬性 'MyDynamicTestString': 'length' 是不可寫入的", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法修改屬性 'MyDynamicTestString': 'length' 是不可寫入的", function (err, _translation) {
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
describe("translating zh-HK string: 無法定義屬性 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法定義屬性 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 未在 DataView 方法中指定必要引數 MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未在 DataView 方法中指定必要引數 MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-HK string: DataView 建構函式引數 MyDynamicTestString 無效", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 建構函式引數 MyDynamicTestString 無效", function (err, _translation) {
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
describe("translating zh-HK string: 函式 'MyDynamicTestString' 具有無效的簽章，因此無法呼叫", function () {
	var translation;
	before(function (done) {
		errorToEnglish("函式 'MyDynamicTestString' 具有無效的簽章，因此無法呼叫", function (err, _translation) {
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
describe("translating zh-HK string: 屬性 'MyDynamicTestString' 具有無效的簽章，因此無法存取", function () {
	var translation;
	before(function (done) {
		errorToEnglish("屬性 'MyDynamicTestString' 具有無效的簽章，因此無法存取", function (err, _translation) {
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
describe("translating zh-HK string: 不支援使用預設介面為 Windows.Foundation.IPropertyValue 的執行階段類別 MyDynamicTestString 做為輸入參數型別", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不支援使用預設介面為 Windows.Foundation.IPropertyValue 的執行階段類別 MyDynamicTestString 做為輸入參數型別", function (err, _translation) {
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
describe("translating zh-HK string: 不支援使用介面為 Windows.Foundation.IPropertyValue (執行階段類別名稱為 MyDynamicTestString) 的物件做為輸出參數", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不支援使用介面為 Windows.Foundation.IPropertyValue (執行階段類別名稱為 MyDynamicTestString) 的物件做為輸出參數", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 'this' 不是可檢查的物件", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' 不是可檢查的物件", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 無法將引數的類型轉換為 'char'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 無法將引數的類型轉換為 'char'", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 無法將引數的類型轉換為 'GUID'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 無法將引數的類型轉換為 'GUID'", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 無法將傳回值轉換為 IInspectable", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 無法將傳回值轉換為 IInspectable", function (err, _translation) {
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
describe("translating zh-HK string: 無法將物件轉換為 struct: 物件缺少必要屬性 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將物件轉換為 struct: 物件缺少必要屬性 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: 找不到類型 'MyDynamicTestString'", function () {
	var translation;
	before(function (done) {
		errorToEnglish("找不到類型 'MyDynamicTestString'", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 呼叫函式時使用的引數太多", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 呼叫函式時使用的引數太多", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 類型不是可建構的", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 類型不是可建構的", function (err, _translation) {
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
describe("translating zh-HK string: 無法將值轉換為 PropertyValue: PropertyValue 不支援 MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將值轉換為 PropertyValue: PropertyValue 不支援 MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-HK string: 無法將值轉換為 IInspectable: IInspectable 不支援 MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無法將值轉換為 IInspectable: IInspectable 不支援 MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 可檢查的物件 'this' 已釋放，因此無法存取", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 可檢查的物件 'this' 已釋放，因此無法存取", function (err, _translation) {
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
describe("translating zh-HK string: 'this' 不是預期的類型: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' 不是預期的類型: MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-HK string: MyDynamicTestString: 嘗試取得中繼資料資訊時發生意外失敗", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 嘗試取得中繼資料資訊時發生意外失敗", function (err, _translation) {
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
describe("translating zh-HK string: 指定日期無法在目前地區設定的日曆樣式使用", function () {
	var translation;
	before(function (done) {
		errorToEnglish("指定日期無法在目前地區設定的日曆樣式使用", function (err, _translation) {
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
