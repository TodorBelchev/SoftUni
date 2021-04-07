import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { notificationHandler } from './notification.js';
import { redirect } from './redirect.js';

export const login = async (e, ctx) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '' || password.trim() === '') {
        return alert('All fields are required!');
    }

    try {
        notificationHandler.start();
        const response = await loginUser({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        notificationHandler.end();
        notificationHandler.fiveSecondClose('Successful login!', 'success');
        saveUserData({ token: response.idToken, email: response.email, _id: response.localId });
        setTimeout(() => {
            redirect('/');
        }, 2000)
    } catch (error) { return; }
};