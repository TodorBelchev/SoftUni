function solve() {
    const [idInput, firstNameInput, lastNameInput, facultyNumberInput, gradeInput] = document.querySelectorAll('input');
    const messageP = document.querySelector('#message');
    const URL = 'http://localhost:3030/jsonstore/collections/students';
    const tbody = document.querySelector('tbody');
    const addBtn = document.getElementById('submit');

    extractStudents();

    addBtn.addEventListener('click', addStudent);

    function addStudent(e) {
        e.preventDefault();

        if (idInput.value.trim() === '' ||
            firstNameInput.value.trim() === '' ||
            lastNameInput.value.trim() === '' ||
            !Number.isInteger(Number(facultyNumberInput.value)) ||
            !Number(gradeInput.value)) {
            errorHandler({ message: 'All inputs must be filled correct!' });
            return;
        } else {
            messageP.textContent = '';
        }

        const obj = {
            ID: idInput.value.trim(),
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            facultyNumber: facultyNumberInput.value,
            grade: Number(gradeInput.value)
        }

        fetch(URL, { method: 'POST', body: JSON.stringify(obj) })
            .then(res => {
                if (!res.ok) {
                    errorHandler({ message: 'Failed to add student!' })
                    return;
                }
                idInput.value = '';
                firstNameInput.value = '';
                lastNameInput.value = '';
                facultyNumberInput.value = '';
                gradeInput.value = '';
                messageP.textContent = 'Success! Added new student.';
                extractStudents();
            })
            .catch(errorHandler)


        setTimeout(() => {
            messageP.textContent = '';
        }, 3000)
    }

    function extractStudents() {

        tbody.innerHTML = '';

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .sort(([key, student], [key2, student2]) => Number(student.ID) - Number(student2.ID))
                    .forEach(([key, student]) => {
                        const ID = student.ID ? student.ID : 'not presented by Softuni';
                        const current = createHtmlElement('tr', '', { "data-key": key }, {}, [
                            createHtmlElement('td', ID, {}, {}, []),
                            createHtmlElement('td', student.firstName, {}, {}, []),
                            createHtmlElement('td', student.lastName, {}, {}, []),
                            createHtmlElement('td', student.facultyNumber, {}, {}, []),
                            createHtmlElement('td', student.grade, {}, {}, []),
                        ]);
                        tbody.appendChild(current);
                    });
            })
            .catch(errorHandler);
    }

    function createHtmlElement(type, content, attributes, events, childs) {
        const element = document.createElement(type);
        element.textContent = content;

        Object.keys(attributes).forEach(x => element.setAttribute(x, attributes[x]));

        Object.keys(events).forEach(x => element.addEventListener(x, events[x]));

        childs.forEach(x => element.appendChild(x));

        return element;
    }

    function errorHandler(err) {
        messageP.textContent = err.message;
        setTimeout(() => {
            messageP.textContent = '';
        }, 3000)
    }
}

solve();