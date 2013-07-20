var errorToEnglish = require("../../lib/errortoenglish");
describe("translating ko-KR string: 프로시저 호출 또는 인수가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("프로시저 호출 또는 인수가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 오버플로", function () {
	var translation;
	before(function (done) {
		errorToEnglish("오버플로", function (err, _translation) {
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
describe("translating ko-KR string: 메모리 부족", function () {
	var translation;
	before(function (done) {
		errorToEnglish("메모리 부족", function (err, _translation) {
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
describe("translating ko-KR string: 첨자 사용이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("첨자 사용이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 이 배열은 고정되었거나 일시적으로 잠금 상태입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("이 배열은 고정되었거나 일시적으로 잠금 상태입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 0으로 나누기", function () {
	var translation;
	before(function (done) {
		errorToEnglish("0으로 나누기", function (err, _translation) {
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
describe("translating ko-KR string: 형식이 일치하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("형식이 일치하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 문자열 공간을 넘어갑니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("문자열 공간을 넘어갑니다.", function (err, _translation) {
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
describe("translating ko-KR string: 요청한 작업을 수행할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("요청한 작업을 수행할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 스택 공간 부족", function () {
	var translation;
	before(function (done) {
		errorToEnglish("스택 공간 부족", function (err, _translation) {
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
describe("translating ko-KR string: Sub 또는 Function이 정의되지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Sub 또는 Function이 정의되지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: DLL을 읽어들이는 데 오류 발생", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DLL을 읽어들이는 데 오류 발생", function (err, _translation) {
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
describe("translating ko-KR string: 내부 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("내부 오류", function (err, _translation) {
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
describe("translating ko-KR string: 파일 이름이나 숫자가 적합하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("파일 이름이나 숫자가 적합하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 파일을 찾을 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("파일을 찾을 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 비적합 파일 모드", function () {
	var translation;
	before(function (done) {
		errorToEnglish("비적합 파일 모드", function (err, _translation) {
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
describe("translating ko-KR string: 이미 열려 있는 파일입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("이미 열려 있는 파일입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 장치 I/O 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("장치 I/O 오류", function (err, _translation) {
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
describe("translating ko-KR string: 파일이 이미 존재합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("파일이 이미 존재합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 디스크에 여유 공간이 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("디스크에 여유 공간이 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 파일의 끝을 넘어가는 입력입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("파일의 끝을 넘어가는 입력입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 파일이 너무 많습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("파일이 너무 많습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 사용할 수 없는 장치입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("사용할 수 없는 장치입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 사용 권한이 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("사용 권한이 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 디스크가 준비되지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("디스크가 준비되지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 드라이브 이름을 바꿀 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("드라이브 이름을 바꿀 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 경로/파일 접근 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("경로/파일 접근 오류", function (err, _translation) {
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
describe("translating ko-KR string: 경로를 찾을 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("경로를 찾을 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체 변수 또는 With 문의 변수가 설정되어 있지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체 변수 또는 With 문의 변수가 설정되어 있지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: For 루프를 초기화하지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("For 루프를 초기화하지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: Null 값의 사용이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Null 값의 사용이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 필요한 임시 파일을 만들 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("필요한 임시 파일을 만들 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 자동화 서버는 개체를 작성할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("자동화 서버는 개체를 작성할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 클래스가 자동화를 지원하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("클래스가 자동화를 지원하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 자동화 수행 중 파일 이름이나 클래스 이름을 찾을 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("자동화 수행 중 파일 이름이나 클래스 이름을 찾을 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 이 속성 또는 메서드를 지원하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 이 속성 또는 메서드를 지원하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 자동화 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("자동화 오류", function (err, _translation) {
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
describe("translating ko-KR string: 개체는 이 기능을 지원하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체는 이 기능을 지원하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체는 지정된 인수를 지원하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체는 지정된 인수를 지원하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체는 현재의 로케일 설정을 지원하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체는 현재의 로케일 설정을 지원하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 지정된 인수를 찾을 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("지정된 인수를 찾을 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 인수를 선택할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("인수를 선택할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 인수의 개수나 속성 할당이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("인수의 개수나 속성 할당이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 컬렉션이 아닌 개체입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("컬렉션이 아닌 개체입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 지정한 DLL 함수를 찾을 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("지정한 DLL 함수를 찾을 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 변수에 JavaScript에서 지원하지 않는 자동화 형식이 사용되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("변수에 JavaScript에서 지원하지 않는 자동화 형식이 사용되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 원격 서버가 존재하지 않거나 사용할 수 없는 상태입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("원격 서버가 존재하지 않거나 사용할 수 없는 상태입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 변수에 할당할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("변수에 할당할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 스크립트에 안전하지 않은 개체입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("스크립트에 안전하지 않은 개체입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 초기화에 안전하지 않은 개체입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("초기화에 안전하지 않은 개체입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 만들기에 안전하지 않은 개체입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("만들기에 안전하지 않은 개체입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 예외 사항 발생", function () {
	var translation;
	before(function (done) {
		errorToEnglish("예외 사항 발생", function (err, _translation) {
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
describe("translating ko-KR string: 메모리 부족", function () {
	var translation;
	before(function (done) {
		errorToEnglish("메모리 부족", function (err, _translation) {
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
describe("translating ko-KR string: 구문 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("구문 오류", function (err, _translation) {
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
describe("translating ko-KR string: ':'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("':'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: ';'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("';'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: '('가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'('가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: ')'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("')'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: ']'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("']'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: '{'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'{'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: '}'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'}'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 식별자가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("식별자가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: '='가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'='가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: '/'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'/'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 유효하지 않은 숫자입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("유효하지 않은 숫자입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 유효하지 않은 문자입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("유효하지 않은 문자입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 종결되지 않은 문자열 상수입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("종결되지 않은 문자열 상수입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 종결되지 않은 주석입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("종결되지 않은 주석입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수 밖의 'return' 문장", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수 밖의 'return' 문장", function (err, _translation) {
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
describe("translating ko-KR string: 루프 밖에서는 'break'을 사용할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("루프 밖에서는 'break'을 사용할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 루프 밖에서는 'continue'를 사용할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("루프 밖에서는 'continue'를 사용할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 16진수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("16진수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'while'이 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'while'이 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 레이블이 재정의되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("레이블이 재정의되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 레이블을 찾을 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("레이블을 찾을 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'switch'문에서 'default'는 한번만 나타날 수 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'switch'문에서 'default'는 한번만 나타날 수 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 식별자나 문자열 또는 숫자가  필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("식별자나 문자열 또는 숫자가  필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: '@end'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@end'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 조건부 컴파일이 해제되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("조건부 컴파일이 해제되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 상수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("상수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: '@'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'@'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'catch'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'catch'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'var'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'var'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 수식이 'throw'와 같은 줄에 반드시 뒤따라야 합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("수식이 'throw'와 같은 줄에 반드시 뒤따라야 합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서는 'with' 문을 사용할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서는 'with' 문을 사용할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서는 형식 매개 변수 이름을 중복하여 사용할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서는 형식 매개 변수 이름을 중복하여 사용할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서는 8진수 리터럴과 이스케이프 문자를 사용할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서는 8진수 리터럴과 이스케이프 문자를 사용할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서 'eval' 사용 방법이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서 'eval' 사용 방법이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서 'arguments' 사용 방법이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서 'arguments' 사용 방법이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서는 식에서 delete를 호출할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서는 식에서 delete를 호출할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서는 속성을 여러 번 정의할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서는 속성을 여러 번 정의할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: strict 모드에서는 문 또는 블록 안에 함수 선언을 중첩할 수 없습니다. 최상위 수준이나 함수 본문 바로 안에만 표시될 수 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict 모드에서는 문 또는 블록 안에 함수 선언을 중첩할 수 없습니다. 최상위 수준이나 함수 본문 바로 안에만 표시될 수 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 식별자에 대한 키워드 사용이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("식별자에 대한 키워드 사용이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 식별자에 대한 미래 예약어 사용이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("식별자에 대한 미래 예약어 사용이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 식별자에 대한 미래 예약어 사용이 잘못되었습니다. 식별자 이름이 strict 모드에서 예약되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("식별자에 대한 미래 예약어 사용이 잘못되었습니다. 식별자 이름이 strict 모드에서 예약되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: Setter 함수에는 하나의 인수가 있어야 합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Setter 함수에는 하나의 인수가 있어야 합니다.", function (err, _translation) {
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
describe("translating ko-KR string: JavaScript 컴파일 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 컴파일 오류", function (err, _translation) {
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
describe("translating ko-KR string: JavaScript 런타임 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 런타임 오류", function (err, _translation) {
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
describe("translating ko-KR string: 알 수 없는 런타임 오류", function () {
	var translation;
	before(function (done) {
		errorToEnglish("알 수 없는 런타임 오류", function (err, _translation) {
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
describe("translating ko-KR string: 'this'에 할당할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this'에 할당할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 숫자가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("숫자가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수 결과에 할당할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수 결과에 할당할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체를 인덱스할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체를 인덱스할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 문자열이 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("문자열이 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 날짜 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("날짜 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 왼쪽에 할당된 값이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("왼쪽에 할당된 값이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정의되지 않은 식별자", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정의되지 않은 식별자", function (err, _translation) {
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
describe("translating ko-KR string: Boolean이 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boolean이 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 삭제된 스크립트의 코드는 수행할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("삭제된 스크립트의 코드는 수행할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체 구성원이 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체 구성원이 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: VBArray가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: JavaScript 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 열거형 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("열거형 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정규식 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정규식 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정규식에 구문 오류가 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정규식에 구문 오류가 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 예기치 않은 수량사", function () {
	var translation;
	before(function (done) {
		errorToEnglish("예기치 않은 수량사", function (err, _translation) {
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
describe("translating ko-KR string: 정규식에 ']'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정규식에 ']'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정규식에 ')'가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정규식에 ')'가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 잘못된 범주의 문자 집합입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("잘못된 범주의 문자 집합입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 예외가 발생했지만 catch할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("예외가 발생했지만 catch할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수에 유효한 표준 개체가 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수에 유효한 표준 개체가 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 인코딩될 URI가 유효하지 않은 문자를 포함하고 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("인코딩될 URI가 유효하지 않은 문자를 포함하고 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 디코딩될 URI가 유효한 인코딩이 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("디코딩될 URI가 유효한 인코딩이 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 소수부  자리수가 범위를 초과하였습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("소수부  자리수가 범위를 초과하였습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정밀도가 범위를 초과하였습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정밀도가 범위를 초과하였습니다.", function (err, _translation) {
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
describe("translating ko-KR string: Array 또는 arguments 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array 또는 arguments 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 배열의 길이는 유한한 양의 정수이어야 합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("배열의 길이는 유한한 양의 정수이어야 합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 배열의 길이는 유한한 양수로 할당해야 합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("배열의 길이는 유한한 양수로 할당해야 합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 배열 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("배열 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 값 인수에 순환 참조를 사용하는 것은 지원되지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("값 인수에 순환 참조를 사용하는 것은 지원되지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 치환 인수가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("치환 인수가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 인수 목록이 너무 커서 적용할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("인수 목록이 너무 커서 적용할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: const 속성 다시 선언", function () {
	var translation;
	before(function (done) {
		errorToEnglish("const 속성 다시 선언", function (err, _translation) {
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
describe("translating ko-KR string: 개체 구성원을 구성할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체 구성원을 구성할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서 변수가 정의되지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서 변수가 정의되지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: strict 모드에서는 함수 또는 인수 개체의 'caller' 속성에 액세스할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict 모드에서는 함수 또는 인수 개체의 'caller' 속성에 액세스할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: strict 모드에서는 인수 개체의 'callee' 속성에 액세스할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict 모드에서는 인수 개체의 'callee' 속성에 액세스할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: strict 모드에서는 읽기 전용 속성에 할당할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict 모드에서는 읽기 전용 속성에 할당할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 확장 가능하지 않은 개체에 대해 속성을 만들 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("확장 가능하지 않은 개체에 대해 속성을 만들 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 속성에 접근자와 값을 둘 다 지정할 수는 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("속성에 접근자와 값을 둘 다 지정할 수는 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'this'가 null이거나 정의되지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this'가 null이거나 정의되지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 문자열이 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("문자열이 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: Boolean이 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Boolean이 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 날짜가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("날짜가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 숫자가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("숫자가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: VBArray가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: JavaScript 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 열거형 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("열거형 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: RegExp 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("RegExp 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수 인수가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수 인수가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: JavaScript 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("JavaScript 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 함수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("함수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: VBArray가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("VBArray가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'length' 속성이 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'length' 속성이 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: Array 또는 arguments 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Array 또는 arguments 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 피연산자가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("피연산자가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 피연산자가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("피연산자가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 속성 설명자가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("속성 설명자가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 속성을 정의할 수 없습니다. 개체가 확장 가능하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("속성을 정의할 수 없습니다. 개체가 확장 가능하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 구성 가능하지 않은 속성을 재정의할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("구성 가능하지 않은 속성을 재정의할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 쓰기 가능하지 않은 속성을 수정할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("쓰기 가능하지 않은 속성을 수정할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 속성을 수정할 수 없습니다. 'length'를 쓸 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("속성을 수정할 수 없습니다. 'length'를 쓸 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 속성을 정의할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("속성을 정의할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 형식화된 배열 생성자 인수가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("형식화된 배열 생성자 인수가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'this'가 형식화된 배열 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this'가 형식화된 배열 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 형식화된 배열을 만들 때의 오프셋/길이가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("형식화된 배열을 만들 때의 오프셋/길이가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 형식화된 배열의 하위 배열 메서드에 잘못된 시작/끝 값이 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("형식화된 배열의 하위 배열 메서드에 잘못된 시작/끝 값이 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 형식화된 배열 집합에 잘못된 원본이 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("형식화된 배열 집합에 잘못된 원본이 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'this'가 DataView 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'this'가 DataView 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: DataView에 잘못된 인수가 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView에 잘못된 인수가 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: DataView 작업이 지정된 버퍼 길이를 초과하여 액세스합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 작업이 지정된 버퍼 길이를 초과하여 액세스합니다.", function (err, _translation) {
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
describe("translating ko-KR string: DataView에 잘못된 인수가 있습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView에 잘못된 인수가 있습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 잘못된 함수 서명", function () {
	var translation;
	before(function (done) {
		errorToEnglish("잘못된 함수 서명", function (err, _translation) {
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
describe("translating ko-KR string: 잘못된 속성 서명", function () {
	var translation;
	before(function (done) {
		errorToEnglish("잘못된 속성 서명", function (err, _translation) {
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
describe("translating ko-KR string: 잘못된 입력 매개 변수 형식", function () {
	var translation;
	before(function (done) {
		errorToEnglish("잘못된 입력 매개 변수 형식", function (err, _translation) {
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
describe("translating ko-KR string: 잘못된 출력 매개 변수", function () {
	var translation;
	before(function (done) {
		errorToEnglish("잘못된 출력 매개 변수", function (err, _translation) {
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
describe("translating ko-KR string: strict 모드에서는 함수의 'arguments' 속성에 액세스할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("strict 모드에서는 함수의 'arguments' 속성에 액세스할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: Inspectable 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Inspectable 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'char' 유형으로 인수를 변환할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'char' 유형으로 인수를 변환할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'GUID' 유형으로 인수를 변환할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'GUID' 유형으로 인수를 변환할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: IInspectable이 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("IInspectable이 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체를 구조체로 변환할 수 없습니다. 개체에 필요한 속성이 누락되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체를 구조체로 변환할 수 없습니다. 개체에 필요한 속성이 누락되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 알 수 없는 형식", function () {
	var translation;
	before(function (done) {
		errorToEnglish("알 수 없는 형식", function (err, _translation) {
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
describe("translating ko-KR string: 너무 적은 인수로 호출된 함수입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("너무 적은 인수로 호출된 함수입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 유형은 구성할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("유형은 구성할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 값을 PropertyValue로 변환할 수 없습니다. PropertyValue에서 지원하지 않는 유형입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("값을 PropertyValue로 변환할 수 없습니다. PropertyValue에서 지원하지 않는 유형입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 값을 IInspectable로 변환할 수 없습니다. IInspectable에서 지원하지 않는 유형입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("값을 IInspectable로 변환할 수 없습니다. IInspectable에서 지원하지 않는 유형입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 날짜를 Windows.Foundation.DateTime으로 변환할 수 없습니다. 유효한 범위에 있지 않은 값입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("날짜를 Windows.Foundation.DateTime으로 변환할 수 없습니다. 유효한 범위에 있지 않은 값입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 값을 Windows.Foundation.TimeSpan으로 변환할 수 없습니다. 유효한 범위를 벗어난 값입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("값을 Windows.Foundation.TimeSpan으로 변환할 수 없습니다. 유효한 범위를 벗어난 값입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 이미 릴리스된 Inspectable 개체에 대한 잘못된 액세스입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("이미 릴리스된 Inspectable 개체에 대한 잘못된 액세스입니다.", function (err, _translation) {
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
describe("translating ko-KR string: 이미 릴리스된 Inspectable 개체는 릴리스할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("이미 릴리스된 Inspectable 개체는 릴리스할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: '이것'은 예상 형식이 아님", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'이것'은 예상 형식이 아님", function (err, _translation) {
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
describe("translating ko-KR string: 배열에 지정된 길이 및 크기가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("배열에 지정된 길이 및 크기가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 메타데이터 정보를 가져오는 동안 예기치 않은 오류가 발생했습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("메타데이터 정보를 가져오는 동안 예기치 않은 오류가 발생했습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 상태는 '오류'지만, getResults에서 오류를 반환하지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("상태는 '오류'지만, getResults에서 오류를 반환하지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 완료된 처리기에 누락되거나 잘못된 상태 매개 변수가 전달됨", function () {
	var translation;
	before(function (done) {
		errorToEnglish("완료된 처리기에 누락되거나 잘못된 상태 매개 변수가 전달됨", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler or Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler|Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
	});
});
describe("translating ko-KR string: 완료된 처리기에 누락되거나 잘못된 상태 매개 변수가 전달됨", function () {
	var translation;
	before(function (done) {
		errorToEnglish("완료된 처리기에 누락되거나 잘못된 상태 매개 변수가 전달됨", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: Missing or invalid status parameter passed to completed handler or Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.match(/Missing\ or\ invalid\ status\ parameter\ passed\ to\ completed\ handler|Missing\ or\ invalid\ sender\ parameter\ passed\ to\ completed\ handler/g);
	});
});
describe("translating ko-KR string: 무한대", function () {
	var translation;
	before(function (done) {
		errorToEnglish("무한대", function (err, _translation) {
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
describe("translating ko-KR string: -무한대", function () {
	var translation;
	before(function (done) {
		errorToEnglish("-무한대", function (err, _translation) {
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
describe("translating ko-KR string: 개체가 'MyDynamicTestString' 속성이나 메서드를 지원하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체가 'MyDynamicTestString' 속성이나 메서드를 지원하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 함수에는 인수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 함수에는 인수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) 숫자가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) 숫자가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) 함수가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) 함수가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) 인덱스를 지정할 수 있는 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) 인덱스를 지정할 수 있는 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) 문자열이 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) 문자열이 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) 날짜 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) 날짜 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) null이거나 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) null이거나 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'에 할당할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'에 할당할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'이(가) 정의되지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'이(가) 정의되지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) boolean이 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) boolean이 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'을(를) 삭제할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'을(를) 삭제할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) VBArray가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) VBArray가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) JavaScript 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) JavaScript 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) 열거형 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) 열거형 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'은(는) 정규식 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'은(는) 정규식 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString은(는] Array 또는 arguments 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString은(는] Array 또는 arguments 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString은(는) 배열(Array) 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString은(는) 배열(Array) 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 속성 설명자의 'MyDynamicTestString' 특성은 이 개체에 대해 'true'로 설정할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("속성 설명자의 'MyDynamicTestString' 특성은 이 개체에 대해 'true'로 설정할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 속성 설명자의 'MyDynamicTestString' 특성은 이 개체에 대해 'false'로 설정할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("속성 설명자의 'MyDynamicTestString' 특성은 이 개체에 대해 'false'로 설정할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: const 'MyDynamicTestString' 다시 선언", function () {
	var translation;
	before(function (done) {
		errorToEnglish("const 'MyDynamicTestString' 다시 선언", function (err, _translation) {
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
describe("translating ko-KR string: 엄격 모드에서는 'MyDynamicTestString'에서 delete를 호출할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("엄격 모드에서는 'MyDynamicTestString'에서 delete를 호출할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정의되지 않음 또는 null 참조인 'MyDynamicTestString' 속성을 설정할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정의되지 않음 또는 null 참조인 'MyDynamicTestString' 속성을 설정할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정의되지 않음 또는 null 참조인 'MyDynamicTestString' 속성을 가져올 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정의되지 않음 또는 null 참조인 'MyDynamicTestString' 속성을 가져올 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 정의되지 않음 또는 null 참조인 'MyDynamicTestString' 속성을 삭제할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("정의되지 않음 또는 null 참조인 'MyDynamicTestString' 속성을 삭제할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성 값에 액세스할 수 없습니다. 'VarDate' 형식이 사용자 정의 속성을 지원하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성 값에 액세스할 수 없습니다. 'VarDate' 형식이 사용자 정의 속성을 지원하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성 값이 Function 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성 값이 Function 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성 값이 null이거나 정의되지 않았습니다. Function 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성 값이 null이거나 정의되지 않았습니다. Function 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 null이거나 정의되지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 null이거나 정의되지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 Object가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 Object가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 Function 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 Function 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 String 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 String 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 Boolean 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 Boolean 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 Date 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 Date 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 Number 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 Number 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 VBArray 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 VBArray 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 JavaScript 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 JavaScript 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 Enumerator 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 Enumerator 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'가 RegExp 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'가 RegExp 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수가 Object가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수가 Object가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수가 JavaScript 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수가 JavaScript 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수가 Function 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수가 Function 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수가 VBArray 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수가 VBArray 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수가 null이거나 정의되지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수가 null이거나 정의되지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수가 Object가 아니고 null도 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수가 Object가 아니고 null도 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수에 올바른 'length' 속성이 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수에 올바른 'length' 속성이 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 배열 또는 인수 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 배열 또는 인수 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'에 대한 피연산자가 잘못되었습니다. 개체가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'에 대한 피연산자가 잘못되었습니다. 개체가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString'에 대한 피연산자가 잘못되었습니다. 함수가 필요합니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString'에 대한 피연산자가 잘못되었습니다. 함수가 필요합니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성에 대한 설명자가 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성에 대한 설명자가 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성을 정의할 수 없습니다. 개체가 확장 가능하지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성을 정의할 수 없습니다. 개체가 확장 가능하지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 구성 가능하지 않은 속성 'MyDynamicTestString'을(를) 재정의할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("구성 가능하지 않은 속성 'MyDynamicTestString'을(를) 재정의할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 구성 가능하지 않은 속성 'MyDynamicTestString'을(를) 수정할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("구성 가능하지 않은 속성 'MyDynamicTestString'을(를) 수정할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성을 수정할 수 없습니다. 'length'를 쓸 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성을 수정할 수 없습니다. 'length'를 쓸 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성을 정의할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성을 정의할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: DataView 메서드의 필수 인수 MyDynamicTestString을(를) 지정하지 않았습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 메서드의 필수 인수 MyDynamicTestString을(를) 지정하지 않았습니다.", function (err, _translation) {
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
describe("translating ko-KR string: DataView 생성자 인수 MyDynamicTestString이(가) 잘못되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("DataView 생성자 인수 MyDynamicTestString이(가) 잘못되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 함수에 잘못된 서명이 있으며 호출할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 함수에 잘못된 서명이 있으며 호출할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 속성에 잘못된 서명이 있으며 액세스할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 속성에 잘못된 서명이 있으며 액세스할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: Windows.Foundation.IPropertyValue를 기본 인터페이스로 사용하는 runtimeclass MyDynamicTestString은(는) 입력 매개 변수 형식으로 지원되지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("Windows.Foundation.IPropertyValue를 기본 인터페이스로 사용하는 runtimeclass MyDynamicTestString은(는) 입력 매개 변수 형식으로 지원되지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: runtimeclass 이름이 MyDynamicTestString인 인터페이스 Windows.Foundation.IPropertyValue를 사용하는 개체는 출력 매개 변수로 지원되지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("runtimeclass 이름이 MyDynamicTestString인 인터페이스 Windows.Foundation.IPropertyValue를 사용하는 개체는 출력 매개 변수로 지원되지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 'this'는 Inspectable 개체가 아닙니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 'this'는 Inspectable 개체가 아닙니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수를 'char' 유형으로 변환할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수를 'char' 유형으로 변환할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 인수를 'GUID' 유형으로 변환할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 인수를 'GUID' 유형으로 변환할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 반환 값을 IInspectable로 변환할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 반환 값을 IInspectable로 변환할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 개체를 구조체로 변환할 수 없습니다. 개체에 필요한 속성 'MyDynamicTestString'이(가) 누락되었습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("개체를 구조체로 변환할 수 없습니다. 개체에 필요한 속성 'MyDynamicTestString'이(가) 누락되었습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 'MyDynamicTestString' 유형을 찾지 못했습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'MyDynamicTestString' 유형을 찾지 못했습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 너무 적은 인수로 호출된 함수입니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 너무 적은 인수로 호출된 함수입니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 유형을 구성할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 유형을 구성할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 값을 PropertyValue로 변환할 수 없습니다. MyDynamicTestString은(는) PropertyValue에서 지원되지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("값을 PropertyValue로 변환할 수 없습니다. MyDynamicTestString은(는) PropertyValue에서 지원되지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 값을 IInspectable로 변환할 수 없습니다. MyDynamicTestString은(는) IInspectable에서 지원되지 않습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("값을 IInspectable로 변환할 수 없습니다. MyDynamicTestString은(는) IInspectable에서 지원되지 않습니다.", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: Inspectable 개체 'this'가 릴리스되었으며 액세스할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: Inspectable 개체 'this'가 릴리스되었으며 액세스할 수 없습니다.", function (err, _translation) {
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
describe("translating ko-KR string: '이것'은 예상 형식이 아님: MyDynamicTestString", function () {
	var translation;
	before(function (done) {
		errorToEnglish("'이것'은 예상 형식이 아님: MyDynamicTestString", function (err, _translation) {
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
describe("translating ko-KR string: MyDynamicTestString: 메타데이터 정보를 가져오는 동안 예기치 않은 오류가 발생했습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("MyDynamicTestString: 메타데이터 정보를 가져오는 동안 예기치 않은 오류가 발생했습니다.", function (err, _translation) {
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
describe("translating ko-KR string: 현재 로케일의 달력에서는 지정한 날짜를 사용할 수 없습니다.", function () {
	var translation;
	before(function (done) {
		errorToEnglish("현재 로케일의 달력에서는 지정한 날짜를 사용할 수 없습니다.", function (err, _translation) {
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
