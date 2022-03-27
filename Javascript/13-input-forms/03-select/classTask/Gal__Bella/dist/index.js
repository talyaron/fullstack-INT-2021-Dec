function handleSelectCountry(ev) {
    console.log(ev.target.value);
}
var flag = document.querySelector('.img');
function handleUrl(ev) {
    console.dir(ev);
    var inputNumber = document.querySelector("#" + ev.target.name);
    var value = ev.target.value;
    inputNumber.innerHTML = value;
}
