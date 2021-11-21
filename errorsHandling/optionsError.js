module.exports = class OptionsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'OptionsError';
    }
};
