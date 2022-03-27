const form = document.querySelector('#root')

function handlePhoneNumber(event) {
    console.dir(event)
    let inputNumber:HTMLElement = document.querySelector(`#${event.target.name}`);
    const value = event.target.value;
    inputNumber.innerHTML = value
    form.append(value);
};