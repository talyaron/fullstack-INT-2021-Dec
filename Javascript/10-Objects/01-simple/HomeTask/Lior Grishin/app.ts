interface Profile{
    firstName:string
    lastName:string
    city:string
    address:string
}

interface MyProfile extends Profile{
    friends:Array<Profile>
}

const daniel:Profile = {
    firstName: 'Daniel', lastName: 'Oronsi', city: 'Ashkelon', address: 'Gan-Havradim'
}

const david:Profile = {
    firstName: 'David', lastName: 'Martinenko', city: 'Ashkelon', address: 'Afridar'
}

const michael:Profile = {
    firstName: 'Michael', lastName: 'Livshits', city: 'Ashkelon', address: 'Eli-Cohen'
}

const maor:Profile = {
    firstName: 'Maor', lastName: 'Ofir', city: 'Ashkelon', address: 'Neot-Ashkelon'
}

const roie:Profile = {
    firstName: 'Roie', lastName: 'Goldstien', city: 'Ashkelon', address: 'Barnea'
}

const me:MyProfile = {
    firstName: 'Lior',
    lastName: 'Grishin',
    city: 'Ashkelon',
    address: 'Neot-Ashkelon',
    friends: [daniel, david, michael, maor, roie]
}

// This function return the amount of friends object have
const friendsCount = (profileObject:MyProfile):number => {
    return (profileObject.friends.length)
}

// This function returns an array of addresses of my friends
const friendsAddresses = (profileObject:MyProfile):Array<string> => {
    const friendsArray = profileObject.friends
    const friendsAddressesArray = [];
    for(let i = 0; i < friendsArray.length; i++){
        friendsAddressesArray.push(friendsArray[i].address)
    }
    return (friendsAddressesArray)
}

// This function prints how many friends do I have and where do they live
const printMyFriendsInformation = (profileObject:MyProfile):void => {
    console.log(`You have ${friendsCount(profileObject)} friends they live in ${friendsAddresses(profileObject)}`)
}

