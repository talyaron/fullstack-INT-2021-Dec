var numbersDiv = document.querySelector(".print_numbers");
var img = document.querySelector('.img_url');
function printNumbers(event) {
    console.log(event);
    numbersDiv.innerHTML = "" + event.target.value;
}
function printurl(event) {
    var url = event.target.value;
    img.src = "" + url;
}
