import { html, render } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';

const template = (ctx, onClick, onSelect) => html`
<style>
    .carousel-container {
        max-width: 60rem;
        position: relative;
        margin: 0 auto;
    }

    .carousel-controls {
        text-align: center;
    }

    .carousel-slide {
        display: none;
    }

    .carousel-slide>img {
        width: 100%;
    }

    /* Next & previous buttons */

    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }

    /* Position the "next button" to the right */

    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */

    .prev:hover,
    .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    /* Caption text */

    .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
    }

    /* Number text (1/3 etc) */

    .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }

    /* The dots/bullets/indicators */
    .carousel-controls>.dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
        background-color: #717171;
    }

    /* Fading animation */

    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }

    @keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }
</style>
<div class="carousel-container">
    

    ${ctx.images.map((x, i, arr) => itemTemplate(x, i, arr, ctx.active))}

    <a @click=${onClick} class="prev">&#10094;</a>
    <a @click=${onClick} class="next">&#10095;</a>
</div>
<div class="carousel-controls">
    ${ctx.images.map((x, i) => html`<span @click=${onSelect} class="dot" id=${i}></span>`)}
</div>`;

const itemTemplate = (item, i, arr, active) => {
    const isActive = i === active;
    const styles = {}
    isActive ? styles.display = 'block' : 'none';
    return html`
        <article class="carousel-slide" style=${styleMap(styles)}>
            <p class="number-text">${i + 1} / ${arr.length}</p>
            <img src=${item} alt="">
            <p class="caption-text">CAPTION TEXT 1</p>
        </article>`;
}


class Carousel extends HTMLElement {
    constructor() {
        super();

        this.state = {
            images: [...this.attributes]
                .filter(a => a.name.includes('image-url'))
                .map(a => a.value),
            captions: [...this.attributes]
                .filter(a => a.name.includes('caption'))
                .map(a => a.value),
            active: 0
        }
        this.root = this.attachShadow({ mode: 'closed' });
        this.update();
    }

    update() {
        render(template(this.state, this.onClick, this.onSelect), this.root, { eventContext: this });
    }

    onClick(e) {
        e.preventDefault();
        const direction = e.target.className === 'next' ? 1 : -1;
        this.state.active = this.state.active + direction;
        this.state.active > this.state.images.length - 1 ? this.state.active = 0 : '';
        this.state.active < 0 ? this.state.active = this.state.images.length - 1 : '';
        this.update();
    }

    onSelect(e) {
        e.preventDefault();
        this.state.active = Number(e.target.id);
        this.update();
    }
}

window.customElements.define('app-carousel', Carousel);