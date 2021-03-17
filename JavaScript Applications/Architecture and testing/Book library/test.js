const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

let browser, page;

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

describe('E2E tests', function () {
    this.timeout(100000);

    before(async () => {
        browser = await chromium.launch();
        // browser = await chromium.launch({ headless: false, slowMo: 2000 });
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    describe('Load books', () => {
        it('Should load all books', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(json({
                "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
                    "author": "Svetlin Nakov",
                    "title": "C# Fundamentals"
                }
            })));
            await page.goto('http://localhost:3000');

            await Promise.all([
                page.waitForSelector('input'),
                page.click('button[id="loadBooks"]')
            ]);

            const result = await page.$$eval('tr', (el) => el.map(e => e.textContent));
            assert.include(result[1], 'Svetlin Nakov');
        });

        it('Should add new book', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(json({ title: 'Some book', author: 'Pesho' })));
            await page.goto('http://localhost:3000');
            await page.fill('input[name="author"]', 'Pesho');
            await page.fill('input[name="title"]', 'Some book');

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/jsonstore/collections/books') && request.method() === 'POST'),
                page.click('text=Submit')
            ]);

            const data = JSON.parse(request.postData());
            assert.equal(data.title, 'Some book');
            assert.equal(data.author, 'Pesho');
        });

        it('Should load edit form', async () => {
            await page.goto('http://localhost:3000');
            await page.waitForSelector('form');
            await page.click('button[id="loadBooks"]');
            await page.waitForSelector('text=Edit');
            await page.click('text=Edit');

            const titleInputValue = await page.$$eval('input[name="title"]', i => i.map(x => x.value));
            assert.equal(titleInputValue[1], 'Harry Potter and the Philosopher\'s Stone');
        });

        it('Should send correct data on edit', async () => {
            await page.goto('http://localhost:3000');
            await page.click('button[id="loadBooks"]');
            await page.waitForSelector('form');
            await page.click('text=Edit');


            await page.fill('form[id=editForm] input[name="title"]', 'Some book');
            await page.fill('form[id=editForm] input[name="author"]', 'Pesho');
            await page.route('**/jsonstore/collections/books', route => route.fulfill(json({ title: 'Some book', author: 'Pesho' })));

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/jsonstore/collections/books') && request.method() === 'PUT'),
                page.click('text=Save')
            ]);

            const data = JSON.parse(request.postData());
            assert.equal(data.title, 'Some book');
            assert.equal(data.author, 'Pesho');
        });

        it('Should send correct delete data', async () => {
            await page.route('**/jsonstore/collections/books/d953e5fb-a585-4d6b-92d3-ee90697398a0', route => route.fulfill(json({ message: 'Book deleted' })));
            await page.goto('http://localhost:3000');
            await page.click('button[id="loadBooks"]');

            const [_, __, request] = await Promise.all([
                page.click('text=delete'),
                page.once('dialog', async (dialog) => {
                    await dialog.accept();
                }),
                page.waitForRequest(request => request.url().includes('/jsonstore/collections/books/d953e5fb-a585-4d6b-92d3-ee90697398a0') && request.method() === 'DELETE'),
            ]);


            const data = request._initializer.url;
            const expected = 'http://localhost:3030/jsonstore/collections/books/d953e5fb-a585-4d6b-92d3-ee90697398a0';
            assert.equal(data, expected);
        });
    });
});