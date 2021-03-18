import { getUserData } from '../data/userData.js';
import { createIdea } from '../data/api.js';
import { loadView } from './loadView.js';

export const createPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageURL');

    if (title.trim() === '' || description.trim() === '' || img.trim() === '') {
        return alert('All fields are required!');
    }

    const userData = getUserData();
    const response = await createIdea({title, description, img}, userData.token);
    loadView('/dashboard');
};
