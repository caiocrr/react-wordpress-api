FROM node:alpine
WORKDIR /app
COPY package.json package.json
RUN yarn install
RUN yarn global add react-scripts
ENTRYPOINT [ "yarn", "start" ]