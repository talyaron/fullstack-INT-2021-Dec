console.log(`hi`)
/*Array of bars heights defiend*/
/*Adding numbers to the array will add a matching bar*/
const barsHeight: Array<number> = [47, 90, 30, 15, 85,20,50] 


/*For each elemnt in the array define a height as the number
suggests, and write the number*/
barsHeight.forEach(element => {
    var addedDiv = document.createElement("wrapper__bar");
    console.log(addedDiv)
    addedDiv.style.height = (element*2)+"px" //The number is multyplayed by two for definition purposes
    addedDiv.style.width = 100+"px"
    addedDiv.style.backgroundColor = "gray"
    var text = document.createTextNode(`${element}`);
    addedDiv.appendChild(text);
    var wrapper = document.getElementById("wrapper");
    wrapper.appendChild(addedDiv);
});

