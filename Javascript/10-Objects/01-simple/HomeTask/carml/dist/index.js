var friendone = {
    name: "Paola",
    lastname: "Gay",
    age: 20,
    address: "paris, france",
    friends: []
};
var friendtwo = {
    name: "Csenge",
    lastname: "IDONTKNOW",
    age: 21,
    address: "via ormea 12 torino italy",
    friends: []
};
var friendthree = {
    name: "Hadar",
    lastname: "Hartzvi",
    age: 24,
    address: "jerusalem",
    friends: []
};
var friendfour = {
    name: "Maya",
    lastname: "Benbasat",
    age: 24,
    address: "israel",
    friends: []
};
var friendfive = {
    name: "Noa",
    lastname: "Smashimish",
    age: 23,
    address: "salzberg",
    friends: []
};
var me = {
    name: "carmel",
    lastname: "Bar",
    age: 23,
    address: "via ormea 12 torino italy",
    friends: [
        friendone,
        friendtwo,
        friendthree,
        friendfour,
        friendfive
    ]
};
function whereAreMyFriends(person) {
    var allAddress = "";
    person.friends.forEach(function (element) {
        allAddress += element.address + ", ";
    });
    if (person.friends.length == 1) {
        return "you have one friend and they live in " + allAddress;
    }
    else {
        return "you have " + person.friends.length + " friends and they live in " + allAddress;
    }
}
var hereTheyAre = whereAreMyFriends(me);
console.log(hereTheyAre);
function buildAFriend(name, lastname, age, address, friends) {
    var newfriend = {
        name: name,
        lastname: lastname,
        age: age,
        address: address,
        friends: friends
    };
    return newfriend;
}
var newname = window.prompt("who is this?");
var newlastname = window.prompt("who??");
var newage = window.prompt("and how old are they?");
var newaddress = window.prompt("what?? that old??? where do they live???");
var newfriends = [];
var newestfriend = buildAFriend(newname, newlastname, newage, newaddress, newfriends);
console.log(newestfriend);
