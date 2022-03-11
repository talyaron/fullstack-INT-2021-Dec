var barsWrapper = document.querySelector('.wrapper');
var barArray = [80, 40, 30, 65, 45, 72, 12.5, 90.5];
var barsAppered = false;
var darkButton = document.getElementById('dark');
var lightButton = document.getElementById('light');
var solarButton = document.getElementById('solar');
var body = document.body;
// Button Event Handlers
darkButton.onclick = function () {
    // replace classes -> light to dark
    body.classList.replace('light', 'dark');
};
lightButton.onclick = function () {
    // replace classes -> dark to light
    body.classList.replace('dark', 'light');
};
solarButton.onclick = function () {
    // if class has solar
    if (body.classList.contains('solar')) {
        // remove solar class
        body.classList.remove('solar');
        // change css bg-solar varibale cirle to yellow
        solarButton.style.cssText = "\n            --bg-solar: var(--yellow);\n        ";
        // change text to solarize instead of normalize
        solarButton.innerText = "solarize";
    }
    else {
        // if class dont have solar class
        // change css bg-solar varible circle to white
        solarButton.style.cssText = "\n            --bg-solar: white;\n        ";
        // add solor class 
        body.classList.add('solar');
        // change text to normalize instead of solarize
        solarButton.innerText = "normalize";
    }
};
function createGraphBars(barArray) {
    // Checkes if user pass in the array value bigger than 100
    if (Math.max.apply(Math, barArray) > 100 || Math.min.apply(Math, barArray) < 0) {
        alert('Function accept numbers between 0 - 100');
    }
    else {
        if (!barsAppered) {
            // Getting the width of the wrapper
            var wrapperWidth = barsWrapper.offsetWidth;
            // Calculating the width of each bar depends on barArrays length
            var barWidth_1 = wrapperWidth / barArray.length;
            barArray.forEach(function (element) {
                // Creating a new HTML Element as div (will represent our Bar)
                var newBar = document.createElement('div');
                // Creating a new HTML as span (will represent our Bar value)
                var barValue = document.createElement('span');
                // Adding to newBar class named 'bar'
                newBar.classList.add('bar');
                // Adding to barValue class named 'value'
                barValue.classList.add('value');
                // Setting the bar height as the element in % of 100%(wrapper)
                newBar.style.height = element + "%";
                // Setting bar width to fullfill the wrapper width
                newBar.style.width = barWidth_1 + "px";
                // Setting bar color to randomColor
                newBar.style.backgroundColor = "" + getRandomColor();
                // Setting the value of the barValue to element value
                barValue.innerHTML = element + "%";
                // Appending the bar as new bar to the wrapper
                barsWrapper.append(newBar);
                // Appeniding the value to the bar
                newBar.append(barValue);
            });
            barsAppered = true;
        }
        else {
            alert('bars already appered first remove them! Use function removeBars()');
        }
    }
}
// Function removes bars
function removeBars() {
    var warrpersBars = document.querySelectorAll('.bar');
    warrpersBars.forEach(function (element) {
        barsWrapper.removeChild(element);
    });
    barsAppered = false;
}
// Function returns random color in RGB
function getRandomColor() {
    var r = getRandomNumber(255);
    var g = getRandomNumber(255);
    var b = getRandomNumber(255);
    return "rgb(" + r + "," + g + "," + b + ")";
}
// Function returns random number between 0 - max
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
