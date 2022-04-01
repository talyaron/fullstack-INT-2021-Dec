const result = {};
function handleSend(ev){
    console.log(ev)
    ev.preventDefault();
    const elements = ev.target.elements;
    // console.log(elements)
  
  for (let i = 0; i < elements.length; i++) {
      if (elements[i].name && elements[i].value) {
      result[elements[i].name] = elements[i].value;
    }
    
}
let img = document.querySelector("#root")
let value = result['img']
img.innerHTML = `<img src="${value}" width="100px" height="100px">`
if (result['pass'] == result['repass']){
    alert('ok')
}
const login = document.querySelector(".login")
login.innerHTML = "please login"
login.innerHTML = `<form onsubmit="handleCheck(event)"> <input type="text" name="loginName" placeholder="name"> <input type="password" name="loginPass" placeholder="password"></form>`

}



