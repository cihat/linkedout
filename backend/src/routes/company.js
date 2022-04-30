const express = require('express')
const companyController = require('../controllers/company')

const router = express.Router()

router.post('/create', companyController.createCompany)

module.exports = router
