function handleGetText(event:any) {
   
    console.dir(event)
    console.log(event.key)
    console.log(event.target.value)

    const root:HTMLDivElement = document.querySelector('#root');
    root.innerText = event.target.value;
}

function handleChangeColor(event:any) {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
}

function handleCheck(event:any) {
    console.dir(event)
    console.log(event.target.checked);
}

