FROM node:latest as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/

ENV PATH  /usr/src/app/node_modules/.bin:$PATH
RUN npm install
RUN npm install react-scripts@1.1.1

ENTRYPOINT [ "npm" ]
CMD ["start", "--port=3000"]
