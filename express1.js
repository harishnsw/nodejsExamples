const express = require("express");
const app = express();

const course = [
  { id: 1, name: "Course1" },
  { id: 2, name: "Course2" },
  { id: 3, name: "Course3" },
];

app.get("/", (req, res) => {
  res.send(course);
});

app.get("/hello", (req, res) => {
  res.send("Hello World2, This is it");
});

app.listen(3009, () => console.log("Listening on port 3009"));
