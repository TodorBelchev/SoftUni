let Parser = require("./solution.js");
let assert = require("chai").assert;

describe("MyTests", () => {
    let parser;

    beforeEach(() => {
        parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
    });

    describe('Constructor', () => {
        it('Should have all props', () => {
            assert.equal(Array.isArray(parser._log), true);
            assert.equal(Array.isArray(parser._data), true);
            assert.equal(typeof parser._addToLog, 'function');
            assert.deepEqual(parser._log, []);
            assert.deepEqual(parser._data, [{ "Nancy": "architect" }, { "John": "developer" }, { "Kate": "HR" }]);
        });
    });

    describe('Get data', () => {
        it('Should return data', () => {
            assert.equal(Array.isArray(parser.data), true);
            assert.deepEqual(parser._data, [{ "Nancy": "architect" }, { "John": "developer" }, { "Kate": "HR" }]);
            assert.deepEqual(parser._log, ['0: getData']);
        });
    });

    describe('Print', () => {
        it('Should print correct string', () => {
            assert.equal(parser.print(), `id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR`);
        });
    });

    describe('Add entries', () => {
        it('Should add entry and return message', () => {
            assert.equal(parser.addEntries('Steven:tech-support Edd:administrator'), 'Entries added!');
            assert.deepEqual(parser._log, ['0: addEntries']);
            assert.equal(parser._addToLog(), 'Added to log');
        });
    });

    describe('Remove entry', () => {
        it('Should remove entry', () => {
            assert.equal(parser.removeEntry('Kate'), 'Removed correctly!');
            assert.equal(parser._data[2].hasOwnProperty('deleted'), true);
        });
    });

    describe('Add to log', () => {
        it('Should return message', () => {
            assert.equal(parser._addToLog('Command'), 'Added to log');
            assert.deepEqual(parser._log, ['0: Command']);
        });
    });
});