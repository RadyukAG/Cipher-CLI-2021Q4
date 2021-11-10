const fs = require('fs');
const OptionsError = require('../../errorsHandling/optionsError');

export const inputOutputValidation = (path) => {
    try {
        fs.existsSync(path);
    } catch {
        throw new OptionsError(`Cannot find ${path} file.`);
    }
};
