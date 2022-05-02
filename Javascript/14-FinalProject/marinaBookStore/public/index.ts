const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Store {
  cartItems: Array<Book>;
  books: Array<Book>;
  storeData();
  getData();
  addBook(
    title: string,
    author: string,
    genre: "scienceF" | "detective" | "prose" | "adventures" | "children",
    year: number,
    rank: number,
    price: number,
    img: any,
    annotation?: string,
    id: string
  );
  deleteBook(title: string);
  updateBook(genre: string, title: string, price: number, id: string);
  deleteByID(id: string);
  addToCart(id: string);
  sortAscenByAuthor();
  sortDescenByAuthor();
  sortAscenByRanking();
  sortDescenByRanking();
  sortAscenByYear();
  sortDescenByYear();
  filterByYear(year: number);
  filterByRank(rank: number);
  filterByGenre(genre: string);
  filterByAuthor(author: string);
  filterByTitle(title: string);
  render(list: any, domElement: any);
  renderERP(list: any, domElement: any);
  renderFilterByYear(filteredByYear: Array<Book>, domElement);
  renderFilterByRank(filteredByRank: Array<Book>, domElement);
  renderFilterByGenre(filteredByGenre: Array<Book>, domElement);
  renderFilterByAuthor(filteredByAuthor: Array<Book>, domElement);
  renderFilterByTitle(filteredByTitle: Array<Book>, domElement);
  renderitemcart(domElement);
  additem(Book);
  removeOneItem(id: string);
  deleteItem(id: string);
  addOneItem(id: string);
  renderCartCount();
}

interface Book {
  title: string;
  author: string;
  genre: "scienceF" | "detective" | "prose" | "adventures" | "children";
  year: number;
  rank: number;
  price: number;
  img: any;
  annotation?: string;
  id?: string
}

