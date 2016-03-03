"use strict"
require("babel-register")
const conf = require('../config')
const server = require('./initServer').default

server.start(conf.server.port)
