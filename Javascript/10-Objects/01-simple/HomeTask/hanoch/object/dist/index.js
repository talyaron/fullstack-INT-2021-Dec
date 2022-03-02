var hanoch = {
    name: "hanoch",
    address: "jerusalem",
    friends: ["eli", "moshe", "chaim"]
};
var eli = {
    name: "eli",
    address: "charish"
};
var moshe = {
    name: "moshe",
    address: "jerusalem"
};
var chaim = {
    name: "chaim",
    address: "heifa"
};
function lOfriends(count, friends, key3) {
    var b = "";
    friends.map(function (k) {
        b = b + " " + k[key3];
    });
    return ("i have " + count + " friends and they leave in " + b);
}
var countOfFriends = hanoch.friends.length;
console.log(countOfFriends);
var arrayOfFriends = [eli, moshe, chaim];
console.log(arrayOfFriends);
var friendsAddresses = lOfriends(countOfFriends, arrayOfFriends, 'address');
console.log(friendsAddresses);
