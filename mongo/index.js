const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017/user_data', function (err, client) {
  if (err) throw err

  var db = client.db('user_data')

  db.collection('user_data').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
app.get('/', function (req, res) {
    res.send('Got a POST request')
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))