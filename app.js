var express = require('express');
var app = express();
var five = require('johnny-five');
var board = new five.Board({port: "COM3"});

board.on("ready", function(){
    led = new five.Led(9);
})

app.get('/on', function(req, res){
    led.on();
    res.send({'on':true});
});

app.get('/off', function(req, res){
    led.off();
    res.send({'on':false});
});

    app.listen(3000, function(){
        console.log('Escutando na porta 3000');
});