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
var sarit = new Friend("Sara", "Yogev", "Tel Aviv", []);
var adi = new Friend("Adi", "Manor", "Jerisalem", [sarit]);
var dorit = new Friend("Dorit", "Guy", "Hod hasharon", [sarit, adi]);
var yaffa = new Friend("Yaffa", "gafu", "Ramat Hasharon", [sarit, adi, dorit]);
var juda = new Friend("Juda", "Yaakobi", "Herzlia", [sarit, adi, dorit, yaffa]);
sarit['friends'].push(adi, dorit);
console.log(sarit.printFriends());
