FROM node:9.2.1

ENV NODE_PORT=9999 \
    WEBROOT_PATH=/webroot/default/

RUN npm i nodemon -g

RUN mkdir -p $WEBROOT_PATH

WORKDIR $WEBROOT_PATH

RUN npm i

EXPOSE $NODE_PORT

# CMD ['nodemon', 'index.js']
