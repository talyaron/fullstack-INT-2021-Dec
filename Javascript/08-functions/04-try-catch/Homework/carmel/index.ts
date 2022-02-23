let myArray = ['bebe', 34, 'rere', 98, 'asap', 55, 'familia']
let userChoice = prompt("you must choose! STRINGS or NUMBERS? whar will it be?")

function myFUN (arr:Array<any>, choice:string) {
    try{
        let newArr=[]
        if (choice=="STRINGS"){
    //         newArray.push('BOHP')
    //     }
    //     return newArray
    // }
            for(let i = 0; i<arr.length; i++)
            {
                if (typeof(arr[i])== "string")
                {
                    newArr.push(arr[i])
                }
            }
            return newArr
        }
        else if(choice=="NUMBERS"){
            for(let i = 0; i<arr.length; i++)
            {
                if (typeof(arr[i])== "number")
                {
                    newArr.push(arr[i])
                }
            }
            return newArr
        }
        else{
            throw new Error("input is invalid");
        }
       
    }
    catch(err)
    {
        alert("input is invalid");
    }
}
console.log("this is the original array: "+myArray)
let newArr=myFUN(myArray, userChoice)
if(newArr==undefined){
    console.log("sorry, your input was invalid")
}
else{
console.log("this is the new array you requested: "+newArr)
}

