const express = require('express')
const server = express()
const port = 3000
const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, ()=>{
    console.log(`paynet-backend running om port ${port}.`)
})

