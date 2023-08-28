// backend.js
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const name = process.env.NAME || 'World';

app.get('/', (req, res) => {
  res.send(`Hello Ali Wattoo ${name}`);
});

app.listen(port, () => {
  console.log(`Backend service is running on port ${port}`);
});
