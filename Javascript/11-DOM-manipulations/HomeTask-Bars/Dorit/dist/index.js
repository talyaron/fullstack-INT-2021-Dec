// let elem = document. createElement('div');
// elem.className='box'
// elem. style. cssText = 'position:absolute;top:100px;left:500px;width:10%;height:20%;background:blue';
// document. body. appendChild(elem);
// let boxes:any = document.querySelectorAll('.box') 
// console.log("here comes boxex before manipulation")
var boxes = document.querySelectorAll('.box');
var histoArray = [];
var newNum = 0;
while (newNum < 999) {
    newNum = +prompt("Please type a number to histogram in rounded to hundreds, to end type 999");
    histoArray.push(newNum);
}
histoArray.pop();
//console.log(histoArray)
// let left:number=0
// let lefts:string=''
var topStr = "500";
var leftNum = 15;
var leftStr = "100";
var heightNum = 1000;
var heightStr = "1000";
for (var i = 0; i < histoArray.length; i++) {
    window['p' + i] = document.createElement('div');
    window['p' + i].className = 'box';
    document.body.appendChild(window['p' + i]);
    heightNum = Math.round(histoArray[i] / 5);
    heightStr = heightNum + "px";
    topStr = 600 - heightNum + "px";
    leftNum += 100;
    leftStr = leftNum + "px";
    console.log("heightStr " + heightStr);
    console.log("topStr " + topStr);
    console.log("leftStr " + leftStr);
    window['p' + i].style.height = heightStr;
    window['p' + i].style.top = topStr;
    window['p' + i].style.left = leftStr;
    window['p' + i].style.backgroundColor = "blue";
    window['p' + i].style.width = "60px";
    window['p' + i].style.position = 'absolute';
    window['p' + i].innerText = histoArray[i];
    window['p' + i].innerHTML =
        '' + "<span style=\"color:white\">" + histoArray[i] + "</span>";
    //window['p'+i]. style. cssText = 'position:absolute;top:topStr;width:500;backgroundColor:blue;height:heightStr';
    console.dir(window['p' + i].style.height);
    console.dir(window['p' + i].style.left);
}
var elementos = document.querySelectorAll(".box");
//elementos[0]. style. cssText = 'position:absolute;top:500px;left:50px;width:100px;background:blue';
console.dir(elementos);
// for (let j:number=0;j<histoArray.length;j++){
//     elementos[j].style.height=histoArray[j]
//     elementos[j].position="absolute"
//     elementos[j].style.width = "100px";
//     elementos[j].style.marginleft = 150*j
//     elementos[j].style.backgroundColor="blue"
// }
