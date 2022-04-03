
function handleSend(ev: any) {
    ev.preventDefault();
    console.log(ev);
    const firstInput:any = ev.target.elements.firstInput.value;
    const secondInput:any = ev.target.elements.secondInput.value;
    ev.target.elements.firstInput.value = '';
    ev.target.elements.secondInput.value = '';


    // return{
    
    // 

    console.log(Math.floor(firstInput/secondInput))

    let result:any = document.querySelector('.result');
    try{
        const value = Math.round(firstInput/secondInput)
        result.innerHTML = value
    }
    catch(err){
        console.log(err);
    }
    
    // console.log(firstInput, secondInput)
}

// function result(event){
//     console.dir(event)
    // let result:HTMLDivElement = document.querySelector('.result');
    // try{
    //     const value = event.target.value;
    //     result.innerHTML = value
    // }
    // catch(err){
    //     console.log(err);
    // }
// }