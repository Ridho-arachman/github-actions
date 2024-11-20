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

app.post("/echo", (req, res) => {
  res.status(200).json({ data: req.body });
});

app.post("/login", async (req, res) => {
  try {
    const response = await fetch("https://depositosyariah.id/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "0897822001",
        password: "Guelupa.1",
      }),
    });

    if (!response.ok) {
      throw new Error("Gagal melakukan login");
    }

    const data = await response.json();
    console.log("Data respons:", data);
    res.status(200);
    res.json(data);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
});

module.exports = app;
