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

    it("should return the english version: {{englishString}}", function () {
        expect(translation).to.have.property("message", "{{englishString}}");
    });
});
