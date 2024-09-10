const express = require("express");
const dbConfig = require("./config/dbConfig");
const router = require("./routes/posts");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

// middleware
app.use("/api/v1", router);

dbConfig();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("fferwe");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
