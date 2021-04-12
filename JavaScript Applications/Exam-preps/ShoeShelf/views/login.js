import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footer.js';
import { navigationView } from './navigation.js';

export const loginView = (ctx) => {
    ctx.render(loginTemplate(ctx));
}

const loginTemplate = (ctx, errorMsg) => html`
${navigationView(ctx)}
<main>
    <h1>Login</h1>
    <p class="form-info">Don't have account?
        <a href="/register">Register now</a> and fix that!
    </p>

    ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
    <form @submit=${(e)=> login(e, ctx)}>
        <div>
            <input type="email" placeholder="Email..." name="email">
        </div>

        <div>
            <input type="password" placeholder="Password..." name="password">
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
</main>
${footerView()}`;

async function login(e, ctx) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '') {
        ctx.render(loginTemplate(ctx, 'Email is required!'));
        return;
    }

    if (password.trim().length < 6) {
        ctx.render(loginTemplate(ctx, 'Password must be at least 6 characters long!'));
        return;
    }

    try {
        const response = await loginUser({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        saveUserData({ email: response.email, _id: response._id, token: response.accessToken });
        ctx.page.redirect('/');
    } catch (error) {
        ctx.render(loginTemplate(ctx, error.message));
        return;
    }
}