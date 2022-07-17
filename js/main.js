'use strict';
console.log('main.js');

//  nusitaikom
const formEl = document.forms[0];
const loginEl = document.getElementById('login');
const passwordEl = document.getElementById('password');

formEl.addEventListener('submit', formSubmitHandler);
loginEl.addEventListener('blur', clearError(loginEl));
passwordEl.addEventListener('blur', clearError(passwordEl));

function formSubmitHandler(event) {
    event.preventDefault();
    return checkIfNotEmpty(loginEl, '=== 0', 'ivesk kanors');
    return checkIfNotEmpty(passwordEl, '< 3', 'reiktu daugiau raidikiu');

    console.log('siunciam forma!!!!!!!!');
}

function checkIfNotEmpty(inputEl, expr, txt) {
    const inputElValue = inputEl.value.trim();
    if (inputElValue.length expr) {
        console.warn('ivesk kanors');
        inputEl.nextElementSibling.style.display = 'block';
        inputEl.nextElementSibling.textContent = txt;
        inputEl.className = 'input-error';
        return true;
    }
}

function clearError(elem) {
    elem.className = '';
    elem.nextElementSibling.style.display = 'none';
}