function editElement(el, match, replacer) {
    let text = el.textContent;
    while(text.includes(match)) {
        text = text.replace(match, replacer);
    }
    el.textContent = text;
}