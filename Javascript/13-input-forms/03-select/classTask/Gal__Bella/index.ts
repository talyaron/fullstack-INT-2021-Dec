function handleSelectCountry(ev: any){
    console.log(ev.target.value)
}

const flag:HTMLImageElement = document.querySelector('.img');


function handleUrl (ev){
    console.dir(ev)
    let inputNumber:HTMLElement = document.querySelector(`#${ev.target.name}`);
    const value = ev.target.value;
    inputNumber.innerHTML = value
}