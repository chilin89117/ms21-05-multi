FROM node:19-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm install

# use chown to prevent write permission error in /app/logs directory
COPY --chown=node:node . .

# see app.listen() in app.js, used for frontend browser JavaScript to connect to 'localhost'
EXPOSE 80

# prevent write permission error in /app/logs directory
USER node

ENV DBUSER=root
ENV DBPASS=secret

CMD ["npm", "start"]
