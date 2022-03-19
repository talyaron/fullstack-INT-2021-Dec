var root = document.querySelector('#root');
var theImage = document.querySelector('#theImage');
var theCard = document.querySelector('#theCard');
console.dir(root);
console.dir(theImage);
console.dir(theCard);
root.style.color = 'red';
root.innerText = 'Hello World';
console.log(theImage.src);
theCard.classList.remove('card');
function printToElment(element) {
    var counter = 0;
    var cleanText = setInterval(function () {
        element.innerText += "-" + counter + "-";
        counter++;
        if (counter === 10) {
            clearInterval(cleanText);
        }
    }, 100);
}
printToElment(root);
