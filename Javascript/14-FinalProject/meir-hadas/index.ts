const roots = document.querySelector('.root')

function handleNote(ev: any) {
    ev.preventDefault();
    
  
    const elements = ev.target.elements;
    const result = {};
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type === "text") {
        result[elements[i].name] = elements[i].note;
      } else if (elements[i].name && elements[i].valueAsString) {
        result[elements[i].name] = elements[i].valueAsString;
      }
      console.log(elements[i].name, elements[i].value)
    }
    console.log(result);
    console.log(elements)
    
}    

