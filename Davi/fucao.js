const express = require('express')
const router = express.Router()
const userController = require('./fucaoControler')

router.post('/', userController.createTimes)
router.get('/', userController.getAllTimes)

module.exports = router