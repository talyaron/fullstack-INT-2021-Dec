var item = document.querySelector('.item');
function numpad1() {
    item.innerText = 'Hanan ohav benim';
}
function numpad2() {
    item.innerText = 'adain ohav benim';
}
function numpad3() {
    item.innerText = '3th time ice cream';
}
function numpad4() {
    item.innerText = '4th time ciggerete';
}
var btns = document.querySelectorAll('button');
console.log(btns);
btns[0].addEventListener('click', numpad1);
var body = document.querySelector('body');
body.addEventListener('keyup', function (e) {
    console.log(e.code);
});
