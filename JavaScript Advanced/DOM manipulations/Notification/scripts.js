function notify(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(function() {
        notification.textContent = '';
        notification.style.display = 'none';
    }, 2000);
}