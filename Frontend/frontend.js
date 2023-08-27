// frontend.js
const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 8000;
const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(backendUrl);
    const helloMessage = response.data;
    const currentDate = new Date().toLocaleString();

    const finalMessage = `${currentDate} ${helloMessage}`;
    res.send(finalMessage);
  } catch (error) {
    console.error('Error fetching data from backend:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Frontend service is running on port ${port}`);
});
