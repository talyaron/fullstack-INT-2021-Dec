var boxes = document.querySelectorAll('.box');
console.dir(boxes);
function getTextbYId() {
    boxes.forEach(function (element) {
        element.innerText = element.id;
        console.log(element.id);
        return element.innerText;
    });
}
getTextbYId();
