const path = require('path');
const express = require('express')

module.exports = function (app) {
  app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  })
  app.get('/notes', (req,res) => {
    // res.send(console.log(req.body))
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  });

  
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

};













// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

// app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

// // Displays all characters
// app.get('/api/characters', (req, res) => res.json(characters));