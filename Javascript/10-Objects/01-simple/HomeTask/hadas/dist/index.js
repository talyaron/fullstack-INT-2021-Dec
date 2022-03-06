var friend1 = {
    firstname: "Hadas",
    lastname: "Zabahon",
    address: "Beer sheva",
    friends: [{ firstname: "Sara", lastname: "Koletker", address: "Migdal haemek", friends: [] },
        { firstname: "Moran", lastname: "Pinto", address: "Netivot", friends: [] },
        { firstname: "Hodaya", lastname: "Zeharya", address: "Netivot", friends: [] }
    ]
};
function PrintFriend(person) {
    var count = 0;
    var add = "";
    person.friends.forEach(function (friend2) {
        count++;
        add += friend2.address + " ,";
    });
    return "you have " + count + " friends and they live in " + add;
}
console.log(PrintFriend(friend1));
