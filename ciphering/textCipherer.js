class textCipherer {
    abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    constructor(config) {
        this.config = config;
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
                    newElem = newIdx >= 0 ? abc[newIdx] : abc[abc.length + newIdx];
                } else {
                    const newIdx = idx + shift;
                    newElem = newIdx < abc.length ? abc[newIdx] : abc[newIdx - abc.length];
                }
                return isUpperCase ? newElem.toUpperCase() : newElem;
            });
            return result.join('');
        }
    }

}