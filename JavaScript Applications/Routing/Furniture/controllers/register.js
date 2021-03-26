import { registerUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { notificationHandler } from './notifications.js';
import { redirect } from './redirect.js';

export const register = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (email.trim() === '' || password.trim() === '') {
        return alert('All fields are required!');
    }

    if (password.trim() !== rePass.trim()) {
        return alert('Passwords must match!');
    }

    try {
        const response = await registerUser({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        saveUserData({ token: response.accessToken, email: response.email, _id: response._id });
        notificationHandler('Successfully registered!', 'success');
        redirect('/');
    } catch (error) { return; }
}