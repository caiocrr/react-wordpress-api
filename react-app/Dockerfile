FROM node:alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn global add react-scripts
RUN yarn install
RUN yarn build

EXPOSE 80


FROM nginx
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]