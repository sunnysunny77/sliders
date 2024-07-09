#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then

    echo "sll exist's"
else 
openssl req -x509 -sha256 -days 356 -nodes -newkey rsa:2048 -subj "/CN=dev.localhost/C=AU/L=Perth" -keyout ca.key -out ca.crt
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr -config csr.conf
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256 -extfile cert.conf
npm run install-cert
fi 