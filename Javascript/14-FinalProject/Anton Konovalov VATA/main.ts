const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const profText = document.querySelector(".navbar .nav-item .profText");
const userRightTextProfileTextTemplate = document.querySelector('#rightTextProfileTextTemplate');

// HEADER
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
       hamburger.classList.remove("active");
       navMenu.classList.remove("active");
   }))
// HEADER E N D

//////////////////////////////////////////////////////////////////////

// Registration Verification LOCAL STORAGE
interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    birth: number;
    password: number;
    confirmPassword: number;
}

const registration = document.querySelector("#root");
let registerUserDataMain = {};
const products = [];
const registeredUsers = [];

let registerUserData = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    birth: undefined,
    password: undefined,
    confirmPassword: undefined
};

if (window.localStorage.getItem('userName') && window.localStorage.getItem('userLastName')) {
    console.log('user exist');
    console.log(registeredUsers);
    document.querySelector('.registration').style.display = 'none';
    profText.innerHTML = `<h1>Welcome <br> ${registerUserData.firstName || window.localStorage.getItem('userName')}
     ${registerUserData.lastName||window.localStorage.getItem('userLastName')}</h1>`
    //  window.localStorage.removeItem('userName', `${registerUserData.firstName}`)
    //  window.localStorage.removeItem('userLastName', `${registerUserData.lastName}`)
 
}
else{
    console.log('user not detected')
    document.querySelector('.registration').style.display = 'flex'
}
// Registration Verification E N D  LOCAL STORAGE
// Registeration Form

function handleSend(ev: any) {
    interface Profile {
        firstName: string;
        lastName: string;
        email: string;
        birth: number;
        password: number;
        confirmPassword: number;
    }

    let registerUserData = {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        birth: undefined,
        password: undefined,
        confirmPassword: undefined
    };
    ev.preventDefault();
    const elements = ev.target.elements
    for(let i=0; i<elements.length; i++) {
        if (elements[i].name && elements[i].value ) {
            registerUserData[elements[i].name] = elements[i].value;
            // (document.querySelector('form')[i] as HTMLInputElement).value  = '';
        } 
    } 

    registeredUsers.push(registerUserData);

    if (registerUserData.password !== registerUserData.confirmPassword) 
     { alert('Please enter password correctly') 
     } else if (typeof registerUserData.password == `${undefined}` && typeof registerUserData.confirmPassword == `${undefined}`) {
        alert('Please enter password')
     } else if (typeof registerUserData.firstName == `${undefined}` || typeof registerUserData.lastName == `${undefined}`) {
        alert('Please enter your full name')
    } else {
        registerUserDataMain = registerUserData;
        (<HTMLInputElement>registration).style.display = 'none'; 
        profText.innerHTML = `<h1>Welcome <br> ${registerUserData.firstName} ${registerUserData.lastName}</h1>`
        window.localStorage.setItem('userName', `${registerUserData.firstName}`);
        window.localStorage.setItem('userLastName', `${registerUserData.lastName}`);
        window.localStorage.setItem('email', `${registerUserData.email}`);
        window.localStorage.setItem('birth', `${registerUserData.birth}`);
        window.localStorage.setItem('password', `${registerUserData.password}`);
    }
}
// Registeration Form  E N D
// ------------ REGISTERED USER PROFILE CARD ------------ //
let imageCardProfile;
function displayUserCard () {
    document.querySelector('.wrapper .profileTextTemplate').style.display = 'flex';
    interface Profile {
        firstName: string;
        lastName: string;
        email: string;
        birth: number;
        password: number;
        confirmPassword: number;
    }

    console.log(registeredUsers);
    let html = '';
    console.log('hello')
    registeredUsers.forEach(user => {
        console.log(user.firstName)
         html +=   `<h1>First Name: ${user.firstName}</h1>
                    <h1>Last Name: ${user.lastName}</h1>
                    <h1>Email: ${user.email}</h1>
                    <h1>Date of Birth: ${user.birth}</h1>` 
                }); 
    // userRightTextProfileTextTemplate.innerHTML = html; 
    userRightTextProfileTextTemplate.innerHTML =   `<h1>First Name: ${window.localStorage.getItem('userName')}</h1>
                                                    <h1>Last Name: ${window.localStorage.getItem('userLastName')}</h1>
                                                    <h1>Email: ${window.localStorage.getItem('email')}</h1>
                                                    <h1>Date of Birth: ${window.localStorage.getItem('birth')}</h1>`
   
    
    
}

