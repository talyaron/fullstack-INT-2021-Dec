const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

// console.log(item)

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

//------drag start and end for card----//
function dragStart(event) {
    console.log('drag start', event.target)
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragEnd(event) {
    console.log('drag start', event.target)
    // event.target.classList.remove('hold')
    // event.target.classList.remove('hide')
    //or
    // event.target.classList.remove('hold', 'hide')
    //or
    event.target.className = 'item'
}

//-------dreg over && enter && leave && drop for placeholder----//
function dragOver(event) {
    console.log('drag over')
    event.preventDefault()
}

function dragEnter(event) {
    console.log('drag enter')
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    console.log('drag leave')
    event.target.classList.remove('hovered')
}

function dragDrop(event) {
    console.log('drag drop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}