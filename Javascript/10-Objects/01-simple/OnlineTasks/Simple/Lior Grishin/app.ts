function descFriend (name:Array<string>, age:number, hobbie:string) {
    console.log(`My friend name is ${name}, and his age is ${age}, and his hobbie is ${hobbie}`)
}
const arrFriends = ['Daniel', 'David', 'Michael', 'Maor']
const myFriends = {
    Friend1: {
        name: arrFriends[0],
        age: 23,
        hobbie: 'Programing',
        description: function (){
            console.log(this)
            console.log('----')
            descFriend(this.name, this.age, this.hobbie)
        }
    },
    Friend2: {
        name: arrFriends[1],
        age: 21,
        hobbie: 'Sport',
        description: function (){
            descFriend(this.name, this.age, this.hobbie)
        }
    },
    Friend3: {
        name: arrFriends[2],
        age: 22,
        hobbie: 'Jamming on Guitar',
        description: function (){
            descFriend(this.name, this.age, this.hobbie)
        }
    },
    Friend4: {
        name: arrFriends[3],
        age: 22,
        hobbie: 'Travel',
        description: function (){
            descFriend(this.name, this.age, this.hobbie)
        }
    },
}
// `for...of` loop
for (let key in myFriends) {
    console.log(key)
    console.log(myFriends[key].description());
}






