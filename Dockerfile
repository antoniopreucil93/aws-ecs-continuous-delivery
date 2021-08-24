FROM node:13.14.0

WORKDIR /app

COPY ./package.json ./

ENV ARG VARIABLES

RUN npm install

COPY . .

RUN npm run build

RUN ./node_modules/typescript/bin/tsc

EXPOSE 3000

CMD ["node", "dist/main.js"]
