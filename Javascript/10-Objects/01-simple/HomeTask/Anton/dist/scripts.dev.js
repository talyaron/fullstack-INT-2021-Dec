"use strict";

var user = {
  name: 'Anton',
  age: 34,
  email: 'antoniuskonovalov@gmail.com',
  location: 'Sderot',
  hobbies: ['run', ' swim', 3, ' jerk off', 5, ' travel'],
  logHobbies: function logHobbies() {
    var newArr = this.hobbies.map(function (elm) {
      if (typeof elm === "string") {
        return elm;
      }
    }).filter(function (elm) {
      return typeof elm === "string";
    });
    return 'my hobbies are: ' + newArr;
  }
};
console.log(user.logHobbies()); //console.log(this);

/* console.log(user);

user.age = 35;
console.log(user['name']);
user['name'] = 'Antonius';
// const key = 'location';
// console.log(user[key]); // the advantage of using squere brackets
console.log(user['location']);

console.log(typeof user); */

var userBlog = {
  name: 'Anton',
  age: 34,
  email: 'antoniuskonovalov@gmail.com',
  location: 'Sderot',
  friends: [{
    name: 'Igor',
    age: 33,
    email: 'igorsomemail@gmail.com',
    location: ' Sderot'
  }, {
    name: 'Einav',
    age: 35,
    email: 'einavsomemail@gmail.com',
    location: ' Moscow'
  }, {
    name: 'Denis',
    age: 38,
    email: 'denissomemail@gmail.com',
    location: ' Ashkelon'
  }, {
    name: 'Iyal',
    age: 35,
    email: 'iyalsomemail@gmail.com',
    location: ' Rehovot'
  }],
  filter: function filter() {
    console.log("You have: " + this.friends.length + ' friends');
    var location = [];

    for (var i = 0; i < this.friends.length; i++) {
      location.push(userBlog.friends[i].location);
    }

    return 'They live in: ' + location;
  }
};
console.log(userBlog.filter());