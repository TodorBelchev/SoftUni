import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { register } from '../controllers/register.js';
import { footerView } from './footerView.js';

export const registerView = (ctx) => html`
    ${navigationView(ctx)}
    <main>
        <section id="register">
            <article class="narrow">
                <header class="pad-med">
                    <h1>Register</h1>
                </header>
                <form id="register-form" class="main-form pad-large" @submit=${register}>
                    <div class="error">Error message.</div>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Username: <input type="text" name="username"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat: <input type="password" name="repass"></label>
                    <input class="action cta" type="submit" value="Create Account">
                </form>
                <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
                </footer>
            </article>
        </section>
    </main>
    ${footerView()}`;