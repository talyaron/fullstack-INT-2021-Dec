// const boxes:any = document.querySelectorAll('.box');
// console.dir(boxes)
// function getTextbYId() {
//   boxes.forEach(element=>{
//     element.innerText = element.id
//     console.log (element.id)
//     return element.innerText
// })
// }
// getTextbYId()
// const rowsArray = [1,2,3,4,5,6,7]
// const columnArray = ["a", "b", "c", "d"]
// const data = [4,5,7]
// function addDataValues () {
//   data.forEach(Element=>{
//     element = data.push
//   })
// }
var coundArr = [22, 45, 61, 88];
console.dir(coundArr);
function dataVisual(data) {
    data.forEach(function (elm) {
        var addData = document.createElement("wrapper__column");
        addData.classList.add("wrapper__column");
        addData.style.height = elm * 3 + "px";
        var text = document.createTextNode("" + elm);
        addData.appendChild(text);
        var dataBars = document.getElementById("wrapper");
        dataBars.appendChild(addData);
    });
}
dataVisual(coundArr);
