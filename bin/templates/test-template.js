describe("translating {{languangeCode}} string: {{originalString}}", function () {
	var translation;
	before(function (done) {
		errorToEnglish("{{originalString}}", function (err, _translation) {
			if (err) {
				return done(err);
			}
			translation = _translation;
			return done();
		});
	});

	it("should return one of the english versions: {{englishTexts}}", function () {
		expect(translation, translation).to.match(/{{englishRegExp}}/g);
	});
});
