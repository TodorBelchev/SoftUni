function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', () => {
        if (input.value.match(/^[a-z-\.]+@[a-z-\.]+\.[a-z]{2,4}/)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
}