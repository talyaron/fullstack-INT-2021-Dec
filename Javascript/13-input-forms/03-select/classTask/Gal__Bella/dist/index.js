function handleSelectCountry(ev) {
    console.log(ev.target.value);
}
var countries = document.querySelectorAll('.option');
var findFlag = countriesFlags.find(countries);
var countriesFlags = [
    {
        name: "israel",
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    },
    {
        name: "Greece",
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    },
    {
        name: "U.S.A",
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    }
];
function findCountry() {
    for (var i = 0, i = void 0; , i++;)
        ;
}
function countryOptions(option) {
    return "<option value=" + option + ">" + option + "</option>";
}
function handleUrl(options, functionName, element) {
    try {
        var html_1 = "<select onchange=\"" + functionName + "(event)\"> \n        <option value=\"\" disabled selected>Choose</option>";
        options.forEach(function (el) {
            html_1 += countryOptions(el);
        });
        html_1 += "</select>";
        element.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
