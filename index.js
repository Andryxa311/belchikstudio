const express = require('express')
// const path = require('path')
const app = express()

// app.use(express.static(path.resolve(__dirname, 'source')))


let jsson = [{
    "name": "belchikstudio",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/Andryxa311/belchikstudio.git"
    },
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/Andryxa311/belchikstudio/issues"
    },
    "homepage": "https://github.com/Andryxa311/belchikstudio#readme",
    "dependencies": {
      "express": "^4.18.2",
      "nodemon": "^3.0.1"
    }
  }]
let jsson1 = [{
    "status": "call"
}]

app.get('/api', (req,res) => {
    res.status(201).json(jsson)
})

app.get('*', (request, response) => {
    response.status(200).json(jsson1)
})
  

app.listen(3000);




