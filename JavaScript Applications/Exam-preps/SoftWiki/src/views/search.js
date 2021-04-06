import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticlesBySearchTitle } from '../data/requests.js';

const template = (articles, onSearch) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form id="search-form" @submit=${onSearch}>
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">

        ${articles.length > 0 ?
            articles.map(articleTemplate) :
            html`<h3 class="no-articles">No matching articles</h3>`}
        
    </div>
</section>`;

const articleTemplate = (article) => html`
<a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`;

export const searchPage = async (ctx) => {
    const title = ctx.querystring.split('=')[1];
    let articles = [];
    if (title) {
        articles = await getArticlesBySearchTitle(title);
    }
    console.log(articles);
    ctx.render(template(articles, onSearch));

    function onSearch(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get('search');
        ctx.page.redirect('/search?title=' + title);
    }
}