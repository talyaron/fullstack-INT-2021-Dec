console.log(`Connected!`)

function handleSubmit(ev) {
    ev.preventDefault()
    const elements = ev.target.elements;
    const userdata = {};
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name && elements[i].value) {
        userdata[elements[i].name] = elements[i].value;
    }
  }
  console.log(userdata);
}