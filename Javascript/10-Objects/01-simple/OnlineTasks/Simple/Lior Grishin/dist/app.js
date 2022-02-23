function descFriend(name, age, hobbie) {
    console.log("My friend name is " + name + ", and his age is " + age + ", and his hobbie is " + hobbie);
}
var arrFriends = ['Daniel', 'David', 'Michael', 'Maor'];
var myFriends = {
    Friend1: {
        name: arrFriends[0],
        age: 23,
        hobbie: 'Programing',
        description: function () {
            descFriend(this.name, this.age, this.hobbie);
        }
    },
    Friend2: {
        name: arrFriends[1],
        age: 21,
        hobbie: 'Sport',
        description: function () {
            descFriend(this.name, this.age, this.hobbie);
        }
    },
    Friend3: {
        name: arrFriends[2],
        age: 22,
        hobbie: 'Jamming on Guitar',
        description: function () {
            descFriend(this.name, this.age, this.hobbie);
        }
    },
    Friend4: {
        name: arrFriends[3],
        age: 22,
        hobbie: 'Travel',
        description: function () {
            descFriend(this.name, this.age, this.hobbie);
        }
    }
};
// `for...of` loop
for (var _i = 0, _a = Object.entries(myFriends); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key);
    console.log("" + value.description());
}
