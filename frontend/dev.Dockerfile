FROM node:16-alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN npm install -g npm@latest

RUN npm --force --save install

ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js ./

CMD [ "npm", "run", "serve" ]
