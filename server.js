const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/ping', (req, res) => res.send('pong'));
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});
app.listen(port);
