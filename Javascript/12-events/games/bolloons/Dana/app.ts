


  const balloonSelect = document.querySelector('.balloon');

    console.dir(balloonSelect)
  
    
    newBallon.addEventListener ('click', () => {
     newBallon.style.display === none; 
      
    })

    function creatBallon () {
      let newBallon = document.createElement('ballonSelect');
    
    const ballonCreation = document.body.appendChild(newBallon);
   

    }

  setInterval(creatBallon, 5000); 
