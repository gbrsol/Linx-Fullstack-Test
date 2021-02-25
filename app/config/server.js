const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const application = express();
application.set('view engine','ejs');
application.set('views','./app/frontend/views');
application.use(express.static('./app/frontend/public'));
//app.use(expressValidator());

consign()
    .include('./app/backend')
    .then('./app/config/dbConnection.js')
    .into(application);

module.exports = application;