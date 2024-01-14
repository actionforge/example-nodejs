const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/hello-world', (_req, res) => {
  res.status(200).send('Hello world');
});

module.exports = app;
