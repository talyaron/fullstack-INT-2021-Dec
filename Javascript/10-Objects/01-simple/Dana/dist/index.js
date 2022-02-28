//object interfaces: Build an object that describes you(firstName, lastName, address). Within the object, build an array of friends. every friend should share the same categories as your own object. Build a function that accepts such an object and logs 'you have x number of friends who live in (array): [address1, address2, address3]. Challenge - build a function that describes that object. try to do that same thing with a Class selector. // 
;
var Ronny = {
    firstName: 'Ronny',
    lastName: 'Abramovsky',
    address: 'Habima 13 Tel Aviv',
    friends: ['shabi', 'Jessica', 'Dror']
};
var Jasmin = {
    firstName: 'Jasmin',
    lastName: 'Secheny',
    address: 'Peretz Hayut 14 Tel Aviv',
    friends: ['shabi', 'Jessica', 'Dror']
};
var Michal = {
    firstName: 'Michal',
    lastName: 'sadan',
    address: ' Bnei Batira 4 Jerusalem',
    friends: ['shabi', 'Jessica', 'Dror']
};
var Danika = {
    firstName: 'Dana',
    lastName: 'Kemper',
    address: 'Sidon 4 Tel Aviv',
    friends: [Ronny, Jasmin, Michal]
};
var introduceFriend = function (firstName) {
    console.log("you have " + firstName.friends + " friends who lives in " + firstName.address);
};
