const baseURL = 'http://localhost:3030/api'

const register = (email, username, password) => {
    return fetch(`${baseURL}/user/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    });
}

const login = (username, password) => {
    return fetch(`${baseURL}/user/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
}

export default {
    register,
    login
}