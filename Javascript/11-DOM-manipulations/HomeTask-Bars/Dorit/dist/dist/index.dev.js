"use strict";

var histoArray = [];
var newNum = 0;
console.log("start");
var a = document.getElementById("box"); //
//let histoBars:any = document.querySelectorAll(".histoBar");
//console.dir(histoBars)

while (newNum < 999) {
  newNum = +prompt("Please type a number to histogram, to end type 999");
  histoArray.push(newNum);
}

histoArray.pop(); //console.log(histoArray)

a.classList.add("para");
console.dir(a.classList);