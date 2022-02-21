const babi:Array<any> = [5,10,'baba', 'hanoch']
console.log(babi)
let babu:Array<any> = []
function strOrNumber(action:string){
    try{
        if (action="strings"){
            babu=babi.map(e=>{if(typeof e === "string") return e}).filter(e=>{typeof e === "string"})
            console.log('in case of string',babu)
        }else if(action ==="number"){
            babu=babi.map(e=>{if (typeof e === "number") return e}).filter(e=>{typeof e ==="number"})
            console.log('in case of number', babu)
        }
        else{
            console.error("you gave a wrong action")
        } 
        return babu
    } catch(error) {
        console.error(error);
        return undefined;
      }

    }    
console.log(strOrNumber("string"))
