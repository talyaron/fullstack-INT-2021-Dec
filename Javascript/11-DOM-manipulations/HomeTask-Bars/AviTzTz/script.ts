const section = document.querySelector('section') as HTMLElement;

const arr : number[] = [22,100,70,51,75,42,31,60]

function creatBars (insertArr : Array<number>){

// ------- For every number in the array create bar -------
    for(let i = 0;i < insertArr.length;i++){

// ------- If there is one number that bigger then 100 alert it to the user------- 
        if(insertArr[i] > 100){
            insertArr[i] = 100;
            alert(`Your array :${insertArr} contain number more then 100%`)
        }
        const div = document.createElement('div');

// ------- Adding class for the new div --------
        div.classList.add('cssColumns');

// ------- inserting height (depands on the number of the bar)
        div.style.cssText = `height : ${insertArr[i]}%`;
        let par = document.createElement('p');
        par.innerText = `${insertArr[i]}`;
        par.classList.add('pre')

// ------- inserting text (depands on the number of the bar)
        // div.innerText = `${insertArr[i]}%`;
// ------- Append the new div in the section 
        section.appendChild(div);
        div.appendChild(par)
    }
}
creatBars(arr);
