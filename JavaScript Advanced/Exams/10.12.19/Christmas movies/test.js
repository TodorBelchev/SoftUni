const ChristmasMovies = require('./02. Christmas Movies_Resources');
const { assert } = require('chai');

describe('ChristmasMovies test', () => {
    let movies;

    beforeEach(() => {
        movies = new ChristmasMovies();
    });

    describe('Constructor', () => {
        it('Should have all props', () => {
            assert.equal(movies.hasOwnProperty('movieCollection'), true);
            assert.equal(movies.hasOwnProperty('watched'), true);
            assert.equal(movies.hasOwnProperty('actors'), true);
            assert.deepEqual(movies.movieCollection, []);
            assert.deepEqual(movies.watched, {});
            assert.deepEqual(movies.actors, []);
        })
    });

    describe('Buy movie', () => {
        it('Should add movie', () => {
            let output = `You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`;
            assert.equal(movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']), output);
            assert.equal(movies.movieCollection[0].name, 'Home Alone');
            assert.equal(movies.movieCollection[0].actors.length, 3);
            assert.equal(movies.movieCollection[0].actors.includes('Macaulay Culkin'), true);
            assert.equal(movies.movieCollection[0].actors.includes('Joe Pesci'), true);
            assert.equal(movies.movieCollection[0].actors.includes('Daniel Stern'), true);
            assert.deepEqual(movies.movieCollection[0].actors, ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Movie', ['Actor', 'Actor', 'Actor 2']);
            assert.deepEqual(movies.movieCollection[1].actors, ['Actor', 'Actor 2']);
        });

        it('Should throw error', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throw(() => movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']), 'You already own Home Alone in your collection!');
        });
    });

    describe('Discard movie', () => {
        it('Should remove movie', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            assert.equal(movies.watched.hasOwnProperty('Home Alone'), true);
            assert.equal(movies.discardMovie('Home Alone'), 'You just threw away Home Alone!');
            assert.equal(movies.watched.hasOwnProperty('Home Alone'), false);
            assert.deepEqual(movies.movieCollection, []);
            assert.deepEqual(movies.watched, {});
        });

        it('Should throw error if movie is not watched', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            assert.throw(() => movies.discardMovie('Home Alone'), 'Home Alone is not watched!');
        });

        it('Should throw error if movie is not in collection', () => {
            assert.throw(() => movies.discardMovie('Home Alone'), 'Home Alone is not at your collection!');
        });
    });

    describe('Watch movie', () => {
        it('Should add move to watch list', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            assert.equal(movies.watched.hasOwnProperty('Home Alone'), true);
            assert.equal(movies.watched['Home Alone'], 1);
            movies.watchMovie('Home Alone');
            assert.equal(movies.watched['Home Alone'], 2);
        });

        it('Should increase watched times', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            assert.equal(movies.watched['Home Alone'], 1);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            assert.equal(movies.watched['Home Alone'], 4);
        });

        it('Should throw error if movie is not in collection', () => {
            assert.throw(() => movies.watchMovie('Home Alone'), 'No such movie in your collection!');
        });
    });

    describe('Favorite movie', () => {
        it('Should return favorite movie', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            assert.equal(movies.favouriteMovie(), 'Your favourite movie is Home Alone and you have watched it 1 times!');
        });

        it('Should return correct message if two movies have same watch times', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone 2');
            assert.equal(movies.favouriteMovie(), 'Your favourite movie is Home Alone and you have watched it 2 times!');
        });

        it('Should throw error if no watched movie exist', () => {
            assert.throw(() => movies.favouriteMovie(), 'You have not watched a movie yet this year!');
        });
    });

    describe('Most starred actor', () => {
        it('Should return message', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            assert.equal(movies.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 2 movies!');
        });

        it('Should throw error if no movie is watched', () => {
            assert.throw(() => movies.mostStarredActor(), 'You have not watched a movie yet this year!');
        });

        it('Should return right actor if they are starred the same', () => {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin', 'Joe Pesci']);
            assert.equal(movies.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 2 movies!');
        })
    });
});