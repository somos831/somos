const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => {
  res.send('Hello, World, we are SOMOS!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
