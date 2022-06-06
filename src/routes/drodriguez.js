'use strict'
const express = require('express')
const controller = require('../controllers/drodriguez')
const router = express.Router()
const path = 'drodriguez'

/**
 * Ruta /drodriguez GET
 */
router.get(`/${path}/`, controller.getData
)

module.exports = router
