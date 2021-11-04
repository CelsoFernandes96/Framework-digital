const express = require('express')
const cors = require('cors')

const server = express()

// MIDDLEWARES
server.use(express.json())
server.use(cors())

/* CONTROLLERS */
const TaskController = require('../controllers/TaskController')

/* ROUTES */
server.get(`/`, (req, res) => {
  res.status(200).json({
    'message': 'Api online.'
  })
})

/* TAREFAS */
server.post(`/task/index`, TaskController.index)

server.listen(3003)