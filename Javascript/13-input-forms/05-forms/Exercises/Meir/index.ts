function handleSend(event) {
    event.preventDefault();
    console.log(event.value)
    const elements = event.target.elements;
    const result = {};
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type === "password" ) {
        result[elements[i].name] = elements[i].value;
      } else if (elements[i].type === "text") {
        result[elements[i].name] = elements[i].value;
      }
    }
    console.log(result);
}
console.log("hi")