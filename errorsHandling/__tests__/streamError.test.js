const StreamError = require('../streamError');

describe('CipheringError', () => {
    it ('should create new cipheringError instance', () => {
        const message = 'new message';
        const newError = new StreamError(message);
        expect(newError.message).toEqual(message);
        expect(newError.name).toEqual('StreamError');
    });
});
