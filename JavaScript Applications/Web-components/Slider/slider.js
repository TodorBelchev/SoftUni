import { html, render } from 'https://unpkg.com/lit-html?module';

const template = (ctx, onInput) => html`
<style>
    .slider-container {
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100px;
    }

    .slider-percentage-value {
        font-weight: bold;
        text-align: center;
        margin: 1em 0;
    }

    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        margin: 0 1em;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
    }
</style>
<div class="slider-container">
    <input @input=${onInput} class="slider" type="range" inverted=${ctx.inverted} value=${ctx.inverted !== null ? (100 - ctx.value) : ctx.value} step=${ctx.step} />
    <div class="slider-end">
        Percentage: <span class="slider-percentage-value">${ctx.value} %</span>
    </div>
</div>`;

class Slider extends HTMLElement {
    constructor() {
        super();

        this.state = {
            value: this.getAttribute('value'),
            step: this.getAttribute('step'),
            inverted: this.getAttribute('inverted')
        }
        this.root = this.attachShadow({ mode: 'closed' });
        this.update();
    }

    update() {
        render(template(this.state, this.onInput), this.root, { eventContext: this });
    }

    onInput(e) {
        if (e.target.getAttribute('inverted') !== null) {
            this.state.value = 100 -e.target.value;
        } else {
            this.state.value = e.target.value;
        }
        this.update();
    }
}

window.customElements.define('slider-custom', Slider);