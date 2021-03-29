import { redirect } from './redirect.js';
import { logoutUser } from '../data/requests.js';
import { removeUserData } from '../data/userData.js';

export const logout = async (e, ctx) => {
    e.preventDefault();

    try {
        await logoutUser({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': ctx.userData.token
            }
        });
        removeUserData();
        redirect('/');
    } catch (error) {
        console.log(error);
    }
}