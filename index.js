const getCipheringConfig = require('./optionsConfig/getCipheringConfig');
const TextCipherer = require('./ciphering/textCipherer');
const errorHandler = require('./errorsHandling/errorHandler');
const getProcessArgs = require('./utils/getProcessArgs');

const mainProcess = () => {
    try {
        const cipheringConfig = getCipheringConfig(getProcessArgs());
        const textCipherer = new TextCipherer(cipheringConfig);
        textCipherer.start();
    } catch (err) {
        errorHandler(err);
    }
};

module.exports = mainProcess;

mainProcess();
