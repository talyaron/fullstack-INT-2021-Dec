// אוביקטים
// בנו אוביקט המתאר אתכם (שם, משפחה, מקום מגורים וכיוב׳)
// בתוך האוביקט, בנו מערך של חברים (רמז 1). כל אוביקט של חבר, צריך להיות מאותו סוג שלכם. השתמשו ב-interface כדי להבטיח זאת.
// בנו פונקציה שמקבלת אוביקט כזה, וכותבת ״you have X frinds and they live in address1, address2, address3 etc..
// אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).
var me = {
    name: "meir duvid",
    lastName: "krykun",
    address: "kriat malaji",
    age: 45
};
var friend1 = {
    name: "ofer",
    lastName: "kohan",
    address: "netania",
    age: 42
};
var friend2 = {
    name: "shlomo",
    lastName: "gatenio",
    address: "Beitar",
    age: 41
};
var friend3 = {
    name: "meir shlomo",
    lastName: "kreinin",
    address: "petaj tikva",
    age: 45
};
var friend4 = {
    name: "ari",
    lastName: "avad",
    address: "raanana",
    age: 40
};
var friendsArr = [friend1, friend2, friend3, friend4];
function myFriends(friendsArr) {
    var add = "";
    friendsArr.forEach(function (elm) { return add += " " + elm.address + " "; });
    return ("You have " + friendsArr.length + " friends and they live at " + add);
}
console.log(myFriends(friendsArr));
