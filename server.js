const express = require("express")
const bodyParser = require("body-parser")
var routes = require("./customers")
var server = express()


//console.log(routes())

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(express.static('public'))

server.get('/customers', function (req, res) {
           res.send(routes())
})

server.listen(3000, () => {
      console.log('REST API Server listening at port  3000')
})
