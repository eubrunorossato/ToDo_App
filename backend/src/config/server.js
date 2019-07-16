const port = 3003;

const badoyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./core')

server.use(badoyParser.urlencoded({ extended : true }));
server.use(badoyParser.json());
server.use(allowCors)

server.listen(port, function(){
    console.log(port)
})

module.exports = server 