const mongoose = require('mongoose');

const StatisticsSchema = new mongoose.Schema({
  currency: { type: String, required: true },
  currentMonthRevenue: { type: Number, required: true },
  previousMonthRevenue: { type: Number, required: true },
  workingPizzerias: { type: Number, required: true },
  countries: { type: Number, required: true },
  previousYearRevenue: { type: Number, required: true }
});

module.exports = mongoose.model('Statistics', StatisticsSchema);