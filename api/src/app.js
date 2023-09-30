const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); //se está configurando para manejar datos codificados en URL
server.use(bodyParser.json({ limit: '50mb' })); //se encarga de analizar el cuerpo de las solicitudes en formato JSON
server.use(cookieParser()); //analiza las cookies que vienen con las solicitudes
server.use(morgan('dev')); //registra información sobre las solicitudes HTTP en la consola
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //Permite solicitudes desde la URL
  res.header('Access-Control-Allow-Credentials', 'true'); //Las credenciales pueden ser incluidas en la solicitud
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Encabezados que se permiten en la solicitud
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Métodos HTTP permitidos en la solicitud
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
