const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

interface User {
    joke: string
}

const jokes: Array<User> = [
    { joke: 'Hapoel Tel Aviv' },
    { joke: 'Rest in peace boiling water. You will be mist!' },
    { joke: 'If we shouldnt eat at night, why do they put a light in the fridge?' }

]

app.get('/api/joke1', (req, res) => {
    try {

        res.send({ user: jokes[0] });

    } catch (error) {
        res.send({ error: error.message })
    }
});

app.get('/api/joke2', (req, res) => {
    try {
        { res.send({ user: jokes[1] }) }

    } catch (error) {
        res.send({ error: error.message })
    }
})

app.get('/api/joke3', (req, res) => {
    try {

        res.send({ user: jokes[2] })

    } catch (error) {
        res.send({ error: error.message })
    }
})






app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})