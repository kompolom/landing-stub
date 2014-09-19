#!/usr/bin/env node

var nodemon = require('nodemon'),
   config = require('./nodemon.json');

config.script = require.resolve('./index.js');

nodemon(config)
   .on('start', function() {
       console.log('nodemon started');
   })
   .on('crash', function() {
       console.log('script crashed for some reason');
   });
