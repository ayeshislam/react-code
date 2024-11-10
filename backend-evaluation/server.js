const app = require("./app");
const mongoose = require("mongoose");
const PORT = 3000;
mongoose
  .connect(" mongodb://127.0.0.1:27017/blogDB")
  .then(() => {
    console.log("connectedto mongodb");
    app.listen(PORT, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("failed to connect to mongodb", err);
  });
