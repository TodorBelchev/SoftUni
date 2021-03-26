import { notificationHandler } from '../controllers/notifications.js';

async function requester(URL, options) {
    try {
        const response = await fetch(URL, options);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        notificationHandler(error.message, 'error');
        throw new Error(Error.message);
    }
}

export const getFurniture = async () => await requester('http://localhost:3030/data/catalog');

export const registerUser = async (options) => await requester('http://localhost:3030/users/register', options);

export const loginUser = async (options) => await requester('http://localhost:3030/users/login', options);

export const createFurniture = async (options) => await requester('http://localhost:3030/data/catalog', options);

export const getFurnitureDetails = async (id) => await requester('http://localhost:3030/data/catalog/' + id);

export const editFurnitureDetails = async (id, options) => await requester('http://localhost:3030/data/catalog/' + id, options);

export const deleteFurnitureReq = async (id, options) => await requester('http://localhost:3030/data/catalog/' + id, options);

export const getFurnitureByOwner = async (ownerId) => await requester(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${ownerId}%22`);
