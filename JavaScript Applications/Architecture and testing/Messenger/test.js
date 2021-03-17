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
    this.timeout(6000);

    before(async () => {
        browser = await chromium.launch();
        // browser = await chromium.launch({ headless: false, slowMo: 500});
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

    describe('Load messages', () => {
        it('Should load all messages', async () => {
            await page.goto('http://localhost:3000');

            await Promise.all([
                page.waitForSelector('input'),
                page.click('input[value="Refresh"]')
            ]);
            const expected = `Spami: Hello, are you there?\nGarry: Yep, whats up :?\nSpami: How are you? Long time no see? :)\nGeorge: Hello, guys! :))\nSpami: Hello, George nice to see you! :)))`;   
            const result = await page.$eval('textarea[id="messages"]', (el) => el.value);
            assert.equal(result, expected);
        });

        it('Should send message', async () => {
            await page.route('**/jsonstore/messenger', route => route.fulfill(json({ author: 'Pesho', content: 'Some message' })));
            await page.goto('http://localhost:3000');
            await page.fill('input[id="author"]', 'Pesho');
            await page.fill('input[id="content"]', 'Some message');

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/jsonstore/messenger') && request.method() === 'POST'),
                page.click('input[value="Send"]')
            ]);

            const data = JSON.parse(request.postData());
            assert.equal(data.author, 'Pesho');
            assert.equal(data.content, 'Some message');

        });
    });
});