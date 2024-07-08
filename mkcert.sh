#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then
    echo "sll exist's"
else 

openssl genrsa -out ca.key 2048 &&
openssl req -x509 -new -nodes -key ca.key -sha256 -days 365 -out ca.crt -subj '/CN=dev.localhost Root CA/C=AU/ST=Western Australia/L=Perth/O=Web Development' &&
openssl req -new -nodes -out server.csr -newkey rsa:4096 -keyout server.key -subj '/CN=dev.localhost/C=AU/ST=Western Australia/L=Perth/O=Web Development' &&
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 730 -sha256 -extfile ssl.conf;
npm run install-cert
fi 