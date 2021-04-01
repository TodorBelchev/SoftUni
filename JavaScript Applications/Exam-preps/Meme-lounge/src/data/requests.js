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

function getOptions(type, body, token) {
    const options = {
        post: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        },
        get: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        },
        put: {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        },
        delete: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };
    const option = options[type];
    token ? option.headers['X-Authorization'] = token : '';
    return option;
}

export const registerUser = async (body) => await requester('http://localhost:3030/users/register', getOptions('post', body));

export const loginUser = async (body) => await requester('http://localhost:3030/users/login', getOptions('post', body));

export const logoutUser = async (token) => await requester('http://localhost:3030/users/logout', getOptions('get', {}, token));

export const getMemes = async () => await requester('http://localhost:3030/data/memes?sortBy=_createdOn%20desc');

export const getMemeById = async (id) => await requester('http://localhost:3030/data/memes/' + id);

export const getMyMemes = async (id) => await requester(`http://localhost:3030/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);

export const createMeme = async (body, token) => await requester('http://localhost:3030/data/memes', getOptions('post', body, token));

export const editMeme = async (id, body, token) => await requester('http://localhost:3030/data/memes/' + id, getOptions('put', body, token));

export const deleteMeme = async (id, token) => await requester('http://localhost:3030/data/memes/' + id, getOptions('delete', {}, token));
