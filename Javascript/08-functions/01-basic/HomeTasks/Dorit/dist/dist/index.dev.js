"use strict";

function tellFortune(Kids, partName, location, jobTitle) {
  if (Kids == 1 && partName[0] == 'a' && location == 'tel aviv' && jobTitle == 'developer') {
    return "you will have " + (Kids + 2) + " kids and will live in Jerusalem and will stay married to " + partName;
  } else if (Kids > 5 && location != 'tel aviv' && jobTitle != 'computer science') {
    return "you'll have no more children you will live outside Tel Aviv and have a new job soon";
  } else {
    return "you'll have " + (Kids + 1) + " kids, and you will live in " + location + " for another 5 years you will stay with " + partName + " and you will work as a " + jobTitle;
  }
}

function calculateDogAge(name, age, factor) {
  return name + "'s age in dogie's years is aproximatly: " + Math.round(age * factor);
}

function calculateSupply(age, amount, nameOfSuply, gender) {
  var expectMan = 81;
  var expectWoman = 84.5;

  if (gender == 'man') {
    var restOfLife = expectMan - age;
  } else if (gender == 'woman') {
    var restOfLife = expectWoman - age;
  }

  return "for the next " + restOfLife + " years you will need " + amount * 360 * restOfLife + " of " + nameOfSuply;
}

function calcCircle(areaOrCircum, radius) {
  if (areaOrCircum == 'circumfrence') {
    return "the circumfrence of the circle is: " + 2 * Math.PI * radius;
  } else if (areaOrCircum == 'area') {
    return "the area of the circle is " + Math.PI * Math.pow(radius, 2);
  }
}

function celsiusAndFarenheit(degreeSort, amount) {
  if (degreeSort == 'celsius') {
    return "the " + amount + " degrees of celsius is in farenheit " + Math.round(amount * 5 / 9 + 32);
  } else if (degreeSort == 'farenheit') {
    return "the " + amount + " degrees of farenheit is in celsius " + Math.round((amount - 32) / 1.8) + " degrees";
  }
}

function findTime(distance, velocity) {
  return distance / velocity;
}

var dist = +prompt("what is your distance");
var vel = +prompt("what is your velocity");
var time = findTime(dist, vel);
console.log("time is " + time); //const a = tellFortune(1, 'Guy', 'hod hasharon', 'system analyst');
//const a = tellFortune(6, 'Arnon', 'Tel Aviv', 'story teller');
//const a = tellFortune(1, 'aharon', 'Tel Aviv', 'developer');
//const a = calculateDogAge('chupchik', 10, 7)
//const a = calculateDogAge('farid', 3, 7)
//const a = calculateDogAge('dogie', 13, 8)

var a = calculateSupply(71, 5, 'choclate plates', 'woman'); //const a = calculateSupply(14, 5, 'bamba bags', 'man');
//const a = calculateSupply(71, 5, 'choclate plates', 'woman');
//const a = calcCircle('circumfrence', 5)
//const a = calcCircle('area', 2)
//const a = calcCircle('area', 25)
//const a = celsiusAndFarenheit('celsius', 30)
//const a = celsiusAndFarenheit('farenheit', 70)
//const a = celsiusAndFarenheit('celsius', 100)

console.log(a);