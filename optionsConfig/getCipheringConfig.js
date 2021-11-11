const findOption = require('./findOption');
const { inputOption, outputOption, configOption } = require('./optionsType');
const inputOutputValidation = require('./validation/inputOutputValidation');

module.exports = getCipheringConfig = () => {
    const args = process.argv.slice(2);
    const cipheringConfig = {
        config: findOption(args, configOption),
        input: inputOutputValidation(findOption(args, inputOption)),
        output: inputOutputValidation(findOption(args, outputOption)),
    };
    console.log(cipheringConfig);
    return cipheringConfig; 
};
