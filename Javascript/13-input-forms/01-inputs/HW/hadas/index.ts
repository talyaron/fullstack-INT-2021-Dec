const numbersDiv= document.querySelector(".print_numbers");
const img:HTMLImageElement= document.querySelector ('.img_url');

function printNumbers(event){
    console.log(event)
   numbersDiv.innerHTML= `${event.target.value}`
}

function printurl(event){
    const url:URL= event.target.value;
    img.src= `${url}`;

}
