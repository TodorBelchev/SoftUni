function deleteByEmail() {
    const inputValue = document.querySelector('input').value;
    const result = document.getElementById('result');
    const emails = document.querySelectorAll('tr td:nth-child(2)');
    for (const email of emails) {
        if (email.textContent === inputValue) {
            const parent = email.parentElement.parentElement;
            parent.removeChild(email.parentElement);
            result.textContent = 'Deleted.';
            break;
        } else {
            result.textContent = 'Not found.';
        }
    }
}