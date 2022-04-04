
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
    name:"Tal Yaron",
    username:"tal",
    password:"1234"


}
 
function handleUser(ev){
    ev.preventDefault();
    const details = ev.target.elements
    //console.dir(ev)
    for (let i = 0; i < details.length; i++) {
        if (details[i].name && details[i].value) {
        result[details[i].name] = details[i].value;
        }
    }
    // console.log(`name from form ${result['name']}`)
    // console.log(`name from array ${manager['name']}`)
    // console.log(`password from form ${result['pass']}`)
    // console.log(`password from arry ${manager['password']}`)
    if (result['name'] === manager["name"] && result['pass'] === manager['password']){
        //console.log('its ok')
        root=document.querySelector("#root")
        window.location.href = "director.html"
    }
}