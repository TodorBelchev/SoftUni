function solve() {
    const [nameInput, ageInput, kindInput, ownerInput] = document.querySelectorAll('#container input');
    const adoptionUl = document.querySelector('#adoption ul');
    const adoptedUl = document.querySelector('#adopted ul');
    const addBtn = document.querySelector('#container button');
    addBtn.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();
        if (nameInput.value.trim() === '' || !Number(ageInput.value) || kindInput.value.trim() === '' || ownerInput.value.trim() === '') {
            return;
        }

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
        const span = document.createElement('span');
        span.textContent = `Owner: ${ownerInput.value}`;
        const contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';
        contactBtn.addEventListener('click', contactWithOwner);

        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(contactBtn);
        adoptionUl.appendChild(li);

        function contactWithOwner() {
            contactBtn.remove();
            const div = document.createElement('div');
            const input = document.createElement('input');
            input.placeholder = 'Enter your names';
            const adoptBtn = document.createElement('button');
            adoptBtn.textContent = 'Yes! I take it!';
            adoptBtn.addEventListener('click', adopt);

            div.appendChild(input);
            div.appendChild(adoptBtn);
            li.appendChild(div);

            function adopt() {
                if (input.value.trim() === '') { return }
                span.textContent = `New Owner: ${input.value}`;
                div.remove();
                const checkedBtn = document.createElement('button');
                checkedBtn.textContent = `Checked`;
                checkedBtn.addEventListener('click', () => li.remove());

                li.appendChild(checkedBtn);
                adoptedUl.appendChild(li);
            }
        }
    }
}

