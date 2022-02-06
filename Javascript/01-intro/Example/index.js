const h1 = document.getElementById('rootH1');
h1.style.color = 'yellow'




function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handleChangeTest(ev){
    const text = ev.target.value;
    h1.innerText = text
}

setInterval(()=>{
    h1.style.color = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();
},1000)
