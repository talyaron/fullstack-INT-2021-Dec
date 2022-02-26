var myFriends = /** @class */ (function () {
    function myFriends(firstName, lastName, address, age, friends) {
        this.firstName = firstName;
        this.lastNmae = lastName;
        this.address = address;
        this.age = age;
        this.friends = friends;
    }
    myFriends.prototype.MyArr = function () {
        var arr = [];
        this.friends.forEach(function (elm) {
            arr.push(elm.address);
        });
        return arr;
    };
    return myFriends;
}());
var Shahar = new myFriends("Shahar", "Abu", "Harish", 24, []);
var Yam = new myFriends("Yam", "Rafaeli", "Natanya", 23, [Shahar]);
var Ofek = new myFriends("Ofek", "Sery", "Ramat-Gan", 28, [Shahar, Yam]);
var Rotem = new myFriends("Rotem", "Fishler", "Tel-Aviv", 23, [Shahar, Yam, Ofek]);
var Kobe = new myFriends("Kobe", "Font", "Eilat", 24, [Shahar, Yam, Ofek, Rotem]);
Shahar['friends'].push(Shahar, Yam, Ofek, Rotem, Kobe);
console.log(Shahar.MyArr());
// console.log (`You have ${} friends and they live in ${}`)
