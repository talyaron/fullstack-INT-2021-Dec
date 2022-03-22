const meteor:any = document.querySelectorAll('.picture');
const boomImg:any = document.querySelector('.boom_image');

// starting random positions for meteors
meteor.forEach(element => {
    element.style.top = Math.random()*100 + 'vh';
    element.style.left = Math.random()*100 + 'vw';
    element.style.transform = `rotate(${(Math.random()*360)}deg)`
})
////////////////////////////////////////
function getRandomNumberVertical() {
    let numSome = Math.random()*100 + 'vh';
    return numSome;
}
function getRandomNumberHorizontal() {
    let numSome = Math.random()*100 + 'vw';
    return numSome;
}
function getRandomRotation() {
    meteor.forEach(element => {
        element.style.transform = `rotate(${(Math.random()*360)}deg)`
    })
}
////////////////////////////////////////


// apply random position for each meteor
function movPos() {
    meteor.forEach(element => {
        element.style.top = getRandomNumberVertical();
        element.style.left = getRandomNumberHorizontal(); 
        getRandomRotation()
    });
}
// sets random position each 5000 milisec
setInterval(movPos, 5000)

// checking distance less then rockDist each 1 milisec
setInterval(positionFigure, 0.5)

function positionFigure() {
    let rockDistance = 5;
for (let i=0; i<meteor.length; i++) {
    let post  = meteor[i].getBoundingClientRect().top;
    let posb  = meteor[i].getBoundingClientRect().bottom;
    let posl  = meteor[i].getBoundingClientRect().left;
    let posr  = meteor[i].getBoundingClientRect().right;
    for (let j=i+1; j<meteor.length; j++) {
        let pos2t = meteor[j].getBoundingClientRect().top;
        let pos2b = meteor[j].getBoundingClientRect().bottom;
        let pos2l = meteor[j].getBoundingClientRect().left;
        let pos2r = meteor[j].getBoundingClientRect().right;
        ////////////////////////////////////////////////////////////////////////////////////
        /* boomImg.style.display = 'block'; */
    
            if      (Math.abs(posb - pos2t) < rockDistance && Math.abs(posr - pos2l) < rockDistance) {
            console.log('bottom top and right left');
/*             boomImg.style.display = 'block';
            boomImg.style.left = meteor[j].getBoundingClientRect().left;
            boomImg.style.top = meteor[j].getBoundingClientRect().top; */

        }   else if (Math.abs(posb - pos2t) < rockDistance && Math.abs(posl - pos2r) < rockDistance) {
            console.log('bottom top and left right')
            

        }   else if (Math.abs(post - pos2b) < rockDistance && Math.abs(posl - pos2r) < rockDistance) {
            console.log('top bottom and left right')
        

        }   else if (Math.abs(post - pos2b) < rockDistance && Math.abs(posr - pos2l) < rockDistance) {
            console.log('top bottom and right left')
            
        } 
           
           
        }
    }
}

