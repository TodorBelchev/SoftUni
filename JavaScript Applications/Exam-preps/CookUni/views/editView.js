import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { footerView } from './footerView.js';
import { edit } from '../controllers/edit.js';
import { notificationView } from './notificationView.js';

export const editView = (ctx) => html`
    ${navigationView(ctx)}
    ${notificationView()}
    <form class="text-center p-5 form-layout" @submit=${(e)=> { edit(e, ctx) }}>
        <p class="h4 mb-4">Edit Recipe</p>
        <input type="text" id="defaultRecepieEditMeal" name="meal" class="form-control mb-4" placeholder="Meal"
            .value=${ctx.recipe.meal}>
        <input type="text" id="defaultRecepieEditIngredients" name="ingredients" class="form-control mb-4"
            placeholder="Ingredients" .value=${ctx.recipe.ingredients.join(',')}>
        <textarea type="text" id="defaultRecepieEditMethodOfPreparation" name="prepMethod" class="form-control mb-4"
            placeholder="Method of preparation" .value=${ctx.recipe.prepMethod}></textarea>
        <textarea type="text" id="defaultRecepieEditDescription" name="description" class="form-control mb-4"
            placeholder="Description" .value=${ctx.recipe.prepMethod}></textarea>
        <input type="text" id="defaultRecepieEditFoodImageURL" name="img" class="form-control mb-4"
            placeholder="Food Image URL..." .value=${ctx.recipe.img}>
        <select name="category" select="">
            <option>Select category...</option>
            <option ?selected=${ctx.recipe.category==='Vegetables and legumes/beans' }>Vegetables and legumes/beans</option>
            <option ?selected=${ctx.recipe.category==='Fruits' }>Fruits</option>
            <option ?selected=${ctx.recipe.category==='Grain Food' }>Grain Food</option>
            <option ?selected=${ctx.recipe.category==='Milk, cheese, eggs and alternatives' }>Milk, cheese, eggs and
                alternatives</option>
            <option ?selected=${ctx.recipe.category==='Lean meats and poultry, fish and alternatives' }>Lean meats and
                poultry, fish and alternatives</option>
        </select>
        <button class="btn btn-danger w-25 m-auto my-4 btn-block" type="submit">Edit it</button>
    </form>
    ${footerView()}`;