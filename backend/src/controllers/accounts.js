const User = require('../models/user')
const Validator = require('async-validator').default
const passport = require('passport')

exports.findUsers = async (req, res) => {
  res.send(await User.find())
}

exports.register = async (req, res, next) => {
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
}

exports.preventLoginForLoggedInUsers = (req, res, next) => {
  next(req.user && new Error('User is already logged in'))
}

exports.postSession = async (req, res) => {
  res.send(req.user)
}

exports.getSession = async (req, res) => {
  res.send(req.user)
}

exports.deleteSession = async (req, res, next) => {
  await req.logout()

  res.sendStatus(200)
}
