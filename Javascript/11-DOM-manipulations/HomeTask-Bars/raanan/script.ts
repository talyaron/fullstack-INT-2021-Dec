const arrayOfNumber: Array<number> = [10, 30, 55, 70, 100];
console.dir(arrayOfNumber);

function columnData(data: Array<number>) {
    data.forEach((elm) => {
        let addData = document.createElement("wrapper__column");
        addData.classList.add("wrapper__column");
        addData.style.height = elm * 3 + "px";
        let text = document.createTextNode(`${elm}`);
        addData.appendChild(text);
        let dataBars = document.getElementById("wrapper")
        dataBars.appendChild(addData);
    });
}
columnData(arrayOfNumber);