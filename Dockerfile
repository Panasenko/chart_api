FROM node:latest

WORKDIR /usr/src/app

COPY . .

# RUN mkdir image

RUN apt-get update && apt-get upgrade -y

RUN apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y

RUN npm install -g nodemon node-pre-gyp@0.14.0

CMD npm install && nodemon src/index.js

EXPOSE 3000
