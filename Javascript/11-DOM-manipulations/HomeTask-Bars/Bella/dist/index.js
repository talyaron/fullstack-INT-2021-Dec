var coundArr = [22, 45, 102, 88];
console.dir(coundArr);
function dataVisual(data) {
    data.forEach(function (elm) {
        var addData = document.createElement("wrapper__column");
        addData.classList.add("wrapper__column");
        addData.style.height = elm * 3 + "px";
        var text = document.createTextNode("" + elm);
        addData.appendChild(text);
        //random coloring
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
        dataBars.appendChild(addData);
    });
}
dataVisual(coundArr);
