const flags:Array<string> = ["israel","syria", "thiland","wonderland"  ]
const boot = document.querySelector("#boot")

function FlagOption (somethingStupid:string){

return `<option value=${somethingStupid}>${somethingStupid}</option>`

}


function FlagSelect (options:Array<string>, someFunction:string, element:Element ){

    try {
        let html = `<select onchange="${someFunction}(event)"> 
        <option value="" disabled selected>Choose your papaya</option>`;
        options.forEach(el => {
            html += FlagOption(el)
        });
        html += `</select>`
        element.innerHTML = html;
    } catch (error) {
        console.log(error)
    }
}
function handlepapaya(event){
    let selection:any = document.querySelector("#selection");
    let images:any = document.querySelector("#image-slot")
    selection.innerText = `your papaya is: ${event.target.value}`;
    if (event.target.value =='israel')
        return images.innerHTML = '<img  src="papaya-images/papaya1.jpg" alt="">'
        if (event.target.value =='syria')
        return images.innerHTML = '<img  src="papaya-images/papaya2.jpg" alt="">'
        if (event.target.value =='thiland')
        return images.innerHTML = '<img  src="papaya-images/papaya3.jpg" alt="">'
        if (event.target.value =='wonderland')
        return images.innerHTML = '<img  src="papaya-images/papaya4.jpg" alt="">'
        
}
FlagSelect(flags,'handlepapaya', boot )






