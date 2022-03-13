const schema:Array<number> =[50,60,100];

schema.forEach(elm=>{
    let Div = document.createElement("bar__multiple");
    Div.classList.add ("bar__multiple")
    Div.style.height = (elm*2)+"px" 
    let text = document.createTextNode(`${elm}`);
    Div.appendChild(text);
    let bar  = document.getElementById("bar");
    bar.appendChild(Div);
})