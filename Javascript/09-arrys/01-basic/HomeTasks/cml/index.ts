let myFriends = ['CSENGE', 'HADAR', 'NOA', 'PAOLA', 'SHAKED', 'SHAHAR', 'MAYA']
for(let i=0; i<myFriends.length; i++){
    console.log(myFriends[i])
}
for(let i=0; i<myFriends.length; i++){
    console.log("welcome "+myFriends[i])
}


let myNums:Array<number> = [3,6,2,3,1,2,8,5,9]
for(let i=0; i<myNums.length; i++){
    console.log(myNums[i])
    if(myNums[i]>5){
        console.log("the number " +myNums[i]+ " is bigger then 5")
    }
}
function weirdFunction(a:number, b:number){
    if(a>b){
        return (a-b)
    }
    else{
        return (b-a)
    }
}
let b =weirdFunction(6, 8)
let myArray = [34, "this is funn!!!!", "lie", 4206969, '3', weirdFunction]

for(let i=0; i<myArray.length; i++){
    let objecType = typeof(myArray[i])
    console.log("this object is a "+objecType)
    if(objecType==='function'){
        let f= myArray[i]
        console.log(f(4, 7))
    }
}


function avgOfArray(a){
    let sum=0;
    for(let i=0; i<a.length; i++){
        sum=sum+a[i]
    }
    let ave=sum/a.length
    return ave
}

console.log(avgOfArray(myNums))