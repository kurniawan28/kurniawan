// index.js


const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req, res) => {
  res.send('hello world!');
});
app.use("/users", require("./routes/userroute"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

