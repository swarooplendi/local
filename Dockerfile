
FROM nginx:latest
COPY ./dist/local /usr/share/nginx/html
EXPOSE 80
