const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const BACKEND_URL = "http://localhost:5000/api";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const response = await axios.get(`${BACKEND_URL}/status`);
  const data = response.data;

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>DevOps Dashboard</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #020617, #0f172a);
        font-family: Arial, sans-serif;
        color: #e5e7eb;
      }
      .container {
        width: 90%;
        max-width: 700px;
        background: #020617;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 0 30px rgba(56,189,248,0.3);
      }
      h1 {
        color: #38bdf8;
        text-align: center;
        margin-bottom: 20px;
      }
      input, button {
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        border-radius: 6px;
        border: none;
        font-size: 16px;
      }
      input {
        background: #0f172a;
        color: white;
      }
      button {
        background: #38bdf8;
        color: black;
        cursor: pointer;
        font-weight: bold;
      }
      button:hover {
        background: #0ea5e9;
      }
      ul {
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>DevOps Frontend</h1>

      <p><b>Backend:</b> ${data.service}</p>
      <p><b>Status:</b> ${data.status}</p>
      <p><b>Message:</b> ${data.message}</p>

      <h3 style="margin-top:20px;">DevOps Tools</h3>
      <ul>
        ${data.tools.map(t => `<li>${t}</li>`).join("")}
      </ul>

      <h3 style="margin-top:25px;">Send Data to Backend</h3>
      <form method="POST" action="/submit">
        <input type="text" name="username" placeholder="Enter your name" required />
        <input type="text" name="tool" placeholder="Favorite DevOps Tool" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </body>
  </html>
  `);
});

app.post("/submit", async (req, res) => {
  await axios.post(`${BACKEND_URL}/store`, req.body);
  res.redirect("/");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend running on port ${PORT}`);
});
