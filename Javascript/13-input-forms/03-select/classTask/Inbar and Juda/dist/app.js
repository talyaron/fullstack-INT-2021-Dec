function chooseCountry(ev) {
    console.log(ev);
}
var countries = ['Russia', 'Israel', 'Portugal', 'France', 'USA'];
var flags = ['https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg',
    'https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg', 'https://cdn.britannica.com/88/3588-004-E0E45339/Flag-Portugal.jpg', 'https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg', ' https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg'];
function renderCountries(option) {
    return "<option value=" + option + ">" + option + "</option>";
}
function renderSelect(options, functionName, element) {
    try {
        var html_1 = "<select onchange=\"" + functionName + "(event)\"> \n        <option value=\"\" disabled selected>Choose</option>";
        options.forEach(function (el) {
            html_1 += renderCountries(el);
        });
        html_1 += "</select>";
        element.innerHTML = html_1;
    }
    catch (error) {
        console.log(error);
    }
}
var root = document.querySelector('#root');
renderSelect(countries, 'chooseCountry', root);
