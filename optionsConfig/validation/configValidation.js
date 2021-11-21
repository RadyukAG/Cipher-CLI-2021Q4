const optionsError = require('../../errorsHandling/optionsError');

const configValidation = (config) => {
    const commandRegex = /^([CR][01])$|^A$/;
    const configArr = config.split('-')
    configArr.forEach((value) => {
        if (!commandRegex.test(value)) {
            throw new optionsError('Config command is invalid');
        };
    });
    return configArr;
};

module.exports = configValidation;
