FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build --noninteractive
EXPOSE 3000
CMD [ "yarn", "run", "start:prod" ]