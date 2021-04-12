import { html } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footer.js';
import { navigationView } from './navigation.js';

export const loading = (ctx) => html`
${navigationView(ctx)}
    <div class="noShoes">Loading...</div>
${footerView()}`