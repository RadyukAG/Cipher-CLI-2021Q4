const { Transform } = require('stream');

class TextCipherer {
    abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    reversedAbc = abc.reverse();

    constructor(config) {
        this.config = config;
    }

    start() {
        const streamsList = [];

        this.config.config.forEach(value => {
            this.config
        });
    }

    configParse(command, streamsList) {
        switch(command) {
            case 'C1':
                streamsList.push(this.createTransformStream(1, false));
                return;
            case 'C0':
                streamsList.push(this.createTransformStream(1, true));
                return;
            case 'R0':
                streamsList.push(this.createTransformStream(8, true));
                return;
            case 'R1':
                streamsList.push(this.createTransformStream(8, false));
                return;
            case 'A':
                streamsList.push(this.createTransformStream(8, true));
                return;  
        }
    }

    createTransformStream(shift, isCiphered, atbash) {
        return new Transform({
            transform(chunk, encoding, callback) {
                const nextChunk = atbash ? this.atbashCipher()(chunk) : this.cipher(shift, isCiphered)(chunk);
                this.push(nextChunk);
                callback();
            }
        });
    }

    cipher(shift, isCiphered) {
        return function (chunk) {
            const result = chunk.toString('utf-8').split('').map((el) => {
                const isUpperCase = el === el.toUpperCase();
                const idx = abc.indexOf(el.toLowerCase());
                if (idx < 0) {
                    return el;
                }
                let newElem;
                if (isCiphered) {
                    const newIdx = idx - shift;
                    newElem = newIdx >= 0 ? this.abc[newIdx] : this.abc[abc.length + newIdx];
                } else {
                    const newIdx = idx + shift;
                    newElem = newIdx < this.abc.length ? this.abc[newIdx] : this.abc[newIdx - abc.length];
                }
                return isUpperCase ? newElem.toUpperCase() : newElem;
            });
            return result.join('');
        }
    }

    atbashCipher() {
        return function (chunk) {
            const result = chunk.toString('utf-8').split('').map((el) => {
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
