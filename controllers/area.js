'use strict';

const router = require('express').Router();
const Area = require('../models/area');

router.post('/', (req, res) => {
    const area = new Area();
    area.name = req.body.name;

    area.save((err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Area created'
        });
    });
});

module.exports = router;
