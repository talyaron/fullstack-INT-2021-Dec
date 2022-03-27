function handleSelectMusic(ev) {
    console.log(ev.target.value);
}
function chooseCar(ev) {
    console.log("My car will be: ", ev.target.value);
}
var cars = ['mazda', 'volvo', 'mercedes', 'bmw', 'tesla', 'hyundai'];
function renderOption(option) {
    return "<option value=" + option + ">" + option + "</option>";
}
function renderSelect(options, functionName, element) {
    try {
        var html_1 = "<select onchange=\"" + functionName + "(event)\"> \n        <option value=\"\" disabled selected>Choose</option>";
        options.forEach(function (el) {
            html_1 += renderOption(el);
        });
        html_1 += "</select>";
        element.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
var root = document.querySelector('#root');
renderSelect(cars, 'chooseCar', root);
