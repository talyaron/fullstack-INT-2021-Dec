// בנו אוביקט המתאר אתכם (שם, משפחה, מקום מגורים וכיוב׳)
// בתוך האוביקט, בנו מערך של חברים (רמז 1). כל אוביקט של חבר, צריך להיות מאותו סוג שלכם. השתמשו ב-interface כדי להבטיח זאת.
// בנו פונקציה שמקבלת אוביקט כזה, וכותבת ״you have X frinds and they live in address1, address2, address3 etc..
// אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט)
var friends = [
    {
        firstName: "Liat",
        lastName: "Azaria",
        address: "Nahariya",
        age: 31
    },
    {
        firstName: "Gal",
        lastName: "Klein",
        address: "Haifa",
        age: 28
    },
    {
        firstName: "Eden",
        lastName: "Kakoun",
        address: "Eilat",
        age: 23
    },
    {
        firstName: "Ben",
        lastName: "Hazut",
        address: "Netanya",
        age: 29
    },
    {
        firstName: "Ya'akov",
        lastName: "Shalom",
        address: "Akko",
        age: 36
    },
];
function print(arr) {
    var temp = '';
    arr.forEach(function (elm) { return temp += elm.address + " "; });
    return ("you have " + arr.length + " friends and they live in " + temp);
}
console.log(print(friends));
// challange - create a function that creates a new object
