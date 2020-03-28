const express = require('express');
const app = express();
const router = express.Router();
const path = require( 'path' );

//Rotas
const index = require(path.resolve( 'src/routes/index'));
const personRoute = require('./src/routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
app.use(express.static(path.resolve( 'src/View/public')));
module.exports = app;