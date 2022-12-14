FROM node:16.13.0

WORKDIR /Users/peterwei/workspace/coolcookiesnft

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn", "start:prod"]