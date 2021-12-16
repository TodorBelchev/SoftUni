const baseUrl = 'http://localhost:3030/api';

const create = (name, city, freeRooms, imgUrl) => {
    return fetch(`${baseUrl}/hotels`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ name, city, freeRooms, imgUrl })
    });
};

export default {
    create
}