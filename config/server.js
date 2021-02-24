const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


const app = express();
app.set('view engine','ejs');
app.set('views','./frontend/views');

//app.use(expressValidator());

consign()
    .include('app/backend')
    .then('app/frontend')
    .into(app);
module.exports = app;