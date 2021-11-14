const process = require('process');
const getCipheringConfig = require('./optionsConfig/getCipheringConfig');
const TextCipherer = require('./ciphering/textCipherer'); 

const mainProcess = () => {
    const cipheringConfig = getCipheringConfig();
    const textCipherer = TextCipherer(cipheringConfig);
    textCipherer.start();
    process.exit(1);
};

mainProcess();