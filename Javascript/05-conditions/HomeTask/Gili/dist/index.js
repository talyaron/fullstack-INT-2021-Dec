var salary = 20620; //define salary for calculation <-- INPUT HERE
var afterTax = 0; // after tax
var taxTaken = 0; // tax taken
var taxedSalary1 = 0; // var for calculation
//if the salary is below 6450 take 10% taxes
if (salary <= 6450) {
    afterTax = salary * 0.9;
    taxTaken = salary * 0.1;
}
// if the salary is more than 6450 but less than 9240 take
// 10% from first 6450 and 14% from rest
else if (salary > 6450 && salary <= 9240) {
    taxedSalary1 = salary - 6450;
    afterTax = (taxedSalary1 * 0.86) + 5805;
    taxTaken = (taxedSalary1 * 0.14) + 645;
}
// if the salary is more than 9240 but less than 14840 take
// 10% from first 6450 and 14% from between 6450 and 9240
// and 20% from rest
else if (salary > 9240 && salary <= 14840) {
    taxedSalary1 = salary - 9240;
    afterTax = (taxedSalary1 * 0.8) + 8204.4;
    taxTaken = (taxedSalary1 * 0.2) + 1035.6;
}
// if the salary is more than 14840 but less than 20620 take
// 10% from first 6450 and 14% from between 6450 and 9240
// and 20% from between 9240 and 14840 and 31% from rest
else if (salary > 14840 && salary <= 20620) {
    taxedSalary1 = salary - 14840;
    afterTax = (taxedSalary1 * 0.69) + 12684.4;
    taxTaken = (taxedSalary1 * 0.31) + 2155.6;
}
// if the salary is more than 20620 but less than 42910 take
// 10% from first 6450 and 14% from between 6450 and 9240
// and 20% from between 9240 and 14840 and 31% from between 14840 and 20620
// and 35% from rest
else if (salary > 20620 && salary <= 42910) {
    taxedSalary1 = salary - 20620;
    afterTax = (taxedSalary1 * 0.65) + 16672.6;
    taxTaken = (taxedSalary1 * 0.35) + 3946.4;
}
// if the salary is more than 42910 but less than 55270 take
// 10% from first 6450 and 14% from between 6450 and 9240
// and 20% from between 9240 and 14840 and 31% from between 14840 and 20620
// and 35% from between 20620 and 42910 and 47% from rest
else if (salary > 42910 && salary <= 55270) {
    taxedSalary1 = salary - 42910;
    afterTax = (taxedSalary1 * 0.53) + 31161.1;
    taxTaken = (taxedSalary1 * 0.47) + 11747.9;
}
// if the salary is more than 55270 take
// 10% from first 6450 and 14% from between 6450 and 9240
// and 20% from between 9240 and 14840 and 31% from between 14840 and 20620
// and 35% from between 20620 and 42910 and 47% from between 42910 and 55270
// and take 50% from rest 
else {
    taxedSalary1 = salary - 55270;
    afterTax = (taxedSalary1 * 0.50) + 37711.9;
    taxTaken = (taxedSalary1 * 0.50) + 17556.9;
}
console.log("Your salary after tax is " + afterTax + " NIS and the amount of taxes taken is " + taxTaken + " NIS");
