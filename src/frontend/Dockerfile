FROM node:latest as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./
# COPY package.json /usr/src/app/
# RUN npm install react-scripts@1.1.1
ENV PATH  /usr/src/app/node_modules/.bin:$PATH
RUN yarn
RUN yarn build   

FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]