function closeUserCard() {
    document.querySelector('.wrapper .profileTextTemplate').style.display = 'none'
    // document.querySelector('#uploadImageUserCard').innerHTML = `
    // <div class="imageIcon">
    //     <img src="./images/up-arrow.png" alt="upload_img" class="pint_mock_icon">
    // </div>
    //     <p>Upload Image</p>
    //     <input onchange="handleProfileCard(event)" type="file" name="uploadImageProfile" id="uploadImageProfile">                                  
    // `

}

function handleProfileCard(ev) {
    ev.preventDefault();
    imageCardProfile = ev.target.files[0];
    const imageSrc = URL.createObjectURL(imageCardProfile);
    document.querySelector('#uploadImageUserCard').innerHTML = `<img src="${imageSrc}" alt="" id="imageUserCard" >`
    document.querySelector('#navIconHeader').innerHTML = `<img src="${imageSrc}" alt="" id="profileImg" >`
    
}
// ------------ REGISTERED USER PROFILE CARD --E N D---------- //

// ADD NEW Product Template
const productImage = document.querySelector('#productImageUpload');
const mainProductPage = document.querySelector('#mainProductPage');
const imageProductTemplate = document.querySelector('#upload_img_label');
const productsList: Array<Product> = []; 
let addProductImage;

interface Product {
    id:any;
    imgSrc:string;
    productName: string;
    productDescription: string;
    productPrice: number;
}

function handleAddProduct(ev) {
    ev.preventDefault();
    
    let newProduct: Product = {
        id: '',
        imgSrc:'',
        productName: '',
        productDescription: '',
        productPrice: 0
    };
    const elements = ev.target.elements;
    for (let i =0; i<elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            newProduct[elements[i].name] = elements[i].value;
        }
    }
    const uid = () => {
        return 'Prod' + Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    const imgSrc = URL.createObjectURL(addProductImage); 
    newProduct.id = uid();
    newProduct.imgSrc = imgSrc;    
    productsList.push(newProduct);
    renderProducts();
    ev.target.reset();
////////////////////////////////////////
// ------------------RESET PRODUCT TO DOM ---------------- //
    let html = `                            
        <div id="imageProductTemplate" class="imageIcon">
            <img src="./images/up-arrow.png" alt="upload_img" class="pint_mock_icon">
        </div>
        <div class="textLeft">
            <div>Click to upload</div>
            <div>Recommendation: Use high-quality .jpg files less than 20MB</div>
            <input onchange="handleAddImageToProductTemplate(event)" type="file" name="productImageUpload" id="productImageUpload">
        </div>`;

    imageProductTemplate.innerHTML = html;
    (<HTMLInputElement>document.querySelector('.wrapper .addProductTemplate')).style.display = 'none'
// -----E N D------- ADD NEW PRODUCT TO DOM ---E N D------- //
}

/////////////////////////////////////////////////////////////////

function handleAddImageToProductTemplate(ev) {
    ev.preventDefault();
    
    addProductImage = ev.target.files[0];
    const imgSrc = URL.createObjectURL(addProductImage);
    let htmlProductTemplate = '';
                 
            htmlProductTemplate +=   
                 `<div class="actualImage">
                    <div id="pictureNew" class="pin_image">
                         <img src="${imgSrc}" alt="pin_image">;
                    </div>
                 </div>`
      
    imageProductTemplate.innerHTML = htmlProductTemplate;
    // console.log(ev)
    // targetImage = ev.target;
}

