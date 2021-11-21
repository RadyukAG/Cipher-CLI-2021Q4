const process = require('process');
const errorHandler = require('../errorHandler');

jest.mock('process', () => ({
    exit: jest.fn(),
    stderr: {
        write: jest.fn(),
    }
}));

describe('error handler', () => {
    const errorMessage = 'new message';
    const testError = {
        message: errorMessage,
        name: 'testError',
    };
    it('should call stderr.write with passed message', () => {
        errorHandler(testError);
        expect(process.stderr.write).toBeCalledWith(`${testError.name}: ${testError.message}`);
    });
    it('should call process exit with not a zero code', () => {
        errorHandler(testError);
        expect(process.exit).toBeCalledWith(1);
    })
});
