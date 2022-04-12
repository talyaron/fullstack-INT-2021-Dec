
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
const products: Array<Product> = [];

//////////////////////////////////////////////////////////////////////////////////////
// this handles the button for adding a product
const handleAddProduct = (ev: any) => {

  ev.preventDefault();

  const image = ev.target.elements.image.value;
  const name = ev.target.elements.name.value;
  const price = ev.target.elements.price.value;

  const id = uid();
  // const imgSrc = URL.createObjectURL(image);

  const item: Product = { id, image,  name, price };
  products.push(item);

  renderProducts();
  ev.target.reset()

};
////////////////////////////////////////////////////////////////////////////
//this renders products 
function renderProducts() {
  const root = document.querySelector("#root");

  let html = '';
  products.forEach(product => {
    html +=
      `<div class="megaTest" >
      <div class="test" >
      
            <img src=${product.image}>
            <div class="test2" >
                  <div>name:${product.name}</div>
                  <div>Price: ${product.price}</div>
                  <button onclick="handleRemoveProduct('${product.id}')" class="btnDelete">delete</button>
                  <button onclick="showUpdateMenu('${product.id}')" class="btnUpdate">update</button>
                  <p id="stock_Text"> stock</p>
                  <input onchange="outOfStockFunc(event)" class="NumInput" name="stockNum" type="number" value="1" min="0" > 
            </div>
        </div>
        <form class="updateProduct" onsubmit="handleUpdateProduct(event, '${product.id}')">
        <input type="text" name="productName" value="${product.name}">
        <input type="text" name="newUrl" placeholder="NEW Item Image url">
        <input type="text" name="NewPrice" value="${product.price}">
        <button type="submit">send</button>
    </form>
     </div>`
  })

  root.innerHTML = html;
}
////////////////////////////////////////////////////////////////////////
// this removes the product card
function handleRemoveProduct(productId: string) {
  const index = products.findIndex(object => {
    return object.id === productId;

  });
  if (index !== -1) products.splice(index, 1);

  console.log(products)
  renderProducts()
}
///////////////////////////////////////////////////////////////////////
// this updates the product card
function handleUpdateProduct(ev: any, productId: string) {
  ev.preventDefault();
  console.log(productId)
  
  const index = products.findIndex(object =>object.id === productId);
  
  
  if (index !== -1) {
    products[index].name = ev.target.elements.productName.value;
  }
  if (index !== -1) {
    products[index].price = ev.target.elements.NewPrice.value;
  }
  if (index !== -1) {
    products[index].image = ev.target.elements.newUrl.value;
  }
  
  
  renderProducts()
}
//////////////////////////////////////////////////////////////////////////////
function showUpdateMenu(productId){
  
  const index = products.findIndex(object =>object.id === productId);
   const updatePanel:HTMLElement =document.querySelector(".updateProduct")
   
  // if(updatePanel.style.display === "none"){
  
  //   updatePanel.style.display = "block"
  // } else {
  //   updatePanel.style.display = "none"
  // }
  console.log(productId)
  if (productId) {
     updatePanel.style.display === "none"
    return updatePanel.style.display = "block"
  }else {
        updatePanel.style.display = "none"

  }
  renderProducts()
  products.forEach(showUpdateMenu)
}


//////////////////////////////////////////////////////////////////////////////////////

function outOfStockFunc(event) {
 const stock = document.querySelector(".test")
  const inStock = event.target.elements.stockNum.value;
  console.log(2);
 if( inStock == "0" ){

     return stock.innerHTML + '<h2>out of stock</h2>'
  } else {
    
  }
  
 
}