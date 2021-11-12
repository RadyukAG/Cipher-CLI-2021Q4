const configValidation = (config) => {
    const commandRegex = /^([CR][01])$|^A$/;
    const configArr = config.split('-').forEach((value) => {
        if (!commandRegex.test(value)) {
            throw new Error('Config command is invalid')
        }
    });
    return configArr;
}