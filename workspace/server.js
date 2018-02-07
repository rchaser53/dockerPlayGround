const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()
const server = require('http').createServer(app)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/nyan', (req, res) => {
  res.send('nyan')
})

server.listen(3000, () => {
  console.log('run server')
})