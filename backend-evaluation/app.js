const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger");
const postRoutes = require("./routes/postRoutes");
const authorRoutes = require("./routes/authorRoutes");
const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use("./posts", postRoutes);
app.use("/authors", authorRoutes);
app.use((req, res) => {
  res.status(404), json({ message: "routes not found" });
});

module.exports = app;
