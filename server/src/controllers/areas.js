'use strict';

const Area = require('../models/area');

module.exports.list = (req, res) => {
    Area.find({})
        .then(areas => {
            res.json(areas);
        })
        .catch(err => {
            res.send(err);
        });
};

module.exports.create = (req, res) => {
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
};
