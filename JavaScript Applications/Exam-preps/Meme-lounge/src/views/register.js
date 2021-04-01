import { html } from '../../node_modules/lit-html/lit-html.js';
import { registerUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { navBar } from './navbar.js';
import { notify } from '../notification.js';

export const registerPage = (ctx) => {
    ctx.render(registerTemplate(ctx, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get('username').trim();
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();
        const gender = formData.get('gender');

        try {
            if (email === '' || password === '' || username === '' || repeatPass === '' || !gender) {
                throw new Error('All fields are required!');
            }

            if (password !== repeatPass) {
                throw new Error('Passwords don`t match!');
            }

            const response = await registerUser({ email, password, username, gender });
            saveUserData({
                token: response.accessToken,
                email: response.email,
                gender: response.gender,
                username: response.username,
                id: response._id
            });

            ctx.page.redirect('/catalog');
        } catch (error) {
            notify(error.message);
        }

    }
};

const registerTemplate = (ctx, onSubmit) => html`
${navBar(ctx)}
<main>
    <section id="register">
        <form @submit=${onSubmit} id="register-form">
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male">
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="#">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
</main>`;