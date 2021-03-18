import { loadView } from './loadView.js';
import { logout } from './logout.js';
import { deleteIdeaById } from '../data/api.js';
import { getUserData } from '../data/userData.js';

export const handleNavigation = async (e) => {
    e.preventDefault();

    const url = new URL(e.target.href);

    if (e.target.href.includes('logout')) {
        logout();
        loadView('/home');
        return;
    }

    if (e.target.href.includes('details')) {
        loadView('/details', url.pathname.split('/')[2]);
        return;
    }

    if (e.target.href.includes('delete')) {
        const id = url.pathname.split('/')[2];
        const userData = getUserData();
        const confirmed = confirm('Are you sure you want to delete this idea?');
        if (confirmed) {
            await deleteIdeaById(id, userData.token);
            loadView('/dashboard');
        }
        return;
    }

    loadView(url.pathname);
};