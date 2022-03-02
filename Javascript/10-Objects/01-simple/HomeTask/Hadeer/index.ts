interface PersonDetails{
    name:string,
    lastName:string,
    address:string,
    job:string,
}


const MyDetails:PersonDetails = {
    name:"Hadeer",
    lastName:"HAbiballah",
    address:"Tira",
    job:"Tissue Typing LAB",
}


const Mustafa:PersonDetails = {
    name:"Mustafa",
    lastName:"Qassim",
    address:"Tira",
    job:"Blood Bank Lab",
}

const Rula:PersonDetails = {
    name:"Rula",
    lastName:"Mansour",
    address:"Haifa",
    job:"Teacher",
}


const Abeer:PersonDetails = {
    name:"Abeer",
    lastName:"Dabbah",
    address:"Maker",
    job:"Nurse",
}



const Rana:PersonDetails = {
    name:"Rana",
    lastName:"Khamisey",
    address:"Ako",
    job:"Enviroment",
}

function FriendsDetails(arrayOfFriends:Array<PersonDetails>, adress:string, key2:string){
    arrayOfFriends.forEach(person=>{
    //    console.log(person)
        console.log(person[adress]);
        console.log(person[key2]);
    })
}
//const ppl:Array<Person> = [hanuch,dorit,tal ];
//console.log(ppl)
//saySomePropery(ppl,"name","lastName");




