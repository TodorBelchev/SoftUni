function lockedProfile() {
    const main = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            main.innerHTML = '';
            Object.values(data).forEach((x, index)=> {
                const card = createCard(x, index);
                main.appendChild(card);
            })
        })
        .catch(err => console.log(err));

    main.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') { return; }

        const card = e.target.parentElement;
        const [lockedEl] = card.querySelectorAll('input');

        if (lockedEl.checked) { return }

        const hiddenDiv = card.querySelector('#user1HiddenFields');

        if (hiddenDiv.style.display !== 'block') {
            hiddenDiv.style.display = 'block';
            e.target.textContent = 'Hide it';
        } else {
            hiddenDiv.style.display = 'none';
            e.target.textContent = 'Show more';
        }
        
    });

    function createCard(info,index) {
        const div = document.createElement('div');
        div.classList.add('profile');
        div.innerHTML = `
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${index + 1}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${index + 1}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${info.username}" disabled readonly />
				<div id="user1HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${info.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${info.age}" disabled readonly />
				</div>
				<button>Show more</button>
        `
        return div;
    }
}