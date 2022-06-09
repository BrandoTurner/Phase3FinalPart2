const mongoose = require('mongoose')
const Schema = mongoose.Schema

const originCountry = new Schema(
  {
    name: { type: String, required: true },
    country_flag: { type: String, required: true },
    motto: {type: String, required: true},
  },
  {timestamp: true},
)

module.exports = mongoose.model('countries', originCountry)