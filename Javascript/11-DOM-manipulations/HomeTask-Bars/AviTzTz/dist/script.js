var section = document.querySelector('section');
var arr = [22, 1, 70, 51, 75, 42];
function creatBars(insertArr) {
    // ------- For every number in the array create bar -------
    for (var i = 0; i < insertArr.length; i++) {
        // ------- If there is one number that bigger then 100 alert it to the user------- 
        if (insertArr[i] > 100) {
            insertArr[i] = 100;
            alert("Your array :" + insertArr + " contain number more then 100%");
        }
        var div = document.createElement('div');
        // ------- Adding class for the new div --------
        div.classList.add('cssColumns');
        // ------- inserting height (depands on the number of the bar)
        div.style.cssText = "height : " + insertArr[i] + "%";
        var par = document.createElement('p');
        par.innerText = "" + insertArr[i];
        par.classList.add('pre');
        // ------- inserting text (depands on the number of the bar)
        // div.innerText = `${insertArr[i]}%`;
        // ------- Append the new div in the section 
        section.appendChild(div);
        div.appendChild(par);
    }
}
// let property = window.getComputedStyle(div,'::after')
creatBars(arr);
