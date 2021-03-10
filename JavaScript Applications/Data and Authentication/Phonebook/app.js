function attachEvents() {
    const loadBtn = document.querySelector('#btnLoad');
    const createBtn = document.querySelector('#btnCreate');
    const ul = document.querySelector('#phonebook');
    const nameInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');
    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', createContact);
    let url = 'http://localhost:3030/jsonstore/phonebook';
    const currentContacts = [];

    function loadContacts() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (const [key, contact] of Object.entries(data)) {
                    if (currentContacts.includes(key)) {
                        continue;
                    }
                    currentContacts.push(key);
                    const li = createLiContact(key, contact);
                    ul.appendChild(li)
                }
            })
            .catch(error => console.log(error));
    }

    function createContact() {
        if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') { return }

        const obj = { person: nameInput.value, phone: phoneInput.value };

        fetch(url, {
            "method": "POST",
            "body": JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                ul.appendChild(createLiContact(data._id, obj));
                currentContacts.push(data._id);
            })
            .catch(error => console.log(error));

        nameInput.value = '';
        phoneInput.value = '';
    }

    function createLiContact(key, contactInfo) {
        const li = document.createElement('li');
        li.textContent = `${contactInfo.person}: ${contactInfo.phone}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteContact);

        function deleteContact() {
            let deleteUrl = `http://localhost:3030/jsonstore/phonebook/${key}`;
            fetch(deleteUrl, { "method": "DELETE" })
                .then(res => res.text())
                .then(data => data)
                .catch(error => error);

            const index = currentContacts.indexOf(key);
            currentContacts.splice(index, 1);
            li.remove();
        }

        li.appendChild(deleteBtn);
        return li;
    }
}

attachEvents();