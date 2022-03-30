function handleSend(ev) {
    ev.preventDefault();
    console.log(ev);
    var firstInput = ev.target.elements.firstInput.value;
    var secondInput = ev.target.elements.secondInput.value;
    ev.target.elements.firstInput.value = '';
    ev.target.elements.secondInput.value = '';
    // return{
    // 
    console.log(Math.floor(firstInput / secondInput));
    var result = document.querySelector('.result');
    try {
        var value = Math.round(firstInput / secondInput);
        result.innerHTML = value;
    }
    catch (err) {
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
