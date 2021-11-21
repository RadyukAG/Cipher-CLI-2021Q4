const stream = require('stream');
const { Transform } = require('stream');
const StreamError = require('../errorsHandling/streamError');
const CipheringError = require('../errorsHandling/cipheringError');

class TextCipherer {
    constructor(config) {
        this.config = config;
        this.abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.reversedAbc = [...this.abc].reverse();
    }

    start() {
        try {
            const streamsList = [];
            streamsList.push(this.config.input);
            this.config.config.forEach(value => {
                this.configParse(value, streamsList);
            });
            streamsList.push(this.config.output);
            stream.pipeline(...streamsList, (err) => {
                if (err) {
                    throw new StreamError(`An error has occurred: ${err.message}`);
                }
            });
        } catch (err) {
            if (err instanceof StreamError) {
                throw err;
            };

            throw new CipheringError(`Error during ciphering: ${err.message}`);
        }    
    }

    configParse(command, streamsList) {
        switch(command) {
            case 'C1':
                streamsList.push(this.createTransformStream(false, 1, false));
                return;
            case 'C0':
                streamsList.push(this.createTransformStream(false, 1, true));
                return;
            case 'R0':
                streamsList.push(this.createTransformStream(false, 8, true));
                return;
            case 'R1':
                streamsList.push(this.createTransformStream(false, 8, false));
                return;
            case 'A':
                streamsList.push(this.createTransformStream(true));
                return;  
        }
    }

    createTransformStream(atbash, shift, isCiphered) {
        const cipher = this.cipher(shift, isCiphered).bind(this);
        const atbashCipher = this.atbashCipher().bind(this);
        return new Transform({
            transform(chunk, encoding, callback) {
                const nextChunk = atbash ? atbashCipher(chunk) : cipher(chunk);
                this.push(nextChunk);
                callback();
            }
        });
    }

    cipher(shift, isCiphered) {
        return function (chunk) {
            const result = chunk.toString().split('').map((el) => {
                const isUpperCase = el === el.toUpperCase();
                const idx = this.abc.indexOf(el.toLowerCase());
                if (idx < 0) {
                    return el;
                }
                let newElem;
                if (isCiphered) {
                    const newIdx = idx - shift;
                    newElem = newIdx >= 0 ? this.abc[newIdx] : this.abc[this.abc.length + newIdx];
                } else {
                    const newIdx = idx + shift;
                    newElem = newIdx < this.abc.length ? this.abc[newIdx] : this.abc[newIdx - this.abc.length];
                }
                return isUpperCase ? newElem.toUpperCase() : newElem;
            });
            return result.join('');
        }
    }

    atbashCipher() {
        return function (chunk) {
            const result = chunk.toString().split('').map((el) => {
                const isUpperCase = el === el.toUpperCase();
                const idx = this.abc.indexOf(el.toLowerCase());
                if (idx < 0) {
                    return el;
                }
                return isUpperCase ? this.reversedAbc[idx].toUpperCase() : this.reversedAbc[idx];
            });
            return result.join('');
        }
    }    
}

module.exports = TextCipherer;
