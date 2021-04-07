import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { footerView } from './footerView.js';
import { notificationView } from './notificationView.js';

export const homeView = (ctx) => html`
    ${navigationView(ctx)}
    ${notificationView()}
    ${ctx.userData ? userHome(ctx) : guestHome()}
    ${footerView()}`;

const guestHome = () => html`
    <main role="main" class="inner cover mt-5">
        <h1 class="cover-heading">Coooooking University</h1>
        <p class="lead">They say that food passes through the stomach, we say that food passes through CookUni...
        </p>
    </main>`;

const userHome = (ctx) => html`
    ${ctx.recipes ? recipesView(ctx.recipes) : noRecipes()}`;

const noRecipes = () => html`
    <h1 class="text-center">Our Recipes</h1>
    <div id='foodNotFound'>
        <img src="https://t4.ftcdn.net/jpg/00/62/17/31/240_F_62173114_ozantkVtkPgzL0fxssAkTqKX1FHPr0UW.jpg" />
        <h3>Food not found...</h3>
    </div>`;

const recipesView = (recipes) => html`
    <h1 class="text-center">Our Recipes</h1>
    <div id="sharedRecipes">${recipes.map(recipeCard)}</div>`;

const recipeCard = (recipe) => html`
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="our-team-main">
                    <div class="team-front">
                        <img src=${recipe.img} />
                        <h3>Meal Name</h3>
                        <p>${recipe.meal}</p>
                    </div>
                    <div class="team-back">
                        <div class="back-side-info">
                            <h4>Ingredients</h4>
                            <ul>
                                ${recipe.ingredients.map(x => html`<li>${x}</li>`)}
                            </ul>
                            <a href="/details/${recipe._id}">View the recipe</a>
                        </div>
                        <img class="foodImage" src=${recipe.img} />
                    </div>
                </div>
            </div>
        </div>
    </div>`;