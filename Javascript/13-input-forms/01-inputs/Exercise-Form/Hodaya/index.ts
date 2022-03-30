console.log("Hi");
//get input from user and display dom//


function handleGetText(event: any) {
  console.dir(event);

  let outputOfTExt: HTMLElement = document.querySelector(
    `#${event.target.name}`
  );
  try {
    const value = event.target.value;
    outputOfTExt.innerHTML = value;
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

let image = document.getElementById("image") as HTMLImageElement;

function loadImg(event) {
  console.dir(event);

  let urlImg = new Image();
  urlImg.src = prompt("Please paste the URL of your pic");

  urlImg.onerror = function () {
    alert("OOPS! looks like your URL is wrong");
  };
  urlImg.onload = function () {
    image.src = urlImg.src;
  };
  console.log(urlImg);
}
function uploadFile(event) {
    let fileUP = document.getElementById("file");
    fileUP.setAttribute("type", "file");
    document.body.appendChild(fileUP);
 }
