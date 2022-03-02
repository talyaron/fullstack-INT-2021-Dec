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
function FriendsDetails(arrayOfFriends, adress, key2) {
    arrayOfFriends.forEach(function (person) {
        //    console.log(person)
        console.log(person[adress]);
        console.log(person[key2]);
    });
}
//const ppl:Array<Person> = [hanuch,dorit,tal ];
//console.log(ppl)
//saySomePropery(ppl,"name","lastName");
