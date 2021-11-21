const fs = require('fs');
const process = require('process');
const OptionsError = require('../../errorsHandling/optionsError');

module.exports = inputOutputValidation = (path, isReadStream) => {
    try {
        if (!path) {
            return isReadStream ? process.stdin : process.stdout;
        }
        fs.accessSync(path);
        return isReadStream ? fs.createReadStream(path, 'utf-8') : fs.createWriteStream(path, {flags: 'a', encoding: 'utf-8'});
    } catch {
        throw new OptionsError(`Cannot find ${path} file.`);
    }
};
