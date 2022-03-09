var wrapper = document.querySelector(".wrapper");
var bar = document.querySelectorAll(".bars");
var arr = [4, 6, 5, 8];
console.dir(bar);
console.dir(wrapper);
// for (let i = 0; i < arr.length; i++) {
//     let column = bar[i];
//     column.style.width = '100px';
//     column.style.height = `${arr[i]*20}px`;
// }
for (var i = 0; i < arr.length; i++) {
    var test = bar[i];
    test.style.height = arr[i] * 100 + "px";
}
