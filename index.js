var restify = require('restify');
var server = restify.createServer();

server.use(restify.fullResponse());
server.use(restify.bodyParser());

var port = 3000;
server.listen(process.env.PORT || port  , function (err) {
    if (err)
        console.error(err)
    else
        console.log('Porton fut: ' + process.env.PORT || port )
});

server.get("/", restify.serveStatic({
    'directory': '.',
    'default': 'client.html'
}));

server.get("/demo/getexample", function(req, res) {
	console.log('request  description: message');
	res.json({type: true, data: 'Everyday is a day... Make every day better than yesterday !'});
});





