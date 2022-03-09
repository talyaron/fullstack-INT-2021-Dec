


let barsArr:Array<number>;
barsArr = [10,20,30,12,15];

for(let i=0; i<barsArr.length; i++ ){
const barDiv:any = document.querySelectorAll('#bar');
console.dir(barDiv)

    barDiv[i].textContent = barsArr[i];
    barDiv[i].id = barsArr[i];
    barDiv[i].class = "columnBar";
    barDiv[i].style.width = 50 +"px";
    barDiv[i].style.height = barsArr[i]*10 +"px";
    barDiv[i].style.backgroundColor = "blue";

}



