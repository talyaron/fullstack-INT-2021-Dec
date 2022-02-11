var salary = 7700;
var tax = salary * 0.10;
var paar = salary - 6450;
var tax1 = paar * 0.14;
var add = tax + tax1;
var paar1 = salary - 9240;
var tax2 = paar1 * 0.2;
var add1 = tax + tax1 + tax2;
var paar2 = salary - 14840;
var tax3 = paar2 * 0.31;
var add2 = tax + tax1 + tax2 + tax3;
var paar3 = salary - 20620;
var tax4 = paar3 * 0.35;
var add3 = tax + tax1 + tax2 + tax3 + tax4;
var paar4 = salary - 42910;
var tax5 = paar4 * 0.47;
var add4 = tax + tax1 + tax2 + tax3 + tax4 + tax5;
var paar5 = salary - 55270;
var tax6 = paar5 * 0.5;
var add5 = tax + tax1 + tax2 + tax3 + tax4 + tax5 + tax6;
if (salary > 0 && salary <= 6450) {
    console.log(tax);
}
else if (salary >= 6451 && salary <= 9240) {
    console.log(add);
}
else if (salary >= 9241 && salary <= 14840) {
    console.log(add1);
}
else if (salary >= 14841 && salary <= 20620) {
    console.log(add2);
}
else if (salary >= 20621 && salary <= 42910) {
    console.log(add3);
}
else if (salary >= 42911 && salary <= 55270) {
    console.log(add4);
}
else if (salary >= 55271) {
    console.log(add5);
}
