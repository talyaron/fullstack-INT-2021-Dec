var friendOne = {
    firstName: 'Ziv',
    lastName: 'Morgan',
    adress: 'Tel Mond',
    age: 19
};
var friendTwo = {
    firstName: 'Or',
    lastName: 'Oren',
    adress: 'Hulon',
    age: 20
};
var friendThree = {
    firstName: 'Eve',
    lastName: 'Idk',
    adress: 'Eilat',
    age: 23
};
var friendsArray = [friendOne, friendTwo, friendThree];
function friendsAdress(array, name, adress) {
    var friendsAmount = array.length;
    console.log("you have " + friendsAmount + " friends");
    array.forEach(function (object) {
        return console.log(object[name] + " lives in " + object[adress]);
    });
}
friendsAdress(friendsArray, 'firstName', 'adress');
