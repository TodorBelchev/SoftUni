function attachEvents() {
    const submitBtn = document.querySelector('#submit');
    const locationInput = document.querySelector('#location');
    const currentDiv = document.querySelector('#current');
    const upcomingDiv = document.querySelector('#upcoming');
    const parentDiv = document.querySelector('#forecast');
    const locationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const forecastURL = 'http://localhost:3030/jsonstore/forecaster/';
    const symbolObj = {
        Sunny: '&#x2600',
        "Partly sunny": '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees: '&#176',
    }

    submitBtn.addEventListener('click', loadWeather);

    function loadWeather() {
        fetch(locationsURL)
            .then(res => res.json())
            .then(data => {
                const city = data.find(x => x.name === locationInput.value);

                const currentDayPromise = fetch(forecastURL + `/today/${city.code}`)
                    .then(res => res.json());

                const threeDaysPromise = fetch(forecastURL + `/upcoming/${city.code}`)
                    .then(res => res.json());

                Promise.all([currentDayPromise, threeDaysPromise])
                    .then(displayData);
            })
            .catch(error => {
                upcomingDiv.style.display = 'none';
                parentDiv.style.display = 'block';
                currentDiv.querySelector('.label').textContent = 'Error';
                const forecastToHide = currentDiv.querySelector('.forecasts');
                if (forecastToHide) {
                    forecastToHide.style.display = 'none';
                }
            });
    }

    function displayData([currentData, upcomingData]) {
        displayCurrent(currentData);
        displayUpcoming(upcomingData);
    }

    function displayCurrent(currentData) {
        currentDiv.innerHTML = '<div class="label">Current conditions</div>';
        const forecastDiv = createHTMLElement('div', 'forecasts', '');
        const symbolSpan = createHTMLElement('span', 'condition symbol', symbolObj[currentData.forecast.condition]);
        const conditionSpan = createHTMLElement('span', 'condition', '');
        const nameSpan = createHTMLElement('span', 'forecast-data', `${currentData.name}`);
        const degreesSpan = createHTMLElement('span', 'forecast-data', `${currentData.forecast.low}${symbolObj.Degrees}/${currentData.forecast.high}${symbolObj.Degrees}`);
        const wordSpan = createHTMLElement('span', 'forecast-data', `${currentData.forecast.condition}`);

        conditionSpan.appendChild(nameSpan);
        conditionSpan.appendChild(degreesSpan);
        conditionSpan.appendChild(wordSpan);
        forecastDiv.appendChild(symbolSpan);
        forecastDiv.appendChild(conditionSpan);
        currentDiv.appendChild(forecastDiv);
        parentDiv.style.display = 'block';
    }

    function displayUpcoming(upcomingData) {
        upcomingDiv.innerHTML = '<div class="label">Three-day forecast</div>';
        upcomingDiv.style.display = 'block';
        const forecastDiv = createHTMLElement('div', 'forecasts-info', '');
        upcomingData.forecast.forEach(x => {
            const upcomingSpan = createHTMLElement('span', 'upcoming', '');
            const symbolSpan = createHTMLElement('span', 'symbol', symbolObj[x.condition]);
            const forecastSpan = createHTMLElement('span', 'forecast-data', `${x.low}${symbolObj.Degrees}/${x.high}${symbolObj.Degrees}`);
            const wordSpan = createHTMLElement('span', 'forecast-data', x.condition);
            
            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(forecastSpan);
            upcomingSpan.appendChild(wordSpan);
            forecastDiv.appendChild(upcomingSpan);
        });
        upcomingDiv.appendChild(forecastDiv);
    }

    function createHTMLElement(type, className, content) {
        const element = document.createElement(type);
        element.className = className;
        element.innerHTML = content;
        return element;
    }
}

attachEvents();