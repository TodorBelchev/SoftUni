import { redirect } from './redirect.js';
import { deleteRecipe } from '../data/requests.js';
import { notificationHandler } from './notification.js';

export const archive = async (e, ctx) => {
    e.preventDefault();

    try {
        notificationHandler.start();
        const response = await deleteRecipe(ctx.recipe._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        ctx.recipes = ctx.recipes.filter(x => x._id !== ctx.recipe._id);

        if (ctx.recipes.length === 0) {
            delete ctx.recipes;
        }

        notificationHandler.end();
        notificationHandler.fiveSecondClose('Successful archive!', 'success');
        setTimeout(() => {
            redirect('/');
        }, 2000);
    } catch (error) {

    }
};
