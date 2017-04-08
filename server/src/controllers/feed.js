'use strict';

const mongoose = require('mongoose');

const Post = require('../models/post');

module.exports.list = (req, res) => {
    Post.find({
        userId: req.user._id
    })
        .sort({
            createdAt: -1
        })
        .then(posts => {
            const resPosts = posts.map(post => {
                return { text: post.text };
            });

            res.json(resPosts);
        })
        .catch(err => {
            res.send(err);
        })
}
