const Validator = require('async-validator').default
const Company = require('../models/company')
const User = require('../models/user')
const userService = require('../services/user-service')

exports.createCompany = async (req, res, next) => {
  const descriptor = {
    employeeNumber: [
      { required: true, message: 'Company number is required.\n' },
      { type: 'number', message: 'Company number must be a number.\n' },
    ],
    name: [
      { required: true, message: 'Company name is required.\n' },
      { type: 'string', message: 'Company name must be a string.\n' },
      { min: 3, message: 'Company name should have a minimum length of 3 characters.\n' },
      { max: 200, message: 'Company name should have a maximum length of 200 characters.\n' },
    ],
  }

  const validator = new Validator(descriptor)

  console.log('req.user: ', req.user)

  const companyRequest = {
    founder: req.session.userId,
    employeeNumber: req.body.employeeNumber,
    name: req.body.name,
  }

  try {
    await validator.validate(companyRequest)
  } catch ({ errors }) {
    return next({
      message: errors.map(e => e.message).join(''),
    })
  }

  let company = new Company(companyRequest)

  try {
    company.save()

    req.user?.currentCompany.push(company)
    await req.user.save()

    res.status(200).send(company)
  } catch (e) {
    return next(e)
  }
}
