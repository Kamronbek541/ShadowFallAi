const express = require('express');
const mongoose = require('mongoose'); // <-- 1. Убедись, что эта строка есть
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- 2. ДОБАВЛЯЕМ КОД ДЛЯ ПОДКЛЮЧЕНИЯ К MONGODB ---
const connectDB = async () => {
  try {
    // Эта строка берет MONGO_URI из твоего .env файла
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB подключена успешно!');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error.message);
    process.exit(1); 
  }
};

connectDB(); // Вызываем функцию подключения

// --- РОУТЫ ---
app.use('/api/auth', require('./routes/authRoutes'));
// --- ЗАПУСК СЕРВЕРА ---
const PORT = process.env.PORT || 5252; 

const server = app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Открой http://localhost:${PORT}/api/test в браузере для проверки.`);
});

// Код для предотвращения немедленного выхода процесса
process.stdin.resume();

function exitHandler(options, exitCode) {
    if (options.cleanup) {
        console.log('Clean exit');
        server.close();
    }
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

process.on('exit', exitHandler.bind(null,{cleanup:true}));
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));