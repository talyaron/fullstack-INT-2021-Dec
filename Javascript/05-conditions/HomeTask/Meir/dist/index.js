var basictax = 0;
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
var lvl17 = 55270;
var lvl7per = 0.5;
var salary = undefined;
if (salary = lvl1max) {
    console.log(6450 * lvl1per);
}
if (salary >= 6451 && salary <= 9240) {
    console.log(lvl2max * lvl2per + (salary - lvl2max) * lvl2per);
}
