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
function lOfriends(count, adreses, key3) {
    var b = "";
    adreses.map(function (k) {
        b = b + " " + k[key3];
    });
    console.log("i have " + count + " friends and they leave in " + b);
}
var c = hanoch.friends.length;
console.log(c);
var f = [eli, moshe, chaim];
console.log(f);
lOfriends(c, f, 'address');
