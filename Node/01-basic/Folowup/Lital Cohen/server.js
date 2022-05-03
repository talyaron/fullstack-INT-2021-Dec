var express = require('express')
var app = express()
const port = 4000;
app.use(express.static("public"))

function multi(a,b){
    return Math.sqrt (a*b)
}
app.get("/",(req,res)=>{
    res.send("Hi Lital")
});
app.get("/name",(req,res)=>{
    res.send("my first name is Lital")
});

app.get("/multi",(req,res)=>{
    res.send(`<h1>${multi(6, 7)}`)
});
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});