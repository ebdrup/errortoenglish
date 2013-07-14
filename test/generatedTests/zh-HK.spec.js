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

    it("should return the english version: Invalid procedure call or argument", function () {
        expect(translation).to.equal("Invalid procedure call or argument");
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

    it("should return the english version: Overflow", function () {
        expect(translation).to.equal("Overflow");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Subscript out of range", function () {
        expect(translation).to.equal("Subscript out of range");
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

    it("should return the english version: This array is fixed or temporarily locked", function () {
        expect(translation).to.equal("This array is fixed or temporarily locked");
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

    it("should return the english version: Division by zero", function () {
        expect(translation).to.equal("Division by zero");
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

    it("should return the english version: Type mismatch", function () {
        expect(translation).to.equal("Type mismatch");
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

    it("should return the english version: Out of string space", function () {
        expect(translation).to.equal("Out of string space");
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

    it("should return the english version: Can't perform requested operation", function () {
        expect(translation).to.equal("Can't perform requested operation");
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

    it("should return the english version: Out of stack space", function () {
        expect(translation).to.equal("Out of stack space");
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

    it("should return the english version: Sub or Function not defined", function () {
        expect(translation).to.equal("Sub or Function not defined");
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

    it("should return the english version: Error in loading DLL", function () {
        expect(translation).to.equal("Error in loading DLL");
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

    it("should return the english version: Internal error", function () {
        expect(translation).to.equal("Internal error");
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

    it("should return the english version: Bad file name or number", function () {
        expect(translation).to.equal("Bad file name or number");
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

    it("should return the english version: File not found", function () {
        expect(translation).to.equal("File not found");
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

    it("should return the english version: Bad file mode", function () {
        expect(translation).to.equal("Bad file mode");
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

    it("should return the english version: File already open", function () {
        expect(translation).to.equal("File already open");
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

    it("should return the english version: Device I/O error", function () {
        expect(translation).to.equal("Device I/O error");
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

    it("should return the english version: File already exists", function () {
        expect(translation).to.equal("File already exists");
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

    it("should return the english version: Disk full", function () {
        expect(translation).to.equal("Disk full");
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

    it("should return the english version: Input past end of file", function () {
        expect(translation).to.equal("Input past end of file");
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

    it("should return the english version: Too many files", function () {
        expect(translation).to.equal("Too many files");
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

    it("should return the english version: Device unavailable", function () {
        expect(translation).to.equal("Device unavailable");
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

    it("should return the english version: Permission denied", function () {
        expect(translation).to.equal("Permission denied");
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

    it("should return the english version: Disk not ready", function () {
        expect(translation).to.equal("Disk not ready");
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

    it("should return the english version: Can't rename with different drive", function () {
        expect(translation).to.equal("Can't rename with different drive");
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

    it("should return the english version: Path/File access error", function () {
        expect(translation).to.equal("Path/File access error");
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

    it("should return the english version: Path not found", function () {
        expect(translation).to.equal("Path not found");
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

    it("should return the english version: Object variable or With block variable not set", function () {
        expect(translation).to.equal("Object variable or With block variable not set");
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

    it("should return the english version: For loop not initialized", function () {
        expect(translation).to.equal("For loop not initialized");
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

    it("should return the english version: Invalid use of Null", function () {
        expect(translation).to.equal("Invalid use of Null");
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

    it("should return the english version: Can't create necessary temporary file", function () {
        expect(translation).to.equal("Can't create necessary temporary file");
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

    it("should return the english version: Object required", function () {
        expect(translation).to.equal("Object required");
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

    it("should return the english version: Automation server can't create object", function () {
        expect(translation).to.equal("Automation server can't create object");
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

    it("should return the english version: Class doesn't support Automation", function () {
        expect(translation).to.equal("Class doesn't support Automation");
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

    it("should return the english version: File name or class name not found during Automation operation", function () {
        expect(translation).to.equal("File name or class name not found during Automation operation");
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

    it("should return the english version: Object doesn't support this property or method", function () {
        expect(translation).to.equal("Object doesn't support this property or method");
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

    it("should return the english version: Automation error", function () {
        expect(translation).to.equal("Automation error");
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

    it("should return the english version: Object doesn't support this action", function () {
        expect(translation).to.equal("Object doesn't support this action");
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

    it("should return the english version: Object doesn't support named arguments", function () {
        expect(translation).to.equal("Object doesn't support named arguments");
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

    it("should return the english version: Object doesn't support current locale setting", function () {
        expect(translation).to.equal("Object doesn't support current locale setting");
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

    it("should return the english version: Named argument not found", function () {
        expect(translation).to.equal("Named argument not found");
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

    it("should return the english version: Argument not optional", function () {
        expect(translation).to.equal("Argument not optional");
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

    it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
        expect(translation).to.equal("Wrong number of arguments or invalid property assignment");
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

    it("should return the english version: Object not a collection", function () {
        expect(translation).to.equal("Object not a collection");
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

    it("should return the english version: Specified DLL function not found", function () {
        expect(translation).to.equal("Specified DLL function not found");
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

    it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
        expect(translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

    it("should return the english version: The remote server machine does not exist or is unavailable", function () {
        expect(translation).to.equal("The remote server machine does not exist or is unavailable");
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

    it("should return the english version: Cannot assign to variable", function () {
        expect(translation).to.equal("Cannot assign to variable");
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

    it("should return the english version: Object not safe for scripting", function () {
        expect(translation).to.equal("Object not safe for scripting");
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

    it("should return the english version: Object not safe for initializing", function () {
        expect(translation).to.equal("Object not safe for initializing");
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

    it("should return the english version: Object not safe for creating", function () {
        expect(translation).to.equal("Object not safe for creating");
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

    it("should return the english version: An exception occurred", function () {
        expect(translation).to.equal("An exception occurred");
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

    it("should return the english version: Out of memory", function () {
        expect(translation).to.equal("Out of memory");
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

    it("should return the english version: Syntax error", function () {
        expect(translation).to.equal("Syntax error");
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

    it("should return the english version: Expected ':'", function () {
        expect(translation).to.equal("Expected ':'");
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

    it("should return the english version: Expected ';'", function () {
        expect(translation).to.equal("Expected ';'");
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

    it("should return the english version: Expected '('", function () {
        expect(translation).to.equal("Expected '('");
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

    it("should return the english version: Expected ')'", function () {
        expect(translation).to.equal("Expected ')'");
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

    it("should return the english version: Expected ']'", function () {
        expect(translation).to.equal("Expected ']'");
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

    it("should return the english version: Expected '{'", function () {
        expect(translation).to.equal("Expected '{'");
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

    it("should return the english version: Expected '}'", function () {
        expect(translation).to.equal("Expected '}'");
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

    it("should return the english version: Expected identifier", function () {
        expect(translation).to.equal("Expected identifier");
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

    it("should return the english version: Expected '='", function () {
        expect(translation).to.equal("Expected '='");
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

    it("should return the english version: Expected '/'", function () {
        expect(translation).to.equal("Expected '/'");
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

    it("should return the english version: Invalid number", function () {
        expect(translation).to.equal("Invalid number");
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

    it("should return the english version: Invalid character", function () {
        expect(translation).to.equal("Invalid character");
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

    it("should return the english version: Unterminated string constant", function () {
        expect(translation).to.equal("Unterminated string constant");
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

    it("should return the english version: Unterminated comment", function () {
        expect(translation).to.equal("Unterminated comment");
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

    it("should return the english version: 'return' statement outside of function", function () {
        expect(translation).to.equal("'return' statement outside of function");
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

    it("should return the english version: Can't have 'break' outside of loop", function () {
        expect(translation).to.equal("Can't have 'break' outside of loop");
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

    it("should return the english version: Can't have 'continue' outside of loop", function () {
        expect(translation).to.equal("Can't have 'continue' outside of loop");
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

    it("should return the english version: Expected hexadecimal digit", function () {
        expect(translation).to.equal("Expected hexadecimal digit");
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

    it("should return the english version: Expected 'while'", function () {
        expect(translation).to.equal("Expected 'while'");
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

    it("should return the english version: Label redefined", function () {
        expect(translation).to.equal("Label redefined");
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

    it("should return the english version: Label not found", function () {
        expect(translation).to.equal("Label not found");
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

    it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
        expect(translation).to.equal("'default' can only appear once in a 'switch' statement");
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

    it("should return the english version: Expected identifier, string or number", function () {
        expect(translation).to.equal("Expected identifier, string or number");
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

    it("should return the english version: Expected '@end'", function () {
        expect(translation).to.equal("Expected '@end'");
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

    it("should return the english version: Conditional compilation is turned off", function () {
        expect(translation).to.equal("Conditional compilation is turned off");
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

    it("should return the english version: Expected constant", function () {
        expect(translation).to.equal("Expected constant");
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

    it("should return the english version: Expected '@'", function () {
        expect(translation).to.equal("Expected '@'");
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

    it("should return the english version: Expected 'catch'", function () {
        expect(translation).to.equal("Expected 'catch'");
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

    it("should return the english version: Expected 'var'", function () {
        expect(translation).to.equal("Expected 'var'");
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

    it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
        expect(translation).to.equal("'throw' must be followed by an expression on the same source line");
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

    it("should return the english version: 'with' statements are not allowed in strict mode", function () {
        expect(translation).to.equal("'with' statements are not allowed in strict mode");
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

    it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
        expect(translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

    it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
        expect(translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

    it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'eval' in strict mode");
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

    it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
        expect(translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

    it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on expression not allowed in strict mode");
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

    it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
        expect(translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

    it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
        expect(translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

    it("should return the english version: The use of a keyword for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a keyword for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

    it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
        expect(translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

    it("should return the english version: Setter functions must have one argument", function () {
        expect(translation).to.equal("Setter functions must have one argument");
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

    it("should return the english version: JavaScript compilation error", function () {
        expect(translation).to.equal("JavaScript compilation error");
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

    it("should return the english version: JavaScript runtime error", function () {
        expect(translation).to.equal("JavaScript runtime error");
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

    it("should return the english version: Unknown runtime error", function () {
        expect(translation).to.equal("Unknown runtime error");
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

    it("should return the english version: Cannot assign to 'this'", function () {
        expect(translation).to.equal("Cannot assign to 'this'");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Cannot assign to a function result", function () {
        expect(translation).to.equal("Cannot assign to a function result");
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

    it("should return the english version: Cannot index object", function () {
        expect(translation).to.equal("Cannot index object");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Date object expected", function () {
        expect(translation).to.equal("Date object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid left-hand side in assignment", function () {
        expect(translation).to.equal("Invalid left-hand side in assignment");
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

    it("should return the english version: Undefined identifier", function () {
        expect(translation).to.equal("Undefined identifier");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Can't execute code from a freed script", function () {
        expect(translation).to.equal("Can't execute code from a freed script");
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

    it("should return the english version: Object member expected", function () {
        expect(translation).to.equal("Object member expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: Regular Expression object expected", function () {
        expect(translation).to.equal("Regular Expression object expected");
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

    it("should return the english version: Syntax error in regular expression", function () {
        expect(translation).to.equal("Syntax error in regular expression");
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

    it("should return the english version: Unexpected quantifier", function () {
        expect(translation).to.equal("Unexpected quantifier");
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

    it("should return the english version: Expected ']' in regular expression", function () {
        expect(translation).to.equal("Expected ']' in regular expression");
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

    it("should return the english version: Expected ')' in regular expression", function () {
        expect(translation).to.equal("Expected ')' in regular expression");
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

    it("should return the english version: Invalid range in character set", function () {
        expect(translation).to.equal("Invalid range in character set");
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

    it("should return the english version: Exception thrown and not caught", function () {
        expect(translation).to.equal("Exception thrown and not caught");
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

    it("should return the english version: Function does not have a valid prototype object", function () {
        expect(translation).to.equal("Function does not have a valid prototype object");
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

    it("should return the english version: The URI to be encoded contains an invalid character", function () {
        expect(translation).to.equal("The URI to be encoded contains an invalid character");
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

    it("should return the english version: The URI to be decoded is not a valid encoding", function () {
        expect(translation).to.equal("The URI to be decoded is not a valid encoding");
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

    it("should return the english version: The number of fractional digits is out of range", function () {
        expect(translation).to.equal("The number of fractional digits is out of range");
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

    it("should return the english version: The precision is out of range", function () {
        expect(translation).to.equal("The precision is out of range");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Array length must be a finite positive integer", function () {
        expect(translation).to.equal("Array length must be a finite positive integer");
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

    it("should return the english version: Array length must be assigned a finite positive number", function () {
        expect(translation).to.equal("Array length must be assigned a finite positive number");
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

    it("should return the english version: Array object expected", function () {
        expect(translation).to.equal("Array object expected");
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

    it("should return the english version: Circular reference in value argument not supported", function () {
        expect(translation).to.equal("Circular reference in value argument not supported");
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

    it("should return the english version: Invalid replacer argument", function () {
        expect(translation).to.equal("Invalid replacer argument");
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

    it("should return the english version: Argument list too large to apply", function () {
        expect(translation).to.equal("Argument list too large to apply");
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

    it("should return the english version: Redeclaration of const property", function () {
        expect(translation).to.equal("Redeclaration of const property");
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

    it("should return the english version: Object member not configurable", function () {
        expect(translation).to.equal("Object member not configurable");
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

    it("should return the english version: Variable undefined in strict mode", function () {
        expect(translation).to.equal("Variable undefined in strict mode");
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

    it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

    it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

    it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
        expect(translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

    it("should return the english version: Cannot create property for a non-extensible object", function () {
        expect(translation).to.equal("Cannot create property for a non-extensible object");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: Property cannot have both accessors and a value", function () {
        expect(translation).to.equal("Property cannot have both accessors and a value");
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

    it("should return the english version: 'this' is null or undefined", function () {
        expect(translation).to.equal("'this' is null or undefined");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: String expected", function () {
        expect(translation).to.equal("String expected");
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

    it("should return the english version: Boolean expected", function () {
        expect(translation).to.equal("Boolean expected");
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

    it("should return the english version: Date expected", function () {
        expect(translation).to.equal("Date expected");
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

    it("should return the english version: Number expected", function () {
        expect(translation).to.equal("Number expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Enumerator object expected", function () {
        expect(translation).to.equal("Enumerator object expected");
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

    it("should return the english version: RegExp object expected", function () {
        expect(translation).to.equal("RegExp object expected");
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

    it("should return the english version: Invalid function argument", function () {
        expect(translation).to.equal("Invalid function argument");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: JavaScript object expected", function () {
        expect(translation).to.equal("JavaScript object expected");
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

    it("should return the english version: Function expected", function () {
        expect(translation).to.equal("Function expected");
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

    it("should return the english version: VBArray expected", function () {
        expect(translation).to.equal("VBArray expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Object expected", function () {
        expect(translation).to.equal("Object expected");
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

    it("should return the english version: Invalid 'length' property", function () {
        expect(translation).to.equal("Invalid 'length' property");
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

    it("should return the english version: Array or arguments object expected", function () {
        expect(translation).to.equal("Array or arguments object expected");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid Operand", function () {
        expect(translation).to.equal("Invalid Operand");
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

    it("should return the english version: Invalid property descriptor", function () {
        expect(translation).to.equal("Invalid property descriptor");
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

    it("should return the english version: Cannot define property: object is not extensible", function () {
        expect(translation).to.equal("Cannot define property: object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property");
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

    it("should return the english version: Cannot modify non-writable property", function () {
        expect(translation).to.equal("Cannot modify non-writable property");
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

    it("should return the english version: Cannot modify property: 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property: 'length' is not writable");
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

    it("should return the english version: Cannot define property", function () {
        expect(translation).to.equal("Cannot define property");
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

    it("should return the english version: Typed array constructor argument is invalid", function () {
        expect(translation).to.equal("Typed array constructor argument is invalid");
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

    it("should return the english version: 'this' is not a typed array object", function () {
        expect(translation).to.equal("'this' is not a typed array object");
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

    it("should return the english version: Invalid offset/length when creating typed array", function () {
        expect(translation).to.equal("Invalid offset/length when creating typed array");
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

    it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
        expect(translation).to.equal("Invalid begin/end value in typed array subarray method");
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

    it("should return the english version: Invalid source in typed array set", function () {
        expect(translation).to.equal("Invalid source in typed array set");
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

    it("should return the english version: 'this' is not a DataView object", function () {
        expect(translation).to.equal("'this' is not a DataView object");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: DataView operation access beyond specified buffer length", function () {
        expect(translation).to.equal("DataView operation access beyond specified buffer length");
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

    it("should return the english version: Invalid arguments in DataView", function () {
        expect(translation).to.equal("Invalid arguments in DataView");
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

    it("should return the english version: invalid function signature", function () {
        expect(translation).to.equal("invalid function signature");
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

    it("should return the english version: invalid property signature", function () {
        expect(translation).to.equal("invalid property signature");
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

    it("should return the english version: invalid input parameter type", function () {
        expect(translation).to.equal("invalid input parameter type");
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

    it("should return the english version: invalid ouput parameter", function () {
        expect(translation).to.equal("invalid ouput parameter");
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

    it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
        expect(translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

    it("should return the english version: Inspectable Object expected", function () {
        expect(translation).to.equal("Inspectable Object expected");
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

    it("should return the english version: Could not convert argument to type 'char'", function () {
        expect(translation).to.equal("Could not convert argument to type 'char'");
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

    it("should return the english version: Could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("Could not convert argument to type 'GUID'");
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

    it("should return the english version: IInspectable expected", function () {
        expect(translation).to.equal("IInspectable expected");
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

    it("should return the english version: Could not convert object to struct: object missing expected property", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property");
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

    it("should return the english version: Unknown type", function () {
        expect(translation).to.equal("Unknown type");
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

    it("should return the english version: Function called with too few arguments", function () {
        expect(translation).to.equal("Function called with too few arguments");
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

    it("should return the english version: Type is not constructible", function () {
        expect(translation).to.equal("Type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

    it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

    it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
        expect(translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

    it("should return the english version: Invalid access to already released Inspectable Object", function () {
        expect(translation).to.equal("Invalid access to already released Inspectable Object");
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

    it("should return the english version: Cannot release already released Inspectable Object", function () {
        expect(translation).to.equal("Cannot release already released Inspectable Object");
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

    it("should return the english version: 'this' is not of the expected type", function () {
        expect(translation).to.equal("'this' is not of the expected type");
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

    it("should return the english version: Illegal length and size specified for the array", function () {
        expect(translation).to.equal("Illegal length and size specified for the array");
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

    it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: Status is 'error', but getResults did not return an error", function () {
        expect(translation).to.equal("Status is 'error', but getResults did not return an error");
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

    it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

    it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
        expect(translation).to.equal("Missing or invalid sender parameter passed to completed handler");
    });
});
describe("translating zh-HK string: 6000", function () {
    var translation;
    before(function (done) {
        errorToEnglish("6000", function (err, _translation) {
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
describe("translating zh-HK string: 6001", function () {
    var translation;
    before(function (done) {
        errorToEnglish("6001", function (err, _translation) {
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

    it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

    it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
        expect(translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

    it("should return the english version: 'MyDynamicTestString' is not a number", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a number");
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

    it("should return the english version: 'MyDynamicTestString' is not a function", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a function");
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

    it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

    it("should return the english version: 'MyDynamicTestString' is not a string", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a string");
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

    it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a date object");
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

    it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is null or not an object");
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

    it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is undefined", function () {
        expect(translation).to.equal("'MyDynamicTestString' is undefined");
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

    it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a boolean");
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

    it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

    it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

    it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

    it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

    it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
        expect(translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

    it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

    it("should return the english version: MyDynamicTestString is not an Array object", function () {
        expect(translation).to.equal("MyDynamicTestString is not an Array object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

    it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
        expect(translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

    it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

    it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
        expect(translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

    it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
        expect(translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

    it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
        expect(translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

    it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
        expect(translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

    it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

    it("should return the english version: MyDynamicTestString: invalid argument", function () {
        expect(translation).to.equal("MyDynamicTestString: invalid argument");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object");
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

    it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

    it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

    it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

    it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

    it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
        expect(translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

    it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
        expect(translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

    it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
        expect(translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

    it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
        expect(translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

    it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

    it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

    it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
        expect(translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

    it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

    it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
        expect(translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

    it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
        expect(translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

    it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
        expect(translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

    it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
        expect(translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

    it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
        expect(translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

    it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
        expect(translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

    it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
        expect(translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

    it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

    it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
        expect(translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

    it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
        expect(translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

    it("should return the english version: Type 'MyDynamicTestString' not found", function () {
        expect(translation).to.equal("Type 'MyDynamicTestString' not found");
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

    it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
        expect(translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

    it("should return the english version: MyDynamicTestString: type is not constructible", function () {
        expect(translation).to.equal("MyDynamicTestString: type is not constructible");
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

    it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
        expect(translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

    it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
        expect(translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

    it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
        expect(translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

    it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
        expect(translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

    it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
        expect(translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

    it("should return the english version: The specified date is not available in the current locale's calendar", function () {
        expect(translation).to.equal("The specified date is not available in the current locale's calendar");
    });
});
