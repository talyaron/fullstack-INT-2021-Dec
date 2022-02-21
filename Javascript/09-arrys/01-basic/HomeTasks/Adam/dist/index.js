//  Task N.1
var friends = ["Shai", "Ben", "Alma", "Ori"];
for (var i = 0; i < friends.length; i++) {
    console.log("Welcome " + friends[i] + "!");
}
//Task N.2
var numArray = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];
for (var K = 0; K < numArray.length; K++) {
    if (numArray[K] > 5) {
        console.log("The Number " + numArray[K] + " Is Bigger Than 5");
    }
}
//Task N.3
var typeofArray = ["messi", 10, 30, "kadima"];
for (var v = 0; v < typeofArray.length; v++) {
    console.log(" " + typeofArray[v] + " typeof is " + typeof typeofArray[v]);
}
//Task N.4
var AvgArray = [2, 5, 6, 8, 12, 20];
function AllDig(number, NumOfDig) {
    return Math.round(number * Math.pow(10, NumOfDig)) / Math.pow(10, NumOfDig);
}
function Avg(AvgArray) {
    var num = 0;
    for (var i = 0; i < AvgArray.length; i++) {
        num += AvgArray[i];
    }
    return num / AvgArray.length;
}
console.log("the average number between (2,5,6,8,12,20) is " + (AllDig(Avg(AvgArray), 1)));
