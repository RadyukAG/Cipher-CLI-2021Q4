const findOption = require('../findOption');
const { inputOption, configOption } = require('../optionsType');

const mockInputOption = ['-test', 'testValue', '-i', 'input.txt'];

describe('find option tests', () => {
  it('should find values', () => {
    const result = findOption(mockInputOption, inputOption);
    expect(result).toEqual('input.txt');
  });

  it('should throw parse error, if wrong arguments are passed', () => {
    expect(() => findOption(mockInputOption, undefined)).toThrow('Fail to parse config options');
  });

  it('should throw options error, if there is more than 1 same option', () => {
    const mockOption = ['-test', 'testValue', '-i', 'input.txt', '-i', '1.txt'];
    expect(() => findOption(mockOption, inputOption)).toThrow('There are more than 1 input');
  });

  it('should throw options error, if there is mno option', () => {
    const mockOption = ['-test', 'testValue'];
    expect(() => findOption(mockOption, configOption)).toThrow('There is no config option.');
  });
});