const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    author: {
      type: 'ObjectId',
      ref: 'User',
      autopopulate: true,
    },
    comment: {
      type: String,
    },
    company: {
      type: 'ObjectId',
      ref: 'Company',
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  }
)

commentSchema.plugin(autopopulate)

module.exports = mongoose.model('Comment', commentSchema)
