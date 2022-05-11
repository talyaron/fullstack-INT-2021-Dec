const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static('public'));

const jokes:Array<string>= [
    'Hear about the new restaurant called Karma, Theres no menu - You get what you deserve',
    "A bear walks into a bar and says, Give me a whiskey and … cola :Why the big pause asks the bartender the bear shrugged. Im not sure I was born with them.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "I painted my computer black so it would run faster. Now it doesn't work. Then I painted my computer white so it would work.Now the whole system is corrupt",
]

app.get('/api/Joke', (req, res)=>{
    try {
        let randNumber:number = Math.round(Math.random()*jokes.length)
        res.send({joke:jokes[randNumber]});

    } catch (error) {
        res.send({error:error.message})
    }
});


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })