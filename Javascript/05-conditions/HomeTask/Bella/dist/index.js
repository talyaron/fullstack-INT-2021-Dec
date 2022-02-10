// calculating volium of a radius
// var radius = 4;
// var volume = (4/3)* Math.PI * Math.pow(radius, 3);
// console.log('Volume of Sphere: '+volume.toFixed(2));
// var income: number = 4000;
// if (salary < 5500) {
//   console.log("You earn less than the minimum legal salary");
// } else if (salary >= 5500 && salary < 11800) {
//   console.log("You earn below avarage ");
// } else if (salary >= 11800 && salary < 35000) {
//   console.log("You earn more than the avarge salary");
// } else{
//     console.log('you earn more than 90% of the population')
// }
// if age is greater than 18, take 12% tax.
//if age is greate than 67, don;t take tax
// var age: number = 50;
// var salary = 100;
// if (age >= 18 && age <= 67) {
//   //if condition is true
//   salary = salary * 0.88;
// }
// console.log(salary);
// tax calculator
var salary = 19;
var taxFirstLevel = salary - (salary * 0.88);
if (salary > 0 && salary <= 6450) {
    taxFirstLevel;
    console.log("You pay 10% tax. your total tax amount is: ₪" + taxFirstLevel.toFixed(1) + " from ₪" + salary.toFixed() + " salary.");
}
else {
    console.log("you need to look for a new accountant");
}
