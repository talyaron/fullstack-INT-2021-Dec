var tax = 0;
var salary = 10000;
var lvl1max = 6450; // first level max salary
var lvl1per = 0.1; // first level percentage 10%
var lvl2min = 6451; // second level min salary 
var lvl2max = 9240; // second level max salary 
var lvl2dif = lvl2max - lvl2min;
var lvl2per = 0.14; // second level percentage 14%
var lvl3min = 9241; // third level min salary
var lvl3max = 14840; // third level max salary
var lvl3dif = lvl3max - lvl3min;
var lvl3per = 0.2; // third level percentage 20%
var lvl4min = 14841; // third level min salary
var lvl4max = 20620; // forth level max salary
var lvl4dif = lvl4max - lvl4min;
var lvl4per = 0.31; // forth level percentage 31%
var lvl5min = 20621; // fifth level min salary
var lvl5max = 42910; // fifth level max salary
var lvl5dif = lvl5max - lvl5min;
var lvl5per = 0.35; // fifth level percentage 35%
var lvl6min = 42911; // sixth level min salary
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
