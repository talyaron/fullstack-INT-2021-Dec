;
var friendOne = {
    Name: "roy",
    LastName: "felhiemer",
    Address: "tel-aviv"
};
var friendTwo = {
    Name: 'yossi',
    LastName: 'sillam',
    Address: 'natanya'
};
var friendThree = {
    Name: 'rachel',
    LastName: 'levi',
    Address: 'modiin'
};
var friends = [friendOne, friendTwo, friendThree];
var FriendsDeatails = function (friends, a) {
    var b = " ";
    friends.forEach(function (elm) { return b += elm.Address + " "; });
    return "you have " + a + " friends and they live in " + b;
};
console.log(FriendsDeatails(friends, friends.length));
// challenge
//אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).
