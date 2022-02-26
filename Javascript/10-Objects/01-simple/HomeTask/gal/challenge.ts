class myFriends{
    firstName: string;
    lastNmae: string;
    address: string;
    age: number;
    friends: myFriends[];
    constructor (firstName:string, lastName:string ,address:string, age:number, friends:Array<myFriends>){
        this.firstName=firstName;
        this.lastNmae=lastName;
        this.address=address;
        this.age=age;
        this.friends=friends
    }
    
    MyArr(){
        let arr:Array<any> =[]
        this.friends.forEach(elm => {
            arr.push(elm.address)
        });
        return arr
    }
}

let Shahar= new myFriends ("Shahar", "Abu", "Harish",24,[])
let Yam= new myFriends ("Yam", "Rafaeli", "Natanya",23,[Shahar])
let Ofek= new myFriends ("Ofek", "Sery", "Ramat-Gan",28,[Shahar,Yam])
let Rotem= new myFriends ("Rotem", "Fishler", "Tel-Aviv",23,[Shahar,Yam,Ofek])
let Kobe= new myFriends ("Kobe", "Font", "Eilat",24,[Shahar,Yam,Ofek,Rotem])
Shahar['friends'].push(Shahar,Yam,Ofek,Rotem,Kobe)
console.log(Shahar.MyArr())
// console.log (`You have ${} friends and they live in ${}`)
