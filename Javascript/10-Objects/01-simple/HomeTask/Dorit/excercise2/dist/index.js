var Friend = /** @class */ (function () {
    function Friend(firstName, lastName, address, friends) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.friends = friends;
    }
    Friend.prototype.printFriends = function () {
        var array = [];
        this.friends.forEach(function (element) {
            array.push(element.address);
        });
        return array;
    };
    return Friend;
}());
var sara = new Friend("Sara", "Yogev", "Tel Aviv", [doritGuy, adi]);
var adi = new Friend("Adi", "Manor", "Jerisalem", [doritGuy, sara]);
var doritGuy = new Friend("Dorit", "Guy", "Hod hasharon", [sara, adi]);
console.log(sara.printFriends());
