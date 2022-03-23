function handelInsertText(event){
    console.dir(event)
    let outputElement:HTMLElement = document.querySelector(`#${event.target.name}`);
        try {
          const value = event.target.value;
         outputElement.innerHTML = value
        } catch (err) {
          console.error(err);
        }
      }
