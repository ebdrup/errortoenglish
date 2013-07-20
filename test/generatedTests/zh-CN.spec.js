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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object required or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ required|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Infinity", function () {
		expect(translation, translation).to.match(/Infinity/g);
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
