const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Product{
    id:string;
    image:string;
    price:string;
    name:string;
    imgSrc:string;
}

const products:Array<Product> = [];



const handleAddProduct = (ev: any) => {
 
  ev.preventDefault();

  const image = ev.target.elements.image.files[0];
  const name = ev.target.elements.name.value;
  const price = ev.target.elements.price.value;

  const id = uid();
  const imgSrc = URL.createObjectURL(image);
  
  const item:Product = { id, image,imgSrc, name, price };
  products.push(item);

  renderProducts();
  ev.target.reset()
  
};

function renderProducts(){
    const root = document.querySelector("#root");

    let html = '';
    products.forEach(product=>{
       html+=
        `<div>
            <div>${product.name}</div>
            <img src=${product.imgSrc}>
            <div>Price: ${product.price}</div>
        </div>`

    })

    root.innerHTML = html;
}
