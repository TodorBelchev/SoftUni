function getInfo() {
    const input = document.querySelector('#stopId');
    const ul = document.querySelector('#buses');
    const divName = document.querySelector('#stopName');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${input.value}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            divName.textContent = data.name;
            Object.entries(data.buses).forEach(([key, value]) => {
                const li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${value} minutes`;
                ul.appendChild(li);
                input.value = '';
            });
        })
        .catch(error => {
            divName.textContent = 'Error'
            ul.innerHTML = '';
            input.value = '';
        });
}