var lvl1max = 6450;
var lvl1per = 0.1;
var lvl2min = 6451;
var lvl2max = 9240;
var lvl2dif = lvl2max - lvl2min;
var lvl2per = 0.14;
var lvl3min = 9241;
var lvl3max = 14840;
var lvl3dif = lvl3max - lvl3min;
var lvl3per = 0.2;
var lvl4min = 14841;
var lvl4max = 20620;
var lvl4dif = lvl4max - lvl4min;
var lvl4per = 0.31;
var lvl5min = 20621;
var lvl5max = 42910;
var lvl5dif = lvl5max - lvl5min;
var lvl5per = 0.35;
var lvl6min = 42911;
var lvl6max = 55270;
var lvl6dif = lvl6max - lvl6min;
var lvl6per = 0.47;
var lvl7 = 55270;
var lvl7per = 0.5;
var salary = undefined;
if (salary <= lvl1max) {
    console.log(lvl1max * lvl1per);
}
else if (salary >= 6451 && salary <= 9240) {
    console.log(lvl2max * lvl2per);
}
else if (salary >= 9241 && salary <= 14840) {
    console.log(lvl3max * lvl3per);
}
else if (salary >= 14840 && salary <= 20620) {
    console.log(lvl4max * lvl4per);
}
else if (salary >= 20621 && salary <= 42910) {
    console.log(lvl5max * lvl5per);
}
else if (salary >= 42911 && salary <= 55270) {
    console.log(lvl6max * lvl6per);
}
else if (salary >= 55271) {
    console.log(lvl7 * lvl7per);
}
