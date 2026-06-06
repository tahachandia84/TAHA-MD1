FROM quay.io/qasimtech/emon-md:latest

WORKDIR /root/emon-md

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start:optimized"]
