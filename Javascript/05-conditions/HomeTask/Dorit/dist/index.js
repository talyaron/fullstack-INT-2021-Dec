var stairs = [6450, 9240, 14840, 20620, 42910, 55270];
var percents = [0.90, 0.86, 0.80, 0.69, 0.65, 0.53, 0.50];
var salary = 60000;
//console.log('stairs', stairs);
//console.log('percents', percents);
//console.log(percents[0]);
var neto = 0;
var stair_no = 0;
var fullRate0 = stairs[0] * percents[0];
var fullRate1 = (stairs[1] - stairs[0]) * percents[1] + fullRate0;
var fullRate2 = (stairs[2] - stairs[1]) * percents[2] + fullRate1;
var fullRate3 = (stairs[3] - stairs[2]) * percents[3] + fullRate2;
var fullRate4 = (stairs[4] - stairs[3]) * percents[4] + fullRate3;
var fullRate5 = (stairs[5] - stairs[4]) * percents[5] + fullRate4;
var ind = 0;
var fullRate = [fullRate0, fullRate1, fullRate2, fullRate3, fullRate4, fullRate5];
console.log('fullRate:', fullRate);
if (salary <= stairs[0]) {
    stair_no = 0;
}
else if (salary <= stairs[1]) {
    stair_no = 1;
}
else if (salary <= stairs[2]) {
    stair_no = 2;
}
else if (salary <= stairs[3]) {
    stair_no = 3;
}
else if (salary <= stairs[4]) {
    stair_no = 4;
}
else if (salary <= stairs[5]) {
    stair_no = 5;
}
else {
    stair_no = 6;
}
//console.log('stair_no:',stair_no)
if (stair_no == 0) {
    neto = salary * percents[0];
    //console.log('percents0',percents[0]);
    //console.log('neto0:',neto);
}
else {
    ind = stair_no - 1;
    //console.log('ind:',ind);
    //console.log('fullRate:',fullRate[ind]);
    //console.log('percents of stair_no',percents[stair_no])
    neto = fullRate[ind] + (salary - stairs[ind]) * percents[stair_no];
}
console.log(salary);
console.log(neto);
