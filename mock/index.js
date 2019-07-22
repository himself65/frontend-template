const path = require('path')
const express = require('express')
const root = path.resolve(__dirname, '..', 'dist')

const server = express()

server.get('/foo', require('./foo'))
server.use(express.static(root))
server.listen(3000, () => {

})
