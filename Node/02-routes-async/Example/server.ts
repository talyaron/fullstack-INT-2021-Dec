const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

interface User {
  name: string;
  age: number
}

const users: Array<User> = [
  { name: 'Moshe', age: 23 },
  { name: 'Miriam', age: 33 },
  { name: "Aharon", age: 26 }
]

app.get('/api/user1', (req, res) => {
  try {

    res.send({ user: users[0] });

  } catch (error) {
    res.send({ error: error.message })
  }
});

//route for user 2
app.get('/api/user2', (req, res) => {
  try {
 setTimeout(() => {
  res.send({ user: users[1] })
 },3000)
   

  } catch (error) {
    res.send({ error: error.message })
  }
})

app.get('/api/user3', (req, res) => {
  try {

    res.send({ user: users[2] })


  } catch (error) {
    res.send({ error: error.message })
  }
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})