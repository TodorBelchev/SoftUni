
async function requester(URL, options) {
    let response;
    try {
        response = await fetch(URL, options);

        if (response.status == 200) {
            return await response.json();
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (error) {

        if (error instanceof SyntaxError) {
            return response;
        } else if (error.message == 'Invalid access token') {
            console.log('Invalid session, resetting storage');
            sessionStorage.clear();
            window.location.pathname = '/';
        } else {
            throw error;
        }

    }
}

export const registerUser = async (options) => await requester('http://localhost:3030/users/register', options);

export const loginUser = async (options) => await requester('http://localhost:3030/users/login', options);

export const logoutUser = async (options) => await requester('http://localhost:3030/users/logout', options);

export const createShoeReq = async (options) => await requester('http://localhost:3030/jsonstore/collections/shoes', options);

export const getShoes = async () => await requester('http://localhost:3030/jsonstore/collections/shoes');

export const getShoeById = async (id) => await requester('http://localhost:3030/jsonstore/collections/shoes/' + id);

export const buyShoeReq = async (id, options) => await requester('http://localhost:3030/jsonstore/collections/shoes/' + id, options);

export const editShoeReq = async (id, options) => await requester('http://localhost:3030/jsonstore/collections/shoes/' + id, options);

export const deleteShoeReq = async (id, options) => await requester('http://localhost:3030/jsonstore/collections/shoes/' + id, options);