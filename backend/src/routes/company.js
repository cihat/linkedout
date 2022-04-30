const express = require('express')
const companyController = require('../controllers/company')

const router = express.Router()

router.post('/create', companyController.createCompany)

router.post('/:companyId/comment', companyController.comment)

module.exports = router
