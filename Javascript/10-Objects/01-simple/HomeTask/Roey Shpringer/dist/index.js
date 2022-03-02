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
//        array that contains the objects
var friendsArray = [friendOne, friendTwo, friendThree];
//     function that takes the array and prints how many friends you have
//               and where they live
function friendsAdress(array, name, adress) {
    var friendsAmount = array.length;
    //       how many friends you have
    console.log("you have " + friendsAmount + " friends");
    //       takes the parameters that you input and prints them
    //           for each friend in the array
    array.forEach(function (object) {
        return console.log(object[name] + " lives in " + object[adress]);
    });
}
function yearOfBirth(age) {
    return new Date().getFullYear() - age;
}
friendsAdress(friendsArray, 'firstName', 'adress');
