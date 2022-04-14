const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Schema = mongoose.Schema

const companySchema = new Schema(
  {
    comment: {
      type: 'ObjectId',
      ref: 'Comment',
      autopopulate: true,
    },
    founder: {
      type: 'ObjectId',
      ref: 'User',
      autopopulate: true,
    },
    employeeNumber: Number,
    name: String,
  },
  { timestamps: true }
)

companySchema.plugin(autopopulate)

module.exports = mongoose.model('Company', companySchema)
