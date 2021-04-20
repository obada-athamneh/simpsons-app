'use strict'
// Application Dependencies
const express = require('express');
const pg = require('pg');
const methodOverride = require('method-override');
const superagent = require('superagent');
const cors = require('cors');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.use(express.urlencoded({extended :true}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs')

// Express middleware
// Utilize ExpressJS functionality to parse the body of the request
app.get('/', indexHandler)
app.get('/favorite-quotes', )
function indexHandler (req, res){
    let url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
    superagent.get(url).set('User-Agent', '1.0').then(x => {

        console.log(x.body)
        res.render('index', { idx: x.body})
    })
    
}


// Specify a directory for static resources

// define our method-override reference

// Set the view engine for server-side templating

// Use app cors


// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);


// app routes here
// -- WRITE YOUR ROUTES HERE --


// callback functions
// -- WRITE YOUR CALLBACK FUNCTIONS FOR THE ROUTES HERE --

// helper functions

// app start point
client.connect().then(() =>
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
);
