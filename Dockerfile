FROM nginx:alpine

COPY --chown=nginx:nginx index.html styles.css script.js data.js icon.svg faculty-icon.png /usr/share/nginx/html/
