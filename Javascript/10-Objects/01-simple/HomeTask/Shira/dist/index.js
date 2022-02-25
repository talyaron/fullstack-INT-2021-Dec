// Friends
var hodaya = {
    name: "Hodaya",
    lastName: "Cohen",
    age: 20,
    address: "Jerusalem",
    hobby: "Draw",
    friends: []
};
var tohar = {
    name: "Tohar",
    lastName: "Gold",
    age: 22,
    address: "Afula",
    hobby: "Sing",
    friends: []
};
var shilat = {
    name: "Shilat",
    lastName: "Ben Shitrit",
    age: 20,
    address: "Tel-Aviv",
    hobby: "Sport",
    friends: [hodaya, tohar]
};
// Me
var shira = {
    name: "Shira",
    lastName: "Amar",
    age: 20.5,
    address: "Netivot",
    hobby: "Music",
    friends: [hodaya, tohar, shilat]
};
function friendsAddresses(friends) {
    return friends.map(function (friend) { return friend.address; });
}
function myFriends(person) {
    console.log("You have " + person.friends.length + " friends , and they live in: " + friendsAddresses(person.friends));
}
myFriends(shira);
// Challenge:
function createPerson(name, lastName, age, address, hobby, friends) {
    var newPerson = {
        name: name,
        lastName: lastName,
        age: age,
        address: address,
        hobby: hobby,
        friends: friends
    };
    return newPerson;
}
var shira_challenge = createPerson("Noy", "Levi", 21.5, "Tel-Aviv", "Music", [hodaya, shilat]);
myFriends(shira_challenge);
// Create using class
var PersonClass = /** @class */ (function () {
    function PersonClass(name, lastName, age, address, hobby, friends) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.hobby = hobby;
        this.friends = friends;
    }
    return PersonClass;
}());
var personIns = new PersonClass("Noy", "Levi", 21.5, "Tel-Aviv", "Music", [hodaya, shilat]);
personIns.friends.push(shira);
myFriends(personIns);
