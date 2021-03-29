import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { redirect } from './redirect.js';

export const login = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const errorDiv = document.querySelector('.error');

    const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!email.match(emailPattern)) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Entered email is not valid!';
        return;
    }

    if (password.trim().length < 4) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Password must be at least 4 characters/digits long!';
        return;
    }

    try {
        const response = await loginUser({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        saveUserData({ email: response.email, token: response.accessToken, username: response.username, id: response._id });
        redirect('/');
    } catch (error) {

    }
};
