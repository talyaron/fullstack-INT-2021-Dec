function calculator() {
    console.log(calculator);
}
var display = document.getElementById('display');
console.log(display, "hello"); //Checking where Display is showing
var calculatorButtons = Array(document.getElementsByClassName('button'));
console.log(calculatorButtons, "its working"); //Check the Array Of the buttons
function handleClick(ev) {
    console.log(ev.target.type);
    // console.log(ev.target.value)
}
calculatorButtons.forEach(function (button) {
    addEventListener("click", function (ev) {
        ev.stopPropagation();
        console.log(ev.target.type);
        if (ev.target.nodeName !== 'BODY') {
            console.log("clicked"); //Any button that been clicked pop a `clicked` messege
            console.log(ev);
            console.dir(ev.target);
            console.log(ev.target.type);
            switch (ev.target.innerText) {
                case 'AC':
                    display.innerText = '';
                    break;
                case 'DEL':
                    if (display.innerText) {
                        display.innerText = display.innerText.slice(0, -1);
                        break;
                    }
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                        break;
                    }
                    catch (_a) {
                        display.innerText = 'NAN';
                        return;
                    }
                default:
                    display.innerText += ev.target.innerText; //any button press making the number pop at the Display
            }
        }
        ;
    });
});
