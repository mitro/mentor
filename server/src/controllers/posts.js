'use strict';

const Post = require('../models/post');

module.exports.create = (req, res) => {
    const post = new Post({
        text: req.body.text,
        userId: req.user._id
    });

    post.save()
        .then(post => {
            res.status(201).json({
                text: post.text,
                userId: post.userId
            });
        })
        .catch((err) => {
            res.send(err);
        });
}
