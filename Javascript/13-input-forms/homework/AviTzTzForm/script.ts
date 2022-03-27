const btn: HTMLButtonElement = document.querySelector(".btn");
const uploadFile: HTMLInputElement = document.querySelector("#upload");
const inputNumber: HTMLInputElement = document.querySelector(".numberarea");
const img: any = document.querySelector(".img");
const parNumber: HTMLElement = document.querySelector(".parnumber");
const wrapper:HTMLDivElement = document.querySelector('.wrapper') 

uploadFile.addEventListener("change", (e) => {
  const file = new FileReader();
  file.onload = function () {
    img.src = file.result;
    img.style.width = "30vw";
    img.style.height = "25vh";
  };
  file.readAsDataURL(uploadFile.files[0]);
});

inputNumber.addEventListener("keypress", (e) => {
  if (!Number(e.key)) {
    return e.preventDefault();
  } else {
    inputNumber.addEventListener("keyup", (e) => {
      parNumber.innerHTML = inputNumber.value;
    });
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  parNumber.style.color = getRandomColor();
  wrapper.style.border = `solid 2px ${getRandomColor()}`
});


function getRandomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#'
  for(let i = 0; i < 6;i++){
  color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

getRandomColor()
