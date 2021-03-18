import { loginReq } from '../data/api.js';
import { saveUserData } from '../data/userData.js';
import { loadView } from './loadView.js';

export const loginPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '' || password.trim() === '') {
        return alert('All fields are required!');
    }

    const userData = await loginReq({ email, password });
    saveUserData(userData);
    loadView('/home');
};