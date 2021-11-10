const OptionsError = require('optionsError');

export const findOption = (source, options) => {
    let result;
    options.value.some((option) => {
        const index = source.find(option);
        if (index >= 0) {
            result = source[index + 1];
            return true;
        }
        throw new OptionsError(`There is no ${options.type} option.`);
    });
};
