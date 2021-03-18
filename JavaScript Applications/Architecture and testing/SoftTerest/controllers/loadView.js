import { homeView } from '../views/home.js';
import { loginView } from '../views/login.js';
import { registerView } from '../views/register.js';
import { getUserData } from '../data/userData.js';
import { dashboardView } from '../views/dashboard.js';
import { detailsView } from '../views/details.js';
import { createView } from '../views/create.js';

const views = {
    '/home': homeView,
    '/login': loginView,
    '/register': registerView,
    '/dashboard': dashboardView,
    '/details': detailsView,
    '/create': createView
}

export const loadView = async (sectionName, option) => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(await views[sectionName](option));
    setupNavigation();
};

const lis = document.querySelectorAll('ul.navbar-nav li');

export function setupNavigation() {
    const userData = getUserData();
    if (userData) {
        lis.forEach(l => l.className.includes('logged') ? l.style.display = 'block' : l.style.display = 'none');
    } else {
        lis.forEach(l => l.className.includes('guest') ? l.style.display = 'block' : l.style.display = 'none');
    }
}