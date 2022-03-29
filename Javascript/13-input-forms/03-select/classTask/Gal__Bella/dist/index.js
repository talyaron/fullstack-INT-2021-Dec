function handleSelectCountry(ev) {
    ev.preventDefault();
    console.log(ev.target.value);
    root.innerHTML = "\n            <div>" + ev.target.value + "</div>\n            \n        ";
}
var countries = document.querySelectorAll('.option');
// const findFlag = countriesFlags.find(countries)
var root = document.querySelector('#root');
var countriesFlags = [
    {
        name: "Israel",
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
// function findCountry (){
//     for (let i=0, i<countriesFlags.length, i++)
// }
function countryOptions(option) {
    return "<option value=" + option + ">" + option + "</option>";
}
function handleUrl(options, functionName, element) {
    try {
        var html_1 = "<select onchange=\"" + functionName + "(event)\"> \n        <option value=\"\" disabled selected>Choose</option></select>";
        options.forEach(function (el) {
            html_1 += countryOptions(el);
        });
        element.innerHTML = html_1;
        // root.innerHTML = `
        //     <div>${}</div>
        //     <img src="${}" alt=""/>
        // `
    }
    catch (error) {
        console.log(error);
    }
}
