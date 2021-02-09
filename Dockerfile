FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

# RUN npm install -g knex
RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]
