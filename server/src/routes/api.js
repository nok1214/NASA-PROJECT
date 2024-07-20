const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launch/launch.router');

const api = express.Router();

api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);

module.exports = api;
