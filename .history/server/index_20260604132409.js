const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db-connect");

const Router = require("./routes");

const app = express();

const cors = require("cors");

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

app.use("/public", express.static("./public"));
app.use("/api", Router);

app.get("/", (req, res) => {
  res.send("API Running");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});