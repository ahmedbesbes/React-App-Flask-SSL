FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install
RUN npm install react-scripts@1.1.1

ENTRYPOINT [ "npm" ]
CMD ["start", "--port=3000"]