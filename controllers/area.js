'use strict';

const router = require('express').Router();
const Area = require('../models/area');

router.post('/', (req, res) => {
    const area = new Area();
    area.name = req.body.name;

    area.save()
        .then(() => {
            res.json({
                message: 'Area created'
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
