const errorDiv = document.getElementById('error-msg');
const successDiv = document.getElementById('success-msg');

export const notificationHandler = (msg, type) => {

    if (type === 'error') {
        errorDiv.style.display = 'grid';
        errorDiv.textContent = msg;
    }

    if (type === 'success') {
        successDiv.style.display = 'grid';
        successDiv.textContent = msg;
    }

    setTimeout(() => {
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
        errorDiv.textContent = '';
        successDiv.textContent = '';
    }, 3000)
};
