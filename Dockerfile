FROM node:16.18-alpine3.15 as builder

WORKDIR /app

COPY ./package.json ./

RUN yarn install

COPY . .

FROM node:16.18-alpine3.15 as runner

WORKDIR /app

COPY --from=builder /app .
