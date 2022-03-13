
interface friend {
    firstname: string,
    lastname: string,
    address: string,
    friends: Array<friend>,
}



const friend1 :friend= {
    firstname:"Hadas" ,
    lastname: "Zabahon" ,
    address:"Beer sheva" ,
    friends: [{firstname:"Sara", lastname: "Koletker", address:"Migdal haemek",friends:[] },
            {firstname:"Moran", lastname: "Pinto", address:"Netivot",friends:[] },
            {firstname:"Hodaya", lastname: "Zeharya", address:"Netivot",friends:[] }
        ]
}



function PrintFriend(person:friend):String
{
    let count = 0;
    let add:string= "";
    person.friends.forEach(friend2 => {
        count++;
        add+=`${friend2.address} ,` ;

     
    });
 
   
    return `you have ${count} friends and they live in ${add}`;
}

console.log(PrintFriend(friend1));
