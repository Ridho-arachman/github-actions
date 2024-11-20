const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const response = await fetch("https://depositosyariah.id/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const data = await response.json();
  res.status(200);
  res.json(data);
});

module.exports = app;
