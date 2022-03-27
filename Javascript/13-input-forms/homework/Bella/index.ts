const form = document.querySelector('#root')

function handleFirstName (ev){}


function handlePhoneNumber(ev) {
    console.dir(ev)
    let inputNumber:HTMLElement = document.querySelector(`#${event.target.name}`);
    const value = ev.target.value;
    inputNumber.innerHTML = value
};