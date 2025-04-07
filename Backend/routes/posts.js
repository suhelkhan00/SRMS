// routes/posts.js
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create a new post
router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;