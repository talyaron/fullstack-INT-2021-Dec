var yarden = {
    name: "Yarden",
    age: 25,
    hobby: "Running"
};
var eyal = {
    name: "Eyal",
    age: 25,
    hobby: "Fishing"
};
var michal = {
    name: "Michal",
    age: 23,
    hobby: "Laphing"
};
var myFriends = {};
var me = {
    name: "Raanan",
    age: 26,
    hobby: "Diving",
    friends: [yarden, eyal, michal]
};
//Function to return amount of friends
var friendsAmount = function (profileObject) {
    return (profileObject.friends.length);
};
//Function to return friends hobbies
var friendsHobbies = function (profileObject) {
    var friendsArray = profileObject.friends;
    var friendsHobbies = [];
    for (var i = 0; i < friendsArray.length; i++) {
        friendsHobbies.push(friendsArray[i].hobby);
    }
    return (friendsHobbies);
};
//Function to print info
var printInfo = function (profileObject) {
    console.log("I have " + friendsAmount(profileObject) + " and thier hobbies are " + friendsHobbies(profileObject));
};
