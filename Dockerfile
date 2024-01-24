FROM node:19-alpine3.18
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN yarn install
COPY tsconfig.json tsconfig.json
COPY . .
RUN yarn build

EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]
