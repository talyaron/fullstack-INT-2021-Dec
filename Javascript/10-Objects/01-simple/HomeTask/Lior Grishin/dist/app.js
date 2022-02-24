var daniel = {
    firstName: 'Daniel', lastName: 'Oronsi', city: 'Ashkelon', address: 'Gan-Havradim'
};
var david = {
    firstName: 'David', lastName: 'Martinenko', city: 'Ashkelon', address: 'Afridar'
};
var michael = {
    firstName: 'Michael', lastName: 'Livshits', city: 'Ashkelon', address: 'Eli-Cohen'
};
var maor = {
    firstName: 'Maor', lastName: 'Ofir', city: 'Ashkelon', address: 'Neot-Ashkelon'
};
var roie = {
    firstName: 'Roie', lastName: 'Goldstien', city: 'Ashkelon', address: 'Barnea'
};
var me = {
    firstName: 'Lior',
    lastName: 'Grishin',
    city: 'Ashkelon',
    address: 'Neot-Ashkelon',
    friends: [daniel, david, michael, maor, roie]
};
// This function return the amount of friends object have
var friendsCount = function (profileObject) {
    return (profileObject.friends.length);
};
// This function returns an array of addresses of my friends
var friendsAddresses = function (profileObject) {
    var friendsArray = profileObject.friends;
    var friendsAddressesArray = [];
    for (var i = 0; i < friendsArray.length; i++) {
        friendsAddressesArray.push(friendsArray[i].address);
    }
    return (friendsAddressesArray);
};
// This function prints how many friends do I have and where do they live
var printMyFriendsInformation = function (profileObject) {
    console.log("You have " + friendsCount(profileObject) + " friends they live in " + friendsAddresses(profileObject));
};
