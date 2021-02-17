function attachEventsListeners() {
    const button = document.getElementById('convert');
    button.addEventListener('click', convert);

    function convert() {
        const from = document.getElementById('inputUnits').value;
        const to = document.getElementById('outputUnits').value;
        const input = Number(document.getElementById('inputDistance').value);
        const output = document.getElementById('outputDistance');
        
        let inputToMeter = 0;
        let result = 0;

        switch (from){
            case 'km':
                inputToMeter = input * 1000;
                break;
            case 'm':
                inputToMeter = input;
                break;
            case 'cm':
                inputToMeter = input * 0.01;
                break;
            case 'mm':
                inputToMeter = input * 0.001;
                break;
            case 'mi':
                inputToMeter = input * 1609.34;
                break;
            case 'yrd':
                inputToMeter = input * 0.9144;
                break;
            case 'ft':
                inputToMeter = input * 0.3048;
                break;
            case 'in':
                inputToMeter = input * 0.0254;
                break;
        }

        switch (to){
            case 'km':
                result = inputToMeter / 1000;
                break;
            case 'm':
                result = inputToMeter;
                break;
            case 'cm':
                result = inputToMeter / 0.01;
                break;
            case 'mm':
                result = inputToMeter / 0.001;
                break;
            case 'mi':
                result = inputToMeter / 1609.34;
                break;
            case 'yrd':
                result = inputToMeter / 0.9144;
                break;
            case 'ft':
                result = inputToMeter / 0.3048;
                break;
            case 'in':
                result = inputToMeter / 0.0254;
                break;
        }
        
        output.value = result;
    }
}

