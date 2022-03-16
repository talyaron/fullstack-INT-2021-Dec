const images: NodeListOf<any> = document.querySelectorAll(".meteorImg")

console.log(images)


function randomMovement() {
    const random = Math.round(Math.random() * 90)
    return random
}

    
function checkcollition()
{

    for (let i = 0; i < images.length; i++)
     {
        for (let j = 0; j < images.length; j++)
         {
            if(i===j){
                continue;
            }
            if(images[i].x <images[j].x+ images[j].width &&
                         images[i].x + images[i].width > images[j].x &&
                         images[i].y <images[j].y+ images[j].height &&
                         images[i].y + images[i].height > images[j].y 
                        )
                    {
                        console.log("boom");
                       
                    }
            
        }
        
    }

    
}
function moveImages() {
    images.forEach(element => {
        element.style.left = randomMovement() + "vw"
        element.style.top = randomMovement() + "vh"
    });

    checkcollition();
}


window.requestAnimationFrame(moveImages);

setInterval(moveImages, 4500)

//חלק 2//

function handleClick (img)
{
    img.target.style.display = 'none';
}

for (let i = 0; i < images.length; i++) {
   images[i].onclick = handleClick;
    
}