var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var swaras = require('./routes/swaras'); //routes are defined here
var app = express(); //Create the Express app

//connect to our database
//Ideally you will obtain DB details from a config file
var dbName = 'swarasdb';
var connectionString = 'mongodb://swarasadmin:shivashiva@ds040898.mlab.com:40898/' + dbName;

mongoose.connect(connectionString);

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', swaras); //This is our route middleware

app.set('port', process.env.PORT || 8000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});