const Validator = require('async-validator').default
const Post = require('../models/post')

exports.post = async (req, res, next) => {
  const descriptor = {
    title: [
      { required: true, message: 'Title is required.\n' },
      { type: 'string', message: 'Title must be a string.\n' },
      { min: 2, message: 'Title should have a minimum length of 3 characters.\n' },
      { max: 64, message: 'Title should have a maximum length of 200 characters.\n' },
    ],
    content: [
      { required: true, message: 'Content is required.\n' },
      { type: 'string', message: 'Content must be a string.\n' },
      { min: 2, message: 'Content should have a minimum length of 3 characters.\n' },
      { max: 1024, message: 'Content should have a maximum length of 200 characters.\n' },
    ],
    author: [{ required: true, message: 'Author is required.\n' }],
    company: [{ required: true, message: 'Company is required.\n' }],
  }

  const validator = new Validator(descriptor)

  const postRequest = {
    title: req.body.title,
    content: req.body.content,
    author: req.session.userId,
    company: req.body.company,
  }

  try {
    await validator.validate(postRequest)
  } catch ({ errors }) {
    return next({
      message: errors.map(e => e.message).join(''),
    })
  }

  let post = new Post(postRequest)

  try {
    post.save()
    req.user.currentCompany = null
    req.user.previousCompany = post.company
    req.user?.posts.push(post._id)
    await req.user.save()

    res.status(200).send(post)
  } catch (e) {
    return next(e)
  }
}
