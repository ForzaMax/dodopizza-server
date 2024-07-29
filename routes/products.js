const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Получить все продукты
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Получить популярные продукты
router.get("/popular", async (req, res) => {
  try {
    const popularProducts = await Product.find({ isPopular: true });
    res.json(popularProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Получить продукты по категории
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category: category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Получить продукт по ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Продукт не найден" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
