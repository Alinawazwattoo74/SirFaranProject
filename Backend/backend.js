// backend.js
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const name = process.env.NAME || 'World';

app.get('/', (req, res) => {
  res.send(`Hello Ali W2 how was the day.The day was good for me.But still confusing what should i do`);
});

app.listen(port, () => {
  console.log(`Backend service is running on port ${port}`);
});
