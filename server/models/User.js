const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true, // У каждого пользователя должен быть уникальный email
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false, // Пароль не будет возвращаться в ответах с сервера
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    select: false,
  },
  subscription: {
    type: String,
    enum: ['Launch', 'Acceleration', 'Flight', null], // Пакеты, которые может иметь пользователь
    default: null,
  },
}, { timestamps: true }); // Добавляет поля createdAt и updatedAt

const User = mongoose.model('User', UserSchema);

module.exports = User;