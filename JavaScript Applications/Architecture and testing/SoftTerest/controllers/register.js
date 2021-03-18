import { registerReq } from '../data/api.js';
import { saveUserData } from '../data/userData.js';
import { loadView } from './loadView.js';

export const registerPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (email.trim() === '' || password.trim() === '') {
        return alert('All fields are required!');
    }

    if (password.trim() !== repeatPassword.trim()) {
        return alert('Passwords don`t match!');
    }

    const userData = await registerReq({ email, password });
    saveUserData(userData);
    loadView('/home');
};