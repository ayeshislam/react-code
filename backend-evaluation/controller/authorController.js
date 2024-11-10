const Author = require("../models/authorModel");
const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getAuthor = async (req, res) => {
  try {
    const author = await Author.find();
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createAuthor, getAuthor };
