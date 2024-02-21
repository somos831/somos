const express = require("express");
const cors = require("cors");
const app = express();
const port = 1234;

app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).send({ message: "Hello world, we are SOMOS!" });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
