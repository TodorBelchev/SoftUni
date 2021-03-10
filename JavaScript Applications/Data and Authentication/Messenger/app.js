function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/messenger';
    const submitBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    const nameInput = document.querySelector('#author');
    const contentInput = document.querySelector('#content');
    const textArea = document.querySelector('#messages');
    submitBtn.addEventListener('click', postMessage);
    refreshBtn.addEventListener('click', refreshMessages);

    function postMessage() {
        if (nameInput.value.trim() === '' || contentInput.value.trim() === '') { return }

        fetch(url, {
            "method": "POST",
            "body": JSON.stringify({ author: nameInput.value, content: contentInput.value })
        })
            .then(res => res.json())
            .then(data => {
                nameInput.value = '';
                contentInput.value = '';
                refreshMessages();
            })
            .catch(err => console.log(err));
    }

    function refreshMessages() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                textArea.value = Object.values(data).map(x => `${x.author}: ${x.message || x.content}`).join('\n');
            })
            .catch(err => console.log(err));
    }
    refreshMessages();
}

attachEvents();