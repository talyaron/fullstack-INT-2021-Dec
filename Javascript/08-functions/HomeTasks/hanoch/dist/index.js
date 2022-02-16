function tellfuture(JobTitle, GeoLocation, Partner, NumKids) {
    return ("I will be " + JobTitle + " in " + GeoLocation + " marrid to " + Partner + " with " + NumKids + " kids");
}
console.log(tellfuture("analyst", 'new york', 'stav', 3));
console.log(tellfuture("singer", 'jerusalem', 'nitzan', 4));
console.log(tellfuture("developer", 'rome', 'ruth', 5));
function dogage(Humanyears) {
    return Humanyears * 7;
}
console.log(dogage(3));
console.log(dogage(5));
console.log(dogage(7));
function supply(age, amount) {
    var bamba = age * amount * 365;
    return ("you will need " + bamba + " bamba until " + age + " age, " + amount + " times for a day");
}
console.log(supply(3, 3));
console.log(supply(84, 2));
console.log(supply(90, 1));
function circumference(radius) {
    var circle = radius * Math.PI;
    var area = Math.pow(radius, 2) * Math.PI;
    return ("the size of the circle is " + circle + " and the area is " + area);
}
console.log(circumference(5));
function tmperature(celsius) {
    var convert1 = celsius / 5 * 9 + 32;
    return ("the temp in ferenhiet is " + convert1);
}
console.log(tmperature(10));
function temperature1(ferenhiet) {
    var convert2 = ((ferenhiet - 32) * 5) / 9;
    return ("the temp in celsius is " + convert2);
}
console.log(temperature1(50));
