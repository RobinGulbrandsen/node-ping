var app = require('express')();

app.get('/ping', function(req, res) {
	return res.send('PONG!');
});

app.listen(1337);