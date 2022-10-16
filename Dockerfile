FROM node:lts-buster-slim

WORKDIR /app

COPY src/package*.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]