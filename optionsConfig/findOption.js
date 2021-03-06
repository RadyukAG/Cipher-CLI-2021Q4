const OptionsError = require('../errorsHandling/optionsError');

module.exports = findOption = (source, options) => {
    try {
        const result = [];
        options.value.forEach((option) => {
            source.forEach((input, idx, arr) => {
                if (input === option) {
                    result.push(arr[idx + 1]);
                }
            });
        });
        if (!result.length && options.isRequired) {
            throw new OptionsError(`There is no ${options.type} option.`);
        }
    
        if (result.length > 1) {
            throw new OptionsError(`There are more than 1 ${options.type}`);
        }
        return result[0];
    } catch (err) {
        if (err instanceof OptionsError) {
            throw err;
        }
        throw new OptionsError('Fail to parse config options');
    }
};
