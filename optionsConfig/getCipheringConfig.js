const findOption = require('./findOption');
const { inputOption, outputOption, configOption } = require('./optionsType');
const inputOutputValidation = require('./validation/inputOutputValidation');
const configValidation = require('./validation/configValidation');

module.exports = getCipheringConfig = () => {
    try {
        const args = process.argv.slice(2);
        const cipheringConfig = {
            config: configValidation(findOption(args, configOption)),
            input: inputOutputValidation(findOption(args, inputOption), true),
            output: inputOutputValidation(findOption(args, outputOption), false),
        };
        return cipheringConfig;
    } catch (err) {
        throw err;
    }
};
