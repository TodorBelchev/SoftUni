function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onClick));

    function onClick(e) {
        const parent = e.target.parentElement;
        const unlockCheck = parent.querySelector('input[value="unlock"]');
        if (unlockCheck.checked) {
            const hidden = parent.querySelector('div');
            hidden.style.display === 'block' ? hidden.style.display = 'none' : hidden.style.display = 'block';
            e.target.textContent === 'Show more' ? e.target.textContent = 'Hide it' : e.target.textContent = 'Show more';
        }
    }
}