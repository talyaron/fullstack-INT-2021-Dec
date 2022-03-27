
function handleSelectCountry(ev: any){
    console.log(ev.target.value)
}
const countries:any = document.querySelectorAll('.option')
const findFlag = countriesFlags.find(countries)


const countriesFlags:Array<any> = [
    {
        name:"israel", 
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    },
    {
        name:"Greece", 
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    },
    {
        name:"U.S.A", 
        src: "https://www.countryflags.com/wp-content/uploads/israel-flag-png-large.png"
    }
]




function findCountry (){
    for (let i=0, i<countriesFlags.length, i++)
}




function countryOptions(option:string){
    return `<option value=${option}>${option}</option>`
}

function handleUrl(options:Array<string>, functionName:URL, element:Element){
    try {
        let html = `<select onchange="${functionName}(event)"> 
        <option value="" disabled selected>Choose</option>`;
        options.forEach(el => {
            html += countryOptions(el)
        });
        html += `</select>`
        element.innerHTML = html;

    } catch (error) {
        console.log(error)
    }
}