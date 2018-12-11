const mongoose = require('mongoose')

const url = 'mongodb://nobowling:AjquCuH5NdtpDZ4@ds145463.mlab.com:45463/notesdatabase'

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note