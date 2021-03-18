import { loadView } from './controllers/loadView.js';
import { handleNavigation } from './controllers/navigation.js';

const navbar = document.querySelector('.navbar-nav');
const homeImg = document.querySelector('nav img');

homeImg.addEventListener('click', (e) => {
    e.preventDefault();
    loadView('/home');
});
navbar.addEventListener('click', handleNavigation);

loadView('/home');