///////////////////////////////////////////////////////////////////

function renderProducts() {
    const productMainID = document.querySelector('#productMainID');

    let html = '';
    productsList.forEach(product => {
        html += `<div id='${product.id}' class="productTemplate">
                    <div class="productImage">
                        <img src="${product.imgSrc}" alt="">
                        <div class="editBtn" onclick="handleEditProduct(event)">
                            <div class="iconEdit" >
                                <svg id="editBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 849.08836 849.17323">
                                    <path class="cls-1" d="M441.04232,854c-3.93958-2.04193-8.32666-1.34387-12.45722-1.697C339.559,844.69263,260.53257,812.4928,192.44625,754.757,120.95449,694.13342,75.06813,617.53,54.38892,526.08093a401.23965,401.23965,0,0,1-8.13765-125.53848c8.3836-91.816,42.88965-172.68007,104.37469-241.46576,62.4643-69.88122,140.14075-113.637,232.03656-132.18422,18.62574-3.75921,37.45688-5.63017,56.36982-6.95922,1.03436-.07269,2.40045.62121,3.01-.93325h41c4.61978,2.09573,9.64544,1.2964,14.4414,1.72608a417.92326,417.92326,0,0,1,365.85,302.31777c12.67651,44.52976,18.23474,89.9325,15.39917,136.08158-5.70355,92.82318-38.13721,175.32415-98.05731,246.6308-41.08582,48.89331-91.15223,86.05481-149.48694,112.04205a406.08414,406.08414,0,0,1-115.38571,32.30163c-10.231,1.28077-20.44455,2.70685-30.77363,2.95136-.79589.0188-1.69824-.14856-1.987.94873Zm21.83557-21.48C684.933,831.44928,864.98213,649.28754,857.80056,423.1488,850.9225,206.56754,670.06386,33.34216,447.274,40.87769,236.96427,47.99109,59.26671,224.10327,66.17512,449.50833,72.72206,663.12,248.64038,832.82007,462.87789,832.52ZM691.28743,329.33069c.12909,11.346-4.71814,20.44256-12.57538,28.28107Q635.007,401.21261,591.3813,444.89307c-51.26846,51.23608-102.78665,102.22631-153.63168,153.87915-11.69275,11.8786-24.79263,18.30969-40.90674,21.31994-43.19592,8.06928-86.23037,17.00617-129.31122,25.68634-11.14785,2.2461-16.91084-3.41937-14.65557-14.68127q14.06215-70.221,28.08133-140.45065a43.45959,43.45959,0,0,1,12.08264-22.94223Q417.00095,343.8942,540.89327,220.01527c16.97571-16.96222,39.63165-17.13945,56.64612-.26675,27.32977,27.10213,54.491,54.37425,81.76092,81.53682C687.09255,309.04694,691.34072,318.25232,691.28743,329.33069ZM415.98775,589.95282c1.294-1.20984,2.3959-2.18231,3.43375-3.21881q96.545-96.41708,193.15078-192.77307c2.90583-2.894,2.5846-4.30576-.11767-6.98987q-50.52814-50.188-100.773-100.66013c-2.97614-2.99264-4.40412-2.81506-7.28635.07706Q443.361,347.63179,382.08849,408.638q-35.3659,35.31564-70.72516,70.63788c-1.84683,1.8425-3.49957,3.06638-.65939,5.88382q51.62626,51.21349,103.01141,102.67C414.39119,588.50409,415.11028,589.13519,415.98775,589.95282Zm254.168-260.97247c-.12561-4.90116-2.1795-8.843-5.63629-12.29785q-40.8383-40.81513-81.59442-81.71219c-9.18329-9.18326-18.1189-9.11565-27.272.05053-10.00763,10.02188-19.91156,20.14971-30.05722,30.02951-2.27588,2.21624-2.063,3.2809.03711,5.37616q51.48849,51.3691,102.78989,102.92527c1.87567,1.88452,2.91662,1.84488,4.74359-.00818,10.64532-10.79749,21.439-21.44867,32.11853-32.21274A16.15241,16.15241,0,0,0,670.15578,328.98035ZM394.23366,598.69006c-1.02689-1.18011-1.5217-1.82306-2.09058-2.3919q-44.50588-44.50343-89.02355-88.995c-.35312-.353-.711-.70148-1.05649-1.06183-1.91135-1.99377-2.61194-1.1582-3.04189,1.1427-1.42952,7.65021-2.95039,15.2836-4.47012,22.91669-5.88551,29.5614-11.70673,59.13617-17.78386,88.6582-.69556,3.37891.41867,3.25989,2.78242,2.78449C317.55422,614.09985,355.56011,606.46283,394.23366,598.69006Z" transform="translate(-37.45582 -11.91339)"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="productText">
                        <h1>${product.productName}</h1>
                        <p>${product.productDescription}</p>
                        <p>${product.productPrice} RUB</p>
                        <button style = "text-decoration: line-through;">Add to cart</button>
                    </div>
                    
                </div>`
    })
    productMainID.innerHTML = html;
    
}

