var adir = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Jerusalem",
    friends: [sara, aviv]
};
var mordechai = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Givataim",
    friends: [adir, galit]
};
var aviv = {
    firstName: "Aviv",
    lastName: "Gordon",
    address: "Ramat Gan",
    friends: [adir, galit]
};
var galit = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Tel Aviv",
    friends: [sara, adir]
};
var sara = {
    firstName: "Sara",
    lastName: "Yogev",
    address: "Kfar Saba",
    friends: [adir, galit]
};
var doritGuy = {
    firstName: "Dorit",
    lastName: "Guy",
    address: "Hod Hasharon",
    friends: [sara, aviv, mordechai]
};
function findFriends(myFriend) {
    var arrayFr = [];
    myFriend["friends"].forEach(function (element) {
        arrayFr.push(element["address"]);
    });
    return arrayFr;
}
var noFriends = findFriends(doritGuy).length;
console.log("you have " + noFriends + " friends at " + findFriends(doritGuy));
