const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

interface img{
    name:string;
    src:string
}

const images:Array<img>= [
    {name:'mount', src:"https://picsum.photos/seed/picsum/536/354"},
    {name:'pappy', src: "https://picsum.photos/id/237/536/354"},
   
]

app.get('/img1', (req, res)=>{
    try {
            res.send({img:images[0]});
    } catch (error) {
        res.send({error:error.message})
    }
});

app.get('/img2', (req, res)=>{
    try {
        res.send({img:images[1]});
        
    } catch (error) {
        res.send({error:error.message})
    }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})