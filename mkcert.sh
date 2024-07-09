#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then

    echo "sll exist's"
else 

openssl genrsa -des3 -passout pass:development -out ca.key 2048 &&
openssl req -x509 -new -nodes -key ca.key -sha256 -passin pass:development -days 1825 -out ca.crt -subj '/CN=dev.localhost Root CA/C=AU/ST=Western Australia/L=Perth/O=Web Development' &&

openssl genrsa -out server.key 2048 &&
openssl req -new -key server.key -out server.csr -subj '/CN=dev.localhost/C=AU/ST=Western Australia/L=Perth/O=Web Development' &&
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 825 -sha256 -passin pass:development -extfile ssl.conf;

npm run install-cert
fi 