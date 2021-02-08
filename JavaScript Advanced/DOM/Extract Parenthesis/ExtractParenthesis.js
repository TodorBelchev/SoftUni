function extract() {
    const contentEl = document.querySelector('#content');
    const pattern = /\([\w ]+\)/g;
    let match = pattern.exec(contentEl.textContent);
    let text = [];
    while (match) {
        text.push(match[0])
        match = pattern.exec(contentEl.textContent);
    }

    return text.join(', ');
}