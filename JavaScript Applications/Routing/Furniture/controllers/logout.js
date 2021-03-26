import { removeUserData } from '../data/userData.js';
import { redirect } from './redirect.js';
import { notificationHandler } from './notifications.js';

export const logout = () => {
    try {
        removeUserData();
        notificationHandler('Successfully logged out!', 'success');
        redirect('/');
    } catch (error) { return; }
}