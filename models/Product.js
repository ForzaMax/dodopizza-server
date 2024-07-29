const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },   
  price: { type: Number, required: true }, 
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  categoryRu: { type: String, required: true },
  collect: { type: Boolean, default: false },
  isPopular: { type: Boolean, default: false }, 
});

module.exports = mongoose.model("Product", ProductSchema);

