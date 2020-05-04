FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get upgrade -y

RUN npm install -g nodemon

CMD npm install && nodemon src/index.js

EXPOSE 3000
