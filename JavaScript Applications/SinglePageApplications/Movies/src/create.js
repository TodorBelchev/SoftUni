import { createMovie } from './data.js';

export const createView = () => {
    const createSection = document.createElement('section');
    createSection.id = 'add-movie';
    createSection.innerHTML = `
        <form class="text-center border border-light p-5" action="#" method="">
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" value="">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`;

    createSection.getElementsByTagName('form')[0].addEventListener('submit', e => {
        e.preventDefault();
        createMovie(e.target);
    });
    
    return createSection;
}
