import { html, render } from 'https://unpkg.com/lit-html?module';

const template = (ctx, add, remove) => html`
<style>
    .container {
        max-width: 500px;
        margin: 50px auto;
        border-radius: 20px;
        border: solid 8px #2c3033;
        background: white;
        box-shadow: 0 0 0px 1px rgba(255, 255, 255, .4), 0 0 0px 3px #2c3033;
    }

    .editable-list-header {
        margin: 0;
        border-radius: 10px 10px 0 0px;
        background-image: linear-gradient(#687480 0%, #3b4755 100%);
        font: bold 18px/50px arial;
        text-align: center;
        color: white;
        box-shadow: inset 0 -2px 3px 2px rgba(0, 0, 0, .4), 0 2px 2px 2px rgba(0, 0, 0, .4);
    }

    .editable-list {
        padding-left: 0;
        list-style: none;
    }

    .editable-list>li,
    .editable-list-add-container {
        display: flex;
        align-items: center;
    }

    .editable-list>li {
        justify-content: space-between;
        padding: 0 1em;
    }

    .editable-list-add-container {
        justify-content: space-evenly;
    }

    .editable-list>li:nth-child(odd) {
        background-color: rgb(229, 229, 234);
    }

    .editable-list>li:nth-child(even) {
        background-color: rgb(255, 255, 255);
    }

    .editable-list-add-container>label {
        font-weight: bold;
        text-transform: uppercase;
    }

    .icon {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.8rem;
        outline: none;
    }
</style>
<article class="container">
    <h1 class="editable-list-header">${ctx.title}</h1>

    <ul class="editable-list">
        ${ctx.items.map((x) => liTemplate(x, remove))}
    </ul>

    <div class="editable-list-add-container">
        <label>ADD NEW TODO</label>
        <input class="add-new-list-item-input" type="text"></input>
        <button @click=${add} class="editable-list-add-item icon">&oplus;</button>
    </div>
</article>`;

const liTemplate = (text, remove) => html`
<li>
    <p class="editable-list-item-value">${text}</p>
    <button @click=${remove} class="editable-list-remove-item icon">
        &ominus;
    </button>
</li>`;

class EditableList extends HTMLElement {
    constructor() {
        super();

        this.state = {
            title: this.getAttribute('title'),
            items: [...this.children].map(x => x.textContent)
        };

        this.root = this.attachShadow({ mode: 'closed' });
        this.update();
    }

    update() {
        render(template(this.state, this.add, this.remove), this.root, { eventContext: this });
    }

    add() {
        const input = this.root.querySelector('.add-new-list-item-input');
        if (input.value.trim() === '') { return; }
        this.state.items.push(input.value.trim());
        input.value = '';
        this.update();
    }

    remove(e) {
        const value = e.target.parentElement.querySelector('p.editable-list-item-value').textContent;
        const index = this.state.items.indexOf(value);
        this.state.items.splice(index, 1);
        this.update();
    }
}

window.customElements.define('editable-list', EditableList);