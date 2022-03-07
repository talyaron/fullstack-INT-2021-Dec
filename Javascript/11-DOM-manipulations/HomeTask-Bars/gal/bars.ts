const Populationsample:Array<any>= []

Populationsample.forEach(element => {
    let addedDiv = document.createElement("wrapper__bar");
    addedDiv.classList.add ("wrapper__bar")
    addedDiv.style.height = (element*2)+"px" 
    let text = document.createTextNode(`${element}`);
    addedDiv.appendChild(text);
    let wrapper = document.getElementById("wrapper");
    wrapper.appendChild(addedDiv);
});


