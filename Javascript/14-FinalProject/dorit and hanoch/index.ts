
let result = {};

interface users{
    name:string,
    username:string,
    password:string,
    address?:string,
    telephon?:number,
    email?:string
}
let user:users{

}
const manager:users ={
    name:"tal Yaron",
    username:"tal",
    password:"1234"


}
 
function handleUser(ev){
    const details = ev.target.elements
    for (let i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
        result[details[i].name] = details[i].value;
  
      }
}
if (result['name'] === manager["username"] && result['pass'] === manager['password']){
    
}
}