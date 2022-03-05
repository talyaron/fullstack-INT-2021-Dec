var Hodaya = {
    firstName: "Hodaya",
    lastName: "Cohen",
    address: "Petach Tikva",
    age: 18,
    status: 0
};
var Shlomi = {
    firstName: "Shlomi",
    lastName: "Levi",
    address: "Bet Shemesh",
    age: 24,
    status: 1
};
var Noam = {
    firstName: "Noam",
    lastName: "Yechezkel",
    address: "Tel Aviv",
    age: 30,
    status: 2
};
var Michal = {
    firstName: "Michal",
    lastName: "David",
    address: "Tveria",
    age: 56,
    status: 3
};
var allMyfriends = [Shlomi, Noam, Michal];
function sayMyFriend(allMyfriends, address) {
    allMyfriends.forEach(function (friends) {
        console.log(friends.address);
    });
}
var myFriendS = [Shlomi, Noam, Michal];
var count = myFriendS.filter(function (item) { return item.status > 0; }).length;
console.log("You have " + count + " friends and they live in:");
sayMyFriend(allMyfriends, "address");
