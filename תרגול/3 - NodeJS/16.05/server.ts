const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/send-data', (req, res) => {
    res.send({ dataServer: "something" })
})

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
})