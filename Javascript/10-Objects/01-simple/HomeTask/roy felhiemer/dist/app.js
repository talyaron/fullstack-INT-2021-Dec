// challenge
//אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).
var PD = /** @class */ (function () {
    function PD(firstName, lastName, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    return PD;
}());
var friendOne = new PD("roy", "felhiemer", "Tel-Aviv");
var friendTwo = new PD("ari", "man", "LA");
var friendThree = new PD("lev", "ari", "Holon");
var friends = [friendOne, friendTwo, friendThree];
var FriendsDeatails = function (friends) {
    var b = " ";
    friends.forEach(function (elm) { return b += elm.address + " "; });
    return "you have " + friends.length + " friends and they live in " + b;
};
console.log(FriendsDeatails(friends));
