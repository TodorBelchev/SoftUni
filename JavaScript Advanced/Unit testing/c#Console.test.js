const cSharpConsole = require('../c#Console');
const { assert } = require('chai');

describe('Console class', () => {

    describe('writeLine method', () => {
        it('Should return the message', () => {
            assert.equal(cSharpConsole.writeLine('pesho'), 'pesho');
        });

        it('Should stringify object and return string', () => {
            let obj = { name: 'pesho' };
            assert.equal(cSharpConsole.writeLine(obj), JSON.stringify(obj));
        });

        it('Should throw error if without params', () => {
            assert.throw(() => cSharpConsole.writeLine(), `No string format given!`);
        });

        it('Should throw error if first argument is not string', () => {
            assert.throw(() => cSharpConsole.writeLine(1, 2), `No string format given!`);
        });

        it('Should throw error if params are not equal to placeholders', () => {
            assert.throw(() => cSharpConsole.writeLine("The sum of {0} and {1} is {2}", 3), 'Incorrect amount of parameters given!');
        });

        it('Should throw range error with cSharpConsole.writeLine("{0}", 1, 2)', () => {
            assert.throw(() => cSharpConsole.writeLine("{0}", 1, 2), 'Incorrect amount of parameters given!');
        });

        it('Should throw error if two placeholders are the same', () => {
            assert.throw(() => cSharpConsole.writeLine("The sum of {0} and {0} is {2}", 3, 4, 7), 'Incorrect placeholders given!');
        });

        it('Should throw error if placeholder value is invalid', () => {
            assert.throw(() => cSharpConsole.writeLine("The sum of {5}", 3), 'Incorrect placeholders given!');
        });

        it('Should throw error if placeholders are incorrect', () => {
            assert.throw(() => cSharpConsole.writeLine("The sum of {0} and {1} is {22}", 3, 4, 7), 'Incorrect placeholders given!');
        });

        it('Should return the message with inserted params', () => {
            assert.equal(cSharpConsole.writeLine('The sum of {0} and {1} is {2}', 3, 4, 7), 'The sum of 3 and 4 is 7');
        });
    });
});