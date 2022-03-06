var MyDetails = {
    name: "Hadeer",
    lastName: "HAbiballah",
    address: "Tira",
    job: "Tissue Typing LAB"
};
var Mustafa = {
    name: "Mustafa",
    lastName: "Qassim",
    address: "Tira",
    job: "Blood Bank Lab"
};
var Rula = {
    name: "Rula",
    lastName: "Mansour",
    address: "Haifa",
    job: "Teacher"
};
var Abeer = {
    name: "Abeer",
    lastName: "Dabbah",
    address: "Maker",
    job: "Nurse"
};
var Rana = {
    name: "Rana",
    lastName: "Khamisey",
    address: "Ako",
    job: "Enviroment"
};
function FriendsDetails(arrayOfFriends) {
    for (var i = 0; i++; i < arrayOfFriends.length) {
        arrayOfFriends.forEach(function (PersonDetails) {
            return "Your name " + MyDetails.name + " you have " + arrayOfFriends.length + " friends and they live in " + PersonDetails.address;
        });
    }
}
var Myfriends = [Mustafa, Rula, Abeer, Rana];
var FriendLocation = FriendsDetails(Myfriends);
console.log(FriendLocation);
