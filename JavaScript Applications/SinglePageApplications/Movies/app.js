import { homeView } from './src/home.js';
import { loginView } from './src/login.js';
import { registerView } from './src/register.js'; 
import { setupNav } from './src/nav.js';
import { loginPost, registerPost, logout } from './src/data.js';

const main = document.querySelector('main');
const nav = document.querySelector('nav');

nav.addEventListener('click', e => {
    const el = e.target;

    if (el.tagName !== 'A') { return; }

    e.preventDefault();

    if (el.href.includes('profile')) {
        return;
    }

    if (el.href.includes('login')) {
        main.innerHTML = '';
        const loginPage = loginView();
        loginPage.getElementsByTagName('form')[0].addEventListener('submit', loginPost);
        main.appendChild(loginPage);
        return;
    }

    if (el.href.includes('register')) {
        main.innerHTML = '';
        const registerPage = registerView();
        registerPage.getElementsByTagName('form')[0].addEventListener('submit', registerPost);
        main.appendChild(registerPage);
        return;
    }

    if (el.href.includes('logout')) {
        logout();
        return;
    }

    initialize();
});

export async function initialize() {
    setupNav();
    main.innerHTML = '';
    
    const homeSection = await homeView();
    
    main.appendChild(homeSection);
}

export async function loadView(section) {
    setupNav();
    main.innerHTML = '';
    main.appendChild(section);
}

initialize();