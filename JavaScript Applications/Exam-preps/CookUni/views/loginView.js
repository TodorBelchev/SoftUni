import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { footerView } from './footerView.js';
import { login } from '../controllers/login.js';
import { notificationView } from './notificationView.js';

export const loginView = (ctx) => html`
    ${navigationView(ctx)}
    ${notificationView()}
    <form class="text-center p-5 form-layout" @submit=${(e)=> { login(e, ctx) }}>
        <p class="h4 mb-4">Sign in</p>
        <input type="text" id="defaultRegisterFormUsername" name="email" class="form-control mb-4" placeholder="Email">
        <input type="password" id="defaultRegisterFormPassword" name="password" class="form-control" placeholder="Password">
        <hr>
        <button class="btn btn-danger w-25 m-auto my-4 btn-block" type="submit">Sign in</button>
    </form>
    ${footerView()}`;