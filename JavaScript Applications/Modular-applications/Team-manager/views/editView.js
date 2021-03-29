import { editTeam } from '../controllers/team.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footerView.js';
import { navigationView } from './navigationView.js';

export const editView = (ctx) => html`
${navigationView(ctx)}
<main>
    <section id="edit">
        <article class="narrow">
            <header class="pad-med">
                <h1>Edit Team</h1>
            </header>
            <form id="edit-form" class="main-form pad-large" @submit=${(e)=> { editTeam(e, ctx) }}>
                <div class="error"></div>
                <label>Team name: <input type="text" name="name" .value=${ctx.team.name}></label>
                <label>Logo URL: <input type="text" name="logoUrl" .value=${ctx.team.logoUrl}></label>
                <label>Description: <textarea name="description">${ctx.team.description}</textarea></label>
                <input class="action cta" type="submit" value="Save Changes">
            </form>
        </article>
    </section>
</main>
${footerView()}`;
