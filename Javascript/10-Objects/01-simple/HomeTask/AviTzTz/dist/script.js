;
var avi = {
    name: 'Avi',
    lastName: 'Tsasashvili',
    address: 'Beer-Sheba',
    age: 28
};
var shoham = {
    name: 'Shoham',
    lastName: 'Hania',
    address: 'Haifa',
    age: 27
};
var aviel = {
    name: 'Aviel',
    lastName: 'Avitan',
    address: 'Eilat',
    age: 26
};
var nati = {
    name: 'Nati',
    lastName: 'Benzaki',
    address: 'Beer-Sheba',
    age: 29
};
var alon = {
    name: 'Alon',
    lastName: 'Shnider',
    address: 'Arad',
    age: 26
};
var friend = {
    friendsName: [shoham.name, aviel.name, nati.name, alon.name],
    friendsLastName: [shoham.lastName, aviel.lastName, nati.lastName, alon.lastName],
    friendsAddress: [shoham.address, aviel.address, nati.address, alon.address],
    friendsAge: [shoham.age, aviel.age, nati.age, alon.age]
};
function getFriends(arrayOfFriends) {
    return "You have " + arrayOfFriends.length + " and they live in " + arrayOfFriends;
}
;
console.log(getFriends(friend['friendsAddress']));
