const getCipheringConfig = require('./optionsConfig/getCipheringConfig');
const TextCipherer = require('./ciphering/textCipherer');
const errorHandler = require('./errorsHandling/errorHandler');
const process = require('process');

const mainProcess = () => {
    try {
        const test = process.argv;
        const cipheringConfig = getCipheringConfig();
        const textCipherer = new TextCipherer(cipheringConfig);
        textCipherer.start();
    } catch (err) {
        errorHandler(err);
    }
};

module.exports = mainProcess;

mainProcess();
