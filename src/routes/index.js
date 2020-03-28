const express = require('express');
const router = express.Router();
const path = require( 'path' );

router.get('/', function (req, res, next) {
    res.sendFile(path.resolve( 'src/View/index.html' ))
});
module.exports = router;
