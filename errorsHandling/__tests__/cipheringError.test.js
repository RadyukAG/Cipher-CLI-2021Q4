const CipheringError = require('../cipheringError');

describe('CipheringError', () => {
    it ('should create new cipheringError instance', () => {
        const message = 'new message';
        const newError = new CipheringError(message);
        expect(newError.message).toEqual(message);
        expect(newError.name).toEqual('CipheringError');
    });
});
