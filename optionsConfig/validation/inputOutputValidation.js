const fs = require('fs');
const OptionsError = require('../../errorsHandling/optionsError');

module.exports = inputOutputValidation = (path) => {
    try {
        fs.accessSync(path);
        return true;
    } catch {
        throw new OptionsError(`Cannot find ${path} file.`);
    }
};
