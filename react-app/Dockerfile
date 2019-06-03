FROM node:alpine
RUN mkdir -p /app
COPY ./package.json /app/package.json
WORKDIR /app
RUN yarn install
ENTRYPOINT [ "yarn", "start" ]