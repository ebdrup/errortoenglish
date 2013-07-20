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

	it("should return the english version: Invalid procedure call or argument", function () {
		expect(translation, translation).to.equal("Invalid procedure call or argument");
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

	it("should return the english version: Overflow", function () {
		expect(translation, translation).to.equal("Overflow");
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

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
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

	it("should return the english version: Subscript out of range", function () {
		expect(translation, translation).to.equal("Subscript out of range");
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

	it("should return the english version: This array is fixed or temporarily locked", function () {
		expect(translation, translation).to.equal("This array is fixed or temporarily locked");
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

	it("should return the english version: Division by zero", function () {
		expect(translation, translation).to.equal("Division by zero");
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

	it("should return the english version: Type mismatch", function () {
		expect(translation, translation).to.equal("Type mismatch");
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

	it("should return the english version: Out of string space", function () {
		expect(translation, translation).to.equal("Out of string space");
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

	it("should return the english version: Can't perform requested operation", function () {
		expect(translation, translation).to.equal("Can't perform requested operation");
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

	it("should return the english version: Out of stack space", function () {
		expect(translation, translation).to.equal("Out of stack space");
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

	it("should return the english version: Sub or Function not defined", function () {
		expect(translation, translation).to.equal("Sub or Function not defined");
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

	it("should return the english version: Error in loading DLL", function () {
		expect(translation, translation).to.equal("Error in loading DLL");
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

	it("should return the english version: Internal error", function () {
		expect(translation, translation).to.equal("Internal error");
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

	it("should return the english version: Bad file name or number", function () {
		expect(translation, translation).to.equal("Bad file name or number");
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

	it("should return the english version: File not found", function () {
		expect(translation, translation).to.equal("File not found");
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

	it("should return the english version: Bad file mode", function () {
		expect(translation, translation).to.equal("Bad file mode");
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

	it("should return the english version: File already open", function () {
		expect(translation, translation).to.equal("File already open");
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

	it("should return the english version: Device I/O error", function () {
		expect(translation, translation).to.equal("Device I/O error");
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

	it("should return the english version: File already exists", function () {
		expect(translation, translation).to.equal("File already exists");
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

	it("should return the english version: Disk full", function () {
		expect(translation, translation).to.equal("Disk full");
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

	it("should return the english version: Input past end of file", function () {
		expect(translation, translation).to.equal("Input past end of file");
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

	it("should return the english version: Too many files", function () {
		expect(translation, translation).to.equal("Too many files");
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

	it("should return the english version: Device unavailable", function () {
		expect(translation, translation).to.equal("Device unavailable");
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

	it("should return the english version: Permission denied", function () {
		expect(translation, translation).to.equal("Permission denied");
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

	it("should return the english version: Disk not ready", function () {
		expect(translation, translation).to.equal("Disk not ready");
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

	it("should return the english version: Can't rename with different drive", function () {
		expect(translation, translation).to.equal("Can't rename with different drive");
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

	it("should return the english version: Path/File access error", function () {
		expect(translation, translation).to.equal("Path/File access error");
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

	it("should return the english version: Path not found", function () {
		expect(translation, translation).to.equal("Path not found");
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

	it("should return the english version: Object variable or With block variable not set", function () {
		expect(translation, translation).to.equal("Object variable or With block variable not set");
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

	it("should return the english version: For loop not initialized", function () {
		expect(translation, translation).to.equal("For loop not initialized");
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

	it("should return the english version: Invalid use of Null", function () {
		expect(translation, translation).to.equal("Invalid use of Null");
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

	it("should return the english version: Can't create necessary temporary file", function () {
		expect(translation, translation).to.equal("Can't create necessary temporary file");
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

	it("should return the english version: Object required", function () {
		expect(translation, translation).to.equal("Object required");
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

	it("should return the english version: Automation server can't create object", function () {
		expect(translation, translation).to.equal("Automation server can't create object");
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

	it("should return the english version: Class doesn't support Automation", function () {
		expect(translation, translation).to.equal("Class doesn't support Automation");
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

	it("should return the english version: File name or class name not found during Automation operation", function () {
		expect(translation, translation).to.equal("File name or class name not found during Automation operation");
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

	it("should return the english version: Object doesn't support this property or method", function () {
		expect(translation, translation).to.equal("Object doesn't support this property or method");
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

	it("should return the english version: Automation error", function () {
		expect(translation, translation).to.equal("Automation error");
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

	it("should return the english version: Object doesn't support this action", function () {
		expect(translation, translation).to.equal("Object doesn't support this action");
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

	it("should return the english version: Object doesn't support named arguments", function () {
		expect(translation, translation).to.equal("Object doesn't support named arguments");
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

	it("should return the english version: Object doesn't support current locale setting", function () {
		expect(translation, translation).to.equal("Object doesn't support current locale setting");
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

	it("should return the english version: Named argument not found", function () {
		expect(translation, translation).to.equal("Named argument not found");
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

	it("should return the english version: Argument not optional", function () {
		expect(translation, translation).to.equal("Argument not optional");
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

	it("should return the english version: Wrong number of arguments or invalid property assignment", function () {
		expect(translation, translation).to.equal("Wrong number of arguments or invalid property assignment");
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

	it("should return the english version: Object not a collection", function () {
		expect(translation, translation).to.equal("Object not a collection");
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

	it("should return the english version: Specified DLL function not found", function () {
		expect(translation, translation).to.equal("Specified DLL function not found");
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

	it("should return the english version: Variable uses an Automation type not supported in JavaScript", function () {
		expect(translation, translation).to.equal("Variable uses an Automation type not supported in JavaScript");
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

	it("should return the english version: The remote server machine does not exist or is unavailable", function () {
		expect(translation, translation).to.equal("The remote server machine does not exist or is unavailable");
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

	it("should return the english version: Cannot assign to variable", function () {
		expect(translation, translation).to.equal("Cannot assign to variable");
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

	it("should return the english version: Object not safe for scripting", function () {
		expect(translation, translation).to.equal("Object not safe for scripting");
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

	it("should return the english version: Object not safe for initializing", function () {
		expect(translation, translation).to.equal("Object not safe for initializing");
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

	it("should return the english version: Object not safe for creating", function () {
		expect(translation, translation).to.equal("Object not safe for creating");
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

	it("should return the english version: An exception occurred", function () {
		expect(translation, translation).to.equal("An exception occurred");
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

	it("should return the english version: Out of memory", function () {
		expect(translation, translation).to.equal("Out of memory");
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

	it("should return the english version: Syntax error", function () {
		expect(translation, translation).to.equal("Syntax error");
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

	it("should return the english version: Expected ':'", function () {
		expect(translation, translation).to.equal("Expected ':'");
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

	it("should return the english version: Expected ';'", function () {
		expect(translation, translation).to.equal("Expected ';'");
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

	it("should return the english version: Expected '('", function () {
		expect(translation, translation).to.equal("Expected '('");
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

	it("should return the english version: Expected ')'", function () {
		expect(translation, translation).to.equal("Expected ')'");
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

	it("should return the english version: Expected ']'", function () {
		expect(translation, translation).to.equal("Expected ']'");
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

	it("should return the english version: Expected '{'", function () {
		expect(translation, translation).to.equal("Expected '{'");
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

	it("should return the english version: Expected '}'", function () {
		expect(translation, translation).to.equal("Expected '}'");
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

	it("should return the english version: Expected identifier", function () {
		expect(translation, translation).to.equal("Expected identifier");
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

	it("should return the english version: Expected '='", function () {
		expect(translation, translation).to.equal("Expected '='");
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

	it("should return the english version: Expected '/'", function () {
		expect(translation, translation).to.equal("Expected '/'");
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

	it("should return the english version: Invalid number", function () {
		expect(translation, translation).to.equal("Invalid number");
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

	it("should return the english version: Invalid character", function () {
		expect(translation, translation).to.equal("Invalid character");
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

	it("should return the english version: Unterminated string constant", function () {
		expect(translation, translation).to.equal("Unterminated string constant");
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

	it("should return the english version: Unterminated comment", function () {
		expect(translation, translation).to.equal("Unterminated comment");
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

	it("should return the english version: 'return' statement outside of function", function () {
		expect(translation, translation).to.equal("'return' statement outside of function");
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

	it("should return the english version: Can't have 'break' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'break' outside of loop");
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

	it("should return the english version: Can't have 'continue' outside of loop", function () {
		expect(translation, translation).to.equal("Can't have 'continue' outside of loop");
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

	it("should return the english version: Expected hexadecimal digit", function () {
		expect(translation, translation).to.equal("Expected hexadecimal digit");
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

	it("should return the english version: Expected 'while'", function () {
		expect(translation, translation).to.equal("Expected 'while'");
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

	it("should return the english version: Label redefined", function () {
		expect(translation, translation).to.equal("Label redefined");
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

	it("should return the english version: Label not found", function () {
		expect(translation, translation).to.equal("Label not found");
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

	it("should return the english version: 'default' can only appear once in a 'switch' statement", function () {
		expect(translation, translation).to.equal("'default' can only appear once in a 'switch' statement");
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

	it("should return the english version: Expected identifier, string or number", function () {
		expect(translation, translation).to.equal("Expected identifier, string or number");
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

	it("should return the english version: Expected '@end'", function () {
		expect(translation, translation).to.equal("Expected '@end'");
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

	it("should return the english version: Conditional compilation is turned off", function () {
		expect(translation, translation).to.equal("Conditional compilation is turned off");
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

	it("should return the english version: Expected constant", function () {
		expect(translation, translation).to.equal("Expected constant");
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

	it("should return the english version: Expected '@'", function () {
		expect(translation, translation).to.equal("Expected '@'");
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

	it("should return the english version: Expected 'catch'", function () {
		expect(translation, translation).to.equal("Expected 'catch'");
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

	it("should return the english version: Expected 'var'", function () {
		expect(translation, translation).to.equal("Expected 'var'");
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

	it("should return the english version: 'throw' must be followed by an expression on the same source line", function () {
		expect(translation, translation).to.equal("'throw' must be followed by an expression on the same source line");
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

	it("should return the english version: 'with' statements are not allowed in strict mode", function () {
		expect(translation, translation).to.equal("'with' statements are not allowed in strict mode");
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

	it("should return the english version: Duplicate formal parameter names not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Duplicate formal parameter names not allowed in strict mode");
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

	it("should return the english version: Octal numeric literals and escape characters not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Octal numeric literals and escape characters not allowed in strict mode");
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

	it("should return the english version: Invalid usage of 'eval' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'eval' in strict mode");
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

	it("should return the english version: Invalid usage of 'arguments' in strict mode", function () {
		expect(translation, translation).to.equal("Invalid usage of 'arguments' in strict mode");
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

	it("should return the english version: Calling delete on expression not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on expression not allowed in strict mode");
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

	it("should return the english version: Multiple definitions of a property not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Multiple definitions of a property not allowed in strict mode");
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

	it("should return the english version: In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.", function () {
		expect(translation, translation).to.equal("In strict mode, function declarations cannot be nested inside a statement or block. They may only appear at the top level or directly inside a function body.");
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

	it("should return the english version: The use of a keyword for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a keyword for an identifier is invalid");
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

	it("should return the english version: The use of a future reserved word for an identifier is invalid", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid");
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

	it("should return the english version: The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.", function () {
		expect(translation, translation).to.equal("The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode.");
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

	it("should return the english version: Setter functions must have one argument", function () {
		expect(translation, translation).to.equal("Setter functions must have one argument");
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

	it("should return the english version: JavaScript compilation error", function () {
		expect(translation, translation).to.equal("JavaScript compilation error");
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

	it("should return the english version: JavaScript runtime error", function () {
		expect(translation, translation).to.equal("JavaScript runtime error");
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

	it("should return the english version: Unknown runtime error", function () {
		expect(translation, translation).to.equal("Unknown runtime error");
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

	it("should return the english version: Cannot assign to 'this'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'this'");
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

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Cannot assign to a function result", function () {
		expect(translation, translation).to.equal("Cannot assign to a function result");
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

	it("should return the english version: Cannot index object", function () {
		expect(translation, translation).to.equal("Cannot index object");
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

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
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

	it("should return the english version: Date object expected", function () {
		expect(translation, translation).to.equal("Date object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Invalid left-hand side in assignment", function () {
		expect(translation, translation).to.equal("Invalid left-hand side in assignment");
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

	it("should return the english version: Undefined identifier", function () {
		expect(translation, translation).to.equal("Undefined identifier");
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

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
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

	it("should return the english version: Can't execute code from a freed script", function () {
		expect(translation, translation).to.equal("Can't execute code from a freed script");
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

	it("should return the english version: Object member expected", function () {
		expect(translation, translation).to.equal("Object member expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
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

	it("should return the english version: Regular Expression object expected", function () {
		expect(translation, translation).to.equal("Regular Expression object expected");
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

	it("should return the english version: Syntax error in regular expression", function () {
		expect(translation, translation).to.equal("Syntax error in regular expression");
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

	it("should return the english version: Unexpected quantifier", function () {
		expect(translation, translation).to.equal("Unexpected quantifier");
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

	it("should return the english version: Expected ']' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ']' in regular expression");
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

	it("should return the english version: Expected ')' in regular expression", function () {
		expect(translation, translation).to.equal("Expected ')' in regular expression");
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

	it("should return the english version: Invalid range in character set", function () {
		expect(translation, translation).to.equal("Invalid range in character set");
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

	it("should return the english version: Exception thrown and not caught", function () {
		expect(translation, translation).to.equal("Exception thrown and not caught");
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

	it("should return the english version: Function does not have a valid prototype object", function () {
		expect(translation, translation).to.equal("Function does not have a valid prototype object");
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

	it("should return the english version: The URI to be encoded contains an invalid character", function () {
		expect(translation, translation).to.equal("The URI to be encoded contains an invalid character");
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

	it("should return the english version: The URI to be decoded is not a valid encoding", function () {
		expect(translation, translation).to.equal("The URI to be decoded is not a valid encoding");
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

	it("should return the english version: The number of fractional digits is out of range", function () {
		expect(translation, translation).to.equal("The number of fractional digits is out of range");
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

	it("should return the english version: The precision is out of range", function () {
		expect(translation, translation).to.equal("The precision is out of range");
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

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
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

	it("should return the english version: Array length must be a finite positive integer", function () {
		expect(translation, translation).to.equal("Array length must be a finite positive integer");
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

	it("should return the english version: Array length must be assigned a finite positive number", function () {
		expect(translation, translation).to.equal("Array length must be assigned a finite positive number");
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

	it("should return the english version: Array object expected", function () {
		expect(translation, translation).to.equal("Array object expected");
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

	it("should return the english version: Circular reference in value argument not supported", function () {
		expect(translation, translation).to.equal("Circular reference in value argument not supported");
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

	it("should return the english version: Invalid replacer argument", function () {
		expect(translation, translation).to.equal("Invalid replacer argument");
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

	it("should return the english version: Argument list too large to apply", function () {
		expect(translation, translation).to.equal("Argument list too large to apply");
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

	it("should return the english version: Redeclaration of const property", function () {
		expect(translation, translation).to.equal("Redeclaration of const property");
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

	it("should return the english version: Object member not configurable", function () {
		expect(translation, translation).to.equal("Object member not configurable");
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

	it("should return the english version: Variable undefined in strict mode", function () {
		expect(translation, translation).to.equal("Variable undefined in strict mode");
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

	it("should return the english version: Accessing the 'caller' property of a function or arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'caller' property of a function or arguments object is not allowed in strict mode");
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

	it("should return the english version: Accessing the 'callee' property of an arguments object is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'callee' property of an arguments object is not allowed in strict mode");
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

	it("should return the english version: Assignment to read-only properties is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Assignment to read-only properties is not allowed in strict mode");
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

	it("should return the english version: Cannot create property for a non-extensible object", function () {
		expect(translation, translation).to.equal("Cannot create property for a non-extensible object");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: Property cannot have both accessors and a value", function () {
		expect(translation, translation).to.equal("Property cannot have both accessors and a value");
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

	it("should return the english version: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("'this' is null or undefined");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: String expected", function () {
		expect(translation, translation).to.equal("String expected");
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

	it("should return the english version: Boolean expected", function () {
		expect(translation, translation).to.equal("Boolean expected");
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

	it("should return the english version: Date expected", function () {
		expect(translation, translation).to.equal("Date expected");
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

	it("should return the english version: Number expected", function () {
		expect(translation, translation).to.equal("Number expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Enumerator object expected", function () {
		expect(translation, translation).to.equal("Enumerator object expected");
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

	it("should return the english version: RegExp object expected", function () {
		expect(translation, translation).to.equal("RegExp object expected");
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

	it("should return the english version: Invalid function argument", function () {
		expect(translation, translation).to.equal("Invalid function argument");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: JavaScript object expected", function () {
		expect(translation, translation).to.equal("JavaScript object expected");
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

	it("should return the english version: Function expected", function () {
		expect(translation, translation).to.equal("Function expected");
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

	it("should return the english version: VBArray expected", function () {
		expect(translation, translation).to.equal("VBArray expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Object expected", function () {
		expect(translation, translation).to.equal("Object expected");
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

	it("should return the english version: Invalid 'length' property", function () {
		expect(translation, translation).to.equal("Invalid 'length' property");
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

	it("should return the english version: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("Array or arguments object expected");
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

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
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

	it("should return the english version: Invalid Operand", function () {
		expect(translation, translation).to.equal("Invalid Operand");
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

	it("should return the english version: Invalid property descriptor", function () {
		expect(translation, translation).to.equal("Invalid property descriptor");
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

	it("should return the english version: Cannot define property: object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property: object is not extensible");
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

	it("should return the english version: Cannot redefine non-configurable property", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property");
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

	it("should return the english version: Cannot modify non-writable property", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property");
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

	it("should return the english version: Cannot modify property: 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property: 'length' is not writable");
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

	it("should return the english version: Cannot define property", function () {
		expect(translation, translation).to.equal("Cannot define property");
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

	it("should return the english version: Typed array constructor argument is invalid", function () {
		expect(translation, translation).to.equal("Typed array constructor argument is invalid");
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

	it("should return the english version: 'this' is not a typed array object", function () {
		expect(translation, translation).to.equal("'this' is not a typed array object");
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

	it("should return the english version: Invalid offset/length when creating typed array", function () {
		expect(translation, translation).to.equal("Invalid offset/length when creating typed array");
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

	it("should return the english version: Invalid begin/end value in typed array subarray method", function () {
		expect(translation, translation).to.equal("Invalid begin/end value in typed array subarray method");
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

	it("should return the english version: Invalid source in typed array set", function () {
		expect(translation, translation).to.equal("Invalid source in typed array set");
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

	it("should return the english version: 'this' is not a DataView object", function () {
		expect(translation, translation).to.equal("'this' is not a DataView object");
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

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
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

	it("should return the english version: DataView operation access beyond specified buffer length", function () {
		expect(translation, translation).to.equal("DataView operation access beyond specified buffer length");
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

	it("should return the english version: Invalid arguments in DataView", function () {
		expect(translation, translation).to.equal("Invalid arguments in DataView");
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

	it("should return the english version: invalid function signature", function () {
		expect(translation, translation).to.equal("invalid function signature");
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

	it("should return the english version: invalid property signature", function () {
		expect(translation, translation).to.equal("invalid property signature");
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

	it("should return the english version: invalid input parameter type", function () {
		expect(translation, translation).to.equal("invalid input parameter type");
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

	it("should return the english version: invalid ouput parameter", function () {
		expect(translation, translation).to.equal("invalid ouput parameter");
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

	it("should return the english version: Accessing the 'arguments' property of a function is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Accessing the 'arguments' property of a function is not allowed in strict mode");
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

	it("should return the english version: Inspectable Object expected", function () {
		expect(translation, translation).to.equal("Inspectable Object expected");
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

	it("should return the english version: Could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'char'");
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

	it("should return the english version: Could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("Could not convert argument to type 'GUID'");
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

	it("should return the english version: IInspectable expected", function () {
		expect(translation, translation).to.equal("IInspectable expected");
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

	it("should return the english version: Could not convert object to struct: object missing expected property", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property");
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

	it("should return the english version: Unknown type", function () {
		expect(translation, translation).to.equal("Unknown type");
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

	it("should return the english version: Function called with too few arguments", function () {
		expect(translation, translation).to.equal("Function called with too few arguments");
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

	it("should return the english version: Type is not constructible", function () {
		expect(translation, translation).to.equal("Type is not constructible");
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

	it("should return the english version: Could not convert value to PropertyValue: Type not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: Type not supported by PropertyValue");
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

	it("should return the english version: Could not convert value to IInspectable: Type not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: Type not supported by IInspectable");
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

	it("should return the english version: Could not convert Date to Windows.Foundation.DateTime: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert Date to Windows.Foundation.DateTime: value outside of valid range");
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

	it("should return the english version: Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range", function () {
		expect(translation, translation).to.equal("Could not convert value to Windows.Foundation.TimeSpan: value outside of valid range");
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

	it("should return the english version: Invalid access to already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Invalid access to already released Inspectable Object");
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

	it("should return the english version: Cannot release already released Inspectable Object", function () {
		expect(translation, translation).to.equal("Cannot release already released Inspectable Object");
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

	it("should return the english version: 'this' is not of the expected type", function () {
		expect(translation, translation).to.equal("'this' is not of the expected type");
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

	it("should return the english version: Illegal length and size specified for the array", function () {
		expect(translation, translation).to.equal("Illegal length and size specified for the array");
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

	it("should return the english version: An unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("An unexpected failure occurred while trying to obtain metadata information");
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

	it("should return the english version: Status is 'error', but getResults did not return an error", function () {
		expect(translation, translation).to.equal("Status is 'error', but getResults did not return an error");
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

	it("should return the english version: Missing or invalid status parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid status parameter passed to completed handler");
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

	it("should return the english version: Missing or invalid sender parameter passed to completed handler", function () {
		expect(translation, translation).to.equal("Missing or invalid sender parameter passed to completed handler");
	});
});
describe("translating ko-KR string: 6000", function () {
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

	it("should return the english version: -Infinity", function () {
		expect(translation, translation).to.equal("-Infinity");
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

	it("should return the english version: Object doesn't support property or method 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Object doesn't support property or method 'MyDynamicTestString'");
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

	it("should return the english version: Argument to the function 'MyDynamicTestString' is not optional", function () {
		expect(translation, translation).to.equal("Argument to the function 'MyDynamicTestString' is not optional");
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

	it("should return the english version: 'MyDynamicTestString' is not a number", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a number");
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

	it("should return the english version: 'MyDynamicTestString' is not a function", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a function");
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

	it("should return the english version: 'MyDynamicTestString' is not an indexable object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an indexable object");
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

	it("should return the english version: 'MyDynamicTestString' is not a string", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a string");
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

	it("should return the english version: 'MyDynamicTestString' is not a date object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a date object");
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

	it("should return the english version: 'MyDynamicTestString' is null or not an object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is null or not an object");
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

	it("should return the english version: Cannot assign to 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot assign to 'MyDynamicTestString'");
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

	it("should return the english version: 'MyDynamicTestString' is undefined", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is undefined");
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

	it("should return the english version: 'MyDynamicTestString' is not a boolean", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a boolean");
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

	it("should return the english version: Cannot delete 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot delete 'MyDynamicTestString'");
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

	it("should return the english version: 'MyDynamicTestString' is not a VBArray", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a VBArray");
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

	it("should return the english version: 'MyDynamicTestString' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a JavaScript object");
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

	it("should return the english version: 'MyDynamicTestString' is not an enumerator object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not an enumerator object");
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

	it("should return the english version: 'MyDynamicTestString' is not a regular expression object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' is not a regular expression object");
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

	it("should return the english version: MyDynamicTestString is not an Array or arguments object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array or arguments object");
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

	it("should return the english version: MyDynamicTestString is not an Array object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString is not an Array object");
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

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'true' on this object");
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

	it("should return the english version: 'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object", function () {
		expect(translation, translation).to.equal("'MyDynamicTestString' attribute on the property descriptor cannot be set to 'false' on this object");
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

	it("should return the english version: Redeclaration of const 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Redeclaration of const 'MyDynamicTestString'");
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

	it("should return the english version: Calling delete on 'MyDynamicTestString' is not allowed in strict mode", function () {
		expect(translation, translation).to.equal("Calling delete on 'MyDynamicTestString' is not allowed in strict mode");
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

	it("should return the english version: Unable to set property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to set property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to get property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to get property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to delete property 'MyDynamicTestString' of undefined or null reference", function () {
		expect(translation, translation).to.equal("Unable to delete property 'MyDynamicTestString' of undefined or null reference");
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

	it("should return the english version: Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties", function () {
		expect(translation, translation).to.equal("Unable to access property 'MyDynamicTestString': type 'VarDate' does not support user-defined properties");
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

	it("should return the english version: The value of the property 'MyDynamicTestString' is not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is not a Function object");
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

	it("should return the english version: The value of the property 'MyDynamicTestString' is null or undefined, not a Function object", function () {
		expect(translation, translation).to.equal("The value of the property 'MyDynamicTestString' is null or undefined, not a Function object");
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

	it("should return the english version: MyDynamicTestString: 'this' is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is null or undefined");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Function object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a String object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a String object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Boolean object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Boolean object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Date object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Date object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a Number object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a Number object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a VBArray object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a JavaScript object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Enumerator object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Enumerator object");
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

	it("should return the english version: MyDynamicTestString: 'this' is not a RegExp object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not a RegExp object");
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

	it("should return the english version: MyDynamicTestString: invalid argument", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: invalid argument");
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

	it("should return the english version: MyDynamicTestString: argument is not an Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object");
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

	it("should return the english version: MyDynamicTestString: argument is not a JavaScript object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a JavaScript object");
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

	it("should return the english version: MyDynamicTestString: argument is not a Function object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a Function object");
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

	it("should return the english version: MyDynamicTestString: argument is not a VBArray object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not a VBArray object");
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

	it("should return the english version: MyDynamicTestString: argument is null or undefined", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is null or undefined");
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

	it("should return the english version: MyDynamicTestString: argument is not an Object and is not null", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument is not an Object and is not null");
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

	it("should return the english version: MyDynamicTestString: argument does not have a valid 'length' property", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: argument does not have a valid 'length' property");
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

	it("should return the english version: MyDynamicTestString: Array or arguments object expected", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: Array or arguments object expected");
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

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Object expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Object expected");
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

	it("should return the english version: Invalid operand to 'MyDynamicTestString': Function expected", function () {
		expect(translation, translation).to.equal("Invalid operand to 'MyDynamicTestString': Function expected");
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

	it("should return the english version: Invalid descriptor for property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Invalid descriptor for property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot define property 'MyDynamicTestString': object is not extensible", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString': object is not extensible");
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

	it("should return the english version: Cannot redefine non-configurable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot redefine non-configurable property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot modify non-writable property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot modify non-writable property 'MyDynamicTestString'");
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

	it("should return the english version: Cannot modify property 'MyDynamicTestString': 'length' is not writable", function () {
		expect(translation, translation).to.equal("Cannot modify property 'MyDynamicTestString': 'length' is not writable");
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

	it("should return the english version: Cannot define property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Cannot define property 'MyDynamicTestString'");
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

	it("should return the english version: Required argument MyDynamicTestString in DataView method is not specified", function () {
		expect(translation, translation).to.equal("Required argument MyDynamicTestString in DataView method is not specified");
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

	it("should return the english version: DataView constructor argument MyDynamicTestString is invalid", function () {
		expect(translation, translation).to.equal("DataView constructor argument MyDynamicTestString is invalid");
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

	it("should return the english version: The function 'MyDynamicTestString' has an invalid signature and cannot be called", function () {
		expect(translation, translation).to.equal("The function 'MyDynamicTestString' has an invalid signature and cannot be called");
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

	it("should return the english version: The property 'MyDynamicTestString' has an invalid signature and cannot be accessed", function () {
		expect(translation, translation).to.equal("The property 'MyDynamicTestString' has an invalid signature and cannot be accessed");
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

	it("should return the english version: The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type", function () {
		expect(translation, translation).to.equal("The runtimeclass MyDynamicTestString that has Windows.Foundation.IPropertyValue as default interface is not supported as input parameter type");
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

	it("should return the english version: The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter", function () {
		expect(translation, translation).to.equal("The object with interface Windows.Foundation.IPropertyValue that has runtimeclass name MyDynamicTestString is not supported as out parameter");
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

	it("should return the english version: MyDynamicTestString: 'this' is not an Inspectable Object", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: 'this' is not an Inspectable Object");
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

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'char'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'char'");
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

	it("should return the english version: MyDynamicTestString: could not convert argument to type 'GUID'", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert argument to type 'GUID'");
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

	it("should return the english version: MyDynamicTestString: could not convert return value to IInspectable", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: could not convert return value to IInspectable");
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

	it("should return the english version: Could not convert object to struct: object missing expected property 'MyDynamicTestString'", function () {
		expect(translation, translation).to.equal("Could not convert object to struct: object missing expected property 'MyDynamicTestString'");
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

	it("should return the english version: Type 'MyDynamicTestString' not found", function () {
		expect(translation, translation).to.equal("Type 'MyDynamicTestString' not found");
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

	it("should return the english version: MyDynamicTestString: function called with too few arguments", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: function called with too few arguments");
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

	it("should return the english version: MyDynamicTestString: type is not constructible", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: type is not constructible");
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

	it("should return the english version: Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue", function () {
		expect(translation, translation).to.equal("Could not convert value to PropertyValue: MyDynamicTestString not supported by PropertyValue");
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

	it("should return the english version: Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable", function () {
		expect(translation, translation).to.equal("Could not convert value to IInspectable: MyDynamicTestString not supported by IInspectable");
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

	it("should return the english version: MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: The Inspectable object 'this' is released and cannot be accessed");
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

	it("should return the english version: 'this' is not of expected type: MyDynamicTestString", function () {
		expect(translation, translation).to.equal("'this' is not of expected type: MyDynamicTestString");
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

	it("should return the english version: MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information", function () {
		expect(translation, translation).to.equal("MyDynamicTestString: an unexpected failure occurred while trying to obtain metadata information");
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

	it("should return the english version: The specified date is not available in the current locale's calendar", function () {
		expect(translation, translation).to.equal("The specified date is not available in the current locale's calendar");
	});
});
