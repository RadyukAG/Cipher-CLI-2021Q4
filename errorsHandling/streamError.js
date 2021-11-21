module.exports = class StreamError extends Error {
    constructor(message) {
        super(message);
        this.name = 'StreamError';
    }
};