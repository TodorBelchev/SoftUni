let { Repository } = require("./solution.js");
const { assert } = require('chai');

describe('Repository class', () => {
    let current;

    beforeEach(() => {
        let properties = {
            name: 'string',
            age: 'number',
            birthday: 'object'
        };
        current = new Repository(properties);
    });

    describe('Constructor test', () => {
        it('Should have all props', () => {
            assert.equal(current.props.hasOwnProperty('name'), true);
            assert.equal(current.props.hasOwnProperty('age'), true);
            assert.equal(current.props.hasOwnProperty('birthday'), true);
            assert.equal(typeof current.nextId, 'function');
            assert.typeOf(current.props, 'object');
        });

        it('It should have empty map', () => {
            assert.equal(current.data instanceof Map, true);
            assert.equal(current.data.size, 0);
        });
    });

    describe('Get count', () => {
        it('Should return the number of stored entities', () => {
            const entity = { name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) };
            current.add(entity);
            assert.equal(current.count, 1);
            current.add(entity);
            current.add(entity);
            assert.equal(current.count, 3);
        });
    });

    describe('Add method', () => {
        it('Should store entity', () => {
            const entity = { name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) };
            current.add(entity);
            assert.deepEqual(current.data.get(0), entity);
            assert.deepEqual(current.getId(0), entity);
            const entity2 = { name: 'Gosho', age: 21, birthday: new Date(1998, 0, 7) };
            current.add(entity2);
            assert.deepEqual(current.data.get(1), entity2);
            assert.deepEqual(current.getId(1), entity2);
        });

        it('Should return the id', () => {
            assert.equal(current.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) }), 0);
            assert.equal(current.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) }), 1);
        });

        it('Should throw', () => {
            assert.throw(() => current.add({
                name1: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), 'Property name is missing from the entity!');

            assert.throw(() => current.add({
                name: true,
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), 'Property name is not of correct type!');
        });

    });

    describe('Get id method', () => {
        it('Should return the entity at given id', () => {
            const entity = { name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) };
            current.add(entity);
            assert.deepEqual(current.getId(0), entity);
            assert.deepEqual(current.data.get(0), entity);
        })

        it('Should throw error if id is wrong', () => {
            assert.throw(() => current.getId(0), 'Entity with id: 0 does not exist!');
            assert.throw(() => current.getId(-1), 'Entity with id: -1 does not exist!');
        });
    });

    describe('Update method', () => {
        it('Should throw error if id is wrong', () => {
            assert.throw(() => current.update(0), 'Entity with id: 0 does not exist!');
            assert.throw(() => current.update(-1), 'Entity with id: -1 does not exist!');
        });

        it('Should update the entity', () => {
            const entity = { name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) };
            current.add(entity);
            const newEntity = { name: 'Gosho', age: 22, birthday: new Date(1998, 0, 7) }
            current.update(0, newEntity);
            assert.deepEqual(current.getId(0), newEntity);
            assert.deepEqual(current.data.get(0), newEntity);
        });

        it('Should throw error if new entity is not valid', () => {
            const entity = { name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) };
            current.add(entity);
            const entity2 = { name: 11, age: 22, birthday: new Date(1998, 0, 7) };
            assert.throw(() => current.update(1, entity2), 'Entity with id: 1 does not exist!');
            assert.throw(() => current.update(0, entity2), 'Property name is not of correct type!');
            delete entity2.name;
            entity2.name1 = 'Gosho';
            assert.throw(() => current.update(0, entity2), 'Property name is missing from the entity!');
            assert.throw(() => current.update(0, entity2), 'Property name is missing from the entity!');
        });
    });

    describe('Del method', () => {
        it('Should throw error if id is wrong', () => {
            assert.throw(() => current.del(0), 'Entity with id: 0 does not exist!');
            assert.throw(() => current.del(-1), 'Entity with id: -1 does not exist!');
        });

        it('Should delete the entity', () => {
            const entity = { name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) };
            current.add(entity);
            current.add(entity);
            current.add(entity);
            assert.deepEqual(current.data.size, 3);
            current.del(1);
            assert.deepEqual(current.data.size, 2);
            assert.deepEqual(current.count, 2);
            assert.deepEqual(current.data.get(1), undefined);
        });
    });

    describe('Validate function', () => {
        it('Should throw error if prop is missing', () => {
            assert.throw(() => current.add({ age: 22, birthday: new Date(1998, 0, 7) }), 'Property name is missing from the entity!');
            assert.throw(() => current.add({ name: '22', birthday: new Date(1998, 0, 7) }), 'Property age is missing from the entity!');
            assert.throw(() => current.add({ age: 22, name: 'Pesho' }), 'Property birthday is missing from the entity!');
        })

        it('Should throw error if prop type is invalid', () => {
            assert.throw(() => current.add({ name: 11, age: 22, birthday: new Date(1998, 0, 7) }), 'Property name is not of correct type!');
            assert.throw(() => current.add({ name: 'Pesho', age: '22', birthday: new Date(1998, 0, 7) }), 'Property age is not of correct type!');
            assert.throw(() => current.add({ name: 'Pesho', age: 22, birthday: '0.7.1998' }), 'Property birthday is not of correct type!');
        });

        it('Should throw error if prop name is invalid', () => {
            assert.throw(() => current.add({ name1: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) }), 'Property name is missing from the entity!');
            assert.throw(() => current.add({ name: 'Pesho', age1: 22, birthday: new Date(1998, 0, 7) }), 'Property age is missing from the entity!');
            assert.throw(() => current.add({ name: 'Pesho', age: 22, birthday1: new Date(1998, 0, 7) }), 'Property birthday is missing from the entity!');
        });
    });
});