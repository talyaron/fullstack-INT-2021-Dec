const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))


interface joke{
    name:string;
    src:string;
  }
  
  const jokes:Array<joke> = [
    {name:"First", src:"./images/Meme1.jpg"},
    {name:"Second", src:"./images/Meme2.jpg"},
    {name:"Third", src:"./images/Meme3.jpg"},
    ,
  ];
  
  
  app.get('/api/joke1', (req, res)=>{
    try {
      res.send({joke:jokes[0]});
    }
       
     catch (error) {
        res.send({error:error.message})
    }});
  
  
    app.get('/api/joke2', (req, res)=>{
      try {
        res.send({joke:jokes[1]});
      }
         
       catch (error) {
          res.send({error:error.message})
      }});
  
  
      app.get('/api/joke3', (req, res)=>{
        try {
          res.send({joke:jokes[2]});
        }
           
         catch (error) {
            res.send({error:error.message})
        }});
  



app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
  