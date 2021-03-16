export const setupNav = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const ul = document.getElementById('navUl');
    if (userData) {
       ul.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" href="/profile">Welcome, ${userData.email}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logout">Logout</a>
                </li>`;
    } else {
        ul.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register">Register</a>
                </li>`;
    }
}