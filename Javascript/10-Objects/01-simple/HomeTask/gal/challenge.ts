class myFriends{
    firstName:string
    lastNmae:string
    address:string
    age:number
    friends:myFriends[]
    constructor (firstName, lastName ,address, age, friends){
        this.firstName=firstName;
        this.lastNmae=lastName;
        this.address=address;
        this.age=age;
        this.friends=friends;
    }
}

