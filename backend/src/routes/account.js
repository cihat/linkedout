const express = require('express')
const router = express.Router()
const passport = require('passport')
const accountController = require('../controllers/account')

router.get('/', accountController.findUsers)

router.post('/register', accountController.register)

router.post(
  '/session',
  accountController.preventLoginForLoggedInUsers,
  passport.authenticate('local', {
    failWithError: true,
  }),
  accountController.login,
  (err, req, res, next) => {
    if (err.status != 401) return next(err)

    next(
      new Error('The username and password you provided did not match out records. Please double-check and try again.')
    )
  }
)

router.get('/session', accountController.checkLoggedIn)

router.delete('/session', accountController.logout)

module.exports = router
