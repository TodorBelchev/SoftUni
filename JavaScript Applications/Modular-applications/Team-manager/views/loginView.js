import { login } from '../controllers/login.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footerView.js';
import { navigationView } from './navigationView.js';

export const loginView = (ctx) => html`
    ${navigationView(ctx)}
    <main>
        <section id="login">
            <article class="narrow">
                <header class="pad-med">
                    <h1>Login</h1>
                </header>
                <form id="login-form" class="main-form pad-large" @submit=${login}>
                    <div class="error">Error message.</div>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <input class="action cta" type="submit" value="Sign In">
                </form>
                <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                </footer>
            </article>
        </section>
    </main>
    ${footerView()}`;