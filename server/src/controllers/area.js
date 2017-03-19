'use strict';

const router = require('express').Router();
const Area = require('../models/area');

router.get('/', (req, res) => {
    Area.find({})
        .then(areas => {
            res.json(areas);
        })
        .catch(err => {
            res.send(err);
        });
});

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
