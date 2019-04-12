const {assert} = require('chai');

const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non string values', function () {
        const string = 15;
        assert.isFalse(isRealString(string))
    });

    it('should reject strings with only spaces', function () {
        const string = '    ';
        assert.isFalse(isRealString(string))
    });

    it('should allow strings with non-space characters', function () {
        const string = '   true string incoming    ';
        assert.isTrue(isRealString(string))
    });
});