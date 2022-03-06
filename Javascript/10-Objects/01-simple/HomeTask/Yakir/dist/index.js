var friend_1 = {
    firstName: 'Eli',
    lastName: 'Choen',
    adress: 'Rozenblom 3/1 BeerShba',
    age: 28,
    frinds: []
};
var friend_2 = {
    firstName: 'Dana',
    lastName: 'Danon',
    adress: 'grossman 25 BeerShba',
    age: 29,
    frinds: []
};
var friend_3 = {
    firstName: 'Rotem',
    lastName: 'Amos',
    adress: 'Rotshild Tel Aviv',
    age: 29,
    frinds: []
};
var me = {
    firstName: 'Yakir',
    lastName: 'DVir',
    adress: 'Grossman BeerShba',
    age: 29,
    frinds: [friend_1, friend_2, friend_3]
};
var friendsArray = [friend_1, friend_2, friend_3];
function friendsPrint(array) {
    var friendsCount = array.length;
    console.log("you have " + friendsCount + " friends");
    array.forEach(function (object) {
        return console.log(object.firstName + " lives in " + object.adress);
    });
}
friendsPrint(friendsArray);
