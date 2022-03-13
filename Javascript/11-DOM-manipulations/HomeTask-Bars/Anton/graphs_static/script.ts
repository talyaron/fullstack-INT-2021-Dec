const array: Array<number> = [130, 105, 63, 200, 300, 700];

const graphs:any = document.querySelectorAll('.graph');


function arrayCoeffic(list:Array<number>) {
const coefficient =[];
const max = Math.max(...list);
    
    for (let i=0; i < list.length; i++) {
        coefficient[i] = (((list[i])/max)*100 + '%');
    } return coefficient;
   
}

function graphChangeVisual(divs, coeffic) {
    
    for (let i=0; i < coeffic.length; i++) {
        divs[i].style.height = coeffic[i] ;
        divs[i].innerHTML = `<p>${array[i]}</p>`
    }

    
}

graphChangeVisual(graphs, arrayCoeffic(array));