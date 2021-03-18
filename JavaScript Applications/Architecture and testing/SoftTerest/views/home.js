import { loadView } from '../controllers/loadView.js';

export const homeView = () => {
    const div = document.createElement('div');
    div.className = 'container home wrapper  my-md-5 pl-md-5';
    div.innerHTML = `
    <div class="d-md-flex flex-md-equal ">
        <div class="col-md-5">
            <img class="responsive" src="./images/01.svg" />
        </div>
        <div class="home-text col-md-7">
            <h2 class="featurette-heading">Do you wonder if your idea is good?</h2>
            <p class="lead">Join our family =)</p>
            <p class="lead">Post your ideas!</p>
            <p class="lead">Find what other people think!</p>
            <p class="lead">Comment on other people's ideas.</p>
        </div>
    </div>
    <div class="bottom text-center">
        <a class="btn btn-secondary btn-lg " href="/dashboard">Get Started</a>
    </div>`;

    div.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        loadView('/dashboard');
    });

    return div;
};