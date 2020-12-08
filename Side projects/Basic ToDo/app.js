function solve() {
    const local = window.localStorage;
    const todoList = document.querySelector('#todo');
    const progressList = document.querySelector('#progress');
    const doneList = document.querySelector('#done');
    getTodos();
    const addBtn = document.querySelector('#add button');
    addBtn.addEventListener('click', add);

    function add() {
        const input = document.querySelector('#add input');
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            h3.textContent = input.value;
            const btnDiv = document.createElement('div');
            btnDiv.classList.add('btnDiv');
            const btn = document.createElement('button');
            btn.textContent = 'Start';
            btn.addEventListener('click', start);
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteTodo);
            const p = document.createElement('p');
            const date = new Date().toLocaleString();
            p.textContent = `Added: ${date}`;
            const pDiv = document.createElement('div');
            pDiv.classList.add('pDiv');
            pDiv.appendChild(p);
            btnDiv.appendChild(btn);
            btnDiv.appendChild(deleteBtn);
            li.appendChild(h3);
            li.appendChild(pDiv);
            li.appendChild(btnDiv);
            todoList.appendChild(li);
            input.value = '';
            saveTodos(li);
        }
    }

    function start(e) {
        deleteLocal(e);
        const todo = e.target.parentElement.parentElement;
        const btn = todo.querySelector('button');
        btn.textContent = 'Finish';
        btn.removeEventListener('click', start);
        const p = todo.querySelector('.pDiv');
        const newP = document.createElement('p');
        const date = new Date().toLocaleString();
        newP.textContent = `Started: ${date}`;
        p.appendChild(newP);
        btn.addEventListener('click', done);
        progressList.appendChild(todo);
        saveTodos(todo);
    }

    function done(e) {
        deleteLocal(e);
        const todo = e.target.parentElement.parentElement;
        todo.querySelector('button').remove();
        const p = todo.querySelector('.pDiv');
        const newP = document.createElement('p');
        const date = new Date().toLocaleString();
        newP.textContent = `Finished: ${date}`;
        p.appendChild(newP);
        doneList.appendChild(todo);
        saveTodos(todo);
    }

    function deleteTodo(e) {
        deleteLocal(e);
        e.target.parentElement.parentElement.remove();
    }

    function saveTodos(todo) {
        const todos = getLocalTodos();
        todos.push(todo.innerHTML);
        local.setItem('todos', JSON.stringify(todos));
    }

    function getTodos() {
        const todos = getLocalTodos();
        todos.forEach(todo => {
            if (todo.includes('Finished')) {
                const li = document.createElement('li');
                li.innerHTML = todo;
                const buttons = li.querySelectorAll('button');
                buttons[0].addEventListener('click', deleteTodo);
                doneList.appendChild(li);
            } else if (todo.includes('Started')) {
                const li = document.createElement('li');
                li.innerHTML = todo;
                const buttons = li.querySelectorAll('button');
                buttons[0].addEventListener('click', done);
                buttons[1].addEventListener('click', deleteTodo);
                progressList.appendChild(li);
            } else if (todo.includes('Added')) {
                const li = document.createElement('li');
                li.innerHTML = todo;
                const buttons = li.querySelectorAll('button');
                buttons[0].addEventListener('click', start);
                buttons[1].addEventListener('click', deleteTodo);
                todoList.appendChild(li);
            }
        }); 
    }

    function deleteLocal(e) {
        const todo = e.target.parentElement.parentElement.innerHTML;
        const todos = getLocalTodos();
        if (todos.includes(todo)) {
            const index = todos.indexOf(todo);
            todos.splice(index, 1);
        }
        local.setItem('todos', JSON.stringify(todos));
    }

    function getLocalTodos() {
        let todos;
        if (local.getItem('todos') !== null) {
            todos = JSON.parse(local.getItem('todos'));
        } else {
            todos = [];
        }
        return todos;
    }
}
