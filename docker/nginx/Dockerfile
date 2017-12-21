FROM nginx:1.13.7-alpine

RUN rm /etc/nginx/conf.d/*
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./site.conf /etc/nginx/conf.d/site.conf

EXPOSE 80
