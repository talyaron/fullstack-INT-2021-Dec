//My friends
var Myfriends = ["Rula", "Abeer", "Rana"];
for (var i = 0; i < Myfriends.length; i++) {
    console.log(Myfriends[i]);
}
for (var i = 0; i < Myfriends.length; i++) {
    console.log("Hello dear" + Myfriends[i]);
}
//Number bigger than five
var morethan5 = [0, 4, 5, 11, -2, 9, 3, 15, -10, 10, 2, 7, 20];
for (var i = 0; i < morethan5.length; i++) {
    if (morethan5[i] > 5) {
        console.log(morethan5[i]);
    }
}
//type of the array
var multitypes = [0, "Hello", 12, "bye", 25, diverst];
function diverst(x, y, z) {
    return x * y * z;
}
for (var i = 0; i < multitypes.length; i++) {
    if (typeof multitypes[i] == "function") {
        console.log(multitypes[i](1, 2, 3));
    }
    else {
        console.log(typeof multitypes[i]);
    }
}
//Mean
var Mean = [1, 5, 60, 506, 99, 405, -300, 8004, 45, 231, 54, 123, 45];
var sum = 0;
for (var i = 0; i < Mean.length; i++) {
    sum += Mean[i];
}
console.log(sum);
var average = sum / Mean.length;
console.log(average);
