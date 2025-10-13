# --- Этап сборки (Build Stage) ---
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Собираем оптимизированную версию фронтенда
RUN npm run build

# --- Этап запуска (Production Stage) ---
FROM nginx:stable-alpine

# Копируем собранные файлы из этапа сборки в папку, которую отдает Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]