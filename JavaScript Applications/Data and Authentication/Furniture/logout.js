const authData = JSON.parse(sessionStorage.getItem('userData'));
let token;

if (!authData) {
    window.location.pathname = 'index.html';
} else {
    token = authData.token;
}

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', logout);

async function logout() {
    const url = 'http://localhost:3030/users/logout';

    try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'X-Authorization': token
            }
        });

        if (response.ok) {
            sessionStorage.removeItem('userData');
            window.location.pathname = 'index.html';
        } else {
            throw new Error(`Error: ${response.status}(${response.statusText})`);
        }
    } catch (error) {
        console.error(error);
    }
}