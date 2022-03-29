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
    selection.innerText = `your papaya is: ${event.target.value}`;
    console.log(event.target.value)
}
FlagSelect(flags,'handlepapaya', boot )
