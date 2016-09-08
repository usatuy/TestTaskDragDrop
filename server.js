
var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use("/dist",express.static(__dirname + '/dist'));


console.log(__dirname);

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
})


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});