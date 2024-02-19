const express = require('express')
const main = express.Router()

main.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = main