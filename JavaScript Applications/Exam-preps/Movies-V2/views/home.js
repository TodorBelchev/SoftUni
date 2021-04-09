import { html } from '../node_modules/lit-html/lit-html.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const homePage = (ctx) => {
    ctx.render(homeTemplate(ctx));
}

const homeTemplate = (ctx) => html`
${navBar(ctx)}
<img class="background" src="images/background.jpg">
${footer()}`;