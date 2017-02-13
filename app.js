'use strict';

const express = require('express');
const app = express();

app.get('/status', (req, res) => {
   res.send('I am ok');
});

app.listen(3000, () => {
    console.log('Listening on 3000...');
});