const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail'); // Импортируем нашу утилиту
const jwt = require('jsonwebtoken'); 

// @route   POST /api/auth/login
// @desc    Вход пользователя
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide email and password' });
        }

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Проверяем, подтвержден ли аккаунт
        if (!user.isVerified) {
            return res.status(401).json({ success: false, message: 'Please verify your email first' });
        }

        // Сравниваем пароли
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        
        // Создаем JWT токен
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        
        // Убираем пароль из объекта пользователя перед отправкой
        user.password = undefined;

        res.status(200).json({
            success: true,
            token,
            user, // Отправляем данные пользователя
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});


router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // ... (проверки на существующего пользователя)

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 1. Генерируем 6-значный код
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // 2. Создаем пользователя с кодом
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      verificationCode: verificationCode, // Сохраняем код в базу
    });

    // 3. Отправляем email
    try {
      await sendEmail({
        to: user.email,
        subject: 'Email Verification - Shadowfall AI',
        text: `<h1>Welcome to Shadowfall AI!</h1><p>Your verification code is: <strong>${verificationCode}</strong></p><p>This code will expire in 10 minutes.</p>`,
      });

      res.status(201).json({ 
        success: true, 
        message: `User registered. Verification code sent to ${user.email}` 
      });

    } catch (error) {
      console.error("Email sending error:", error);
      // Если email не отправился, можно откатить создание пользователя или пометить его для повторной отправки
      return res.status(500).json({ success: false, message: 'User registered, but email could not be sent.' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// ---> ДОБАВЬ ЭТОТ НОВЫЙ РОУТ <---
// @route   POST /api/auth/verify
// @desc    Верификация email с помощью кода
router.post('/verify', async (req, res) => {
    try {
        const { email, code } = req.body;

        if (!email || !code) {
            return res.status(400).json({ success: false, message: 'Please provide email and code' });
        }

        // Ищем пользователя и его код. `select('+verificationCode')` нужно,
        // потому что в модели мы указали, что это поле не должно возвращаться по умолчанию.
        const user = await User.findOne({ email }).select('+verificationCode');

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Проверяем, совпадает ли код
        if (user.verificationCode !== code) {
            return res.status(400).json({ success: false, message: 'Invalid verification code' });
        }

        // Если все верно, обновляем пользователя
        user.isVerified = true;
        user.verificationCode = undefined; // Удаляем код, он больше не нужен
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Account verified successfully! You can now sign in.',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;