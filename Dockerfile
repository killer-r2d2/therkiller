# Build stage
FROM node:22-alpine AS build

WORKDIR /app

RUN npm install --global npm@10.9.8

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run generate

# Production stage
FROM nginx:alpine

COPY --from=build /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
