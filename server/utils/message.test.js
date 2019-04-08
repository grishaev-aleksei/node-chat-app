const {assert} = require('chai');

const {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', function () {

        const from = 'Alibek';
        const text = 'Pretty message from Alibek';
        const message = generateMessage(from, text);

        assert.include(message, {from,text});
        assert.equal(message.from, from);
        assert.equal(message.text, text);
        assert.isNumber(message.createdAt);
    });

});
