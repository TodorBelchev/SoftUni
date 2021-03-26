import { deleteFurnitureReq } from '../data/requests.js';
import { notificationHandler } from './notifications.js';
import { redirect } from './redirect.js';

export const deleteFurniture = async (e, id, userData) => {
    e.preventDefault();

    try {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteFurnitureReq(id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': userData.token
                }
            });
    
            notificationHandler('Successfully deleted!', 'success');
            redirect('/');
        }
    } catch (error) { return; }
};