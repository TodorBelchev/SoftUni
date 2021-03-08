function addDestination() {
    const [cityInput, countryInput] = document.querySelectorAll('.inputData');
    const options = Array.from(document.querySelectorAll('option'));
    const selected = options.find(x => x.selected === true);
    const tbody = document.querySelector('#destinationsList');

    if (cityInput.value.trim() === '' || countryInput.value.trim() === '') { return }

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = cityInput.value + ', ' + countryInput.value;
    td2.textContent = selected.textContent;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);

    const boxName = selected.textContent.toLocaleLowerCase();
    const box = document.querySelector(`#${boxName}`);
    box.value = Number(box.value) + 1;

    cityInput.value = '';
    countryInput.value = '';
}