const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Product {
  id: string;
  image: string;
  price: string;
  name: string;
  imgSrc: string;
}

const products: Array<Product> = [];



const handleAddProduct = (ev: any) => {

  ev.preventDefault();

  const image = ev.target.elements.image.files[0];
  const name = ev.target.elements.name.value;
  const price = ev.target.elements.price.value;

  const id = uid();
  const imgSrc = URL.createObjectURL(image);

  const item: Product = { id, image, imgSrc, name, price };
  products.push(item);

  renderProducts();
  ev.target.reset()

};

function renderProducts() {
  const root = document.querySelector("#root");

  let html = '';
  products.forEach(product => {
    html +=
    `<div class="megaTest" >
      <div class="test" >
            <img src=${product.imgSrc}>
            <div class="test2" >
                  <div>name:${product.name}</div>
                  <div>Price: ${product.price}</div>
                  <button onclick="handleRemoveProduct('${product.id}')" class="btnDelete">delete</button>
                  <button onclick="handleUpdateProduct('${product.id}')" class="btnUpdate">update</button>
                  <p>in/out stock</p>
                  <input type="checkbox"> 
            </div>
        </div>
        <form onsubmit="handleUpdateProduct(event, ${product.id})">
            <input type="text" name="productName" value="${product.name}" >
            <input type="text" value="${product.price}" >
            <input type="file" value="${product.imgSrc}" >
            <input type="submit" value="confirm changes"/>
            </form>
     </div>`
  })

  root.innerHTML = html;
}

function handleRemoveProduct(productId: string) {
  // products.indexOf()
  const index = products.findIndex(object => {
    return object.id === productId;

  });
  if (index !== -1) products.splice(index, 1);

  console.log(products)
  renderProducts()
}


function handleUpdateProduct(event, productId: string) {
event.preventDefault();
  const index = products.findIndex(object => {
    return object.id === productId;
  });

  if(index!==-1) products[index].name = event.target.elements.productName.value
  console.log(products)

  


}