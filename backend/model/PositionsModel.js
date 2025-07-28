const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");  // ✅ Fix this import

const PositionsModel = mongoose.model("Position", PositionsSchema);

module.exports = { PositionsModel };
