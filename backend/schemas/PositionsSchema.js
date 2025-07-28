const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  day: String,
  product: String,
  isLoss: Boolean,
});

module.exports = { PositionsSchema }; 