

// Main Entry point for the Rest Api Demo
// Created by ZsebeEniko

// use the restify to create a web based service
//  # to manage  request/response handler REST based
//  # to  manage routes for the adequate resources
//
var restify = require('restify');0
var server = restify.createServer();

server.use(restify.fullResponse());
server.use(restify.bodyParser());


// Start the service to listen on the


var port = 3000;
server.listen(process.env.PORT || port  , function (err) {
    if (err)
        console.error(err)
    else
        console.log('Porton fut: ' + process.env.PORT || port )
});


// Set the routes for the defeault html file
server.get("/", restify.serveStatic({
    'directory': '.',
    'default': 'client.html'
}));



server.get("/demo/getexample", function(req, res) {
    // Use mongodb as a persistence  layer later
   // put on the console the request
    //console.log('request  description: ');


    var respRandomValue = Math.floor(Math.random() * 10 + 1) ;

    console.log('request  description: ', respRandomValue);
    res.json({type: true, data: 'kapott valasz, a verzioszam a kovetkezokeppen valtozik:  v1.0' + respRandomValue});


    // prepare the json answer
    //res.json({type: true, data: 'Answer for the get Answer '});
});





