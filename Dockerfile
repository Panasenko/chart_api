FROM node:latest

LABEL  maintainer="panasenkomaksim@gmail.com"

WORKDIR /usr/src/app

COPY package.json .

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y imagemagick librsvg2-dev librsvg2-bin

RUN mkdir src && touch src/index.js

RUN npm install -g nodemon

CMD npm install && nodemon src/index.js

EXPOSE 3000
