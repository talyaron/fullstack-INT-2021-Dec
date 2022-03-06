const boxes: any = document.querySelectorAll('.box')

    boxes.forEach(element => {
        element.innerText = element.id
    })
