FROM nginx
COPY nginx.conf /etc/nginx/conf.d/
COPY cert/nginx.crt /etc/ssl/nginx.crt
COPY cert/nginx.key /etc/ssl/nginx.key
CMD ["nginx", "-g", "daemon off;"]