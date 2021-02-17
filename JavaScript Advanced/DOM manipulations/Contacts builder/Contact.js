class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    set online(value) {
        this._online = value;
        if (this.online === true && this.titleDiv) {
            this.titleDiv.classList.add('online');
        } else if (this.titleDiv) {
            this.titleDiv.classList.remove('online');
        }
    }

    get online() {
        return this._online;
    }

    render(id) {
        const el = document.querySelector(`#${id}`);

        const art = document.createElement('article');
        const titleDiv = document.createElement('div');
        const button = document.createElement('button');
        const infoDiv = document.createElement('div');
        const phoneSpan = document.createElement('span');
        const emailSpan = document.createElement('span');

        this.titleDiv = titleDiv;
        this.online === true ? this.titleDiv.classList.add('online') : '';

        titleDiv.classList.add('title');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;
        phoneSpan.innerHTML = `&phone; ${this.phone}`;
        emailSpan.innerHTML = `&#9993; ${this.email}`;
        button.innerHTML = '&#8505;';
        button.addEventListener('click', () => {
            infoDiv.style.display === 'block'
                ? infoDiv.style.display = 'none'
                : infoDiv.style.display = 'block';
        });

        titleDiv.appendChild(button);
        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);
        art.appendChild(titleDiv);
        art.appendChild(infoDiv);

        el.appendChild(art);
    }
}