var Lital = {
    firstName: "Lital",
    lastName: "Cohen",
    address: "Petah-Tikva",
    age: "23",
    status: 0
};
var May = {
    firstName: "May",
    lastName: "Menashe",
    address: "Tel-Aviv",
    age: "23",
    status: 1
};
var Ben = {
    firstName: "Ben",
    lastName: "Silver",
    address: "Ashkelon",
    age: "24",
    status: 2
};
var Lou = {
    firstName: "Lou",
    lastName: "Dionas",
    address: "LA",
    age: "24",
    status: 3
};
var Ran = {
    firstName: "Ran",
    lastName: "Tily",
    address: "Bat-Yam",
    age: "24",
    status: 4
};
var arrayOfFriends = [May, Ben, Lou, Ran];
function sayMyFriends(arrayOfFriends, address) {
    arrayOfFriends.forEach(function (friend) {
        console.log(friend[address]);
    });
}
var myFriends = [May, Ben, Lou, Ran];
var count = myFriends.filter(function (item) { return item.status > 0; }).length;
// console.log(count)
console.log("You have " + count + " friends and they live in:");
sayMyFriends(myFriends, "address");
//challenge
var NewFriendPersonal = /** @class */ (function () {
    function NewFriendPersonal(firstName, lastName, address, age, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.age = age;
        this.status = status;
    }
    return NewFriendPersonal;
}());
function createNewFriend(firstName, lastName, address, age, status) {
    var newFriend = new NewFriendPersonal(firstName, lastName, address, age, status);
    return newFriend;
}
console.log(NewFriendPersonal);
var myNewFriend = createNewFriend("Ron", "Levi", "Jerusalem", "24", []);
console.log(myNewFriend);
