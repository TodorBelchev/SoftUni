import { html } from '../node_modules/lit-html/lit-html.js';

export const notificationView = () => html`
    <div id="notifications">
        <div id="successBox" class="alert alert-success" role="alert"></div>
        <div id="loadingBox" class="alert alert-info" role="alert">Loading...</div>
        <div id="errorBox" class="alert alert-danger" role="alert"></div>
    </div>`;