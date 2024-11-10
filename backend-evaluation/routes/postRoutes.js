const express = require("express");
const {
  createPost,
  getPosts,
  getPostsByid,
  updatePosts,
  deletePosts,
} = require("../controller/postController");

const router = express.Router();
router.post("/", validateFields(["title", "content", "author"]));
router.get("/", getPosts);
router.get("/:id", getPostsByid);
router.put("/:id", validateFields(["title", "content"]), updatePosts);
router.delete("/:id", deletePosts);
module.exports = router;
