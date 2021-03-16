import { deleteMovie, getOneMovie, likeMovie } from './data.js';
import { editView } from './edit.js';
import { loadView } from '../app.js';

export const detailsView = (ctx, likes, ownLikes) => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const detailsSection = document.createElement('section');
    detailsSection.innerHTML = `
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${ctx.title}</h1>
                <div class="col-md-8">
                    <img class="img-thumbnail"
                        src="${ctx.img}" alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${ctx.description}</p>
                    ${!userData ? `` : userData.id === ctx._ownerId ?`
                        <button type="button" class="btn btn-danger">Delete</button>
                        <button type="button" class="btn btn-warning">Edit</button>`
                                : ownLikes.length === 0 ? `<button type="button" class="btn btn-primary">Like</button>`
                                : `<span class="enrolled-span">Liked ${likes}</span>`}
                </div>
            </div>
        </div>`;

    detailsSection.addEventListener('click', async e => {
        if (e.target.tagName !== 'BUTTON') { return; }

        if (e.target.className === 'btn btn-danger') {
            const confirmed = confirm('Are you sure you want to delete this movie?');
            if (confirmed) {
                deleteMovie(ctx._id);
            }
        }

        if (e.target.className === 'btn btn-warning') {
            const movie = await getOneMovie(ctx._id);
            const editSection = editView(movie);
            loadView(editSection);
        }

        if (e.target.className === 'btn btn-primary') {
            const liked = await likeMovie(ctx._id);
            if (liked) {
                likes++;
                const newSpan = document.createElement('span');
                newSpan.className = 'enrolled-span';
                newSpan.textContent = `Liked ${likes}`;
                detailsSection.getElementsByClassName('btn btn-primary')[0].replaceWith(newSpan);
            }

        }
    });

    return detailsSection;
}