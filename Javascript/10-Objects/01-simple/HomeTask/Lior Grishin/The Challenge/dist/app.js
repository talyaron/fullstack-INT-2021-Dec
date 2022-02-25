var Profile = /** @class */ (function () {
    function Profile(firstName, lastName, city, address, friends) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.address = address;
        this.friends = friends;
    }
    return Profile;
}());
// This function creates a new Object with the class Profile
function createProfileObject(firstName, lastName, city, address, friends) {
    var newProfile = new Profile(firstName, lastName, city, address, friends);
    return newProfile;
}
// This function returns array of adresses of the objects the object have
function friendsAddresses(userProfile) {
    return userProfile.map(function (friendAdd) { return friendAdd.address; });
}
// This function prints the information about object's friends
// 1. How many friends the object have
// 2. Where do the friends live
function printFriendsInformation(userProfile) {
    console.log("You have " + userProfile.friends.length + " friends and they live in " + friendsAddresses(userProfile.friends));
}
var daniel = createProfileObject('Daniel', 'Oronsi', 'Ashkelon', 'Gan-Havradim', []);
var roie = createProfileObject('Roie', 'Goldstien', 'Ashkelon', 'Barnea', [daniel]);
var michael = createProfileObject('Micheal', 'Livshits', 'Ashkelon', 'Eli-Cohen', [daniel, roie]);
var david = createProfileObject('David', 'Martinenko', 'Ashkelon', 'Afridar', [daniel, roie, michael]);
var lior = createProfileObject('Lior', 'Grishin', 'Ashkelon', 'Neot-Ashkelon', [daniel, roie, michael, david]);
