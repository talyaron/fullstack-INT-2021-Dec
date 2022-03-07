const Populationsample:Array<any>= [10,20,30,40,50]

Populationsample.forEach(element => {
    let addedDiv = document.createElement("Bars");
    addedDiv.classList.add ("bars")

    addedDiv.style.height = (element*2)+"px" 
    let text = document.createTextNode(`${element}`);
    addedDiv.appendChild(text);

    let bars = document.getElementById("bars");
    bars.appendChild(addedDiv);
});


