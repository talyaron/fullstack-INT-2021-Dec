import { error } from "console"

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

interface joke{
    setup:string,
    punchline:string
}
interface meme{
    title:string,
    pic:string
}

const jokes = [
    {
        setup:"What did the fish say when he swam into a wall?",
        punchline: "Dam."
    },
    {
        setup:"I sold my vacuum the other day.",
        punchline:"All it was doing was collecting dust."
    },
    {
        setup:"Did you hear about the guy who invented the knock-knock joke?",
        punchline:"He won the “no-bell” prize."
    }
]

const memes = [
    {
        title:'1',
        pic:'https://miro.medium.com/max/1280/0*gUmnBbPXyTNTL8hI'
    },
    {
        title:'2',
        pic:'https://programmercave0.github.io/assets/JS-Memes/jsmeme.jpg'   
    },
    {
        title:'3',
        pic:'https://www.freecodecamp.org/news/content/images/2019/07/best-js-meme-to-date-2.png'
    },
    {
        title:'4',
        pic:'https://i.pinimg.com/originals/31/45/73/314573bcfba2ededc03b5e5a45d3e938.png'
    },
    {
        title:'5',
        pic:'https://res.cloudinary.com/practicaldev/image/fetch/s--m0z-CFxG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/Hello-World-Programming.jpeg%3Flossy%3D1%26strip%3D1%26webp%3D1'
    }
    
]

app.get('/api/joke1', (req, res) => {
    try{
        res.send(jokes[0])
    }
    catch (error){
        console.error(error)
    }
  })
  
app.get('/api/joke2', (req, res) => {
    try{
        res.send(jokes[1])
    }
    catch (error){
        console.error(error)
    }
  })

app.get('/api/joke3', (req, res) => {
    try{
        res.send(jokes[2])
    }
    catch (error){
        console.error(error)
    }
  })
  
app.get('/api/memes', (req, res) => {
    try{
        res.send(memes)
    }
    catch (error){
        console.error(error)
    }
  })

app.listen (port)


