var errorToEnglish = require("../../lib/errortoenglish");
describe("translating zh-CN string: 无效的过程调用或参数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无效的过程调用或参数", function (err, _translation) {
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
describe("translating zh-CN string: 溢出", function () {
    var translation;
    before(function (done) {
        errorToEnglish("溢出", function (err, _translation) {
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
describe("translating zh-CN string: 内存不足", function () {
    var translation;
    before(function (done) {
        errorToEnglish("内存不足", function (err, _translation) {
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
describe("translating zh-CN string: 下标越界", function () {
    var translation;
    before(function (done) {
        errorToEnglish("下标越界", function (err, _translation) {
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
describe("translating zh-CN string: 该数组为定长的或临时被锁定", function () {
    var translation;
    before(function (done) {
        errorToEnglish("该数组为定长的或临时被锁定", function (err, _translation) {
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
describe("translating zh-CN string: 被零除", function () {
    var translation;
    before(function (done) {
        errorToEnglish("被零除", function (err, _translation) {
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
describe("translating zh-CN string: 类型不匹配", function () {
    var translation;
    before(function (done) {
        errorToEnglish("类型不匹配", function (err, _translation) {
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
describe("translating zh-CN string: 字符串空间不够", function () {
    var translation;
    before(function (done) {
        errorToEnglish("字符串空间不够", function (err, _translation) {
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
describe("translating zh-CN string: 不能执行所需的操作", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能执行所需的操作", function (err, _translation) {
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
describe("translating zh-CN string: 堆栈溢出", function () {
    var translation;
    before(function (done) {
        errorToEnglish("堆栈溢出", function (err, _translation) {
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
describe("translating zh-CN string: 未定义 Sub 或 Function", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未定义 Sub 或 Function", function (err, _translation) {
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
describe("translating zh-CN string: 加载 DLL 时出错", function () {
    var translation;
    before(function (done) {
        errorToEnglish("加载 DLL 时出错", function (err, _translation) {
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
describe("translating zh-CN string: 内部错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("内部错误", function (err, _translation) {
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
describe("translating zh-CN string: 错误的文件名或号码", function () {
    var translation;
    before(function (done) {
        errorToEnglish("错误的文件名或号码", function (err, _translation) {
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
describe("translating zh-CN string: 文件未找到", function () {
    var translation;
    before(function (done) {
        errorToEnglish("文件未找到", function (err, _translation) {
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
describe("translating zh-CN string: 错误的文件模式", function () {
    var translation;
    before(function (done) {
        errorToEnglish("错误的文件模式", function (err, _translation) {
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
describe("translating zh-CN string: 文件已经打开", function () {
    var translation;
    before(function (done) {
        errorToEnglish("文件已经打开", function (err, _translation) {
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
describe("translating zh-CN string: 设备 I/O 错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("设备 I/O 错误", function (err, _translation) {
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
describe("translating zh-CN string: 文件已存在", function () {
    var translation;
    before(function (done) {
        errorToEnglish("文件已存在", function (err, _translation) {
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
describe("translating zh-CN string: 磁盘已满", function () {
    var translation;
    before(function (done) {
        errorToEnglish("磁盘已满", function (err, _translation) {
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
describe("translating zh-CN string: 输入超出了文件尾", function () {
    var translation;
    before(function (done) {
        errorToEnglish("输入超出了文件尾", function (err, _translation) {
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
describe("translating zh-CN string: 文件过多", function () {
    var translation;
    before(function (done) {
        errorToEnglish("文件过多", function (err, _translation) {
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
describe("translating zh-CN string: 设备不可用", function () {
    var translation;
    before(function (done) {
        errorToEnglish("设备不可用", function (err, _translation) {
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
describe("translating zh-CN string: 没有权限", function () {
    var translation;
    before(function (done) {
        errorToEnglish("没有权限", function (err, _translation) {
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
describe("translating zh-CN string: 磁盘没有准备好", function () {
    var translation;
    before(function (done) {
        errorToEnglish("磁盘没有准备好", function (err, _translation) {
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
describe("translating zh-CN string: 重命名时不能带有其他驱动器符号", function () {
    var translation;
    before(function (done) {
        errorToEnglish("重命名时不能带有其他驱动器符号", function (err, _translation) {
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
describe("translating zh-CN string: 路径/文件访问错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("路径/文件访问错误", function (err, _translation) {
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
describe("translating zh-CN string: 路径未找到", function () {
    var translation;
    before(function (done) {
        errorToEnglish("路径未找到", function (err, _translation) {
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
describe("translating zh-CN string: 对象变量或 With 块变量未设置", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象变量或 With 块变量未设置", function (err, _translation) {
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
describe("translating zh-CN string: For 循环未初始化", function () {
    var translation;
    before(function (done) {
        errorToEnglish("For 循环未初始化", function (err, _translation) {
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
describe("translating zh-CN string: 无效使用 Null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无效使用 Null", function (err, _translation) {
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
describe("translating zh-CN string: 不能创建所需的临时文件", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能创建所需的临时文件", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: Automation 服务器不能创建对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Automation 服务器不能创建对象", function (err, _translation) {
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
describe("translating zh-CN string: 类不能支持 Automation 操作", function () {
    var translation;
    before(function (done) {
        errorToEnglish("类不能支持 Automation 操作", function (err, _translation) {
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
describe("translating zh-CN string: Automation 操作中文件名或类名未找到", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Automation 操作中文件名或类名未找到", function (err, _translation) {
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
describe("translating zh-CN string: 对象不支持此属性或方法", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不支持此属性或方法", function (err, _translation) {
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
describe("translating zh-CN string: Automation 操作错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Automation 操作错误", function (err, _translation) {
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
describe("translating zh-CN string: 对象不支持此操作", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不支持此操作", function (err, _translation) {
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
describe("translating zh-CN string: 对象不支持已命名参数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不支持已命名参数", function (err, _translation) {
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
describe("translating zh-CN string: 对象不支持当前区域设置选项", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不支持当前区域设置选项", function (err, _translation) {
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
describe("translating zh-CN string: 未找到已命名参数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未找到已命名参数", function (err, _translation) {
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
describe("translating zh-CN string: 参数是必选项", function () {
    var translation;
    before(function (done) {
        errorToEnglish("参数是必选项", function (err, _translation) {
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
describe("translating zh-CN string: 错误的参数个数或无效的参数属性值", function () {
    var translation;
    before(function (done) {
        errorToEnglish("错误的参数个数或无效的参数属性值", function (err, _translation) {
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
describe("translating zh-CN string: 对象不是一个集合", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不是一个集合", function (err, _translation) {
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
describe("translating zh-CN string: 未找到指定的 DLL 函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未找到指定的 DLL 函数", function (err, _translation) {
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
describe("translating zh-CN string: 变量使用了一个 JavaScript 中不支持的 Automation 类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("变量使用了一个 JavaScript 中不支持的 Automation 类型", function (err, _translation) {
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
describe("translating zh-CN string: 远程服务器不存在或不可用", function () {
    var translation;
    before(function (done) {
        errorToEnglish("远程服务器不存在或不可用", function (err, _translation) {
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
describe("translating zh-CN string: 不能给变量赋值", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能给变量赋值", function (err, _translation) {
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
describe("translating zh-CN string: 对象不能安全地使用 Script 编程", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不能安全地使用 Script 编程", function (err, _translation) {
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
describe("translating zh-CN string: 对象不能安全初始化", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不能安全初始化", function (err, _translation) {
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
describe("translating zh-CN string: 对象不能安全创建", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不能安全创建", function (err, _translation) {
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
describe("translating zh-CN string: 出现一个意外错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("出现一个意外错误", function (err, _translation) {
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
describe("translating zh-CN string: 内存不足", function () {
    var translation;
    before(function (done) {
        errorToEnglish("内存不足", function (err, _translation) {
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
describe("translating zh-CN string: 语法错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("语法错误", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 ':'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 ':'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 ';'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 ';'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 '('", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 '('", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 ')'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 ']'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 '{'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 '{'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 '}'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 '}'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少标识符", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少标识符", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 '='", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 '='", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 '/'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 '/'", function (err, _translation) {
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
describe("translating zh-CN string: 无效数字", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无效数字", function (err, _translation) {
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
describe("translating zh-CN string: 无效字符", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无效字符", function (err, _translation) {
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
describe("translating zh-CN string: 未结束的字符串常量", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未结束的字符串常量", function (err, _translation) {
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
describe("translating zh-CN string: 注释未结束", function () {
    var translation;
    before(function (done) {
        errorToEnglish("注释未结束", function (err, _translation) {
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
describe("translating zh-CN string: 'return' 语句在函数之外", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'return' 语句在函数之外", function (err, _translation) {
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
describe("translating zh-CN string: 循环之外不能有 'break'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("循环之外不能有 'break'", function (err, _translation) {
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
describe("translating zh-CN string: 循环之外不能有 'continue'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("循环之外不能有 'continue'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少十六进制数字", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少十六进制数字", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 'while'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 'while'", function (err, _translation) {
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
describe("translating zh-CN string: 标签重复定义", function () {
    var translation;
    before(function (done) {
        errorToEnglish("标签重复定义", function (err, _translation) {
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
describe("translating zh-CN string: 标签未找到", function () {
    var translation;
    before(function (done) {
        errorToEnglish("标签未找到", function (err, _translation) {
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
describe("translating zh-CN string: 'default' 只能在 'switch' 语句中出现一次", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'default' 只能在 'switch' 语句中出现一次", function (err, _translation) {
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
describe("translating zh-CN string: 缺少标识符、字符串或数字", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少标识符、字符串或数字", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 '@end'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 '@end'", function (err, _translation) {
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
describe("translating zh-CN string: 条件编译已关闭", function () {
    var translation;
    before(function (done) {
        errorToEnglish("条件编译已关闭", function (err, _translation) {
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
describe("translating zh-CN string: 缺少常量", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少常量", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 '@'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 '@'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 'catch'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 'catch'", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 'var'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 'var'", function (err, _translation) {
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
describe("translating zh-CN string: “throw”的后面必须在同一行跟有一个表达式", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“throw”的后面必须在同一行跟有一个表达式", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许使用“with”语句", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许使用“with”语句", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许正式参数名称重复", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许正式参数名称重复", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许使用八进制数字参数和转义字符", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许使用八进制数字参数和转义字符", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下“eval”的用法无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下“eval”的用法无效", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下“arguments”的用法无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下“arguments”的用法无效", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许对表达式调用 Delete", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许对表达式调用 Delete", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许一个属性有多个定义", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许一个属性有多个定义", function (err, _translation) {
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
describe("translating zh-CN string: 在严格模式下，函数声明无法嵌套在语句或块内。这些声明仅出现在顶级或直接出现在函数体内。", function () {
    var translation;
    before(function (done) {
        errorToEnglish("在严格模式下，函数声明无法嵌套在语句或块内。这些声明仅出现在顶级或直接出现在函数体内。", function (err, _translation) {
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
describe("translating zh-CN string: 对标识符使用关键字无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对标识符使用关键字无效", function (err, _translation) {
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
describe("translating zh-CN string: 对标识符使用日后保留字词无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对标识符使用日后保留字词无效", function (err, _translation) {
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
describe("translating zh-CN string: 对标识符使用日后保留字词无效。在严格模式下会保留标识符名称。", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对标识符使用日后保留字词无效。在严格模式下会保留标识符名称。", function (err, _translation) {
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
describe("translating zh-CN string: Setter 函数必须具有一个参数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Setter 函数必须具有一个参数", function (err, _translation) {
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
describe("translating zh-CN string: JavaScript 编译错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("JavaScript 编译错误", function (err, _translation) {
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
describe("translating zh-CN string: JavaScript 运行时错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("JavaScript 运行时错误", function (err, _translation) {
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
describe("translating zh-CN string: 未知的运行时错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未知的运行时错误", function (err, _translation) {
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
describe("translating zh-CN string: 不能给 'this' 赋值", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能给 'this' 赋值", function (err, _translation) {
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
describe("translating zh-CN string: 缺少数字", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少数字", function (err, _translation) {
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
describe("translating zh-CN string: 缺少函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少函数", function (err, _translation) {
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
describe("translating zh-CN string: 不能给函数返回值赋值", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能给函数返回值赋值", function (err, _translation) {
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
describe("translating zh-CN string: 不能检索对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能检索对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少字符串", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少字符串", function (err, _translation) {
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
describe("translating zh-CN string: 缺少日期对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少日期对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 赋值左侧无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("赋值左侧无效", function (err, _translation) {
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
describe("translating zh-CN string: 未定义标识符", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未定义标识符", function (err, _translation) {
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
describe("translating zh-CN string: 缺少布尔变量", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少布尔变量", function (err, _translation) {
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
describe("translating zh-CN string: 不能执行已释放 Script 的代码", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能执行已释放 Script 的代码", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象成员", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象成员", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 VBArray", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 JavaScript 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 JavaScript 对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少枚举器对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少枚举器对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少正则表达式对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少正则表达式对象", function (err, _translation) {
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
describe("translating zh-CN string: 正则表达式语法错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("正则表达式语法错误", function (err, _translation) {
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
describe("translating zh-CN string: 错误的数量词", function () {
    var translation;
    before(function (done) {
        errorToEnglish("错误的数量词", function (err, _translation) {
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
describe("translating zh-CN string: 正则表达式中缺少 ']'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("正则表达式中缺少 ']'", function (err, _translation) {
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
describe("translating zh-CN string: 正则表达式中缺少 ')'", function () {
    var translation;
    before(function (done) {
        errorToEnglish("正则表达式中缺少 ')'", function (err, _translation) {
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
describe("translating zh-CN string: 字符集越界", function () {
    var translation;
    before(function (done) {
        errorToEnglish("字符集越界", function (err, _translation) {
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
describe("translating zh-CN string: 引发了异常但未捕获", function () {
    var translation;
    before(function (done) {
        errorToEnglish("引发了异常但未捕获", function (err, _translation) {
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
describe("translating zh-CN string: 函数没有有效的原型对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("函数没有有效的原型对象", function (err, _translation) {
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
describe("translating zh-CN string: 被编码的 URI 中包含非法字符", function () {
    var translation;
    before(function (done) {
        errorToEnglish("被编码的 URI 中包含非法字符", function (err, _translation) {
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
describe("translating zh-CN string: 被解码的 URI 不是合法的编码", function () {
    var translation;
    before(function (done) {
        errorToEnglish("被解码的 URI 不是合法的编码", function (err, _translation) {
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
describe("translating zh-CN string: 小数位数字越界", function () {
    var translation;
    before(function (done) {
        errorToEnglish("小数位数字越界", function (err, _translation) {
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
describe("translating zh-CN string: 精度越界", function () {
    var translation;
    before(function (done) {
        errorToEnglish("精度越界", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 Array 或 arguments 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 Array 或 arguments 对象", function (err, _translation) {
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
describe("translating zh-CN string: 数组长度必须为有限正整数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("数组长度必须为有限正整数", function (err, _translation) {
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
describe("translating zh-CN string: 数组长度必须赋值为有限正数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("数组长度必须赋值为有限正数", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 Array 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 Array 对象", function (err, _translation) {
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
describe("translating zh-CN string: 不支持在值参数中进行循环引用", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不支持在值参数中进行循环引用", function (err, _translation) {
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
describe("translating zh-CN string: 无效的替换器参数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无效的替换器参数", function (err, _translation) {
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
describe("translating zh-CN string: 参数列表太大，无法应用", function () {
    var translation;
    before(function (done) {
        errorToEnglish("参数列表太大，无法应用", function (err, _translation) {
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
describe("translating zh-CN string: 重新声明常量属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("重新声明常量属性", function (err, _translation) {
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
describe("translating zh-CN string: 无法配置对象成员", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法配置对象成员", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下未定义变量", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下未定义变量", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许访问函数或参数对象的“caller”属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许访问函数或参数对象的“caller”属性", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许访问参数对象的“callee”属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许访问参数对象的“callee”属性", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许分配到只读属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许分配到只读属性", function (err, _translation) {
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
describe("translating zh-CN string: 无法为不可扩展的对象创建属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法为不可扩展的对象创建属性", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少函数", function (err, _translation) {
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
describe("translating zh-CN string: 缺少函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少函数", function (err, _translation) {
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
describe("translating zh-CN string: 属性不能同时具有取值函数和值", function () {
    var translation;
    before(function (done) {
        errorToEnglish("属性不能同时具有取值函数和值", function (err, _translation) {
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
describe("translating zh-CN string: 'this' 为 null 或未定义", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' 为 null 或未定义", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少函数", function (err, _translation) {
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
describe("translating zh-CN string: 缺少字符串", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少字符串", function (err, _translation) {
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
describe("translating zh-CN string: 缺少布尔变量", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少布尔变量", function (err, _translation) {
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
describe("translating zh-CN string: 缺少日期", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少日期", function (err, _translation) {
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
describe("translating zh-CN string: 缺少数字", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少数字", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 VBArray", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 JavaScript 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 JavaScript 对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少枚举器对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少枚举器对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 RegExp 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 RegExp 对象", function (err, _translation) {
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
describe("translating zh-CN string: 函数参数无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("函数参数无效", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 JavaScript 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 JavaScript 对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少函数", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 VBArray", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: 缺少对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少对象", function (err, _translation) {
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
describe("translating zh-CN string: “length”属性无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“length”属性无效", function (err, _translation) {
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
describe("translating zh-CN string: 缺少 Array 或 arguments 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("缺少 Array 或 arguments 对象", function (err, _translation) {
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
describe("translating zh-CN string: 操作数无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("操作数无效", function (err, _translation) {
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
describe("translating zh-CN string: 操作数无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("操作数无效", function (err, _translation) {
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
describe("translating zh-CN string: 属性描述符无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("属性描述符无效", function (err, _translation) {
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
describe("translating zh-CN string: 无法定义属性: 对象不可扩展", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法定义属性: 对象不可扩展", function (err, _translation) {
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
describe("translating zh-CN string: 无法重新定义不可配置的属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法重新定义不可配置的属性", function (err, _translation) {
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
describe("translating zh-CN string: 无法修改不可写的属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法修改不可写的属性", function (err, _translation) {
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
describe("translating zh-CN string: 无法修改属性:“length”不可写", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法修改属性:“length”不可写", function (err, _translation) {
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
describe("translating zh-CN string: 无法定义属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法定义属性", function (err, _translation) {
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
describe("translating zh-CN string: 类型化数组构造函数参数无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("类型化数组构造函数参数无效", function (err, _translation) {
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
describe("translating zh-CN string: “this”不是类型化数组对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“this”不是类型化数组对象", function (err, _translation) {
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
describe("translating zh-CN string: 在创建类型化数组时，偏移/长度无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("在创建类型化数组时，偏移/长度无效", function (err, _translation) {
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
describe("translating zh-CN string: 类型化数组子数组方法中的开始/结束值无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("类型化数组子数组方法中的开始/结束值无效", function (err, _translation) {
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
describe("translating zh-CN string: 类型化数组集中的源无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("类型化数组集中的源无效", function (err, _translation) {
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
describe("translating zh-CN string: “this”不是 DataView 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“this”不是 DataView 对象", function (err, _translation) {
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
describe("translating zh-CN string: DataView 中的参数无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView 中的参数无效", function (err, _translation) {
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
describe("translating zh-CN string: DataView 操作访问超出指定的缓冲区长度", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView 操作访问超出指定的缓冲区长度", function (err, _translation) {
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
describe("translating zh-CN string: DataView 中的参数无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView 中的参数无效", function (err, _translation) {
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
describe("translating zh-CN string: 无效的函数签名", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无效的函数签名", function (err, _translation) {
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
describe("translating zh-CN string: 无效的属性签名", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无效的属性签名", function (err, _translation) {
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
describe("translating zh-CN string: 输入参数类型无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("输入参数类型无效", function (err, _translation) {
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
describe("translating zh-CN string: 输出参数无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("输出参数无效", function (err, _translation) {
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
describe("translating zh-CN string: 在严格模式下不允许访问函数的 \"arguments\" 属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("在严格模式下不允许访问函数的 \"arguments\" 属性", function (err, _translation) {
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
describe("translating zh-CN string: 应为 Inspectable 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("应为 Inspectable 对象", function (err, _translation) {
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
describe("translating zh-CN string: 无法将参数转换为 \"char\" 类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将参数转换为 \"char\" 类型", function (err, _translation) {
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
describe("translating zh-CN string: 无法将参数转换为 \"GUID\" 类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将参数转换为 \"GUID\" 类型", function (err, _translation) {
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
describe("translating zh-CN string: 应为 IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("应为 IInspectable", function (err, _translation) {
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
describe("translating zh-CN string: 无法将对象转换为结构: 该对象缺少应有的属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将对象转换为结构: 该对象缺少应有的属性", function (err, _translation) {
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
describe("translating zh-CN string: 未知类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未知类型", function (err, _translation) {
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
describe("translating zh-CN string: 使用过少的参数调用函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("使用过少的参数调用函数", function (err, _translation) {
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
describe("translating zh-CN string: 类型不可构造", function () {
    var translation;
    before(function (done) {
        errorToEnglish("类型不可构造", function (err, _translation) {
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
describe("translating zh-CN string: 无法将值转换为 PropertyValue: PropertyValue 不支持类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将值转换为 PropertyValue: PropertyValue 不支持类型", function (err, _translation) {
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
describe("translating zh-CN string: 无法将值转换为 IInspectable: IInspectable 不支持类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将值转换为 IInspectable: IInspectable 不支持类型", function (err, _translation) {
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
describe("translating zh-CN string: 无法将 Date 转换为 Windows.Foundation.DateTime: 值超出有效范围", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将 Date 转换为 Windows.Foundation.DateTime: 值超出有效范围", function (err, _translation) {
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
describe("translating zh-CN string: 无法将值转换为 Windows.Foundation.TimeSpan: 值超出有效范围", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将值转换为 Windows.Foundation.TimeSpan: 值超出有效范围", function (err, _translation) {
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
describe("translating zh-CN string: 对已释放的 Inspectable 对象的访问无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对已释放的 Inspectable 对象的访问无效", function (err, _translation) {
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
describe("translating zh-CN string: 无法释放已释放的 Inspectable 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法释放已释放的 Inspectable 对象", function (err, _translation) {
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
describe("translating zh-CN string: 'this' 不是所需的类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' 不是所需的类型", function (err, _translation) {
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
describe("translating zh-CN string: 为数组指定的长度和大小无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("为数组指定的长度和大小无效", function (err, _translation) {
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
describe("translating zh-CN string: 尝试获取元数据信息时发生意外故障", function () {
    var translation;
    before(function (done) {
        errorToEnglish("尝试获取元数据信息时发生意外故障", function (err, _translation) {
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
describe("translating zh-CN string: 状态为 'error'，但 getResults 未返回错误", function () {
    var translation;
    before(function (done) {
        errorToEnglish("状态为 'error'，但 getResults 未返回错误", function (err, _translation) {
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
describe("translating zh-CN string: 传递给完成的处理程序的状态参数丢失或无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("传递给完成的处理程序的状态参数丢失或无效", function (err, _translation) {
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
describe("translating zh-CN string: 传递给完成的处理程序的发送方参数丢失或无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("传递给完成的处理程序的发送方参数丢失或无效", function (err, _translation) {
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
describe("translating zh-CN string: 正无穷大", function () {
    var translation;
    before(function (done) {
        errorToEnglish("正无穷大", function (err, _translation) {
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
describe("translating zh-CN string: 负无穷大", function () {
    var translation;
    before(function (done) {
        errorToEnglish("负无穷大", function (err, _translation) {
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
describe("translating zh-CN string: 对象不支持“MyDynamicTestString”属性或方法", function () {
    var translation;
    before(function (done) {
        errorToEnglish("对象不支持“MyDynamicTestString”属性或方法", function (err, _translation) {
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
describe("translating zh-CN string: 函数“MyDynamicTestString”的参数是必需的", function () {
    var translation;
    before(function (done) {
        errorToEnglish("函数“MyDynamicTestString”的参数是必需的", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是数字", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是数字", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是函数", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是可索引的对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是可索引的对象", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是字符串", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是字符串", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是日期对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是日期对象", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”为 null 或不是对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”为 null 或不是对象", function (err, _translation) {
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
describe("translating zh-CN string: 不能给“MyDynamicTestString”赋值", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能给“MyDynamicTestString”赋值", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”未定义", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”未定义", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是布尔变量", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是布尔变量", function (err, _translation) {
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
describe("translating zh-CN string: 不能删除“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不能删除“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是 VBArray", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是 VBArray", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是 JavaScript 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是 JavaScript 对象", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是枚举器对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是枚举器对象", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”不是正则表达式对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”不是正则表达式对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString 不是 Array 或 arguments 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString 不是 Array 或 arguments 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString 不是 Array 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString 不是 Array 对象", function (err, _translation) {
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
describe("translating zh-CN string: 此对象的属性描述器的特性“MyDynamicTestString”不能设置为“true”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("此对象的属性描述器的特性“MyDynamicTestString”不能设置为“true”", function (err, _translation) {
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
describe("translating zh-CN string: 此对象的属性描述器的特性“MyDynamicTestString”不能设置为“false”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("此对象的属性描述器的特性“MyDynamicTestString”不能设置为“false”", function (err, _translation) {
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
describe("translating zh-CN string: 重新声明常量“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("重新声明常量“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: 严格模式下不允许对“MyDynamicTestString”调用 Delete", function () {
    var translation;
    before(function (done) {
        errorToEnglish("严格模式下不允许对“MyDynamicTestString”调用 Delete", function (err, _translation) {
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
describe("translating zh-CN string: 无法设置未定义或 null 引用的属性“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法设置未定义或 null 引用的属性“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: 无法获取未定义或 null 引用的属性“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法获取未定义或 null 引用的属性“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: 无法删除未定义或 null 引用的属性“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法删除未定义或 null 引用的属性“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: 无法访问属性“MyDynamicTestString”: 类型“VarDate”不支持用户定义的属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法访问属性“MyDynamicTestString”: 类型“VarDate”不支持用户定义的属性", function (err, _translation) {
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
describe("translating zh-CN string: 属性“MyDynamicTestString”的值不是 Function 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("属性“MyDynamicTestString”的值不是 Function 对象", function (err, _translation) {
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
describe("translating zh-CN string: 属性“MyDynamicTestString”的值为 null、未定义或不是 Function 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("属性“MyDynamicTestString”的值为 null、未定义或不是 Function 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 为 null 或未定义", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 为 null 或未定义", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 Object", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 Object", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 Function 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 Function 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 String 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 String 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 Boolean 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 Boolean 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 Date 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 Date 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 Number 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 Number 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 VBArray 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 VBArray 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 JavaScript 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 JavaScript 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 Enumerator 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 Enumerator 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 'this' 不是 RegExp 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 'this' 不是 RegExp 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 无效参数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 无效参数", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 参数不是 Object", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 参数不是 Object", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 参数不是 JavaScript 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 参数不是 JavaScript 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 参数不是 Function 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 参数不是 Function 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 参数不是 VBArray 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 参数不是 VBArray 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 参数为 null 或未定义", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 参数为 null 或未定义", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 参数不是 Object 且不为 null", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 参数不是 Object 且不为 null", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 参数没有有效的“length”属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 参数没有有效的“length”属性", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 缺少 Array 或 arguments 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 缺少 Array 或 arguments 对象", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”的操作数无效: 缺少 Object", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”的操作数无效: 缺少 Object", function (err, _translation) {
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
describe("translating zh-CN string: “MyDynamicTestString”的操作数无效: 缺少 Function", function () {
    var translation;
    before(function (done) {
        errorToEnglish("“MyDynamicTestString”的操作数无效: 缺少 Function", function (err, _translation) {
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
describe("translating zh-CN string: 属性“MyDynamicTestString”的描述符无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("属性“MyDynamicTestString”的描述符无效", function (err, _translation) {
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
describe("translating zh-CN string: 无法定义属性“MyDynamicTestString”: 对象不可扩展", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法定义属性“MyDynamicTestString”: 对象不可扩展", function (err, _translation) {
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
describe("translating zh-CN string: 无法重新定义不可配置的属性“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法重新定义不可配置的属性“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: 无法修改不可写的属性“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法修改不可写的属性“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: 无法修改属性“MyDynamicTestString”:“length”不可写", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法修改属性“MyDynamicTestString”:“length”不可写", function (err, _translation) {
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
describe("translating zh-CN string: 无法定义属性“MyDynamicTestString”", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法定义属性“MyDynamicTestString”", function (err, _translation) {
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
describe("translating zh-CN string: 未指定 DataView 方法中的必需参数 MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("未指定 DataView 方法中的必需参数 MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-CN string: DataView 构造函数参数 MyDynamicTestString 无效", function () {
    var translation;
    before(function (done) {
        errorToEnglish("DataView 构造函数参数 MyDynamicTestString 无效", function (err, _translation) {
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
describe("translating zh-CN string: 函数“MyDynamicTestString”具有无效的签名，无法调用该函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("函数“MyDynamicTestString”具有无效的签名，无法调用该函数", function (err, _translation) {
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
describe("translating zh-CN string: 属性“MyDynamicTestString”具有无效的签名，无法访问该属性", function () {
    var translation;
    before(function (done) {
        errorToEnglish("属性“MyDynamicTestString”具有无效的签名，无法访问该属性", function (err, _translation) {
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
describe("translating zh-CN string: 不支持将 runtimeclass MyDynamicTestString (默认接口为 Windows.Foundation.IPropertyValue)作为输入参数类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不支持将 runtimeclass MyDynamicTestString (默认接口为 Windows.Foundation.IPropertyValue)作为输入参数类型", function (err, _translation) {
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
describe("translating zh-CN string: 不支持将接口为 Windows.Foundation.IPropertyValue (具有 runtimeclass 名称 MyDynamicTestString)的对象作为输出参数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("不支持将接口为 Windows.Foundation.IPropertyValue (具有 runtimeclass 名称 MyDynamicTestString)的对象作为输出参数", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: \"this\" 不是 Inspectable 对象", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: \"this\" 不是 Inspectable 对象", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 无法将参数转换为 \"char\" 类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 无法将参数转换为 \"char\" 类型", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 无法将参数转换为 \"GUID\" 类型", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 无法将参数转换为 \"GUID\" 类型", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 无法将返回值转换为 IInspectable", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 无法将返回值转换为 IInspectable", function (err, _translation) {
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
describe("translating zh-CN string: 无法将对象转换为结构: 对象缺少应有的属性 \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将对象转换为结构: 对象缺少应有的属性 \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating zh-CN string: 找不到类型 \"MyDynamicTestString\"", function () {
    var translation;
    before(function (done) {
        errorToEnglish("找不到类型 \"MyDynamicTestString\"", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 使用过少的参数调用函数", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 使用过少的参数调用函数", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 类型不可构造", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 类型不可构造", function (err, _translation) {
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
describe("translating zh-CN string: 无法将值转换为 PropertyValue: PropertyValue 不支持 MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将值转换为 PropertyValue: PropertyValue 不支持 MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-CN string: 无法将值转换为 IInspectable: IInspectable 不支持 MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("无法将值转换为 IInspectable: IInspectable 不支持 MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: Inspectable 对象 \"this\" 已释放并且无法访问", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: Inspectable 对象 \"this\" 已释放并且无法访问", function (err, _translation) {
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
describe("translating zh-CN string: 'this' 不是所需的类型: MyDynamicTestString", function () {
    var translation;
    before(function (done) {
        errorToEnglish("'this' 不是所需的类型: MyDynamicTestString", function (err, _translation) {
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
describe("translating zh-CN string: MyDynamicTestString: 尝试获取元数据信息时发生意外故障", function () {
    var translation;
    before(function (done) {
        errorToEnglish("MyDynamicTestString: 尝试获取元数据信息时发生意外故障", function (err, _translation) {
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
describe("translating zh-CN string: 指定的日期不在当前区域设置的日历中", function () {
    var translation;
    before(function (done) {
        errorToEnglish("指定的日期不在当前区域设置的日历中", function (err, _translation) {
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
