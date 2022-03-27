function handleSelectflag(ev) {
    console.log(ev.target.value);
}
var flag = ['Argentine', 'Israel', 'England', 'France'];
function myOptions(option) {
    return "<option value=" + option + ">" + option + "</option>";
}
function mySelections(options, functionName, element) {
    try {
        var html_1 = "<select onchange=\"" + functionName + "(event)\">\n        <option value=\"\" disabled selected>Choose</option>";
        options.forEach(function (el) {
            html_1 += myOptions(el);
        });
        html_1 += "</select>";
        element.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
var root = document.querySelector('#root');
mySelections(flag, 'handleSelectflag', root);
