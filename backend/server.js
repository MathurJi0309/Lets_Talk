const express = require("express");
const dotenv=require('dotenv')

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("hi i am herre");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT=process.env.PORT

app.listen(PORT, console.log("wow server is running", PORT));
