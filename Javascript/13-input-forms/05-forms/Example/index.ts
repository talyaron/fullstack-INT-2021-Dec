function handleGetText(event: any) {
  console.dir(event);
  console.log(event.key);
  console.log(event.target.value);

  const root: HTMLDivElement = document.querySelector("#root");
  root.innerText = event.target.value;
}

function handleChangeColor(event: any) {
  console.log(event.target.value);
  document.body.style.backgroundColor = event.target.value;
}

function handleCheck(event: any) {
  console.dir(event);
  console.log(event.target.checked);
}

function handleGetNumber(ev: any) {
  try {
    const number: number = ev.target.value;
    console.log(typeof number);
    if (typeof number !== "number")
      throw new Error("The input of the user is not of type number");
    alert(number * 10);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

function handleSend(ev: any) {
  ev.preventDefault();
  console.log(ev);
  const name = ev.target.elements.name.value;
  const eeee = ev.target.elements.eeee.value;
  const checkbox = ev.target.elements.checkbox.checked;
  const number = ev.target.elements.number.valueAsNumber;
  const color = ev.target.elements.color.value;

  console.log(name, eeee, checkbox, number, color);

  const elements = ev.target.elements;
  const result = {};
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type === "checkbox") {
      result[elements[i].name] = elements[i].checked;
    } else if (elements[i].name && elements[i].value) {
      result[elements[i].name] = elements[i].value;
    }
  }
  console.log(result);
}
