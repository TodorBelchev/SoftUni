import { getLikesForMovie, getMovies, getOneMovie, getOwnLikes } from './data.js';
import { notificationHandler } from './notificationHandler.js';
import { detailsView } from './details.js';
import { loadView } from '../app.js';
import { createView } from './create.js';

export const homeView = async () => {
    const homeSection = document.createElement('section');
    homeSection.id = 'home-page';
    homeSection.innerHTML = `
                <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
                    <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
                        class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
                    <h1 class="display-4">Movies</h1>
                    <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
                </div>
                <h1 class="text-center">Movies</h1>
                <section class="addMovieSection" id="add-movie-button">
                    <button type="button" class="btn btn-warning" id="">Add Movie</button>
                </section>
                <section id="movie" class="movie-section">
                    <div class=" mt-3 ">
                        <div class="row d-flex d-wrap">
                            <div class="card-deck d-flex justify-content-center">
                                <div class="container-cards">
                                    ${await generateMovieCards()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    homeSection.getElementsByClassName('movie-section')[0].addEventListener('click', async e => {
        if (e.target.tagName !== 'BUTTON') { return; }
        if (!userData) {
            notificationHandler('Please login to view movie details', 'error')
            return;
        }
        const id = e.target.id;
        const movie = await getOneMovie(id);
        const likes = await getLikesForMovie(id);
        const ownLikes = await getOwnLikes(id);
        const detailsSection = detailsView(movie, likes, ownLikes);
        loadView(detailsSection);
    });

    homeSection.getElementsByClassName('addMovieSection')[0].addEventListener('click', () => {
        if (!userData) {
            notificationHandler('Please login to create movie', 'error')
            return;
        }
        const createSection = createView();
        loadView(createSection);
    });

    return homeSection;
}

async function generateMovieCards() {
    const movies = await getMovies();
    let result = '';
    movies.forEach(m => {
        result += `
        <div class="card mb-4">
            <img class="card-img-top"
                src="${m.img}"
                alt="Card image cap" width="400">
            <div class="card-body">
                <h4 class="card-title">${m.title}</h4>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-info" id="${m._id}">Details</button> 
            </div>
        </div>`;
    });
    return result;
}