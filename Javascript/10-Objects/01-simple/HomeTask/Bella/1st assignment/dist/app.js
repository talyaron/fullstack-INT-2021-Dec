// אוביקטים
// בנו אוביקט המתאר אתכם (שם, משפחה, מקום מגורים וכיוב׳)
// בתוך האוביקט, בנו מערך של חברים (רמז 1). כל אוביקט של חבר, צריך להיות מאותו סוג שלכם. השתמשו ב-interface כדי להבטיח זאת.
// בנו פונקציה שמקבלת אוביקט כזה, וכותבת ״you have X frinds and they live in address1, address2, address3 etc..
// אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).
var me = {
    name: "Bella",
    lastName: "Brail",
    age: 27,
    catLover: true,
    hobbies: "draw, listen to music, travel"
};
var Tomer = {
    name: "Tomer",
    lastName: "Ben Jonathan",
    age: 32,
    catLover: true,
    hobbies: "train, travel"
};
var Ofrit = {
    name: "Ofrit",
    lastName: "Assaf",
    age: 27,
    catLover: true,
    hobbies: "read books, listen to music, drink wine"
};
var Gur = {
    name: "Gur",
    lastName: "Yehuda",
    age: 28,
    catLover: false,
    hobbies: "travel, listen to music, cook"
};
var friends = [Tomer, Ofrit, Gur];
console.log(friends);
var myFriends = friends.map(function (elm) {
    return me + " have " + friends.indexOf + " frinds and they live in address1, address2, address3 etc";
});
