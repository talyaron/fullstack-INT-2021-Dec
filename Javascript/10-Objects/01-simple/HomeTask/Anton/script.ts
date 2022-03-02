



interface Profile {
    name: string;
    age: number;
    email: string;
    location: string;    
  
}

interface MyProfile extends Profile {
    friends:Array<Profile>  
}

const igor:Profile = 
{
    name: 'Igor', age:33 , email: 'igorsomemail@gmail.com', location: ' Sderot'
}

const einav:Profile = {
    name: 'Einav', age:35, email:'einavsomemail@gmail.com', location: ' Moscow'
}

const denis:Profile = {
    name: 'Denis', age:38, email: 'denissomemail@gmail.com', location: ' Ashkelon'
}

const iyal:Profile = {
    name: 'Iyal', age:35, email: 'iyalsomemail@gmail.com', location: ' Rehovot'
}

const myProfile:MyProfile = {
    name: 'Anton', 
    age: 34, 
    email: 'antoniuskonovalov@gmail.com', 
    location: 'Sderot',
    friends:[igor, einav, denis, iyal]
}

const friendsNumber = (profileCard:MyProfile):number => {
    return profileCard.friends.length;
} 

const friendsLocation = (profileFriendslocation:MyProfile):Array<string> => {
    const locationArray = [];
    const friendsLoc = profileFriendslocation.friends;
    for (let i=0; i<friendsLoc.length; i++) {
        locationArray.push(friendsLoc[i].location)
    } return locationArray;
}

console.log(`You have ${friendsNumber(myProfile)} friends and they are live in${friendsLocation(myProfile)}.`);








// class Profile{
//     constructor(profile:Profile){
//         this.name=profile.name;
//         this.age=profile.age;
//         this.email=profile.email;
//         this.location=profile.location;


//     }


// }

// let profile={name: 'igor', age :33, email: 'igor@mail.com',location:'sderot'}

// let igor= new Profile(profile)
// console.log(igor)
