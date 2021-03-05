function solution() {
    const input = document.querySelector('input');
    const [listSectionUl, sentSectionUl, discardedSectionUl] = Array.from(document.querySelectorAll('section ul'));
    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', add);

    function add(e) {
        const gift = input.value.trim();
        if (gift === '') { return }

        const li = document.createElement('li');
        li.classList.add('gift');
        li.textContent = gift;
        const sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.id = 'sendButton';
        sendBtn.addEventListener('click', send);
        const discardBtn = document.createElement('button');
        discardBtn.textContent = 'Discard';
        discardBtn.id = 'discardButton';
        discardBtn.addEventListener('click', discard);

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        listSectionUl.appendChild(li);

        sortUl(listSectionUl);
        
        input.value = '';
    }

    function send(e) {
        const li = e.target.parentElement;
        Array.from(li.querySelectorAll('button')).forEach(x => x.remove());
        sentSectionUl.appendChild(li);
    }

    function discard(e) {
        const li = e.target.parentElement;
        Array.from(li.querySelectorAll('button')).forEach(x => x.remove());
        discardedSectionUl.appendChild(li);
    }

    function sortUl(ul) {
        Array.from(ul.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => ul.appendChild(x));
    }
}