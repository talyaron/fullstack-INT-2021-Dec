// tax calculature
var salary = 43000;
var tax = salary * 0.1;
var gap1 = salary - 6450;
var reduce1 = gap1 * 0.1;
var tax1 = gap1 * 0.14 - reduce1;
var finish1 = tax + tax1;
var gap2 = salary - 9240;
var reduce2 = gap2 * 0.14;
var tax2 = gap2 * 0.2 - reduce2;
var finish2 = tax + tax1 + tax2;
var gap3 = salary - 14840;
var reduce3 = gap3 * 0.2;
var tax3 = gap3 * 0.31 - reduce3;
var finish3 = tax + tax1 + tax2 + tax3;
var gap4 = salary - 20620;
var reduce4 = gap4 * 0.31;
var tax4 = gap4 * 0.35 - reduce4;
var finish4 = tax + tax1 + tax2 + tax3 + tax4;
var gap5 = salary - 42910;
var reduce5 = gap5 * 0.35;
var tax5 = gap5 * 0.47 - reduce5;
var finish5 = tax + tax1 + tax2 + tax3 + tax4 + tax5;
var gap6 = salary - 55270;
var reduce6 = gap5 * 0.47;
var tax6 = gap5 * 0.5 - reduce5;
var finish6 = tax + tax1 + tax2 + tax3 + tax4 + tax5 + tax6;
if (salary > 0 && salary <= 6450) {
    console.log(tax);
}
else if (salary >= 6451 && salary <= 9240) {
    console.log(finish1);
}
else if (salary >= 9241 && salary <= 14840) {
    console.log(finish2);
}
else if (salary >= 14841 && salary <= 20620) {
    console.log(finish3);
}
else if (salary >= 20621 && salary <= 42910) {
    console.log(finish4);
}
else if (salary >= 42911 && salary <= 55270) {
    console.log(finish5);
}
else if (salary >= 55271) {
    console.log(finish6);
}
