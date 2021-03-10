const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    if (email.trim() === '' || password.trim() === '') {
        alert('All fields are required!');
        return;
    }

    if (password.trim() !== repass.trim()) {
        alert('Passwords don`t match!');
        return;
    }

    const response = await fetch('http://localhost:3030/users/register', {
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