'use strict'
const express = require('express')
const controller = require('../controllers/alberto')
const router = express.Router()
const path = 'alberto'

/**
 * Ruta /drodriguez GET
 */
router.get(`/${path}/`, controller.getData
)

module.exports = router
