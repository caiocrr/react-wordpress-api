FROM node:alpine
WORKDIR /app
RUN chmod 777 /
COPY package.json package.json
RUN yarn install
RUN yarn global add react-scripts
ENTRYPOINT [ "yarn", "start" ]