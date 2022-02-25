function makeFriends() {
    try {
        var randomized_1 = 0;
        arrayOfPersons.forEach(function (element) {
            randomized_1 = Math.floor(Math.random() * arrayOfPersons.length);
            //console.log(`randomize ${randomized}`)
            element.friends.pop;
            element['friends'].push(arrayOfPersons[randomized_1]);
            randomized_1 = Math.floor(Math.random() * arrayOfPersons.length);
            //console.log(`randomize ${randomized}`)
            element.friends.pop;
            element['friends'].push(arrayOfPersons[randomized_1]);
            randomized_1 = Math.floor(Math.random() * arrayOfPersons.length);
            //console.log(`randomize ${randomized}`)
            element.friends.pop;
            element['friends'].push(arrayOfPersons[randomized_1]);
        });
        return true;
    }
    catch (_a) {
        return false;
    }
}
function findFriends(myFriend) {
    var arrayFr = [];
    //the Friend we got as element has an array of friends and every friend in the array has an address
    //we push to the array named arrayFr only the address of every friend
    myFriend["friends"].forEach(function (element) {
        arrayFr.push(element["address"]);
    });
    return arrayFr;
}
var adir = {
    firstName: "Adir",
    lastName: "Givati",
    address: "Jerusalem",
    friends: [adir]
};
var mordechai = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Givataim",
    friends: [adir]
};
var aviv = {
    firstName: "Aviv",
    lastName: "Gordon",
    address: "Ramat Gan",
    friends: [mordechai]
};
var galit = {
    firstName: "Mordechai",
    lastName: "Gilat",
    address: "Tel Aviv",
    friends: [aviv]
};
var sara = {
    firstName: "Sara",
    lastName: "Yogev",
    address: "Kfar Saba",
    friends: [galit]
};
var doritGuy = {
    firstName: "Dorit",
    lastName: "Guy",
    address: "Hod Hasharon",
    friends: [sara]
};
var arrayOfPersons = [
    adir, mordechai, aviv, galit, sara, doritGuy
];
var success = makeFriends();
if (!success) {
    alert("something got wrong, no results");
}
else {
    console.log("everything ok");
    //the function gets a Friend and returns the addresses of his friends as an array
    var noFriends = findFriends(galit).length; //number of friends = length of the array in return
    console.log("you have " + noFriends + " friends at " + findFriends(doritGuy));
}
