function focus() {
    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(x => x.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
    }));
    inputs.forEach(x => x.addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focused');
    }));
}