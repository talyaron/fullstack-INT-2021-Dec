function handleSelectMusic(ev:any){
       
    console.log(ev.target.value)
}

function chooseCar(ev){
    console.log(`My car will be: `,ev.target.value)
}

const cars = ['mazda','volvo', 'mercedes', 'bmw', 'tesla', 'hyundai'];
function renderOption(option:string){
    return `<option value=${option}>${option}</option>`
}

function renderSelect(options:Array<string>, functionName:string, element:Element){
    try {
        let html = `<select onchange="${functionName}(event)"><option value="" disabled selected>Choose</option>`;
        options.forEach(el => {
            html += renderOption(el)
        });
        html += `</select>`
        element.innerHTML = html;

    } catch (error) {
        console.log(error)
    }
}

const root = document.querySelector('#root');
renderSelect(cars,'chooseCar',root);