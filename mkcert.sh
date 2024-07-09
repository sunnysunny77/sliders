#!/bin/bash
if [ -e "server.crt" ] && [ -e "server.key" ] ; then
    echo "sll exist's"
else 

openssl req -nodes -newkey rsa:2048 -keyout private.key -out ca.csr -subj '/CN=dev.localhost Root CA/C=AU/ST=Western Australia/L=Perth/O=Web Development' &&
openssl x509 -in ca.csr -out server.crt -req -signkey private.key -days 365 -subj '/CN=dev.localhost/C=AU/ST=Western Australia/L=Perth/O=Web Development' -extfile ssl.conf;
npm run install-cert
fi 