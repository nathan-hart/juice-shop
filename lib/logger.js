/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 * I am natan
 */

const winston = require('winston')

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' })
  ],
  format: winston.format.simple()
  
})
