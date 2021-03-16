import { initialize, loadView } from '../app.js';
import { detailsView } from './details.js';
import { notificationHandler } from './notificationHandler.js';

export async function getMovies() {
    try {
        const response = await fetch('http://localhost:3030/data/movies');
        const data = await response.json();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        return data;
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function getOneMovie(id) {
    try {
        const response = await fetch('http://localhost:3030/data/movies/' + id);
        const data = await response.json();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        return data;
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function createMovie(form) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');

    if (title.trim() === '' || description.trim() === '' || img.trim() === '') {
        notificationHandler('All fields are required', 'error');
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/data/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({ title, description, img })
        });

        const data = await response.json();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        const details = detailsView(data);
        loadView(details);
        notificationHandler('Successfully created', 'success');
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function updateMovie(form, id) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');

    if (title.trim() === '' || description.trim() === '' || img.trim() === '') {
        notificationHandler('All fields are required', 'error');
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({ title, description, img })
        });
        const data = await response.json();

        const likes = await getLikesForMovie(id);

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        const details = detailsView(data, likes);
        loadView(details);
        notificationHandler('Successfully updated', 'success');

    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function deleteMovie(id) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    try {
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'DELETE',
            headers: { 'X-Authorization': userData.token }
        });
        const data = response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        initialize();
        notificationHandler('Successfully deleted', 'success');
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function getOwnLikes(id) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (!userData) {
        return [];
    }

    try {
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`)
        const data = response.json();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        return data;
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function getLikesForMovie(id) {
    try {
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
        const data = await response.text();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        return data;
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function likeMovie(id) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    try {
        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({ movieId: id })
        });

        const data = response.json();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        notificationHandler('Successful like', 'success');
        return true;
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function loginPost(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '' || password.trim() === '') {
        return alert('All fields are required!');
    }

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        sessionStorage.setItem('userData', JSON.stringify({ email: data.email, token: data.accessToken, id: data._id }));
        initialize();
        notificationHandler('Successful login', 'success');
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function registerPost(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword');

    if (email.trim() === '' || password.trim() === '') {
        notificationHandler('All fields are required!', 'error');
        return;
    }

    if (password.trim().length < 6) {
        notificationHandler('Password must be at least 6 characters long', 'error');
        return;
    }

    if (password !== repass) {
        notificationHandler('Passwords don`t match!', 'error');
        return;
    }

    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (!response.ok) {
            notificationHandler(data.message, 'error');
            return;
        }

        sessionStorage.setItem('userData', JSON.stringify({ email: data.email, token: data.accessToken, id: data._id }));
        initialize();
        notificationHandler('Successful register', 'success');
    } catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}

export async function logout() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: { 'X-Authorization': userData.token }
        });

        if (!response.ok) {
            const error = await response.json();
            notificationHandler(error.message, 'error');
            return;
        }

        sessionStorage.removeItem('userData');
        initialize();
        notificationHandler('Successful logout', 'success');
    }
    catch (error) {
        notificationHandler(error.message, 'error');
        return;
    }
}