function colorize() {
    const trs = Array.from(document.querySelectorAll('tr'));
    for (let i = 1; i < trs.length; i += 2) {
        trs[i].style.backgroundColor = 'teal';
    }
}