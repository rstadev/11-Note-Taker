const path = require('path');
const express = require('express')
const data = require('../db/db.json');



module.exports = function (app) {
  app.get('/api/notes', (req,res) => {
    // res.sendFile(path.join(__dirname, '../db/db.json'))
    console.log(data)
    res.json(data);
  });

  app.post('/api/notes', (req,res) => {
    data.push(req.body);
    res.status(200);
  });
}