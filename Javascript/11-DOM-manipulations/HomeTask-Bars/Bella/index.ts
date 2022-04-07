const coundArr: Array<number> = [22, 45, 102, 88];
console.dir(coundArr);


function dataVisual(data: Array<number>) {
  data.forEach((elm) => {
    let addData = document.createElement("wrapper__column");
    addData.classList.add("wrapper__column");
    addData.style.height = elm * 3 + "px";
    let text = document.createTextNode(`${elm}`);
    addData.appendChild(text);
    //random coloring
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
    dataBars.appendChild(addData);
  });
}
dataVisual(coundArr);