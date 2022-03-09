var hanoch = {
    name: "hanoch",
    address: "jerusalem",
    friends: ["eli", "moshe", "chaim"]
};
var eli = {
    fname: "eli",
    address: "charish"
};
var moshe = {
    fname: "moshe",
    address: "jerusalem"
};
var chaim = {
    fname: "chaim",
    address: "heifa"
};
function lOfriends(count, adreses, key3) {
    adreses.map(function (k) {
        console.log("i have " + count + " friends and they leave in " + k[key3]);
    });
}
var c = hanoch.friends.length;
console.log(c);
var f = [eli, moshe, chaim];
console.log(f);
lOfriends(c, f, 'address');
