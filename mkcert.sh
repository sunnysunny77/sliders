#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then

    echo "sll exist's"
else
openssl genrsa -des3 -passout pass:developemnt -out ca.key 2048 &&
openssl req -x509 -new -nodes -key ca.key -passin pass:developemnt -sha256 -days 1024 -out ca.crt  -subj '/CN=dev.localhost Root CA/C=AU/ST=Western Australia/L=Perth/O=Web Developers/OU=Dev' &&
openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config csr.conf &&
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -passin pass:developemnt -CAcreateserial -out server.crt -days 500 -sha256 -extfile cert.conf;
npm run install-cert
fi 