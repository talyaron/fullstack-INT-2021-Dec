const graf:Array<number>=[50, 100, 60]
let Bar:HTMLDivElement = document.querySelector('.bar')
console.log(Bar)

    let schema;
    graf.forEach(elm =>{
        
         Bar.style.height = elm * 2 + 'px';
        //  const dup = Bar * graf.length;
        //  console.log(dup)
        // // const node = Bar.lastChild
        const clone = Bar.cloneNode(true)
        document.body.appendChild(clone)
         
    })
    




            