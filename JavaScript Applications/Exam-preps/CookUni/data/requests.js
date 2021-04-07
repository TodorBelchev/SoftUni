import { notificationHandler } from "../controllers/notification.js";

async function requester(URL, options) {
    try {
        const response = await fetch(URL, options);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        notificationHandler(error.error.message, 'error');
        throw new Error(Error.message);
    }
}

export const getRecipes = async () => await requester('https://books-exercise-df5f6-default-rtdb.europe-west1.firebasedatabase.app/Recipes/.json');

export const registerUser = async (options) => await requester('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2WJsjVLMuXWERzkSJc3Vqw_wogbfOJvI', options);

export const loginUser = async (options) => await requester('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2WJsjVLMuXWERzkSJc3Vqw_wogbfOJvI', options);

export const shareRecipe = async (options) => await requester('https://books-exercise-df5f6-default-rtdb.europe-west1.firebasedatabase.app/Recipes.json', options);

export const getFurnitureDetails = async (id) => await requester('http://localhost:3030/data/catalog/' + id);

export const editRecipe = async (id, options) => await requester(`https://books-exercise-df5f6-default-rtdb.europe-west1.firebasedatabase.app/Recipes/${id}.json`, options);

export const deleteRecipe = async (id, options) => await requester(`https://books-exercise-df5f6-default-rtdb.europe-west1.firebasedatabase.app/Recipes/${id}.json`, options);

export const getFurnitureByOwner = async (ownerId) => await requester(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${ownerId}%22`);