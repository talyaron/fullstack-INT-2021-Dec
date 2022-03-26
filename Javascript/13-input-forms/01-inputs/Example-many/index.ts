function createList(rootElement: HTMLElement, numberOfElements: number) {
  try {
    let html = "<div class='list'>";
    for (let i = 0; i < numberOfElements; i++) {
      html += createElement(i);
    }
    html += "</div>";

    rootElement.innerHTML = html;
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Do it anaway");
  }
}

function createElement(id: string | number) {
  return `<div id="id-${id}">${id}: <button onclick='handleDeleteMe(event)' name='aaa'>DELETE ME</button><input type='color' onchange='handleChangeColor(event)' /></div>`;
}

const root: HTMLElement = document.querySelector("#root1");

createList(root, 25);

function handleDeleteMe(ev) {
  console.dir(ev);
  ev.target.parentNode.remove();
}

function handleChangeColor(ev) {
  try {
    console.dir(ev);

    const value = ev.target.value;
    const parentNode = ev.target.parentNode.children.aaa;
    parentNode.style.color = value;
  } catch (err) {
    console.error(err);
  }
}
