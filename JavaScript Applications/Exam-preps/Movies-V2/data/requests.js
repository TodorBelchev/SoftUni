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

export const getMovies = async () => Object.values(await requester('http://localhost:3030/jsonstore/movies'));

export const getMovieById = async (id) => await requester('http://localhost:3030/jsonstore/movies/' + id);

export const addMovie = async (body, token) => await requester('http://localhost:3030/jsonstore/movies', getOptions('post', body, token));

export const editMovie = async (id, body, token) => await requester('http://localhost:3030/jsonstore/movies/' + id, getOptions('put', body, token));

export const deleteMovie = async (id, token) => await requester('http://localhost:3030/jsonstore/movies/' + id, getOptions('delete', {}, token));