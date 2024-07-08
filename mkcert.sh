#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then
    echo "sll exist's"
else 
openssl genrsa -out server.key &&
openssl req -new -key server.key -out server.csr -config csr.conf &&
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt -extensions req_ext -extfile csr.conf &&
openssl req -in self-ssl.csr -text -noout &&
openssl x509 -in self-ssl.crt -text -noout;
npm run install-cert
fi 