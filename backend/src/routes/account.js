const express = require('express')
const router = express.Router()
const passport = require('passport')
const accountsController = require('../controllers/accounts')

router.get('/', accountsController.findUsers)

router.post('/register', accountsController.register)

router.post(
  '/session',
  accountsController.preventLoginForLoggedInUsers,
  passport.authenticate('local', {
    failWithError: true,
  }),
  accountsController.postSession,
  (err, req, res, next) => {
    if (err.status != 401) return next(err)

    next(
      new Error('The username and password you provided did not match out records. Please double-check and try again.')
    )
  }
)

router.get('/session', accountsController.getSession)

router.delete('/session', accountsController.deleteSession)

module.exports = router