let StandartEbooks = {
  cartItems: [],
  books: [
    {
      title: "The Three Body Problem",
      author: "Liu Cixin",
      genre: "scienceF",
      year: 2008,
      rank: 4.07,
      price: 15,
      img: "https://images-na.ssl-images-amazon.com/images/I/919XM42JQlL.jpg",
      annotation:
        "is a science fiction novel by Cixin Liu (and translated by Ken Liu) which traces the efforts of disillusioned Chinese scientists who implore alien life to come to Earth to forcibly redeem humanity.",
      id: uid(),
    },
    {
      title: "One by One",
      author: "Carter Chris",
      genre: "detective",
      year: 2013,
      rank: 9.83,
      price: 28,
      img: "https://litlife.club/data/Book/0/217000/217759/BC3_1410688094.jpg?w=600&h=600&q=90",
      annotation:
        "This is a police detective thriller set in America. A killer uses the internet and his extensive knowledge of how IP addresses work to assist his killing spree. ",
      id: uid(),
    },
    {
      title: "Fight Club",
      author: "Palahniuk Chuck",
      genre: "prose",
      year: 2009,
      rank: 9.63,
      price: 17,
      img: "https://litlife.club/data/Book/0/87000/87828/BC3_1474544490.jpg?w=600&h=600&q=90",
      annotation:
        "Fight Club starts off with our nameless narrator held hostage with a gun in his mouth atop a building rigged with explosives set to go off at any moment. Yeah, The Baby-Sitters Club this ain't. Starting from this dire situation, our narrator decides to tell us how he got to this point.",
      id: uid(),
    },
    {
      title: "Ramage",
      author: "Pope Dudley",
      genre: "adventures",
      year: 2010,
      rank: 10.0,
      price: 34,
      img: "https://litlife.club/data/Book/0/119000/119128/BCS_1349028836.jpg?w=600&h=600&q=90",
      annotation:
        "In a daring foray, under the very nose of the French Mediterranean fleet, Lieutenant Lord Nicholas Ramage is to sail his tiny cutter close in to the Italian shore and rescue a party of stranded aristocrats from Napoleon's fast-advancing army.",
      id: uid(),
    },
    {
      title: "Grimms` Fairy Tales",
      author: "Davenport Jennie",
      genre: "children",
      year: 1994,
      rank: 9.5,
      price: 32,
      img: "https://litlife.club/data/Book/0/0/707/BC3_1386593820.jpg?w=600&h=600&q=90",
      annotation:
        "A lovely collection of 50 stories from the Brothers Grimm, including; The Wolf And The Seven Little Kids; The Goose-Girl;",
      id: uid(),
    },
    {
      title: "The Caller",
      author: "Carter Chris",
      genre: "detective",
      year: 2017,
      rank: 9.59,
      price: 44,
      img: "https://images-na.ssl-images-amazon.com/images/I/81-7W7KGYQL.jpg",
      annotation:
        "After a tough week, Tanya Kaitlin is looking forward to a relaxing night in, but as she steps out of her shower, she hears her phone ring.  The video call request comes from her best friend, Karen Ward.  Tanya takes the call and the nightmare begins.",
      id: uid(),
    },

    {
      title: "Revelation",
      author: "Karpyshyn Drew",
      genre: "scienceF",
      year: 2010,
      rank: 7.8,
      price: 21,
      img: "https://litlife.club/data/Book/0/91000/91909/BCS_1349020826.jpg?w=600&h=600&q=90",
      annotation:
        "The resulting number of commentaries on the book is enormous, and most studies can only touch upon, at most, a representative sample of this vast literature.",
      id: uid(),
    },
    {
      title: "Deception Point",
      author: "Brown Dan",
      genre: "detective",
      year: 2010,
      rank: 9.99,
      price: 39,
      img: "https://litlife.club/data/Book/0/125000/125823/BCS_1349021980.jpg?w=600&h=600&q=90",
      annotation:
        "On the eve of a presidential race in which NASA's budget is a pivotal issue, the space agency announces the discovery of an ancient meteorite filled with fossils deep in the Arctic ice.",
      id: uid(),
    },
    {
      title: "The Secret History",
      author: "Tartt Donna",
      genre: "prose",
      year: 2011,
      rank: 9.89,
      price: 41,
      img: "https://litlife.club/data/Book/0/94000/94365/BC3_1474425076.jpg?w=600&h=600&q=90",
      annotation:
        "The Secret History by Donna Tartt is an intricate glimpse into the lives of six students at Hampden College in Vermont and the impressions of one of those students who arrives mid-way through the relationships of the others.",
      id: uid(),
    },
    {
      title: "Hornblower and the Crisis",
      author: "Forester Cecil Scott",
      genre: "adventures",
      year: 1990,
      rank: 0.23,
      price: 10,
      img: "https://litlife.club/data/Book/0/126000/126284/BCS_1349022091.jpg?w=600&h=600&q=90",
      annotation:
        "The final Horatio Hornblower story tells of Napoleon's plans to invade England. Set in 1805, Hornblower and the Crisis finds Horatio Hornblower in possession of confidential dispatches from Bonaparte after a vicious hand-to-hand encounter with a French brig.",
      id: uid(),
    },
    {
      title: "The Adventures of Huckleberry Finn",
      author: "Twain Mark",
      genre: "children",
      year: 1981,
      rank: 10.0,
      price: 43,
      img: "https://litlife.club/data/Book/0/0/755/BC3_1386593870.jpg?w=600&h=600&q=90",
      annotation:
        "Mark Twain’s 1885 novel condemning the institutionalized racism of the pre-Civil War South is among the most celebrated works of American fiction. Twain’s story of a runaway boy and an escaped slave’s travels on the Mississippi plumbs the essential meaning of freedom. ",
      id: uid(),
    },
  ],

  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.books));
  },

  getData() {
    const booksStorage = JSON.parse(localStorage.getItem("storeData"));
    if (booksStorage) {
      this.books = booksStorage;
    }
  },

  addBook(title, author, genre, year, rank, price, img, annotation) {
    const id = uid();
    this.books.push({
      title,
      author,
      genre,
      year,
      rank,
      price,
      img,
      annotation,
      id,
    });
    this.storeData();
  },

  deleteBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index >= 0) {
      this.books.splice(index, 1);
    }
    this.storeData();
  },

  deleteByID(id) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem("storeData", JSON.stringify(this.books));
  },

  updateBook(id, genre, title, price) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index >= 0) {
      this.books[index].genre = genre;
      this.books[index].title = title;
      this.books[index].price = price;
    }
    this.storeData();
  },

  additem(Book) {
    let isAdded = false;
    if (!Book.quantity) Book.quantity = 1;
    this.cartItems.forEach((book) => {
      if (book.id == Book.id) {
        book.quantity += 1;
        console.log(book.quantity);
        isAdded = true;
        return;
      }
    });
    if (isAdded) return;
    this.cartItems.push(Book);
  },

  deleteItem(id) {
    this.cartItems = this.cartItems.filter((book) => book.id !== id);
    this.renderitemcart(cart);
    console.log(this.cartItems);
    this.renderCartCount();
  },

  addOneItem(id) {
    const index = this.cartItems.findIndex((book) => book.id == id);
    this.cartItems[index].quantity++;
  },
  removeOneItem(id) {
    const index = this.cartItems.findIndex((book) => book.id == id);
    if (this.cartItems[index].quantity <= 1) this.deleteItem(id);
    else this.cartItems[index].quantity--;
  },

  sortAscenByAuthor() {
    this.books = this.books.sort((a, b) => {
      let authorA = a.author.toLowerCase(),
        authorB = b.author.toLowerCase();
      if (authorA < authorB) return -1;
      if (authorA > authorB) return 1;
      return 0;
    });
    this.books.forEach((book) => {
      console.log(book.author);
    });
  },

  sortDescenByAuthor() {
    this.books = this.books.sort((a, b) => {
      let authorA = a.author.toLowerCase(),
        authorB = b.author.toLowerCase();
      if (authorA < authorB) return 1;
      if (authorA > authorB) return -1;
      return 0;
    });
    console.log("------");
    this.books.forEach((book) => {
      console.log(book.author);
    });
  },

  sortAscenByYear() {
    this.books = this.books.sort((a, b) => {
      return a.year - b.year;
    });
  },

  sortDescenByYear() {
    this.books = this.books.sort((a, b) => {
      return b.year - a.year;
    });
  },

  sortAscenByRanking() {
    this.books = this.books.sort((a, b) => {
      return a.rank - b.rank;
    });
  },

  sortDescenByRanking() {
    this.books = this.books.sort((a, b) => {
      return b.rank - a.rank;
    });
  },

  filterByYear(year) {
    return this.books.filter((book) => book.year <= year);
  },

  filterByRank(rank) {
    return this.books.filter((book) => book.rank <= rank);
  },

  filterByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  },

  filterByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  },

  filterByTitle(title) {
    return this.books.filter((book) => book.title === title);
  },

  renderFilterByTitle(filteredByTitle, domElement) {
    this.render(filteredByTitle, domElement);
  },

  renderFilterByAuthor(filteredByAuthor, domElement) {
    this.render(filteredByAuthor, domElement);
  },

  renderFilterByGenre(filteredByGenre, domElement) {
    this.render(filteredByGenre, domElement);
  },

  renderFilterByRank(filteredByRank, domElement) {
    this.render(filteredByRank, domElement);
  },

  renderFilterByYear(filteredByYear, domElement) {
    this.render(filteredByYear, domElement);
  },

  renderERP(list, domElement) {
    let html = " ";
    list.forEach((book: any) => {
      html += `<div class="containerERP__content">
      
                  <div class='containerERP__content__cartERP'> 

                      <div class='containerERP__content__cartERP__img'> 
                         <img src="${book.img}.jpg" >  
                      </div> 
                      
                       <div class='containerERP__content__cartERP__info'>  
                             <strong class="title">${book.title}</strong>                                
                             <strong class="author">${book.author}</strong>
                             <strong class="genre">${book.genre}</strong>
                             <strong class="year">${book.year}</strong>
                             <strong class="rank">${book.rank}</strong>             
                        </div> 
                  </div>
                   <div class="containerERP__content__erpBtn">      
                         <div class="content__erpBtn__delete" style= "margin-bottom: 1em;" >
                               <button class="containerERP__inputs__form__one__inp"  onclick="handleDeleteByID('${book.id}')"><span style ="color: grey; cursor: pointer;" >Delete book</span></button>
                         </div> 
                       
                         <div class="content__erpBtn__update">
                             <form id="formAdd" onsubmit="handleUpdateBook(event, '${book.id}')">
                                  <select class="containerERP__inputs__form__one__inp" name="genre" id=""  style="cursor: pointer;" >
                                      <option value="genre" disabled selected>genre</option>
                                      <option value="scienceF">scienceF</option>
                                      <option value="detective">detective</option>
                                      <option value="prose">prose</option>
                                      <option value="adventures">adventures</option>
                                      <option value="children">children</option>
                                   </select> 
                                   <textarea class="containerERP__inputs__form__one__inp annotation" name="annotation" id="annotation" maxlength="2000"
                                 cols="200" rows="200" placeholder="Wright book annotation here" value="${book.annotation}"></textarea> 
                                 <input class="containerERP__inputs__form__one__inp"  type="text" name="title" placeholder="Edit title" value="${book.title}">
                                 <input class="containerERP__inputs__form__one__inp"  type="number" name="price"  id="price" placeholder="Edit price" value="${book.price}">
                                 <input class="containerERP__inputs__form__one__inp"  type="submit" id="update" value="Update book" style="cursor: pointer;" >
                             </form>
                         </div> 
                    </div>          
               </div>`;
    });

    domElement.innerHTML = html;
  },

  render(list, domElement) {
    let htmlStore = "";
    list.forEach((book: any) => {
      htmlStore += `<div class="cartStore">
                  <h2  class="bookTitle" >${book.title}</h2>
                  <h3>${book.author}</h3>  
                  <div class="textOverImage" data-text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">    
                      <img class="img" src="${book.img}">
                  </div>
                  <p class="price" >${book.year} &nbsp &nbsp ${book.price}$</p>
                  <div class="rating"> 
                      <span class="rating__result"></span>                 
                      <i class="rating__star far fa-star" data-number="1" id="${book.id}" onclick = "handleStarClick(event)"></i>
                      <i class="rating__star far fa-star" data-number="2" id="${book.id}" onclick = "handleStarClick(event)"></i>
                      <i class="rating__star far fa-star" data-number="3" id="${book.id}" onclick = "handleStarClick(event)"></i>
                      <i class="rating__star far fa-star" data-number="4" id="${book.id}" onclick = "handleStarClick(event)"></i>
                      <i class="rating__star far fa-star" data-number="5" id="${book.id}" onclick = "handleStarClick(event)"></i>
                   </div>                        
                  <p class="rank"> ${book.rank}</p>
                 
                  <input type ="button" class = "cartStore__addToCartBtn  " onclick="handleaddcart(event,'${book.id}')" value = "Add to cart">                                      
               </div>`;
    });

    domElement.innerHTML = htmlStore;
  },

  renderitemcart(domElement) {
    let html2 = "";
    let total = 0;

    this.cartItems.forEach((book) => {
      html2 += `<div class='cart__card'>
            <img src="${book.img}">
            <p class="cart__card--name">${book.title}</p>
            <p class="cart__card--price">&#36;${book.price}</p>
            <button id="add_one" onclick='handleQuantity(event, "${book.id}")' style="background: none; border: none; font-size: 1.2em; color: white;">▲</button>
            <p class="cart__card--quantity">${book.quantity}</p>
            <button id="remove_one" onclick='handleQuantity(event, "${book.id}")' style="background: none; border: none; font-size: 1.2em; color: white;">▼</button>       
           <button  onclick='handleDelete("${book.id}")' style="background: none; border: none; font-size: 1.2em; color: red;"><i class="far fa-trash-alt delete"></i></button>
            </div>`;
      total += book.price * book.quantity;
    });
    domElement.innerHTML = html2;

    document.querySelector("#total").innerHTML = `${total}`;
  },

  renderCartCount() {
    document.querySelector(
      ".cart-notification"
    ).innerHTML = `${this.cartItems.length}`;
    if (`${this.cartItems.length}` > 0) {
      document.querySelector<HTMLElement>(".cart-notification").style.color =
        "wight";
    }
  },
};

