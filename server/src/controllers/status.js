'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'I am ok'
    });
});

module.exports = router;
