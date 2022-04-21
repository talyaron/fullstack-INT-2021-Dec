//this gives a unique id
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
//this is an interface to catch bugs and rats
interface Product {
  id: string;
  image: string;
  price: string;
  name: string;
  // imgSrc: string;
}
////////////////////////////////////////////////////////////////////////////////////
//this is a temporary array for storing the new product cards
let products: Array<Product> = [];

//////////////////////////////////////////////////////////////////////////////////////
// this handles the button for adding a product
const handleAddProduct = (ev: any) => {
  ev.preventDefault();

  const image = ev.target.elements.image.value;
  const name = ev.target.elements.name.value;
  const price = ev.target.elements.price.value;

  const id = uid();
  // const imgSrc = URL.createObjectURL(image);

  const item: Product = { id, image, name, price };
  products.push(item);


 localStorage.setItem('products', JSON.stringify(products))
  renderProducts();
  ev.target.reset();
};
function handleLoad(){
  const stringProducts = localStorage.getItem('products')
  if (stringProducts){
    products = JSON.parse(stringProducts)
    console.log(products)
    renderProducts();
  }

} 
////////////////////////////////////////////////////////////////////////////
//this renders products
function renderProducts() {
  const root = document.querySelector("#root");

  let html = "";
  products.forEach((product) => {
    html += `<div class="megaTest" id="${product.id}">
      <div class="upload-product"  >
              <div class="outOfStuckText" id="noStock-${product.id}" style="display:none"><h2>out of stock</h2></div>
            <img src=${product.image}>
            <div class="test2" >
                  <div>name:${product.name}</div>
                  <div>Price: ${product.price}</div>
                  <button onclick="handleRemoveProduct('${product.id}')" class="btnDelete">delete</button>
                  <button onclick="showUpdateMenu('${product.id}')" class="btnUpdate">update</button>
                  <p id="stock_Text"> stock</p>
                  <input onchange="outOfStockFunc(event, '${product.id}')" class="NumInput" name="stockNum" type="number" value="1" min="0" > 
            </div>
        </div>
        <form class="updateProduct" id="update-${product.id}" onsubmit="handleUpdateProduct(event, '${product.id}')" style="display:none">
          <input type="text" name="productName" value="${product.name}">
          <input type="text" name="newUrl" placeholder="NEW Item Image url">
          <input type="text" name="NewPrice" value="${product.price}">
          <button type="submit">send</button>
    </form>
     </div>`;
  });

  root.innerHTML = html;
}
////////////////////////////////////////////////////////////////////////
// this removes the product card
function handleRemoveProduct(productId: string) {
  const index = products.findIndex((object) => {
    return object.id === productId;
  });
  if (index !== -1) products.splice(index, 1);

  console.log(products);
  renderProducts();
}
///////////////////////////////////////////////////////////////////////
// this updates the product card
function handleUpdateProduct(ev: any, productId: string) {
  ev.preventDefault();
  console.log(productId);

  const index = products.findIndex((object) => object.id === productId);

  if (index !== -1) {
    products[index].name = ev.target.elements.productName.value;
  }
  if (index !== -1) {
    products[index].price = ev.target.elements.NewPrice.value;
  }
  if (index !== -1) {
    products[index].image = ev.target.elements.newUrl.value;
  }

  renderProducts();
}
//////////////////////////////////////////////////////////////////////////////
function showUpdateMenu(productId) {
  try {
    const updatePanel: HTMLElement = document.querySelector(`#update-${productId}`);

  
    //toggle update form
    if (updatePanel) {
      if (updatePanel.style.display === "none") {
        updatePanel.style.display = "block"
      }else {
        updatePanel.style.display = "none"
      }
    } else {
      throw new Error (`Couldnt find update form with id "update-${productId}"`)
    }
  } catch (err) {
    console.error(err);
  }
}

//////////////////////////////////////////////////////////////////////////////////////

function outOfStockFunc(event, productId) {
  const stock: HTMLElement = document.querySelector(`#noStock-${productId}`);
    
  const inStock = event.target.value
  
  if (inStock === '0') {
     stock.style.display = "block"
     stock.classList.add('upload-product--blur')
  } else {
    stock.style.display = "none"
    
  }
  
}
