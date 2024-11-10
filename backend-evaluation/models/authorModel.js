const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  name: { type: stringify, required: true },
  email: {
    type: string,
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model("Author", authorSchema);
