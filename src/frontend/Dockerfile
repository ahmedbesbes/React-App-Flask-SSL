FROM node:latest as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH  /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app
RUN npm install
RUN npm install react-scripts@1.1.1
RUN npm build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY ../nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
