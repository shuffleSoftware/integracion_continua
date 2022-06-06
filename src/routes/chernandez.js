'use strict'
const express = require('express')
const controller = require('../controllers/chernandez')
const router = express.Router()
const path = 'chernandez'

/**
 * Ruta /chernandez GET
 */
router.get(`/${path}/`, controller.getData
)

module.exports = router