const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static('public'))


interface MyJoke{
    name:string;
    src:string;
  }
  
  const jokes:Array<MyJoke> = [
    {name:"First", src:"./images/Meme1.jpg"},
    {name:"Second", src:"./images/Meme2.webp"},
    {name:"Third", src:"./images/Meme3.jpg"},
  ];
  
  
  app.get('/api/joke1', (req, res)=>{
    try {
      res.send({myjoke:jokes[0]});
    }
       
     catch (error) {
        res.send({error:error.message})
    }});
  
  
    app.get('/api/joke2', (req, res)=>{
      try {
        res.send({myjoke:jokes[1]});
      }
         
       catch (error) {
          res.send({error:error.message})
      }});
  
  
      app.get('/api/joke3', (req, res)=>{
        try {
          res.send({myjoke:jokes[2]});
        }
           
         catch (error) {
            res.send({error:error.message})
        }});
  



app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
  