const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')


router.post('/', userCtrl.create)

module.exports = router