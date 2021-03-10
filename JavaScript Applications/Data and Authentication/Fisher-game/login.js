const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', login);

async function login(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '' || password.trim() === '') {
        alert('All fields are required!');
        return;
    }

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if(!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.message}`);
        return;
    }

    const data = await response.json();

    sessionStorage.setItem('userData', JSON.stringify({ token: data.accessToken, _id: data._id}))
    location.pathname = 'index.html';
}