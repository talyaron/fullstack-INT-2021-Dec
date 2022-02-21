const firstArray:Array<any> = [5,10,'baba', 'hanoch']
console.log(firstArray)

function strOrNumber(action:string):Array<any>{
    try{
        let outcomeArray:Array<any> = []
        if (action==="strings"){
            outcomeArray = firstArray.map(elm=>{if(typeof elm === "string") return elm}).filter(elm=>typeof elm === "string")
            console.log('in case of strings',outcomeArray)
        }else if(action ==="numbers"){
            outcomeArray=firstArray.map(elm=>{if (typeof elm === "number") return elm}).filter(elm=>typeof elm ==="number")
            console.log('in case of number', outcomeArray)
        }
        else{
            console.error("you gave a wrong action")
        } 
        return outcomeArray
    } catch(error) {
        console.error(error);
        return undefined;
      }

    }    
console.log(strOrNumber("kuku"))
