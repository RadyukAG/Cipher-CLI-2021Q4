const configOption = {
    value: ['-c', '--config'],
    type: 'config',
    isRequired: true,
};

const inputOption = {
    value: ['-i', '--input'],
    type: 'input',
    isRequired: false,
};

const outputOption = {
    value: ['-o', '--output'],
    type: 'output',
    isRequired: false,
};

module.exports = {
    outputOption: outputOption,
    inputOption: inputOption,
    configOption: configOption,
};
