import { updateMovie } from './data.js';

export const editView = (ctx) => {
    const registerSection = document.createElement('section');
    registerSection.id = 'edit-movie';
    registerSection.innerHTML = `
        <form class="text-center border border-light p-5" action="#" method="">
            <h1>Edit Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Movie Title" value="${ctx.title}" name="title">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Movie Description..." value="" name="description">${ctx.description}</textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" value="${ctx.img}" name="imageUrl">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`;

    registerSection.getElementsByTagName('form')[0].addEventListener('submit', e => {
        e.preventDefault();
        const confirmed = confirm('Are you sure you want to update this movie?');
        if (confirmed) {
            updateMovie(e.target, ctx._id);
        }
    });

    return registerSection;
}