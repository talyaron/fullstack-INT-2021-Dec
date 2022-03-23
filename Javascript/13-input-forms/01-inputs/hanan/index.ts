const userName: HTMLInputElement = document.getElementById(`#name`);
const email: HTMLInputElement = document.getElementById(`#email`);
const password: HTMLInputElement = document.getElementById(`#password`);




document.addEventListener('keyup', logKey);

function logKey(ev) {
  ev.textContent += ` ${ev.code}`;
}
