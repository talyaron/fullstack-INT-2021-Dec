var tax = 0;
var salary = 10000;
var lvl1max = 6450; // first level max salary
var lvl1per = 0.1; // first level percentage 10%
var lvl2min = 6451;
var lvl2max = 9240; // second level max salary 
var lvl2dif = lvl2max - lvl2min;
var lvl2per = 0.14; // second level percentage 14%
var lvl3min = 9241;
var lvl3max = 14840; // third level max salary
var lvl3dif = lvl3max - lvl3min;
var lvl3per = 0.2; // third level percentage 20%
var lvl4min = 14841;
var lvl4max = 20620; // forth level max salary
var lvl4dif = lvl4max - lvl4min;
var lvl4per = 0.31; // forth level percentage 31%
var lvl5min = 20621;
var lvl5max = 42910; // fifth level max salary
var lvl5dif = lvl5max - lvl5min;
var lvl5per = 0.35; // fifth level percentage 35%
var lvl6min = 42911;
var lvl6max = 55270; // sixth level max salary
var lvl6dif = lvl6max - lvl6min;
var lvl6per = 0.47; // sixth level percentage 47%
var lvl7per = 0.5; // seventh level percentage 50%
if (salary <= lvl1max) {
    tax = tax + (salary * lvl1per);
}
else if (salary <= lvl2max) {
    tax = tax + (lvl1max * lvl1per + (salary - lvl1max) * lvl2per);
}
else if (salary <= lvl3max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (salary - lvl2max) * lvl3per);
}
else if (salary <= lvl4max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (salary - lvl3max) * lvl4per);
}
else if (salary <= lvl5max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (lvl4dif) * lvl4per + (salary - lvl4max) * lvl5per);
}
else if (salary <= lvl6max) {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (lvl4dif) * lvl4per + (lvl5dif) * lvl5per + (salary - lvl5max) * lvl6per);
}
else {
    tax = tax + (lvl1max * lvl1per + (lvl2dif) * lvl2per + (lvl3dif) * lvl3per + (lvl4dif) * lvl4per + (lvl5dif) * lvl5per + (lvl6dif) * lvl6per + (salary - lvl6max) * lvl7per);
}
console.log(Math.floor(tax));
// var lvl1max:number = 6450;
// var lvl2min:number = 6451;
// var lvl2max:number = 9240;
// var lvl3min:number = 9241;
// var lvl3max:number = 14840;
// var lvl4min:number = 14841;
// var lvl4max:number = 20620;
// var lvl5min:number = 20621;
// var lvl5max:number = 42910;
// var lvl6min:number = 42911;
// var lvl6max:number = 55270;
// if (salary<=lvl1max){
//     tax=tax+(salary*0.1) 
// } else if (salary<=lvl2max) {
//     tax=tax+(lvl1max*0.1 + (salary-lvl1max)*0.14)
// } else if (salary<=lvl3max){
//     tax=tax+(lvl1max*0.1 + (lvl2max - lvl2min)*0.14 + (salary-lvl2max)*0.2)
// } else if (salary<=lvl4max){
//     tax=tax+(lvl1max*0.1 + (lvl2max - lvl2min)*0.14 + (lvl3max - lvl3min)*0.2 + (salary-lvl3max)*0.31)
// } else if (salary<=lvl5max){
//     tax=tax+(lvl1max*0.1 + (lvl2max - lvl2min)*0.14 + (lvl3max - lvl3min)*0.2 + (lvl4max - lvl4min)*0.31 + (salary-lvl4max)*0.35)
// } else if (salary<=lvl6max){
//     tax=tax+(lvl1max*0.1 + (lvl2max - lvl2min)*0.14 + (lvl3max - lvl3min)*0.2 + (lvl4max - lvl4min)*0.31 + (lvl5max -lvl5min)*0.35 + (salary-lvl5max)*0.47)
// } else {
//     tax=tax+(lvl1max*0.1 + (lvl2max - lvl2min)*0.14 + (lvl3max - lvl3min)*0.2 + (lvl4max - lvl4min)*0.31 + (lvl5max -lvl5min)*0.35 + (lvl6max -lvl6min)*0.47 + (salary-lvl6max)*0.5)
// }
// console.log(tax)
// 0 - 6450 10% 
// 6451 - 9240 14% 2789
// 9241 - 14840 20% 5599
// 14841 - 20620 31% 5779
// 20621  - 42910 35% 22289
// 42911 - 55270 47% 12359
// 55271 - 50%
// if (salary<=6450){
//     tax=tax+(salary*0.1) 
// } else if (salary<=9240) {
//     tax=tax+(6450*0.1 + (salary-6450)*0.14)
// } else if (salary<=14840){
//     tax=tax+(6450*0.1 + 2789*0.14 + (salary-9240)*0.2)
// } else if (salary<=20620){
//     tax=tax+(6450*0.1 + 2789*0.14 + 5599*0.2 + (salary-14840)*0.31)
// } else if (salary<=42910){
//     tax=tax+(6450*0.1 + 2789*0.14 + 5599*0.2 + 5779*0.31 + (salary-20620)*0.35)
// } else if (salary<=55270){
//     tax=tax+(6450*0.1 + 2789*0.14 + 5599*0.2 + 5779*0.31 + 22289*0.35 + (salary-42910)*0.47)
// } else {
//     tax=tax+(6450*0.1 + 2789*0.14 + 5599*0.2 + 5779*0.31 + 22289*0.35 + 12359*0.47 + (salary-55270)*0.5)
// }
// console.log(tax)
