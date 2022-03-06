var shahar = {
    firstName: "Shahar",
    lastNmae: "Abu",
    address: "Harish",
    age: 24
};
var ofek = {
    firstName: "Ofek",
    lastNmae: "Sery",
    address: "Ramat-Gan",
    age: 28
};
var yam = {
    firstName: "Yam",
    lastNmae: "Rafaeli",
    address: "Natanya",
    age: 23
};
var rotem = {
    firstName: "Rotem",
    lastNmae: "Fishler",
    address: "Tel-Aviv",
    age: 23
};
var kobe = {
    firstName: "Kobe",
    lastNmae: "Font",
    address: "Eilat (myHomeTown)",
    age: 24
};
var friendsArr = [shahar, yam, ofek, rotem, kobe];
console.log(friendsArr);
function randomFriend(arr) {
    var add = "";
    arr.forEach(function (elm) { return add += elm.address + ","; });
    return ("You have " + arr.length + " friends and they live in " + add);
}
console.log(randomFriend(friendsArr));
