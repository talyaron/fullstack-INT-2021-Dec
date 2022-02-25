var adir = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Jerusalem",
    friends: []
};
var mordechai = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Givataim",
    friends: []
};
var aviv = {
    firstName: "Aviv",
    lastName: "Gordon",
    address: "Ramat Gan",
    friends: []
};
var galit = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Tel Aviv",
    friends: []
};
var sara = {
    firstName: "Sara",
    lastName: "Yogev",
    address: "Kfar Saba",
    friends: []
};
var doritGuy = {
    firstName: "Dorit",
    lastName: "Guy",
    address: "Hod Hasharon",
    friends: []
};
function makeFriends(name, friends) {
}
//the function gets a Friend and returns the addresses of his friends as an array
function findFriends(myFriend) {
    var arrayFr = [];
    //the Friend we got as element has an array of friends and every friend in the array has an address
    //we push to the array named arrayFr only the address of every friend
    myFriend["friends"].forEach(function (element) {
        arrayFr.push(element["address"]);
    });
    return arrayFr;
}
var noFriends = findFriends(galit).length; //number of friends = length of the array in return
console.log("you have " + noFriends + " friends at " + findFriends(galit));
