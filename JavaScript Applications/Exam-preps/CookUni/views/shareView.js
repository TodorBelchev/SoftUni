import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { footerView } from './footerView.js';
import { share } from '../controllers/share.js';
import { notificationView } from './notificationView.js';

export const shareView = (ctx) => html`
    ${navigationView(ctx)}
    ${notificationView()}
    <form class="text-center p-5 form-layout" id="share-receipt-form" @submit=${(e)=> { share(e, ctx) }}>
        <p class="h4 mb-4">Share Recipe</p>
        <input type="text" id="defaultRecepieShareMeal" name="meal" class="form-control mb-4" placeholder="Meal">
        <input type="text" id="defaultRecepieShareIngredients" name="ingredients" class="form-control mb-4"
            placeholder="Ingredients">
        <textarea type="text" id="defaultRecepieShareMethodOfPreparation" name="prepMethod" class="form-control mb-4"
            placeholder="Method of preparation"></textarea>
        <textarea type="text" id="defaultRecepieShareDescription" name="description" class="form-control mb-4"
            placeholder="Description"></textarea>
        <input type="text" id="defaultRecepieShareFoodImageURL" name="img" class="form-control mb-4"
            placeholder="Food Image URL...">
        <select name="category">
            <option selected>Select category...</option>
            <option selected>Vegetables and legumes/beans</option>
            <option selected>Fruits</option>
            <option selected>Grain Food</option>
            <option selected>Milk, cheese, eggs and alternatives</option>
            <option selected>Lean meats and poultry, fish and alternatives</option>
        </select>
        <button class="btn btn-danger w-25 m-auto my-4 btn-block" type="submit">Share it</button>
    </form>
    ${footerView()}`;