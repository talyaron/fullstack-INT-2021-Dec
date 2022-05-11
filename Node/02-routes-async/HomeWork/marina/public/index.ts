
function handleButton() {

  try {    
    
    axios.get("/stock-img").then(({ data }) => {
      // console.log(data);
      const { stock, error } = data;
      // console.log(stock);
      if (error) throw new Error(error);
      renderOutput(stock); 
    });

  } catch (error) {
    console.error(error);
  }
}

function renderOutput(jokes) { 

  try {
    const root: HTMLElement = document.querySelector("#root");

    root.innerHTML = `<div class="card">
      <img src="${jokes.url}"></img>
      <p class="text">${jokes.text}</p>
      <p>${jokes.title}</p>
      </div>
      `;

  } catch (error) {
    console.error(error);
  }
  
}
