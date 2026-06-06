FROM quay.io/qasimtech/emon-md:latest

WORKDIR /root/emon-md

RUN git clone https://github.com/sharifvau/EMON-MD . && \
    npm install

EXPOSE 5000

CMD ["npm", "start"]
