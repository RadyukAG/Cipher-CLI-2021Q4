const process = require('process');
const getCipheringConfig = require('./optionsConfig/getCipheringConfig');

const mainProcess = () => {
    const cipheringConfig = getCipheringConfig();
    process.exit(1);
};

mainProcess();