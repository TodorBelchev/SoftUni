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

const getHotels = () => fetch(`${baseUrl}/hotels`);

const getById = (id) => fetch(`${baseUrl}/hotels/${id}`);

const edit = (id, name, city, freeRooms, imgUrl) => {
    return fetch(`${baseUrl}/hotels/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ name, city, freeRooms, imgUrl })
    });
};

const deleteHotel = (id) => {
    return fetch(`${baseUrl}/hotels/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    });
};

const book = (id) => {
    return fetch(`${baseUrl}/hotels/${id}/book`, {
        credentials: 'include'
    });
};

const hotelService = {
    create,
    getHotels,
    getById,
    edit,
    deleteHotel,
    book
}

export default hotelService;