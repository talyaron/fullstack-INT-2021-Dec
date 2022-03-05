var a = ["yair", "avia", "iftach", "rebbeca"];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
//task 2
for (var i = 0; i < a.length; i++) {
    console.log("welcome " + a[i]);
}
//task 3
var b = [1, 7, 2, 6, 3, 7, 4, 8, 5, 9];
for (var i = 0; i < b.length; i++) {
    if (b[i] > 5) {
        console.log(b[i] + " is bigger than five and it's the " + i + " number of the array");
    }
}
//task 4
var c = ["y", 3, multy, "z", 5, "r"];
function multy(v, k) {
    return v * k;
    console.log(v * k);
}
function div(v, k) {
    return v / k;
    console.log(v / k);
}
for (var i = 0; i < c.length; i++) {
    console.log(typeof c[i]);
    if (typeof c[i] == "function") {
        console.log(multy(10, 5));
    }
}
//task 5
var gamesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var gamesNumber = gamesData.length;
var sum = 0;
function average(sum, gamesNumber) {
    for (var i = 0; i < gamesData.length; i++) {
        sum += gamesData[i];
    }
    return (sum / gamesNumber);
}
console.log(average(sum, gamesNumber));
