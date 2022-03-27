
  function handleGetText(event: any) {
    console.dir(event)
    console.log(event.target.value);
  
    const inputName: HTMLDivElement = document.querySelector("#inputName");
    inputName.innerText = event.target.value;
    const inputEmail: HTMLDivElement = document.querySelector("#inputEmail");
    inputEmail.innerText = event.target.value; 
    const inputPassword: HTMLDivElement = document.querySelector("#inputPassword");
    inputPassword.innerText = event.target.value;

  }
