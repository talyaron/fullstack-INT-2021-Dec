
// Say Hello----//
const nameFriends: Array<string> = ["Maya", "Saphir", "Levi", "Ran", "Meital", "Ron"];
console.log(nameFriends)

for (let i = 0; i < nameFriends.length; i++) {
    console.log("Welcome " + nameFriends[i])
    function sayWelcome(nameFriends: Array<any>[]) {
        return `welcome +${nameFriends[i]}`

    }
}
// Bigger than Five----//
const numbers: Array<number> = [1, 2, 8, 9, 4, 6];

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])

    if (numbers[i] > 5) {
        console.log(`this is ${numbers[i]}  and it's bigger than 5`)
    }
}
// Whats My Type----//
const diff: Array<any> = ["all", 7, "my", 10, add];

function add(diff: Array<any>[]) {
    return `this is function 7 10`
}
for (let i = 0; i < diff.length; i++) {
    console.log((typeof diff[i]) + (diff[i]))

    function getNumber(diff: Array<any>[]) {
        return typeof (diff[i])
    }

}

// Estimate a Number----//
const estimateNum: Array<Number> = [100, 90, 70, 50, 40];

for (let i = 0; i < estimateNum.length; i++) {
    console.log(estimateNum[i])

function estimateAll(estimateNum:Array<Number>[]){
    return [100, 90, 70, 50, 40].reduce((a, b) => a + b, 0);
  
}

}
let sum=estimateAll([]);
let finalsum=sum/estimateNum.length;
console.log(finalsum)

// Reverse a Number----//

function reverseNum(n){
    let x=n+"";
    return x.split("").reverse().join("");
}
console.log(Number(reverseNum(5678)))


// Test Data----//
function isArray(input){
    if (toString.call(input)==="[object Array]")
    return true;
    return false; 
}
console.log(isArray('Lital'))
console.log(isArray([1, 3, 5, 7]))
