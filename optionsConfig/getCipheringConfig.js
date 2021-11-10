const findOption = require('./findOption');
const { inputOption, outputOption, configOption } = require('./optionsType');

const getCipheringConfig = () => {
    const args = process.argv.slice(2);
    const config = {
        config: findOption(args, configOption),
        input: findOption(args, inputOption),
        output: findOption(args, outputOption),
    };
    return config; 
}