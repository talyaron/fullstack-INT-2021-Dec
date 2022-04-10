
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
                  <button onclick="showUpdateMenu(event)" class="btnUpdate">update</button>
                  <p>in/out stock</p>
                  <input type="checkbox"> 
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
  
  const index = products.findIndex(object => {
    return object.id === productId;
  });
  
  
  if (index !== -1) {
    products[index].name = ev.target.elements.productName.value
  }
  if (index !== -1) {
    products[index].price = ev.target.elements.NewPrice.value
  }
  if (index !== -1) {
    products[index].image = ev.target.elements.newUrl.value
  }
  console.log(products)
  
  renderProducts()
}
//////////////////////////////////////////////////////////////////////////////
function showUpdateMenu(event){
  
  
  const showUpdatePanal =document.querySelector(".updateProduct").style.display
  if(showUpdatePanal == "none"){
  
    showUpdatePanal == "block"
  }
  
  console.dir(showUpdatePanal)

}