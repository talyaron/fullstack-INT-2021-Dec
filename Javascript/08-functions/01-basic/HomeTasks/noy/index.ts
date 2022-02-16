// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune (childrenNumber:number, partnerName:string , location:string, jobTitle:string){
    const fortune:string=( `You will be ${jobTitle} in ${location}, and married to ${partnerName} with ${childrenNumber} kids.`);
    return (fortune);
}

console.log(tellFortune(3, 'Mor', 'Haifa', 'Dancer'));
console.log(tellFortune(5, 'Shay', 'Tel-aviv', 'Singer'));
console.log(tellFortune(2, 'Ben', 'Eilat', 'Chef'));
