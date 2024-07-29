## Документация API для учебного проекта Dodo Pizza

### Полезные сcылки:

1. [Документация Express.js](https://expressjs.com/ru/guide.html)
2. [Руководство по MongoDB](https://metanit.com/nosql/mongodb/)
3. [Документация Mongoose](https://www.npmjs.com/package/mongoose)

---

### Инструкции по запуску локального сервера DodoPizza

### Шаг 1. Установите MongoDB

**MongoDB** - это база данных, которую мы будем использовать для хранения данных о продуктах и статистике.

1. Перейдите на [MongoDB Community Server Download Center](https://www.mongodb.com/try/download/community).
2. Скачайте и установите MongoDB для вашей операционной системы.
3. Запустите MongoDB сервер. Обычно это делается через командную строку или терминал:
   ```bash
   mongod
   ```

#### Установите MongoDB Compass

**MongoDB Compass** - это графический интерфейс для работы с MongoDB. Он поможет вам визуально управлять базой данных.

1. Перейдите на [MongoDB Compass Download Page](https://www.mongodb.com/try/download/compass).
2. Скачайте и установите MongoDB Compass.

### Шаг 2: Клонирование репозитория

Клонируйте репозиторий проекта с GitHub:

```bash
git clone https://github.com/ForzaMax/dodopizza-server
```

### Шаг 3: Настройка MongoDB и загрузка данных

1. Запустите MongoDB сервер, если он еще не запущен:

```bash
mongod
```

2. Запустите MongoDB Compass и подключитесь к локальному серверу MongoDB (`mongodb://localhost:27017`).

3. Создайте новую базу данных с именем `pizza-ordering-system`.

4. Импортируйте данные из JSON файлов в базу данных:

   - Перейдите в коллекцию `products` и импортируйте данные из файла `data/pizza.products.json`.
   - Перейдите в коллекцию `statistics` и импортируйте данные из файла `data/pizza.statistics.json`.

### Шаг 4: Настройка переменных окружения

1. Создайте файл `.env` в корневой директории проекта.
2. Добавьте в файл следующие строки:

```bash
MONGODB_URI=mongodb://localhost:27017/pizza-ordering-system
```

### Шаг 5: Запуск сервера

1. Запустите сервер:

```bash
npm start
```

2. Сервер должен запуститься на порту 5000. Вы должны увидеть сообщение:

```bash
 Сервер запущен на порту 5000
```

### Шаг 6: Тестирование серверных маршрутов

Для тестирования серверных маршрутов мы будем использовать Postman. Postman — это популярный инструмент для тестирования API, который позволяет отправлять HTTP-запросы и просматривать ответы.

#### 1. Установите Postman

1. Перейдите на [официальный сайт Postman](https://www.postman.com/downloads/).
2. Скачайте и установите Postman для вашей операционной системы.

#### 2. Импортируйте коллекцию Postman

    - Нажмите на кнопку **Import** в верхнем левом углу окна Postman.
    - В открывшемся окне выберите вкладку **File**.
    - Нажмите кнопку **Choose Files** и выберите файл `dodopizza-server.postman_collection.json` из корневой директории проекта.
    - После импорта вы увидите коллекцию `DodoPizza Server` в списке коллекций на левой панели.

### Базовый URL

```
http://localhost:5000
```

---

## Endpoints

#### 1. Получить все продукты

**Эндпоинт**: `/products`

**Метод**: `GET`

**Описание**: Возвращает все продукты.

**Пример ответа**:

```json
[
  {
    "name": "Пицца из половинок",
    "price": 600,
    "description": "Соберите свою пиццу 35 см с двумя разными вкусами",
    "ingredients": [],
    "imageUrl": "/public/images/halfpizzas.webp",
    "category": "pizza",
    "categoryRu": "Пицца",
    "collect": true,
    "isPopular": false
  }
  // ... другие продукты
]
```

---

#### 2. Получить продукты по категории

**Эндпоинт**: `/products/category/:category`

**Метод**: `GET`

**Описание**: Возвращает продукты, отфильтрованные по категории.

**Параметры пути**:

- `:category` (строка) - Категория продуктов (например, `pizza`, `combo`, `snack`, `dessert`, `drink`).

**Пример ответа**:

```json
[
  {
    "name": "Пепперони-сердце",
    "price": 625,
    "description": "Пикантная пепперони, моцарелла, томатный соус",
    "ingredients": ["Пикантная пепперони", "моцарелла", "томатный соус"],
    "imageUrl": "/public/images/pepperoni-heart.webp",
    "category": "pizza",
    "categoryRu": "Пицца",
    "collect": false,
    "isPopular": false
  }
  // ... другие продукты в той же категории
]
```

---

#### 3. Получить продукт по ID

**Эндпоинт**: `/products/:id`

**Метод**: `GET`

**Описание**: Возвращает один продукт по его ID.

**Параметры пути**:

- `:id` (строка) - ID продукта.

**Пример ответа**:

```json
{
  "name": "Пепперони-сердце",
  "price": 625,
  "description": "Пикантная пепперони, моцарелла, томатный соус",
  "ingredients": ["Пикантная пепперони", "моцарелла", "томатный соус"],
  "imageUrl": "/public/images/pepperoni-heart.webp",
  "category": "pizza",
  "categoryRu": "Пицца",
  "collect": false,
  "isPopular": false
}
```

---

#### 4. Получить популярные продукты

**Эндпоинт**: `/products/popular`

**Метод**: `GET`

**Описание**: Возвращает популярные продукты.

**Пример ответа**:

```json
[
  {
    "name": "Нежный лосось",
    "price": 495,
    "description": "Лосось, томаты черри, соус песто, моцарелла, соус альфредо",
    "ingredients": [
      "Лосось",
      "томаты черри",
      "соус песто",
      "моцарелла",
      "соус альфредо"
    ],
    "imageUrl": "/public/images/tender-salmon.webp",
    "category": "pizza",
    "categoryRu": "Пицца",
    "collect": false,
    "isPopular": true
  }
  // ... другие популярные продукты
]
```

---

#### 5. Получить статистику

**Эндпоинт**: `/statistics`

**Метод**: `GET`

**Описание**: Возвращает статистические данные для системы заказа пиццы.

**Пример ответа**:

```json
{
  "currency": "RUB",
  "currentMonthRevenue": 7638415294,
  "previousMonthRevenue": 8189658037,
  "workingPizzerias": 1100,
  "countries": 22,
  "previousYearRevenue": 8189658037
}
```
