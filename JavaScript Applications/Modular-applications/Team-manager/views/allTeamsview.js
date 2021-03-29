import { getOneTeamsPage } from '../data/requests.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footerView.js';
import { navigationView } from './navigationView.js';
import { teamCard } from './teamCardView.js';

export const allTeamsView = async (ctx, page) => {
    const onePage = await getOneTeamsPage(page);

    async function showPage(e, ctx, page) {
        e.preventDefault();
        let currentPage = e.target.href.split('=')[1];
        if (currentPage) {
            page = currentPage;
        }
        const root = document.getElementById('content');
        ctx.pageCtx.page.redirect('/teams?page=' + page);
    }

return html`
    ${navigationView(ctx)}
    <main>
        <section id="browse">
    
            <article class="pad-med">
                <h1>Team Browser</h1>
            </article>
    
            ${ctx.userData ? 
                html`
                    <article class="layout narrow">
                        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
                    </article>` : 
                html``}           
    
            ${onePage.map(teamCard)}
            <article class="pad-med">         
                ${page < ctx.pages ? html`<a @click=${(e) => showPage(e, ctx, page + 1, false)} href="/teams?page=${Number(page) + 1}">Next page</a>` : ''}
                <div>Page ${page}</div>
                ${page > 1 ? html`<a @click=${(e) => showPage(e, ctx, page - 1, true)} href="/teams?page=${Number(page) - 1}">Prev page</a>` : ''}
            </article>
        </section>
    </main>
    ${footerView()}`;
}
