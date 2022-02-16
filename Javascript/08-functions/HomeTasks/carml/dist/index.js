function FortuneTeller(childs, partner, location, job) {
    return "you will live at " + location + ", with your lover, " + partner + " and your " + childs + " children, and you will work as a " + job;
}
console.log(FortuneTeller(2, "Paola", "Paris", "Dancer"));
console.log(FortuneTeller(3, "Tom", "Tel Aviv", "Artist"));
console.log(FortuneTeller(6, "Mike", "Los Angels", "Banker"));
function PuppyAge(age) {
    var hage = age * 7;
    return "your puppy is " + hage + " in dog years!";
}
console.log(PuppyAge(4));
console.log(PuppyAge(20));
console.log(PuppyAge(13));
function LifeSupply(amount, age, snack) {
    var supply = (120 - age) * amount * 365;
    return "you will need " + supply + " units of " + snack + ", in order to have a lifetime supply until age 120";
}
console.log(LifeSupply(1, 29, "oreos"));
console.log(LifeSupply(12, 12, "gummy bears"));
console.log(LifeSupply(3, 87, "cheese"));
function circleArea(radius, measuermant) {
    var area = radius * radius * 3.141592;
    return "the circle has an area of " + area + " " + measuermant + " squered";
}
console.log(circleArea(33, "cm"));
console.log(circleArea(3, "meters"));
console.log(circleArea(14, "miles"));
function circleCircumference(radius, measuermant) {
    var Cir = radius * 2 * 3.141592;
    return "the circle has a circumference of " + Cir + " " + measuermant;
}
console.log(circleArea(33, "cm"));
console.log(circleArea(3, "meters"));
console.log(circleArea(14, "miles"));
function celToFar(degrees) {
    var cel = degrees;
    var far = ((cel / 5) * 9) + 32;
    return "it is " + degrees + " in Celsius and " + far + "in Fahrenheit";
}
console.log(celToFar(23));
console.log(celToFar(27));
console.log(celToFar(33));
function farToCel(degrees) {
    var far = degrees;
    var cel = ((far - 32) * 5) / 9;
    return "it is " + degrees + " in Fahrenheit and " + cel + "in Celsius";
}
console.log(farToCel(56));
console.log(farToCel(72));
console.log(farToCel(49));
