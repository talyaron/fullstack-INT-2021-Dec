var result = document.querySelector('.result');
function handleSend(ev) {
    ev.preventDefault();
    console.log(ev);
    var number1 = ev.target.elements.num1.value;
    var number2 = ev.target.elements.num2.value;
    console.log(number1);
    console.log(number2);
    result.innerText = "The division is " + number1 / number2;
}
