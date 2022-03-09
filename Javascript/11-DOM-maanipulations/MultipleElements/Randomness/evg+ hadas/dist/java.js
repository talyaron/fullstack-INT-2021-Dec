var wrapper = document.querySelectorAll('.wrapper');
var box = document.querySelectorAll('.box');
console.dir(box);
console.dir(wrapper);
function testing(box) {
    box.forEach(function (a) {
        a.innerText = a.id;
    });
}
testing(box);
