function attachEvents() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    let token;
    let userID;
    
    if (userData) {
        token = userData.token;
        userID = userData._id;
        loadCatches(userID);
    }

    const addBtn = document.getElementById('addBtn');
    const loadBtn = document.getElementById('loadBtn');
    loadBtn.addEventListener('click', () => loadCatches(userID));

    if (token) {
        addBtn.disabled = false;
        const guestDiv = document.getElementById('guest');
        const oldLink = guestDiv.querySelector('a');
        const newLink = document.createElement('a');
        newLink.textContent = 'Logout';
        newLink.href = 'index.html';
        newLink.addEventListener('click', async (e) => {
            e.preventDefault();
            const response = await fetch('http://localhost:3030/users/logout');
            sessionStorage.removeItem('userData');
            location.pathname = 'index.html';
        });

        guestDiv.replaceChild(newLink, oldLink);
    }

    addBtn.addEventListener('click', (e) => addCatch(e, token));
}

async function addCatch(e, token) {
    const field = e.target.parentElement;
    const [anglerInput, weightInput, speciesInput, locationInput, baitInput, captureTimeInput] = field.querySelectorAll('input');

    if (anglerInput.value.trim() === '' || weightInput.value.trim() === '' ||
        speciesInput.value.trim() === '' || locationInput.value.trim() === '' ||
        baitInput.value.trim() === '' || captureTimeInput.value.trim() === ''
    ) {
        alert('All fields are required!')
        return;
    }

    const obj = {
        angler: anglerInput.value.trim(),
        weight: weightInput.value.trim(),
        species: speciesInput.value.trim(),
        location: locationInput.value.trim(),
        bait: baitInput.value.trim(),
        captureTime: captureTimeInput.value.trim()
    }

    const response = await fetch('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(obj)
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
    }

    const data = await response.json();
    location.pathname = 'index.html';
}

async function loadCatches(userID) {
    const response = await fetch('http://localhost:3030/data/catches');

    if(!response.ok) {
        const error = await response.json();
        console.error(error.message);
        return;
    }

    const data = await response.json();

    const catchesDiv = document.getElementById('catches');
    catchesDiv.innerHTML = '';

    data.forEach(c => {
        const currentDiv = createHtmlElement('div', '', { class: 'catch', 'data-id': c._id }, {}, [
            createHtmlElement('label', 'Angler', {}, {}, []),
            createHtmlElement('input', c.angler, { class: 'angler' }, {}, []),
            createHtmlElement('hr', '', {}, {}, []),
            createHtmlElement('label', 'Weight', {}, {}, []),
            createHtmlElement('input', c.weight, { class: 'weight' }, {}, []),
            createHtmlElement('hr', '', {}, {}, []),
            createHtmlElement('label', 'Species', {}, {}, []),
            createHtmlElement('input', c.species, { class: 'species' }, {}, []),
            createHtmlElement('hr', '', {}, {}, []),
            createHtmlElement('label', 'Location', {}, {}, []),
            createHtmlElement('input', c.location, { class: 'location' }, {}, []),
            createHtmlElement('hr', '', {}, {}, []),
            createHtmlElement('label', 'Bait', {}, {}, []),
            createHtmlElement('input', c.bait, { class: 'bait' }, {}, []),
            createHtmlElement('hr', '', {}, {}, []),
            createHtmlElement('label', 'Capture Time', {}, {}, []),
            createHtmlElement('input', c.captureTime, { class: 'captureTime' }, {}, []),
            createHtmlElement('hr', '', {}, {}, [])
        ]);
        const updateBtn = createHtmlElement('button', 'Update', { class: 'update' }, { click: updateCatch }, []);
        const deleteBtn = createHtmlElement('button', 'Delete', { class: 'delete' }, { click: deleteCatch }, []);

        if (userID !== c._ownerId) {
            updateBtn.disabled = true;
            deleteBtn.disabled = true;
        }

        currentDiv.appendChild(updateBtn);
        currentDiv.appendChild(deleteBtn);
        catchesDiv.appendChild(currentDiv);
    })
}

async function updateCatch(e) {
    const parentDiv = e.target.parentElement;
    const id = parentDiv.dataset.id;
    const token = JSON.parse(sessionStorage.getItem('userData')).token;

    const [anglerInput, weightInput, speciesInput, locationInput, baitInput, captureTimeInput] = parentDiv.querySelectorAll('input');

    if (anglerInput.value.trim() === '' || weightInput.value.trim() === '' ||
        speciesInput.value.trim() === '' || locationInput.value.trim() === '' ||
        baitInput.value.trim() === '' || captureTimeInput.value.trim() === ''
    ) {
        alert('All fields are required!')
        return;
    }

    const obj = {
        angler: anglerInput.value.trim(),
        weight: weightInput.value.trim(),
        species: speciesInput.value.trim(),
        location: locationInput.value.trim(),
        bait: baitInput.value.trim(),
        captureTime: captureTimeInput.value.trim()
    }

    const response = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(obj)
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
    }

    location.pathname = 'index.html';
}

async function deleteCatch(e) {
    const parentDiv = e.target.parentElement;
    const id = parentDiv.dataset.id;
    const token = JSON.parse(sessionStorage.getItem('userData')).token;

    const response = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        }
    });

    if(!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
    }

    location.pathname = 'index.html';
}

function createHtmlElement(type, content, attributes, events, childs) {
    const element = document.createElement(type);
    element.textContent = content;

    if (type === 'input') {
        element.value = content;
    }

    Object.keys(attributes).forEach(x => element.setAttribute(x, attributes[x]));
    Object.keys(events).forEach(x => element.addEventListener(x, events[x]));
    childs.forEach(x => element.appendChild(x));

    return element;
}

attachEvents();