function calculator() {
    console.log(calculator)
}

const display = document.getElementById('display');
console.log(display, `hello`) //Checking where Display is showing

const calculatorButtons = Array(document.getElementsByClassName('button'));
console.log(calculatorButtons, `its working`) //Check the Array Of the buttons


function handleClick(ev: any) {

    console.log(ev.target.type)
    // console.log(ev.target.value)
}

calculatorButtons.forEach(button => {
    addEventListener(`click`, (ev: any) => {
        ev.stopPropagation()
        console.log(ev.target.type)
        if (ev.target.nodeName !== 'BODY') {

            console.log(`clicked`); //Any button that been clicked pop a `clicked` messege
            console.log(ev);
            console.dir(ev.target);
            console.log(ev.target.type)
            switch (ev.target.innerText) {
                case 'AC':
                    display.innerText = ''
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
                    catch {
                        display.innerText = 'NAN'
                       return;

                    }

                default:
                    display.innerText += ev.target.innerText;//any button press making the number pop at the Display
            }
        };

    })
})




