const mongoose = require('mongoose')
const originCountry = require('./originCountry')
const Schema = mongoose.Schema



const Recipe = new Schema(
  {
    title: { type: String, required: true },
    origin_country: { type: Schema.Types.ObjectID, ref: 'originCountry', required: true },
    ingredients: [{ type: String, required: true }],
    image: {type: String, required: true},
  },
  {timestamp: true},
)

module.exports = mongoose.model('recipes', Recipe)