const express = require('express');

const server = express();
const projectsRouter = require('./Routers/projectsRouter');
const actionsRouter = require('./Routers/actionsRouter.js');
//const cors = require('cors');

server.use(express.json());
//server.use(cors());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;
