var Dudu = {
    name: 'Dudu',
    lastName: 'Ezra',
    city: 'Ashqelon'
};
var Eli = {
    name: 'Eli',
    lastName: 'Maman',
    city: 'Ashdod'
};
var David = {
    name: 'David',
    lastName: 'Ben david',
    city: 'Holon'
};
var juda = {
    name: 'Juda',
    lastName: 'Golan',
    city: 'Azor',
    friends: [Dudu, Eli, David]
};
function yourFriends(name) {
    console.log("You have " + juda.friends.length + " friends and they live in " + Dudu.city + ", " + Eli.city + " and " + David.city);
}
yourFriends(juda);
