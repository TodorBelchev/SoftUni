const HolidayPackage = require('./index.js');
const { assert } = require('chai');
const { O_APPEND } = require('constants');

describe('Holiday package', () => {
    let pack;

    beforeEach(() => {
        pack = new HolidayPackage('Ibiza', 'Summer');
    });

    describe('Constructor', () => {
        it('Should have all props', () => {
            assert.equal(pack.hasOwnProperty('vacationers'), true);
            assert.equal(pack.hasOwnProperty('destination'), true);
            assert.equal(pack.hasOwnProperty('season'), true);
            assert.equal(pack.hasOwnProperty('_insuranceIncluded'), true);
        });

        it('All props should have correct type', () => {
            assert.deepEqual(pack.vacationers, []);
            assert.equal(typeof pack.destination, 'string');
            assert.equal(typeof pack.season, 'string');
            assert.equal(typeof pack.insuranceIncluded, 'boolean');
        });

        it('Should set correct values of props', () => {
            assert.equal(pack.vacationers.length, 0);
            assert.equal(pack.destination, 'Ibiza');
            assert.equal(pack.season, 'Summer');
            assert.equal(pack.insuranceIncluded, false);
        });
    });

    describe('Insurance getter and setter', () => {
        it('Should set insurance status', () => {
            assert.equal(pack.insuranceIncluded, false);
            pack.insuranceIncluded = true;
            assert.equal(pack.insuranceIncluded, true);
        });
    });

    describe('Show vacationers', () => {
        it('Should return correct message', () => {
            assert.equal(pack.showVacationers(), 'No vacationers are added yet');
            pack.addVacationer('Pesho Petrov');
            pack.addVacationer('Gosho Goshev');
            assert.equal(pack.showVacationers(), 'Vacationers:\nPesho Petrov\nGosho Goshev');
        });
    });

    describe('Add vacationers', () => {
        it('Should add vacationers', () => {
            pack.addVacationer('Pesho Petrov');
            assert.equal(pack.vacationers.includes('Pesho Petrov'), true);
        });

        it('Should throw error', () => {
            assert.throw(() => pack.addVacationer('Pesho'), 'Name must consist of first name and last name');
            assert.throw(() => pack.addVacationer(' '), 'Vacationer name must be a non-empty string');
            assert.throw(() => pack.addVacationer(1), 'Vacationer name must be a non-empty string');
        });
    });

    describe('Generate holiday', () => {
        it('Should throw error', () => {
            assert.throw(() => pack.generateHolidayPackage(), 'There must be at least 1 vacationer added');
        });

        it('Should return price 700', () => {
            pack.addVacationer('Pesho Petrov');
            pack.insuranceIncluded = true;
            const output = `Holiday Package Generated\nDestination: Ibiza\nVacationers:\nPesho Petrov\nPrice: 700`;
            assert.equal(pack.generateHolidayPackage(), output);
        })

        it('Should return price 800', () => {
            pack.addVacationer('Pesho Petrov');
            pack.addVacationer('Gosho Goshev');
            pack.season = 'Spring';
            const output = `Holiday Package Generated\nDestination: Ibiza\nVacationers:\nPesho Petrov\nGosho Goshev\nPrice: 800`;
            assert.equal(pack.generateHolidayPackage(), output);
        });

        it('Should return price 1100', () => {
            pack.addVacationer('Pesho Petrov');
            pack.addVacationer('Gosho Goshev');
            pack.season = 'Winter';
            pack.insuranceIncluded = true;
            const output = `Holiday Package Generated\nDestination: Ibiza\nVacationers:\nPesho Petrov\nGosho Goshev\nPrice: 1100`;
            assert.equal(pack.generateHolidayPackage(), output);
        });
    });
});