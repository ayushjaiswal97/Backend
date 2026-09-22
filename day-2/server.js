const express = require("express");

const app = express(); // create server instance

app.get("/", (req, res) => {
  res.send("Hello world, Server is running");
});

app.get('/about', (req, res) => {
     res.send('This is about page')
});

app.get('/home', (req, res) => {
  res.send('This is home page')
})

app.listen(3000);