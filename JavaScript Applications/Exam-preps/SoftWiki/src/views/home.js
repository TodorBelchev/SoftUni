import { html } from '../../node_modules/lit-html/lit-html.js';

import { getArticlesByCategory } from '../data/requests.js';

const template = (javaScriptArticles, javaArticles, pythonArticles, cSharpArticles) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${javaScriptArticles.length > 0 ? 
            javaScriptArticles.map(articleTemplate) :
            html`<h3 class="no-articles">No articles yet</h3>`}

    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${cSharpArticles.length > 0 ? 
            cSharpArticles.map(articleTemplate) :
            html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${javaArticles.length > 0 ? 
            javaArticles.map(articleTemplate) :
            html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${pythonArticles.length > 0 ? 
            pythonArticles.map(articleTemplate) :
            html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
</section>`;

const articleTemplate = (article) => html`
<article>
    <h3>${article.title}</h3>
    <p>${article.content}</p>
    <a href="/details/${article._id}" class="btn details-btn">Details</a>
</article>`;

export const homePage = async (ctx) => {
    const articles = await getArticlesByCategory();
    const javaScriptArticles = articles.filter(x => x.category === 'JavaScript');
    const javaArticles = articles.filter(x => x.category === 'Java');
    const pythonArticles = articles.filter(x => x.category === 'Python');
    const cSharpArticles = articles.filter(x => x.category === 'C#');
    ctx.render(template(javaScriptArticles, javaArticles, pythonArticles, cSharpArticles));
}