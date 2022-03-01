var igor = {
    name: 'Igor', age: 33, email: 'igorsomemail@gmail.com', location: ' Sderot'
};
var einav = {
    name: 'Einav', age: 35, email: 'einavsomemail@gmail.com', location: ' Moscow'
};
var denis = {
    name: 'Denis', age: 38, email: 'denissomemail@gmail.com', location: ' Ashkelon'
};
var iyal = {
    name: 'Iyal', age: 35, email: 'iyalsomemail@gmail.com', location: ' Rehovot'
};
var myProfile = {
    name: 'Anton',
    age: 34,
    email: 'antoniuskonovalov@gmail.com',
    location: 'Sderot',
    friends: [igor, einav, denis, iyal]
};
var friendsNumber = function (profileCard) {
    return profileCard.friends.length;
};
var friendsLocation = function (profileFriendslocation) {
    var locationArray = [];
    var friendsLoc = profileFriendslocation.friends;
    for (var i = 0; i < friendsLoc.length; i++) {
        locationArray.push(friendsLoc[i].location);
    }
    return locationArray;
};
console.log("You have " + friendsNumber(myProfile) + " friends and they are live in" + friendsLocation(myProfile) + ".");
// class Profile{
//     constructor(profile:Profile){
//         this.name=profile.name;
//         this.age=profile.age;
//         this.email=profile.email;
//         this.location=profile.location;
//     }
// }
// let profile={name: 'igor', age :33, email: 'igor@mail.com',location:'sderot'}
// let igor= new Profile(profile)
// console.log(igor)
