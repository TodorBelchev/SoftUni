const section = document.querySelector('section');

async function toggle(e) {
    const parent = e.target.parentElement.parentElement;
    const key = parent.dataset.key;
    const p = parent.querySelector('p');
    const extraDiv = parent.querySelector('#extra');
    if (p.textContent == '') {
        try {
            const text = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${key}`).then(res => res.json());
            p.textContent = text.content;
        } catch (error) {
            p.textContent = `Error: ${error.message}`;
        }
    }
    if (extraDiv.style.display !== 'block') {
        extraDiv.style.display = 'block';
        e.target.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none';
        e.target.textContent = 'More';
    }
}

(async function loadList() {
    try {
        const list = await fetch('http://localhost:3030/jsonstore/advanced/articles/list').then(res => res.json());
        section.innerHTML = '';
        list.forEach(x => {
            const span = createHTMLElement('span','','button', 'More',[]);
            span.addEventListener('click', toggle);
            const div = createHTMLElement('div', 'accordion','', '',[
                createHTMLElement('div','', 'head', x.title, [span]),
                createHTMLElement('div', 'extra', '', '',[
                    createHTMLElement('p','','','',[])
                ])
            ]);
            div.setAttribute('data-key', x._id);
            section.appendChild(div);

        })
    } catch (error) {
        section.innerHTML = `<p>${error.message}</p>`;
    }
})();

function createHTMLElement(type, id, className, content, childs) {
    const element = document.createElement(type);
    if (id) { element.id = id; }
    if (className) { element.className = className; }
    element.innerText = content;
    childs.forEach(c => {
        element.appendChild(c);
    });
    return element;
}