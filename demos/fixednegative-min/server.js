var express = require('express');
var app = express();
var http = require('http').Server(app);
var base_instance = require('../../lib/jiff-server').make_jiff(http, { logs:true });

var jiffBigNumberServer = require('../../lib/ext/jiff-server-bignumber');
base_instance.apply_extension(jiffBigNumberServer);

// Serve static files.
app.use('/demos', express.static('demos'));
app.use('/lib', express.static('lib'));
app.use('/lib/ext', express.static('lib/ext'));
app.use('/bignumber.js', express.static('node_modules/bignumber.js'));
http.listen(8080, function () {
  console.log('listening on *:8080');
});

console.log('Direct your browser to *:8080/demos/fixedpoint-min/client.html.');
console.log('To run a server-based party: node demos/fixedpoint-min/party <input');
console.log();
