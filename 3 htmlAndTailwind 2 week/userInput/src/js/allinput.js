const input = document.getElementById('v');
const result = document.getElementById('r');

const upperCase = () => result.textContent = input.value.toUpperCase();

const lowerCase = () => result.textContent = input.value.toLowerCase();

const clera = () =>  result.textContent = '';

const textLenght = () => result.textContent = input.value.length;

const wordLenght = () => result.textContent = input.value.trim().split(' ').length;

const removeSpace = () => result.textContent = input.value.trim().split(' ').join('');



