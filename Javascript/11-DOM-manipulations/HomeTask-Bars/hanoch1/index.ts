const graf:Array<number>=[50, 100, 60]
let Bar:HTMLDivElement = document.querySelector('.bar')
console.log(Bar)

    
    graf.forEach(elm =>{
        
        const multipleBar = Bar.style.height = elm * 2 + 'px';
        // const clone = multipleBar.cloneNode(true)
        // document.body.appendChild(clone)
        // clone.classList.add("bar")
    //    const b:any = document.body.innerHTML = Bar
    //    b.classList("Bar")
       document.appendChild(Bar)


         
    })
    




            