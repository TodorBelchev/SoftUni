import { editRecipe } from "../data/requests.js";
import { notificationHandler } from "./notification.js";
import { redirect } from "./redirect.js";

export const like = async (e, ctx) => {
    e.preventDefault();
    const isLiked = ctx.recipe.likes.find(x => x === ctx.userData._id);
    if (isLiked) {
        return;
    }
    ctx.recipe.likes.push(ctx.userData._id);
    try {
        notificationHandler.start();
        await editRecipe(ctx.recipe._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ctx.recipe)
        });
        notificationHandler.end();
        notificationHandler.fiveSecondClose('Successful like!', 'success');
        setTimeout(() => {
            redirect('/');
        }, 2000);
    } catch (error) { return; }
};