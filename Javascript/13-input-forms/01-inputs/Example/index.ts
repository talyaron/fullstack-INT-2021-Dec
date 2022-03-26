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
    console.log(typeof number)
    if (typeof number !== "number")
      throw new Error("The input of the user is not of type number");
    alert(number * 10);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
