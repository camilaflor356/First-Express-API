const express = require('express')
const app = express()

app.post('/', function (req, res) {
  res.send('How are you?')
})

app.get('/', function (req,res) {
  res.send('Good, thanks!')
})

app.listen(3000)