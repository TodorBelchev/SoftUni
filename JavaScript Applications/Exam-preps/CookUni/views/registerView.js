import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { footerView } from './footerView.js';
import { register } from '../controllers/register.js';
import { notificationView } from './notificationView.js';

export const registerView = (ctx) => html`
    ${navigationView(ctx)}
    ${notificationView()}
    <form class="text-center p-5 form-layout" @submit=${register}>
        <p class="h4 mb-4">Sign up</p>
        <input type="text" id="defaultRegisterFormUsername" class="form-control mb-4" name="email" placeholder="Email">
        <input type="password" id="defaultRegisterFormPassword" class="form-control" name="password" placeholder="Password">
        <hr>
        <input type="password" id="defaultRegisterRepeatPassword" class="form-control" name="repeatPassword"
            placeholder="Repeat Password">
        <button class="btn btn-danger my-4 btn-block w-25 m-auto" type="submit">Sign up</button>
    </form>
    ${footerView()}`;