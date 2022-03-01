var Me = {
    firstname: "Hadas",
    lastname: "Zabahon",
    address: "Beer sheva"
};
var friend1 = {
    firstname: "Sara",
    lastname: "Koletker",
    address: "Migdal haemek"
};
var friend2 = {
    firstname: "Moran",
    lastname: "Pinto",
    address: "Netivot"
};
var friend3 = {
    firstname: "Hodaya",
    lastname: "Zeharya",
    address: "Netivot"
};
var friend4 = {
    firstname: "Simcha",
    lastname: "Uzan",
    address: "Beer sheva"
};
var friendarr = [friend1, friend2, friend3, friend4];
function friends(arr) {
    var add = "";
    arr.forEach(function (elm) { return add += elm.address + ","; });
    return ("You have " + arr.length + " friends and they live in " + add);
}
console.log(friends(friendarr));