StandartEbooks.getData();
StandartEbooks.storeData();


function handleaddcart(ev, itemToAddId) {

  const itemToAdd = StandartEbooks.books.filter((book) => book.id == itemToAddId)[0];
  StandartEbooks.additem(itemToAdd);
  const cart = document.querySelector(".cart");
  StandartEbooks.renderitemcart(cart);
  const cartIcon = document.querySelector("#cart-icon");
  cartIcon.classList.add("pulse");

  setTimeout(() => {
    cartIcon.classList.remove("pulse");
  }, 1000);

  StandartEbooks.renderCartCount();

  setTimeout(() => {
    cartIcon.classList.remove("pulse");
  }, 1000);
}

function handleDelete(id) {
  StandartEbooks.deleteItem(id);
  StandartEbooks.renderitemcart(cart);
}

const cart = document.querySelector(".cart");
StandartEbooks.renderitemcart(cart);

const cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener("click", handleCartClick);

function handleCartClick() {
  const cart: any = document.querySelector(".bask");
  cart.classList.toggle("visible");
  console.log(cart.classList);
}

function handleQuantity(ev, id) {
  switch (ev.target.id) {
    case "add_one":
      StandartEbooks.addOneItem(id);
      break;
    case "remove_one":
      StandartEbooks.removeOneItem(id);
      break;
  }
  StandartEbooks.renderitemcart(cart);
}

