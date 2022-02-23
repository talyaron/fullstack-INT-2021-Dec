var hanuchName = 'Hanuch';
var hanuchLastName = 'Shachar';
var hanuchAddress = 'Rechovot';
console.log("Hi " + hanuchName + " " + hanuchLastName + ". Your adress is " + hanuchAddress);
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
function sayHello(pesonObj) {
    return "Hi " + pesonObj.name + " " + pesonObj.lastName + ". You live is " + pesonObj.address;
}
var hello = sayHello(hanuch);
console.log(hello);
var hello2 = sayHello(dorit);
console.log(hello2);
// --- 
console.log(hanuch.address);
console.log(dorit);
