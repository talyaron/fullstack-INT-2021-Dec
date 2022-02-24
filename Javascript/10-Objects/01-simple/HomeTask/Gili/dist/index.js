// Friends Objects
var me = {
    firstName: "Gili",
    lastName: "Menahem",
    address: "Moshav Shafir"
};
var friend1 = {
    firstName: "Benjamin",
    lastName: "Kudlis",
    address: "Ashdod"
};
var friend2 = {
    firstName: "Roni",
    lastName: "Menahem",
    address: "Hertzlya"
};
var friend3 = {
    firstName: "Almog",
    lastName: "Karabelnik",
    address: "Ramat-Gan"
};
var friend4 = {
    firstName: "Sayfan",
    lastName: "Lissak",
    address: "Ramat-Gan"
};
// Friends Array
var friendArr = [friend1, friend2, friend3, friend4];
//Friends Counter Function
function friendCounter(arr) {
    var friendsAmount = arr.length;
    return friendsAmount;
}
// Friends Location extracter to new array
function friendsLocation(arr, key1) {
    var numbersByKeys = [];
    arr.forEach(function (element) {
        numbersByKeys.push(element[key1]);
    });
    return numbersByKeys;
}
// Getting spesific friends number
var friendsNum = friendCounter(friendArr);
// Getting spesific friends locations
var friendsLoc = friendsLocation(friendArr, "address");
// Log Outcome
console.log("You have " + friendsNum + " friends, and they live at: " + friendsLoc);