function displayAddProductTemplate() {
    (<HTMLInputElement>document.querySelector('.wrapper .addProductTemplate')).style.display = 'flex';    
}
function displayEditProductTemplate() {
    (<HTMLInputElement>document.querySelector('.wrapper .editProductTemplate')).style.display = 'flex';    
}

///////////////////////////////////////////////////////////////////


function handleEditProduct(ev) {
    const editProductTemplate = (<HTMLInputElement>document.querySelector('.wrapper .editProductTemplate'));
    let html = '';

    for (let i=0; i<ev.composedPath().length; i++) {
        for (let j=0 ; j<ev.composedPath().length; j++) { 
            if(ev.composedPath()[j].id == productsList[i].id) {
                try{    
                            html += `
                            <div class=editTemplateUnique id='${productsList[i].id}' >
                                <div class="leftSide">
                                    <label for="productImageUpload" id="upload_img_label">
            
                                    <div class="actualImage">
                                        <div id="pictureNew" class="pin_image">
                                            <img src="${productsList[i].imgSrc}" alt="pin_image">
                                        </div>
                                    </div>
            
                                    </label>
                                </div>
            
                                <div class="rightSide">
                                    <div id="rightTextProfileTextTemplate" class="rightText">
                                        <div class="productRow">
                                            <h1>Product Name: ${productsList[i].productName}</h1>
                                            <div id="editBtnId" class="editBtn" onclick="handleEditProductInside(event)">
                                                <div class="iconEdit">
                                                    <svg id="editBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 849.08836 849.17323">
                                                        <path class="cls-1" d="M441.04232,854c-3.93958-2.04193-8.32666-1.34387-12.45722-1.697C339.559,844.69263,260.53257,812.4928,192.44625,754.757,120.95449,694.13342,75.06813,617.53,54.38892,526.08093a401.23965,401.23965,0,0,1-8.13765-125.53848c8.3836-91.816,42.88965-172.68007,104.37469-241.46576,62.4643-69.88122,140.14075-113.637,232.03656-132.18422,18.62574-3.75921,37.45688-5.63017,56.36982-6.95922,1.03436-.07269,2.40045.62121,3.01-.93325h41c4.61978,2.09573,9.64544,1.2964,14.4414,1.72608a417.92326,417.92326,0,0,1,365.85,302.31777c12.67651,44.52976,18.23474,89.9325,15.39917,136.08158-5.70355,92.82318-38.13721,175.32415-98.05731,246.6308-41.08582,48.89331-91.15223,86.05481-149.48694,112.04205a406.08414,406.08414,0,0,1-115.38571,32.30163c-10.231,1.28077-20.44455,2.70685-30.77363,2.95136-.79589.0188-1.69824-.14856-1.987.94873Zm21.83557-21.48C684.933,831.44928,864.98213,649.28754,857.80056,423.1488,850.9225,206.56754,670.06386,33.34216,447.274,40.87769,236.96427,47.99109,59.26671,224.10327,66.17512,449.50833,72.72206,663.12,248.64038,832.82007,462.87789,832.52ZM691.28743,329.33069c.12909,11.346-4.71814,20.44256-12.57538,28.28107Q635.007,401.21261,591.3813,444.89307c-51.26846,51.23608-102.78665,102.22631-153.63168,153.87915-11.69275,11.8786-24.79263,18.30969-40.90674,21.31994-43.19592,8.06928-86.23037,17.00617-129.31122,25.68634-11.14785,2.2461-16.91084-3.41937-14.65557-14.68127q14.06215-70.221,28.08133-140.45065a43.45959,43.45959,0,0,1,12.08264-22.94223Q417.00095,343.8942,540.89327,220.01527c16.97571-16.96222,39.63165-17.13945,56.64612-.26675,27.32977,27.10213,54.491,54.37425,81.76092,81.53682C687.09255,309.04694,691.34072,318.25232,691.28743,329.33069ZM415.98775,589.95282c1.294-1.20984,2.3959-2.18231,3.43375-3.21881q96.545-96.41708,193.15078-192.77307c2.90583-2.894,2.5846-4.30576-.11767-6.98987q-50.52814-50.188-100.773-100.66013c-2.97614-2.99264-4.40412-2.81506-7.28635.07706Q443.361,347.63179,382.08849,408.638q-35.3659,35.31564-70.72516,70.63788c-1.84683,1.8425-3.49957,3.06638-.65939,5.88382q51.62626,51.21349,103.01141,102.67C414.39119,588.50409,415.11028,589.13519,415.98775,589.95282Zm254.168-260.97247c-.12561-4.90116-2.1795-8.843-5.63629-12.29785q-40.8383-40.81513-81.59442-81.71219c-9.18329-9.18326-18.1189-9.11565-27.272.05053-10.00763,10.02188-19.91156,20.14971-30.05722,30.02951-2.27588,2.21624-2.063,3.2809.03711,5.37616q51.48849,51.3691,102.78989,102.92527c1.87567,1.88452,2.91662,1.84488,4.74359-.00818,10.64532-10.79749,21.439-21.44867,32.11853-32.21274A16.15241,16.15241,0,0,0,670.15578,328.98035ZM394.23366,598.69006c-1.02689-1.18011-1.5217-1.82306-2.09058-2.3919q-44.50588-44.50343-89.02355-88.995c-.35312-.353-.711-.70148-1.05649-1.06183-1.91135-1.99377-2.61194-1.1582-3.04189,1.1427-1.42952,7.65021-2.95039,15.2836-4.47012,22.91669-5.88551,29.5614-11.70673,59.13617-17.78386,88.6582-.69556,3.37891.41867,3.25989,2.78242,2.78449C317.55422,614.09985,355.56011,606.46283,394.23366,598.69006Z" transform="translate(-37.45582 -11.91339)"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="productRow">
                                            <h1>Description: ${productsList[i].productDescription}</h1>
                                        </div>
                                        <div class="productRow">
                                            <h1>Price: ${productsList[i].productPrice} RUB</h1>
                                        </div>
                                    </div>
                                    <div class="closeButtonWrapper">
                                        <div class="closeButton" onclick="closeProductCardTemplate()">Save</div>
                                    </div>
                                </div>
                            </div>`
                        
                            editProductTemplate.innerHTML = html;
                            displayEditProductTemplate();                                                                                   
                        

                        if(typeof productsList[i].id == `${undefined}` || typeof productsList[i] == `${undefined}`)
                            throw new Error("It is undefined");

                    }       catch (err) {
                                console.log(err);
                                alert(err.message);
                                } 
            }          
                     
        }
    }
} 
      

