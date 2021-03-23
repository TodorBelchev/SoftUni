import { html } from './node_modules/lit-html/lit-html.js';

export const tableView = (data) => html`${data.map(row)}`;

const row = (rowData) => html`
    <tr>
        <td>${rowData.firstName} ${rowData.lastName}</td>
        <td>${rowData.email}</td>
        <td>${rowData.course}</td>
    </tr>`;