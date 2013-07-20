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

	it("should return one of the english versions: Invalid procedure call or argument", function () {
		expect(translation, translation).to.match(/Invalid\ procedure\ call\ or\ argument/g);
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

	it("should return one of the english versions: Overflow", function () {
		expect(translation, translation).to.match(/Overflow/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Subscript out of range", function () {
		expect(translation, translation).to.match(/Subscript\ out\ of\ range/g);
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

	it("should return one of the english versions: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.match(/This\ array\ is\ fixed\ or\ temporarily\ locked/g);
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

	it("should return one of the english versions: Division by zero", function () {
		expect(translation, translation).to.match(/Division\ by\ zero/g);
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

	it("should return one of the english versions: Type mismatch", function () {
		expect(translation, translation).to.match(/Type\ mismatch/g);
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

	it("should return one of the english versions: Out of string space", function () {
		expect(translation, translation).to.match(/Out\ of\ string\ space/g);
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

	it("should return one of the english versions: Can't perform requested operation", function () {
		expect(translation, translation).to.match(/Can\'t\ perform\ requested\ operation/g);
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

	it("should return one of the english versions: Out of stack space", function () {
		expect(translation, translation).to.match(/Out\ of\ stack\ space/g);
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

	it("should return one of the english versions: Sub or Function not defined", function () {
		expect(translation, translation).to.match(/Sub\ or\ Function\ not\ defined/g);
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

	it("should return one of the english versions: Error in loading DLL", function () {
		expect(translation, translation).to.match(/Error\ in\ loading\ DLL/g);
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

	it("should return one of the english versions: Internal error", function () {
		expect(translation, translation).to.match(/Internal\ error/g);
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

	it("should return one of the english versions: Bad file name or number", function () {
		expect(translation, translation).to.match(/Bad\ file\ name\ or\ number/g);
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

	it("should return one of the english versions: File not found", function () {
		expect(translation, translation).to.match(/File\ not\ found/g);
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

	it("should return one of the english versions: Bad file mode", function () {
		expect(translation, translation).to.match(/Bad\ file\ mode/g);
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

	it("should return one of the english versions: File already open", function () {
		expect(translation, translation).to.match(/File\ already\ open/g);
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

	it("should return one of the english versions: Device I/O error", function () {
		expect(translation, translation).to.match(/Device\ I\/O\ error/g);
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

	it("should return one of the english versions: File already exists", function () {
		expect(translation, translation).to.match(/File\ already\ exists/g);
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

	it("should return one of the english versions: Disk full", function () {
		expect(translation, translation).to.match(/Disk\ full/g);
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

	it("should return one of the english versions: Input past end of file", function () {
		expect(translation, translation).to.match(/Input\ past\ end\ of\ file/g);
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

	it("should return one of the english versions: Too many files", function () {
		expect(translation, translation).to.match(/Too\ many\ files/g);
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

	it("should return one of the english versions: Device unavailable", function () {
		expect(translation, translation).to.match(/Device\ unavailable/g);
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

	it("should return one of the english versions: Permission denied", function () {
		expect(translation, translation).to.match(/Permission\ denied/g);
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

	it("should return one of the english versions: Disk not ready", function () {
		expect(translation, translation).to.match(/Disk\ not\ ready/g);
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

	it("should return one of the english versions: Can't rename with different drive", function () {
		expect(translation, translation).to.match(/Can\'t\ rename\ with\ different\ drive/g);
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

	it("should return one of the english versions: Path/File access error", function () {
		expect(translation, translation).to.match(/Path\/File\ access\ error/g);
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

	it("should return one of the english versions: Path not found", function () {
		expect(translation, translation).to.match(/Path\ not\ found/g);
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

	it("should return one of the english versions: Object variable or With block variable not set", function () {
		expect(translation, translation).to.match(/Object\ variable\ or\ With\ block\ variable\ not\ set/g);
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

	it("should return one of the english versions: For loop not initialized", function () {
		expect(translation, translation).to.match(/For\ loop\ not\ initialized/g);
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

	it("should return one of the english versions: Invalid use of Null", function () {
		expect(translation, translation).to.match(/Invalid\ use\ of\ Null/g);
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

	it("should return one of the english versions: Can't create necessary temporary file", function () {
		expect(translation, translation).to.match(/Can\'t\ create\ necessary\ temporary\ file/g);
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

	it("should return one of the english versions: Object required", function () {
		expect(translation, translation).to.match(/Object\ required/g);
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

	it("should return one of the english versions: Automation server can't create object", function () {
		expect(translation, translation).to.match(/Automation\ server\ can\'t\ create\ object/g);
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

	it("should return one of the english versions: Class doesn't support Automation", function () {
		expect(translation, translation).to.match(/Class\ doesn\'t\ support\ Automation/g);
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

	it("should return one of the english versions: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.match(/File\ name\ or\ class\ name\ not\ found\ during\ Automation\ operation/g);
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

	it("should return one of the english versions: Object doesn't support this property or method", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ property\ or\ method/g);
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

	it("should return one of the english versions: Automation error", function () {
		expect(translation, translation).to.match(/Automation\ error/g);
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

	it("should return one of the english versions: Object doesn't support this action", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ this\ action/g);
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

	it("should return one of the english versions: Object doesn't support named arguments", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ named\ arguments/g);
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

	it("should return one of the english versions: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ current\ locale\ setting/g);
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

	it("should return one of the english versions: Named argument not found", function () {
		expect(translation, translation).to.match(/Named\ argument\ not\ found/g);
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

	it("should return one of the english versions: Argument not optional", function () {
		expect(translation, translation).to.match(/Argument\ not\ optional/g);
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

	it("should return one of the english versions: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.match(/Wrong\ number\ of\ arguments\ or\ invalid\ property\ assignment/g);
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

	it("should return one of the english versions: Object not a collection", function () {
		expect(translation, translation).to.match(/Object\ not\ a\ collection/g);
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

	it("should return one of the english versions: Specified DLL function not found", function () {
		expect(translation, translation).to.match(/Specified\ DLL\ function\ not\ found/g);
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

	it("should return one of the english versions: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.match(/Variable\ uses\ an\ Automation\ type\ not\ supported\ in\ JavaScript/g);
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

	it("should return one of the english versions: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.match(/The\ remote\ server\ machine\ does\ not\ exist\ or\ is\ unavailable/g);
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

	it("should return one of the english versions: Cannot assign to variable", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ variable/g);
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

	it("should return one of the english versions: Object not safe for scripting or Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting|Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: Object not safe for initializing", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ initializing/g);
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

	it("should return one of the english versions: Object not safe for scripting or Object not safe for creating", function () {
		expect(translation, translation).to.match(/Object\ not\ safe\ for\ scripting|Object\ not\ safe\ for\ creating/g);
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

	it("should return one of the english versions: An exception occurred", function () {
		expect(translation, translation).to.match(/An\ exception\ occurred/g);
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

	it("should return one of the english versions: Out of memory or Out of memory", function () {
		expect(translation, translation).to.match(/Out\ of\ memory|Out\ of\ memory/g);
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

	it("should return one of the english versions: Syntax error", function () {
		expect(translation, translation).to.match(/Syntax\ error/g);
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

	it("should return one of the english versions: Expected ':'", function () {
		expect(translation, translation).to.match(/Expected\ \'\:\'/g);
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

	it("should return one of the english versions: Expected ';'", function () {
		expect(translation, translation).to.match(/Expected\ \'\;\'/g);
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

	it("should return one of the english versions: Expected '('", function () {
		expect(translation, translation).to.match(/Expected\ \'\(\'/g);
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

	it("should return one of the english versions: Expected ')'", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'/g);
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

	it("should return one of the english versions: Expected ']'", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'/g);
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

	it("should return one of the english versions: Expected '{'", function () {
		expect(translation, translation).to.match(/Expected\ \'\{\'/g);
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

	it("should return one of the english versions: Expected '}'", function () {
		expect(translation, translation).to.match(/Expected\ \'\}\'/g);
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

	it("should return one of the english versions: Expected identifier", function () {
		expect(translation, translation).to.match(/Expected\ identifier/g);
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

	it("should return one of the english versions: Expected '='", function () {
		expect(translation, translation).to.match(/Expected\ \'\=\'/g);
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

	it("should return one of the english versions: Expected '/'", function () {
		expect(translation, translation).to.match(/Expected\ \'\/\'/g);
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

	it("should return one of the english versions: Invalid number", function () {
		expect(translation, translation).to.match(/Invalid\ number/g);
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

	it("should return one of the english versions: Invalid character", function () {
		expect(translation, translation).to.match(/Invalid\ character/g);
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

	it("should return one of the english versions: Unterminated string constant", function () {
		expect(translation, translation).to.match(/Unterminated\ string\ constant/g);
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

	it("should return one of the english versions: Unterminated comment", function () {
		expect(translation, translation).to.match(/Unterminated\ comment/g);
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

	it("should return one of the english versions: 'return' statement outside of function", function () {
		expect(translation, translation).to.match(/\'return\'\ statement\ outside\ of\ function/g);
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

	it("should return one of the english versions: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'break\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.match(/Can\'t\ have\ \'continue\'\ outside\ of\ loop/g);
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

	it("should return one of the english versions: Expected hexadecimal digit", function () {
		expect(translation, translation).to.match(/Expected\ hexadecimal\ digit/g);
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

	it("should return one of the english versions: Expected 'while'", function () {
		expect(translation, translation).to.match(/Expected\ \'while\'/g);
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

	it("should return one of the english versions: Label redefined", function () {
		expect(translation, translation).to.match(/Label\ redefined/g);
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

	it("should return one of the english versions: Label not found", function () {
		expect(translation, translation).to.match(/Label\ not\ found/g);
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

	it("should return one of the english versions: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.match(/\'default\'\ can\ only\ appear\ once\ in\ a\ \'switch\'\ statement/g);
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

	it("should return one of the english versions: Expected identifier, string or number", function () {
		expect(translation, translation).to.match(/Expected\ identifier\,\ string\ or\ number/g);
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

	it("should return one of the english versions: Expected '@end'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@end\'/g);
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

	it("should return one of the english versions: Conditional compilation is turned off", function () {
		expect(translation, translation).to.match(/Conditional\ compilation\ is\ turned\ off/g);
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

	it("should return one of the english versions: Expected constant", function () {
		expect(translation, translation).to.match(/Expected\ constant/g);
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

	it("should return one of the english versions: Expected '@'", function () {
		expect(translation, translation).to.match(/Expected\ \'\@\'/g);
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

	it("should return one of the english versions: Expected 'catch'", function () {
		expect(translation, translation).to.match(/Expected\ \'catch\'/g);
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

	it("should return one of the english versions: Expected 'var'", function () {
		expect(translation, translation).to.match(/Expected\ \'var\'/g);
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

	it("should return one of the english versions: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.match(/\'throw\'\ must\ be\ followed\ by\ an\ expression\ on\ the\ same\ source\ line/g);
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

	it("should return one of the english versions: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.match(/\'with\'\ statements\ are\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Duplicate\ formal\ parameter\ names\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Octal\ numeric\ literals\ and\ escape\ characters\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'eval\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.match(/Invalid\ usage\ of\ \'arguments\'\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ expression\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Multiple\ definitions\ of\ a\ property\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.match(/In\ strict\ mode\,\ function\ declarations\ cannot\ be\ nested\ inside\ a\ statement\ or\ block\.\ They\ may\ only\ appear\ at\ the\ top\ level\ or\ directly\ inside\ a\ function\ body\./g);
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

	it("should return one of the english versions: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ keyword\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid/g);
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

	it("should return one of the english versions: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.match(/The\ use\ of\ a\ future\ reserved\ word\ for\ an\ identifier\ is\ invalid\.\ The\ identifier\ name\ is\ reserved\ in\ strict\ mode\./g);
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

	it("should return one of the english versions: Setter functions must have one argument", function () {
		expect(translation, translation).to.match(/Setter\ functions\ must\ have\ one\ argument/g);
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

	it("should return one of the english versions: JavaScript compilation error", function () {
		expect(translation, translation).to.match(/JavaScript\ compilation\ error/g);
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

	it("should return one of the english versions: JavaScript runtime error", function () {
		expect(translation, translation).to.match(/JavaScript\ runtime\ error/g);
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

	it("should return one of the english versions: Unknown runtime error", function () {
		expect(translation, translation).to.match(/Unknown\ runtime\ error/g);
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

	it("should return one of the english versions: Cannot assign to 'this'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'this\'/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Cannot assign to a function result", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ a\ function\ result/g);
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

	it("should return one of the english versions: Cannot index object", function () {
		expect(translation, translation).to.match(/Cannot\ index\ object/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Date object expected", function () {
		expect(translation, translation).to.match(/Date\ object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.match(/Invalid\ left\-hand\ side\ in\ assignment/g);
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

	it("should return one of the english versions: Undefined identifier", function () {
		expect(translation, translation).to.match(/Undefined\ identifier/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Can't execute code from a freed script", function () {
		expect(translation, translation).to.match(/Can\'t\ execute\ code\ from\ a\ freed\ script/g);
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

	it("should return one of the english versions: Object member expected", function () {
		expect(translation, translation).to.match(/Object\ member\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: Regular Expression object expected", function () {
		expect(translation, translation).to.match(/Regular\ Expression\ object\ expected/g);
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

	it("should return one of the english versions: Syntax error in regular expression", function () {
		expect(translation, translation).to.match(/Syntax\ error\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Unexpected quantifier", function () {
		expect(translation, translation).to.match(/Unexpected\ quantifier/g);
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

	it("should return one of the english versions: Expected ']' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\]\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Expected ')' in regular expression", function () {
		expect(translation, translation).to.match(/Expected\ \'\)\'\ in\ regular\ expression/g);
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

	it("should return one of the english versions: Invalid range in character set", function () {
		expect(translation, translation).to.match(/Invalid\ range\ in\ character\ set/g);
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

	it("should return one of the english versions: Exception thrown and not caught", function () {
		expect(translation, translation).to.match(/Exception\ thrown\ and\ not\ caught/g);
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

	it("should return one of the english versions: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.match(/Function\ does\ not\ have\ a\ valid\ prototype\ object/g);
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

	it("should return one of the english versions: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ encoded\ contains\ an\ invalid\ character/g);
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

	it("should return one of the english versions: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.match(/The\ URI\ to\ be\ decoded\ is\ not\ a\ valid\ encoding/g);
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

	it("should return one of the english versions: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.match(/The\ number\ of\ fractional\ digits\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: The precision is out of range", function () {
		expect(translation, translation).to.match(/The\ precision\ is\ out\ of\ range/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ a\ finite\ positive\ integer/g);
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

	it("should return one of the english versions: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.match(/Array\ length\ must\ be\ assigned\ a\ finite\ positive\ number/g);
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

	it("should return one of the english versions: Array object expected", function () {
		expect(translation, translation).to.match(/Array\ object\ expected/g);
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

	it("should return one of the english versions: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.match(/Circular\ reference\ in\ value\ argument\ not\ supported/g);
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

	it("should return one of the english versions: Invalid replacer argument", function () {
		expect(translation, translation).to.match(/Invalid\ replacer\ argument/g);
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

	it("should return one of the english versions: Argument list too large to apply", function () {
		expect(translation, translation).to.match(/Argument\ list\ too\ large\ to\ apply/g);
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

	it("should return one of the english versions: Redeclaration of const property", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ property/g);
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

	it("should return one of the english versions: Object member not configurable", function () {
		expect(translation, translation).to.match(/Object\ member\ not\ configurable/g);
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

	it("should return one of the english versions: Variable undefined in strict mode", function () {
		expect(translation, translation).to.match(/Variable\ undefined\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'caller\'\ property\ of\ a\ function\ or\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'callee\'\ property\ of\ an\ arguments\ object\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Assignment\ to\ read\-only\ properties\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.match(/Cannot\ create\ property\ for\ a\ non\-extensible\ object/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.match(/Property\ cannot\ have\ both\ accessors\ and\ a\ value/g);
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

	it("should return one of the english versions: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: String expected or String expected", function () {
		expect(translation, translation).to.match(/String\ expected|String\ expected/g);
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

	it("should return one of the english versions: Boolean expected or Boolean expected", function () {
		expect(translation, translation).to.match(/Boolean\ expected|Boolean\ expected/g);
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

	it("should return one of the english versions: Date expected", function () {
		expect(translation, translation).to.match(/Date\ expected/g);
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

	it("should return one of the english versions: Number expected or Number expected", function () {
		expect(translation, translation).to.match(/Number\ expected|Number\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Enumerator object expected or Enumerator object expected", function () {
		expect(translation, translation).to.match(/Enumerator\ object\ expected|Enumerator\ object\ expected/g);
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

	it("should return one of the english versions: RegExp object expected", function () {
		expect(translation, translation).to.match(/RegExp\ object\ expected/g);
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

	it("should return one of the english versions: Invalid function argument", function () {
		expect(translation, translation).to.match(/Invalid\ function\ argument/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: JavaScript object expected or JavaScript object expected or JavaScript object expected", function () {
		expect(translation, translation).to.match(/JavaScript\ object\ expected|JavaScript\ object\ expected|JavaScript\ object\ expected/g);
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

	it("should return one of the english versions: Function expected or Function expected or Function expected or Function expected or Function expected", function () {
		expect(translation, translation).to.match(/Function\ expected|Function\ expected|Function\ expected|Function\ expected|Function\ expected/g);
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

	it("should return one of the english versions: VBArray expected or VBArray expected or VBArray expected", function () {
		expect(translation, translation).to.match(/VBArray\ expected|VBArray\ expected|VBArray\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected or Object expected", function () {
		expect(translation, translation).to.match(/Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected|Object\ expected/g);
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

	it("should return one of the english versions: Invalid 'length' property", function () {
		expect(translation, translation).to.match(/Invalid\ \'length\'\ property/g);
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

	it("should return one of the english versions: Array or arguments object expected or Array or arguments object expected", function () {
		expect(translation, translation).to.match(/Array\ or\ arguments\ object\ expected|Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid Operand or Invalid Operand", function () {
		expect(translation, translation).to.match(/Invalid\ Operand|Invalid\ Operand/g);
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

	it("should return one of the english versions: Invalid property descriptor", function () {
		expect(translation, translation).to.match(/Invalid\ property\ descriptor/g);
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

	it("should return one of the english versions: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property/g);
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

	it("should return one of the english versions: Cannot modify non-writable property", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property/g);
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

	it("should return one of the english versions: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property/g);
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

	it("should return one of the english versions: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.match(/Typed\ array\ constructor\ argument\ is\ invalid/g);
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

	it("should return one of the english versions: 'this' is not a typed array object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ typed\ array\ object/g);
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

	it("should return one of the english versions: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.match(/Invalid\ offset\/length\ when\ creating\ typed\ array/g);
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

	it("should return one of the english versions: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.match(/Invalid\ begin\/end\ value\ in\ typed\ array\ subarray\ method/g);
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

	it("should return one of the english versions: Invalid source in typed array set", function () {
		expect(translation, translation).to.match(/Invalid\ source\ in\ typed\ array\ set/g);
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

	it("should return one of the english versions: 'this' is not a DataView object", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ a\ DataView\ object/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.match(/DataView\ operation\ access\ beyond\ specified\ buffer\ length/g);
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

	it("should return one of the english versions: Invalid arguments in DataView or Invalid arguments in DataView", function () {
		expect(translation, translation).to.match(/Invalid\ arguments\ in\ DataView|Invalid\ arguments\ in\ DataView/g);
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

	it("should return one of the english versions: invalid function signature", function () {
		expect(translation, translation).to.match(/invalid\ function\ signature/g);
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

	it("should return one of the english versions: invalid property signature", function () {
		expect(translation, translation).to.match(/invalid\ property\ signature/g);
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

	it("should return one of the english versions: invalid input parameter type", function () {
		expect(translation, translation).to.match(/invalid\ input\ parameter\ type/g);
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

	it("should return one of the english versions: invalid ouput parameter", function () {
		expect(translation, translation).to.match(/invalid\ ouput\ parameter/g);
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

	it("should return one of the english versions: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Accessing\ the\ \'arguments\'\ property\ of\ a\ function\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Inspectable Object expected", function () {
		expect(translation, translation).to.match(/Inspectable\ Object\ expected/g);
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

	it("should return one of the english versions: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: IInspectable expected", function () {
		expect(translation, translation).to.match(/IInspectable\ expected/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property/g);
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

	it("should return one of the english versions: Unknown type", function () {
		expect(translation, translation).to.match(/Unknown\ type/g);
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

	it("should return one of the english versions: Function called with too few arguments", function () {
		expect(translation, translation).to.match(/Function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: Type is not constructible", function () {
		expect(translation, translation).to.match(/Type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ Type\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ Type\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ Date\ to\ Windows\.Foundation\.DateTime\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ Windows\.Foundation\.TimeSpan\:\ value\ outside\ of\ valid\ range/g);
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

	it("should return one of the english versions: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Invalid\ access\ to\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.match(/Cannot\ release\ already\ released\ Inspectable\ Object/g);
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

	it("should return one of the english versions: 'this' is not of the expected type", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ the\ expected\ type/g);
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

	it("should return one of the english versions: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.match(/Illegal\ length\ and\ size\ specified\ for\ the\ array/g);
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

	it("should return one of the english versions: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/An\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.match(/Status\ is\ \'error\'\,\ but\ getResults\ did\ not\ return\ an\ error/g);
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

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler/g);
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

	it("should return one of the english versions: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
	});
});
describe("translating ja-JP string: 無限大", function () {
	var translation;
	before(function (done) {
		errorToEnglish("無限大", function (err, _translation) {
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

	it("should return one of the english versions: -Infinity", function () {
		expect(translation, translation).to.match(/\-Infinity/g);
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

	it("should return one of the english versions: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Object\ doesn\'t\ support\ property\ or\ method\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.match(/Argument\ to\ the\ function\ \'MyDynamicTestString\'\ is\ not\ optional/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ number/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ function/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ indexable\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ string/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ date\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ null\ or\ not\ an\ object/g);
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

	it("should return one of the english versions: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ assign\ to\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ undefined/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ boolean/g);
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

	it("should return one of the english versions: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ delete\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ VBArray/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ an\ enumerator\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ is\ not\ a\ regular\ expression\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ or\ arguments\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\ is\ not\ an\ Array\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'true\'\ on\ this\ object/g);
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

	it("should return one of the english versions: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.match(/\'MyDynamicTestString\'\ attribute\ on\ the\ property\ descriptor\ cannot\ be\ set\ to\ \'false\'\ on\ this\ object/g);
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

	it("should return one of the english versions: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Redeclaration\ of\ const\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.match(/Calling\ delete\ on\ \'MyDynamicTestString\'\ is\ not\ allowed\ in\ strict\ mode/g);
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

	it("should return one of the english versions: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ set\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ get\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.match(/Unable\ to\ delete\ property\ \'MyDynamicTestString\'\ of\ undefined\ or\ null\ reference/g);
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

	it("should return one of the english versions: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.match(/Unable\ to\ access\ property\ \'MyDynamicTestString\'\:\ type\ \'VarDate\'\ does\ not\ support\ user\-defined\ properties/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.match(/The\ value\ of\ the\ property\ \'MyDynamicTestString\'\ is\ null\ or\ undefined\,\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ String\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Boolean\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Date\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ Number\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Enumerator\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ a\ RegExp\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ invalid\ argument/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ JavaScript\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ Function\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ a\ VBArray\ object/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ null\ or\ undefined/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ is\ not\ an\ Object\ and\ is\ not\ null/g);
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

	it("should return one of the english versions: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ argument\ does\ not\ have\ a\ valid\ \'length\'\ property/g);
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

	it("should return one of the english versions: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ Array\ or\ arguments\ object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Object\ expected/g);
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

	it("should return one of the english versions: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.match(/Invalid\ operand\ to\ \'MyDynamicTestString\'\:\ Function\ expected/g);
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

	it("should return one of the english versions: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Invalid\ descriptor\ for\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'\:\ object\ is\ not\ extensible/g);
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

	it("should return one of the english versions: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ redefine\ non\-configurable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ non\-writable\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.match(/Cannot\ modify\ property\ \'MyDynamicTestString\'\:\ \'length\'\ is\ not\ writable/g);
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

	it("should return one of the english versions: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Cannot\ define\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.match(/Required\ argument\ MyDynamicTestString\ in\ DataView\ method\ is\ not\ specified/g);
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

	it("should return one of the english versions: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.match(/DataView\ constructor\ argument\ MyDynamicTestString\ is\ invalid/g);
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

	it("should return one of the english versions: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.match(/The\ function\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ called/g);
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

	it("should return one of the english versions: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.match(/The\ property\ \'MyDynamicTestString\'\ has\ an\ invalid\ signature\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.match(/The\ runtimeclass\ MyDynamicTestString\ that\ has\ Windows\.Foundation\.IPropertyValue\ as\ default\ interface\ is\ not\ supported\ as\ input\ parameter\ type/g);
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

	it("should return one of the english versions: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.match(/The\ object\ with\ interface\ Windows\.Foundation\.IPropertyValue\ that\ has\ runtimeclass\ name\ MyDynamicTestString\ is\ not\ supported\ as\ out\ parameter/g);
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

	it("should return one of the english versions: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ \'this\'\ is\ not\ an\ Inspectable\ Object/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'char\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ argument\ to\ type\ \'GUID\'/g);
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

	it("should return one of the english versions: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ could\ not\ convert\ return\ value\ to\ IInspectable/g);
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

	it("should return one of the english versions: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ object\ to\ struct\:\ object\ missing\ expected\ property\ \'MyDynamicTestString\'/g);
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

	it("should return one of the english versions: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.match(/Type\ \'MyDynamicTestString\'\ not\ found/g);
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

	it("should return one of the english versions: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ function\ called\ with\ too\ few\ arguments/g);
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

	it("should return one of the english versions: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ type\ is\ not\ constructible/g);
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

	it("should return one of the english versions: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ PropertyValue\:\ MyDynamicTestString\ not\ supported\ by\ PropertyValue/g);
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

	it("should return one of the english versions: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.match(/Could\ not\ convert\ value\ to\ IInspectable\:\ MyDynamicTestString\ not\ supported\ by\ IInspectable/g);
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

	it("should return one of the english versions: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ The\ Inspectable\ object\ \'this\'\ is\ released\ and\ cannot\ be\ accessed/g);
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

	it("should return one of the english versions: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.match(/\'this\'\ is\ not\ of\ expected\ type\:\ MyDynamicTestString/g);
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

	it("should return one of the english versions: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.match(/MyDynamicTestString\:\ an\ unexpected\ failure\ occurred\ while\ trying\ to\ obtain\ metadata\ information/g);
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

	it("should return one of the english versions: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.match(/The\ specified\ date\ is\ not\ available\ in\ the\ current\ locale\'s\ calendar/g);
	});
});
