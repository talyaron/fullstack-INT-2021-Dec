

const arrayOfNumber: Array<number> = [10, 30, 55, 70, 100];
console.dir(arrayOfNumber);

function columnData(data: Array<number>) {
    data.forEach((elm) => {
        let addData = document.createElement("div");
        addData.classList.add("wrapper__column");
        addData.style.height = elm * 3 + "px";

        let text = document.createTextNode(`${elm}`);
        addData.append(text);

        let randomColor: any = function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        addData.style.backgroundColor = randomColor();

        let dataBars = document.getElementById("wrapper")
        dataBars.append(addData);

    });
}
columnData(arrayOfNumber);