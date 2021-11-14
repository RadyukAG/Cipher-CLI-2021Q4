const getCipheringConfig = require('./optionsConfig/getCipheringConfig');
const TextCipherer = require('./ciphering/textCipherer');
const errorHandler = require('./errorsHandling/errorHandler');

const mainProcess = () => {
    try {
        const cipheringConfig = getCipheringConfig();
        const textCipherer = new TextCipherer(cipheringConfig);
        textCipherer.start();
    } catch (err) {
        errorHandler(err);
    }
};

mainProcess();