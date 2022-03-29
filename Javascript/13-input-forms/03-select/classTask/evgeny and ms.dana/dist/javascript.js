var flags = ["israel", "syria", "thiland", "wonderland"];
var boot = document.querySelector("#boot");
function FlagOption(somethingStupid) {
    return "<option value=" + somethingStupid + ">" + somethingStupid + "</option>";
}
function FlagSelect(options, someFunction, element) {
    try {
        var html_1 = "<select onchange=\"" + someFunction + "(event)\"> \n        <option value=\"\" disabled selected>Choose your papaya</option>";
        options.forEach(function (el) {
            html_1 += FlagOption(el);
        });
        html_1 += "</select>";
        element.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
function handlepapaya(event) {
    var selection = document.querySelector("#selection");
    selection.innerText = "your papaya is: " + event.target.value;
    console.log(event.target.value);
}
FlagSelect(flags, 'handlepapaya', boot);
