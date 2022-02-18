// ----'friend's array'------
var a = ["shahar", "yam", "gal", "rotem", "kobe", "hanan"];
for (var i = 0; i < a.length; i++) {
    console.log("welcome " + a[i]);
}
// ----'numbers array'-----
var b = [0, 1, 2, 3, 4, 6, 7, 8, 9, 5];
for (var i = 0; i < b.length; i++) {
    if (b[i] > 5) {
        console.log("the number " + b[i] + " is bigger then 5");
    }
    else if (b[i] == 5) {
        console.log("the number " + b[i] + " is equal to 5");
    }
    else {
        console.log("the number " + b[i] + " is smaller then 5");
    }
}
// ----3th array----
var c = ["fullstack", 78, "barca", "eilat", "%$%$", num];
for (var i = 0; i < c.length; i++) {
    console.log("the element " + c[i] + " is " + typeof c[i]);
    if (typeof c[i] == "function")
        console.log("function is " + c[i](4, 6));
}
function num(a, b, c) {
    return a + b;
}
// ----`average array`-----
var d = [2, 4, 8, 16, 32, 64, 128];
function roundDigits(number, numberOfDigits) {
    return Math.round(number * Math.pow(10, numberOfDigits)) / Math.pow(10, numberOfDigits);
}
function average(d) {
    var sum = 0;
    for (var i = 0; i < d.length; i++) {
        sum += d[i];
    }
    return sum / d.length;
}
console.log("the average number of the \"average array\" is " + (roundDigits(average(d), 4)));
