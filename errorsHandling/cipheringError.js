module.exports = class CipheringError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CipheringError';
    }
};