function closeProductCardTemplate(){
  const editProductTemplate = (<HTMLInputElement>document.querySelector('.wrapper .editProductTemplate'));
  editProductTemplate.style.display = 'none';
  

}


let productId;
function handleEditProductInside(ev) {
    const editProductTemplate = (<HTMLInputElement>document.querySelector('.wrapper .editProductTemplate'));
    let html = '';

    for (let i=0; i<ev.composedPath().length; i++) {
        for (let j=0 ; j<ev.composedPath().length; j++) { 
            if(ev.composedPath()[j].id == productsList[i].id) {
                productId = ev.composedPath()[j].id;
                
                html += `
                            <div class=editTemplateUnique id='${productsList[i].id}' >
                                <div class="leftSide">
                                    <label for="productImageUpload" id="upload_img_label">
            
                                    <div class="actualImage">
                                        <div id="pictureNew" class="pin_image">
                                            <img src="${productsList[i].imgSrc}" alt="pin_image">
                                        </div>
                                    </div>
            
                                    </label>
                                </div>
            
                                <div class="rightSide">
                                    
                                    <form id="rightTextProfileTextTemplate" class="rightText" onsubmit="handleSaveEditProductCard(event)">
                                        <div class="productRow">
                                            <h1>Product Name: <input type="text" name="productName" id="inputEditCard" placeholder="${productsList[i].productName}"></h1>
                                            <div id="editBtnId" class="editBtn">
                                                <div class="iconEdit">
                                                    <svg id="editBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 849.08836 849.17323">
                                                        <path class="cls-1" d="M441.04232,854c-3.93958-2.04193-8.32666-1.34387-12.45722-1.697C339.559,844.69263,260.53257,812.4928,192.44625,754.757,120.95449,694.13342,75.06813,617.53,54.38892,526.08093a401.23965,401.23965,0,0,1-8.13765-125.53848c8.3836-91.816,42.88965-172.68007,104.37469-241.46576,62.4643-69.88122,140.14075-113.637,232.03656-132.18422,18.62574-3.75921,37.45688-5.63017,56.36982-6.95922,1.03436-.07269,2.40045.62121,3.01-.93325h41c4.61978,2.09573,9.64544,1.2964,14.4414,1.72608a417.92326,417.92326,0,0,1,365.85,302.31777c12.67651,44.52976,18.23474,89.9325,15.39917,136.08158-5.70355,92.82318-38.13721,175.32415-98.05731,246.6308-41.08582,48.89331-91.15223,86.05481-149.48694,112.04205a406.08414,406.08414,0,0,1-115.38571,32.30163c-10.231,1.28077-20.44455,2.70685-30.77363,2.95136-.79589.0188-1.69824-.14856-1.987.94873Zm21.83557-21.48C684.933,831.44928,864.98213,649.28754,857.80056,423.1488,850.9225,206.56754,670.06386,33.34216,447.274,40.87769,236.96427,47.99109,59.26671,224.10327,66.17512,449.50833,72.72206,663.12,248.64038,832.82007,462.87789,832.52ZM691.28743,329.33069c.12909,11.346-4.71814,20.44256-12.57538,28.28107Q635.007,401.21261,591.3813,444.89307c-51.26846,51.23608-102.78665,102.22631-153.63168,153.87915-11.69275,11.8786-24.79263,18.30969-40.90674,21.31994-43.19592,8.06928-86.23037,17.00617-129.31122,25.68634-11.14785,2.2461-16.91084-3.41937-14.65557-14.68127q14.06215-70.221,28.08133-140.45065a43.45959,43.45959,0,0,1,12.08264-22.94223Q417.00095,343.8942,540.89327,220.01527c16.97571-16.96222,39.63165-17.13945,56.64612-.26675,27.32977,27.10213,54.491,54.37425,81.76092,81.53682C687.09255,309.04694,691.34072,318.25232,691.28743,329.33069ZM415.98775,589.95282c1.294-1.20984,2.3959-2.18231,3.43375-3.21881q96.545-96.41708,193.15078-192.77307c2.90583-2.894,2.5846-4.30576-.11767-6.98987q-50.52814-50.188-100.773-100.66013c-2.97614-2.99264-4.40412-2.81506-7.28635.07706Q443.361,347.63179,382.08849,408.638q-35.3659,35.31564-70.72516,70.63788c-1.84683,1.8425-3.49957,3.06638-.65939,5.88382q51.62626,51.21349,103.01141,102.67C414.39119,588.50409,415.11028,589.13519,415.98775,589.95282Zm254.168-260.97247c-.12561-4.90116-2.1795-8.843-5.63629-12.29785q-40.8383-40.81513-81.59442-81.71219c-9.18329-9.18326-18.1189-9.11565-27.272.05053-10.00763,10.02188-19.91156,20.14971-30.05722,30.02951-2.27588,2.21624-2.063,3.2809.03711,5.37616q51.48849,51.3691,102.78989,102.92527c1.87567,1.88452,2.91662,1.84488,4.74359-.00818,10.64532-10.79749,21.439-21.44867,32.11853-32.21274A16.15241,16.15241,0,0,0,670.15578,328.98035ZM394.23366,598.69006c-1.02689-1.18011-1.5217-1.82306-2.09058-2.3919q-44.50588-44.50343-89.02355-88.995c-.35312-.353-.711-.70148-1.05649-1.06183-1.91135-1.99377-2.61194-1.1582-3.04189,1.1427-1.42952,7.65021-2.95039,15.2836-4.47012,22.91669-5.88551,29.5614-11.70673,59.13617-17.78386,88.6582-.69556,3.37891.41867,3.25989,2.78242,2.78449C317.55422,614.09985,355.56011,606.46283,394.23366,598.69006Z" transform="translate(-37.45582 -11.91339)"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="productRow" id="productRowId">
                                            <h1>Description: <input type="text" name="productDescription" id="inputEditCard2" placeholder="${productsList[i].productDescription}"></h1>
                                        </div>
                                        <div class="productRow" id="productRowId">
                                            <h1>Price: <input type="text" name="productPrice" id="inputEditCard3" placeholder="${productsList[i].productPrice} RUB"></h1>
                                        </div>
                                        <div id="closeButtonWrapperId" class="closeButtonWrapper">
                                            <input class="closeButton" id="SendBTN" type="submit" value="Save">
                                        </div>
                                    </form>
                                </div>
                            </div>`
                        
                            editProductTemplate.innerHTML = html;
                            // displayEditProductTemplate(); 
}
    }
        }
           }

// let editedList = [];
function handleSaveEditProductCard(ev){
    ev.preventDefault();
    const editProductTemplate = (<HTMLInputElement>document.querySelector('.wrapper .editProductTemplate'));
    interface Product {
        id?:any;
        imgSrc?:string;
        productName?: string;
        productDescription?: string;
        productPrice?: number;
    }

    let editedProduct: Product = {
        // id: ,
        // imgSrc:,
        // productName: ,
        // productDescription:,
        // productPrice: 
    };

    editProductTemplate.style.display = 'none';
    const elements = ev.target.elements;

    for(let i=0; i<productsList.length; i++) {
        if(productId == productsList[i].id) {
            console.log("You have equal ID");
            for(let j=0; j<elements.length; j++) {
                if (elements[j].name && elements[j].value ) {
                    editedProduct[elements[j].name] = elements[j].value;
                }
            }
            Object.assign(productsList[i], editedProduct);

            renderProducts();
        }
    }

}




/////////////////////////////////////////////////////////////////////
