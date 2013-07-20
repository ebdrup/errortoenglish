var errorToEnglish = require("../../lib/errortoenglish");
describe("translating ja-JP string: プロシージャの呼び出し、または引数が不正です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロシージャの呼び出し、または引数が不正です。", function (err, _translation) {
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
describe("translating ja-JP string: オーバーフローしました。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オーバーフローしました。", function (err, _translation) {
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
describe("translating ja-JP string: メモリが不足しています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("メモリが不足しています。", function (err, _translation) {
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
describe("translating ja-JP string: インデックスが有効範囲にありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("インデックスが有効範囲にありません。", function (err, _translation) {
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
describe("translating ja-JP string: 固定サイズの配列、または現在、この配列はサイズを変更できない状態にあります。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("固定サイズの配列、または現在、この配列はサイズを変更できない状態にあります。", function (err, _translation) {
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
describe("translating ja-JP string: 0 で除算しました。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("0 で除算しました。", function (err, _translation) {
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
describe("translating ja-JP string: 型が一致しません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("型が一致しません。", function (err, _translation) {
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
describe("translating ja-JP string: 文字列領域が不足しています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("文字列領域が不足しています。", function (err, _translation) {
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
describe("translating ja-JP string: 要求された操作を実行できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("要求された操作を実行できません。", function (err, _translation) {
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
describe("translating ja-JP string: スタック領域が不足しています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("スタック領域が不足しています。", function (err, _translation) {
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
describe("translating ja-JP string: Sub または Function が定義されていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub または Function が定義されていません。", function (err, _translation) {
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
describe("translating ja-JP string: DLL 読み込み時のエラーです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DLL 読み込み時のエラーです。", function (err, _translation) {
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
describe("translating ja-JP string: 内部エラーです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("内部エラーです。", function (err, _translation) {
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
describe("translating ja-JP string: ファイルの名前または数が不正です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ファイルの名前または数が不正です。", function (err, _translation) {
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
describe("translating ja-JP string: ファイルが見つかりません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ファイルが見つかりません。", function (err, _translation) {
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
describe("translating ja-JP string: ファイルのモードが不正です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ファイルのモードが不正です。", function (err, _translation) {
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
describe("translating ja-JP string: ファイルは既に開かれています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ファイルは既に開かれています。", function (err, _translation) {
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
describe("translating ja-JP string: デバイス I/O (入出力) エラーです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("デバイス I/O (入出力) エラーです。", function (err, _translation) {
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
describe("translating ja-JP string: 既に同名のファイルが存在しています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("既に同名のファイルが存在しています。", function (err, _translation) {
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
describe("translating ja-JP string: ディスクの空き容量が不足しています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ディスクの空き容量が不足しています。", function (err, _translation) {
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
describe("translating ja-JP string: ファイルの最後を超えた入力を行おうとしました。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ファイルの最後を超えた入力を行おうとしました。", function (err, _translation) {
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
describe("translating ja-JP string: ファイル数が多すぎます。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ファイル数が多すぎます。", function (err, _translation) {
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
describe("translating ja-JP string: このデバイスは使用できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このデバイスは使用できません。", function (err, _translation) {
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
describe("translating ja-JP string: 書き込みできません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("書き込みできません。", function (err, _translation) {
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
describe("translating ja-JP string: ディスクは準備されていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ディスクは準備されていません。", function (err, _translation) {
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
describe("translating ja-JP string: 異なったドライブでも名前の変更はできません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("異なったドライブでも名前の変更はできません。", function (err, _translation) {
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
describe("translating ja-JP string: パスまたはファイル名が無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("パスまたはファイル名が無効です。", function (err, _translation) {
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
describe("translating ja-JP string: パスが見つかりません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("パスが見つかりません。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクト型の変数または With ブロックの変数は設定されていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクト型の変数または With ブロックの変数は設定されていません。", function (err, _translation) {
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
describe("translating ja-JP string: For ループは初期化されていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For ループは初期化されていません。", function (err, _translation) {
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
describe("translating ja-JP string: Null 値の使い方が不正です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Null 値の使い方が不正です。", function (err, _translation) {
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
describe("translating ja-JP string: 必要なテンポラリ ファイルが作成できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("必要なテンポラリ ファイルが作成できません。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトがありません。", function (err, _translation) {
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
describe("translating ja-JP string: オートメーション サーバーはオブジェクトを作成できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オートメーション サーバーはオブジェクトを作成できません。", function (err, _translation) {
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
describe("translating ja-JP string: クラスはオートメーションをサポートしていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("クラスはオートメーションをサポートしていません。", function (err, _translation) {
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
describe("translating ja-JP string: オートメーションの操作中にファイル名またはクラス名を見つけられませんでした。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オートメーションの操作中にファイル名またはクラス名を見つけられませんでした。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトでサポートされていないプロパティまたはメソッドです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトでサポートされていないプロパティまたはメソッドです。", function (err, _translation) {
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
describe("translating ja-JP string: オートメーション エラーです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オートメーション エラーです。", function (err, _translation) {
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
describe("translating ja-JP string: このオブジェクトではサポートされていない操作です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このオブジェクトではサポートされていない操作です。", function (err, _translation) {
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
describe("translating ja-JP string: このオブジェクトは、名前付き引数をサポートしていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このオブジェクトは、名前付き引数をサポートしていません。", function (err, _translation) {
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
describe("translating ja-JP string: 現在の国別情報の設定は、このオブジェクトではサポートされていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("現在の国別情報の設定は、このオブジェクトではサポートされていません。", function (err, _translation) {
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
describe("translating ja-JP string: 名前付き引数が不正です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("名前付き引数が不正です。", function (err, _translation) {
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
describe("translating ja-JP string: 引数は省略できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引数は省略できません。", function (err, _translation) {
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
describe("translating ja-JP string: 引数の数が一致していません。または不正なプロパティを指定しています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引数の数が一致していません。または不正なプロパティを指定しています。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトがコレクションではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトがコレクションではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 指定された DLL に関数が定義されていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("指定された DLL に関数が定義されていません。", function (err, _translation) {
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
describe("translating ja-JP string: この変数には JavaScript でサポートされていない種類のオートメーションが使用されています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("この変数には JavaScript でサポートされていない種類のオートメーションが使用されています。", function (err, _translation) {
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
describe("translating ja-JP string: リモート サーバー マシンが存在しないか、利用できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("リモート サーバー マシンが存在しないか、利用できません。", function (err, _translation) {
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
describe("translating ja-JP string: この変数に割り当てられません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("この変数に割り当てられません。", function (err, _translation) {
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
describe("translating ja-JP string: このオブジェクトは safe モードでは作成できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このオブジェクトは safe モードでは作成できません。", function (err, _translation) {
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
describe("translating ja-JP string: このオブジェクトは safe モードでは初期化できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このオブジェクトは safe モードでは初期化できません。", function (err, _translation) {
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
describe("translating ja-JP string: このオブジェクトは safe モードでは作成できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このオブジェクトは safe モードでは作成できません。", function (err, _translation) {
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
describe("translating ja-JP string: 例外が発生しました。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("例外が発生しました。", function (err, _translation) {
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
describe("translating ja-JP string: メモリが不足しています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("メモリが不足しています。", function (err, _translation) {
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
describe("translating ja-JP string: 構文エラーです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("構文エラーです。", function (err, _translation) {
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
describe("translating ja-JP string: ':' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: ';' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: '(' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'(' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: ')' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: ']' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: '{' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: '}' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: 識別子がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("識別子がありません。", function (err, _translation) {
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
describe("translating ja-JP string: '=' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'=' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: '/' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: 不正な数字です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不正な数字です。", function (err, _translation) {
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
describe("translating ja-JP string: 文字が正しくありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("文字が正しくありません。", function (err, _translation) {
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
describe("translating ja-JP string: 終了していない文字列型の定数です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("終了していない文字列型の定数です。", function (err, _translation) {
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
describe("translating ja-JP string: 終了していないコメントです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("終了していないコメントです。", function (err, _translation) {
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
describe("translating ja-JP string: 'return' ステートメントが関数の外側にあります。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'return' ステートメントが関数の外側にあります。", function (err, _translation) {
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
describe("translating ja-JP string: 'break' はループの外側には指定できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'break' はループの外側には指定できません。", function (err, _translation) {
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
describe("translating ja-JP string: 'continue' はループの外側には指定できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'continue' はループの外側には指定できません。", function (err, _translation) {
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
describe("translating ja-JP string: 16 進数を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("16 進数を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 'while' を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while' を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: この Label は既に定義されています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("この Label は既に定義されています。", function (err, _translation) {
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
describe("translating ja-JP string: この Label が定義されていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("この Label が定義されていません。", function (err, _translation) {
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
describe("translating ja-JP string: 'default' は 'switch' ステートメントのなかでは、一度のみ表示されます。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'default' は 'switch' ステートメントのなかでは、一度のみ表示されます。", function (err, _translation) {
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
describe("translating ja-JP string: 識別子、文字列または数がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("識別子、文字列または数がありません。", function (err, _translation) {
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
describe("translating ja-JP string: '@end' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: 条件コンパイルは中止されます。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("条件コンパイルは中止されます。", function (err, _translation) {
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
describe("translating ja-JP string: 定数がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("定数がありません。", function (err, _translation) {
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
describe("translating ja-JP string: '@' がありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@' がありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'catch' ステートメントがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch' ステートメントがありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'var' ステートメントがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var' ステートメントがありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'throw' ステートメントに指定する式は、ソース コードの同一行に記述してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'throw' ステートメントに指定する式は、ソース コードの同一行に記述してください。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、'with' ステートメントは使用できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、'with' ステートメントは使用できません。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、重複する仮引数名は使用できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、重複する仮引数名は使用できません。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、8 進数リテラルとエスケープ文字は使用できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、8 進数リテラルとエスケープ文字は使用できません。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでの 'eval' の使用方法が無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでの 'eval' の使用方法が無効です。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでの 'arguments' の使用方法が無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでの 'arguments' の使用方法が無効です。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、式で delete を呼び出すことはできません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、式で delete を呼び出すことはできません。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、プロパティの複数定義は許可されません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、プロパティの複数定義は許可されません。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、関数の宣言をステートメントまたはブロック内で入れ子にできません。関数の宣言を配置できるのは、トップ レベル、または直接関数の本体内のみです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、関数の宣言をステートメントまたはブロック内で入れ子にできません。関数の宣言を配置できるのは、トップ レベル、または直接関数の本体内のみです。", function (err, _translation) {
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
describe("translating ja-JP string: 識別子にキーワードを使用することは無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("識別子にキーワードを使用することは無効です", function (err, _translation) {
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
describe("translating ja-JP string: 識別子に予約語を使用することは無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("識別子に予約語を使用することは無効です。", function (err, _translation) {
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
describe("translating ja-JP string: 識別子に予約語を使用することは無効です。strict モードでは、識別子名が予約されています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("識別子に予約語を使用することは無効です。strict モードでは、識別子名が予約されています。", function (err, _translation) {
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
describe("translating ja-JP string: setter 関数には 1 つの引数が必要です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("setter 関数には 1 つの引数が必要です", function (err, _translation) {
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
describe("translating ja-JP string: JavaScript コンパイル エラー", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript コンパイル エラー", function (err, _translation) {
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
describe("translating ja-JP string: JavaScript 実行時エラー", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 実行時エラー", function (err, _translation) {
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
describe("translating ja-JP string: 未知の実行時エラーです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未知の実行時エラーです。", function (err, _translation) {
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
describe("translating ja-JP string: 'this' に割り当てることはできません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' に割り当てることはできません。", function (err, _translation) {
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
describe("translating ja-JP string: 数字を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("数字を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 関数を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 関数の戻り値に割り当てることはできません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数の戻り値に割り当てることはできません。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトにインデックスを付けられません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトにインデックスを付けられません。", function (err, _translation) {
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
describe("translating ja-JP string: 文字列を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("文字列を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: Date オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Date オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 左辺の代入が無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("左辺の代入が無効です。", function (err, _translation) {
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
describe("translating ja-JP string: 定義されていない識別子です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("定義されていない識別子です。", function (err, _translation) {
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
describe("translating ja-JP string: ブール型 (Boolean)を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ブール型 (Boolean)を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 解放されたスクリプトからコードを実行できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("解放されたスクリプトからコードを実行できません。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトのメンバーを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトのメンバーを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: VBArray を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: JavaScript オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: Enumerator オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enumerator オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: Regular Expression オブジェクトがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Regular Expression オブジェクトがありません。", function (err, _translation) {
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
describe("translating ja-JP string: 正規表現で構文エラーが発生しました。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("正規表現で構文エラーが発生しました。", function (err, _translation) {
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
describe("translating ja-JP string: 文字の繰り返しを表す正規表現演算子が不正です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("文字の繰り返しを表す正規表現演算子が不正です。", function (err, _translation) {
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
describe("translating ja-JP string: 正規表現の中に ']' を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("正規表現の中に ']' を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 正規表現の中に ')' を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("正規表現の中に ')' を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 文字セットの範囲が不正です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("文字セットの範囲が不正です。", function (err, _translation) {
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
describe("translating ja-JP string: catch ステートメントでは適用されますが、throw ステートメントでは適用されません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("catch ステートメントでは適用されますが、throw ステートメントでは適用されません。", function (err, _translation) {
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
describe("translating ja-JP string: 関数には、有効なプロトタイプ オブジェクトが存在しません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数には、有効なプロトタイプ オブジェクトが存在しません。", function (err, _translation) {
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
describe("translating ja-JP string: エンコードする URI は無効な文字を含んでいます。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("エンコードする URI は無効な文字を含んでいます。", function (err, _translation) {
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
describe("translating ja-JP string: デコードする URI は有効なエンコーダーではありません｡", function () {
	var translation;
	before(function (done) {
		errorToEnglish("デコードする URI は有効なエンコーダーではありません｡", function (err, _translation) {
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
describe("translating ja-JP string: 小数の桁数が有効範囲を超えています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("小数の桁数が有効範囲を超えています。", function (err, _translation) {
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
describe("translating ja-JP string: 有効桁数の範囲を超えています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("有効桁数の範囲を超えています。", function (err, _translation) {
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
describe("translating ja-JP string: Array または arguments オブジェクトがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array または arguments オブジェクトがありません。", function (err, _translation) {
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
describe("translating ja-JP string: 配列の長さは、正の有限整数でなければなりません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("配列の長さは、正の有限整数でなければなりません。", function (err, _translation) {
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
describe("translating ja-JP string: 配列の長さには、正の有限数が割り当てられなければなりません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("配列の長さには、正の有限数が割り当てられなければなりません。", function (err, _translation) {
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
describe("translating ja-JP string: Array オブジェクトがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array オブジェクトがありません。", function (err, _translation) {
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
describe("translating ja-JP string: 値引数の中の循環参照はサポートされていません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("値引数の中の循環参照はサポートされていません", function (err, _translation) {
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
describe("translating ja-JP string: 置換引数が無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("置換引数が無効です", function (err, _translation) {
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
describe("translating ja-JP string: 引数リストが大きすぎて適用できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引数リストが大きすぎて適用できません", function (err, _translation) {
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
describe("translating ja-JP string: const プロパティが再定義されています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("const プロパティが再定義されています。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトのメンバーが構成できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトのメンバーが構成できません。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードで、変数が未定義のままです。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードで、変数が未定義のままです。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、関数または arguments オブジェクトの 'caller' プロパティを使用できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、関数または arguments オブジェクトの 'caller' プロパティを使用できません", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、arguments オブジェクトの 'callee' プロパティを使用できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、arguments オブジェクトの 'callee' プロパティを使用できません", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、読み取り専用プロパティに代入できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、読み取り専用プロパティに代入できません", function (err, _translation) {
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
describe("translating ja-JP string: 非拡張可能オブジェクトのプロパティは作成できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("非拡張可能オブジェクトのプロパティは作成できません。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 関数を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 関数を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティは、アクセサーと値の両方を持つことはできません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティは、アクセサーと値の両方を持つことはできません。", function (err, _translation) {
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
describe("translating ja-JP string: 'this' が Null であるか未定義です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' が Null であるか未定義です。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 関数を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 文字列を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("文字列を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: ブール型 (Boolean)を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ブール型 (Boolean)を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: Date を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Date を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 数字を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("数字を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: VBArray を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: JavaScript オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: Enumerator オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Enumerator オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: RegExp オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("RegExp オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 関数の引数が無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数の引数が無効です。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: JavaScript オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 関数を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: VBArray を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 'length' プロパティが無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'length' プロパティが無効です。", function (err, _translation) {
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
describe("translating ja-JP string: Array または arguments オブジェクトがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array または arguments オブジェクトがありません。", function (err, _translation) {
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
describe("translating ja-JP string: オペランドが無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オペランドが無効です。", function (err, _translation) {
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
describe("translating ja-JP string: オペランドが無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オペランドが無効です。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ記述子が無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ記述子が無効です。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティを定義できません: オブジェクトは拡張可能ではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティを定義できません: オブジェクトは拡張可能ではありません", function (err, _translation) {
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
describe("translating ja-JP string: 構成可能ではないプロパティは再定義できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("構成可能ではないプロパティは再定義できません", function (err, _translation) {
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
describe("translating ja-JP string: 書き込み可能ではないプロパティは変更できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("書き込み可能ではないプロパティは変更できません", function (err, _translation) {
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
describe("translating ja-JP string: プロパティを変更できません: 'length' は書き込み可能ではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティを変更できません: 'length' は書き込み可能ではありません", function (err, _translation) {
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
describe("translating ja-JP string: プロパティを定義できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティを定義できません", function (err, _translation) {
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
describe("translating ja-JP string: 型付き配列のコンストラクター引数が無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("型付き配列のコンストラクター引数が無効です", function (err, _translation) {
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
describe("translating ja-JP string: 'this' は型付き配列オブジェクトではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' は型付き配列オブジェクトではありません", function (err, _translation) {
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
describe("translating ja-JP string: 型付き配列作成時のオフセット/長さが無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("型付き配列作成時のオフセット/長さが無効です", function (err, _translation) {
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
describe("translating ja-JP string: 型付き配列の subarray メソッドの開始/終了値が無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("型付き配列の subarray メソッドの開始/終了値が無効です", function (err, _translation) {
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
describe("translating ja-JP string: 型付き配列セットのソースが無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("型付き配列セットのソースが無効です", function (err, _translation) {
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
describe("translating ja-JP string: 'this' は DataView オブジェクトではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' は DataView オブジェクトではありません", function (err, _translation) {
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
describe("translating ja-JP string: DataView の引数が無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView の引数が無効です", function (err, _translation) {
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
describe("translating ja-JP string: DataView 操作によるアクセスが指定したバッファー長を超えています", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 操作によるアクセスが指定したバッファー長を超えています", function (err, _translation) {
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
describe("translating ja-JP string: DataView の引数が無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView の引数が無効です", function (err, _translation) {
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
describe("translating ja-JP string: 関数のシグネチャが無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数のシグネチャが無効です", function (err, _translation) {
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
describe("translating ja-JP string: プロパティのシグネチャが無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティのシグネチャが無効です", function (err, _translation) {
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
describe("translating ja-JP string: 入力パラメーターの型が無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("入力パラメーターの型が無効です", function (err, _translation) {
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
describe("translating ja-JP string: 出力パラメーターが無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("出力パラメーターが無効です", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、関数の 'arguments' プロパティを使用できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、関数の 'arguments' プロパティを使用できません", function (err, _translation) {
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
describe("translating ja-JP string: 検査可能なオブジェクトが必要です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("検査可能なオブジェクトが必要です", function (err, _translation) {
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
describe("translating ja-JP string: 引数を型 'char' に変換できませんでした", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引数を型 'char' に変換できませんでした", function (err, _translation) {
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
describe("translating ja-JP string: 引数を型 'GUID' に変換できませんでした", function () {
	var translation;
	before(function (done) {
		errorToEnglish("引数を型 'GUID' に変換できませんでした", function (err, _translation) {
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
describe("translating ja-JP string: IInspectable が必要です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable が必要です", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを構造体に変換できませんでした: オブジェクトに必要なプロパティがありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを構造体に変換できませんでした: オブジェクトに必要なプロパティがありません", function (err, _translation) {
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
describe("translating ja-JP string: 不明な種類", function () {
	var translation;
	before(function (done) {
		errorToEnglish("不明な種類", function (err, _translation) {
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
describe("translating ja-JP string: 関数の呼び出しの引数が少なすぎます", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数の呼び出しの引数が少なすぎます", function (err, _translation) {
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
describe("translating ja-JP string: 構造化可能な種類ではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("構造化可能な種類ではありません", function (err, _translation) {
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
describe("translating ja-JP string: 値を PropertyValue に変換できませんでした: PropertyValue でサポートされている種類ではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("値を PropertyValue に変換できませんでした: PropertyValue でサポートされている種類ではありません", function (err, _translation) {
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
describe("translating ja-JP string: 値を IInspectable に変換できませんでした: IInspectable でサポートされている種類ではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("値を IInspectable に変換できませんでした: IInspectable でサポートされている種類ではありません", function (err, _translation) {
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
describe("translating ja-JP string: 日付を Windows.Foundation.DateTime に変換できませんでした: 有効な範囲外の値です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("日付を Windows.Foundation.DateTime に変換できませんでした: 有効な範囲外の値です", function (err, _translation) {
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
describe("translating ja-JP string: 値を Windows.Foundation.TimeSpan に変換できませんでした: 有効な範囲外の値です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("値を Windows.Foundation.TimeSpan に変換できませんでした: 有効な範囲外の値です", function (err, _translation) {
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
describe("translating ja-JP string: 既にリリースされている検査可能なオブジェクトへのアクセスが無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("既にリリースされている検査可能なオブジェクトへのアクセスが無効です", function (err, _translation) {
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
describe("translating ja-JP string: 既にリリースされている検査可能なオブジェクトはリリースできません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("既にリリースされている検査可能なオブジェクトはリリースできません", function (err, _translation) {
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
describe("translating ja-JP string: 'this' は必要な型ではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' は必要な型ではありません", function (err, _translation) {
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
describe("translating ja-JP string: 配列に指定された長さとサイズは無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("配列に指定された長さとサイズは無効です", function (err, _translation) {
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
describe("translating ja-JP string: メタデータ情報を取得中に予期しないエラーが発生しました", function () {
	var translation;
	before(function (done) {
		errorToEnglish("メタデータ情報を取得中に予期しないエラーが発生しました", function (err, _translation) {
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
describe("translating ja-JP string: スタータスは 'エラー' ですが、getResults はエラーを返しませんでした", function () {
	var translation;
	before(function (done) {
		errorToEnglish("スタータスは 'エラー' ですが、getResults はエラーを返しませんでした", function (err, _translation) {
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
describe("translating ja-JP string: 完了したハンドラーに渡されるステータス パラメーターが見つからないか無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("完了したハンドラーに渡されるステータス パラメーターが見つからないか無効です", function (err, _translation) {
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
describe("translating ja-JP string: 完了したハンドラーに渡される送信者パラメーターが見つからないか無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("完了したハンドラーに渡される送信者パラメーターが見つからないか無効です", function (err, _translation) {
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
describe("translating ja-JP string: 6000", function () {
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
		expect(translation, translation).to.equal("Infinity");
	});
});
describe("translating ja-JP string: 負の無限大", function () {
	var translation;
	before(function (done) {
		errorToEnglish("負の無限大", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトは 'MyDynamicTestString' プロパティまたはメソッドをサポートしていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトは 'MyDynamicTestString' プロパティまたはメソッドをサポートしていません。", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
	});
});
describe("translating ja-JP string: 関数 'MyDynamicTestString' の引数は必須です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数 'MyDynamicTestString' の引数は必須です。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は数値ではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は数値ではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は関数ではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は関数ではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は配列可能なオブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は配列可能なオブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は文字列ではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は文字列ではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は日付型のオブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は日付型のオブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は Null であるか、オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は Null であるか、オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' に割り当てられません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' に割り当てられません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は定義されていません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は定義されていません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' はブール型ではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' はブール型ではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' を削除できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' を削除できません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は VBArray ではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は VBArray ではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は JavaScript オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は JavaScript オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は Enumerator オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は Enumerator オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は Regular Expression オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は Regular Expression オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は Array または Arguments オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は Array または Arguments オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' は Array オブジェクトではありません｡", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' は Array オブジェクトではありません｡", function (err, _translation) {
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
describe("translating ja-JP string: このオブジェクトでは、プロパティ記述子の 'MyDynamicTestString'' 属性を 'True' に設定できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このオブジェクトでは、プロパティ記述子の 'MyDynamicTestString'' 属性を 'True' に設定できません", function (err, _translation) {
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
describe("translating ja-JP string: このオブジェクトでは、プロパティ記述子の 'MyDynamicTestString'' 属性を 'False' に設定できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("このオブジェクトでは、プロパティ記述子の 'MyDynamicTestString'' 属性を 'False' に設定できません", function (err, _translation) {
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
describe("translating ja-JP string: const 'MyDynamicTestString' が再定義されています。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("const 'MyDynamicTestString' が再定義されています。", function (err, _translation) {
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
describe("translating ja-JP string: strict モードでは、'MyDynamicTestString' で delete を呼び出すことはできません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict モードでは、'MyDynamicTestString' で delete を呼び出すことはできません", function (err, _translation) {
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
describe("translating ja-JP string: 未定義または NULL 参照のプロパティ 'MyDynamicTestString' は設定できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未定義または NULL 参照のプロパティ 'MyDynamicTestString' は設定できません", function (err, _translation) {
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
describe("translating ja-JP string: 未定義または NULL 参照のプロパティ 'MyDynamicTestString' は取得できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未定義または NULL 参照のプロパティ 'MyDynamicTestString' は取得できません", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
	});
});
describe("translating ja-JP string: 未定義または NULL 参照のプロパティ 'MyDynamicTestString' は削除できません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("未定義または NULL 参照のプロパティ 'MyDynamicTestString' は削除できません", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' にアクセスできません: データ型 'VarDate' はユーザー定義プロパティをサポートしません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' にアクセスできません: データ型 'VarDate' はユーザー定義プロパティをサポートしません。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' の値は Function オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' の値は Function オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' の値は Null または未定義で、Fuction オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' の値は Null または未定義で、Fuction オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は Null または未定義です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は Null または未定義です。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' はオブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' はオブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は Function オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は Function オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は String オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は String オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は Boolean オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は Boolean オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は Date オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は Date オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は Number オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は Number オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は VBArray オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は VBArray オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は JavaScript オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は JavaScript オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は Enumerator オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は Enumerator オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は RegExp オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は RegExp オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数は無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数は無効です。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数はオブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数はオブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数は JavaScript オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数は JavaScript オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数は Function オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数は Function オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数は VBArray オブジェクトではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数は VBArray オブジェクトではありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数は Null または未定義です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数は Null または未定義です。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数はオブジェクトと Null のどちらでもありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数はオブジェクトと Null のどちらでもありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数に有効な 'length' プロパティがありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数に有効な 'length' プロパティがありません。", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: Array または Arguments オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Array または Arguments オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' へのオペランドが無効です: オブジェクトを指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' へのオペランドが無効です: オブジェクトを指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: 'MyDynamicTestString' へのオペランドが無効です: 関数を指定してください。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' へのオペランドが無効です: 関数を指定してください。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' の記述子が無効です。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' の記述子が無効です。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' を定義できません: オブジェクトは拡張可能ではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' を定義できません: オブジェクトは拡張可能ではありません。", function (err, _translation) {
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
describe("translating ja-JP string: 構成可能ではないプロパティ 'MyDynamicTestString' は再定義できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("構成可能ではないプロパティ 'MyDynamicTestString' は再定義できません。", function (err, _translation) {
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
describe("translating ja-JP string: 書き込み可能ではないプロパティ 'MyDynamicTestString' は変更できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("書き込み可能ではないプロパティ 'MyDynamicTestString' は変更できません。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' を変更できません: 'length' は書き込み可能ではありません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' を変更できません: 'length' は書き込み可能ではありません。", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' を定義できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' を定義できません。", function (err, _translation) {
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
describe("translating ja-JP string: DataView メソッドの必須引数 MyDynamicTestString が指定されていません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView メソッドの必須引数 MyDynamicTestString が指定されていません", function (err, _translation) {
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
describe("translating ja-JP string: DataView コンストラクター引数 MyDynamicTestString が無効です", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView コンストラクター引数 MyDynamicTestString が無効です", function (err, _translation) {
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
describe("translating ja-JP string: 関数 'MyDynamicTestString' に無効なシグネチャがあるため、呼び出せません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("関数 'MyDynamicTestString' に無効なシグネチャがあるため、呼び出せません", function (err, _translation) {
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
describe("translating ja-JP string: プロパティ 'MyDynamicTestString' に無効なシグネチャがあるため、アクセスできません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("プロパティ 'MyDynamicTestString' に無効なシグネチャがあるため、アクセスできません", function (err, _translation) {
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
describe("translating ja-JP string: 既定のインターフェイスが Windows.Foundation.IPropertyValue のランタイム クラス MyDynamicTestString は、入力パラメーターの型としてサポートされていません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("既定のインターフェイスが Windows.Foundation.IPropertyValue のランタイム クラス MyDynamicTestString は、入力パラメーターの型としてサポートされていません", function (err, _translation) {
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
describe("translating ja-JP string: ランタイム クラス名が MyDynamicTestString の Windows.Foundation.IPropertyValue インターフェイスを持つオブジェクトは、出力パラメーターとしてサポートされていません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("ランタイム クラス名が MyDynamicTestString の Windows.Foundation.IPropertyValue インターフェイスを持つオブジェクトは、出力パラメーターとしてサポートされていません", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 'this' は検査可能なオブジェクトではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this' は検査可能なオブジェクトではありません", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数を型 'char' に変換できませんでした", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数を型 'char' に変換できませんでした", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 引数を型 'GUID' に変換できませんでした", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 引数を型 'GUID' に変換できませんでした", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 戻り値を IInspectable に変換できませんでした", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 戻り値を IInspectable に変換できませんでした", function (err, _translation) {
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
describe("translating ja-JP string: オブジェクトを構造体に変換できませんでした: オブジェクトに必要なプロパティ 'MyDynamicTestString' がありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("オブジェクトを構造体に変換できませんでした: オブジェクトに必要なプロパティ 'MyDynamicTestString' がありません", function (err, _translation) {
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
describe("translating ja-JP string: 種類 'MyDynamicTestString' が見つかりません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("種類 'MyDynamicTestString' が見つかりません", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 関数の呼び出しの引数が少なすぎます", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 関数の呼び出しの引数が少なすぎます", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 構造化可能な種類ではありません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 構造化可能な種類ではありません", function (err, _translation) {
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
describe("translating ja-JP string: 値を PropertyValue に変換できませんでした: MyDynamicTestString は PropertyValue でサポートされていません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("値を PropertyValue に変換できませんでした: MyDynamicTestString は PropertyValue でサポートされていません", function (err, _translation) {
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
describe("translating ja-JP string: 値を IInspectable に変換できませんでした: MyDynamicTestString は IInspectable でサポートされていません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("値を IInspectable に変換できませんでした: MyDynamicTestString は IInspectable でサポートされていません", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: 検査可能なオブジェクト 'this' はリリースされていてアクセスできません", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 検査可能なオブジェクト 'this' はリリースされていてアクセスできません", function (err, _translation) {
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
describe("translating ja-JP string: 'this' は次の必要な型ではありません: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this' は次の必要な型ではありません: MyDynamicTestString", function (err, _translation) {
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
describe("translating ja-JP string: MyDynamicTestString: メタデータ情報を取得中に予期しないエラーが発生しました", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: メタデータ情報を取得中に予期しないエラーが発生しました", function (err, _translation) {
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
describe("translating ja-JP string: 指定された日は現在設定されているロケールのカレンダーでは使用できません。", function () {
	var translation;
	before(function (done) {
		errorToEnglish("指定された日は現在設定されているロケールのカレンダーでは使用できません。", function (err, _translation) {
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
