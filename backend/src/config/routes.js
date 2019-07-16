const express = require('express')

function routes(server){
    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../API/todo/todoService')
    todoService.register(router, '/todos')
}

module.exports = routes;