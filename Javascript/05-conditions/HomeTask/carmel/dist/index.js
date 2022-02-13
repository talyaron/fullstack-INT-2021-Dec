var mySal = 500000;
var step1 = 77400;
var tax1 = 7740;
var step2 = 110880;
var tax2 = (((step2 - step1) / 100) * 14) + tax1;
console.log(tax2);
var step3 = 178080;
var tax3 = (((step3 - step2) / 100) * 20) + tax2;
console.log(tax3);
var step4 = 247440;
var tax4 = (((step4 - step3) / 100) * 31) + tax3;
console.log(tax4);
var step5 = 514920;
var tax5 = (((step4 - step3) / 100) * 35) + tax4;
console.log(tax5);
var step6 = 663240;
var tax6 = (((step5 - step4) / 100) * 47) + tax5;
console.log(tax6);
if (mySal <= step1) {
    console.log("your taxes are " + mySal / 10 + " shekels");
}
else if (mySal > step1 && mySal <= step2) {
    var myTax = ((mySal - step1) / 100) * 14 + tax1;
    console.log("your taxes are " + myTax + " shekels");
}
else if (mySal > step2 && mySal <= step3) {
    var myTax = ((mySal - step2) / 100) * 20 + tax2;
    console.log("your taxes are " + myTax + " shekels");
}
else if (mySal > step3 && mySal <= step4) {
    var myTax = ((mySal - step3) / 100) * 31 + tax3;
    console.log("your taxes are " + myTax + " shekels");
}
else if (mySal > step4 && mySal <= step5) {
    var myTax = ((mySal - step4) / 100) * 35 + tax4;
    console.log("your taxes are " + myTax + " shekels");
}
else if (mySal > step5 && mySal <= step6) {
    var myTax = ((mySal - step5) / 100) * 47 + tax5;
    console.log("your taxes are " + myTax + " shekels");
}
else if (mySal > step6) {
    var myTax = ((mySal - step6) / 100) * 50 + tax6;
    console.log("your taxes are " + myTax + " shekels");
}
// var salary: number=43000;
// var tax: number=salary*0.1;
// var gap1: number=salary-6450;
// var reduce1: number=gap1*0.1;
// var tax1: number= gap1*0.14-reduce1;
// var finish1: number=tax+tax1;
// var gap2: number=salary-9240;
// var reduce2: number=gap2*0.14;
// var tax2: number= gap2*0.2-reduce2;
// var finish2: number=tax+tax1+tax2;
// var gap3: number=salary-14840;
// var reduce3: number=gap3*0.2;
// var tax3: number= gap3*0.31-reduce3;
// var finish3: number=tax+tax1+tax2+tax3;
// var gap4: number=salary-20620;
// var reduce4: number=gap4*0.31;
// var tax4: number= gap4*0.35-reduce4;
// var finish4: number=tax+tax1+tax2+tax3+tax4;
// var gap5: number=salary-42910;
// var reduce5: number=gap5*0.35;
// var tax5: number= gap5*0.47-reduce5;
// var finish5: number=tax+tax1+tax2+tax3+tax4+tax5;
// var gap6: number=salary-55270;
// var reduce6: number=gap5*0.47;
// var tax6: number= gap5*0.5-reduce5;
// var finish6: number=tax+tax1+tax2+tax3+tax4+tax5+tax6
// if (salary>0 && salary<=6450){
//     console.log(tax);
// }
// else if (salary>=6451 && salary<=9240){
//     console.log(finish1)
// }
// else if (salary>=9241 && salary<=14840){
//     console.log(finish2)
// }
// else if (salary>=14841 && salary<=20620){
//     console.log(finish3)
// }
// else if (salary>=20621 && salary<=42910){
//     console.log(finish4)
// }
// else if (salary>=42911 && salary<=55270){
//     console.log(finish5)
// }
// else if (salary>=55271){
//     console.log(finish6)
// }
