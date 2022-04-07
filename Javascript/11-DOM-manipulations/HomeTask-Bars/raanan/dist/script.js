var arrayOfNumber = [10, 30, 55, 70, 100];
console.dir(arrayOfNumber);
function columnData(data) {
    data.forEach(function (elm) {
        var addData = document.createElement("div");
        addData.classList.add("wrapper__column");
        addData.style.height = elm * 3 + "px";
        var text = document.createTextNode("" + elm);
        addData.append(text);
        var randomColor = function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        addData.style.backgroundColor = randomColor();
        var dataBars = document.getElementById("wrapper");
        dataBars.append(addData);
    });
}
columnData(arrayOfNumber);
