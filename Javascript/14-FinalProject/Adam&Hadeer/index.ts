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
        if (ev.target.className !== 'wrapper' && ev.target.className !== 'calculatorButtons' && ev.target.nodeName !== 'BODY' && ev.target.nodeName !== 'HTML'&& ev.target.id !=='display' ) {
            console.log(`clicked`); //Any button that been clicked pop a `clicked` messege
            console.log(ev);
            console.dir(ev.target);
            console.log(ev.target.type)
            console.dir (display)
            switch (ev.target.innerText) {
                case 'AC':
                    display.innerText = ''
                    break;
                case 'DEL':
                    if (display.innerText) {
                        display.innerText = display.innerText.slice(0, -1);
                        break;
                    }
                    else {
                        display.innerText = '';
                        break;
                    }

                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                        if(display.innerText==='undefined'){
                            display.innerText=''
                           alert ('NAN')
                        }
                        console.dir(display)
                        break;
                        
                    }
                    catch {
                        display.innerText = '' 
                        alert ('NAN')
                        break;  
                        
                    }
                    
                    
                
                    

      

                default:
                    display.innerText += ev.target.innerText;//any button press making the number pop at the Display
            }
        };

    })
})




