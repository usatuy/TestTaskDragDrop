
var express = require('express');
// var webpack = require('webpack')
// var webpackDevMiddleware = require('webpack-dev-middleware')
// var webpackHotMiddleware = require('webpack-hot-middleware')
// var config = require('./webpack.config')
var app = express();
app.set('port', (process.env.PORT || 5000));

app.use("/dist",express.static(__dirname + '/dist'));


console.log(__dirname);

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
// var compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});