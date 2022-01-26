const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!!",
  });
});

app.get("/posts", (req, res, next) => {
  const posts = [
    {
      id: "hdhdjhdkjkjkd979799",
      title: "First",
      content: "this is coming from first",
    },
    {
      id: "hdhdjhdkjkjkd979799",
      title: "secondt",
      content: "this is coming from secondt",
    },
  ];
  res.status(200).json({
    message: "posts fetched",
    posts: posts,
  });
});

module.exports = app;
