import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { notificationHandler } from './notifications.js';
import { redirect } from './redirect.js';

export const login = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '' || password.trim() === '') {
        return alert('All fields are required!');
    }

    try {
        const response = await loginUser({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        saveUserData({ token: response.accessToken, email: response.email, _id: response._id });
        notificationHandler('Successfully logged in!', 'success');
        redirect('/');
    } catch (error) { return; }
}