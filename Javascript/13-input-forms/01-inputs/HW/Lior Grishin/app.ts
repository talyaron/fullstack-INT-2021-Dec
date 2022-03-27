const form: HTMLFormElement = document.querySelector('form');
const username: HTMLInputElement = document.querySelector('#username');
const password: HTMLInputElement = document.querySelector('#password');
const match: HTMLDivElement = document.querySelector('#match');

const luckyNumberInput:HTMLInputElement = document.querySelector('#number');
const luckyNumberDiv: HTMLDivElement = document.querySelector('#luckyNumber');

const url: HTMLInputElement = document.querySelector('#url');
const userImage: HTMLImageElement = document.querySelector('#userImage');

const uploadFile = document.querySelector('#profilePic');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    username.value === password.value ? match.innerText = 'Match' : match.innerText = 'Not matching'
}, false);

luckyNumberInput.addEventListener('change', (e) => {
    luckyNumberDiv.innerHTML = `Your lucky number:${e.target.value}`
}, false);

url.addEventListener('change', (e) => {
    userImage.src = `${e.target.value}`;
}, false);

uploadFile.addEventListener('change' , (e) => {
    console.log(window.URL);
    const dire = window.URL.createObjectURL(e.target.files[0]) 
    console.log(dire);
    userImage.src = `${dire}`;
},false);

