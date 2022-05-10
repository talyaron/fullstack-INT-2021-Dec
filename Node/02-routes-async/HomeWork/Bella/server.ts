const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static('public'))

interface joke{
    name:string,
    src:string
}

const jokes:Array<joke> = [
    {name:"joke1" ,src:"./images/splash class room image.jpg"},
    {name:"joke2",src:"./images/splash class room image.jpg"},
    {name:"joke3",src:"./images/splash class room image.jpg"}
]

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
  
  