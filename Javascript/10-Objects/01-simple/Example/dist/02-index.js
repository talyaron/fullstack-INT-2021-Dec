var hanuch = {
    //key:value, (//property)
    name: "Hanuch",
    lastName: "Shachar",
    address: "Rechuvot"
};
var dorit = {
    name: "Dorit",
    lastName: "Guy",
    address: "Rishon"
};
var tal = { name: "Tal", lastName: "Yaron", address: "Kfar-saba" };
// console.log(hanuch.lastName);
// console.log(hanuch['lastName']);
function saySomePropery(arrayOfPeople, key1, key2) {
    arrayOfPeople.forEach(function (person) {
        //    console.log(person)
        console.log(person[key1]);
        console.log(person[key2]);
    });
}
var ppl = [hanuch, dorit, tal];
console.log(ppl);
saySomePropery(ppl, "name", "lastName");
