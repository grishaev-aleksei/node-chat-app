const {assert} = require('chai');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', function () {

        const from = 'Alibek';
        const text = 'Pretty message from Alibek';
        const message = generateMessage(from, text);

        assert.include(message, {from, text});
        assert.equal(message.from, from);
        assert.equal(message.text, text);
        assert.isNumber(message.createdAt);
    });

});

describe('generateLocationMessage', () => {

    it('should generate correct location object', function () {

        const from = 'Alibek';
        const latitude = 1;
        const longitude = 1;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const locationMessage = generateLocationMessage(from, latitude, longitude);

        assert.include(locationMessage, {from, url});
        assert.equal(locationMessage.from, from);
        assert.equal(locationMessage.url, url);
        assert.isNumber(locationMessage.createdAt);
    });
});
