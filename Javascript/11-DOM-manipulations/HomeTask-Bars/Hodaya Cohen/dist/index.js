var arrayOfNumber = [10, 30, 55, 70, 100];
var wrapper = document.querySelector(".wrapper");
var columnn = document.querySelectorAll(".column");
console.log(arrayOfNumber);
for (var i = 0; i < arrayOfNumber.length; i++) {
    var column = columnn[i];
    column.style.width = '100px';
    column.style.height = arrayOfNumber[i] * 6 + "px";
    column.innerText = arrayOfNumber[i];
    column.style.top = 600 - arrayOfNumber[i] * 6 + "px";
}
