const path = require('path');
const express = require('express')
const data = require('../db/db.json');
const { fstat } = require('fs');



module.exports = function (app) {
  app.get('/api/notes', (req,res) => {
    // res.sendFile(path.join(__dirname, '../db/db.json'))
    console.log(data)
    res.json(data);
  });

  app.post('/api/notes', (req,res) => {
    const input = req.body
    fs.writeFile('../db/db.json', JSON.stringify(data))
    data.push(req.body);
    res.status(200);
  });
  app.get('api/notes/:id', function(req,res) {
    res.json(data[req.params.id])
  });
};