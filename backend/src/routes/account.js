const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Validator = require('async-validator').default
const passport = require('passport')

const preventLoginForLoggedInUsers = (req, res, next) => {
  next(req.user && new Error('User is already logged in'))
}

router.get('/', async (req, res) => {
  res.send(await User.find())
})

router.post('/register', async (req, res, next) => {
  const descriptor = {
    name: [{ required: true, message: 'Your name is required.\n' }],
    password: [
      { required: true, message: 'Password is required.\n' },
      { min: 8, message: 'Password should have a minimum length of 8 characters.\n' },
      {
        pattern: /[a-zA-Z]/,
        message: 'Password should include at least one letter.\n',
      },
      { pattern: /\d/, message: 'Password should include at least one digit.\n' },
      { pattern: /[\W_]/, message: 'Password should include at least one symbol.\n' },
      { pattern: /^\S+$/, message: 'Password should not include spaces.\n' },
    ],
    passwordConfirmation: [
      { required: true, message: 'Password confirmation is required.\n' },
      {
        validator(rule, value, callback, source) {
          return source.password == value || new Error('The passwords you entered are inconsistent.\n')
        },
      },
    ],
    email: [
      { type: 'email', message: 'E-mail is not valid.\n' },
      { required: true, message: 'E-mail is required.\n' },
    ],
  }

  const validator = new Validator(descriptor)

  try {
    await validator.validate(req.body.user)
  } catch ({ errors }) {
    return next({ message: errors.map(e => e.message).join('') })
  }

  try {
    let createdUser = new User(req.body.user)

    const user = await User.register(createdUser, req.body.user.password)

    req.session.userId = user._id
    req.session.save()

    res.sendStatus(200)
  } catch (e) {
    return next(e)
  }
})

router.post(
  '/session',
  preventLoginForLoggedInUsers,
  passport.authenticate('local', {
    failWithError: true,
  }),
  async (req, res) => {
    res.send(req.user)
  },
  (err, req, res, next) => {
    if (err.status != 401) return next(err)

    next(
      new Error('The username and password you provided did not match out records. Please double-check and try again.')
    )
  }
)

router.get('/session', (req, res) => {
  res.send(req.user)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  res.sendStatus(200)
})

module.exports = router
