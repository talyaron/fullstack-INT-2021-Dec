// selectors
const root = document.querySelector('.root');

// Functions

function handleNote(ev: any) {
   ev.preventDefault();
   const elements = ev.target.elements;
   const result = {};
   for (let i = 0; i < elements.length; i++) {
       if (elements[i].type === "text") {
           result[elements[i].name] = elements[i].value;
        }else if (elements[i].name && elements[i].value) {
      
         result[elements[i].name] = elements[i].value;
        } 
    }
    
  
   console.log(result);
   root.innerHTML += `<div>${result.note}</div>`
}  