const result = {};
function handleSend(ev){
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
img.innerHTML = `<img src="${value}" width="100px" hi>`
if (result['pass'] == result['repass']){
    alert('ok')
}
console.log(result['img'])
}

