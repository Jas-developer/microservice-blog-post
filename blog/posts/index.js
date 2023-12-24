const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");

//express server
const app = express();
app.use(cors());
app.use(bodyParser.json());
const posts = {
  test: {
    title: "Hello My Name is Jason and I am a fullstack Software Developer",
    id: "1",
  },
  test2: {
    title: "My techstack in the backend are MEN(MONGODB,EXPRESS,NODEJS)",
    id: "2",
  },
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).json(posts[id]);
});

app.listen(4000, () => {
  console.log(`Listening on 4000`, posts);
});
