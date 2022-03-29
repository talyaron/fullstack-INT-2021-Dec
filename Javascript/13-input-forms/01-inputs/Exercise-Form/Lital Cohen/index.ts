console.log("hello");
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
//get a number from user and display dom as the user is typing change the event from 'onchange' to 'input//


//user paste an url of img and it is displayed on the DOM (used prompt couldnt find alternative solution)//
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
//checking (press login btn) if username and password matched as in siging up if yes the dom turn green and if not turns red//

function checkThePassword(event) {
  let valueOfUser: HTMLElement = document.getElementById("userName");
  let valueOfPass: HTMLElement = document.getElementById("password");
  let valueOfUserLog: HTMLElement = document.getElementById("userNameLogin");
  let valueOfPassLog: HTMLElement = document.getElementById("passwordLogin");

  // console.log(valueOfUser.innerHTML);
  // console.log(valueOfPass.innerHTML);
  // console.log(valueOfUserLog.innerHTML);
  // console.log(valueOfPassLog.innerHTML);

  if (
    document.getElementById("userName").innerHTML ===
      document.getElementById("userNameLogin").innerHTML &&
    document.getElementById("password").innerHTML ===
      document.getElementById("passwordLogin").innerHTML
  ) {
    console.log("user name + ps yes");
    document.body.style.backgroundColor = "green";
  } else {
    console.log("no no");
    document.body.style.backgroundColor = "red";
  }
}
//uploading file from the local pc and display on dom//

function uploadFile(event) {
  let fileUP = document.getElementById("file");
  fileUP.setAttribute("type", "file");
  document.body.appendChild(fileUP);
}
