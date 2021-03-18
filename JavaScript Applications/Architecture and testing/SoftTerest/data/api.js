export const registerReq = async (requestData) => {
    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return alert(error.message);
    }
}

export const loginReq = async (requestData) => {
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return alert(error.message);
    }
}

export const logoutReq = async (requestData) => {
    try {
        await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': requestData
            }
        });
    } catch (error) {
        return alert(error.message);
    }
}

export const getIdeas = async () => {
    try {
        const response = await fetch('http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return alert(error.message);
    }
}

export const getOneIdeaById = async (id) => {
    try {
        const response = await fetch('http://localhost:3030/data/ideas/' + id);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return alert(error.message);
    }
}

export const deleteIdeaById = async (id, token) => {
    try {
        await fetch('http://localhost:3030/data/ideas/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            }
        });
    } catch (error) {
        return alert(error.message);
    }
}

export const createIdea = async (postData, token) => {
    try {
        const response = await fetch('http://localhost:3030/data/ideas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(postData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        return alert(error.message);
    }
}
