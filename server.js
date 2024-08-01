const express = require("express"); // Подключаем модуль express для работы с HTTP-запросами
const mongoose = require("mongoose"); // Подключаем модуль mongoose для работы с MongoDB
const cors = require("cors"); // Подключаем модуль cors для работы с CORS запросами
const path = require("path"); // Подключаем модуль path для работы с путями
const dotenv = require("dotenv").config(); // Подключаем модуль dotenv для работы с переменными окружения

const app = express(); // Инициализируем приложение

app.use(cors()); // Включаем поддержку CORS для всех маршрутов
app.use("/public", express.static(path.join(__dirname, "public"))); // Добавляем путь к папке public. Эта строка определяет статическую директорию /public, из которой будут обслуживаться статические файлы (изображения).

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/pizza-ordering-system" // Подключаемся к MongoDB с использованием переменной окружения MONGODB_URI
  )
  .then(() => console.log("Подключено к MongoDB")) // Выводим сообщение об успешном подключении
  .catch((err) => console.error("Не удалось подключиться к MongoDB", err)); // Выводим сообщение об ошибке

const productRoutes = require("./routes/products"); // Добавляем маршруты продуктов
const statisticsRoutes = require("./routes/statistics"); // Добавляем маршруты статистики

app.use("/products", productRoutes);
app.use("/statistics", statisticsRoutes);

const PORT = process.env.PORT || 5000; // Порт сервера
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
