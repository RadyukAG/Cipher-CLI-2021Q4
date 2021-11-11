const configOption = {
    value: ['-c', '--config'],
    type: 'config',
};

const inputOption = {
    value: ['-i', '--input'],
    type: 'input',
};

const outputOption = {
    value: ['-o', '--output'],
    type: 'output',
};

module.exports = {
    outputOption: outputOption,
    inputOption: inputOption,
    configOption: configOption,
};
