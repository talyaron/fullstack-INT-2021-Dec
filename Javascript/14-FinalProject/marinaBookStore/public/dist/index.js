var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var StandartEbooks = {
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
            annotation: "is a science fiction novel by Cixin Liu (and translated by Ken Liu) which traces the efforts of disillusioned Chinese scientists who implore alien life to come to Earth to forcibly redeem humanity.",
            id: uid()
        },
        {
            title: "One by One",
            author: "Carter Chris",
            genre: "detective",
            year: 2013,
            rank: 9.83,
            price: 28,
            img: "https://litlife.club/data/Book/0/217000/217759/BC3_1410688094.jpg?w=600&h=600&q=90",
            annotation: "This is a police detective thriller set in America. A killer uses the internet and his extensive knowledge of how IP addresses work to assist his killing spree. ",
            id: uid()
        },
        {
            title: "Fight Club",
            author: "Palahniuk Chuck",
            genre: "prose",
            year: 2009,
            rank: 9.63,
            price: 17,
            img: "https://litlife.club/data/Book/0/87000/87828/BC3_1474544490.jpg?w=600&h=600&q=90",
            annotation: "Fight Club starts off with our nameless narrator held hostage with a gun in his mouth atop a building rigged with explosives set to go off at any moment. Yeah, The Baby-Sitters Club this ain't. Starting from this dire situation, our narrator decides to tell us how he got to this point.",
            id: uid()
        },
        {
            title: "Ramage",
            author: "Pope Dudley",
            genre: "adventures",
            year: 2010,
            rank: 10.0,
            price: 34,
            img: "https://litlife.club/data/Book/0/119000/119128/BCS_1349028836.jpg?w=600&h=600&q=90",
            annotation: "In a daring foray, under the very nose of the French Mediterranean fleet, Lieutenant Lord Nicholas Ramage is to sail his tiny cutter close in to the Italian shore and rescue a party of stranded aristocrats from Napoleon's fast-advancing army.",
            id: uid()
        },
        {
            title: "Grimms` Fairy Tales",
            author: "Davenport Jennie",
            genre: "children",
            year: 1994,
            rank: 9.5,
            price: 32,
            img: "https://litlife.club/data/Book/0/0/707/BC3_1386593820.jpg?w=600&h=600&q=90",
            annotation: "A lovely collection of 50 stories from the Brothers Grimm, including; The Wolf And The Seven Little Kids; The Goose-Girl;",
            id: uid()
        },
        {
            title: "The Caller",
            author: "Carter Chris",
            genre: "detective",
            year: 2017,
            rank: 9.59,
            price: 44,
            img: "https://images-na.ssl-images-amazon.com/images/I/81-7W7KGYQL.jpg",
            annotation: "After a tough week, Tanya Kaitlin is looking forward to a relaxing night in, but as she steps out of her shower, she hears her phone ring.  The video call request comes from her best friend, Karen Ward.  Tanya takes the call and the nightmare begins.",
            id: uid()
        },
        {
            title: "Revelation",
            author: "Karpyshyn Drew",
            genre: "scienceF",
            year: 2010,
            rank: 7.8,
            price: 21,
            img: "https://litlife.club/data/Book/0/91000/91909/BCS_1349020826.jpg?w=600&h=600&q=90",
            annotation: "The resulting number of commentaries on the book is enormous, and most studies can only touch upon, at most, a representative sample of this vast literature.",
            id: uid()
        },
        {
            title: "Deception Point",
            author: "Brown Dan",
            genre: "detective",
            year: 2010,
            rank: 9.99,
            price: 39,
            img: "https://litlife.club/data/Book/0/125000/125823/BCS_1349021980.jpg?w=600&h=600&q=90",
            annotation: "On the eve of a presidential race in which NASA's budget is a pivotal issue, the space agency announces the discovery of an ancient meteorite filled with fossils deep in the Arctic ice.",
            id: uid()
        },
        {
            title: "The Secret History",
            author: "Tartt Donna",
            genre: "prose",
            year: 2011,
            rank: 9.89,
            price: 41,
            img: "https://litlife.club/data/Book/0/94000/94365/BC3_1474425076.jpg?w=600&h=600&q=90",
            annotation: "The Secret History by Donna Tartt is an intricate glimpse into the lives of six students at Hampden College in Vermont and the impressions of one of those students who arrives mid-way through the relationships of the others.",
            id: uid()
        },
        {
            title: "Hornblower and the Crisis",
            author: "Forester Cecil Scott",
            genre: "adventures",
            year: 1990,
            rank: 0.23,
            price: 10,
            img: "https://litlife.club/data/Book/0/126000/126284/BCS_1349022091.jpg?w=600&h=600&q=90",
            annotation: "The final Horatio Hornblower story tells of Napoleon's plans to invade England. Set in 1805, Hornblower and the Crisis finds Horatio Hornblower in possession of confidential dispatches from Bonaparte after a vicious hand-to-hand encounter with a French brig.",
            id: uid()
        },
        {
            title: "The Adventures of Huckleberry Finn",
            author: "Twain Mark",
            genre: "children",
            year: 1981,
            rank: 10.0,
            price: 43,
            img: "https://litlife.club/data/Book/0/0/755/BC3_1386593870.jpg?w=600&h=600&q=90",
            annotation: "Mark Twain’s 1885 novel condemning the institutionalized racism of the pre-Civil War South is among the most celebrated works of American fiction. Twain’s story of a runaway boy and an escaped slave’s travels on the Mississippi plumbs the essential meaning of freedom. ",
            id: uid()
        },
    ],
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.books));
    },
    getData: function () {
        var booksStorage = JSON.parse(localStorage.getItem("storeData"));
        if (booksStorage) {
            this.books = booksStorage;
        }
    },
    addBook: function (title, author, genre, year, rank, price, img, annotation) {
        var id = uid();
        this.books.push({
            title: title,
            author: author,
            genre: genre,
            year: year,
            rank: rank,
            price: price,
            img: img,
            annotation: annotation,
            id: id
        });
        this.storeData();
    },
    deleteBook: function (title) {
        var index = this.books.findIndex(function (book) { return book.title === title; });
        if (index >= 0) {
            this.books.splice(index, 1);
        }
        this.storeData();
    },
    deleteByID: function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
        localStorage.setItem("storeData", JSON.stringify(this.books));
    },
    updateBook: function (id, genre, title, price) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index >= 0) {
            this.books[index].genre = genre;
            this.books[index].title = title;
            this.books[index].price = price;
        }
        this.storeData();
    },
    additem: function (Book) {
        var isAdded = false;
        if (!Book.quantity)
            Book.quantity = 1;
        this.cartItems.forEach(function (book) {
            if (book.id == Book.id) {
                book.quantity += 1;
                console.log(book.quantity);
                isAdded = true;
                return;
            }
        });
        if (isAdded)
            return;
        this.cartItems.push(Book);
    },
    deleteItem: function (id) {
        this.cartItems = this.cartItems.filter(function (book) { return book.id !== id; });
        this.renderitemcart(cart);
        console.log(this.cartItems);
        this.renderCartCount();
    },
    addOneItem: function (id) {
        var index = this.cartItems.findIndex(function (book) { return book.id == id; });
        this.cartItems[index].quantity++;
    },
    removeOneItem: function (id) {
        var index = this.cartItems.findIndex(function (book) { return book.id == id; });
        if (this.cartItems[index].quantity <= 1)
            this.deleteItem(id);
        else
            this.cartItems[index].quantity--;
    },
    sortAscenByAuthor: function () {
        this.books = this.books.sort(function (a, b) {
            var authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase();
            if (authorA < authorB)
                return -1;
            if (authorA > authorB)
                return 1;
            return 0;
        });
        this.books.forEach(function (book) {
            console.log(book.author);
        });
    },
    sortDescenByAuthor: function () {
        this.books = this.books.sort(function (a, b) {
            var authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase();
            if (authorA < authorB)
                return 1;
            if (authorA > authorB)
                return -1;
            return 0;
        });
        console.log("------");
        this.books.forEach(function (book) {
            console.log(book.author);
        });
    },
    sortAscenByYear: function () {
        this.books = this.books.sort(function (a, b) {
            return a.year - b.year;
        });
    },
    sortDescenByYear: function () {
        this.books = this.books.sort(function (a, b) {
            return b.year - a.year;
        });
    },
    sortAscenByRanking: function () {
        this.books = this.books.sort(function (a, b) {
            return a.rank - b.rank;
        });
    },
    sortDescenByRanking: function () {
        this.books = this.books.sort(function (a, b) {
            return b.rank - a.rank;
        });
    },
    filterByYear: function (year) {
        return this.books.filter(function (book) { return book.year <= year; });
    },
    filterByRank: function (rank) {
        return this.books.filter(function (book) { return book.rank <= rank; });
    },
    filterByGenre: function (genre) {
        return this.books.filter(function (book) { return book.genre === genre; });
    },
    filterByAuthor: function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    },
    filterByTitle: function (title) {
        return this.books.filter(function (book) { return book.title === title; });
    },
    renderFilterByTitle: function (filteredByTitle, domElement) {
        this.render(filteredByTitle, domElement);
    },
    renderFilterByAuthor: function (filteredByAuthor, domElement) {
        this.render(filteredByAuthor, domElement);
    },
    renderFilterByGenre: function (filteredByGenre, domElement) {
        this.render(filteredByGenre, domElement);
    },
    renderFilterByRank: function (filteredByRank, domElement) {
        this.render(filteredByRank, domElement);
    },
    renderFilterByYear: function (filteredByYear, domElement) {
        this.render(filteredByYear, domElement);
    },
    renderERP: function (list, domElement) {
        var html = " ";
        list.forEach(function (book) {
            html += "<div class=\"containerERP__content\">\n      \n                  <div class='containerERP__content__cartERP'> \n\n                      <div class='containerERP__content__cartERP__img'> \n                         <img src=\"" + book.img + ".jpg\" >  \n                      </div> \n                      \n                       <div class='containerERP__content__cartERP__info'>  \n                             <strong class=\"title\">" + book.title + "</strong>                                \n                             <strong class=\"author\">" + book.author + "</strong>\n                             <strong class=\"genre\">" + book.genre + "</strong>\n                             <strong class=\"year\">" + book.year + "</strong>\n                             <strong class=\"rank\">" + book.rank + "</strong>             \n                        </div> \n                  </div>\n                   <div class=\"containerERP__content__erpBtn\">      \n                         <div class=\"content__erpBtn__delete\" style= \"margin-bottom: 1em;\" >\n                               <button class=\"containerERP__inputs__form__one__inp\"  onclick=\"handleDeleteByID('" + book.id + "')\"><span style =\"color: grey; cursor: pointer;\" >Delete book</span></button>\n                         </div> \n                       \n                         <div class=\"content__erpBtn__update\">\n                             <form id=\"formAdd\" onsubmit=\"handleUpdateBook(event, '" + book.id + "')\">\n                                  <select class=\"containerERP__inputs__form__one__inp\" name=\"genre\" id=\"\"  style=\"cursor: pointer;\" >\n                                      <option value=\"genre\" disabled selected>genre</option>\n                                      <option value=\"scienceF\">scienceF</option>\n                                      <option value=\"detective\">detective</option>\n                                      <option value=\"prose\">prose</option>\n                                      <option value=\"adventures\">adventures</option>\n                                      <option value=\"children\">children</option>\n                                   </select> \n                                   <textarea class=\"containerERP__inputs__form__one__inp annotation\" name=\"annotation\" id=\"annotation\" maxlength=\"2000\"\n                                 cols=\"200\" rows=\"200\" placeholder=\"Wright book annotation here\" value=\"" + book.annotation + "\"></textarea> \n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"text\" name=\"title\" placeholder=\"Edit title\" value=\"" + book.title + "\">\n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"number\" name=\"price\"  id=\"price\" placeholder=\"Edit price\" value=\"" + book.price + "\">\n                                 <input class=\"containerERP__inputs__form__one__inp\"  type=\"submit\" id=\"update\" value=\"Update book\" style=\"cursor: pointer;\" >\n                             </form>\n                         </div> \n                    </div>          \n               </div>";
        });
        domElement.innerHTML = html;
    },
    render: function (list, domElement) {
        var htmlStore = "";
        list.forEach(function (book) {
            htmlStore += "<div class=\"cartStore\">\n                  <h2  class=\"bookTitle\" >" + book.title + "</h2>\n                  <h3>" + book.author + "</h3>  \n                  <div class=\"textOverImage\" data-text=\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\">    \n                      <img class=\"img\" src=\"" + book.img + "\">\n                  </div>\n                  <p class=\"price\" >" + book.year + " &nbsp &nbsp " + book.price + "$</p>\n                  <div class=\"rating\"> \n                      <span class=\"rating__result\"></span>                 \n                      <i class=\"rating__star far fa-star\" data-number=\"1\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"rating__star far fa-star\" data-number=\"2\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"rating__star far fa-star\" data-number=\"3\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"rating__star far fa-star\" data-number=\"4\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                      <i class=\"rating__star far fa-star\" data-number=\"5\" id=\"" + book.id + "\" onclick = \"handleStarClick(event)\"></i>\n                   </div>                        \n                  <p class=\"rank\"> " + book.rank + "</p>\n                 \n                  <input type =\"button\" class = \"cartStore__addToCartBtn  \" onclick=\"handleaddcart(event,'" + book.id + "')\" value = \"Add to cart\">                                      \n               </div>";
        });
        domElement.innerHTML = htmlStore;
    },
    renderitemcart: function (domElement) {
        var html2 = "";
        var total = 0;
        this.cartItems.forEach(function (book) {
            html2 += "<div class='cart__card'>\n            <img src=\"" + book.img + "\">\n            <p class=\"cart__card--name\">" + book.title + "</p>\n            <p class=\"cart__card--price\">&#36;" + book.price + "</p>\n            <button id=\"add_one\" onclick='handleQuantity(event, \"" + book.id + "\")' style=\"background: none; border: none; font-size: 1.2em; color: white;\">\u25B2</button>\n            <p class=\"cart__card--quantity\">" + book.quantity + "</p>\n            <button id=\"remove_one\" onclick='handleQuantity(event, \"" + book.id + "\")' style=\"background: none; border: none; font-size: 1.2em; color: white;\">\u25BC</button>       \n           <button  onclick='handleDelete(\"" + book.id + "\")' style=\"background: none; border: none; font-size: 1.2em; color: red;\"><i class=\"far fa-trash-alt delete\"></i></button>\n            </div>";
            total += book.price * book.quantity;
        });
        domElement.innerHTML = html2;
        document.querySelector("#total").innerHTML = "" + total;
    },
    renderCartCount: function () {
        document.querySelector(".cart-notification").innerHTML = "" + this.cartItems.length;
        if ("" + this.cartItems.length > 0) {
            document.querySelector(".cart-notification").style.color =
                "wight";
        }
    }
};
StandartEbooks.getData();
StandartEbooks.storeData();
function handleaddcart(ev, itemToAddId) {
    var itemToAdd = StandartEbooks.books.filter(function (book) { return book.id == itemToAddId; })[0];
    StandartEbooks.additem(itemToAdd);
    var cart = document.querySelector(".cart");
    StandartEbooks.renderitemcart(cart);
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(function () {
        cartIcon.classList.remove("pulse");
    }, 1000);
    StandartEbooks.renderCartCount();
    setTimeout(function () {
        cartIcon.classList.remove("pulse");
    }, 1000);
}
function handleDelete(id) {
    StandartEbooks.deleteItem(id);
    StandartEbooks.renderitemcart(cart);
}
var cart = document.querySelector(".cart");
StandartEbooks.renderitemcart(cart);
var cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener("click", handleCartClick);
function handleCartClick() {
    var cart = document.querySelector(".bask");
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
        var rootERP_1 = document.querySelector("#rootERP");
        StandartEbooks.renderERP(StandartEbooks.books, rootERP_1);
    }
    catch (err) {
        console.error(err);
    }
}
function renderCustomer() {
    try {
        StandartEbooks.getData();
        var root_1 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_1);
    }
    catch (err) {
        console.error(err);
    }
}
function handleAddBook(e) {
    try {
        // debugger;
        e.preventDefault();
        var id = uid();
        console.log(e.target);
        var title = e.target.title.value;
        var author = e.target.author.value;
        var genre = e.target.genre.value;
        var year = e.target.year.valueAsNumber;
        var rank = e.target.rank.valueAsNumber;
        var price = e.target.price.valueAsNumber;
        var img = e.target.img.value;
        var annotation = e.target.annotation.value;
        var rootERP_2 = document.querySelector("#rootERP");
        StandartEbooks.addBook(title, author, genre, year, rank, price, img, annotation);
        StandartEbooks.render(StandartEbooks.books, rootERP_2);
        StandartEbooks.storeData();
        if (typeof title !== "string")
            throw new Error("input should be of type string");
        e.target.reset();
    }
    catch (err) {
        console.error(err);
    }
}
function handleDeleteBook(e) {
    e.preventDefault();
    try {
        console.log(e);
        console.log(e.target.elements["delete"].value);
        var title = e.target.elements["delete"].value;
        var rootERP_3 = document.querySelector("#rootERP");
        if (typeof title !== "string")
            throw new Error("input should be of type string");
        if (title) {
            console.log(title);
            StandartEbooks.deleteBook(title);
            StandartEbooks.renderERP(StandartEbooks.books, rootERP_3);
            StandartEbooks.storeData();
        }
        else {
            throw new Error("User didnt write a title");
        }
    }
    catch (err) {
        console.error(err);
    }
}
function handleDeleteByID(id) {
    try {
        console.log(id);
        var rootERP_4 = document.querySelector("#rootERP");
        StandartEbooks.deleteByID(id);
        StandartEbooks.renderERP(StandartEbooks.books, rootERP_4);
        if (typeof id !== id)
            throw new Error("you have no id");
    }
    catch (err) {
        console.error(err);
    }
}
function handleUpdateBook(e, id) {
    try {
        e.preventDefault();
        console.log(id);
        var genre = e.target.genre.value;
        var title = e.target.elements.title.value;
        var price = e.target.elements.price.valueAsNumber;
        var rootERP_5 = document.querySelector("#rootERP");
        StandartEbooks.updateBook(id, genre, title, price);
        StandartEbooks.renderERP(StandartEbooks.books, rootERP_5);
        StandartEbooks.storeData();
        e.target.reset();
        if (typeof genre !== "string")
            throw new Error("input should be of type string");
        if (typeof price !== "number")
            throw new Error("input should be of type number");
    }
    catch (err) {
        console.error(err);
    }
}
function handleAuthorAscen() {
    try {
        StandartEbooks.sortAscenByAuthor();
        var root_2 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_2);
    }
    catch (err) {
        console.error(err);
    }
}
function handleAuthoreDescen() {
    try {
        StandartEbooks.sortDescenByAuthor();
        var root_3 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_3);
    }
    catch (err) {
        console.error(err);
    }
}
function handleYearAscen() {
    try {
        StandartEbooks.sortAscenByYear();
        var root_4 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_4);
    }
    catch (err) {
        console.error(err);
    }
}
function handleYearDescen() {
    try {
        StandartEbooks.sortDescenByYear();
        var root_5 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_5);
    }
    catch (err) {
        console.error(err);
    }
}
function handleRankingAscen() {
    try {
        StandartEbooks.sortAscenByRanking();
        var root_6 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_6);
    }
    catch (err) {
        console.error(err);
    }
}
function handleRankingeDescen() {
    try {
        StandartEbooks.sortDescenByRanking();
        var root_7 = document.querySelector("#root");
        StandartEbooks.render(StandartEbooks.books, root_7);
    }
    catch (err) {
        console.error(err);
    }
}
function handleFilterByYear(e) {
    try {
        e.preventDefault();
        var year = e.target.valueAsNumber;
        var root_8 = document.querySelector("#root");
        if (typeof year !== "number")
            throw new Error("input should be of type number");
        if (year) {
            var filteredByYear = StandartEbooks.filterByYear(year);
            StandartEbooks.renderFilterByYear(filteredByYear, root_8);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_8);
        }
    }
    catch (err) {
        console.error(err);
    }
}
function handleFilterByRank(e) {
    try {
        e.preventDefault();
        var rank = e.target.valueAsNumber;
        var root_9 = document.querySelector("#root");
        if (typeof rank !== "number")
            throw new Error("input should be of type number");
        if (rank) {
            var filteredByRank = StandartEbooks.filterByRank(rank);
            StandartEbooks.renderFilterByRank(filteredByRank, root_9);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_9);
        }
    }
    catch (err) {
        console.error(err);
    }
}
function handleSelectByGenre(e) {
    try {
        e.preventDefault();
        console.log(e.target);
        console.log(e);
        // debugger;
        var genre_1 = e.target.id;
        var root_10 = document.querySelector("#root");
        if (typeof genre_1 !== "string")
            throw new Error("input should be of type string");
        if (genre_1 === "all") {
            StandartEbooks.render(StandartEbooks.books, root_10);
        }
        else {
            console.log(genre_1);
            var filterByGenre = StandartEbooks.filterByGenre(genre_1);
            var a = StandartEbooks.books.filter(function (book) {
                return book.genre === genre_1;
            });
            // console.log("ghgjg..........", filterByGenre, genre, a);
            StandartEbooks.renderFilterByGenre(filterByGenre, root_10);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleFilterByAuthor(e) {
    try {
        e.preventDefault();
        var author = e.target.value;
        var root_11 = document.querySelector("#root");
        if (typeof author !== "string")
            throw new Error("input should be of type string");
        if (author) {
            var filterByAuthor = StandartEbooks.filterByAuthor(author);
            StandartEbooks.renderFilterByAuthor(filterByAuthor, root_11);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_11);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleFilterByTitle(e) {
    try {
        e.preventDefault();
        var title = e.target.value;
        var root_12 = document.querySelector("#root");
        if (typeof title !== "string")
            throw new Error("input should be of type string");
        if (title) {
            var filterByTitle = StandartEbooks.filterByTitle(title);
            StandartEbooks.renderFilterByTitle(filterByTitle, root_12);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_12);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleSearchBook(e) {
    try {
        e.preventDefault();
        var author_1 = e.target.value;
        var title_1 = e.target.value;
        var search = e.target.value;
        var regex_1 = new RegExp(search, "i");
        var root_13 = document.querySelector("#root");
        root_13.innerHTML = "";
        if (typeof search !== "string")
            throw new Error("input should be of type string");
        if (search.length > 0) {
            var foundBook = StandartEbooks.books.filter(function (book) {
                if (regex_1.test(book.title) || regex_1.test(book.author))
                    return true;
                var filterByTitle = StandartEbooks.filterByTitle(title_1);
                var filterByAuthor = StandartEbooks.filterByAuthor(author_1);
                StandartEbooks.renderFilterByTitle(filterByTitle, root_13);
                StandartEbooks.renderFilterByAuthor(filterByAuthor, root_13);
            });
            var html = foundBook
                .map(function (book) {
                return "<p>" + book.title + "</p>\n                <p>" + book.author + "</p>";
            })
                .join("");
            root_13.innerHTML = html;
            console.log(foundBook);
        }
        else {
            StandartEbooks.render(StandartEbooks.books, root_13);
        }
    }
    catch (error) {
        console.log(error);
        // alert(error.message);
    }
}
var root = document.querySelector("#root");
var rootERP = document.querySelector("#rootERP");
StandartEbooks.getData();
StandartEbooks.storeData();
// clock
var clock = document.querySelector(".clock");
var tick = function () {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    // console.log(h, m, s);
    var html = "\n    <span>" + h + "</span> :\n    <span>" + m + "</span> :\n    <span>" + s + "</span>\n  ";
    clock.innerHTML = html;
};
setInterval(tick, 1000);
// social counter
var counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
    counter.innerText = "0";
    counter.style.color = "rgba(248, 244, 244, 0.509)";
    var updateCounter = function () {
        var target = +counter.getAttribute("data-target");
        var c = +counter.innerText;
        var increment = target / 1500;
        if (c < target) {
            counter.innerText = "" + Math.ceil(c + increment);
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
// humburger toggle menu with animation
document.getElementsByClassName("nav-toggle")[0].addEventListener("click", function () {
    document.body.classList.toggle("activeNav");
});
var textService = document.querySelector(".textService");
var textAbout = document.querySelector(".textAbout");
var textContact = document.querySelector(".textContact");
var linkService = document.querySelector(".linkService");
var linkAbout = document.querySelector(".linkAbout");
var linkContact = document.querySelector(".linkContact");
textAbout.style.display = "none";
textContact.style.display = "none";
textService.style.display = "none";
linkService.addEventListener('click', function () {
    textAbout.style.display = 'none';
    textContact.style.display = "none";
    textService.style.display = "block";
    document.querySelector(".textService").innerHTML = document.querySelector(".textService").textContent.replace(/./g, "<span>$&</span>");
    var spans = document.querySelectorAll(".textService span");
    for (var i = 0; i < spans.length; i++) {
        var left = innerWidth * Math.random();
        var top = innerHeight * Math.random();
        if (Math.random() < 0.5) {
            spans[i].style.left = "-" + left + "px";
        }
        else {
            spans[i].style.left = left + "px";
        }
        if (Math.random() < 0.5) {
            spans[i].style.top = "-" + top + "px";
        }
        else {
            spans[i].style.top = top + "px";
        }
    }
});
linkAbout.addEventListener("click", function () {
    textAbout.style.display = "block";
    textContact.style.display = "none";
    textService.style.display = "none";
    document.querySelector(".textAbout").innerHTML = document.querySelector(".textAbout").textContent.replace(/./g, "<span>$&</span>");
    var spans = document.querySelectorAll(".textAbout span");
    for (var i = 0; i < spans.length; i++) {
        var left = innerWidth * Math.random();
        var top = innerHeight * Math.random();
        if (Math.random() < 0.5) {
            spans[i].style.left = "-" + left + "px";
        }
        else {
            spans[i].style.left = left + "px";
        }
        if (Math.random() < 0.5) {
            spans[i].style.top = "-" + top + "px";
        }
        else {
            spans[i].style.top = top + "px";
        }
    }
});
linkContact.addEventListener("click", function () {
    textAbout.style.display = "none";
    textContact.style.display = "block";
    textService.style.display = "none";
    document.querySelector(".textContact").innerHTML = document.querySelector(".textContact").textContent.replace(/./g, "<span>$&</span>");
    var spans = document.querySelectorAll(".textContact span");
    for (var i = 0; i < spans.length; i++) {
        var left = innerWidth * Math.random();
        var top = innerHeight * Math.random();
        if (Math.random() < 0.5) {
            spans[i].style.left = "-" + left + "px";
        }
        else {
            spans[i].style.left = left + "px";
        }
        if (Math.random() < 0.5) {
            spans[i].style.top = "-" + top + "px";
        }
        else {
            spans[i].style.top = top + "px";
        }
    }
});
// scrollToTop
var scrollToTopBtn = document.querySelector("#scrollToTopBtn");
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
    try {
        scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    catch (error) {
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