function renderOwener() {
  try {
    StandartEbooks.getData();
    const rootERP = document.querySelector("#rootERP");
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);
  } catch (err) {
    console.error(err);
  }
}

function renderCustomer() {
  try {
    StandartEbooks.getData();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleAddBook(e) {
  try {
    // debugger;
    e.preventDefault();
    let id = uid();
    console.log(e.target);
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const year = e.target.year.valueAsNumber;
    const rank = e.target.rank.valueAsNumber;
    const price = e.target.price.valueAsNumber;
    const img = e.target.img.value;
    const annotation = e.target.annotation.value;
    const rootERP = document.querySelector("#rootERP");
    StandartEbooks.addBook(
      title,
      author,
      genre,
      year,
      rank,
      price,
      img,
      annotation
    );
    StandartEbooks.render(StandartEbooks.books, rootERP);
    StandartEbooks.storeData();

    if (typeof title !== "string")
      throw new Error("input should be of type string");

    e.target.reset();
  } catch (err) {
    console.error(err);
  }
}

function handleDeleteBook(e) {
  e.preventDefault();
  try {
    console.log(e);
    console.log(e.target.elements.delete.value);
    const title = e.target.elements.delete.value;
    const rootERP = document.querySelector("#rootERP");

    if (typeof title !== "string")
      throw new Error("input should be of type string");

    if (title) {
      console.log(title);

      StandartEbooks.deleteBook(title);
      StandartEbooks.renderERP(StandartEbooks.books, rootERP);
      StandartEbooks.storeData();
    } else {
      throw new Error("User didnt write a title");
    }
  } catch (err) {
    console.error(err);
  }
}

function handleDeleteByID(id) {
  try {
    console.log(id);
    const rootERP = document.querySelector("#rootERP");
    StandartEbooks.deleteByID(id);
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);

    if (typeof id !== id) throw new Error("you have no id");
  } catch (err) {
    console.error(err);
  }
}

function handleUpdateBook(e, id) {
  try {
    e.preventDefault();
    console.log(id);
    const genre = e.target.genre.value;
    const title = e.target.elements.title.value;
    const price = e.target.elements.price.valueAsNumber;
    const rootERP = document.querySelector("#rootERP");
    StandartEbooks.updateBook(id, genre, title, price);
    StandartEbooks.renderERP(StandartEbooks.books, rootERP);
    StandartEbooks.storeData();
    e.target.reset();

    if (typeof genre !== "string")
      throw new Error("input should be of type string");
    if (typeof price !== "number")
      throw new Error("input should be of type number");
  } catch (err) {
    console.error(err);
  }
}

function handleAuthorAscen() {
  try {
    StandartEbooks.sortAscenByAuthor();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleAuthoreDescen() {
  try {
    StandartEbooks.sortDescenByAuthor();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleYearAscen() {
  try {
    StandartEbooks.sortAscenByYear();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleYearDescen() {
  try {
    StandartEbooks.sortDescenByYear();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleRankingAscen() {
  try {
    StandartEbooks.sortAscenByRanking();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleRankingeDescen() {
  try {
    StandartEbooks.sortDescenByRanking();
    const root = document.querySelector("#root");
    StandartEbooks.render(StandartEbooks.books, root);
  } catch (err) {
    console.error(err);
  }
}

function handleFilterByYear(e) {
  try {
    e.preventDefault();
    const year = e.target.valueAsNumber;
    const root = document.querySelector("#root");

    if (typeof year !== "number")
      throw new Error("input should be of type number");

    if (year) {
      const filteredByYear = StandartEbooks.filterByYear(year);
      StandartEbooks.renderFilterByYear(filteredByYear, root);
    } else {
      StandartEbooks.render(StandartEbooks.books, root);
    }
  } catch (err) {
    console.error(err);
  }
}

function handleFilterByRank(e) {
  try {
    e.preventDefault();
    const rank = e.target.valueAsNumber;
    const root = document.querySelector("#root");

    if (typeof rank !== "number")
      throw new Error("input should be of type number");

    if (rank) {
      const filteredByRank = StandartEbooks.filterByRank(rank);
      StandartEbooks.renderFilterByRank(filteredByRank, root);
    } else {
      StandartEbooks.render(StandartEbooks.books, root);
    }
  } catch (err) {
    console.error(err);
  }
}

function handleSelectByGenre(e) {
  try {
    e.preventDefault();
    console.log(e.target);
    console.log(e);
    // debugger;
    const genre = e.target.id;
    const root = document.querySelector("#root");

    if (typeof genre !== "string")
      throw new Error("input should be of type string");

    if (genre === "all") {
      StandartEbooks.render(StandartEbooks.books, root);
    } else {
      console.log(genre);
      const filterByGenre = StandartEbooks.filterByGenre(genre);
      const a = StandartEbooks.books.filter((book) => {
        return book.genre === genre;
      });
      // console.log("ghgjg..........", filterByGenre, genre, a);
      StandartEbooks.renderFilterByGenre(filterByGenre, root);
    }
  } catch (error) {
    console.log(error);
  }
}

function handleFilterByAuthor(e) {
  try {
    e.preventDefault();
    const author = e.target.value;
    const root = document.querySelector("#root");

    if (typeof author !== "string")
      throw new Error("input should be of type string");

    if (author) {
      const filterByAuthor = StandartEbooks.filterByAuthor(author);
      StandartEbooks.renderFilterByAuthor(filterByAuthor, root);
    } else {
      StandartEbooks.render(StandartEbooks.books, root);
    }
  } catch (error) {
    console.log(error);
  }
}

function handleFilterByTitle(e) {
  try {
    e.preventDefault();
    const title = e.target.value;
    const root = document.querySelector("#root");

    if (typeof title !== "string")
      throw new Error("input should be of type string");

    if (title) {
      const filterByTitle = StandartEbooks.filterByTitle(title);
      StandartEbooks.renderFilterByTitle(filterByTitle, root);
    } else {
      StandartEbooks.render(StandartEbooks.books, root);
    }
  } catch (error) {
    console.log(error);
  }
}

function handleSearchBook(e) {
  try {
    e.preventDefault();
    const author = e.target.value;
    const title = e.target.value;
    const search = e.target.value;
    const regex = new RegExp(search, "i");
    const root: any = document.querySelector("#root");
    root.innerHTML = "";

    if (typeof search !== "string")
      throw new Error("input should be of type string");

    if (search.length > 0) {
      const foundBook = StandartEbooks.books.filter((book) => {
        if (regex.test(book.title) || regex.test(book.author)) return true;

        const filterByTitle = StandartEbooks.filterByTitle(title);
        const filterByAuthor = StandartEbooks.filterByAuthor(author);
        StandartEbooks.renderFilterByTitle(filterByTitle, root);
        StandartEbooks.renderFilterByAuthor(filterByAuthor, root);
      });

      const html = foundBook
        .map((book) => {
          return `<p>${book.title}</p>
                <p>${book.author}</p>`;
        })
        .join("");

      root.innerHTML = html;
      console.log(foundBook);
    } else {
      StandartEbooks.render(StandartEbooks.books, root);
    }
  } catch (error) {
    console.log(error);
    // alert(error.message);
  }
}


const root = document.querySelector("#root");
const rootERP = document.querySelector("#rootERP");
StandartEbooks.getData();
StandartEbooks.storeData();

// clock
const clock = document.querySelector(".clock");
const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  // console.log(h, m, s);
  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;
  clock.innerHTML = html;
};
setInterval(tick, 1000);

// social counter
const counters = document.querySelectorAll<HTMLElement>(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  counter.style.color = "rgba(248, 244, 244, 0.509)";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c: any = +counter.innerText;

    const increment = target / 1500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// humburger toggle menu with animation
document.getElementsByClassName("nav-toggle")[0].addEventListener("click", function () {
  document.body.classList.toggle("activeNav");
});

const textService = document.querySelector<HTMLElement>(".textService");
const textAbout = document.querySelector<HTMLElement>(".textAbout");
const textContact = document.querySelector<HTMLElement>(".textContact");

const linkService = document.querySelector<HTMLElement>(".linkService");
const linkAbout = document.querySelector<HTMLElement>(".linkAbout");
const linkContact = document.querySelector<HTMLElement>(".linkContact");

textAbout.style.display = "none";
textContact.style.display = "none";
textService.style.display = "none";

linkService.addEventListener('click', () => {

  textAbout.style.display = 'none';
  textContact.style.display = "none";
  textService.style.display = "block";

  document.querySelector(".textService").innerHTML = document.querySelector(".textService").textContent.replace(/./g, "<span>$&</span>");
  let spans = document.querySelectorAll<HTMLElement>(".textService span");

  for (let i = 0; i < spans.length; i++) {
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();

    if (Math.random() < 0.5) {
      spans[i].style.left = "-" + left + "px";
    } else {
      spans[i].style.left = left + "px";
    }

    if (Math.random() < 0.5) {
      spans[i].style.top = "-" + top + "px";
    } else {
      spans[i].style.top = top + "px";
    }
  }
})





linkAbout.addEventListener("click", () => {

   textAbout.style.display = "block";
   textContact.style.display = "none";
   textService.style.display = "none";

  document.querySelector(".textAbout").innerHTML = document.querySelector(".textAbout").textContent.replace(/./g, "<span>$&</span>");
  let spans = document.querySelectorAll<HTMLElement>(".textAbout span");

  for (let i = 0; i < spans.length; i++) {
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();

    if (Math.random() < 0.5) {
      spans[i].style.left = "-" + left + "px";
    } else {
      spans[i].style.left = left + "px";
    }

    if (Math.random() < 0.5) {
      spans[i].style.top = "-" + top + "px";
    } else {
      spans[i].style.top = top + "px";
    }
  }
});



linkContact.addEventListener("click", () => {

   textAbout.style.display = "none";
   textContact.style.display = "block";
   textService.style.display = "none";

  document.querySelector(".textContact").innerHTML = document.querySelector(".textContact").textContent.replace(/./g, "<span>$&</span>");
  let spans = document.querySelectorAll<HTMLElement>(".textContact span");

  for (let i = 0; i < spans.length; i++) {
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();

    if (Math.random() < 0.5) {
      spans[i].style.left = "-" + left + "px";
    } else {
      spans[i].style.left = left + "px";
    }

    if (Math.random() < 0.5) {
      spans[i].style.top = "-" + top + "px";
    } else {
      spans[i].style.top = top + "px";
    }
  }
});


// scrollToTop
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  try {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    console.log(error);
    // alert(error.message);
  }
}

// const rootElement = document.documentElement;
// function handleScroll() {
//   try {
//     const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
//     if (rootElement.scrollTop / scrollTotal > 0.8) {
//       scrollToTopBtn.classList.add("showBtn");
//     } else {
//       scrollToTopBtn.classList.remove("showBtn");
//     }
//   } catch (error) {
//     console.log(error);
//     // alert(error.message);
//   }
// }


// star rating

// for (let i = 0; i < rank.length; i++) {
//   let rank = document.querySelectorAll(".rank");

//   if (rank[i] >= 8) {

//     rank[i].style.color = "green";
//   } else if (rank <= 5) {

//     rank[i].style.color = "orange";
//   } else {

//     rank[i].style.color = "red";
//   }
// }









