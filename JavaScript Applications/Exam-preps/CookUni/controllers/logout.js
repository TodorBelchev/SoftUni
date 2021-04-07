import { removeUserData } from '../data/userData.js';
import { notificationHandler } from './notification.js';
import { redirect } from './redirect.js';

export const logout = () => {
    try {
        removeUserData();
        notificationHandler.fiveSecondClose('Successful logout!', 'success');
        setTimeout(() => {
            redirect('/');
        }, 2000);
    } catch (error) { return; }
}