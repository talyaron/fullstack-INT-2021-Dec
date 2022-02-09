var pi = Math.PI;
var radius = 4;
var r3 = Math.pow(radius, 3);
var circleVol = (4 * pi * r3) / 3;
console.log("Circle Volume: " + circleVol);
var min = 100;
var max = 80000000; // 0 - 1       79 999 900    +100 
var randPrize = Math.round((Math.random() * (max - min)) + min);
console.log("You Won: " + randPrize);
console.log("Mas took 50%: " + randPrize / 2 + "$ You left with: " + randPrize / 2 + "$");
console.log("Mas took 25%: " + randPrize * .25 + "$ You left with: " + randPrize * .75 + "$");
console.log("Mas took 10%: " + randPrize * .1 + "$ You left with: " + randPrize * .9 + "$");
