var me = {
    name: "Bella",
    lastName: "Brail",
    age: 27,
    catLover: true,
    hobbies: "draw, listen to music, travel"
};
var Tomer = {
    name: "Tomer",
    lastName: "Ben Jonathan",
    age: 32,
    catLover: true,
    hobbies: "sports, travel"
};
var Ofrit = {
    name: "Ofrit",
    lastName: "Assaf",
    age: 27,
    catLover: true,
    hobbies: "read books, listen to music, drink wine"
};
var Gur = {
    name: "Gur",
    lastName: "Yehuda",
    age: 28,
    catLover: true,
    hobbies: "travel, listen to music, cook"
};
var friends = [Tomer, Ofrit, Gur];
function countFriends(friends) {
    var allFriends = friends.length;
    return allFriends;
}
function friendsAge(a, b) {
    var ages = [];
    a.forEach(function (element) {
        ages.push(element[b]);
    });
    return ages;
}
var friendsByNum = countFriends(friends);
console.log(friendsByNum);
var age = friendsAge(friends, "age");
// Log Outcome
console.log("I have " + friendsByNum + " friends and their ages are " + age);
