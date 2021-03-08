function solve() {
    const [nameInput, dateInput] = Array.from(document.querySelectorAll('input'));
    const selectElement = document.querySelector('select');
    const modulesSection = document.querySelector('.modules');
    const options = Array.from(document.querySelectorAll('select option'));
    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        const selected = options.filter(x => x.selected)[0];

        if (nameInput.value.trim() === '' || dateInput.value.trim() === '' || selected.textContent === 'Select module...') {
            return;
        }

        const moduleName = `${selected.textContent.toUpperCase()}-MODULE`;

        let currentModule = Array.from(modulesSection.querySelectorAll('.module')).find(x => x.innerHTML.includes(moduleName));

        if (!currentModule) {
            const divModule = document.createElement('div');
            divModule.classList.add('module');
            const h3 = document.createElement('h3');
            h3.textContent = moduleName;
            const ul = document.createElement('ul');
            divModule.appendChild(h3);
            divModule.appendChild(ul);
            modulesSection.appendChild(divModule);
            currentModule = divModule;
        }

        const ul = currentModule.querySelector('ul');
        const li = document.createElement('li');
        li.classList.add('flex');
        const h4 = document.createElement('h4');
        const dateValueArr = dateInput.value.replace('T', ' - ').split(' - ');
        while (dateValueArr[0].includes('-')) {
            dateValueArr[0] = dateValueArr[0].replace('-', '/');
        }
        h4.textContent = `${nameInput.value} - ${dateValueArr.join(' - ')}`;
        const delBtn = document.createElement('button');
        delBtn.classList.add('red');
        delBtn.textContent = 'Del';
        delBtn.addEventListener('click', () => {
            li.remove();
            if (Array.from(ul.querySelectorAll('li')).length === 0) {
                ul.parentElement.remove();
            }
        });

        li.appendChild(h4);
        li.appendChild(delBtn);
        ul.appendChild(li);

        Array.from(ul.querySelectorAll('li'))
            .sort((a, b) => {
                const dateA = a.querySelector('h4').textContent.split(' - ')[1];
                const dateB = b.querySelector('h4').textContent.split(' - ')[1];
                return dateA.localeCompare(dateB);
            })
            .forEach(x => ul.appendChild(x));
            
        nameInput.value = '';
        dateInput.value = '';
        options.forEach(x => x.selected = x.defaultSelected);
    }
}