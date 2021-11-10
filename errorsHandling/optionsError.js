export class OptionsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'OptionsError';
    }
};
