const express = require("express");
const { createAuthor, getAuthor } = require("../controller/authorController");
const validateFields = require("../middlewares/validateFields");
const router = express.Router();
router.posts("/", validateFields[("name", "email")], createAuthor);
router.get("/", getAuthor);
module.exports = router;
