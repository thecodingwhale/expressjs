var express = require('express');
var app = express();

require('./router/main')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
	console.log("Express is running on port 3000");
});

// tutorial for learnong expressjs
// http://codeforgeek.com/2014/06/express-nodejs-tutorial/