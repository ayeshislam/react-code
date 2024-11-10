const { readData, writeData } = require("../models/postModel");
const { v4: uuidv4 } = require("uuid");
const createPost = (req, res) => {
  const posts = readData();
  const newPost = { id: uuidv4(), ...req.body };
  posts.push(newPost);
  writeData(posts);
  res.status(201).json(newPost);
};
const getPosts = (req, res) => {
  const posts = readData();
  res.json(posts);
};
const getPostsByid = (req, res) => {
  const posts = readData();
  const post = posts.find((p) => p.id === req.params.id);
  post ? res.json(post) : res.status(404).json({ message: "post not found" });
};
const updatePosts = (req, res) => {
  const posts = readData();
  const postIndex = posts.findIndex((p) => p.id === req.params.id);
  if (postIndex === -1)
    return res.status(404).json({ message: "post not found" });
  posts[postIndex] = { ...posts[postIndex], ...req.body };
  writeData(posts);
  res.json(posts[postIndex]);
};
const deletePosts = (req, res) => {
  const posts = readData();
  const newPosts = posts.filter((p) => p.id !== req.params.id);
  writeData(newPosts);
  res.json({ message: "post deleted" });
};

MediaSourceHandle.exports = {
  createPost,
  getPosts,
  getPostsByid,
  updatePosts,
  deletePosts,
};
