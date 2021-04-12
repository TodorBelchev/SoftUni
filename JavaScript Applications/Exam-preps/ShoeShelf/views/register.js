import { registerUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footer.js';
import { navigationView } from './navigation.js';

export const registerView = (ctx) => {
    ctx.render(registerTemplate(ctx));
}

const registerTemplate = (ctx, errorMsg) => html`
${navigationView(ctx)}
<main>
    <h1>Register</h1>
    <p class="form-info">Already registered?
        <a href="/login">Login now</a> and have some fun!
    </p>

    ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
    <form @submit=${(e) => register(e, ctx)}>
        <div>
            <input type="email" placeholder="Email..." name="email">
        </div>
        <div>
            <input type="password" placeholder="Password" name="password">
        </div>
        <div>
            <input type="password" placeholder="Re-password" name="repass">
        </div>
        <div>
            <p class="message"></p>
            <button>Register</button>
        </div>
    </form>
</main>
${footerView()}`;

async function register(e, ctx) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');

    if (email.trim() === '') {
        ctx.render(registerTemplate(ctx, 'Email is required!'));
        return;
    }

    if (password.trim().length < 6) {
        ctx.render(registerTemplate(ctx, 'Password must be at least 6 characters long!'));
        return;
    }

    if (password.trim() !== repass.trim()) {
        ctx.render(registerTemplate(ctx, 'Passwords don`t match!'));
        return;
    }

    try {
        const response = await registerUser({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        saveUserData({ email: response.email, _id: response._id, token: response.accessToken });
        ctx.page.redirect('/');
    } catch (error) {
        ctx.render(registerTemplate(ctx, error.message));
        return;
    }
}