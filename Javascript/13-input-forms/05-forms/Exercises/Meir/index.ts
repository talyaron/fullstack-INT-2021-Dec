function handleSend(ev: any) {
    ev.preventDefault();
    const elements = ev.target.elements;
    const result = {};
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type === "checkbox" ) {
        result[elements[i].name] = elements[i].checked;
      } else if (elements[i].name && elements[i].value) {
        result[elements[i].name] = elements[i].value;
      }
    }
    console.log(result);
  }