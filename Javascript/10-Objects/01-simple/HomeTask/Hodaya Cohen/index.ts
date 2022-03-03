interface myFriend{
    firstName:string,
    lastName:string,
    address:string,
    age:number,
    status:number,
}
const Hodaya: myFriend = {
    firstName:"Hodaya",
    lastName:"Cohen",
    address:"Petach Tikva",
    age:18,
    status:0,

};
const Shlomi: myFriend = {
    firstName:"Shlomi",
    lastName:"Levi",
    address:"Bet Shemesh",
    age:24,
    status:1,
};
const Noam: myFriend = {
    firstName:"Noam",
    lastName:"Yechezkel",
    address:"Tel Aviv",
    age:30,
    status:2,
};
const Michal: myFriend = {
    firstName:"Michal",
    lastName:"David",
    address:"Tveria",
    age:56,
    status:3,
};
const allMyfriends: Array<myFriend> = [Shlomi,Noam,Michal];

function sayMyFriend(allMyfriends: Array<myFriend>,address:string){
    allMyfriends.forEach(friends=> {
        console.log(friends.address);
    })

}
const myFriendS:Array<myFriend>=[Shlomi, Noam, Michal]
const count = myFriendS.filter(item => item.status > 0).length;
console.log(`You have ${count} friends and they live in:`)
sayMyFriend(allMyfriends, "address")
