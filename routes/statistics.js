const express = require('express');
const router = express.Router();
const Statistics = require('../models/Statistics');

// Получить статистику
router.get('/', async (req, res) => {
  try {
    const statistics = await Statistics.findOne(); 
    
    if (!statistics) {
      return res.status(404).json({ message: 'Статистика не найдена' });
    }
    res.json(statistics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
