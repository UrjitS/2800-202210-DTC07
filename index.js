const express = require('express')

// Going to be used for heroku
let http = require('http');
let url = require('url');
const https = require('https');


const app = express()
app.set('view engine', 'ejs');


app.use(express.static('./public'));


// process.env.PORT is the port Heroku gives
app.listen(process.env.PORT || 3000, function (err) {
    if (err)
        console.log(err);
})