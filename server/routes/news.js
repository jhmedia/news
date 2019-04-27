const express = require('express')
const router = express.Router()
const { getNewsByKeyword } = require('../controller/news')

router.get('/keyword', getNewsByKeyword)

module.exports = router
