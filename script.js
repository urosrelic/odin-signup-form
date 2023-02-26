const nameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector('input[type=email]');
const phoneInput = document.querySelector('input[type=tel]');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const form = document.querySelector('#form');

const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validPhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const validPassRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
})

const setError = (element, message) => {
    const parentEl = element.parentElement;
    const errorDiv = parentEl.querySelector('.errorDisplay');

    errorDiv.innerText = message;
    errorDiv.classList.add('error');
    element.classList.add('error');
    element.classList.remove('success');
}

const setSuccess = (element) => {
    const parentEl = element.parentElement;
    const errorDiv = parentEl.querySelector('.errorDisplay');

    errorDiv.innerText = '';
    element.classList.add('success');
    element.classList.remove('error');
}

const validate = () => {
    const nameValue = nameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    nameValue === '' ? setError(nameInput, "Field can't be empty") : setSuccess(nameInput);
    lastNameValue === '' ? setError(lastNameInput, "Field can't be empty") : setSuccess(lastNameInput);
    validEmailRegex.test(emailValue) ? setSuccess(emailInput) : setError(emailInput, "Invalid email");
    validPhoneRegex.test(phoneValue) ? setSuccess(phoneInput) : setError(phoneInput, "Invalid phone number");
    validPassRegex.test(passwordValue) ? setSuccess(passwordInput) : setError(passwordInput, "Password must contain at least 6 letters, a symbol, 1 upper case letter and 1 number")
    passwordValue === confirmPasswordValue ? setSuccess(confirmPasswordInput) : setError(confirmPasswordInput, "Passwords do not match");
}

