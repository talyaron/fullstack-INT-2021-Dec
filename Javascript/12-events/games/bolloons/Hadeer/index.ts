const balloons: any = document.querySelectorAll('.balloon');

balloons.forEach(Element=>{
    Element.style.top=`-12vh`;
    Element.style.left=`Math.floor(Math.random() * 100)+wh`

}
    )