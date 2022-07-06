FROM node:18.1-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]


