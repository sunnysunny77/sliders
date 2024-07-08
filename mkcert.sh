#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then
    echo "sll exist's"
else 
     openssl genrsa -out ca.key 2048 && openssl req -new -sha256 -key ca.key -out ca.csr -config csr.conf && openssl x509 -req -sha256 -days 730 -in ca.csr -signkey ca.key -out ca.crt && openssl genrsa -out server.key 2048 && openssl req -new -sha256 -key server.key -out server.csr -config csr.conf && openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 3650 -sha256 -extfile cert.conf ; npm run install-cert
fi 