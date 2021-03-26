const successMsg = document.getElementById('success-msg');
const errorMsg = document.getElementById('error-msg');

export const notificationHandler = (msg, type) => {
    if (type === 'success') {
        successMsg.style.display = 'grid';
        successMsg.textContent = msg;
    }

    if (type === 'error') {
        errorMsg.style.display = 'grid';
        errorMsg.textContent = msg;
    }

    setTimeout(() => {
        successMsg.style.display = 'none';
        successMsg.textContent = '';
        errorMsg.style.display = 'none';
        errorMsg.textContent = '';
    }, 3000);
};