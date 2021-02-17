function validate() {
    const companyField = document.getElementById('companyInfo');
    const companyCheck = document.getElementById('company');
    const form = document.getElementById('registerForm');

    companyCheck.addEventListener('change', () => {
        if (companyCheck.checked) {
            companyField.style.display = 'block';
        } else {
            companyField.style.display = 'none';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const rePasswordInput = document.getElementById('confirm-password');
        const companyNumberInput = document.getElementById('companyNumber');

        const usernameInputValue = usernameInput.value;
        const emailInputValue = emailInput.value;
        const passwordInputValue = passwordInput.value;
        const rePasswordInputValue = rePasswordInput.value;
        const companyNumberInputValue = companyNumberInput.value;
        const validField = document.getElementById('valid');

        let isValid = true;
        let passIsValid = true;
        let rePassIsValid = true;

        const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
        const passwordPattern = /^[\w]{5,15}$/;
        const emailPattern = /.*@.*\..*/;

        if (!usernamePattern.test(usernameInputValue)) {
            usernameInput.style.borderColor = 'red';
            isValid = false;
        } else {
            usernameInput.style.border = 'none';
        }

        if (!passwordPattern.test(passwordInputValue)) {
            passwordInput.style.borderColor = 'red';
            isValid = false;
            passIsValid = false;
        } else {
            passwordInput.style.border = 'none';
            passIsValid = true;
        }

        if (!passwordPattern.test(rePasswordInputValue)) {
            rePasswordInput.style.borderColor = 'red';
            isValid = false;
            rePassIsValid = false;
        } else {
            passwordInput.style.border = 'none';
            rePassIsValid = true;
        }

        if (passwordInputValue !== rePasswordInputValue || !passIsValid || !rePassIsValid) {
            passwordInput.style.borderColor = 'red';
            rePasswordInput.style.borderColor = 'red';
            isValid = false;
            passIsValid = false;
            rePassIsValid = false;
        } else {
            passwordInput.style.border = 'none';
            rePasswordInput.style.border = 'none';
            passIsValid = true;
            rePassIsValid = true;
        }

        if (!emailPattern.test(emailInputValue)) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            emailInput.style.border = 'none';
        }

        if (companyCheck.checked) {
            const companyNumber = Number(companyNumberInputValue);
            if (companyNumber < 1000 || companyNumber > 9999) {
                companyNumberInput.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumberInput.style.border = 'none';
            }
        }

        if (isValid) {
            validField.style.display = 'block';
        } else {
            validField.style.display = 'none';
        }
    })
}