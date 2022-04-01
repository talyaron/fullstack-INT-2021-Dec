let root:HTMLElement= document.querySelector("#root")
let signUpPassword:string = ""
const result = {};
function handleSend(ev){
    //console.log(ev)
    ev.preventDefault();
    const elements = ev.target.elements;
   
    //console.log(elements)()
  //console.log('first for')
  for (let i = 0; i < elements.length; i++) {
      if (elements[i].name && elements[i].value) {
      result[elements[i].name] = elements[i].value;
    }
    
}

let value = result['img']
root.innerHTML = `<img src="${value}" width="100px" height="100px">`
if (result['pass'] === result['repass']){
    signUpPassword = result['pass']
    alert('ok,  now please enter signin Form')
    handleLoginForm()
}
}

function handleLoginForm(){
        let html = `<form onsubmit="handleSendSignIn(event)">
        <input type="text" name="name" id="name" placeholder="name">
        <input type="password" name="pass" placeholder="password">
        <button type="submit">SEND</button>
        </form>`
        console.log(html)
        root.innerHTML+= html 
    }

function handleSendSignIn(ev){
    ev.preventDefault();
    let resultNew = {}
    const elementsNew = ev.target.elements
    //console.log(elementsNew)
    for (let i = 0; i < elementsNew.length; i++) {
        if (elementsNew[i].name && elementsNew[i].value) {
          resultNew[elementsNew[i].name] = elementsNew[i].value;
          }
      } 
      //console.log(elementsNew)
      if (resultNew['pass'] === signUpPassword){
          alert('Hi, you were authorised')
        
      }  
    
    }  

   



