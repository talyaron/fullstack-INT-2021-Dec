function handleSend(ev){
    ev.preventDefault();
    console.log(ev)
    const element= ev.target.elements
    const result= {}
    for(let i=0;i<element.length; i++){
        if(element[i].type=== `checkbox` ){
            result[element[i].name]=element[i].checked
        }
     else if (element[i].name && element[i].value) {
        result[element[i].name] = element[i].value;
      }
    }
    console.log(result);
  }



