//My friends
const Myfriends: Array<any> = ["Rula","Abeer","Rana"];

for ( let i=0; i<Myfriends.length; i++){
    console.log(Myfriends[i])
}

for ( let i=0; i<Myfriends.length; i++){
    console.log(`Hello dear ${Myfriends[i]}`)
}


//Number bigger than five

const morethan5: Array<number> = [0,4,5,11,-2,9,3,15,-10,10,2,7,20];
for ( let i=0; i<morethan5.length; i++){
if (morethan5[i]>5){
    console.log(morethan5[i])
}
}

//type of the array

const multitypes: Array<any> = [0,"Hello",12,"bye",25,diverst]

function diverst(x,y,z) {
   return x*y*z;
 }

 for ( let i=0; i<multitypes.length; i++){

    if (typeof multitypes[i] =="function"){
       console.log(multitypes[i](1,2,3))

    }

   else {
      console.log(typeof multitypes[i])
  }
}

//Mean

const Mean: Array<number> = [1,5,60,506,99,405,-300,8004,45,231,54,123,45]


let sum = 0;

for (let i = 0; i < Mean.length; i++) {
    sum += Mean[i];
}
console.log(sum);

let average= sum/Mean.length;

console.log(average);


