FROM node:latest as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH  /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/
RUN npm install
RUN npm install react-scripts@1.1.1
RUN npm run build   

FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]