const baseURL = 'http://localhost:3030/api'

const register = (email, username, password) => {
    return fetch(`${baseURL}/user/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, username, password })
    });
};

const login = (username, password) => {
    return fetch(`${baseURL}/user/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ username, password })
    })
};

const logout = () => {
    return fetch(`${baseURL}/user/logout`, {
        credentials: 'include'
    });
}

const userService = {
    register,
    login,
    logout
}

export default userService;