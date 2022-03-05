var first = document.querySelector('.first');
var second = document.querySelector('.second');
var btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    transfer(first, second);
});
function transfer(one, two) {
    two.innerHTML = one.innerHTML;
    two.style.cssText = 'color : red;background-color:black;';
}
;
