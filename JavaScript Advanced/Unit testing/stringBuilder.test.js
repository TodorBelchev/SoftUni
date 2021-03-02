const StringBuilder = require('../stringBuilder');
const { assert } = require('chai');

describe('StringBuilder class test', () => {
    let sb;

    beforeEach(() => {
        sb = new StringBuilder();
    });

    describe('vrfyParam', () => {
        it('Should throw error if param is not string', () => {
            assert.throw(() => StringBuilder._vrfyParam(1), 'Argument must be а string');
        });

        it('Should throw error if param is not string', () => {
            assert.throw(() => StringBuilder._vrfyParam([]), 'Argument must be а string');
        });

        it('Should throw error if param is not string', () => {
            assert.throw(() => StringBuilder._vrfyParam({}), 'Argument must be а string');
        });

        it('Should not throw error if param is string', () => {
            assert.doesNotThrow(() => StringBuilder._vrfyParam('pesho'));
        });
    });

    describe('toString', () => {
        it('Should return correct string', () => {
            assert.equal(sb.toString(), '');
        });

        it('Should return correct string', () => {
            sb.append('Pesho');
            assert.equal(sb.toString(), 'Pesho');
        });

        it('Should return correct string', () => {
            sb.append('Pesho');
            sb.prepend('Hackera ');
            assert.equal(sb.toString(), 'Hackera Pesho');
        });
    });

    describe('constructor', () => {
        it('Should not throw error', () => {
            assert.doesNotThrow(() => new StringBuilder());
            assert.doesNotThrow(() => new StringBuilder('pesho'));
        });

        it('Should create new object', () => {
            sb = new StringBuilder('hello');
            assert.equal(sb.toString(), 'hello');
            sb = new StringBuilder();
            assert.equal(sb.toString(), '');
        });

        it('Should have all properties', () => {
            assert.equal(Object.getPrototypeOf(sb).hasOwnProperty('append'), true);
            assert.equal(Object.getPrototypeOf(sb).hasOwnProperty('prepend'), true);
            assert.equal(Object.getPrototypeOf(sb).hasOwnProperty('insertAt'), true);
            assert.equal(Object.getPrototypeOf(sb).hasOwnProperty('remove'), true);
            assert.equal(Object.getPrototypeOf(sb).hasOwnProperty('toString'), true);
            assert.equal(sb.hasOwnProperty('_stringArray'), true);
        });

        it('Should have empty array', () => {
            assert.equal(sb._stringArray.length, 0);
            assert.equal(sb._stringArray instanceof Array, true);
        });
    });

    describe('append method', () => {
        it('Should append at end', () => {
            sb.append('pesho');
            sb.append('pesho');
            assert.equal(sb._stringArray[0], 'p');
            assert.equal(sb.toString(), 'peshopesho');
        });

        it('Should throw error if append value is not string', () => {
            assert.throw(() => sb.append(12), 'Argument must be а string');
        });

        it('Should throw error if append value is not string', () => {
            assert.throw(() => sb.append([]), 'Argument must be а string');
        });
    });

    describe('prepend method', () => {
        it('Should prepend at start', () => {
            sb.prepend('pesho');
            sb.prepend('pesho');
            assert.equal(sb.toString(), 'peshopesho');
            assert.equal(sb._stringArray[0], 'p');
        });

        it('Should throw error if prepend value is not string', () => {
            assert.throw(() => sb.prepend(12), 'Argument must be а string');
        });

        it('Should throw error if prepend value is not string', () => {
            assert.throw(() => sb.prepend({}), 'Argument must be а string');
        });
    });

    describe('insertAt method', () => {
        it('Should insert string at given index', () => {
            sb.append('osho');
            sb.insertAt('g', 0);
            sb.insertAt('gosho', 5);
            assert.equal(sb.toString(), 'goshogosho');
            assert.equal(sb._stringArray[0], 'g');
        });

        it('Should insert string at given index', () => {
            sb.insertAt('gosho', 0);
            assert.equal(sb.toString(), 'gosho');
            assert.equal(sb._stringArray[0], 'g');
        });

        it('Should throw error if prepend value is not string', () => {
            assert.throw(() => sb.insertAt(1, 0), 'Argument must be а string');
        });

        it('Should throw error if prepend value is not string', () => {
            assert.throw(() => sb.insertAt({}), 'Argument must be а string');
        });
    });

    describe('remove method', () => {
        it('Should remove string at given index and length', () => {
            sb.append('Gosho Goshev');
            sb.remove(5, 7);
            assert.equal(sb.toString(), 'Gosho');
        });

        it('Should remove string at given index and length', () => {
            sb.remove(5, 7);
            assert.equal(sb.toString(), '');
            assert.equal(sb._stringArray.length, 0);
        });

        it('Should remove string at given index and length', () => {
            sb.append('Gosho Goshev');
            sb.remove(5, 7);
            assert.equal(sb._stringArray.join(''), 'Gosho');
        });

        it('Should not remove without params', () => {
            sb.append('Gosho Goshev');
            sb.remove();
            assert.equal(sb._stringArray.join(''), 'Gosho Goshev');
        });
    });
});