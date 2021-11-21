const mainProcess = require('../index');
const fs = require('fs');
const process = require('process');
jest.mock(process);

describe('CLI scenarios', () => {

    beforeAll(() => {
        const message = 'This is secret. Message about "_" symbol!';
        fs.appendFile('../input.txt', message, (err) => {
            if (err) {
                console.log(err);
            }
        });
        fs.appendFile('../output.txt', '', (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

    afterAll(() => {
        fs.unlinkSync('../output.txt');
        fs.unlinkSync('../input.txt');
    });

    it('should return correct output', async () => {
        jest.spyOn(process, 'argv').mockImplementationOnce(() => ['node', 'my_caesar_cli', '-c', "C1-C1-R0-A", '-i', "./input.txt", '-o', "./output.txt"]);
        mainProcess();
        expect(fs.readFileSync('../input.txt')).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
    });
});
