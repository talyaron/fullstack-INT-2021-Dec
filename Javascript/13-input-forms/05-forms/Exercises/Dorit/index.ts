function handleSend(ev){
    ev.preventDefault()
    const elements = ev.target.elements;
    const result = {};
    for (let i = 0; i < elements.length;i++){
      if (elements[i].name && elements[i].value) {
        result[elements[i].name] = elements[i].value;
      }
    }
    console.log(result);
  }
