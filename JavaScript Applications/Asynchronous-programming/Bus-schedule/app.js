function solve() {
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');
    const textSpan = document.querySelector('.info');
    let nextId = 'depot';
    let current;
    
    function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${nextId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                textSpan.textContent = `Next stop ${data.name}`;
                nextId = data.next;
                current = data.name;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(error => {
                textSpan.textContent = `Error`;
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    function arrive() {
        textSpan.textContent = `Arriving at ${current}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();