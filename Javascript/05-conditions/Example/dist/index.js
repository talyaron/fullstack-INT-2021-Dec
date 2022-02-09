// if age is greater than 18, take 12% tax.
//if age is greate than 67, don;t take tax
var age = 50;
var salary = 100;
if (age >= 18 && age <= 67) {
    //if condition is true
    salary = salary * 0.88;
}
console.log(salary);
// truth table
// AND (&&) is true if both conditions are true
if (true && true) {
    console.log("true && true is true");
}
if (true && false) {
    //false
    console.log("this will never work!");
}
//OR (||) if at least one conditions is true, then true
if (false || true) {
    console.log("false || true is true");
}
if (false || false) {
    console.log("this will never work!");
}
if (true || true) {
    console.log("true || true is true");
}
// would water will boil?
//in sea level tempreture of boiling is about 100c
var temperature = 99;
var persure = 0.4; //if smaller than 0.5 it will boil
if (temperature >= 100 || persure <= 0.5) {
    console.log('the water will boil');
}
else {
    console.log('the water will not boil');
}
