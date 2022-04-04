function calculator() {
    console.log(calculator);
}
var display = document.getElementById('display');
console.log(display, "hello"); //Checking where Display is showing
var calculatorButtons = Array(document.getElementsByClassName('button'));
console.log(calculatorButtons, "its working"); //Check the Array Of the buttons
function handleClick(ev) {
    // console.log(ev.target.value)
}
calculatorButtons.map(function (button) {
    addEventListener("click", function (ev) {
        console.log("clicked"); //Any button that been clicked pop a `clicked` messege
        console.log(ev);
        console.log(ev.target);
        console.log(ev.target.innerText);
        switch (ev.target.innerText) {
            default:
                display.innerText += ev.target.innerText; //any button press making the number pop at the Display
        }
    });
});
