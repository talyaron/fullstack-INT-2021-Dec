function handleSelectflag(ev:any){
    console.log(ev.target.value)
}

const flag = ['Argentine', 'Israel', 'England', 'France'];
function myOptions(option:string){
    return`<option value=${option}>${option}</option>`
}

function mySelections(options:Array<string>, functionName:string, element:Element){
   try { 
        let html = `<select onchange="${functionName}(event)">
        <option value="" disabled selected>Choose</option>`;
        options.forEach(el => {
            html += myOptions(el)
 
        });
        html += `</select>`
        element.innerHTML = html;

    } catch (error){
        console.log(error)
    }    
 

}

const root = document.querySelector('#root');
mySelections(flag,'handleSelectflag',root)