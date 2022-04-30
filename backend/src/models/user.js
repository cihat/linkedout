const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
      unique: false,
    },
    username: { type: String, unique: true, required: false },
    email: { type: String, required: true, unique: true },
    isJob: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    sessionId: String,
    previousCompany: {
      type: 'ObjectId',
      ref: 'Company',
      autopopulate: true,
    },
    currentCompany: {
      type: 'ObjectId',
      ref: 'Company',
      autopopulate: true,
    },
    comments: [
      {
        type: 'ObjectId',
        ref: 'Comment',
        autopopulate: true,
      },
    ],
  },
  { timestamps: true }
)

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  passwordField: 'password',
  populateFields: ['name, sessionId'],
})

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
