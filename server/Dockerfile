# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь остальной код бэкенда
COPY . .

# Открываем порт, который мы используем
EXPOSE 5252

# Команда для запуска сервера
CMD ["node", "server.js"]