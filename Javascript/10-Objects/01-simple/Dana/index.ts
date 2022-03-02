

//object interfaces: Build an object that describes you(firstName, lastName, address). Within the object, build an array of friends. every friend should share the same categories as your own object. Build a function that accepts such an object and logs 'you have x number of friends who live in (array): [address1, address2, address3]. Challenge - build a function that describes that object. try to do that same thing with a Class selector. // 

interface IsPerson{ 
    firstName: string,
    lastName: string,
    address:string,
    friends: Array<object>
    
}

// function friendsAddress (myFriends)(let i=0; i<friends.length; i++ ) {console.log(`I have `)}     
        
//     };

let myFriends = {

    const Ronny:IsPerson = {
    firstName: 'Ronny',
    lastName: 'Abramovsky',
    address:'Habima 13 Tel Aviv',
    friends: [Jasmin, Michal, Danika],
 
   

},

const Jasmin:IsPerson = {
    firstName: 'Jasmin',
    lastName: 'Secheny',
    address:'Peretz Hayut 14 Tel Aviv',
    friends: [Michal, Danika, Ronny]
  

},

const Michal:IsPerson = {
    firstName: 'Michal', 
    lastName: 'sadan', 
    address: ' Bnei Batira 4 Jerusalem',
    friends: [Danika, Jasmin, Ronny]
   

},
const Danika= { 
    firstName: 'Dana',
    lastName: 'Kemper',
    address:'Sidon 4 Tel Aviv',
    friends:  [Ronny, Jasmin, Michal]


}

}

function nameFriends(Danika){ console.log(`I have ${this.friends.length} who live in ${this.friends.address}`); }

// }

// const introduceFriend = (frinendsOf c) => {
//     console.log (`you have ${firstName.friends} friends who lives in ${firstName.address}`);
// }