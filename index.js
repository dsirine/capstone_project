
//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world');
});
//listen to port 3006 by default
app.listen(process.env.PORT || 3006);
 
module.exports = app;