const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const company = require('./company')
const SChema = mongoose.Schema

const postSchema = new SChema(
  {
    author: {
      type: 'ObjectId',
      ref: 'User',
      autopopulate: true,
    },
    company: {
      type: 'ObjectId',
      ref: 'Company',
      autopopulate: true,
    },
    comment: [
      {
        type: 'ObjectId',
        ref: 'Comment',
        autopopulate: true,
      },
    ],
    likeUser: [
      {
        type: 'ObjectId',
        ref: 'User',
        autopopulate: true,
      },
    ],
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
    },
    content: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 1024,
    },
    isPublic: {
      type: Boolean,
    },
  },
  { timestamps: true }
)

postSchema.plugin(autopopulate)

module.exports = mongoose.model('Post', postSchema)
