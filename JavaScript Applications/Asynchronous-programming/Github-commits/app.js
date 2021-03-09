function loadCommits() {
    const nameInput = document.querySelector('#username');
    const repoInput = document.querySelector('#repo');
    const ul = document.querySelector('#commits');
    ul.innerHTML = '';
    const url = `https://api.github.com/repos/${nameInput.value}/${repoInput.value}/commits`;

    fetch(url)
        .then(res => res.ok ? res.json() : appendError(res))
        .then(appendCommits);

    function appendError(res) {
        const li = document.createElement('li');
        li.textContent = `Error: ${res.status}(${res.statusText})`;
        ul.appendChild(li);
    }

    function appendCommits(data) {
        data.forEach(x => {
            const li = document.createElement('li');
            li.textContent = `${x.commit.author.name}: ${x.commit.message}`
            ul.appendChild(li);
        });
    }
}