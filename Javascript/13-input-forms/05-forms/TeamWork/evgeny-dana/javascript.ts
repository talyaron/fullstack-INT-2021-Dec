
const server_wrapper = document.querySelector('.Server_wrapper')


function handleBtn(ev: any) {
    ev.preventDefault();

    const image = ev.target.elements.image.files[0]
    const nameinput = ev.target.elements.name.value
    const priceinput = ev.target.elements.price.value

    console.log(image, nameinput, priceinput)

    const item = { image, nameinput, priceinput }
    console.log(item.image)

    const imgSrc = URL.createObjectURL(item.image)

    
    
    
    
     const display_item = document.createElement('div')
     server_wrapper.appendChild(display_item)
     display_item.setAttribute('class', 'display_card')
    
    const detail_list = document.createElement('div')
    display_item.appendChild(detail_list)
    detail_list.setAttribute('class', 'detail_list')

    const image_output = document.createElement('div')
    display_item.appendChild(image_output)
    image_output.setAttribute('id', 'image_output')
    image_output.innerHTML = `<img src="${imgSrc}" alt="" id="image-preview"> </div>`
    const imagePreview = document.querySelector('#image-preview')
    imagePreview.src = imgSrc
    
    const name_output =document.createElement('div')
    detail_list.appendChild(name_output)
    name_output.setAttribute('id', 'name_output')
    name_output.innerHTML = `<div>item name:${nameinput}</div>`
    
    const price_output = document.createElement('div')
    detail_list.appendChild(price_output)
    price_output.setAttribute('id', 'price_output')
    price_output.innerHTML = `<div>item price:${priceinput}</div>`
    
    
    
    
    
    



   
}










