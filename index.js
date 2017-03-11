const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = [{message: 'What\'s up!!', time: new Date()}];

app.get('/messages', function(req, res, next) {
  res.status(200).json({messages: messages})
});

app.post('/messages', function(req, res, next) {
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({messages: messages});
  console.log(req.body);
});

app.listen(3000, function(){
  console.log('Listening on port 3000')
});
