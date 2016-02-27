"use strict"
require("babel-register")
let server = require('./initServer').default

server.start(4000)
