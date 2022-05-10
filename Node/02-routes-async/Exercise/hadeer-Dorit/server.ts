const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const { Interface } = require('readline');

app.use(express.static('public'));
app.use(express.static('public'))

interface Img{
    src:string;
    name:string
}
const imgs:Array<Img>= [
    {src:'https://us.123rf.com/450wm/clairev/clairev1608/clairev160800097/61499500-school-class-theme.jpg?ver=6', name:'class1'},
    {src:'https://us.123rf.com/450wm/tigatelu/tigatelu1509/tigatelu150900396/45092207-cartoon-little-kid-a-study-in-the-classroom.jpg?ver=6', name:'class2'},
   
]
app.get('/api/img1', (req, res)=>{
    try {
        
        res.send({img:imgs[0]['src']});

    } catch (error) {
        res.send({error:error.message})
    }
});

app.get('/api/img2', (req, res)=>{
    try {
        
        res.send({img:imgs[1]['src']});

    } catch (error) {
        res.send({error:error.message})
    }
});


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })