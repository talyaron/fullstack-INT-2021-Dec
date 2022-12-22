const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

interface imageType {
    pic: string;
    dis: string;
}


const images = [
    {
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNQHnUebeVHNync-GzCp2VEElA6xeuO3fTQ&usqp=CAU",
    dis: "hen",
    },
    {
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPqvg7SsBqzv5FF7ymLd72Hnnh6uhURQnyA&usqp=CAU",
        dis:"hens"
    }
];

app.get('/api/img1', (req, res) => {
    res.send({image: images[0]})
})
app.get('/api/img2', (req, res) => {
    res.send({image:images[1]})
    
})




app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })