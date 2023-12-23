const express = require("express");

//express server
const app = express();

app.get("/posts", (req, res) => {});

app.post("/posts", (req, res) => {});

app.listen(4000, () => {
  console.log(`Listening on 4000`);
});
