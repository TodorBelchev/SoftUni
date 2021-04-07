export const notificationHandler = {
    start() {
        document.getElementById('loadingBox').style.display = 'block';
    },
    end() {
        document.getElementById('loadingBox').style.display = 'none';
    },
    fiveSecondClose(message, type) {
        if (type === 'error') {
            document.getElementById('errorBox').style.display = 'block';
            document.getElementById('errorBox').textContent = message;
        }
        if (type === 'success') {
            document.getElementById('successBox').style.display = 'block';
            document.getElementById('successBox').textContent = message;
        }

        setTimeout(() => {
            document.getElementById('errorBox').style.display = 'none';
            document.getElementById('errorBox').textContent = '';
            document.getElementById('successBox').style.display = 'none';
            document.getElementById('successBox').textContent = '';
        }, 5000);
    }
}