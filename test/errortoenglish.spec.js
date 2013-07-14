var errorToEnglish = require("../lib/errortoenglish");
describe("getting all errors", function () {
    var result;
    before(function (done) {
        errorToEnglish.getAllErrors(function (err, res) {
            if (err) {
                return done(err);
            }
            result = res;
            return done();
        });
    });

    it("has the reverse of 'ger' from %s: Der opstod en uventet fejl under forsøg på at hente metadataoplysninger", function () {
        var str = "ger".split("").reverse();
        var match = result.matchFromRight;
        str.forEach(function(char){
           expect(match[char]).to.be.ok;
           match= match[char];
        });
        expect(match).to.be.ok;
    });
});

describe("translating German string", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Typenkonflikt", function (err, _translation) {
            if (err) {
                return done(err);
            }
            translation = _translation;
            return done();
        });
    });

    it("should return the english version", function(){
        expect(translation).to.equal("Type mismatch");
    });
});

describe("translating Japanese string", function () {
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

    it("should return the english version", function(){
        expect(translation).to.equal("Overflow");
    });
});

describe("translating Danish string with dynamic content on left", function () {
    var translation;
    before(function (done) {
        errorToEnglish("KHSKDHKSHDHK: Der opstod en uventet fejl under forsøg på at hente metadataoplysninger", function (err, _translation) {
            if (err) {
                return done(err);
            }
            translation = _translation;
            return done();
        });
    });

    it("should return the english version", function(){
        expect(translation).to.equal("KHSKDHKSHDHK: an unexpected failure occurred while trying to obtain metadata information");
    });
});

describe("translating Finnish string with dynamic content on right", function () {
    var translation;
    before(function (done) {
        errorToEnglish("Virheellinen kuvain ominaisuudelle kjfksjd", function (err, _translation) {
            if (err) {
                return done(err);
            }
            translation = _translation;
            return done();
        });
    });

    it("should return the english version", function(){
        expect(translation).to.equal("Invalid descriptor for property 'kjfksjd'");
    });
});