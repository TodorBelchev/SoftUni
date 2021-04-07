import { editRecipe } from '../data/requests.js';
import { notificationHandler } from './notification.js';
import { redirect } from './redirect.js';

export const edit = async (e, ctx) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const meal = formData.get('meal');
    const ingredients = formData.get('ingredients').split(',').map(x => x.trim());
    const prepMethod = formData.get('prepMethod');
    const description = formData.get('description');
    const img = formData.get('img');
    const category = formData.get('category');

    if (meal.trim().length < 4) {
        return alert('Meal must be at least 4 characters!');
    }

    if (ingredients.length < 2) {
        return alert('Ingredients must be at least 2!');
    }

    if (prepMethod.trim().length < 10 || description.trim().length < 10) {
        return alert('Method and description must be at least 10 characters!');
    }

    if (img.trim().slice(0, 4) !== 'http') {
        return alert('Please enter valid image URL!');
    }

    if (category.includes('Select category')) {
        return alert('Please select category!');
    }


    const recipe = {
        meal,
        ingredients,
        prepMethod,
        description,
        img,
        category,
        likes: [ctx.userData._id],
        _ownerId: ctx.userData._id
    };

    try {
        notificationHandler.start();
        const response = await editRecipe(ctx.recipe._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        });
        notificationHandler.end();
        notificationHandler.fiveSecondClose('Successful edit!', 'success');
        setTimeout(() => {
            redirect('/');
        }, 2000);
    } catch (error) { return; }
};