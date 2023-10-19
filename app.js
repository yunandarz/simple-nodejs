require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Endpoint */
app.get('/welcome', (req, res) => {
  result = {
    "Message" : `Welcome To this API ${process.env.NAME}`,
    "Status Code" : 200,
  }
  res.json(result)
})

app.get('/home', (req, res) => {
    result = {
        "Message" : `Hai ini halaman home dalam bentuk data.json`,
        "Status_code" : 200,
    }
    res.json(result)
})

module.exports = app