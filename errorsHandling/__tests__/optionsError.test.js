const OptionsError = require('../optionsError');

describe('CipheringError', () => {
    it ('should create new cipheringError instance', () => {
        const message = 'new message';
        const newError = new OptionsError(message);
        expect(newError.message).toEqual(message);
        expect(newError.name).toEqual('OptionsError');
    });
});
