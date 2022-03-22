var arrayOfNumber = [10, 30, 55, 70, 100];
console.dir(arrayOfNumber);
function columnData(data) {
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
columnData(arrayOfNumber);
